import 'mocha';
import {expect} from 'chai';
import {addingTwoNumber} from '../src/index';
import {subTwoNumber} from '../src/index';

describe('test example', () => {
  it('example', () =>{
    expect(addingTwoNumber(2, 4)).to.be.eq(6);
  });
  it('example sub', () =>{
    expect(subTwoNumber(2, 2)).to.be.eq(0);
  });
});
