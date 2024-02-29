import { Database} from "@tableland/sdk";
import { Wallet, getDefaultProvider } from "ethers";
import { TuContentItem } from "./table.js";
import { Creds, Payload } from "./types.js";
import 'dotenv/config'

export class DbController {


    constructor(){}

    init(creds?: Creds) {

        if (process.env.KEY != undefined && process.env.GATEWAY != undefined) {

            console.log(process.env)
        
            const wallet = new Wallet(process.env.KEY);
            const provider = getDefaultProvider(process.env.GATEWAY);
            const signer = wallet.connect(provider);

            return new Database({ signer });

        } else {

            throw Error("needed env vars not found")
        }
    }

    async create_table(body: Payload)  {

        const db = this.init();

        // move to service 
        // per publication!
        const prefix: string = "tusg_content";
        const { meta: create } = await db
            .prepare(
                `CREATE TABLE ${prefix} (
                    id text primary key, 
                    slug text,
                    _owner text, 
                    publication text,
                    author text,
                    post_type text,
                    tags text,
                    categories text,
                    parent text,
                    creation_date text,
                    modified_date text,
                    content text
                );
            `)
            .run();
            
            await create.txn?.wait();

            const tableName = create.txn?.names[0] ?? ""; 

            console.log(tableName);

    }

    async mutate_table() { }

    async write_record(body: Payload) {

        const db = this.init();

        const records = await db.prepare(`SELECT * from ${body.table} WHERE id = '${body.content.id}';`).all();

        if (records.results.length <  1) {

            await this.insert(db,body);
        
        } else {

            await this.update(db,body);
        }

    }

    async query(body: Payload) {

        if (body.query == undefined ) return;

        const db = this.init();

        return await db.prepare(body.query).all();
    }


    async insert(db: Database, body: any) : Promise<string> {

        const c = body.content;

        const { meta: insert } = await db
        .prepare(body.sql_query)
        .bind(c.id, c.slug,c._owner,c.publication,c.author, c.post_type, c.tags,c.categories,c.parent,c.creation_date,c.modified_date,c.content)
        .run();

        console.log('insert');
        let res = await insert.txn?.wait();
        console.log(res);

        return "TL: item inserted"

    }

    async batch_insert(body: Payload) {

        if (body.sql_query == undefined ) return;

        const db = this.init();

        let statement = db.prepare(body.sql_query);

        const c = body.content;

        await db.batch([
            statement.bind(c[0]),
            // etc.. 
        ]);

        const { meta: insert } = await db
        .prepare(body.sql_query)
        .bind(c.id, c.slug,c._owner,c.publication,c.author, c.post_type, c.tags,c.categories,c.parent,c.creation_date,c.modified_date,c.content)
        .run();

        console.log('insert');
        let res = await insert.txn?.wait();
        console.log(res);

    }

    async update(db: Database, body: any) : Promise<string> {

        const c = body.content;

        const { meta: insert } = await db
        .prepare(`UPDATE ${body.table} SET slug = ?, publication = ?, author = ?, post_type = ?, tags = ?, categories = ?, parent = ?, creation_date = ?, modified_date = ?, content = ? WHERE id = ?`)
        .bind(c.slug, c.publication,c.author, c.post_type, c.tags, c.categories, c.parent, c.creation_date, c.modified_date, c.content, c.id)
        .run();

        console.log('update');
        let res = await insert.txn?.wait();
        console.log(res);

        return "TL: item updated"

    }

}