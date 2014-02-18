"use strict";

//Object.defineProperty in IE8 only accepts DOM objects.

//I also have a different version of Xccessors that implements the legacy methods __(lookup|define)[GS]etter__ in IE8.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Internet_Explorer_8_specific_notes

//Fail in IE8
// var proto = {},
//     fooValue;

// Object.defineProperty(proto, 'foo', {
//   get: function () {
//     return fooValue;
//   },
//   set: function (value) {
//     fooValue = value;
//   },
//   enumerable: true
// });

var proto = document.createElement("div"),
    fooValue;

for(var property in proto) {
	proto[property] = undefined;
}

var objectWithAccessor = Object.defineProperty(proto, 'foo', {
  get: function () {
  	console.info("Accessor running.");
    return fooValue;
  },
  set: function (value) {
    fooValue = value;
  }
});