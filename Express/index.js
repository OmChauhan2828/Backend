const express = require('express');
const app = express();
console.log(app);

let port = 3000;

app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
});