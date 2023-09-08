#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}


async function Welcome() {
    let gameTitle = chalkAnimation.neon('Welcome to the game, which you can never escape')
    await sleep();
    gameTitle.stop();

    console.log(chalk.cyanBright(`
    
    ░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄
    ░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄
    ░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█
    ░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█
    ░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█
    █▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█
    █▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█
    ░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
    ░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
    ░░░█░░██░░▀█▄▄▄█▄▄█▄████░█
    ░░░░█░░░▀▀▄░█░░░█░███████░█
    ░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
    ░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█
    ░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█
    ░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█`))

    console.log(chalk.greenBright(`
    ██▄ ██ █▄█ ██ █╬ ███ ███ ╬╬ ██▄ █╬█ ╬╬ ██ ███ ███ ██▄ ██ ██ █╬╬█
    █╬█ █▄ ███ █▄ █╬ █╬█ █▄█ ╬╬ █▄█ █▄█ ╬╬ █▄ █▄█ █▄╬ █╬█ █▄ █▄ ██▄█
    ███ █▄ ╬█╬ █▄ ██ █▄█ █╬╬ ╬╬ █▄█ ╬█╬ ╬╬ █╬ █╬█ █╬█ ███ █▄ █▄ █╬██`))
    
}

Welcome();

let score:number = 0;

async function guessnum() {
    let guessnumber = Math.floor(Math.random()*10);
    let hint;
    if 
    (guessnumber%2===0){
    hint = "your number is even"
    } else {
    hint = "your number is odd"    
    }

    const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message : (chalk.cyanBright(`Guess the number between 1 to 10 or die "${hint}". Disclaimer if you try to escape the game you'll die because of short circuit`))

    }]);
    console.log(chalk.greenBright(`your guess is ${answer.userguess} and system generates ${guessnumber}`))
    if (answer.userguess===guessnumber){
        score++;
        console.log(chalk.blue(`Congratulation you saved your life for one more chance.Your score is ${score}`))
    } else {
    console.log(chalk.redBright(`Wrong guess now someone will come and kill you. You're going to die your score is ${score}.If you want to live keep playing`))

}
}

async function loophole() {
    let again;
    do {
        await guessnum();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["DO","DIE"],
                message: (chalk.magentaBright("Play again Or you'll die today."))
            }
        ]);
    }
    while(again.restart==="DO");
    
}

loophole();