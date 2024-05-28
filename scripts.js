// დავალება - 1

for (let i = 5; i < 100; i = i + 1) {
  console.log(i);
}

// დავალება - 2
let x = 12;
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i = i + 1) {
  if (array1[i] > 0 && array1[i] < 10) {
    console.log(array1[i]);
  }
}

// დავალება - 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i = i + 1) {
  if (array2[i] == 5) {
    console.log("არის");
    break;
  }
}

// დავალება - 4

let array3 = [1, 2, 3, 4, 5];

jami = 0;

for (let i = 0; i < array3.length; i++) {
  jami = jami + array3[i];
}
console.log(sum);

// დავალება - 5

let array4 = [1, 2, 3, 4, 5];

jami2 = 0;

for (let i = 0; i < array4.length; i++) {
  jami2 = jami2 + array4[i];
}
console.log(sum / array4.length);

// დავალება - 6

let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
  if (array5[i] !== 7) {
    console.log(array5[i]);
    continue;
  }
}

// დავალება - 7

let user = {
  firstname: "giorgi",
  lastname: "smith",
  personal_no: 12312312,
  age: 25,
  studentstatus: "active",
};

console.log(user.studentstatus);

// დავალება - 8
let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

if (user2.age > 18 && user.studentstatus == "active") {
  console.log("Hello user");
} else if (user2.name == "levani") {
  console.log("Hello levani");
} else if (user2.studentstatus == "active" || user2.age < 25) {
  console.log("Hello anna");
} else console.log("Error");

user2.age > 18 && user2.studentstatus === "active"
  ? console.log("Hello user")
  : user2.name === "levani"
  ? console.log("Hello levani")
  : user2.studentstatus === "active" || user2.age < 25
  ? console.log("Hello anna")
  : console.log("Error");

// დავალება - 9

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let i of array6) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// დავალება  -  10

let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].status === true) {
    console.log(users[i]);
  }
}

// დავალება - 11

let array7 = [32, 14, null, "40", 50];

for (let i = 0; i < 5; i++) {
  if (array7[i] % 5 === 0 && typeof array7[i] === "number") {
    console.log(array7[i]);
  }
}
