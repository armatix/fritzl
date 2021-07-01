/*
This file glues it all together.
*/
"use strict";

var fritzls = require("./lib/fritzl");
var Golang = require("./lib/golang");
var Utils = require("./lib/utils");

function hd(target, options) {
    console.log(Utils.hexdump(target, options));
}

function ts(address, max) {
    console.log(Utils.telescope(ptr(address), max));
}
function Fritzl(binary = null) {
    if (binary !== undefined) {
        let fritzl = new fritzls({ binary });
        fritzl.hd = hd;
        fritzl.ts = ts;
        fritzl.Golang = Golang;
        fritzl.Utils = Utils;
        return fritzl;
    }
    throw `No binary defiend\n${new Error().stack}`;
}
module.exports = Fritzl;
