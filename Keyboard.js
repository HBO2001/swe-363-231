document.body.addEventListener("keypress", (e) =>{

    if(e.key == "h"){

        alert("How to nativate this website using only a keyboard?\n\nYou can select each element of the website by pressing the (Tab) key or by using the arrow keys.\n\nPressing (Tab + Shift) will go backwards in the selection. \n\nAfter selecting the element. Press the (Enter) key.");
    }

    if(e.key == "w"){

        e.key = "Tab"
    }

});