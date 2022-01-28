//Chapter 8.1 - JavaScript Functions - Helpers (vanilla todo helpers)
//https://testautomationu.applitools.com/automating-in-the-browser-using-javascript/chapter8.1.html

function clickItem(item) {
    item.click();
}

function toggleAll() {
    document.querySelector("#toggle-all").click();
}

function selectItemX(x) {
    document.querySelector("ul > li:nth-child(" + x + ") input.toggle").click();
}

function deleteItem(x) {
    document.querySelector("ul > li:nth-child(" + x + ") button.destroy").click();
}

function clearCompleted() {
    document.querySelector("button.clear-completed").click();
}

function filterCompleted() {
    location.hash = '/completed';
}

function filterAll() {
    location.hash = '/';
}

function filterActive() {
    location.hash = '/active'
}

function createTodo(name) {
    document.querySelector("input.new-todo").value = name
    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
        'bubbles': true
    }));
}

function amendTodo(x, amendedValue) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") > div > label").dispatchEvent(new Event('dblclick',{
        'bubbles': true
    }));
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").value = amendedValue;
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").dispatchEvent(new Event('blur'));

}

function toggleEverySecondItem() {
    let toggles = document.querySelectorAll(".toggle")
    for (togglepos = 0; togglepos < toggles.length; togglepos += 2) {
        toggles[togglepos].click();
    }
}


//create 100 todos
for (x = 1; x <= 100; x++) {
    setTimeout(autoTodo.createTodo, x * 100, "todo " + x);
}
