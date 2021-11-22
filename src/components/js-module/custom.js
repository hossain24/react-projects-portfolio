export const sayHello = () => {
    var name = [
        { id: 1, name: "Hassan Jamil", age: 30 },
        { id: 2, name: "Hassan Jamil", age: 30 },
        { id: 3, name: "Hassan Jamil", age: 30 }
    ];
    return name;
}

export const addNumbers = (i, j) => {
    return i + j;
}

export const dotShow = () => {

    for (var i = 0; i < 10; i++) {
        return i++;
        // console.log(arrNumbers);
    }
}

export const evaluate = () => {
    var a;
    var b = a ?? 5;
    return b;
}

function frac(n) {
    return n - Math.floor(n)
}

function rand(n) {
    return frac(Math.sin(n) * 43758.5453)
}

console.log(rand);
