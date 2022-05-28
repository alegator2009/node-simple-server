"use strict";

const express = require("express");
const router = require("./router");
const ErrorHandle = require("./middlewares/ErrorHandle");

const app = express();

const PORT = 3000;
const API_V1 = "/api/v1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(API_V1, router);
app.use(ErrorHandle.apiErrorHandlerMiddleware);

app.listen(PORT, () =>
  console.log(`App started on port ${PORT}`)
)
