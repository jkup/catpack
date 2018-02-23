#!/usr/bin/env node
const { exec } = require("child_process");

exec("cat package.json", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${error}`);
    return;
  } else if (stdout) {
    console.log(stdout);
  } else if (stderr) {
    console.error(stderr);
  }
});
