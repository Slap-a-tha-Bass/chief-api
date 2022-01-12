import * as express from "express";
import { serverImports, routesHandler } from "./middlewares";
const app = express();

// app.use(express.static("public"));

serverImports(app);
routesHandler(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
