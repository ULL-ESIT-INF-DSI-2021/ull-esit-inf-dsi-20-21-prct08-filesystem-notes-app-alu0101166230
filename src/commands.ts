/* eslint-disable max-len */

const {help} = require('yargs');
const yargs = require('yargs');
const argv = require('yargs/yargs')(process.argv.slice(2));


const NOTES_STORAGE_DIRECTOY: string = './notes-storage';

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
  //handler: (argv:Arguments) => writeFileSync(NOTES_STORAGE_DIRECTOY + argv.title, argv.body),
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
  // handler: (argv:Arguments) => removeNote(argv.title),
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
  // handler: (argv:Arguments) => removeNote(argv.title),
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
  },
  // handler: (argv:Arguments) => removeNote(argv.title),
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
  // handler: (argv:Arguments) => removeNote(argv.title),
});
yargs.parse();
