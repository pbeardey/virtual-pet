function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function () {
    //This method increases the age property by 1
    this.age += 1;
    this.hunger +=5;
    this.fitness -=3;
}

Pet.prototype.walk = function () {
    //This method increases the fitness by 4 upto a max value of 10;
    const MAX_FITNESS = 10;
    const WALK_FITNESS = 4;
    if (this.fitness + WALK_FITNESS <= MAX_FITNESS) {
        this.fitness += WALK_FITNESS;
    } else {
        this.fitness = MAX_FITNESS;
    }
}

Pet.prototype.feed = function () {
    //This method decreases the hunger level by 3 to min of 0;
    const MIN_HUNGER = 0;
    if (this.hunger - 3 >= MIN_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MIN_HUNGER;
    }
}

Pet.prototype.checkUp = function () {
    //This method returns if the pet needs walking / feeding or both
    const HUNGER_THRESHOLD = 5; // hunger 5 or more then needs feeding
    const FITNESS_THRESHOLD = 3;  // fitness 3 or below then needs walking
    const isUnFit = (this.fitness <= FITNESS_THRESHOLD);
    const isHungry = (this.hunger  >= HUNGER_THRESHOLD);
    if (isUnFit && isHungry) {
        return 'I am hungry AND I need a walk';
    } else if (isUnFit) {
        return 'I need a walk';
    } else if (isHungry) {
        return 'I am hungry';
    } else {
        return 'I feel great!';
    }

}

module.exports = Pet; 