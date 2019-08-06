# Loops And Arrays

## Loops

One of a computer's greatest abilities is to repeat a task over and over so we don't have to.
Loops let us tell the computer to loop over a block of code so that we don't have to write out the same.

### Before we jump into writing a loop, let's write the result of a loop, so that we can better understand how loops work.

```javascript
console.log('Walking east 0 step');
console.log('Walking east 1 step');
console.log('Walking east 2 step');
console.log('Walking east 3 step');
console.log('Walking east 4 step');
console.log('Walking east 5 step');
console.log('Walking east 6 step');
console.log('Walking east 7 step');
console.log('Walking east 8 step');
console.log('Walking east 9 step');
console.log('Walking east 10 step');
console.log('Walking east 11 step');
console.log('Walking east 12 step');
console.log('Walking east 13 step');
console.log('Walking east 14 step');
console.log('Walking east 15 step');
console.log('Walking east 16 step');
console.log('Walking east 17 step');
console.log('Walking east 18 step');
console.log('Walking east 19 step');
console.log('Walking east 20 step');
```

### Loop, for. loops through a block of code a number of times.
It includes the following four important parts
    
```javascript
for ([initial value]; [condition]; [incremented value]){
    statement
}
```
    
- **Initialization**.An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with var or let keywords.

- **Condition**.An expression which will test if a given condition is true or not. If the condition is true, then the code given inside the loop will be executed, otherwise the control will come out of the loop.

- **final-expression**.An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.

- **Statement**. A statement that is executed as long as the condition evaluates to true. 

Example:
```javascript
    for(let i = 0; i <=20; i++){
        console.log('Walking east '+i+' step');
    }
```


### loop, While. Loops through a block of code while a specified condition is true.

Example:
```javascript
    let steps = 0;
    while(steps <20){
        steps = steps + 1;
        console.log('Walking east '+steps+' step');
    }
    
    let number = 0;
    while(number !== 8){
        number = number +1
    }
    console.log(number+" is eight");
```

## Array

The **array** are a way to store collections of items into a single unit.
The array has some number of slots, each of which holds an individual item.
You can add and delete items to those slots as needed.
Te syntax is:

```javascript
    let array = [];
    array[0] = "bananas";
    array[1] = "pineapple";
    array[2] = "water melon";
    array[3] = "fruit juice";
    
    console.log(array[2]); //show "waterMelon"
```

- The **length** accessor property represents the length (in elements) of a typed array.

Example
```javascript
    let shoppingList = [];
    shoppingList[0] = "bananas";
    shoppingList[1] = "pineapple";
    shoppingList[2] = "water melon";
    shoppingList[3] = "fruit juice";
    
    //show you have 4 in the shopping list.
    console.log("you have "+shoppingList.length+" in the shopping list.");
```

- The **pop()** method removes the last element from an array and returns that element. This method changes the length of the array.

```javascript
    let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale'];
    
    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
    
    plants.pop();
    
    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

- The **push()** method adds one or more elements to the end of an array and returns the new length of the array.
```javascript
    let animals = ['pigs', 'goats', 'sheep'];
    
    animals.push('cows');
    
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]
```


## Array + Loops

The true potency arrays is when combine with the loops. You can read the content of way very useful.

Example:

```javascript
     let shoppingList = [];
        shoppingList[0] = "bananas";
        shoppingList[1] = "pineapple";
        shoppingList[2] = "water melon";
        shoppingList[3] = "fruit juice";

    console.log("Today you bought:");
    for(let i = 0; i < shoppingList.length;i++ ){
        console.log(i+". "+shoppingList[i]);
    }
```

## Nested Loops
A composition of loops is called a nested loop. The first loop is usually called the outer loop while the second loop is called the inner loop. The outer loop always executes first, and the inner loop executes inside the outer loop each time the outer loop executes once. Take a look at the example below and visualize how the nested loop works.
```javascript
    for (counter = 1; counter < 4; counter++) { // count from 1 to 3 three times
        console.log("Count "+counter+" time from 1 to 3");
        for (counterTwo = 1; counterTwo < 4; counterTwo++){
            console.log(counterTwo);
        }
    }
```