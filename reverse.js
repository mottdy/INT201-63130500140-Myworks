reverseString = (word) =>{
    let value = ""
    for (let i = word.length-1; i>=0; i--) {
        value += word[i];  
    }
    return value;
}

replaceVowels = (word)  => {
    let value = ""
    for (let i = 0; i<word.length; i++) {
        const vowels = ["A","E","I","O","U","a","e","i","o","u"]
            if(vowels.includes(word[i])){
                value += "*";  
            }else{
                value += word[i]; 
            }
    }
    return value
}

countVowels = (word)  => {
    let count = 0;
    for (let i = 0; i<word.length; i++) {
        const vowels = ["A","E","I","O","U","a","e","i","o","u"]
            if(vowels.includes(word[i])){
                count += 1; 
            }
        }
    return count
}


console.log(reverseString("Hello World"));
console.log(replaceVowels("Hello World"));
console.log(countVowels("Hello World"));
