import mongoose from 'mongoose'

const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const UserSchema = new Schema({
    username: String,
    password: String,
    // name: {
    //     type: String,
    //     required: true,
    // },
    // surname: {
    //     type: String,
    //     required: true,
    // },
    // dateofbirth: {
    //     type: String,
    //     required: true,
    // },
    // consent: {
    //     type: String,
    //     required: true,
    // },
    // limit: {
    //     type: String,
    //     default: '1',
    // },
    // roles: {
    //     type: String,
    //     required: true,
    // },
    // active: {
    //     type: Boolean,
    //     default: true,
    // },
})

module.exports = mongoose.models.User || mongoose.model('Users', UserSchema, 'Users', { overwriteModels: true })
