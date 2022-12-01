
function checkPalindrome(N, str) {
    let bag="";
    for(let i=0; i < str.length; i++){
        bag += str[i]
    }
    let rev="";
    for(let j=bag.length-1; j >= 0; j--){
        rev += bag[j]
    }
    
    if(rev == bag){
        console.log("Yes");
    }else{
        console.log("No")
    }
}