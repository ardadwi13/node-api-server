const express = require('express');
const port = 4000

const app = express();

app.use(() => {
    console.log('servver runnning....')
})

app.listen(port);