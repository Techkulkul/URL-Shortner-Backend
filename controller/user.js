const User = require("../models/user");
const URL = require("../models/url");
const { v4: uuidv4 } = require("uuid");
const { getMappingUUID, setMappingUUID } = require("./service/user");

async function handleSignup(req, res) {
  //   console.log("Enter");
  const allURL = await URL.find({});

  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.render("login");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email: email,
    password: password,
  });
  if (!user) return res.status(400).json({ message: "User Credential worng" });
  const uid = uuidv4();
  console.log(user);
  console.log(user._id);

  setMappingUUID(uid, user._id);
  res.cookie("uid", uid);
  res.render("home");
}

module.exports = {
  handleSignup,
  handleLogin,
};
