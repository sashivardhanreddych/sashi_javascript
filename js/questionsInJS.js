//Guess the output
function guessTheOutput(){
    for(var i=0; i<5; i++){
        var btn = document.createElement("button");
        btn.appendChild(document.createTextNode('Button ' + i));

        /* won't get the i values for button value name, got the value is 5. to resolve the issue use iife

            btn.addEventListener('click', function(){
              console.log(i);
            }); // Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
        */

        // Use an IIFE to capture the current value of i
        (function(index){
            btn.addEventListener('click', function(){
                console.log("Clicked Button ", index);
            })
        })(i);

        // document.body.appendChild('btn'); // typo issue, we need to add btn variable not btn string
        document.body.appendChild(btn); // now btn element append to the document
    }
}

guessTheOutput();


function regularFunc(){
    let count = 0;
    setTimeout(()=>{
        count++;
        console.log("inside count", count);  //1 
    }, 1000)
    console.log("outside count", count); // 0
}

regularFunc();

async function regularAsyncFunc(){
    let count = 0;
    await new Promise((resolve) =>{
        setTimeout(()=>{
            count++;
            console.log("inside Async count", count);  //1
            resolve(); 
        }, 1000)

    })
    console.log("outside Async count", count); // 1
}

regularAsyncFunc()
