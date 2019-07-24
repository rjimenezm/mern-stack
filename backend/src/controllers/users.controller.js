const userCtrl = {};

userCtrl.getUsers = (req,res) => res.send('GET - Users Routes');

userCtrl.createUser = (req,res) => res.send('POST - Users Routes');

userCtrl.deleteUser = (req,res) => res.send('DELETE - Users Routes');

module.exports = userCtrl;