const inquirer = require("inquirer");
//Find out how to require inquirer

const cp = require("child_process");

function displayList() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        choices: ["About", "Skills", "Academics", "Projects"],
      },
    ])
    .then(function (answer) {
      if (answer.selection == "About") {
        console.log(`A passionately curious Web Developer 
      who just found out that making websites and seeing
      the magic to happen ont the Internet is what excites him the most. `);
      displayNext()
      } else if (answer.selection == "Skills") {
        console.log("JavaScript, Java, HTML, CSS, nodeJS");
        displayNext()
      } else if (answer.selection == "Academics") {
        cp.execSync(
          "start chrome https://drive.google.com/file/d/18d3tbd_Wrijp02tlrdsJzpW8wQoFm0ZL/view?usp=share_link"
        );
        displayNext()
      } else if (answer.selection == "Projects") {
        cp.execSync("start chrome https://github.com/Shobhitpatel19");
        displayNext()
      }
    });
}

displayList()

function displayNext(){
    inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        choices: ["Go Back", "Exit"],
      },
    ])
    .then(function (answer) {
      if (answer.selection == "Go Back") {
        displayList();
      } else if (answer.selection == "Exit") {
        console.log('Resume Closed')
      } 
    });
}
