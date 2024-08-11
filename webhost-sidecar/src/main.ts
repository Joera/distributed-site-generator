import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: '500mb' }))
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 500000 }));
app.use(cors())

const port = 3099;

app.post('/unpack', async (req, res) => {

    res.send(
     
    );
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


