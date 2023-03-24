import { describe, it, expect } from 'vitest';
import { isNumber, isString, isEmpty, len, match } from '../src/input';

describe("Test isNumber function", () => {

  it("should be true", () =>{

    expect(isNumber("1")).toBe(true); 
    expect(isNumber(1)).toBe(true); 
    expect(isNumber(NaN)).toBe(true); 
  });
  it("should be false", () =>{
    expect(isNumber("a")).toBe(false); 
    expect(isNumber([])).toBe(false); 
    expect(isNumber({})).toBe(false); 
    expect(isNumber(null)).toBe(false); 
    expect(isNumber(undefined)).toBe(false); 

  });
});

describe("Test isString function", () => {

  it("should be true", () =>{

    expect(isString("1")).toBe(true); 
    expect(isString("[]")).toBe(true); 
    expect(isString("NaN")).toBe(true); 
  });
  it("should be false", () =>{
    expect(isString(1)).toBe(false); 
    expect(isString([])).toBe(false); 
    expect(isString({})).toBe(false); 
    expect(isString(null)).toBe(false); 
    expect(isString(undefined)).toBe(false); 

  });
});

describe("Test isEmpty function", () => {

  it("should be true", () =>{

    expect(isEmpty("")).toBe(true); 
    expect(isEmpty(0)).toBe(true); 
    expect(isEmpty([])).toBe(true); 
    expect(isEmpty(null)).toBe(true); 
    expect(isEmpty(undefined)).toBe(true); 
  });
  it("should be false", () =>{
    expect(isEmpty(1)).toBe(false); 
    expect(isEmpty(["a"])).toBe(false); 
    expect(isEmpty({})).toBe(false); 

  });
});


describe("Test len function", () => {

  it("should be true", () =>{

    expect(len(0)("")).toBe(true); 
    expect(len(1)("a")).toBe(true); 
    expect(len(1)(0)).toBe(true); 
    expect(len(0)([])).toBe(true); 
    expect(len(2)([1,2])).toBe(true); 
  });
  it("should be false", () =>{
    expect(len(0)(0)).toBe(false); 
    expect(len(0)(["a"])).toBe(false); 
    expect(len(1)({})).toBe(false); 
    expect(len(0)(null)).toBe(false); 
    expect(len(0)(undefined)).toBe(false); 

  });
});


describe("Test match function", () => {

  it("should be true", () =>{

    expect(match("^(0|[1-9][0-9]*)$")("23467")).toBe(true); 
    expect(match("^true$|^false$")("true")).toBe(true); 
    expect(match("^true$|^false$")("false")).toBe(true); 
  });
  it("should be false", () =>{
    expect(match("^(0|[1-9][0-9]*)$")("23467a")).toBe(false); 
    expect(match("^true$|^false$")("trueu")).toBe(false); 
    expect(match("^true$|^false$")("fals")).toBe(false); 
  });
});
