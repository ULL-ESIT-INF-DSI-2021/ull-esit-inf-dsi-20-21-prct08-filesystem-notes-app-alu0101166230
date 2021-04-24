const {help} = require('yargs');
const yargs = require('yargs');
const argv = require('yargs/yargs')(process.argv.slice(2));
import {createNote, removeNote} from './note';

interface Arguments {
  title: string,
  body: string
}

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'Note Owner',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note description',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv:Arguments) => createNote(argv.title, argv.body),
});
help();

yargs.command({
  command: 'remove',
  describe: 'Remove an existend note',
  builder: {
    user: {
      describe: 'Note Owner',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv:Arguments) => removeNote(argv.title),
});

yargs.parse();
