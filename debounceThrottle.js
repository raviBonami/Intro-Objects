
// Ways to reduce number of network requests as NR are costly

// 1. Debouncing - 
// makes request only when a user stops typing for a while and the time for which user has stopped 
// is equal to the time delay present in debounce function
// Dependent on time dalay provided by user

let count = 0;
function doWork(){
    console.log("NR no. "+ count);
}

function debounce(work, delay){
    let timerID;
    return function(){
        clearTimeout(timerID)
        timerID = setTimeout(function(){
            work();
        }, delay)
    }
}
// debounce function takes a NR function and a specified dalay
// return another function which gets executed after specified delay
// when it gets executed, if the delay is less than user input speed then the timer gets cleared
// so it is not executed and NR is not made.

let debounceEx = debounce(doWork,1000);

// Throttling - 
// makes a NR after some time interval irrespective of what user is typing
// but starts only after user has started making the change
// user independent

function throttle(work, delay){
    let flag = true;
    return function(){
        if(flag === true){
            work();
            flag = false;

            setTimeout(function(){
                flag = true;
            }, delay)
        }
    }
}