var mongoose = require('mongoose');
    userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true
        }
    });

userSchema.pre('save', next => {
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err);

        user.password = hash;
        next();
    })
})
userSchema.methods.comparePassword = (candidatePassword, cb) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    })
}

module.exports = mongoose.model('User', userSchema);
