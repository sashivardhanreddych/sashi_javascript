/**** Question: 
 * Need to change the button text color, if again button pressed, 
    need to throw an alert. It's already in that color 

 */
let currentColor = '';
let redCount= 0;
let greenCount = 0;
function bgChange(bgColor){
    if(bgColor === 'red'){
        if(currentColor === 'red'){
            redCount++;
            if(redCount === 2){
                alert("already red background");
                redCount = 1;
            }
        }else{
            currentColor = 'red';
            redCount = 1;
            greenCount = 0;
            document.body.style.background = currentColor;
        }
    }
    else if(bgColor === 'green'){
        if(currentColor === 'green'){
            greenCount++;
            if(greenCount === 2){
                alert("already Green background");
                greenCount = 1;
            }
        }
        else{
            currentColor = 'green';
            greenCount = 1;
            redCount = 0;
            document.body.style.background = currentColor;
        }
    }
    else{
        document.body.style.background = '#ccc';
        console.log("default color");
    }
}