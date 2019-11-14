// var itemlist = ["banana", "apple", "orange", "apple", "orange", "orange"];
// var dic = {};
// var count = 1;
// var temp = "";


// var groupAnagrams = function(codetestArry = ["eat", "tea", "tan", "ate", "nat", "bat"]) {
//     const m = new Map();

//     for (const s of codetestArry) {
//         const keys = Array(26).fill(0);
//         for (const c of s) {
//             ++keys[c.charCodeAt(0) - 97]
//         }
//         const key = keys.join("#");
//         let val = [];
//         if (m.has(key)) {
//             val = m.get(key)
//         }
//         val.push(s);
//         m.set(key, val);
//     }

//     return Array.from(m.values());
// };



// const groupAnagramstwo = (codetestArry = ["eat", "tea", "tan", "ate", "nat", "bat"]) => {
//     const map = {};

//     for (let str of codetestArry) {
//         const key = [...str].sort().join('');

//         if (!map[key]) {
//             map[key] = [];
//         }

//         map[key].push(str);
//     }

//     return Object.values(map);
// };

// // for (i in itemlist) {
// //     for (j in itemlist) {
// //         if (i == j) {
// //             count += 1;
// //             dic[count] = i
// //         } else {
// //             dic[1] = j
// //         }
// //     }
// // }

// // for (var i = 0; i < itemlist.length; i++) {
// //     for (var j = 0; j < itemlist.length; j++) {
// //         if (itemlist[i] == itemlist[j]) {
// //             count += 1;
// //             dic[itemlist[j]] = count;
// //             count = 1;

// //         } else {

// //             dic[itemlist[i]] = 1;
// //         }
// //     }
// // }

// for (let el of itemlist) {
//     if (dic[el]) {
//         dic[el] += 1;
//     } else {
//         dic[el] = 1;
//     }
// }
// console.log(dic);




// var nums = [3, 5, -3, 3];
// var res = 0;

// for (var i = 0; i < nums.length; i++) {
//     if (nums[i] === i) {
//         res = nums[i]
//     }
// }

// console.log(res);




// var codetestArry = ["eat", "tea", "tan", "ate", "nat", "bat"];
// var temcode = [];
// var output = [];
// var includesEle = "";
// var newDic = {};


// for (let s of codetestArry) {
//     const str = s.split("").sort().join("");
//     if (!newDic[str]) {
//         newDic[str] = []
//     }

//     newDic[str].push(s)
// }

// // console.log(Object.values(newDic))




// console.log(abc());


// function abc() {
//     console.log("It's hoisted");

// }

// function mycl4() {
//     var d = 30;

//     function mycl5() { d += 1; };
//     mycl5();
//     return d;
// }
// x = mycl4();

// console.log(x);

// var add = (function() {
//     var e = 50;
//     return function() { e += 5; return e };
// })();


// (function(x) {
//     console.log(x);
// })("Hello, World!");















// var iife = (function f() {

//     setTimeout(f, 2000)




// })()


// console.log(iife);

// var adder = {
//     base: 1,

//     add: function(a) {
//       var f = v => v + this.base;
//       return f(a);
//     },

//     addThruCall: function(a) {
//       var f = v => v + this.base;
//       var b = {
//         base: 2
//       };

//       return f.call(b, a);
//     }
//   };

//   console.log(adder.add(1));         // This would log 2
//   console.log(adder.addThruCall(1)); // This would log 2 still

// var arguments = [1, 2, 3];
// var arr = () => arguments[0];

// arr(); // 1

// function foo(n) {
//     var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
//     return f();
// }


// console.log(foo(3).f);
// var n = 30
// var x = 1;
// var count = 0;

// while (n > 1) {
//     x *= n;
//     n--;
// }
// x = Math.floor(x);
// charx = x.toString()


// for (var i = charx.length - 1; i > 0; i--) {
//     if (charx[i] == 0) {
//         count++
//     } else {
//         break;
//     }

// }
// console.log(x)
// console.log(count);


// n = 30
// var result = 0;
// for (i = n; i > 0; i = Math.floor(i / 5)) {
//     result += Math.floor(i / 5)
// }


// console.log(result);


// nums = [];

// const dic = {};
// if (nums) {
//     return false
// } else {
//     for (var i of nums) {
//         if (dic[i]) {
//             return false
//         } else {
//             dic[i] = i
//         }
//         return true
//     }
// }

// var x = 0;
// var numb = 8;

// x = Math.sqrt(numb);
// var y = numb / 4

// console.log(Math.log2(numb) % 2);

