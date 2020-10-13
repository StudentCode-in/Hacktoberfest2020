module.exports = {
    generateRandomNumbers(qty, start, end){
        let numbers = []
        let number
        for(var i = 0; i < qty; i++){
            number = parseInt(Math.floor(Math.random() * (end - start + 1))) + parseInt(start)
            if(numbers.includes(number)){
                i--
            } else {
                numbers.push(number)
            }
        }
        return numbers;
    }
    
}