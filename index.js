#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word."
    }
]);
const word = answer.sentence.trim().split(" ");
console.log(`The number of words in the sentence is ${chalk.greenBright(word.length)}`);
