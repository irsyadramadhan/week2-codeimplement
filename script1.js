// deteksi palindrome

let str = 'teNeT';

str = str.toLowerCase();

let arr = str.split('');

arr = arr.reverse();

reverseStr = arr.join('');

if(reverseStr === str){
    console.log('palindrome');
}else{
    console.log('not a palindrome');
};

// reverse words

// let str = 'Saya belajar Javascript';

// let arr = str.split(' ');

// arr = arr.reverse();

// newStr = arr.join(' ');

// console.log(newStr);