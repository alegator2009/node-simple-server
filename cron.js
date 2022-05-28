"use strict";

const nodeCron = require('node-cron');
const cron = require("./components/cron");

const EXPRESSION = "* 0 7 * * 1"; // According to task
// const EXPRESSION = "5 * * * * *"; // For test

nodeCron.schedule(EXPRESSION, (new cron.ExportSoldProducts()).run, {});

console.log("Waiting...");
