var http = require("http");
var port=8081


const httpServer = http.createServer(handleServer);



function handleServer(req, res) {
if (req.url == '/') {
	res.writeHead(200, { 'Content-Type': 'text/html' });  
	res.write(`<h1>hello welcome to home page</h1>`);
	res.end();

	
}
else if (req.url == "/welcome") {
	
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write('Welcome to Dominos!');
	res.end();

}
else if (req.url == "/contact") {
	
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.write(JSON.stringify( { phone: '18602100000',   email: 'guestcaredominos@jublfood.com' }));  
	res.end(); 

}
else
{
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.write('Invalid Request!');
res.end();}
}

httpServer.listen(port,()=>{
	console.log(`App listening on port ${port}!`)
})
module.exports = httpServer;