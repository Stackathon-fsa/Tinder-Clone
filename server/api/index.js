const router = require("express").Router()
module.exports = router

router.use("/users", require("./users"))
router.use("/profiles", require("./profiles"))
router.use("/matches", require("./matches"))

router.use((req, res, next) => {
  const error = new Error("Not Found")
  error.status = 404
  next(error)
})
