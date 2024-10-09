const express = require('express');
const app = express();
const cors =  require('cors');
const bodyParser = require('body-parser');
const router = require('./routes')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const port = 3030;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})