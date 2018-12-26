module.exports = {

sayHelloInEnglish : function() {
    return "Hello";
  },
  
sayHelloInSpanish : function() {
    return "Hola";
},

sayHelloInFrench : function() {
    return "Bonjour";
},

sayHelloFactory: function(){

var count = 0;

return {
	sayHello: function(name){
	count++;
	return name+' '+count;
	}
}


},

sayHelloFactory2: function(){

var count = 0;

function sayHello(name){
	count++;
	return name+' '+count;
}

return sayHello;


}



};










