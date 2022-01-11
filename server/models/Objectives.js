const { Schema, model } = require('mongoose');

const objectiveSchema = new Schema({
    category: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    priority: {
        type: Number,
        
    },
    priorityDescription: {
        type: String,
    },
    description: {
        type: String
    },
    victoryPoints: {
        
        type: [Number],
     
    }
});

const Objectives = model('Objectives', objectiveSchema);

module.exports = Objectives;