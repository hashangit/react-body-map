"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hyphenate-style-name@1.1.0";
exports.ids = ["vendor-chunks/hyphenate-style-name@1.1.0"];
exports.modules = {

/***/ "(pages-dir-node)/./node_modules/.pnpm/hyphenate-style-name@1.1.0/node_modules/hyphenate-style-name/index.cjs.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/hyphenate-style-name@1.1.0/node_modules/hyphenate-style-name/index.cjs.js ***!
  \******************************************************************************************************/
/***/ ((module) => {

eval("\n\n/* eslint-disable no-var, prefer-template */\nvar uppercasePattern = /[A-Z]/g;\nvar msPattern = /^ms-/;\nvar cache = {};\n\nfunction toHyphenLower(match) {\n  return '-' + match.toLowerCase()\n}\n\nfunction hyphenateStyleName(name) {\n  if (cache.hasOwnProperty(name)) {\n    return cache[name]\n  }\n\n  var hName = name.replace(uppercasePattern, toHyphenLower);\n  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)\n}\n\nmodule.exports = hyphenateStyleName;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9oeXBoZW5hdGUtc3R5bGUtbmFtZUAxLjEuMC9ub2RlX21vZHVsZXMvaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIi9ob21lL2hhc2hhbi9FL0Rldi9Qcm9qZWN0cy9IYXNoYW4vcmVhY3QtbmF0aXZlLWJvZHktaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzLy5wbnBtL2h5cGhlbmF0ZS1zdHlsZS1uYW1lQDEuMS4wL25vZGVfbW9kdWxlcy9oeXBoZW5hdGUtc3R5bGUtbmFtZS9pbmRleC5janMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIsIHByZWZlci10ZW1wbGF0ZSAqL1xudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG52YXIgY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gdG9IeXBoZW5Mb3dlcihtYXRjaCkge1xuICByZXR1cm4gJy0nICsgbWF0Y2gudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICByZXR1cm4gY2FjaGVbbmFtZV1cbiAgfVxuXG4gIHZhciBoTmFtZSA9IG5hbWUucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCB0b0h5cGhlbkxvd2VyKTtcbiAgcmV0dXJuIChjYWNoZVtuYW1lXSA9IG1zUGF0dGVybi50ZXN0KGhOYW1lKSA/ICctJyArIGhOYW1lIDogaE5hbWUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/.pnpm/hyphenate-style-name@1.1.0/node_modules/hyphenate-style-name/index.cjs.js\n");

/***/ })

};
;