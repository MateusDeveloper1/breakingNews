const create = (req, res) => {
  const { name, username } = req.body;

  if (!name || !username) {
    res
      .status(400)
      .send({ message: "Submit name field and username for registration" });
    return;
  }

  res.status(201).send({
    message: "User created succesfully",
    user: {
      name,
      username,
    },
  });
};

module.exports = { create };
