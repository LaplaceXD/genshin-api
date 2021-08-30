import { Express } from "express";
import charactersRoute from "../routes/character.route";

export default function routesLoader(app: Express) {
    app.use("/characters", charactersRoute);
}
