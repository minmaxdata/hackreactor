function comp(array1, array2) {
    if ((array1 !== null && array2 !== null)) {
        array1.filter(function (elem, index, array) {
            return index == array.indexOf(elem);
        }).sort((a, b) => a - b).map(value => value * value);
        array2.filter(function (elem, index, array) {
            return index == array.indexOf(elem);
        }).sort((a, b) => a - b);
        if (array1.length === array2.length) {
            var a1 = array1.sort((a, b) => a - b).map(value => value * value);
            array2.sort((a, b) => a - b);
            return a1.every((value, index) => value === Math.abs(array2[index]));
        }
    }
    return false
}
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
b2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

console.log(comp(a1, b2))