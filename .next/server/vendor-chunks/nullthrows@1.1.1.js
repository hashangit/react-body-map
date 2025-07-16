"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nullthrows@1.1.1";
exports.ids = ["vendor-chunks/nullthrows@1.1.1"];
exports.modules = {

/***/ "(pages-dir-node)/./node_modules/.pnpm/nullthrows@1.1.1/node_modules/nullthrows/nullthrows.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/nullthrows@1.1.1/node_modules/nullthrows/nullthrows.js ***!
  \***********************************************************************************/
/***/ ((module) => {

eval("\n\nfunction nullthrows(x, message) {\n  if (x != null) {\n    return x;\n  }\n  var error = new Error(message !== undefined ? message : 'Got unexpected ' + x);\n  error.framesToPop = 1; // Skip nullthrows's own stack frame.\n  throw error;\n}\n\nmodule.exports = nullthrows;\nmodule.exports[\"default\"] = nullthrows;\n\nObject.defineProperty(module.exports, \"__esModule\", ({value: true}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9udWxsdGhyb3dzQDEuMS4xL25vZGVfbW9kdWxlcy9udWxsdGhyb3dzL251bGx0aHJvd3MuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0EseUJBQXNCOztBQUV0QixxREFBb0QsQ0FBQyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL2hhc2hhbi9FL0Rldi9Qcm9qZWN0cy9IYXNoYW4vcmVhY3QtbmF0aXZlLWJvZHktaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzLy5wbnBtL251bGx0aHJvd3NAMS4xLjEvbm9kZV9tb2R1bGVzL251bGx0aHJvd3MvbnVsbHRocm93cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG51bGx0aHJvd3MoeCwgbWVzc2FnZSkge1xuICBpZiAoeCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UgIT09IHVuZGVmaW5lZCA/IG1lc3NhZ2UgOiAnR290IHVuZXhwZWN0ZWQgJyArIHgpO1xuICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIFNraXAgbnVsbHRocm93cydzIG93biBzdGFjayBmcmFtZS5cbiAgdGhyb3cgZXJyb3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbnVsbHRocm93cztcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBudWxsdGhyb3dzO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLmV4cG9ydHMsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/.pnpm/nullthrows@1.1.1/node_modules/nullthrows/nullthrows.js\n");

/***/ })

};
;