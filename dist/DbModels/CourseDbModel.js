"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    repo: {
        type: String,
        required: true
    }
});
var CourseDbModel = mongoose.model('Course', CourseSchema);
exports.default = CourseDbModel;
//# sourceMappingURL=CourseDbModel.js.map