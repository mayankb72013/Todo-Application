const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Users = new Schema({
    username: {type:String,unique: true},
    password: String
});
const todos = new Schema({
    todo:String,
    status:Boolean,
    userId: ObjectId
});

const UserModel = mongoose.model('users', Users);
const TodoModel = mongoose.model('todos', todos);

module.exports = {
    UserModel:UserModel,
    TodoModel:TodoModel
}
