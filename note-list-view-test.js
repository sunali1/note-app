function noteListView () {
  var noteList = new NoteList;
  var text3 = "Rice";
  var text4 = "Eggs";
  noteList.createAndSave(text3);
  noteList.createAndSave(text4);
  var noteListView = new NoteListView(noteList);
  noteListView.listToHTML(noteList);

  assert.isTrue(noteListView.listToHTML(noteList) === '<ul>' +
                                                      '<li>' + text3 + '</li>' +
                                                      '<li>' + text4 + '</li>' + 
                                                      '</ul>' );
}
noteListView();
