const { writeFile, readFile } = require("fs");

writeFile("./dc.txt", `Batman forever`, function (err) {
  if (err) {
    console.error(err);
    return;
  }

  readFile("./dc.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    writeFile("./Aslan.txt", `Ku Chen Pyo vs ${data}`, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      readFile("./Aslan.txt", "utf-8", (err, data2) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Finale: ${data2}`);
      });
    });
  });
});
