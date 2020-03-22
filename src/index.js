module.exports = function toReadable (number) {
    const nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        hundred: 'hundred'
    };
    let str = number + '',
        lengthOfStr = str.length,
        result = [];

    if (lengthOfStr === 3) {
        result.push(nums[str[0]]);
        result.push(nums.hundred);

        if (number % 100) {
            number = number % 100;
            str = number + "";
            lengthOfStr = str.length;
        }
    }

    if (lengthOfStr === 2 && number > 20) {
        result.push(nums[str[0] + '0']);

        if (number % 10) {
            result.push(nums[str[1]]);
        }
    }

    if (lengthOfStr === 1 || number <= 20) {
        result.push(nums[number]);
    }

    result = result.join(' ');
    return result;
}
