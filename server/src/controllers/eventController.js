const Event = require('../database/model/Event');

module.exports = {
    all : async (req,res) =>{

        try {
            
            const events = await Event.find().populate('user','name');
 
                return res.status(200).json({
                    ok : true,
                    total : events.length,
                    data : events
                })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok : false,
                msg : 'contacte con el programador'
            })
        }
    },

    create : async (req,res) => {

        const event = new Event(req.body);

        try {
            
            event.user = req.uid;

            await event.save();
                  
            return res.status(500).json({
                ok : true,
                msg : 'evento guardado con exito'
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok : false,
                msg : 'contacte con el programador'
            })
        }

    },

    update : async (req,res) => {

        const { id } = req.params;

        try {
            
            const event = await Event.findById(id);

            if(!event) {
                return res.status(404).json({
                    ok:false,
                    msg : "evento inexistente"
                })
            }

            if(event.user.toString() !== req.uid){
                return res.status(401).json({
                    ok : false,
                    msg : "no esta autorizado a modificar este evento"
                })
            }

            const eventUpdate = {
                ...req.body,
                user : req.uid
            }

            await Event.findByIdAndUpdate(id, eventUpdate);

            return res.status(200).json({
                ok : true,
                msg : "evento actualizado"
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok : false,
                msg : 'contacte con el programador'
            })
        }
        
    },

    remove : async (req,res) => {

    }
}