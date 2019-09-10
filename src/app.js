import express, { json } from "express";
import morgan from "morgan";

//rutas personales
import PreloginRoutes from "./routes/prelogin";
import personal from "./routes/personal";
import demografico from './routes/demograficos';

//inisializacion

const app = express();

//midelewares
app.use(morgan("dev"));
app.use(json());

//routes
app.use("/api/prelogin", PreloginRoutes);
app.use("/api/perosnal", personal);
app.use("/api/demografico", demografico);

export default app;
