const express = require("express");
const { getUsers } = require('../services/user-service');
const router = express.Router();

router.get("/", (req, res) => {
  const users = getUsers();
  res.json(users);
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`requested user with id: ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Update user with id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id: ${req.params.id}`);
  });

// router.param("id", (req, res, next, id) => {
// //   console.log(id);
//   next();
// });

router.get("/new", (req, res) => {
    res.send("User New Form ");
  });
  

module.exports = router;
