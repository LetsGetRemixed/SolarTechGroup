const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Hash password before saving the admin to the database
adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Compare password 
adminSchema.methods.comparePassword = function (candidatepassword) {
    return bcrypt.compare(candidatepassword, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;