'use strict';

import users from './users.js';

// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
  return  users.map(user => user.name);
};

console.log(getUserNames(users));



// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (user, color) => 
  user.filter(user => user.eyeColor === color)



console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// Получить массив имен пользователей по полу (поле gender).


const getUsersWithGender = (user, gender) => 

  user.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male'));
 // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//  Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  return users.filter(user => { return !user.isActive})
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);


};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
 return users.filter (users => users.age>= min && users.age<=max)
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => { 
  return users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
}

console.log(calculateTotalBalance(users)); // 20916



// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => 
  users.filter(users => users.friends.includes(friendName)).map(users => users.name);
  


console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => 
  users.sort((a,b) => 
    a.friends.length - b.friends.length
  ).map(users => users.name);


console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  return users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);

    return allSkills;
  }, []).sort().filter((skill,index,self) => self.indexOf(skill)==index);

  
};

console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]