import path from "path";
import showMenu from "./menu";
import Task from "./interface";

const WelcomeString = `
******************************************
++ Welcome to the Task Management System++
******************************************
`;

const goodByeString = `
******************************************
++ Goodbye thanks for using the tool    ++
******************************************
`;

function Welcome(): void {
  console.log(WelcomeString);
}
function Goodbye(): void {
  console.log(goodByeString);
}
Welcome();
showMenu(Goodbye);
