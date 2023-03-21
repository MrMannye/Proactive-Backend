import express from 'express'
import cors from 'cors'
import { routes } from './network/routes'
import swaggerUI from 'swagger-ui-express'

const app = express();
const PORT = 8080;
const swaggerDoc = require('./swagger.json');

app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));

app.use("/api/docs", swaggerUI.serve,swaggerUI.setup(swaggerDoc))
routes(app);

app.listen(PORT, () => {
    console.log("Escuchando en puerto 8080");
})