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


// // var numArry = [1, 2, 3, 4, 5]


// // console.log(numArry.concat(numArry.slice()))


// // console.log([...numArry, ...numArry]);

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

function myMapFunction(num) {
    return num + 1
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

///////////////////////////////////////////////////////!! double not equal//////////////////////////
console.log("!! shows undefined :" + !!undefined);
console.log("!! shows 0 :" + !!0);
console.log("!! shows '0' :" + !!"0");
console.log("!! shows empty string '' :" + !!"");
console.log("!! shows [] :" + !![]);

console.log([] == true); //because this [] changes to "" and ""changes to 0, but true changes to 1


/////////////////////////////////////////////////comma , ///////////////////////////////////////////
var commaArr = (2, 3, 5);
console.log("comma:" + commaArr);

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

console.log(coinChange([2, 5, 10], 33));



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