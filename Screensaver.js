(function () { 
  
    // Ideal time in seconds 
    const idleDurationSecs = 60; 

    // Redirect idle users to the screensaver page 
    const redirectUrl =  
        'ScreenSaver.html'; 
        
    // Variable to hold the timeout 
    let idleTimeout;  

    const resetIdleTimeout = function () { 

        // Clears the existing timeout 
        if (idleTimeout)  
            clearTimeout(idleTimeout); 

        // Set a new idle timeout to load the 
        // redirectUrl after idleDurationSecs 
        idleTimeout = setTimeout(() => location.href  
            = redirectUrl, idleDurationSecs * 1000); 
    }; 

    // Init on page load 
    resetIdleTimeout(); 

    // Reset the idle timeout on any of 
    // the events listed below 
    ['click', 'touchstart', 'mousemove'] 
        .forEach(evt => document.addEventListener( 
            evt, resetIdleTimeout, false) 
    ); 
    })(); 