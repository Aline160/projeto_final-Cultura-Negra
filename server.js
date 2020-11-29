const app = require('./src/app');
const port = process.env.port;

app.listen(port, () =>{
    console.log (`Executando em http://localhost: ${port}`);
});