function checkNames() {

var names = ["Schelly", "John", "johanathan", "Andy","Harry", "Steven"];

for (i= 0; i<names.length; i++) {

   if( names[i].charAt(0) == "J" || names[i].charAt(0) == "j") {
    console.log('Goodbye ' + names[i] );
   }
   
   else {
    console.log('Hello ' + names[i] );
   }
}

}
checkNames();