module.exports = function reverse (n) {
    let string = String(n);

    let arrTemp = string.split('-');
    string = arrTemp.join('');
    arrTemp = string.split('');
    let res = arrTemp.reverse().join('');
    return res;
}
