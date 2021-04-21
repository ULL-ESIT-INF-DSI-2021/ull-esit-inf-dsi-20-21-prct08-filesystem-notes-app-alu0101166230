/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Template} from '../src/template';
import {AddMapReduce} from '../src/addmapreduce';
import {SubMapReduce} from '../src/submapreduce';

const addingReduceSubclass = new AddMapReduce([9, 4, 81], Math.sqrt);
const addingReduceSubclass1 = new AddMapReduce([9, 4, 81], Math.sqrt);
const sub = new SubMapReduce([9, 4, 81], Math.sqrt);


describe('addingReduceSubclass test', () => {
  it('map function should pass a function a return the resulting number list', () =>{
    expect(addingReduceSubclass.map()).to.deep.equal([3, 2, 9]);
  });
  it('must  be a template class', () =>{
    expect(addingReduceSubclass instanceof Template).to.be.true;
  });
  it('must  implement the reduce method', () =>{
    expect(addingReduceSubclass instanceof Template).to.be.true;
  });

  it('must  have addingReduceFunction', () =>{
    expect(addingReduceSubclass1.reduce()).to.be.equal(14);
  });

//   it('SUB MAP REDUCE  must  have addingReduceFunction', () =>{
//     expect(sub.reduce()).to.be.equal(-14);
//   });
});

describe('SUB MAP REDUCE test', () => {
  it('SUB MAP REDUCE  must  have addingReduceFunction', () =>{
    expect(sub.reduce()).to.be.equal(-14);
  });
});
