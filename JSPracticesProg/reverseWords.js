function reverseWords(str){
 console.log (str.split("").reverse().join("").split(" ").reverse().join(" "));
}
//  const str = "abc dog igh"; // cba god hgi
 reverseWords("abc dog igh");