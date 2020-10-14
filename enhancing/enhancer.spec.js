const { expect } = require('@jest/globals');
const enhancer = require('./enhancer.js');
// test away!

let sword = {
    name: 'Anduril',
    durability: 65,
    enhancement: 'Elven Runes'
}

test("repair() should restore durability of item to 100", () => {
    
    const repaired = enhancer.repair(sword)
    expect(repaired.durability).toEqual(100)

})