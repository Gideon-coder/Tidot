const express = require("express");
const favicon = require("express-favicon");
const port = process.env.PORT || 8080;
const app = express();
// app.use(favicon(__dirname + '../build/favicon.ico'));
const path = require("path");

app.use(favicon(path.join(__dirname, "../", "build", "favicon.ico")));

const isProduction = process.env.NODE_ENV === undefined || "undefined";

console.log(process.env.NODE_ENV);

if (isProduction) {
  app.use(express.static("build"));
  // eslint-disable-next-line global-require
  const path = require("path");

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "build", "index.html"));
  });
}

/* Redirect http to https */
app.get("*", (req, res, next) => {
  if (
    req.headers["x-forwarded-proto"] != "https" &&
    process.env.NODE_ENV === "production"
  )
    res.redirect(`https://${req.hostname}${req.url}`);
  else next(); /* Continue to other routes if we're not redirecting */
});

app.listen(port, () => {
  console.log("Application started at port:%d", port);
});
