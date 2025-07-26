"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ramda_1 = require("ramda");
var bodyFront_1 = require("./assets/bodyFront");
var bodyBack_1 = require("./assets/bodyBack");
var SvgMaleWrapper_1 = require("./components/SvgMaleWrapper");
var DEFAULT_COLORS = [
    '#5db8f5', // "Selected"
    '#0eac0e', // "Concerning"
    '#e6c327', // "Needs attention"
    '#f8556d', // "Critical"
];
var comparison = function (a, b) { return a.slug === b.slug; };
var Body = function (_a) {
    var data = _a.data, _b = _a.scale, scale = _b === void 0 ? 1 : _b, _c = _a.colors, colors = _c === void 0 ? DEFAULT_COLORS : _c, _d = _a.side, side = _d === void 0 ? "front" : _d, frontOnly = _a.frontOnly, backOnly = _a.backOnly, onBodyPartPress = _a.onBodyPartPress;
    var mergedBodyParts = (0, react_1.useCallback)(function (dataSource) {
        var innerData = data
            .map(function (d) {
            return dataSource.find(function (t) {
                return t.slug === d.slug;
            });
        })
            .filter(function (d) { return d !== undefined; });
        var coloredBodyParts = innerData.map(function (d) {
            var bodyPart = data.find(function (e) { return e.slug === d.slug; });
            var colorIntensity = 1;
            if (bodyPart === null || bodyPart === void 0 ? void 0 : bodyPart.intensity)
                colorIntensity = bodyPart.intensity;
            return __assign(__assign({}, d), { color: colors[colorIntensity - 1] });
        });
        var formattedBodyParts = (0, ramda_1.differenceWith)(comparison, dataSource, data);
        return __spreadArray(__spreadArray([], formattedBodyParts, true), coloredBodyParts, true);
    }, [data, colors]);
    var getColorToFill = function (bodyPart) {
        var color;
        if (bodyPart.intensity && bodyPart.intensity > 0)
            color = colors[bodyPart.intensity - 1];
        else
            color = bodyPart.color;
        return color;
    };
    var renderBodySvg = function (data) {
        var SvgWrapper = SvgMaleWrapper_1.SvgMaleWrapper;
        return ((0, jsx_runtime_1.jsx)(SvgWrapper, { side: side, scale: scale, children: mergedBodyParts(data).map(function (bodyPart) {
                if (bodyPart.pathArray) {
                    return bodyPart.pathArray.map(function (path) {
                        return ((0, jsx_runtime_1.jsx)("path", { onClick: function () { return onBodyPartPress === null || onBodyPartPress === void 0 ? void 0 : onBodyPartPress(bodyPart); }, id: bodyPart.slug, fill: getColorToFill(bodyPart), d: path }, path));
                    });
                }
            }) }));
    };
    var bodyData = frontOnly
        ? bodyFront_1.bodyFront
        : backOnly
            ? bodyBack_1.bodyBack
            : side === "front"
                ? bodyFront_1.bodyFront
                : bodyBack_1.bodyBack;
    return renderBodySvg(bodyData);
};
exports.default = (0, react_1.memo)(Body);
