/* eslint-disable max-len */
/**
 * Template that allow to map a number list and reduce function
 */
export abstract class Template {
  constructor(protected list:number[], protected applyFuntion: (a:number) => number ) {}

  /**
   *
   * @param inputFunction function to be apply to the number list
   * @returns a number list resulting of appliying the inputFunction
   */

  run() {
    this.map();
    this.reduce();
  }


  map():number[] {
    const outputList: number[] = [];
    this.list.forEach((element) => {
      outputList.push(this.applyFuntion(element));
    });
    this.list = outputList;
    return outputList;
  }

  /**
   * reduce fucntion to be implemented be the subclasses
   *
   */
    abstract reduce():number

    hook1() {}
    hook2() {}
}

// const temp = new Template([4, 9, 81], Math.sqrt);

// console.log(temp.map());


