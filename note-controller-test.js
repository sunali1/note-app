function testnoteController () {
  var text3 = "<ul><li><div>Favourite food: pesto</div></li></ul>";
  var noteController = new NoteController;
  assert.isTrue(noteController.viewNoteList() === text3);

}
testnoteController();




// A note controller can be instantiated.
// The innerHTML property of the app element contains HTML
// somewhat similar to: <ul><li><div>Favourite food: pesto</div></li></ul>.
// (You'll need to mock some stuff to achieve this.)
