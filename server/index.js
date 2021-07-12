const express = require('express')
const path = require('path');
const port = process.env.PORT || 3000;


//app
const app = express();


const destinationDir = path.join(__dirname,'../dist');
app.use(express.static(destinationDir));

app.get('' , (req,res) => {
    res.sendFile(path.join(destinationDir,'index.html'))
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
