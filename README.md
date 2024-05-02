cd fluence-companion 
npm run start

obsidian-plugin
when dev .. run npm run dev and reload obsidian

deploy updated workers
cd fluence
nvm use 18.19
rm -rf .fluence/workers.yaml
fluence workers deploy

in other tab
cd ../fluence-companion 
npm run aqua:compile
npm run start

docker exec -ti fluence-ipfs-1 ipfs bootstrap add /ip4/143.176.14.172/tcp/15001/p2p/12D3KooWFuS2rgxuzoNSmknDDYiEvp4BNZNgPi25AkadLakiajo3

/publications/unamore/archive.sh

./pinata upload ~/Documents/dsg/publications/unamore/public/



## Overview of parts involved 

![arch](./devops/drawings/dsg-architecture.png)

### data flows (december 2023)

![arch](./devops/drawings/DSG2.png)

### diagram (october 2023) 

![arch](./devops/drawings/DSG.png)

