import 'mocha';
import {expect} from 'chai';
import {Template} from '../src/template';
import {AddMapReduce} from '../src/addmapreduce';

const subclass = new AddMapReduce([9, 4, 81], Math.sqrt);


describe('subclass test', () => {
  it('map function should pass a function a return the resulting number list', () =>{
    expect(subclass.map()).to.deep.equal([3, 2, 9]);
  });
  it('must  be a template class', () =>{
    expect(subclass instanceof Template).to.be.true;
  });
  it('must  implement the reduce method', () =>{
    expect(subclass instanceof Template).to.be.true;
  });

  it('must  have addingReduceFunction', () =>{
    expect(subclass.reduce()).to.be.equal(14);
  });
});
