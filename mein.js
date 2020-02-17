const app = new Vue({
  el: "#app",
  data: {
    message: "Hallo, World",
    categories: ["Name", "Party", "State", "Votes with party %"]
  },
  template: "<input placeholder='{{message}}'></input>",
  created: function() {
    this.$http
      .get("https://api.propublica.org/congress/v1/113/senate/members.json", {
        headers: {
          "X-API-Key": "ZERZB6sQwFt0IQHJ9NIklUwqQMuPYsW6yBT8Fk4X"
        }
      })
      .then(function(responce) {
        console.log(responce.data.status);
      });
  }
});

// const year = 365;
// const month = 12;
// const day = 24;
// const hour = 60;
// const minute = 60;

// function my_age_in_seconds(age){
//     let col = minute * hour * day * year;
//     let my_age = age * col;
//     return my_age;
// }

// console.log(my_age_in_seconds(31));
// const my_bilyon_seconds_birthday = (birthday) =>  {
//     const billon_seconds = 1000000000;
//     const in_years = billon_seconds / minute / hour / day / year;
//     const date = birthday + in_years;
//     const new_age = date - birthday;
//     return new_age;
// }

// console.log(my_bilyon_seconds_birthday(1984.5));

// const duble_num = (arr) => {
//     let num_arr_was = [];
//     for (let ind=0; ind < arr.length; ind++) {
//         console.log(ind);
//         for (let ind_was=ind+1; ind_was < arr.length; ind_was++){
//             if (arr[ind] == arr[ind_was]){
//                 num_arr_was[num_arr_was.length] = arr[ind];
//             }
//         }

//     }
//     return num_arr_was;
// }

// const number = 'matan went kjndsjknv for a hhrnbsffsjdnvsv walk';

// const reverse = (num) => {
//     let str_num = num.toString();
//     let reverse_str='';
//     for (let i = str_num.length-1; i >= 0; i--){
//         reverse_str += str_num[i];
//     }
//     return reverse_str
// }

// const string_by_order = (str) =>{
//     let sorted = str.split('');
//     sorted.sort()
//     let str_in_order = '';
//     for(i_char in sorted){
//         str_in_order += sorted[i_char];
//     }
//     console.log(str_in_order);
// }

// const upper_str = (str)=>{
//     let by_word = str.split(' ');
//     let new_upper = '';
//     for (i_word in by_word){
//         new_upper += by_word[i_word][0].toUpperCase();
//         new_upper += by_word[i_word].slice(1, by_word[i_word].length);
//         new_upper += ' ';
//     }
//     return new_upper
// }
//  longest_word = (sentence)=>{
//     let by_word = sentence.split(' ');
//     let longest_word = '';
//     for (i_word in by_word){
//         if (by_word[i_word].length > longest_word.length){
//             longest_word = by_word[i_word];
//         }
//     }
//     return longest_word
// }

// const change_the_a = (str, a=1)=>{
//     let split_str = str.split('');
//     let weird_sentece = '';
//     for (i_char in split_str){
//         if(split_str[i_char] == 'a' || split_str[i_char] == 'A'){
//             weird_sentece += a.toString();
//         } else {
//             weird_sentece += split_str[i_char];
//         }
//     }
//     return weird_sentece
// }

// const numbers = [1, 2, 3, -20, 4, 5, -3, 6, 7, 8, 100, 9];

//  const sum_arr = (arr)=>{
//     const sum = numbers.reduce((a,b) => a+b, 0);
//     return sum
//  }

//  const smallest_num = (arr) =>{
//      let smallest_num = arr[0];
//      for(i_num in arr){
//          if (smallest_num > arr[i_num]){
//              smallest_num = arr[i_num];
//          }
//      }
//      return smallest_num
//  }

// const adds_the_even = (num)=>{
//     let even_adds = [];
//     for(let i = num-1; i>0 ; i--){
//         if(i % 2 == 0){
//             even_adds.push(i);
//         }
//     }
//     return even_adds
// }

// const adds_numbers_between = (a, b) => {
//     for (let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             continue;
//         } else {
//             document.write(i);
//             document.write(", ");
//         }
//     }
// };

// adds_numbers_between(1, 13);

// console.log(sum_arr(numbers));
