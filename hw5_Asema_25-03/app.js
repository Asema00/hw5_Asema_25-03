 function reverseStrings(...strings) {
     for (let i = 0; i < strings.length; i++) {
         const symbol = strings[i].split('');
         let newStrings = '';
         for (let i = symbol.length - 1; i >= 0; i--) {
            newStrings += symbol[i];
             }
         console.log(newStrings)
     }
}
 reverseStrings('фронтенд','апрель');


// /* функцию, которая принимает неограниченное количество чисел и выводит их среднюю арифметическую  	1
 function numbers(...number) {
    const sum = number.reduce((a,b)=>a+b)
     console.log(sum /number.length)
 }numbers(1,2,3,5)

 // /*дз которое задавали в классе*/
 function  getCoffee() {
     var drinkName = prompt('What do you want to drink?(coffee)').toLocaleLowerCase()
     if (drinkName === 'cofee') {
         var coffee = prompt('How do you want your coffee? black/with cream').toLocaleLowerCase()
         coffee === 'black'
             ? alert('One black coffee coming right up!')
             : coffee === 'with cream'
                 ? alert('One black with cream coming right up!')
                 : alert("Sorry, we don't have")
     }
 }
