let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,

    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];


// Who is the Academy Member whose ID is 187?
for (const member of academyMembers) {
    if (member.memID == 187) {
        console.log(member.name); 
    }
    
    
}

console.log();


// Who has have been in at least 3 films?
for (const member of academyMembers) {
    if (member.films.length >=3) {
        console.log(member.name); 
    }
    
    
}
console.log();
// Who has a name that starts with "Bob"?
for (const member of academyMembers) {
    if (member.name.indexOf("Bob") != -1 ){
        console.log(member.name); 
    }
    
    
}
console.log();
// HARDER: Which Academy Members have been in a film
for (const member of academyMembers) {
    for (const filmName of member.films)
    if (filmName.indexOf("A")== 0) {
        console.log(member.name); 
    }
    
    
}
// that starts with "A"
