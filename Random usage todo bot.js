//https://testautomationu.applitools.com/automating-in-the-browser-using-javascript/chapter12.3.html

let randoBot = setInterval(function(){

    let theFunctions = [];
    
    for (var prop in rando){
        if(typeof rando[prop] == 'function'){
            theFunctions.push(prop)
        }
    }
    
    let randomFunctionIndex = Math.floor(Math.random()*theFunctions.length);
    rando[theFunctions[randomFunctionIndex]]();
    
    },1000);
    
    // To stop this bot, I would have to write — clearInterval(randoBot) 
    //clearInterval(randoBot)