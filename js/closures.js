const outerFunction = (outerVal) =>{
    return function innerFunction (innerVal){
        return outerVal + innerVal;
    }
}
const closureEx = outerFunction(10);
const result = closureEx(5);
console.log("check result", result);