var hello = require ("./greeter.js");


/* direct call to function in module*/
console.log(hello.sayHelloInEnglish());
console.log(hello.sayHelloInSpanish());
console.log(hello.sayHelloInFrench());

/*Using a Closure with sayHello as method*/
var sayHelloFactory = hello.sayHelloFactory();
console.log(sayHelloFactory.sayHello("Hi"));
console.log(sayHelloFactory.sayHello("Hi"));

/*Using a Closure that directly returns function definition*/
var sayHelloFactory2 = hello.sayHelloFactory2();
console.log(sayHelloFactory2("Joooooooooo"));

    