// const f = { type: "1" };
// f.type = 2
// console.log(f.type);






////////////////////////////////////////////////forEach//////////////////////////////////////////////////////
var forEachArr = [1, 2, 1, 4];
forEachArr.forEach(myFunction)

function myFunction(item, index, arr) {
    arr[index] = item * 2
}
console.log(forEachArr);
/////////////////////////////////////////////////////reduce/////////////////////////////////////////////////////////////////////
var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// var myOrderedArray = myArray.reduce(function(accumulator, currentValue) {
//     ////if the letter is the last one in the array we push 
//     if (accumulator.indexOf(currentValue) === -1) {
//         accumulator.push(currentValue);
//     }
//     return accumulator
//         ///initial value is an empty array
// }, [])
var myOrderedArray = myArray.reduce((accumulator, currentValue) => {
    ////if the letter is the last one in the array we push 
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator
        ///initial value is an empty array
}, [])

console.log("reduce:", myOrderedArray);

///////////////////////////////////////////////filter/////////////////////////////////////////////////
var filterArr = [9, 8, 8, 54, 7];
filterArr.filter(myFilterFunction);

function myFilterFunction(num) {
    return num >= 10;
}

console.log(filterArr.filter(myFilterFunction));


////////////////////////////////////////////////find////////////////////////////////////////////////
var findArr = [9, 8, 8, 54, 7];

function myFindFunction(num) {
    return num >= 8;
}
/////////////return the first value
console.log(findArr.find(myFindFunction));




//////////////////////////////////////////////////from///////////////////////////////////
var fromArrStr = "Pasha";

var fromArr = Array.from(fromArrStr);
console.log(fromArr);



//////////////////////////////////////////////////includes//////////////////////////////////////
var includesArr = ["A", "B", "b"];
var includesBoo = includesArr.includes("a");
console.log(includesBoo);




/////////////////////////////////////////////////Entires/////////////////////////////////////
var entiresArr = ["a", "b", "c"];
var entiresArrRes = entiresArr.entries();
// entiresArrRes.forEach(myEntiresFunction);
var res = [];
for (i of entiresArrRes) {
    i += "b";
    res.push(i);
}

console.log(res);
////////////////////[ '0,ab', '1,bb', '2,cb' ]

/////////////////////////////////////////////////////map////////////////////////////////////
var mapArr = [3, 16, 51, 2];
mapArr.map(myMapFunction);

function myMapFunction(num, index, arr) {
    return arr[index] = num * 2
        // Math.sqrt(num)
}
//////////map will return, for each don't need a return

console.log("Map:", mapArr.map(myMapFunction));
///////////////////////////////////////////////////Math.max()////////////////////////////////////////
var mathMaxArr = [2, 2, 5, 7];

console.log(Math.max(...mathMaxArr));
////////////////////////////////////////////////////Undefined & null////////////////////////////////
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined == null);
console.log(undefined === null);

///////////////////////////////////////////////////////!! double not equal//////////////////////////
console.log("!! shows undefined :" + !!undefined);
console.log("!! shows 0 :" + !!0);
console.log("!! shows '0' :" + !!"0");
console.log("!! shows empty string '' :" + !!"");
console.log("!! shows [] :" + !![]);

console.log([] == true); //because this [] changes to "" and ""changes to 0, but true changes to 1


/////////////////////////////////////////////////comma , ///////////////////////////////////////////
var commaArr = (2, 3, 5);

function myCommaFunc() {
    var a = 0;
    return (a += 7, a);
}
console.log("comma:" + commaArr);
console.log("comma:" + myCommaFunc());


//////////////////////////////////////////////// a && b /////////////////////////////////////////////
var a = 5;
var b = 3;
console.log(a || b); ///return the first true

console.log(a && b); /// return the last true



/////////////////////////////////////////////////////Two Sum//////////////////////////////////////////
var TwoSumNums = [2, 2, 5, 12, 3, 4];
var target = 7;

function TwoSum() {
    const map = {};
    for (let i = 0; i < TwoSumNums.length; i++) {
        var temp = target - TwoSumNums[i]
        if (map[temp]) {
            return [map[temp], i]
        } else {
            map[TwoSumNums[i]] = i;
        }
    }
}

console.log(TwoSum());
///////////////////////////////////////////////////////Power of Three///////////////////////////////////////////////
var PowerOf3 = 1;

function PowerofThree() {
    while (PowerOf3 > 3) {
        PowerOf3 = PowerOf3 / 3

    }
    if (PowerOf3 - 3 == 0) {
        return true
    } else if (PowerOf3 == 1) {
        return true
    } else {
        return false
    }

}
console.log(PowerofThree());

