class ArrayStack
{
    constructor(){ this.array = []; } // Our array stack, is quite simply just an array in js (Yes I realize how redundant an ArrayStack in js is :) )

    get(i) // Nothing special here
    { 
        if (i > this.array.length || i < 0) { throw ("error"); }//Bounds checking

        return this.array[i]; 
    } 

    set(i, x) // Again nothing noteworthy
    {
        if (i > this.array.length || i < 0) { throw ("error"); }//Bounds checking

        let y = this.array[i];
        this.array[i] = x;
        return y;
    }

    add(i, x) // While we could just do this with a call to splice, lets have some fun instead!
    {
        if (i > this.array.length || i < 0) { throw ("error"); } // We first want to make sure the index being passed is within existing indecies

        else if (i === this.array.length) { this.array.push(x); }// Here we simply add to the end by checking if the desired index is the same as the size of our array
        
        else // If we're not adding to the back, no matter where we add, we will be required to shift n-i number of elements over
        {
            for(var j = this.array.length; j > i; j--)// Lets loop through from the end of the array and move everything one over
            {                                         // The reason we start from the back is that if we were to start at index i, we would end up overwritting our elements!
                this.array[j] = this.array[j-1];
            }
            this.set(i, x); // And once we've shifted everything over we can set the new element
        }
    }

    remove(i){

        if (i > this.array.length || i < 0) { throw ("error"); }// Bounds checking

        else if(i === this.array.length){ this.array.pop(); } // If the index we want to remove at is at the end, we can simply call pop on the array

        else if(i === 0){ this.array.shift(); } // Otherwise if the index is at the front, we can simply call shift on the array

        else{ this.array.splice(i-1, 1); } // if we want to remove from anywhere else in the array, we can use the splice method which will
    }                                      // conviniently handle shifting for us 
}

//quick and dirty testing
arrayStack = new ArrayStack();

for(i = 0; i < 100; i++){ arrayStack.add(i, i); }
console.log("FIRST PRINT!!!");
for(i = 0; i < arrayStack.array.length; i++){ console.log(arrayStack.array[i]); }

for(i = 0; i < 100; i++){ arrayStack.add(Math.floor(Math.random()*4+i), Math.floor(Math.random()*100)); }
console.log("SECOND PRINT!!!");
for(i = 0; i < arrayStack.array.length; i++){ console.log(arrayStack.array[i]); }

for(i = 0; i < arrayStack.array.length; i++){ arrayStack.remove(Math.floor(Math.random()*arrayStack.array.length)); }
console.log("THIRD PRINT!!!");
for(i = 0; i < arrayStack.array.length; i++){ console.log(arrayStack.array[i]); }
