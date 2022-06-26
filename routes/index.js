var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
res.render("index", {title: "AlgoViewer"})
});

module.exports = router;