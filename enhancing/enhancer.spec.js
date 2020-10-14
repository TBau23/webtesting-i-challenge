const { expect, it, describe } = require('@jest/globals');

const enhancer = require('./enhancer.js');
// test away!

const sword = {
    name: 'Anduril',
    durability: 65,
    enhancement: 17
}

const imperialStaff = {
    name: 'Radagast',
    durability: 98,
    enhancement: 20
}

const slingshot = {
    name: 'PebbleSlinger',
    durability: 15,
    enhancement: 5
}

const mace = {
    name: "MorningStar",
    durability: 95,
    enhancement: 15
}

describe("testing repair function", () => {
    it("restores durability to 100", () => {
        const repaired = enhancer.repair(sword)
        expect(repaired.durability).toEqual(100)
    }
)})

describe("testing success function", () => {
    it("increases enhancement level by 1 if its not already at 20", () => {
        const enhanced = enhancer.success(sword)
        expect(enhanced.enhancement).toEqual(sword.enhancement + 1);
    })
    it("does not increase enhancement level if it is already at 20", () => {
        
        const enhanced = enhancer.success(imperialStaff)
        expect(enhanced.enhancement).toEqual(imperialStaff.enhancement)
    })
    it("does not effect the durability level at all", () => {
        const enhanced = enhancer.success(sword)
        expect(enhanced.durability).toEqual(sword.durability)
    })
})

describe("testing failure function", () => {
    it("decreases durability by 5 if enhancement is below 15", () => {
        const damaged = enhancer.fail(slingshot)
        expect(damaged.durability).toEqual(slingshot.durability - 5)
    })
    it("decreases durability by 10 and enhancement by 1 if enhancement is above 16", () => {
        const damaged = enhancer.fail(sword)
        expect(damaged.durability).toEqual(sword.durability - 10)
        expect(damaged.enhancement).toEqual(sword.enhancement - 1)
    })
    it("decreases durability by 10 but does not effect enhancement if enhancement is less than 16 but at least 15", () => {
        const damaged = enhancer.fail(mace)
        expect(damaged.durability).toEqual(mace.durability - 10)
        expect(damaged.enhancement).toEqual(mace.enhancement)
    });

describe("testing get function", () => {
    it("changes the name if enhancement is above zero", () => {
        const renamed = enhancer.get(sword)
        console.log(renamed)
        expect(renamed.name).toBe(`[+${sword.enhancement}] ${sword.name}`)
    })
    
})
    

})