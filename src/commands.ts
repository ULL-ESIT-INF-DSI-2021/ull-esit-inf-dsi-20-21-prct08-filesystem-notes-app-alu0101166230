/* eslint-disable max-len */
import * as yargs from 'yargs';
import {help} from 'yargs';
import * as note from './note';
interface Arguments {
  user: string,
  title: string,
  body: string
  color: string
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
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv:Arguments) => note.addNote(argv.user, argv.title, argv.body, argv.color),
});
help();

yargs.command({
  command: 'modify',
  describe: 'Modify an existend note',
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
  handler: (argv:Arguments) => note.modifyNote(argv.user, argv.title, argv.body, argv.color),
});

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
  handler: (argv:Arguments) => note.removeNote(argv.user, argv.title),
});


yargs.command({
  command: 'read',
  describe: 'Read an existend note',
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
  handler: (argv:Arguments) => note.readNote(argv.user, argv.title),
});

yargs.command({
  command: 'list',
  describe: 'List All the files in the user directory',
  builder: {
    user: {
      describe: 'Note Owner',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv:Arguments) => note.listNotes(argv.user),
});

yargs.parse();
