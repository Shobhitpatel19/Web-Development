import inquirer from 'inquirer';

inquirer
 .prompt([
    /* Pass your questions in here */
    {
        type : "list",
        name : "selection",
        choices : ['choice1', 'choice2']
    }
  ])
  .then(function(answer){
    // Use user feedback for... whatever!!
    if(answer.selection == 'choice1'){
        console.log('choice1 is selected')
    }
    else{
        console.log('choice2 is selected')
    }
  })
  