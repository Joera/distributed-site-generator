import { Fluence, IFluenceClient, randomKras } from "@fluencelabs/js-client";
import { bulkUpload, bulkRender, renderOnDSG } from "./_aqua/main";

export class FluenceController {

    client;

    constructor(){ }

    randomLocal() {

        const local_network = [
            {
                multiaddr: '/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWP5UnQLWX11pFSMgD78Q9rwq6o2p6hzXTqU74s6z6jBCx',
                peerId: '12D3KooWP5UnQLWX11pFSMgD78Q9rwq6o2p6hzXTqU74s6z6jBCx'
            },
            {
                multiaddr: '/ip4/143.176.14.172/tcp/9991/ws/p2p/12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj',
                peerId: '12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj'
            },
            {
                multiaddr: '/ip4/143.176.14.172/tcp/9992/ws/p2p/12D3KooWP55ziK6EDVvwHAeHx7pb6XEHG6ztzGKrydrCFZciKZ2E',
                peerId: '12D3KooWP55ziK6EDVvwHAeHx7pb6XEHG6ztzGKrydrCFZciKZ2E'
            },
            // {
            //     multiaddr: '/ip4/143.176.14.172/tcp/9993/ws/p2p/12D3KooWCcWYUmbCoMUGeZ7QUjLkXfSa3pKzVG554s56amfsWkm4',
            //     peerId: '12D3KooWCcWYUmbCoMUGeZ7QUjLkXfSa3pKzVG554s56amfsWkm4'
            // }
        ]

        const i = 2;

        return local_network[0];
    }

    async init(): Promise<any>  {
        return await Fluence.connect(this.randomLocal(),{});
    }

    async renderOnDSG(body:any) {

        await this.init();

        let response = await renderOnDSG(
            body.task,
            body.archive_cid,
            { ttl: 150000 }
        )

        console.log(response);

        return response;
    }

    async bulkUpload(body:any) {

        console.log(body.tasks.length);

        await this.init();
        
        return await bulkUpload(
            body.tasks,
            { ttl: 2000000 }
        )
    } 

    async bulkRender(body:any) {

        console.log(body);

        await this.init();
        
        return await bulkRender(
            body.publication_cid,
            body.post_type,
            body.archive_cid,
            { ttl: 2000000 }
        )
    } 
}