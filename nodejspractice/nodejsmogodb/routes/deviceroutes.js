const express = require("express");
const device = require("../models/Device") ;

const router = express.Router();
router.post("/device", function(req, res, next) {
    if (!req.body.device_id) {
        res.status(400).send ("deice id cannot be empty");
        return ;
    }
    
     const glDevice = new device({
        device_id : req.body.device_id,
        gl_status : req.body.gl_status,
        last_update_time : req.body.last_update_time
    }) ;

    glDevice
    .save(glDevice)
    .then(data => {
        res.send(data) ;
    })
    .catch(next);
    
}) ;

router.put("/device/:device_id", function(req, res, next) {
    device.find({ device_id: req.params.device_id }, req.body)
    .then(function() {
        device.find({ device_id: req.params.device_id })
        .then(function(data) {
            res.send(data);
        });
    });
});


module.exports = router ;
