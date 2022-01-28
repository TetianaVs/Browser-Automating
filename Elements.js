//toggle all todos
document.querySelector("#toggle-all").click()

//toggle todo
document.querySelector("ul > li:nth-child(1) input.toggle").click()

//delete todo
document.querySelector("ul > li:nth-child(1) button.destroy").click()

//clear completed
document.querySelector("button.clear-completed").click()

//trigger(changing) filters: All, active, completed
document.querySelector("ul.filters > li:nth-child(1) > a").click()
document.querySelector("ul.filters > li:nth-child(2) > a").click()
document.querySelector("ul.filters > li:nth-child(3) > a").click()

//trigger(changing) filters by hash change: 
location.hash = '/'
location.hash = '/active'
location.hash = '/completed'

//creating an item
document.querySelector("input.new-todo").value="hello"
document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles':true}));

//amending an item
document.querySelector("ul.todo-list > li:nth-child(2) > div > label").dispatchEvent (new Event ('dblclick', {'bubbles': true}))
document.querySelector("ul.todo-list > li:nth-child(2) .edit") .value="amended"
document.querySelector("ul.todo-list > li:nth-child(2) .edit") .dispatchEvent(new Event ('blur'))

// toggle every item
let toggles = document.querySelectorAll(".toggle")
for(togglepos=0; togglepos<toggles.length; togglepos++) {
    if(togglepos%2==1){
    toggles[togglepos].click();
  }
}

// toggle every item 
let toggles = document.querySelectorAll(".toggle")
for(togglepos=0; togglepos<toggles.length; togglepos+=2) {
     toggles[togglepos].click();
}



