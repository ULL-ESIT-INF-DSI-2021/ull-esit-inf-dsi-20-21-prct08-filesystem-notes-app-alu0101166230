/* eslint-disable max-len */
import * as fs from 'fs';

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