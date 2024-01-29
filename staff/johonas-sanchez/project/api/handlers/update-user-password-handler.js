const jwt = require("jsonwebtoken")

const logic = require("../logic")
const { ContentError, DuplicityError } = require("../logic/errors")

module.exports = (req, res) => {
   try {
      const token = req.headers.authorization.slice(7)
      const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)
      const { password, newPassword, repeatNewPassword } = req.body

      logic
         .updateUserPassword(userId, password, newPassword, repeatNewPassword)
         .then(() => res.status(200).send())
         .catch((error) => {
            let status = 500

            res.status(status).json({ error: error.constructor.name, message: error.message })
         })
   } catch (error) {
      let status = 500

      if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError) status = 406

      res.status(status).json({ error: error.constructor.name, message: error.message })
   }
}
