(function (exports) {
function NoteList() {
  this.lists = [];
}
NoteList.prototype.createAndSave = function(text) {
     var note = new Note(text);
     this.lists.push(note);
};

NoteList.prototype.viewNote = function() {
      return this.lists;
};

exports.NoteList = NoteList;
})(this);
