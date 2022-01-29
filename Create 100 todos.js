for (x = 1; x <= 100; x++) {
    setTimeout(autoTodo.createTodo, x * 100, "todo " + x);
}

//or
for (x = 1; x <= 100; x++) {
    setTimeout(function(name) {
        document.querySelector("input.new-todo").value = name
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }));
    }, x * 100, "todo " + x);
}
