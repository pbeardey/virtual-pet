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

const pet = new Pet('Fido');

describe('growUp', () => {
    
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

describe('walk', () => {
    it('increment the fitness by 4 upto max 10', () => {
        expect(pet.fitness).toEqual(7);
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});

