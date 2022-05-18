const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bfnrf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        client.connect();
        console.log('todo app backend server running properly!');

        const collection = client.db("todo").collection("list");

        /**
         * naming conventions are:
         * app.get('/list', async(req, res))
         * app.get('/list?email=***', async(req, res))
         * app.post('/list', async(req,res))
         * app.delete('/list/:id', async(req, res))
         */

        app.get('/list', async (req, res) => {
            const lists = await collection.find({}).toArray();
            res.send(lists);
        })

        app.delete('/list/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await collection.deleteOne(query);

            res.send(result);
        });

        app.post('/list', async (req, res) => {
            const doc = req.body;
            const result = await collection.insertOne(doc);

            res.send(result);
        });
    } catch {
        client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Todo server started!');
})

app.listen(port, () => {
    console.log('Todo app listening on port', port);
})