function FizzBuzz(n){
    for(let i = 1; i <= n; i++){
        if (i % 5 == 0 && i % 3 == 0){
            console.log('FizzBuzz');
        } 
        else if(i%3 == 0){
            console.log('Fizz');
            
        }
        else if(i%5 == 0){
            console.log('Buzz');

        }
        else{
            console.log(++i);

        }
    }
}

function FizzBuzz2(n){
    if(n%5 == 0 && n%3 === 0){
        return console.log('FizzBuzz')
    }
    else if(n%3 === 0){
        return console.log('Fizz');
    }
    else if(n%5 === 0){
        return console.log('Buzz');
    }
    else{
        return console.log(n);
    }
}

FizzBuzz2(75)