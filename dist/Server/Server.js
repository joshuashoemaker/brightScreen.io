"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var body_parser_1 = require("body-parser");
var apiRoute_1 = require("../Routes/apiRoute.js");
var Server = /** @class */ (function () {
    function Server() {
        this.createApp();
        this.createRoutes();
        this.setOptions();
    }
    Server.prototype.createApp = function () {
        this.app = express();
        this.app.use(body_parser_1.json());
        this.app.use(express.static(path.join(process.cwd(), '/web/build')));
        this.connectToDatabase();
    };
    Server.prototype.createRoutes = function () {
        this.app.use('/api', apiRoute_1.default);
        this.app.use('/', function (request, response, next) {
            response.sendFile(path.join(process.cwd(), './web/build/index.html'));
        });
    };
    Server.prototype.connectToDatabase = function () {
        mongoose.connect(process.env.DBCONNECTION, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function () {
            console.log('Connected to Database');
        });
    };
    Server.prototype.setOptions = function () {
        this.app.use(function (request, response, next) {
            response.header('Access-Control-Allow-Origin', request.headers.origin || '*');
            response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,HEAD,DELETE,OPTIONS');
            response.header('Access-Control-Allow-Headers', 'Content-Type,x-requested-with');
            next();
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=Server.js.map