const reverseNum = (num) =>{
    while (num> 0) {
        digit = num%10
        console.log(digit)
        num = Math.floor(num/10)
    }
}

reverseNum(5364)