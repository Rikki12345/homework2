for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    
    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }
  
    else {
        console.log(i);
    }
}

function changes(){
    console.log('this will show changes made')
}

for  (let j = 1; j < 100; i--) {
    console.log('this is another for loop')
}

for  (let f = 1; f < 100; i--) {
    console.log('this is another for  f loop')
}