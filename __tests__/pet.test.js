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
    
    it('increment the fitness by 4 upto max 10', () => {
        const pet = new Pet('Rover');
        pet.growUp();
        pet.growUp();

        expect(pet.fitness).toEqual(4);

        pet.walk();

        expect(pet.fitness).toEqual(8);

        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    
    it('decrease the hunger level by 3', () => {
        const pet = new Pet('Rover');
        pet.growUp();
        pet.feed();

        expect(pet.hunger).toEqual(2);
    });
    it('decrease the hunger level to min', () => {
        const pet = new Pet('Rover');
        pet.growUp();
        pet.feed();
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });

});

describe('checkUp', () => {

    it('return "I need a walk" if fitness is 3 or less', () => {
        const pet = new Pet('Rover');
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I need a walk');
        pet.fitness = 2;
        expect(pet.checkUp()).toBe('I need a walk');
        pet.fitness = 1;
        expect(pet.checkUp()).toBe('I need a walk');

    });
    it('return "I am hungry" if hunger is 5 or more', () => {
        const pet = new Pet('Rover');
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('I am hungry');
        pet.hunger = 6;
        expect(pet.checkUp()).toBe('I am hungry');
        pet.hunger = 7;
        expect(pet.checkUp()).toBe('I am hungry');
    });
    it('return "I am hungry AND I need a walk" if both fitness is 3 or less and hunger is 5 or more', () => {
        const pet = new Pet('Rover');
        pet.fitness = 3;
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
        pet.fitness = 2;
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
        pet.fitness = 1;
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
        pet.fitness = 3;
        pet.hunger = 6;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');

    });
    it('return "I feel great!" if fitness is greater than 3, hunger is less than 5', () => {
        const pet = new Pet('Rover');
        expect(pet.checkUp()).toBe('I feel great!');

    })
});