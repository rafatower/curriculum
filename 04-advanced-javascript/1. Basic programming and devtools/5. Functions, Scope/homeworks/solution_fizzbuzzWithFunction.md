## Solution
(you should only see when finish the exercise)
```javascript
function Main() {
    this.execute = function (){
        let result = fizzBuzz("15");
        console.log(result);
    }

    function fizzBuzz(number){
        if(isFizz(number) && isBuzz(number)){
            return "FizzBuzz!"
        }
        if(isFizz(number)){
            return "Fizz!!"
        }
        if(isBuzz(number)){
            return "Buzz!"
        }
        return number;
    }

    function isFizz(number){
        return number % 3 == 0;
    }

    function isBuzz(number){
        return number % 5 == 0;
    }
}
new Main().execute();
```