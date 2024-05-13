'use strict'

// Definition
const express = require("express");
const app = express();
const path = require("path");
const port = 4000 || process.env.port;
const expressHbs = require("express-handlebars");
const hbs = expressHbs.create({});
const dashboard_admin = require('./public/js/admin-dashboard-data');
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

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
hbs.handlebars.registerHelper('increment', function (value) {
  return value + 1;
});
hbs.handlebars.registerHelper('lt', function (a, b, options) {
  return a < b ? options.fn(this) : options.inverse(this);
});

app.get("/", (req, res) => {
  res.send("Hi")
})

// Admin routing
app.get("/dashboard", (req, res) => {
  res.render("admin/dashboard", {
    layout: 'admin_layout',
    pageName: 'Dashboard',
    ranking_drivers: dashboard_admin.ranking_drivers,
    cards: dashboard_admin.cards,
    revenue_overview: dashboard_admin.revenue_overview,
    dashboard_active: 'active'
  })
})
app.get('/profile-admin', (req, res) => {
  res.render("admin/profile", {
    pageName: 'Profile',
    layout: 'admin_layout',
  })
})
app.get('/drivers', (req, res) => {
  res.render("admin/drivers", {
    pageName: 'Manage Driver',
    layout: 'admin_layout',
    driver_active: 'active'
  })
})
app.get('/center-officers', (req, res) => {
  res.render("admin/centre-officers", {
    pageName: 'Manage Center Offficer',
    layout: 'admin_layout',
    centerofficer_active: 'active'
  })
})
app.get('/vouchers', (req, res) => {
  res.render("admin/vouchers", {
    pageName: 'Manage Voucher',
    layout: 'admin_layout',
    voucher_active: 'active'
  })
})
app.get('/fare-rate', (req, res) => {
  res.render("admin/fare-rate", {
    pageName: 'Manage Fare Rate',
    layout: 'admin_layout',
    farerate_active: 'active'
  })
})
// Admin routing


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
})