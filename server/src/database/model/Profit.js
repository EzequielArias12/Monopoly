const {Schema, model} = require('mongoose');

const ProfitSchema = Schema({

    profit : {
        type : Number,
    required : true
        },

    date : {
        type : Date,
        required : true
    },

    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
});

module.exports = model('Profit',ProfitSchema);