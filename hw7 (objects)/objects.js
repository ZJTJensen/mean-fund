let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for(let name in students){
    // when we log 'name', we notice it's a key
    console.log(name);
    // when we pass the key to the 'students' object, we can pull values
    console.log(students[name]);
}

/* ******************* */
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 var count = 0
 for(let name in users.employees){
     count += 1;
    name = users.employees[name];
    firstname= name.first_name;
    lastname = name.last_name;
    console.log(count + firstname + ' ' + lastname + " " +(firstname.length + lastname.length))
 }

 var new_count = 0
 for(let name in users.managers){
    new_count += 1;
   name = users.managers[name];
   firstname= name.first_name;
   lastname = name.last_name;
   console.log(new_count + firstname + ' ' + lastname + " " +(firstname.length + lastname.length))
}