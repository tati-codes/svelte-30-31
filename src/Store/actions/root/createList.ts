import { Task } from "../../Task";
import { TaskList } from "../../Tasklist";
import { root } from "../../rootStore";
import type { Layout } from "../../typeValidators/Layout";

export let createTasklist = () => root.update($root => {
  $root.taskLists.push(new TaskList(`Pomodoro ${$root.taskLists.length + 1}`, [new Task("Focused Work", 25),new Task("Short Break", 5),new Task("Focused Work", 25),new Task("Short Break", 5),new Task("Focused Work", 25),new Task("Long Break", 25)]))
  return $root
});
