import fs from "fs";
import path from "path";
import chalk from "chalk";
import Step from "./steps";

process.env.ORIGIN_PATH = path.resolve(process.argv[1], "../../");

let json = JSON.parse(
  fs.readFileSync(
    path.resolve(
      process.env.ORIGIN_PATH,
      "./lib/node_modules/byy-cli/package.json"
    ),
    "utf8"
    ));

async function runner() {
  /* Step.1: Show welcome info */
  console.log(
    `\nThanks for using ${chalk.green(" byy-cli ")}...
    Please follow below steps and tips to create a ${chalk.keyword("orange")("byy")} project\n`
  );
  
  /* Step.2: Set project name... */
  await new Step().runSteps();
}

if (
  process.argv[2] === "--version" ||
  process.argv[2] === "-v"
) {
  console.log(` byy-cli@${json.version}\n By ${json.author.name}`);
} else if (
  process.argv[2] === "--path" ||
  process.argv[2] === "-p"
) {
  console.log(` byy-cli=> ${process.env.ORIGIN_PATH}`);
} else {
  runner();
}