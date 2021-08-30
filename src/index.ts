import express from "express";
import http from "http";

import routesLoader from "./loaders/routesLoader";
import { port } from "./utils/constants";

const app = express();
const server = http.createServer(app);

app.get("/", async (_, res) => {
    res.send("<h1>Welcome to Genshin API</h1>");
});

routesLoader(app);

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

server.listen(port, () => console.log("Listening at port %d", port));
