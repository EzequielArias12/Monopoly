const {Schema, model} = require('mongoose');

const ExpensesSchema = Schema({
    expense : {
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


module.exports = model('Expense',ExpensesSchema);

