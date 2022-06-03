import bodyParser from "body-parser";
import express from "express";
import { getProfile } from "./generator";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
    limit: "10mb",
    type: "application/json",
}));

app.get('/', (req: express.Request, resp: express.Response, next: express.NextFunction) => {

    const phone = req.query.phoneFormatted || null;

    const formattedPhone =  (phone) ? true : false;
    const domain = req.query.domain;
    const domainName = (domain) ? domain.toString() : "local.priv";

    const result = getProfile(formattedPhone, domainName);

    resp.json(result);
});



app.listen(port, () => {
    console.log(`API listening on port ${port}`)
})

