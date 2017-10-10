(function(exports){
  function NoteListView(noteList) {

  }

NoteListView.prototype.listToHTML = function(noteList) {
  var items = noteList.lists
  return '<ul>' + items.map(function(item) {
   return '<li>' + item + '</li>';
 }).join('') + '</ul>';
};

exports.NoteListView = NoteListView;
})(this);
