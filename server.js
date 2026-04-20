import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { initDb } from './database/database.js';

import pageRouter from "./routers/pages.js";
import apiRouter from "./routers/api.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

await initDb()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); 

app.use("/", pageRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000/`);
});