/////////////////////////////////////////////////////////two arrays//////////////////////////////////////////////
const twoArrayOne = [2, 3, 4, 1, 4]
const twoArrayTwo = [2, 4, 5]

function TwoArrays() {
    let set = new Set(twoArrayOne);
    return [...new Set(twoArrayTwo.filter(n => set.has(n)))]
}

console.log(TwoArrays());
/////////////////////////method two//////////////////////////
function intersection() {
    let set = new Set(twoArrayOne);
    let res = new Set();

    for (var i = 0; i < twoArrayTwo.length; ++i) {
        if (set.has(twoArrayTwo[i])) {
            res.add(twoArrayTwo[i])
        }

    }
    return Array.from(res)
};

let tt = intersection();
console.log(tt);





////////////////////////////////////////////////////////////////power of four///////////////////////////////////////////////////////
var powerofFour = 4;

function PowerOfFour() {
    return (Math.log(powerofFour) / Math.log(4)) % 1 === 0;

}
console.log(PowerOfFour());







////////////////////////////////////////////////////////////Two Array interaction 2/////////////////////////////////////////////////////
var TAR21 = [1, 2, 2, 1];
var TAR22 = [2, 2];

function TwoArrays2() {

    const map = new Map();
    const res = [];
    for (n of TAR21) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1)
        } else {
            map.set(n, 1)
        }
    }

    for (x of TAR22) {
        if (map.has(x)) {
            res.push(x);
            map.set(n, map.get(n) - 1);
        }
    }
    return res

}

console.log(TwoArrays2());
///////////////////////////////////////////////////////////////perfect Square/////////////////////////////////////////////////////////////////////////////////////
////////////////////two pointer////////////////////////////////Time is low,space is ok
var perfectNum = 100;


function myPerfectSquare() {
    let start = 1;
    let end = perfectNum;
    let mid;
    if (perfectNum == 1 || perfectNum == 0) return true;
    if (perfectNum < 0) return false;


    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (mid * mid == perfectNum) {
            return true
        } else if (mid * mid > perfectNum) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

    }
    return false

}
console.log(myPerfectSquare());
/////////////////////stupid solution/////////////////////////////////////
function myPerfectSquare2() {
    var n = 0;
    if (perfectNum < 0) return false;
    if (perfectNum == 1 || perfectNum == 0) return true;
    while (n < perfectNum) {
        if (n * n == perfectNum) {
            return true
        } else {
            n += 1;
        }
    }
    return false

}
console.log(myPerfectSquare2());





///////////////////////////////////////////////////////////////////////Map & Object//////////////////////////////////////////////////////


let testingMap = { 't1': 1, 't2': 2, 't3': 3 }
var testingMap2 = new Map();
testingMap2.set('m1', 1)
    .set('m2', 2)
    .set('m3', 30);
let iterator = testingMap2.values();

console.log("Map() and Object", testingMap2);
console.log('t3' in testingMap);
console.log(testingMap2.get(30));
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


/////////////////////////////////////////////////////////////Coin change/////////////////////////////////////////////////////////////////////////
var coinChange = function(coins, amount) {
    coins.sort((a, b) => b - a);

    let res = Infinity;


    function helper(k, amount, count) {
        const coin = coins[k];

        // last smallest coin
        if (k === coins.length - 1) {
            if (amount % coin === 0) {
                res = Math.min(res, count + Math.floor(amount / coin));

            }
        } else {
            for (let i = Math.floor(amount / coin); i >= 0 && count + i < res; i--) { // count + i < res is for pruning, avoid unnecessary calculation
                helper(k + 1, amount - coin * i, count + i);
            }
        }
    }

    helper(0, amount, 0);

    return res === Infinity ? -1 : res;
};

console.log("coinchange:", coinChange([2, 5, 10], 33));


/////////////////////////////////////////////////////////////Coin change(with details)/////////////////////////////////////////////////////////////////////////
var change = function(coins, amount) {
    const N = coins.length

    const DP = Array(amount + 1).fill(0)

    DP[0] = 1

    for (const coin of coins) {
        for (let col = coin; col <= amount; col++) {
            DP[col] += DP[col - coin]
        }
    }

    return DP[amount]
};

console.log("coinchange2:", change([2, 5, 10], 33));



