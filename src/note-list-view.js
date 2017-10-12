(function(exports){
  function NoteListView(noteList = new NoteList) {
    this.noteList = noteList;
  }

NoteListView.prototype.listToHTML = function() {

    var items = this.noteList.viewNoteList();
    var toReturn = items.map(function(item) {
      return "<div><li>" + item.getText() + "</li></div>" ;
    });
    return toReturn //.join(''); (change tests and then join)

  };

exports.NoteListView = NoteListView;
})(this);
