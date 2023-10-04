const currentYear = new Date().getFullYear();

function getAge(people, index) {
  if (people[index].yearOfDeath === undefined)
    return currentYear - people[index].yearOfBirth;
  else
    return people[index].yearOfDeath - people[index].yearOfBirth;
}

const findTheOldest = function(people) {
  // Variables
  let oldest = 0, i;

  // Loop through array
  for (i = 0; i < people.length; i++) {
    let age = getAge(people, i);

    if (age > getAge(people, oldest)) {
      oldest = i;
    }
  }

  // Return object through array index  
  return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
