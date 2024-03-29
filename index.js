#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function StartQuiz() {
    console.log(chalk.bold.blueBright("Welcome To Quiz Mania"));
    const answer = await inquirer.prompt([
        { message: "Type your name", type: "string", name: "Question_1" },
        {
            message: "what is the capital of Germany",
            type: "list",
            name: "Question_2",
            choices: ["Berlin", "Dehli", "Bangkok", "Hanoi"],
        },
    ]);
    if (answer.Question_2 === "Berlin") {
        console.log(chalk.bold.greenBright("Great! It's a correcr answer !"));
    }
    else {
        console.log(chalk.bold.red("Oh! Game over"));
        return;
    }
    const answer1 = await inquirer.prompt([
        {
            message: "which is the Longest River in the world",
            type: "list",
            name: "Question_3",
            choices: ["River Nile", "River Indus", "River Amazon", "River Vogla"],
        },
    ]);
    if (answer1.Question_3 === "River Nile") {
        console.log(chalk.bold.greenBright("Great! It's a correcr answer !"));
    }
    else {
        console.log(chalk.bold.red("Oh! Game over"));
        return;
    }
    const answer2 = await inquirer.prompt([
        {
            message: "What is the capital of Pakistan",
            type: "list",
            name: "Question_4",
            choices: ["Dehli", "Islamabad", "Karachi", "Ankara"],
        },
    ]);
    if (answer2.Question_4 === "Islamabad") {
        console.log(chalk.bold.greenBright("Bravo! Keep goin.... ;-]"));
    }
    else {
        console.log(chalk.bold.red("Oh! Game over"));
        return;
    }
    const answer3 = await inquirer.prompt([{
            message: "What is the large Ocean in the world ",
            type: "list",
            name: "Question_5",
            choices: ["Atlantic Ocean", "Pacific Ocean", "Artic Ocean", "Indian Ocean"]
        }]);
    if (answer3.Question_5 === "Pacific Ocean") {
        console.log(chalk.bold.greenBright("Congratulations! You're Winner "));
    }
    else {
        console.log(chalk.bold.red("Oh! Game over -----> Try Again"));
        return;
    }
}
StartQuiz();
