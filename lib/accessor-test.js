"use strict";

//Object.defineProperty in IE8 only accepts DOM objects.

//I also have a different version of Xccessors that implements the legacy methods __(lookup|define)[GS]etter__ in IE8.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Internet_Explorer_8_specific_notes


var proto = {},
    fooValue;

Object.defineProperty(proto, 'foo', {
  get: function () {
    return fooValue;
  },
  set: function (value) {
    fooValue = value;
  },
  enumerable: true
});