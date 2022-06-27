import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";

type CountryFertility = {
    region: string;
    country: string;
    fertility: number;
    rankWiki: number;
    rankPrg: number;
    pop: number;
    GDP_PPP: number;
};

function readCsv(isSilent = true): Array<CountryFertility> {
    const filePath: string = path.resolve(__dirname, "fertility.csv");
    const content: Array<CountryFertility> = [];

    fs.createReadStream(filePath)
        .pipe(parse({ delimiter: ',', from_line: 2}))
        .on("data", function (row) {
            content.push({
                region: row[0],
                country: row[1],
                fertility: <number> row[2],
                rankWiki: <number> row[3],
                rankPrg: <number> row[4],
                pop: <number> row[5],
                GDP_PPP: <number> row[6]
            });
        })
        .on("end", function () {
            if (!isSilent) console.log("Finished loading data");
        })
        .on("error", function (error) {
            if (!isSilent) console.log(error.message);
        });
    return content;
}