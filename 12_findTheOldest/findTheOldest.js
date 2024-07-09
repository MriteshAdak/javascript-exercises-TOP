const findTheOldest = function(people) {
    return people.reduce((person1, person2) => 
    {
        const presentDate = new Date();
        const presentYear = presentDate.getFullYear();
        let age1, age2;

        if (Object.keys(person1).includes('yearOfDeath'))
            {age1 = person1.yearOfDeath - person1.yearOfBirth;}
        else
            {age1 = presentYear - person1.yearOfBirth;}

        if (Object.keys(person2).includes('yearOfDeath'))
            {age2 = person2.yearOfDeath - person2.yearOfBirth;} 
        else
            {age2 = presentYear - person2.yearOfBirth;}

        if (age2 >= age1)
            return person2;
        else
            return person1;
    });

};

// Do not edit below this line
module.exports = findTheOldest;