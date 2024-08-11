import {
	App,
	FileManager,
	TFile,
	Vault,
} from "obsidian";


import { SGContentItem, SGTask } from "./types";
import { v4 as uuidv4 } from 'uuid';
import slugify from "slugify";
import { IMainController } from "./main.ctrlr";

export const slug = (title: string) : string => {

	const options = {
		lower: true, // Convert to lowercase
		remove: /[']/g, // Remove apostrophes
	  };

	return slugify(title, options);
}

export const parseNote =  async (main: IMainController, file: TFile) : Promise<SGContentItem>=> {

	const rawFile = await app.vault.read(file);

	let contentItem = await parseFrontmatter(file, app.fileManager);

	if (file.name != undefined) contentItem.title = file.name.replace(/\.[^/.]+$/, "");

	contentItem.slug = slug(contentItem.title);

	// title is first header of body 
	let [ content, title ] = extractTitle(rawFile);

	contentItem.content = content;

	if (title != undefined && title != "") contentItem.title = title;

	// let publicationLink = contentItem.publication;
	
	// contentItem.publication = await followLink("config", publicationLink, main.plugin.app);
	// contentItem.author = await followLink("config", contentItem.author, main.plugin.app);

	return contentItem;
}




const extractTitle = (raw: string) : [string, string | undefined] => {

	let title: string = "";
	let content = raw.split("---")[2].trim();

	if (content.slice(0,2) == '# ') {

		const parts = content.split("\n");
		title = parts[0].replace("# ","").trim();
		parts.shift();
		content = parts.join("\n").trim() 
	}

	return [content, title]

}

const parseFrontmatter = async (file: TFile, fileManager: FileManager) : Promise<SGContentItem>=> {

	let contentItem: SGContentItem;
	let content: string;

	return new Promise ( async (resolve, reject) => {

		await fileManager.processFrontMatter(file, (frontmatter) => {

			if (frontmatter.sgId == undefined) {
				frontmatter.sgId = uuidv4().replace('-','');
			}

			// possibly check if content was modified ??? 
			const now = new Date().toJSON().split(".")[0];
			frontmatter.modified_date = now;
			if (frontmatter.creation_date == undefined) frontmatter.creation_date = now;

			contentItem = {
				id: frontmatter.sgId,
				post_type: frontmatter.post_type,
				args: frontmatter.args,
				tags: frontmatter.tags != undefined ? frontmatter.tags : [],
				categories: frontmatter.categories != undefined ? frontmatter.categories : [],
				parent: frontmatter.parent != undefined ? frontmatter.parent : '0',
				creation_date: frontmatter.creation_date,
				modified_date: frontmatter.modified_date,
				thumbnail: frontmatter.thumbnail,
				title: "",
				slug: "",
				content: ""
			}

			resolve(contentItem);
		})

	})
	
}

export const followLink = async (key: string, linkText: string, app: App) : Promise<string> => {

	return new Promise ( async(resolve,reject) => {

		let files = app.vault.getMarkdownFiles();
		let file = files.find( (f) => f.basename == linkText.replace("[","").replace("[","").replace("]","").replace("]",""));

		if(file != undefined) {
			
			await app.fileManager.processFrontMatter(file, (frontmatter) => {
				resolve(frontmatter[key])
			})
			
		} else {
			
			throw Error(`link to ${key} not specified or found`)
		}

	});	 
	
}

export const saveRoot = async (main: IMainController, cid: string , file: TFile) : Promise<void> => {

	// find file for publication 

	let publication = "";

	await main.plugin.app.fileManager.processFrontMatter(file, (frontmatter) => {
		publication = frontmatter["publication"].replace("[","").replace("[","").replace("]","").replace("]","");
	})

	let pubfile = main.plugin.app.vault.getMarkdownFiles().find( (f) => f.basename == publication);
	if(pubfile != undefined) {
		await main.plugin.app.fileManager.processFrontMatter(pubfile, (frontmatter) => {
			
			// do some check first -- QmYeo7FUc9B5GmJQaqUHnqyJpi6BmwxsfYyNYFJ8J9ndVY
			// frontmatter["archive"] = cid;
		})
	} else {
		throw Error("failed to include archive in publication")
	}

	
}

export const saveRootDirectly = async (cid: string , url: string, pubName: string, app: App) : Promise<[string,string]> => {


	const pubfile = app.vault.getFiles().find( f =>  f.basename == pubName + '.publication');

	if(pubfile != undefined) {
		await app.fileManager.processFrontMatter(pubfile, (frontmatter) => {
			frontmatter["archive"] = cid;
		})
	} else {
		throw Error("failed to include archive in publication")
	}

	return [cid, url];
}


export const includeUrl = async (main: IMainController, url: string , file: TFile) : Promise<void> => {

	await main.plugin.app.fileManager.processFrontMatter(file, (frontmatter) => {
		frontmatter["url"] = url;
	})

}


export const createTask = async (contentItem: SGContentItem): Promise<SGTask> =>  {

	// do slug check on db! 
	// is dit nog wel nodig? of enkel de cid? 

	const task  = {
			slug: slugify(contentItem.title),
			payload: JSON.stringify(contentItem),
			post_type: contentItem.post_type
		}


    return task
}



