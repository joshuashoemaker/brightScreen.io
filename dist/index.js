"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var dotenv = require("dotenv");
var Server_1 = require("./Server/Server.js");
function main() {
    dotenv.config();
    var port = normalizePort(process.env.PORT || '5000');
    var webService = createServer();
    webService.listen(port, function () {
        console.log("Server is listening on " + port);
    });
}
function createServer() {
    var server = new Server_1.default();
    return http.createServer(server.app);
}
function normalizePort(port) {
    if (typeof port === 'string')
        return parseInt(port, 10);
    if (port >= 0)
        return port;
    else
        return 0;
}
main();
//# sourceMappingURL=index.js.map