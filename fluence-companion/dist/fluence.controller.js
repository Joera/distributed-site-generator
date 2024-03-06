import { Fluence } from "@fluencelabs/js-client";
import { bulkUpload, bulkRender, gatherKubos, goAndFetch, renderOnDSG } from "./_aqua/main";
export class FluenceController {
    client;
    constructor() { }
    randomLocal() {
        const local_network = [
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
        ];
        const i = 2;
        return local_network[0];
    }
    async init() {
        return await Fluence.connect(this.randomLocal(), {});
    }
    async gatherKubos() {
        await this.init();
        return await gatherKubos({ ttl: 30000 });
    }

    async goAndFetch() {
        await this.init();
        return await goAndFetch({ttl:30000})

    }
    async renderOnDSG(body) {
        await this.init();
        let response = await renderOnDSG(body.task, body.archive_cid, { ttl: 60000 });
        console.log(response);
        return response;
    }
    async bulkUpload(body) {
        console.log(body.tasks.length);
        await this.init();
        return await bulkUpload(body.tasks, { ttl: 2000000 });
    }
    async bulkRender(body) {
        console.log(body);
        await this.init();
        return await bulkRender(body.publication_cid, body.post_type, body.archive_cid, { ttl: 2000000 });
    }
}
//# sourceMappingURL=fluence.controller.js.map