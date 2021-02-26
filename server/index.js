import path from 'path'
import fs from 'fs'

import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'

import App from '../src/App'

import '../src/index.css';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const styles = flushToHTML();
    
    // const indexFile = path.resolve('./build/index.html');
    // fs.readFile(indexFile, 'utf8', (err, data) => {
    //     if(err) {
    //         console.error('Something went wrong: ', err);
    //         return res.status(500).send('Better luck next time!');
    //     }

    //     return res.send(
    //         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    //     )
    // })

    const html = `<!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="description" content="Web site created using create-react-app"/>
                <link rel="manifest" href="/manifest.json"/>
                <title>React App</title>
                ${styles}
            </head>
            <body>
                <div id="root">${app}</div>
            </body>
        </html>
    `
    res.end(html)
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});