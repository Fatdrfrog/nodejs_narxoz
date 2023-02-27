const { readFile, writeFile } = require("fs").promises;

// const util = require("util");

// const promisifiedRead = util.promisify(readFile);
// const promisifiedWrite = util.promisify(writeFile);

// writeFile("./dc_p.txt", "Batman forever")
//   .then((data) =>
//     readFile("./dc_p.txt", "utf-8")
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err))
//       .finally((data)=>console.log('Baribir men consolge shygam'))
//   )
//   .catch((err) => console.error("error" + err));

const start = async () => {
  try {
    const writeResult = await writeFile("./dc_p.txt", "Batman forever");

    const readResult = await readFile("./dc_p.txt", "utf-8");

    const writeResult2 = await writeFile("./dc_p.txt", "Batman forever");

    const readResult2 = await readFile("./dc_p.txt", "utf-8");

    console.log(readResult2);
  } catch (err) {
    console.error(err);
  }
};

start();
