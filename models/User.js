import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);