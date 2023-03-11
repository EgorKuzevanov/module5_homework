const result = 'Hello'

console.log(ReverseString(result))

function ReverseString(str) {
    if(!str || str.length < 2 || typeof str !== "string") {
        return new Error("Not a valid input");
    }
    const backwards = [];
    for (let i = str.length; i > -1; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}
