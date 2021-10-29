const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to  directory
const pathToDirectory = resolve(__dirname, './');

// Get an array of the files inside the folder
const files = readdirSync(pathToDirectory);

// Loop through each file that was retrieved, take first 7 letters only and keep .txt filetype
files.forEach(file => {
  if (file != "index.js"){
    const oldPath = pathToDirectory + `/${file}`;
    const newPath = pathToDirectory + `/${file.slice(0, 7)}` + '.txt';
    rename(
      oldPath,
      newPath,
      err => console.log(err)
    )
  }
}); 