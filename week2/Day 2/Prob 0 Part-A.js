var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}

// 1. Add height and weight to Fluffy

cat.height = 2;
cat.weight = 5;
console.log(cat);

// 2. Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy";
console.log('Name corrected -->', cat.name);

// 3. List all the activities of Fluffyy’s catFriends.

let friendActivity = cat.catFriends.reduce((acc, friend) => acc.concat(friend.activities), []);
console.log("Fluffyy\'s catFriends Activities  -->" ,friendActivity.join(','));

// 4. Print the catFriends names.
let friendsName = cat.catFriends.reduce((acc, friend) => acc.concat(friend.name), []);
console.log("Fluffyy\'s catFriends Name -->" ,friendsName.join(','));

// 5. Print the total weight of catFriends

let friendsWeight = cat.catFriends.reduce((acc, val) => acc+=val.weight, 0);
console.log("Fluffyy\'s & catFriend's weight -->" ,friendsWeight + cat.weight);


// 6. Print the total activities of all cats 
let allActivities = friendActivity.concat(cat.activities);
console.log('All cat activities -->', allActivities.join(','));

// 7. Add 2 more activities to bar & foo cats
cat.catFriends.forEach(friend => friend.activities.push('run', 'walk'));
console.log("Add activity to cat friends -->", cat);

// 8. Update the fur color of bar

cat.catFriends[0].furcolor = 'brown';
console.log('Bar\'s fur color update -->', cat);