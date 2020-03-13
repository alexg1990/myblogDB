import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.get('/users', (req, res) => res.send("Hello World"));
app.post('/users', (req, res) => res.send("Post"));
app.put('/users/:userId', (req, res) => res.send(`put ${req.params.userId}`));
app.delete('/users/:usedId', (req, res) => res.send(`delete ${req.params.userId}`));

app.listen(process.env.PORT, () => console.log("Listening on port 3000"));

console.log('Hello Node.js project.');