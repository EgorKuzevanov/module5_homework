var result

result = randomIntFromInterval(0, 100)

console.log(result)

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
