/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import * as note from '../src/note';
import * as fs from 'fs';

describe('testing add Note .. ', () => {
  it('Adding Note must create new a file', () => {
    note.addNote('Leonardo', 'note1', 'this is my note', 'blue');
    expect(fs.existsSync('notes-storage/Leonardo/note1')).to.be.true;
  });
  it('repeated Note must be alert', () => {
    note.addNote('Leonardo', 'note1', 'this is my note', 'blue');
    expect(note.addNote('Leonardo', 'note1', 'this is my note', 'blue')).to.be.equal(-1);
  });
});

describe('testing ModifyNote .. ', () => {
  it(' must modify a note', () => {
    expect(note.modifyNote('Leonardo', 'note1', 'newBody', 'red')).to.be.equal(0);
  });
  it(' must show error when the note does not exist', () => {
    expect(note.modifyNote('NOUSEr', 'note1', 'newBody', 'red')).to.be.equal(-1);
  });
});

describe('testing removeNote .. ', () => {
  it(' must remove a note', () => {
    note.removeNote('Leonardo', 'note1');
    expect(!fs.existsSync('notes-storage/Leonardo/note1')).to.be.true;
  });
  it(' must show error when the note does not exist', () => {
    expect(note.removeNote('NOUSEr', 'note1')).to.be.equal(-1);
  });
});

describe('testing listNote .. ', () => {
  it(' must list all users notes', () => {
    expect(note.listNotes('Leonardo')).to.be.equal(0);
  });
  it(' must show error when the note does not exist', () => {
    expect(note.listNotes('UnexistendUser')).to.be.equal(-1);
  });
});

describe('testing readNote .. ', () => {
  it(' must Read a given users note', () => {
    note.addNote('Leonardo', 'note1', 'this is my note', 'blue');
    expect(note.readNote('Leonardo', 'note1')).to.be.equal(0);
  });
  it(' must show error when the note does not exist', () => {
    expect(note.readNote('UnexistendUser', 'note')).to.be.equal(-1);
  });
});
