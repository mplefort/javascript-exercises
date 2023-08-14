const findTheOldest = function(people) {
    
    const oldest = people.sort( (lastPerson, currentPerson) => {

        if (!lastPerson.yearOfDeath) {
            lastPerson.yearOfDeath = new Date().getFullYear();
        }

        if(!currentPerson.yearOfDeath) {
            currentPerson.yearOfDeath = new Date().getFullYear();
        }

        const lastPersonAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
        const currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        return lastPersonAge > currentPersonAge ? -1 : 1;
        
    })

    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
