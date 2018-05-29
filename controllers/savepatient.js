var db_query = require('../db/executeQuery');
var async = require('async');
var moment = require('moment');
const groupBy = require('lodash/groupBy');

function savePatient (postData,next){
    var query='INSERT INTO customer SET ?';
    
    db_query.paramQuery(query, params, (err, result)=>{
        if(err) return next(err);   
        return next(null,result);
    })
}

exports.savePatient = savePatient;