//////////////////////////////////////////////////////////////////////////call & apply///////////////////////////////////////////////////
function myCall(n, m) {
    n = n + m;
    return n;
}
console.log(myCall.call(undefined, 2, 3)); ////pass arguments list
console.log(myCall.apply(undefined, [2, 4, 3, 4, 5])); ////pass argument's arrary
var applyArr = ["a", "b"];
var applyNums = [1, 2, 3];

//applyArr.push.apply(applyArr, applyNums);
applyArr.push.call(applyArr, ...applyNums);
console.log(applyArr);

//call and apply can use object items from other object scope within the current object scope/////////////////////I M P O R T A N T !////////
var callApplyObject = {
    name: "callApply",
    id: "1",
    callApplyFunc() {
        console.log(this.name + this.id);

    },
}

var callApplyTest = {
    name: "test",
    id: "2"
}

callApplyObject.callApplyFunc();
callApplyObject.callApplyFunc.apply(callApplyTest);
////////////////////////////////////////////////////////////////////////////////////////climbing stairs///////////////////////////////////////////////////////////

var climbingdp = function(n) {
    var dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}


console.log(climbingdp(12));


//////////////////////////////////////////////////////////////////////////////////////////Minimum Swaps///////////////////////////////////////////////////////////////



function myMinSwap(arr) {
    let swap = 0;
    let visited = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        let j = i;
        let cycle = 0;

        while (!visited[j]) {
            visited[j] = true;
            j = arr[j] - 1;
            cycle += 1;

        }
        if (cycle !== 0) {
            swap += cycle - 1;
        }
    }
    return swap;

}


console.log(myMinSwap([5, 3, 2, 1, 4]));
//////////////////////////////////////////////////////////////////////////////////////////////ransomNote and magazine(Ransom Note) check a string whether has another string////////////////////////////////////////////////////////
let ransomNote = "fffbfg";
let magazine = "effjfggbffjdgbjjhhdegh";

var canConstruct = function(ransomNote, magazine) {
        var map = {};
        let rc = ransomNote.split('');
        let mc = magazine.split('');

        for (let i = 0; i < magazine.length; i++) {
            if (map[mc[i]] >= 0) {
                map[mc[i]] += 1;
            } else {
                map[mc[i]] = 1;
            }
        }
        console.log(map)
        for (let i = 0; i < ransomNote.length; i++) {
            if (map[rc[i]]) {
                map[rc[i]] -= 1;
                if (map[rc[i]] < 0) {
                    return false
                }
            } else {
                return false
            }
        }
        return true
    }
    //     var map = {};
    //     var mchars = magazine.split('');
    //     var rchars = ransomNote.split('');

//     var i;
//     for (i = 0; i < mchars.length; i++) {
//         map[mchars[i]] = (map[mchars[i]] || 0) + 1;
//     }

//     for (i = 0; i < rchars.length; i++) {
//         map[rchars[i]] = (map[rchars[i]] || 0) - 1;
//         if (map[rchars[i]] < 0) {
//             return false;
//         }
//     }
//     return true;
// };

console.log(canConstruct(ransomNote, magazine));

//////////////////////////////////////////////////////////////////////
var a;
let notd;


for (var j = 0; j < 5; j++) {
    console.log(j);

}
console.log("j", j);

////////////////////////////////////////////////////////////////////////function format/////////////////////////////////////////////////////
function Person(name) {

    this.name = name;
}

var person = Person();
console.log(person); // undefined
//console.log(person.name); // Uncaught TypeError: Cannot read property 'name' of undefined

var person = new Person('John');
console.log(person); // Person { name: "John" }
console.log(person.name); // "john"

var person = function Person(name) {
    this.name = name;
}

console.log("con:", person.name);
/////////////////////////////////////////////////////////////////////////////////Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5////////////////////////////////////////////
/////////////Fizzbuzz////////////////////

function FizzbuzzFuc() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + "FizzBuzz");
        } else if (i % 5 == 0) {
            console.log(i + "Buzz");
        } else if (i % 3 == 0) {
            console.log(i + "Fizz");
        }
    }
}
console.log(FizzbuzzFuc());
///////////////////////////////////////////////////////////////////////////////////////Spread Operator/////////////////////////////////////////////////

