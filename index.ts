import express from 'express'
import cors from 'cors'
import { routes } from './network/routes';

const app = express();

app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));

routes(app);

app.listen(process.env.PORT || 8080, () => {
    console.log("Escuchando en puerto 8080");
})