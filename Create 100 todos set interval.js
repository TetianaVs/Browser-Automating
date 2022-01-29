//https://testautomationu.applitools.com/automating-in-the-browser-using-javascript/chapter10.html

//counting up from 0 to 100

let botTodoCount = 0;

let creatorBot = setInterval(
    function() {
        document.querySelector("input.new-todo").value = 'todo '+botTodoCount;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }));
        botTodoCount++;

        if (botTodoCount>=100){
            clearInterval(creatorBot);
        }

    }, 500)

 
 //counting down from 100 to 0

    let botTodoCountDown = 100;

let creatorBotNew = setInterval(
    function() {
        document.querySelector("input.new-todo").value = 'todo '+botTodoCountDown;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }));
        botTodoCountDown--;

        if (botTodoCountDown<=0){
            clearInterval(creatorBotNew);
        }

    }, 500)