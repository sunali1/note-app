function testSingleNoteView () {
  var note = new Note("orange");
  var singlenoteview = new SingleNoteView(note);
  assert.isTrue(singlenoteview.show(note) === "<div>orange</div>");

}
testSingleNoteView();
