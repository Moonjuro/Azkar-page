// Select all buttons with the class .counter-btn-global
const counterButtons = document.querySelectorAll('.counter-btn-global');
console.log(counterButtons);

// Iterate over all buttons and add an eventListener for each button
    counterButtons.forEach(function(button)
        {
            button.addEventListener('click', function()
                {  
                    // Get the current value of the button by parsing it into an INT
                    let currentValue = parseInt(button.textContent);

                    // If the value is > 0, decrease by 1 
                    if (currentValue > 0)
                    {
                        button.textContent = (currentValue - 1).toString().padStart(2, '0');
                    }
                }
            );
        }
    );
    

