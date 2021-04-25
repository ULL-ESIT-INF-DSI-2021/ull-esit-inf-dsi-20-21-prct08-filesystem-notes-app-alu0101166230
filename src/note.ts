/* eslint-disable max-len */
import chalk, {black} from 'chalk';
import * as fs from 'fs';
import {Console} from 'node:console';
import {stdout} from 'node:process';
import {log} from 'node:util';
const _ = require('lodash');

const NOTES_STORAGE_DIRECTORY: string = './notes-storage/';

type Note = {
  user: string
  title: string
  body: string
  color: string
}

export function addNote(userName: string, titleNote: string, bodyNote:string, color:string) {
  const fullNotePath = NOTES_STORAGE_DIRECTORY + userName + '/' + titleNote;
  const fullUserDirectoryPath = NOTES_STORAGE_DIRECTORY + userName;
  if (fs.existsSync(fullNotePath) ) {
    console.log("Error, note already exist");
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
  }
}

export function modifyNote(userName: string, titleNote: string, bodyNote:string, color:string) {
  const fullNotePath = NOTES_STORAGE_DIRECTORY + userName + '/' + titleNote;
  const fullUserDirectoryPath = NOTES_STORAGE_DIRECTORY + userName;
  if (!fs.existsSync(fullNotePath) ) {
    console.log("Error, note does not exist");
  } else {
    const note: Note = {
      user: userName,
      title: titleNote,
      body: bodyNote,
      color: color,
    };
    fs.writeFileSync(fullNotePath, JSON.stringify(note, null, 2));
  }
}

export function removeNote(userName: string, titleNote: string) {
  const fullNotePath = NOTES_STORAGE_DIRECTORY + userName + '/' + titleNote;
  const fullUserDirectoryPath = NOTES_STORAGE_DIRECTORY + userName;
  if (!fs.existsSync(fullNotePath) ) {
    console.log("Error, note does not exist");
  } else {
    fs.unlinkSync(fullNotePath);
  }
}

export function listNotes(userName:string) {
  const fullUserDirectoryPath:string = NOTES_STORAGE_DIRECTORY + userName;
  let fullNotePath:string = '';

  if (!fs.existsSync(fullUserDirectoryPath)) {
    console.log('You dont have any notes :(');
  } else {
    const noteTitles: string[] = fs.readdirSync(fullUserDirectoryPath);
    noteTitles.forEach((noteTitle) => {
      fullNotePath = fullUserDirectoryPath + '/'+ noteTitle;
      const data = fs.readFileSync(fullNotePath);
      const note:Note = JSON.parse(data.toString());
      console.log(chalk.keyword(note.color)`${JSON.stringify(note.title)}`);
    });
  }
}

export function readNote(userName:String, titleNote:string) {
  const fullNotePath = NOTES_STORAGE_DIRECTORY + userName + '/' + titleNote;

  if (!fs.existsSync(fullNotePath) ) {
    console.log("Error, note does not exist");
  } else {
    const data = fs.readFileSync(fullNotePath);
    const note:Note = JSON.parse(data.toString());


    console.log(chalk.keyword(note.color)`${JSON.stringify(note.body)}`);
  }
};
