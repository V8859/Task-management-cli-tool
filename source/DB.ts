import fs from "fs";
import path = require("path");
import Task from "./interface";

let tasks: Task[] = [];
const dirPath = path.join(__dirname, "dist"); // Define the folder
const filePath = path.join(dirPath, "DB.json");
function initDB(): Task[] {
  let file: Task[] = [];

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2), "utf8");
  }

  tryCatch(() => {
    file = JSON.parse(fs.readFileSync(filePath, "utf8"));
  });

  return file;
}

export function updateDB(data: any[]) {
  if (fs.readFileSync(filePath, "utf8")) {
    fs.writeFileSync(filePath, JSON.stringify(data));
  }
}

export function getDB() {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as Task[];
}
function tryCatch(anyFunction = () => {}) {
  try {
    anyFunction();
  } catch (err) {
    console.log(err);
  }
}
