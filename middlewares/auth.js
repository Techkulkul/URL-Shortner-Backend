const { getMappingUUID } = require("../controller/service/user");
const User = require("../models/user");

async function userAuth(req, res, next) {
  const uid = req.cookies?.uid;
  console.log("ghjk");
  console.log(uid);

  if (!uid) return res.render("login");
  const uuid = getMappingUUID(uid);
  console.log(uuid);

  const user = await User.findById(uuid);
  console.log(user);

  if (!user) return res.render("login");
  req.user = user;
  next();
}

module.exports = {
  userAuth,
};
