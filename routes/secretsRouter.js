var express = require("express");
var secretsRouter = express.Router();

/* GET Secret page. */
secretsRouter.get("/", function (req, res, next) {
  res.render("secret", {
    title: "Cracked!",
    body:
      "The Secret Message is: Very good, Mr. Bond. Now I expect you to die. Eventually. Of natural causes. Or choking on a personal pizza.",
  });
});

module.exports = secretsRouter;
