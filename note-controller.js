(function(exports) {
  function NoteController(newgreeting) {
    var greeting = document.getElementById('app')
    greeting.innerHTML = newgreeting


  }


// window.onload = function() {
//
//          // create a couple of elements in an otherwise empty HTML page
//          var heading = document.createElement("h1");
//          var heading_text = document.createTextNode("Big Head!");
//          heading.appendChild(heading_text);
//          document.body.appendChild(heading);
//
// var parentDOM = document.getElementById('app');
// console.log(parentDOM);
// var test1=parentDOM.getElementById('test1');
//         //throw error
//         //Uncaught TypeError: parentDOM.getElementById is not a function
//

//};
  exports.NoteController = NoteController;
})(this);
