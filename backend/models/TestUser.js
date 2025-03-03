const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { 
        type: String, 
        required: true  // Ensuring name is mandatory
    },
    age: { 
        type: Number, 
        required: false  
    },
    email: { 
        type: String, 
        required: true,  
        unique: true  
    },
    description: { 
        type: String, 
        required: false  
    },

    password: { 
        type: String, 
        required: true,
        unique: true 
    }
});

module.exports = mongoose.model('User', userSchema);
