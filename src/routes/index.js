const { Router } = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/index.controllers");

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/create/users", createUser);
router.put("/update/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
