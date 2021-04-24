

// import { blue } from 'chalk';
// const miles:number = 18;

// const color:string = 'blue';

// const calculateFeet = (miles:number) => miles * 5280;

// console.log(chalk`
// 	There are {bold 5280 feet} in a mile.
// 	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
// `);

// console.log(chalk `{${color} asdasd}`);


const chalk = require('chalk');
import {writeFile, readFile, unlink, appendFile, readdir} from 'fs';
import {read} from 'node:fs';
import {type} from 'node:os';
import {start} from 'node:repl';
import {createInflate} from 'node:zlib';
import {boolean, number, string} from 'yargs';

const startMenu: boolean = true;
const fileName:string = 'helloworld.txt';
const option:number = 0;


const note1 = {
  title: 'NOTE 1',
  body: 'Today is a Great Day!!',
  color: 'blue',
};

const note2 = {
  title: 'NOTE 2',
  body: 'Tomorrow is gonna be a Great Day!!',
  color: 'green',
};

const note3 = {
  title: 'NOTE 3',
  body: 'OOOOO YEA!!',
  color: 'yellow',
};

const note4 = {
  title: 'NOTE 4',
  body: 'Lets do this !!!',
  color: 'red',
};

const jsonstring = JSON.stringify(note4, null, 2);
// console.log(jsonstring);

const note5 = {
  title: 'NOTE 5',
  body: 'FORZA',
  color: 'purple',
};

// switch (option) {
//     case 1:
//         writeFile(fileName, 'asd!', () => {
//             console.log(`File ${fileName} has just been created`);
//           });
//     case 2:
//         console.log('im 2')
//         break;
//     case 3:
//         console.log('im 2')
//         break;

//     default:
//         break;
// }


// writeFile(fileName, 'asd!', () => {
//   console.log('File helloworld.txt has just been created');
// });

export function createNote(note: string, content: string): number {
  let returningValue: number = 0;
  readFile(note, (err, data)=>{
    if (err) {
      writeFile(note, content, (error) => {
        if (error) {
          console.log('error writing  the note');
        }
      });
      returningValue = 0;
    } else {
      returningValue -1;
      console.log('error, already existend file');
    }
  });
  return returningValue;
}

function readNote(titleNote: string) {
  readFile(titleNote, (err, data) => {
    if (err) {
      console.log('error file does not exist');
    } else {
      console.log(`  {JSON.parse(data.toString())}`);
    }
  });
}

export function removeNote(titleNote: string) {
  readFile(titleNote, (err, data) => {
    if (err) {
      console.log('error file does not exist');
    } else {
      unlink(titleNote, (err) => {
        if (err) throw err;
        console.log(`${titleNote} was deleted`);
      });
    }
  });
}

// writeFile(fileName, 'asd!', () => {
//   console.log('File helloworld.txt has just been created');
// });

// readFile('.', (err, data) => {
//   if (err) {
//     console.log('FAIL reading ');
//   } else {
//     console.log(data.toString());
//   }
// });

// unlink(fileName, (err) => {
//   if (err) throw err;
//   console.log('path/file.txt was deleted');
// });

// appendFile('message.txt', 'data to append', (err) => {
//   if (err) throw err;
//   console.log('Saved!');
// });

// readdir('.', (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//   }
// });

// createFile(note1.title + '.txt', jsonstring);


