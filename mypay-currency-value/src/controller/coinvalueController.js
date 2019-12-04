import coinvalueModel from '../models/coinvalueModel'

const coinvalueController = {

    getAll:(req, res, next) => {
        coinvalueModel.find({}, (err, data) => {
            if (err){  console.log(err) };
            console.log(data);
        });
    },
    getOne: (req, res, next) => {
        coinvalueModel.findById(req, (err, data) => {
            return (data || {});
        });
    },    
    getbyname:(req,next)=>{
        coinvalueModel.findOne(req,(err, data) => {
            if (err) { console.log(err) };
            console.log(data);
         });
    },
    getCount: (req, next) => {
        coinvalueModel.count(req, (err, data) => {
            if (err) { 
              return next(-1); 
            };
            return next(data);  ;
        });
    },
    create: (req, next) => {
        coinvalueModel.create(req, function (err, user) {
            if (err) return console.log(err);
          //  res.json(user)
           console.log(user)
        })
    },
    update: (id,req ,next) => {
        coinvalueModel.findOneAndUpdate(id, req, {new: true}, (err, data) => {
            if (err){
                return next(-1);
            }
           return next(1);
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