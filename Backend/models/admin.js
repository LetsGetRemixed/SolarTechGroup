const mongoose = require('mongoose');
const argon2 = require('argon2');

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Hash password before saving the admin to the database 
adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            this.password = await argon2.hash(this.password);
        } catch (error) {
            next(error); // Pass the error to the next middleware
        }
    }
    next();
});

// Compare password 
adminSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await argon2.verify(this.password, candidatePassword);
    } catch (error) {
        throw new Error('Password verification failed');
    }
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;