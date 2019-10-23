console.log("hello world!");

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);

}

counter = 0
while (counter < 5) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
    counter++;
}

///remove duplicate
var test = [1, 1, 1, 2, 4];

function myfunction(inputList) {
    var mapTest = {}
    var newTest = []
    for (var i = 0; i < inputList.length; i++) {
        if (mapTest[inputList[i]]) {
            continue;
        } else {
            mapTest[inputList[i]] = true;
            newTest.push(inputList[i]);
        }

    }
    return newTest;
}

console.log(myfunction(test));