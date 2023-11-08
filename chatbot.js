const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Hello. I am Charlie the chatbot.\nType (exit) to finish out conversation or type (start) to initiate it. ', option=>{

    if(option.toLowerCase() === "exit"){

        console.log('I hope you enjoyed your time chatting with me. I hope we can talk again (:');
        
        readline.close()

    }

    else if (option.toLowerCase() === "start"){
        
    readline.question('What is your name? ', name=>{

        console.log('Hello ' + name + '. I hope you are doing well today.')

        readline.question('Do you want to continue our conversation? ', answer=>{

            if(answer.toLowerCase() === 'no'){

                console.log('I hope you enjoyed your time chatting with me. I hope we can talk again (:');
        
                readline.close()
    
            }
    
            else if(answer.toLowerCase()=== 'yes'){
    
                readline.question('How old are you? ', age=>{

                    if(age>0 && age<=4){

                        console.log('You must be a smart baby to be able to use a computer well.')
                    }
    
                    if(age>4 && age<=12){
        
                        readline.question('Are you enjoying school right now?', answer=>{

                            if(answer.toLowerCase() === 'yes'){

                                console.log('That is great. you must have nice teachers there.')
                            }

                            else if(answer.toLowerCase()=== 'no'){

                                console.log('That is unfortunate. I hope it gets better there.')
                            }
                        })
                    }
        
                    else if(age>12 && age<=19){
        
                        console.log('You are in your teens? I hope you become a great adult someday.')
                    }
        
                    else if(age>19 && age<=65){
        
                        readline.question('Do you have a job? ', job=>{

                            if(job.toLowerCase()==='yes'){

                                readline.question('Are you happy with your current job?', H_Job=>{

                                    if(H_Job.toLowerCase() === 'yes'){

                                        console.log('That is great. I hope you do not have to change it.')
                                    }

                                    else if(H_Job.toLowerCase()=== 'no'){

                                        console.log('Oh. I hope it becomes better there soon')
                                    }

                                })
                            }

                            else if(job.toLowerCase() === 'no'){

                                console.log('Okay. but make sure you obtain that future job before it is too late')
                            }

                        })
                    }
        
                    else if(age > 65){
        
                        readline.question('Are you retired? ', retired=>{

                            if(retired.toLowerCase() === 'yes'){

                                readline.question('Are you enjoying retirement? ', E_Retirement=>{

                                    if(E_Retirement.toLowerCase() === 'yes'){

                                        console.log('Lovely. I hope you enjoy the rest of it.')
                                    }

                                    else if (E_Retirement.toLowerCase() === 'no'){

                                        console.log('Do not worry. You can still enjoy your retirement by doing activities outside your comfort zone')
                                    }

                                })
                            }

                            else if(retired.toLowerCase() === 'no'){

                                console.log('You must love your work. I like the dedication.')
                            }

                            

                        })
                    }
        
                    else{
        
                        console.log('You are so funny, you cannot be ' + age + 'years old')
                    }

                    
        
               })
        
               
                
    
        }



        
        })

      

        
    })
    

   


    }

    else{

        console.log('Incorrect input. please type (start) or exit')

        
    }

    console.log('I hope you had fun talking with me. See you soon (:')

    readline.close()
    

  })
  

  


  