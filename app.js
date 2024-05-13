'use strict'

// Definition
const express = require("express");
const app = express();
const path = require("path");
const port = 4000 || process.env.port;
const expressHbs = require("express-handlebars");
const hbs = expressHbs.create({});
app.use("/public", express.static(path.join(__dirname, "public")));

expressHbs.create({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
  },
});

app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout",
  })
);

app.set("view engine", "hbs");

// Register the helper
hbs.handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

app.get("/", (req, res)=>{
    res.send("Hi")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} 🚀`);
})