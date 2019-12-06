// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
};

const sayHello = function(input) {
    if(input === undefined || typeof input === "boolean" || input === null) {
        return "Hello, World!"
    }else if(typeof input === "number" || !isNaN(input)) {
        return "Hello, World!"
    }else if(typeof input === "object" || typeof input === "function"){
        return "Hello, World!"
    }else{
        return "Hello, " + input + "!";
    }
};