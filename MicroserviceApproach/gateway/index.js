const express = require("express")
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

// this is an agreegator act as API gateway for other services
app.use('/customer', proxy('http://localhost:8001'));
app.use('/product', proxy('http://localhost:8002'));
app.use('/', proxy('http://localhost:8003'));


app.listen(8000,()=>{
    console.log(`Product Service is listening on port 8000`)
})