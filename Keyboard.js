(function (){

    alert("How to nativate this website using only a keyboard?\n\nYou can select each element of the website by pressing the (Tab) key or by using the arrow keys.\n\nPressing (Tab + Shift) will go backwards in the selection. \n\nAfter selecting the element. Press the (Enter) key.");

})()


window.addEventListener('keydown', (event) => {

    switch (event.key) {

        case 'ArrowLeft':
        case 'a':
            {
                event.preventDefault();
                console.log('Left')
                break;

            }

        case 'ArrowRight':
        case 'd':
            {
                event.preventDefault();
                console.log('Right')
                break;

            }
            
    }
    });

