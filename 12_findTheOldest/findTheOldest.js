const findTheOldest = function(people) {
    let oldestAge = 0
    let age = 0
    let oldest = {
        'name': 'None'
    }
    people.forEach(person => {
        
        age = person.yearOfDeath - person.yearOfBirth
        
        if (age > oldestAge) {
            oldestAge = age
            oldest.name = person.name
        }
    });
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
