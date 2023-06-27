import Pokemon from "./pokemon";
import { isObject } from "./pokemon";


test('shoulb be a standard pokemon',()=>{
    const result= new Pokemon(500);
    expect(result.id).toBe(500)
})


test('shoulb be a standard pokemon',()=>{
    const result= new Pokemon(400);
    expect(result.hp).toBe(100)
})


test('shoulb be a standard pokemon',()=>{
    let result= new Pokemon(300); // ():void=> { x = 2;  y=4;}
    expect(result.cp).toBe(10)
})


test('shoulb be a standard pokemon',()=>{
    let result= new Pokemon(300);
    expect(result.types).toStrictEqual(['Normal'])
})


test('shoulb be a object',()=>{
    let result = isObject(['1', '2']);
    expect(result).toBe(false);
})




