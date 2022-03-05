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
    })
    
    const pet = new Pet('Fido');

    it('use the growUp method to increase the age by 1', () => {
        expect(pet.age).toEqual(0);
        pet.growUp();
        expect(pet.age).toEqual(1);

    })

});