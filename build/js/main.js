"use strict";
// lesson 1
// let username = 'Dave';
// console.log(username);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// let a: number = 12;
// let b: number = 6;
// let c: number = 2;
// console.log(a / b);
// console.log(c * b);
// lesson 2
// let myName: string = 'Dave';
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: any;
// myName = 'John';
// meaningOfLife = 42;
// isLoading = true;
// album = 5150;
// const sum = (a: number, b: string) => {
//     return a + b;
// };
// let postId: string | number
// let isActive: number | boolean;
// let re: RegExp = /\w+/g;
// lesson 3
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple 
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 42;
// Objects
// let myObj: object
// myObj = []
// console.log(typeof myObj);
// myObj = bands
// myObj = {};
// const exampleObj = {
//     prop1: 'Dave',
//     prop2: true,
// }
// exampleObj.prop1 = 'John'
// interface Guitarist {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }
// let evh: Guitarist = {
//     name: 'Eddie',
//     active: false,
//     albums: [1984, 5150, 'OU812']
// };
// let jp: Guitarist = {
//     name: 'Jimmy',
//     albums: ['I', 'II', 'IV']
// }
// evh = jp
// const greetGuitarist = (guitarist: Guitarist) => {
//     if (guitarist.name) {
//         return `Hello ${guitarist.name.toUpperCase()}!`;
//     }
//     return 'Hello!';
// };
// console.log(greetGuitarist(jp));
// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// lesson 4
// Type Aliases
// type stringOrNumber = string | number
// type stringOrNumberArray = (string | number)[]
// type Guitarist = {
//     name: string,
//     active: boolean,
//     albums: stringOrNumberArray
// }
// type UserId = stringOrNumber
// Literal types
let myName;
let userName;
userName = 'Amy';
// functions 
// const add = (a: number, b: number): number => {
//     return a + b
// }
// const logMsg = (message: any): void => {
//     console.log(message)
// }
// logMsg('Hello!')
// logMsg(add(2, 3))
// let subtract = function (c: number, d: number): number {
//     return c - d
// }
// type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }
// let multiply: mathFunction = function (c, d) {
//     return c * d
// }
// logMsg(multiply(2, 2))
// optional parameters 
// const addAll = (a: number, b: number, c?: number): number => {
//     if (typeof c !== 'undefined') {
//         return a + b + c
//     }
//     return a + b
// }
// default param value
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//     return a + b + c
// }
// logMsg(addAll(2, 3, 2))
// logMsg(addAll(2, 3))
// logMsg(sumAll(2, 3))
// logMsg(sumAll(undefined, 3))
// Rest Parameters 
// const total = (a: number, ...nums: number[]): number => {
//     return a + nums.reduce((prev, curr) => prev + curr);
// }
// logMsg(total(10, 2, 3))
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard 
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type 
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
// convert to more or less specific 
let a = 'hello';
let b = a; // less specific 
let c = a; // more specific 
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//10 as string
10;
// The DOM 
// const img = document.querySelector('img')!
// const myImg = document.getElementById('#img') as HTMLImageElement
// const nextImg = document.getElementById('#img') as HTMLImageElement
// img.src
// myImg.src
// lesson 6
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
//////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
//////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Halen', '5150']; // must be string data
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//todaysTransactions.Pizza = 40
console.log(todaysTransactions['Dave']); // undefined
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
// lesson 8
const echo = (arg) => arg;
//////////////////////////////////
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
///////////////////////////////////
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false)); // false
console.log(isTrue(0)); // false
console.log(isTrue(true)); // true
console.log(isTrue(1)); // true
console.log(isTrue('Dave')); // true
console.log(isTrue('')); // false
console.log(isTrue(null)); // false
console.log(isTrue(undefined)); // false
console.log(isTrue({})); // modified // false
console.log(isTrue({ name: 'Dave' })); // true
console.log(isTrue([])); // modified // false
console.log(isTrue([1, 2, 3])); // true
console.log(isTrue(NaN)); // false
console.log(isTrue(-0)); // false
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here 
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
//console.log(processUser({ name: 'Dave'}))
///////////////////////////////////////
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
///////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = ['Dave', 42, true];
console.log(myState.state);
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly 
const recordAssignment = (assign) => {
    // send to database, etc. 
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :)
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record 
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// ReturnType 
//type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
