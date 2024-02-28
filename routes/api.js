var express = require("express");
var router = express.Router();
const db = require("../model/helper.js");


/*     -----     FUNCTIONS     -----     */


function selectAllItems(req, res) {
  db("SELECT * FROM projects ORDER BY id ASC;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err))
}


/*     -----     GET     -----     */


// send message when api is accessed
router.get("/", (req, res) => {
  res.send("welcome to the api!")
});

// send back full list of items
router.get("/projects", (req, res) => {
  selectAllItems(req, res)
});


/*     -----     POST     -----     */


router.post("/projects", async (req, res) => {
  let newProj = req.body;
  try {
    await db(`INSERT INTO projects (title, designer, yarn, needles, start, end, complete) VALUES (
      "${newProj.title}", 
      "${newProj.designer}", 
      "${newProj.yarn}", 
      ${newProj.needles}, 
      ${newProj.start}, 
      ${newProj.end}, 
      ${newProj.completed}
    );`)
    selectAllItems(req, res)
  } catch(err) {
    res.status(500).send(err)
  }
});


/*     -----     PUT     -----     */





/*     -----     DELETE     -----     */
module.exports = router;