import * as fs from 'fs';

const NOTES_STORAGE_DIRECTORY: string = './notes-storage';

type Note = {
  user: string
  title: string
  body: string
  color: string
}

const note: Note = {
  user : 'asd',
  title :' ss',
  body : 'body',
  color : 'blue'
}

console.log(note);
fs.writeFileSync('title',JSON.stringify(note,null,2))