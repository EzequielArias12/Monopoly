const User = require('../database/model/Users');
const bcrypt = require('bcryptjs');

module.exports = {
    userCreate : async (req,res) => {

        const {email,password} = req.body;

        try {

            let user = await User.findOne({
                email
            })

            if(user){
                return res.status(400).json({
                    ok : false,
                    msg : 'el email ya se encuentra registrado'
                })
            }

            user = new User(req.body);

            user.password = bcrypt.hashSync(password,10);
    
            await user.save();

            return res.status(201).json({
                ok:true,
                uid : user.id,
                name : user.name
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok : false,
                msg : 'contacte con el programador'
            })
        }

    }
}