function palindrome(){
    const name ="Nalina";
    console.log(name)
    const reversed = name.split('').reverse().join('');
    console.log(reversed)
    if(name == reversed){
        console.log(true);
    }else{
        console.log(false);
    }
}
palindrome();