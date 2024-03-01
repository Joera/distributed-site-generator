import { App, FileManager, FileSystemAdapter, Menu, Notice, TAbstractFile, TFile, TFolder, Vault, Workspace } from 'obsidian';
import { Settings } from './settings';

import * as E from "fp-ts/lib/Either";
import { Lazy, pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/lib/TaskEither";
import { SGFile, SGTask } from './types';
import { _bulkUpload, _bulkRender, gatherKubos } from './note/fluence';
import { DSGPublicationInput, _parsePublication, insertPubCid } from './publication/note';
import { DSGPublication, publicationConfig, upload, uploadAndMerge } from './publication/config';

import { readdirSync, statSync } from 'fs';
import { prepareNote } from './note.controller';
import { isLeft, isRight } from 'fp-ts/lib/Either';
import { cars } from './publication/ipfs-car';
import { followLink, saveRoot, saveRootDirectly } from './note/note';
import { localhost } from './note/host';

const TEthunk = <A>(f: Lazy<Promise<A>>) => TE.tryCatch(f, E.toError);

const log =
	(msg: string) =>
	<A>(a: A) => {
		console.log(msg);
		return a;
	};


export class PublicationController {

    instructor() {}

    update(app: App, file: TAbstractFile) {

        if (!("extension" in file)) {
            return;
        }
 			    
        return pipe(
            file,
            TE.fromNullable(new Error("File not found")),
            TE.chain(parsePublication(app.vault)),
            TE.chain(createCars()),
            TE.chain(createConfig()),
            TE.chain(uploadConfig(app)),
            TE.match(	
                (e) => notify(e, "failed to update publication"),
                () => notify(undefined, "publication has been updated")
            ),
        )()       
    }

    async bulkUpload(app: App) {

        console.log('readying for bulk upload');

        function deepGetDirectories(distPath: string) {
            return readdirSync(distPath).filter( (file) =>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {
                return statSync(distPath + '/' + file).isDirectory();
            }).reduce((all, subDir) => {
                return [...all, ...readdirSync(distPath + '/' + subDir).map(e => subDir + '/' + e)]
            }, []);
        }

        const pubName = "unamore";
        const adapter = app.vault.adapter as FileSystemAdapter;
		const basePath = adapter.getBasePath();
        const path =  basePath + "/" + pubName;

        let tasks: SGTask[] = [];
        const fileNames = deepGetDirectories(path);

        const kubos = await gatherKubos();

        for (let fileName of fileNames) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

            const file = await app.vault.getAbstractFileByPath(pubName + "/" + fileName);

            // do validation on publication + author e.a. 

            if (file != null && file.name.indexOf(".md") > -1) {

                const possibleTask = await pipe(
                    file,
                    TE.fromNullable(new Error("File not found")),
                    TE.chain(prepareNote(app, kubos)),
                    TE.chain(([ file, task, archive_cid]) => TE.right(task))
                )();

                if(isRight(possibleTask)) tasks.push(possibleTask.right)
                if(isLeft(possibleTask)) console.log(possibleTask.left);

            }
        }
        
        console.log(tasks);
    
        const res = await _bulkUpload(tasks)
        
        console.log(res);
    }

    async bulkRender(pubName: string, post_type: string, app: App) {

        console.log('readying for bulk render');

        let publicationLink = pubName + ".publication";
	
        const publication_cid = await followLink("config", publicationLink, app);
        const archive_cid = await followLink("archive", publicationLink, app);

        const new_archive_cid = await _bulkRender(publication_cid, post_type, archive_cid);

        if(new_archive_cid == undefined) {
			throw Error ("empty data returned ")
		}

        await saveRootDirectly(new_archive_cid, "", pubName, app);
        await localhost(new_archive_cid, "")
        
      
    }
}

const parsePublication = (vault: Vault) => 
	(file: SGFile) : TE.TaskEither<Error,DSGPublicationInput> => 
		pipe(
			TE.right(file),
			TE.chain((file) => TEthunk(() => _parsePublication(file, vault))),
			TE.chain((pubInput) => TE.right(pubInput))
		);

const createCars = () => 
	(pubInput: DSGPublicationInput) : TE.TaskEither<Error,DSGPublicationInput> => 
		pipe(
			TE.right({}),
			TE.chain(() => TEthunk(() => gatherKubos())),
			TE.chain((kubos) => TEthunk(() => cars(pubInput, kubos))),
		);
const createConfig = () => 
	(input: DSGPublicationInput) : TE.TaskEither<Error,DSGPublication> => 
		pipe(
			TE.right(input),
			TE.chain((input) => TEthunk(() => publicationConfig(input))),
		);

const uploadConfig = (app: App) => 
	(pub: DSGPublication ) : TE.TaskEither<Error,string> => 
		pipe(
			TE.right({}),
			TE.chain(() => TEthunk(() => gatherKubos())),
			TE.chain((kubos) => TEthunk(() => upload(pub, kubos))),
			TE.chain((cid) => TEthunk(() => insertPubCid(app.workspace, cid, app.fileManager))),
		);
	
const notify = (e: Error | undefined, msg: string) => {
	console.log(msg);

	if (e) {
		console.error(e);
	}

	new Notice(msg);
};
