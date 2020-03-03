module.exports = function toReadable(number) {
    
    let words = {
        0:'zero', 1:'one', 2:'two', 3:'three',  4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
        10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen',
        20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety', 100:'hundred'
    };
    
    let stringifiedNumber = number.toString();
    let hundreds = stringifiedNumber[stringifiedNumber.length - 3];
    let underHundredNumber = stringifiedNumber.slice(stringifiedNumber.length - 2);
    let tens = stringifiedNumber[stringifiedNumber.length - 2];
    let units = stringifiedNumber[stringifiedNumber.length - 1];
    let result = '';

    if (stringifiedNumber.length === 3) {
        result += `${words[hundreds]} ${words[100]} `;
    }

    if (words[underHundredNumber]) {
        result += `${words[underHundredNumber]}`;
    } else {
        if (Number(tens)) {
            if (Number(units)) {
                result += `${words[tens + 0]} ${words[units]}`;
            } else {
                result += `${words[tens + 0]}`;
            }
        } else {
            if (Number(units)) {
                result += `${words[units]}`;
            }
        }
    }

    return result.trim();
}
