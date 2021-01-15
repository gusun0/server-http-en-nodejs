const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

// creando el servidor
const server = http.createServer((req,res) => {
 // res.writeHead(200,{'Content-Type':'text/plane'});
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.readFile('index.html',(error,data) => {
     if(error){
	     res.writeHead(404);
	     res.write('archivo no encontrado!!!');
     }else{
	     res.write(data);
     }
    res.end();
  });
  //res.write('Hola desde el servidor');
});

server.listen(port,host, () => {
 console.log('servidor funcionando en',host,port);
});

