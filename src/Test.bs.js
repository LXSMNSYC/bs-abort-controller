// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var AbortController$BsAbortController = require("./AbortController.bs.js");

var controller = AbortController$BsAbortController.make(/* () */0);

var signal = controller.signal;

signal.addEventListener("abort", (function (param) {
        console.log("Aborted");
        return /* () */0;
      }));

signal.addEventListener("abort", (function (param) {
        console.log("Aborted as well");
        return /* () */0;
      }));

controller.abort();

exports.controller = controller;
exports.signal = signal;
/* controller Not a pure module */
