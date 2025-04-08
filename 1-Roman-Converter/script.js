const input = document.getElementById('num');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

function convertToRoman(num) {
    const romanNumerals = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };

    let result = '';

    for (const value in romanNumerals) {
        while (num >= romanNumerals[value]) {
            // console.log(`running loop for ${romanNumerals[value]}`);
            result += value;
            num -= romanNumerals[value];
        }
        // console.log(`running loop for ${value}`);

        // if (num < value) {
        //     console.log(`${num} is greater than ${value}`);
        // }
    }

    return result;
}
btn.addEventListener('click', () => {
    const num = parseInt(input.value);
    if (num) {
        if (num > 0 && num < 4000) {
            const romanNumeral = convertToRoman(num);
            output.textContent = `The Roman numeral for ${num} is ${romanNumeral}`;
            input.value = '';

        } else {
            output.textContent = 'Please enter a number between 1 and 3999';
        }
    } else {
        output.textContent = 'Please enter a number between 1 and 3999';
    }
});

// Keyboard shortcut foe ENTER key
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const num = parseInt(input.value);
        if (num) {
            if (num > 0 && num < 4000) {
                const romanNumeral = convertToRoman(num);
                output.textContent = `The Roman numeral for ${num} is ${romanNumeral}`;
                input.value = '';
            } else {
                output.textContent = 'Please enter a number between 1 and 3999';
            }
        } else {
            output.textContent = 'Please enter a number between 1 and 3999';
        }
    }
});
// let num = 29
// let x = convertToRoman(num)
// console.log(x);