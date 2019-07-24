const notesCtrl = {};

notesCtrl.getNotes = (req,res) => res.json({message: []});

notesCtrl.createNote = (req,res) => res.json({message: 'Note Saved'});

notesCtrl.getNote = (req,res) => res.json({title: 'Get Note'});

notesCtrl.updateNote = (req,res) => res.json({message: 'Updated Note'});

notesCtrl.deleteNote = (req,res) => res.json({message: 'Deleted Note'});

module.exports = notesCtrl;