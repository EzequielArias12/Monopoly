const User = require('../database/model/Users');
const bcryptjs = require('bcryptjs');
const JWTgenerator = require('../helpers/jwt');

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

            const token = await JWTgenerator(user.id, user.name);

            return res.status(201).json({
                ok:true,
                uid : user.id,
                name : user.name,
                token
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok : false,
                msg : 'contacte con el programador'
            })
        }

    },

    userLogin : async (req,res) =>{
        const {email,password} = req.body;

        try {

            const user = await User.findOne({email});
            const validPassword = user && bcryptjs.compareSync
            (password, user.password);

            if(!user || !validPassword){
                return res.status(400).json({
                    ok:false,
                    msg:'credenciales invalides'
                })
            }

            /*Create JWT*/ 

            const token = await JWTgenerator(user.id, user.name);

            return res.status(200).json({
                ok:true,
                uid:user.id,
                name : user.name,
                token
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok : false,
                msg : 'contacte con el programador'
            })
        }
    },

    revalidateToken : async (req,res) => {

        try {

            const token = await JWTgenerator(req.id, req.name);

            return res.status(200).json({
                ok: true,
                token
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