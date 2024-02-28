import {sum} from "../sum";

test("Check sum of 2 numbers", ()=>{
    expect(sum(2,3)).toBe(5);
    expect(sum(-2,3)).toBe(1);
});