import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(express.json());
// app.use(express.bodyParser({limit: '50mb'}));
app.use(bodyParser.json({ limit: '500mb' }))
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 500000 }));
app.use(cors())

const port = 3099;

import { FluenceController} from './fluence.controller';

const fluence = new FluenceController();


app.post('/render', async (req, res) => {

  try {

    res.send(
      await fluence.renderOnDSG(req.body)
    );

  } catch (err) {
    
    res.json(err)
  }
});

app.post('/bulk_upload', async (req, res) => {

  try {

    res.send(
      await fluence.bulkUpload(req.body)
    );

  } catch (err) {
    
    res.json(err)
  }
});

app.post('/bulk_render', async (req, res) => {

  try {

    res.send(
      await fluence.bulkRender(req.body)
    );

  } catch (err) {
    
    res.json(err)
  }
});



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


