const express = require('express');
const app = express();
console.log(app);

let port = 3000;

app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request received");
//     res.send("this is a basic response");
// });

// routing
app.get('/:username', (req, res) => {
    console.log(req.params);
    res.send("you contacted root path");
});    
