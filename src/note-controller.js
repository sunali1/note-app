(function(exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList
    this.noteList.createAndSave('Favourite drink: Seltzer');
    this.noteListView = new NoteListView(this.noteList)

  }

  NoteController.prototype.viewNoteList = function () {
    document.getElementById('app').innerHTML = this.noteListView.listToHTML()

  };

  exports.NoteController = NoteController;
})(this);
