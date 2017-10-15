import express from 'express';
import bodyParser from 'body-parser';

import fs from 'fs';
// import fs from 'path';
import https from 'https';
import httpsRedirect from 'express-https-redirect';

import path from 'path';
import cors from 'cors';
import graphQLHTTP from 'express-graphql';
import schema from './graphqlSchema'

import upload from './upload';
import { authApp } from './authentication';

function resolve(dir) {
    return path.join(__dirname, dir)
}

//------------------------------------------
// Constants
//------------------------------------------
const PORT = 8000;
const IMAGES_URL = '../public/uploads/images/';
const privateKey = fs.readFileSync('/home/jonathan/Documents/graphql/server/ssl/test.key')
const certificate = fs.readFileSync('/home/jonathan/Documents/graphql/server/ssl/test.crt')
const credentials = {key: privateKey, cert: certificate}
//------------------------------------------

const app = express();

//------------------------------------------
// Configuration
//------------------------------------------

app.use('/', httpsRedirect(true));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies
// allow Cross-Origin Resource Sharing (CORS)
// required when using webpack dev server to serve the client
app.use(cors());

// serve images statically
app.use('/images', express.static(resolve(IMAGES_URL)));
app.use('/', express.static(resolve('../dist')));

authApp(app);
upload(app);

// GraphqQL server route
app.use('/graphql', graphQLHTTP(req => {
    return {
        context: {
            req
        },
        schema,
        graphiql: true
    }
}));

// serve the index page if nothing else fits (fix for client side routing)
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(resolve('../dist/index.html')));
});

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});

let httpsServer = https.createServer(credentials, app)

// start server
httpsServer.listen(443, () => {
    console.log(`server listening on https://localhost`);
});
