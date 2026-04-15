import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api', (req, res, next) => {
    const {message} = req.body;
    console.log(`${message}`); 
    res.json({ status: 'ok', received: message });
    next();
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});