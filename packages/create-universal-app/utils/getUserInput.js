import inquirer from "inquirer";

export const getUserInput = async () => {
  const ui = new inquirer.ui.BottomBar();
  // const platformQuestion = {
  //   type: "checkbox",
  //   name: "platforms",
  //   message: "Select your desired platforms:",
  //   choices: ["Mobile", "Web", "TV"],
  // };
  const authUIQuestion = {
    type: "confirm",
    name: "authUI",
    message: "Would you like the project to include a pre-made authentication UI?",
    default: false,
  };

  const questions = [authUIQuestion];

  ui.log.write("Answer some questions on the setup of your project:");
  await inquirer.prompt(questions).then((answers) => console.log("Creating your project..."));

  return answers;
};
