"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var CourseRequestSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    githubRepo: {
        type: String,
        required: true
    }
});
var CourseRequestDbModel = mongoose.model('RequestCourse', CourseRequestSchema);
exports.default = CourseRequestDbModel;
//# sourceMappingURL=CourseRequestDbModel.js.map