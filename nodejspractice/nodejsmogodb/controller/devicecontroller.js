const glDevice = require("../models/Device") ;

exports.create = (req, res) => {
    if (!req.body.device_id) {
        res.status(400).send ("deice id cannot be empty");
        return ;
    }

    const glDevice = new Device({
        device_id : req.body.device_id,
        gl_status : req.body.gl_status,
        last_update_time ; req.body.last_update_time
    }) ;

    glDevice
    .save(glDevice)
    .then(data => {
        res.send(data) ;
    })
    .catch(err => {
        console.log (err) ;
        res.status(500).send({
            message : err.message || " some crap happened." ;
        }) ;
    }) ;

}
