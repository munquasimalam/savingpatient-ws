// export * from './appointment';

var patient = require('../controllers/savepatient');
var auth = require('../controllers/authenticate');
var errs = require('restify-errors');

module.exports = function(server){

    server.post('/savepatient',(req,res,next)=>{
        const post_data = req.body;
        patient.savePatient(post_data, (err, response)=>{
            if(err) return res.send(400, {DisplayMessage:err});
            return res.send(200,{data: response});
        });
    });

    //server.use(auth.isAuthenticate);

   
}