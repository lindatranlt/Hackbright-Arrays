///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE

const allAcres = [fujiAcres, galaAcres,pinkAcres];
let totalAcres = 0;
for (const i of allAcres){
    // access each index
    for (const x of i){
        totalAcres += x;
        // access each index within the index and add its value to var totalAcres
    }
}
console.log(totalAcres);



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE

const averageDailyAcres = totalAcres / 7;
console.log(averageDailyAcres);
//takes calculated acres and divide by 7 for average


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
// num of acres that still have apples
let days = 0
//how many days of work left

// CODE HERE

while (acresLeft>0){
    days ++;
    acresLeft -= averageDailyAcres;
}
console.log(days);


// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

let appleTons = 0;

let allTons = [fujiTons, galaTons,pinkTons];

for (let i = 0; i<allAcres.length; i++){
    //access each index
    for (let x=0; x<allAcres[i].length; x++){
        //access each index within the index
        appleTons = allAcres[i][x] * 6.5;
        //multiply that value by 6.5
        allTons[i].push(appleTons); 
        //push the that multiplied value into the new index  
    }
}
console.log(allTons);

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;
let allPounds = [fujiPounds, galaPounds, pinkPounds]
let pounds = 0;

for (i=0; i<allTons.length; i++){
    for (x=0; x<allTons[i].length; x++){
        pounds += allTons[i][x];
        //access each ton value and add it to the var pounds
        if (x===allTons[i].length-1){
            allPounds[i] = pounds * 2000;
            console.log(pounds);
            pounds = 0;
            //convert tons to pounds. tried to replace the value in the corresponding array with new pounds value
        
        }
    }
}
console.log(allPounds);
//was able to print array with the correct pounds value

fujiPounds = allPounds[0];
galaPounds = allPounds[1];
pinkPounds = allPounds[2];
//was unable to update individual pound values so manually filled it in
console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);


// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// CODE HERE

let fujiProfit = fujiPrice * fujiPounds;
let galaProfit = galaPrice * galaPounds;
let pinkProfit = pinkPrice * pinkPounds;
//converted total pounds to total profit per each apple variety
console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

const totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit);
//added up all profits for total profits of all apple varieties