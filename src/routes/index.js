const express = require("express");
const router = express.Router();
const controller = require("../pdfStore/controller/file.controller");

let routes = (app) => {
  router.post("/upload", controller.upload);
  router.get("/allfiles", controller.getListFiles);
  router.get("/files/:name", controller.download);
  router.delete("/files/:name", controller.remove);

  app.use(router);
};

module.exports = routes;