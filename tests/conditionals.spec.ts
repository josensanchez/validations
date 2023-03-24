import { describe, it, expect } from 'vitest';
import { and, or } from '../src/conditional';

const dummyTrue  =  (value: unknown) => true;
const dummyFalse =  (value: unknown) => false;

describe("Test AND function", () => {

  it("should be true", () =>{

    const condition = and(dummyTrue, dummyTrue);
    expect(condition("someting")).toBe(true); 
  });
  it("should be false", () =>{

    const condition = and(dummyTrue, dummyFalse);
    console.log(dummyFalse("something"),condition("something"));
    expect(condition("someting")).toBe(false); 

    const condition2 = and(dummyFalse, dummyTrue);
    expect(condition2("someting")).toBe(false); 
  });
});
describe("Test OR function", () => {

  it("should be true", () =>{

    const condition = or(dummyTrue, dummyTrue);
    expect(condition("someting")).toBe(true); 

    const condition2 = or(dummyTrue, dummyFalse);
    expect(condition2("someting")).toBe(true); 

    const condition3 = or(dummyFalse, dummyTrue);
    expect(condition3("someting")).toBe(true); 
  });
  it("should be false", () =>{

    const condition = or(dummyFalse, dummyFalse);
    expect(condition("someting")).toBe(false); 
  });
});
