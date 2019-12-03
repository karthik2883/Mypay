import coinvalueModel from '../models/coinvalueModel'

const coinvalueController = {

    getAll: async (req, res, next) => {
        coinvalueModel.find({}, (err, data) => {
            if (err) return console.log(err);
            console.log(data);
        });
    },
    getOne: (req, res, next) => {
        coinvalueModel.findById(req, (err, data) => {
            return (data || {});
        });
    },    
    getbyname:(req,res,next)=>{
        coinvalueModel.findOne("",req,(err, data) => {
          return (data || {});
         });
    },
    create: (req, res, next) => {
        coinvalueModel.create(req, function (err, user) {
            if (err) return console.log(err);
          //  res.json(user)
           console.log(user)
        })
    },
    update: (id,req) => {
        coinvalueModel.findOneAndUpdate(id, req, {new: true}, (err, data) => {
            if (err) return console.log(err);
            console.log(data)
        });
    },

    delete: (req, res, next) => {
        coinvalueModel.remove({_id: req.params.id}, (err, ok) => {
            if (err) return console.log(err);
        });
        console.log(ok);
    }
};

export default coinvalueController;