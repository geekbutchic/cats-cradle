function challenge1(str) {
    let i = 0;
    while (i < str.length) {
        console.log(str[i]);
        i = i + 1;
    }
}

challenge1('Hello.');
challenge1('Oh hi.');

function challenge2(str) {
    let i = 0;
    while (i < str.length) {
        console.log (str[i]);
        i = i + 3;
    }
}

challenge2 ('I am the alfalfa and the omelette');

function challenge3 (str) {
    let i = str.length -1;
    while (i >= 0) {
        console.log (str[i]);
        i = i - 1;
    }
} 

challenge3 ('Hello');
challenge3 ('Oh hi');

function challenge4(str) {
    let vowels = [];

    let lowerCase = str.toLowerCase;

    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowels.push(str[i]);

            console.log(str[i]);
        }
    }
}