/* eslint-disable max-len */
import chalk, {black} from 'chalk';
import * as fs from 'fs';
import {Console} from 'node:console';
import {stdout} from 'node:process';
import {log} from 'node:util';

/**
 * file to store the notes
 */
const NOTES_STORAGE_DIRECTORY: string = './notes-storage/';

type Note = {
  user: string
  title: string
  body: string
  color: string
}

/**
 * Add a note to a user list
 * @param userName User account
 * @param titleNote Titlte of the note
 * @param bodyNote note content
 * @param color color of choice to display the title
 * @returns 0 if the note is created succesfully, -1 is not
 */
export function addNote(userName: string, titleNote: string, bodyNote:string, color:string):number {
  const fullNotePath = NOTES_STORAGE_DIRECTORY + userName + '/' + titleNote;
  const fullUserDirectoryPath = NOTES_STORAGE_DIRECTORY + userName;
  if (fs.existsSync(fullNotePath) ) {
    console.log(chalk.red`Error, note already exist`);
    return -1;
  } else {
    const note: Note = {
      user: userName,
      title: titleNote,
      body: bodyNote,
      color: color,
    };
    if (!fs.existsSync(fullUserDirectoryPath)) {
      fs.mkdirSync(fullUserDirectoryPath);
    }
    fs.writeFileSync(fullNotePath, JSON.stringify(note, null, 2));
    console.log(chalk.green`Note Created!`);
    return 0;
  }
}

/**
 * Modify an existend note
 * @param userName User account
 * @param titleNote Titlte of the note
 * @param bodyNote note content
 * @param color color of choice to display the title
 * @returns 0 if the note is modify succesfully, -1 is not
 */
export function modifyNote(userName: string, titleNote: string, bodyNote:string, color:string):number {
  const fullNotePath = NOTES_STORAGE_DIRECTORY + userName + '/' + titleNote;
  if (!fs.existsSync(fullNotePath) ) {
    console.log(chalk.red`Error, note does not exist`);
    return -1;
  } else {
    const note: Note = {
      user: userName,
      title: titleNote,
      body: bodyNote,
      color: color,
    };
    fs.writeFileSync(fullNotePath, JSON.stringify(note, null, 2));
    console.log(chalk.green`Note Modified!`);
    return 0;
  }
}

/**
 * remove an existend note
 * @param userName User account
 * @param titleNote The title og the note
 * @returns 0 if the note is remove succesfully, -1 is not
 */
export function removeNote(userName: string, titleNote: string):number {
  const fullNotePath = NOTES_STORAGE_DIRECTORY + userName + '/' + titleNote;
  if (!fs.existsSync(fullNotePath) ) {
    console.log(chalk.red`Error, note does not exist`);
    return -1;
  } else {
    fs.unlinkSync(fullNotePath);
    console.log(chalk.green`Note removed!`);
    return 0;
  }
}

/**
 * List all the existend notes
 * @param userName User account
 * @returns 0 if its succesfully, -1 is not
 */
export function listNotes(userName:string):number {
  const fullUserDirectoryPath:string = NOTES_STORAGE_DIRECTORY + userName;
  let fullNotePath:string = '';

  if (!fs.existsSync(fullUserDirectoryPath)) {
    console.log(chalk.red`You dont have any notes :(`);
    return -1;
  } else {
    const noteTitles: string[] = fs.readdirSync(fullUserDirectoryPath);
    noteTitles.forEach((noteTitle) => {
      fullNotePath = fullUserDirectoryPath + '/'+ noteTitle;
      const data = fs.readFileSync(fullNotePath);
      const note:Note = JSON.parse(data.toString());
      console.log(chalk.keyword(note.color)`${JSON.stringify(note.title)}`);
    });
  }
  return 0;
}

/**
 * read an existend note
 * @param userName User account
 * @param titleNote Note Title
 * @returns 0 if the note is readed succesfully, -1 is not
 */
export function readNote(userName:String, titleNote:string):number {
  const fullNotePath = NOTES_STORAGE_DIRECTORY + userName + '/' + titleNote;

  if (!fs.existsSync(fullNotePath) ) {
    console.log(chalk.red`Error, note does not exist`);
    return -1;
  } else {
    const data = fs.readFileSync(fullNotePath);
    const note:Note = JSON.parse(data.toString());
    console.log(chalk.keyword(note.color)`${JSON.stringify(note.body)}`);
    return 0;
  }
};
