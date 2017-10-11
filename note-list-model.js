(function (exports) {
function NoteList() {
  this.lists = [];
}
NoteList.prototype.createAndSave = function(text) {  // noteConstructor = Note
     var note = new Note(text); // noteConstructor(text)
     this.lists.push(note);
};

NoteList.prototype.viewNoteList = function() {
      return this.lists;
};

exports.NoteList = NoteList;
})(this);
