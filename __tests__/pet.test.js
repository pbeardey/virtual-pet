const Pet = require('../src/pet');

describe('constructor',() => {
    it ('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    const pet = new Pet('Fido');
    it('sets the name property', () => {
        expect(pet.name).toEqual('Fido');
    })
    it('checks the age property', () => {
        expect(pet.age).toEqual(0);
    });
    it('checks the hunger property', () => {
        expect(pet.hunger).toEqual(0);
    });
    it('checks the fitness property', () => {
        expect(pet.fitness).toEqual(10);
    });
    
});


describe('growUp', () => {
    const pet = new Pet('Rover');

    pet.growUp();

    it('increment the age by 1', () => {
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
    const pet = new Pet('Rover');

    it('increment the fitness by 4 upto max 10', () => {
        pet.growUp();
        pet.growUp();
        expect(pet.fitness).toEqual(4);
        pet.walk();
        expect(pet.fitness).toEqual(8);
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});

