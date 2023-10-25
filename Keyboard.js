(function (){

    alert("How to nativate this website using only a keyboard?\n\nYou can select each element of the website by\n1- pressing the (Tab) key\n2- by using the left and right arrow keys.\n3-Pressing (Tab + Shift) to go backwards in the selection. \n\nClicking a Selected Element: \nPress the (Enter) key.");

})()

                Elements = document.querySelectorAll("a", "button");

                var Length = Elements.length;

                console.log(Elements);

                var Index = 0;

                Elements[0].classList.add("selected");

                document.addEventListener('keydown', (event) => {

                switch (event.key) {


                    case 'ArrowLeft':
                    
                        {
                            event.preventDefault();

                            Elements[Index].classList.remove("selected");

                            if(Index == 0){

                                Index = Length-1;

                            }

                            else{
                                
                                Index = Index - 1;

                            }

                            Elements[Index].classList.add("selected");

                            console.log('Left')

                            break;

                        }

                    case 'ArrowRight':
                    
                        {
                            event.preventDefault();
                        
                            Elements[Index].classList.remove("selected");

                            if(Index == Length-1){

                                Index = 0;

                            }

                            else{

                                Index = Index + 1;

                            }

                            Elements[Index].classList.add("selected");

                            console.log('Right')

                            break;

                        }

                    case 'Enter':
                        {

                            console.log('Enter');

                            Elements[Index].click();
                        

                        }
                        
                   }
                    });