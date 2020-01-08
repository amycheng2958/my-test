const express = require("express");
const app = express();
app.get("/api/courses", (req, res) => {
  setTimeout(() => {
    res.json([{ name: "web全栈" }, { name: "web高级" }]);
  }, 1000);
});
app.listen(3000, () => {
  console.log(3000);
});
