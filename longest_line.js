const numbers = []
for (let i = 1; i <= 9; i++) {
    numbers.push(i)
}

function queue(arr, size) {
    if (size > arr.length) {
        return;
    }
    var allResult = [];

    const a = function (arr, size, result) {
        if (result.length == size) {
            allResult.push(result);
        } else {
            for (var i = 0, len = arr.length; i < len; i++) {
                var newArr = [].concat(arr),
                    curItem = newArr.splice(i, 1);
                a(newArr, size, [].concat(result, curItem));
            }
        }
    }
    a(arr, size, [])

    return allResult;
}

let list = queue(numbers, 9)

const xyMaps = {}
for (let i of numbers) {
    xyMaps[i] = {
        x: Math.floor((i - 1) / 3),
        y: (i + 2) % 3
    }
}

const calcLens = (a, b) => {
    return Math.sqrt(Math.pow(xyMaps[a].x - xyMaps[b].x, 2) + Math.pow(xyMaps[a].y - xyMaps[b].y, 2))
}
// list = [[8,2,7,3,4,6,1,9]]
list = [[2,8,1,9,4,6,7,3,5]]

let maxLength = 0
let maxItem = ''
for (let item of list) {
    let target = item
    for (let i = 1; i < item.length; i++) {
        if (item[i] + item[i - 1] === 10) {
            const five = item.indexOf(5)
            if (five !== -1) {
                target = item.slice(0,five).concat(item.slice(five+ 1))
            }
            break
        }
    }
    let sum = 0
    for (let i = 1; i < target.length; i++) {
        sum += calcLens(target[i], target[i - 1])
    }
    if (sum > maxLength) {
        maxLength = sum
        maxItem = target.join('')
    }
}
console.log(maxLength, maxItem)