(function spreadOFuc() {
    const [a, b, ...rest] = [1, 2, 3, 4]

    console.log(rest);
})();
////////////////////////////////////////////////////////////////////////////////////Closure///////////////////////////////////////
var testModule = (function() {

    var counter = 0;

    return {

        incrementCounter: function() {

            return counter++;
        },
        resetCounter: function() {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };

})();

testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();
testModule.resetCounter();


////////////////////////////////////////////////////concat Array////////////////////////////////////////////////////// 
var numArry = [1, 2, 3, 4, 5]

console.log(numArry.concat(numArry.slice()))

console.log([...numArry, ...numArry]);
/////////////////////////////////////////////////////exec()/////////////////////////////////////////////////////////////
var myExec = function() {
    let newArray = "Hello, This is pasha!";
    let patt = /is/g;
    let res = patt.exec(newArray);
    console.log(res);

    return res

}
myExec()
    /////////////////////////////////////////////////////////convert Object to JSON/////////////////////////////////////////////////
let testObjectToJSON = {
    'Angular': 'JS',
    'CSS': 'HTML',
    'userInfo': {
        'first': 'a',
        'last': 'b'
    }
};
var myFunctionToJSON = function(obj) {
    let res = [];
    for (let k in obj) {
        let tempObj = {};
        tempObj['key'] = k;
        if (Object.prototype.toString.call(obj[k]) === "[object Object]") {
            tempObj['value'] = myFunctionToJSON(obj[k]);
        } else {
            tempObj['value'] = obj[k];
        }
        res.push(tempObj);
    }
    return res;
}
console.log(myFunctionToJSON(testObjectToJSON));
/////////////////////////////////////////////////////////////////////////////////////////SOAP CALL////////////////////////////////////////////////////
function soapRequest() {
    var str = 'your SOAP request';

    function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, false);
        } else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            console.log("CORS not supported");
            alert("CORS not supported");
            xhr = null;
        }
        return xhr;
    }
    var xhr = createCORSRequest("POST", "http://localhost:8080");
    if (!xhr) { console.log("XHR issue"); return; }
    xhr.onload = function() {
        var results = xhr.responseText;
        console.log(results);
    }
    xhr.setRequestHeader('Content-Type', 'text/xml');
    xhr.send(str);
}
////////////////////////////////////////////////////////////////////////////////empty Array////////////////////////////////
var myEmpty = function() {
    let testArr = [1, 2, 3];
    ////(1)
    while (testArr.length > 0) {
        testArr.pop();
    }
    //(2) testArr.length = 0;
    //(3) testArr = [];
    //(4) testArr.splice(0, testArr.length);
    console.log("myEmptyArray:", testArr);
    return testArr

}
console.log(myEmpty());
///////////////////////////////////////////////////////////////////////////////////ES6 number////////////////////////////////////////////

console.log(Number.isNaN(NaN)); ////use for NaN only
console.log(isNaN("2"));
console.log(typeof("2"));
////////////////////////////////////////////////////////////////////////////////remove duplicate///////////////////////////////////////////////////////
var removeDuplicate = function(nums) {
    console.log([...new Set(nums)]);

}

removeDuplicate(["n", "sn", "n", "ss"])
var removeDuplicateReduce = function(arr) {
    return arr.reduce((total, val) => {
        if (total.indexOf(val) === -1) {
            total.push(val)
        }
        return total
    }, [])

}
console.log(removeDuplicateReduce(["1", "1", "2"]));



/////////////////////////////////////////////////////////////////////////////////open nested Array/////////////////////////////////////////////////////////////
var openNestedArray = function(arr, d) {
    return d > 0 ? arr.reduce((total, val) => total.concat(Array.isArray(val) ? openNestedArray(val, d - 1) : val), []) : arr.slice()

}
var arrOpen = [1, 2, [3, 4]];


/////arrOpen.flat();


console.log(openNestedArray([1, 2, [3, 4, [4, 5]]], Infinity));
console.log(arrOpen);
//////////////////////////////////////////////////////////////////////////////////Object modifing//////////////////////////////////////////////////////////////////////////

var myObjectModifying = function() {
    let ObjectT = {
            Name: "Pasha",
            age: 18,
        }
        ///freeze
        // Object.freeze(ObjectT);
        // ObjectT.Name = "PAPAa";
        // console.log("freezed:", ObjectT);//////////////////won't be changed a little
        ///seal
        // Object.seal(ObjectT);
        // ObjectT.Name = "PAPAa";
        // ObjectT.New = "hello";/////////////////////////////can change, but not add
    Object.defineProperty(ObjectT, 'Why', {
        value: "Hello",
        writable: false,
        enumerable: true
    })


    console.log(ObjectT.Why);
    ObjectT.Why = "?";
    console.log(ObjectT.Why);


    return ObjectT
}

console.log(myObjectModifying());
//////////////////////////////////////////////////////////////////////////////////////////Math.max()//////////////////////////////////////////////////////
console.log(Math.max()); ///////////////because the Math.max() function needs to use a smallest comparation for comparing