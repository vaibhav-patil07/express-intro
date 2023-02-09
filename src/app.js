const express = require("express");
const userRoute = require("./routes/users.route");

const app = express();
app.use(express.json());

app.use("/users", userRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000 ");
});
