module.exports = function reverse (number) {
    const reversed = number.toString().split('').reverse().join('');
    return parseInt(reversed);    
}
