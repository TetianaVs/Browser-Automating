//https://testautomationu.applitools.com/automating-in-the-browser-using-javascript/chapter6.html

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

