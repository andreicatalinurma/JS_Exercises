function fibonacciGenerator (n) {
    let fibArr = []
    if(n === 0) return fibArr 
    if(n === 1) return fibArr = [0]
    if(n === 2) {
        return fibArr = [0,1]
    } else {
        fibArr = [0,1]

        for(let i = 1; i < n-1; i++){
            let nextNum = fibArr[i -1] + fibArr[i]
            fibArr.push(nextNum)
        }
        return fibArr
    }

    
}


    console.log(fibonacciGenerator(1));
    console.log(fibonacciGenerator(2));
    console.log(fibonacciGenerator(13));