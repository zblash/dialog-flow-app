const config = require("config.json");
const jwt = require("jsonwebtoken");

const users = [
  {
    id: 1,
    username: "test",
    password: "test",
    firstName: "Test",
    lastName: "User",
  },
];

module.exports = {
  authenticate,
  register,
  getAll,
};

async function authenticate({ username, password }) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) throw "Username or password is incorrect";

  const token = jwt.sign({ ...omitPassword(user) }, config.secret, {
    expiresIn: "7d",
  });

  return {
    ...omitPassword(user),
    token,
  };
}

async function register({ username, password, firstName, lastName }) {
  const lastId = users[users.length - 1].id;

  users.push({
    id: lastId + 1,
    username,
    password,
    firstName,
    lastName,
  });

  return users[users.length - 1];
}

async function getAll() {
  return users.map((u) => omitPassword(u));
}

function omitPassword(user) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}
