//https://testautomationu.applitools.com/automating-in-the-browser-using-javascript/chapter8.2.html


let autoTodo = new function() {

    this.clickItem = function(item) {
        item.click();
    }

    this.toggleAll = function() {
        document.querySelector("#toggle-all").click();
    }

    this.selectItemX = function(x) {
        document.querySelector("ul > li:nth-child(" + x + ") input.toggle").click();
    }

    this.deleteItem = function(x) {
        document.querySelector("ul > li:nth-child(" + x + ") button.destroy").click();
    }

    this.clearCompleted = function() {
        document.querySelector("button.clear-completed").click();
    }

    this.filterCompleted = function() {
        location.hash = '/completed';
    }

    this.filterAll = function() {
        location.hash = '/';
    }

    this.filterActive = function() {
        location.hash = '/active'
    }

    this.createTodo = function(name) {
        document.querySelector("input.new-todo").value = name
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }));
    }

    this.amendTodo = function(x, amendedValue) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") > div > label").dispatchEvent(new Event('dblclick',{
            'bubbles': true
        }));
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").value = amendedValue;
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").dispatchEvent(new Event('blur'));

    }

    this.toggleEverySecondItem = function() {
        let toggles = document.querySelectorAll(".toggle")
        for (togglepos = 0; togglepos < toggles.length; togglepos += 2) {
            toggles[togglepos].click();
        }
    }
}
