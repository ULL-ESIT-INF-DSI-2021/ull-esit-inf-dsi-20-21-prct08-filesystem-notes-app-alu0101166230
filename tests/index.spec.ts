import 'mocha';
import {expect} from 'chai';
import {addingTwoNumber} from '../src/index';

describe('test example', () => {
  it('example', () =>{
    expect(addingTwoNumber(2, 4)).to.be.eq(6);
  });
});
