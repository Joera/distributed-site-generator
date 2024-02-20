import { Database } from "@tableland/sdk";
import { Creds, Payload } from "./types";
import 'dotenv/config';
export declare class DbController {
    constructor();
    init(creds?: Creds): any;
    create_table(body: Payload): Promise<void>;
    mutate_table(): Promise<void>;
    write_record(body: Payload): Promise<void>;
    query(body: Payload): Promise<any>;
    insert(db: Database, body: any): Promise<void>;
    batch_insert(body: Payload): Promise<void>;
    update(db: Database, body: any): Promise<void>;
}
//# sourceMappingURL=db.controller.d.ts.map