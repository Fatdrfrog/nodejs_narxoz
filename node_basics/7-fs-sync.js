const { writeFileSync, readFileSync } = require("fs");

///
writeFileSync("./marvel.txt", "\nI am Groot!\n", { flag: "a" });

const myTxtFileContent = readFileSync("./marvel.txt", "utf-8");

console.log(myTxtFileContent);
