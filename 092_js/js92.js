const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

function findAllIndexes(arr, char) {
    const indexes = [];
    arr.forEach((element, index) => {
        if (element === char) {
            indexes.push(index);
        }
    });
    return indexes;
}

console.log(findAllIndexes(alphabets, 'a'));  // [0, 2, 4]
