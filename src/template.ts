/**
 * Template that allow to map a number list and reduce function
 */
export abstract class Template {
  constructor(protected list:number[]) {}

  /**
   *
   * @param inputFunction function to be apply to the number list
   * @returns a number list resulting of appliying the inputFunction
   */

  map(inputFunction: (a:number)=> number):number[] {
    const outputList: number[] = [];
    this.list.forEach((element) => {
      outputList.push(inputFunction(element));
    });
    return outputList;
  }

  /**
   * reduce fucntion to be implemented be the subclasses
   *
   */
  abstract reduce():number[];

  hook1() {}

  hook2() {}

  hook3() {}
}

// const temp = new Template([4, 9, 81]);

// console.log(temp.map(Math.sqrt));


