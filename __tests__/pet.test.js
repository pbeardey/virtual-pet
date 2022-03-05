const Pet = require('../src/pet');

describe('constructor',() => {
    it ('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    })
    it('checks the age property', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
    it('checks the hunger property', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });
    it('checks the fitness property', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
    
});

describe('growUp', () => {
    const pet = new Pet('Fido');
    
    it('increment the age by 1', () => {
        expect(pet.age).toEqual(0);
        pet.growUp();
        expect(pet.age).toEqual(1);
    
    });
    it('increment the hunger by 5', () => {
        expect(pet.hunger).toEqual(5);
    });
    it('decrease the fitness by 3', () => {
        expect(pet.fitness).toEqual(7);
    });
});

