const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Returning all roles");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Returning role with id: ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Updating role with id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Deleting role with id: ${req.params.id}`);
  });

module.exports = router;
