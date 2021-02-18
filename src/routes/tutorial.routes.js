module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Fetch all Tutorials
    router.get("/", tutorials.findAll);
  
    // Fetch all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Fetch a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Remove a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Remove all Tutorials
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
  };
  