"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var csv_parse_1 = require("csv-parse");
function readCsv(isSilent) {
    if (isSilent === void 0) { isSilent = true; }
    var filePath = path.resolve(__dirname, "fertility.csv");
    var content = [];
    fs.createReadStream(filePath)
        .pipe((0, csv_parse_1.parse)({ delimiter: ',', from_line: 2 }))
        .on("data", function (row) {
        content.push({
            region: row[0],
            country: row[1],
            fertility: row[2],
            rankWiki: row[3],
            rankPrg: row[4],
            pop: row[5],
            GDP_PPP: row[6]
        });
    })
        .on("end", function () {
        if (!isSilent)
            console.log("Finished loading data");
    })
        .on("error", function (error) {
        if (!isSilent)
            console.log(error.message);
    });
    return content;
}
