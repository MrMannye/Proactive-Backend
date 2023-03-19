import express from 'express'
import cors from 'cors'
import { routes } from './network/routes';

const app = express();
const PORT = 8080;

app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));

routes(app);

app.listen(PORT, () => {
    console.log("Escuchando en puerto 8080");
})