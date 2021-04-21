import 'mocha';
import {expect} from 'chai';
import {Template} from '../src/template';
import {Subclass} from '../src/subclass';

const subclass = new Subclass([9, 4, 81]);


describe('subclass test', () => {
  it('map function should pass a function a return the resulting number list', () =>{
    expect(subclass.map(Math.sqrt)).to.deep.equal([3, 2, 9]);
  });
  it('must  be a template class', () =>{
    expect(subclass.map(Math.sqrt)).to.deep.equal([3, 2, 9]);
  });
});
