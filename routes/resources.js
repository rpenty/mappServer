module.exports = function (router) {

var Resource = require('../models/resource');

// on routes that end in /api/v1/resource
// ----------------------------------------------------
router.route('/api/v1/resources')

    // create a resource (accessed at POST http://localhost:8080/api/v1/resources)
    .post(function(req, res) {
        
        var resource = new Resource();      // create a new instance of the resource model
        resource.name = req.body.name;  // set the resource name (comes from the request)
        resource.category = req.body.category;
        resource.address = req.body.address;
        resource.city = req.body.city;
        resource.state = req.body.state;
        resource.zip = req.body.zip;
        resource.phone = req.body.phone;
        resource.phoneAlt = req.body.phoneAlt;
        resource.url = req.body.url;

        // save the resource and check for errors
        resource.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Resource created!' });
        });

    })

    // get all the resroucess (accessed at GET http://localhost:8080/api/v1/resources)
    .get(function(req, res) {
        
        Resource.find(function(err, resources) {
            if (err)
                res.send(err);

            res.json(resources);
        });
    });

// on routes that end in /api/v1/resources/:resource_id
// ----------------------------------------------------
router.route('/api/v1/resources/:resource_id')

    // get the resource with that id (accessed at GET http://localhost:8080/api/resources/:resource_id)
    .get(function(req, res) {
        Resource.findById(req.params.resource_id, function(err, resources) {
            if (err)
                res.send(err);
            res.json(resources);
        });
    })

    // update the resource with this id (accessed at PUT http://localhost:8080/api/resources/:resource_id)
    .put(function(req, res) {

        // use our resource model to find the resource we want
        Resource.findById(req.params.resource_id, function(err, resource) {

            if (err)
                res.send(err);
            
            resource.name = req.body.name;  // set the resource name (comes from the request)
            resource.category = req.body.category;
            resource.address = req.body.address;
            resource.city = req.body.city;
            resource.state = req.body.state;
            resource.zip = req.body.zip;
            resource.phone = req.body.phone;
            resource.phoneAlt = req.body.phoneAlt;
            resource.url = req.body.url;

            // save the resource
            resource.save(function(err) {
                if (err)
                    res.send(err);

                res.json({message: 'Resource updated!'});
            })

        })
    })

    // delete the resource with this id (accessed at DELETE http://localhost:8080/api/resources/:resource_id)
    .delete(function(req, res) {
        Resource.remove({
            _id: req.params.resource_id
        }, function(err, resource) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
    
}