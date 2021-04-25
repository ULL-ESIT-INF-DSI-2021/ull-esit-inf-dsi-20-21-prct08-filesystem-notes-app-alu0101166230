/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import * as note from  '../src/note';

describe('testing add Note .. ', () => {
  it('Adding Note must create new a file', () => {
    expect(createNote('newfile','content')).to.be.equal(0);
  });
  it('Adding Note must return an error when the file exist', () => {
    expect(createNote('newfile','content')).to.be.equal(-1);
  });
});
