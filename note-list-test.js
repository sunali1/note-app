function listNotes () {
  var text = "Favourite drink: seltzer"
  var noteList = new NoteList(); console.log(noteList);
  noteList.createAndSave(text);
  var entries = noteList.viewNote();
  assert.isTrue(entries[0].getText() === text);
}
listNotes();
