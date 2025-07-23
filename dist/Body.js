"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_svg_1 = require("react-native-svg");
const differenceWith_1 = __importDefault(require("ramda/src/differenceWith"));
const bodyFront_1 = require("./assets/bodyFront");
const bodyBack_1 = require("./assets/bodyBack");
const SvgMaleWrapper_1 = require("./components/SvgMaleWrapper");
const comparison = (a, b) => a.slug === b.slug;
const Body = ({ data, scale = 1, colors = ["#0984e3", "#74b9ff"], side = "front", onBodyPartPress, onBodyPartHover, }) => {
    const mergedBodyParts = (0, react_1.useCallback)((dataSource) => {
        const innerData = data
            .map((d) => {
            return dataSource.find((t) => {
                return t.slug === d.slug;
            });
        })
            .filter((d) => d !== undefined);
        const coloredBodyParts = innerData.map((d) => {
            const bodyPart = data.find((e) => e.slug === d.slug);
            let colorIntensity = 1;
            if (bodyPart === null || bodyPart === void 0 ? void 0 : bodyPart.intensity)
                colorIntensity = bodyPart.intensity;
            return Object.assign(Object.assign({}, d), { color: colors[colorIntensity - 1] });
        });
        const formattedBodyParts = (0, differenceWith_1.default)(comparison, dataSource, data);
        return [...formattedBodyParts, ...coloredBodyParts];
    }, [data, colors]);
    const getColorToFill = (bodyPart) => {
        let color;
        if (bodyPart.intensity && bodyPart.intensity > 0)
            color = colors[bodyPart.intensity - 1];
        else
            color = bodyPart.color;
        return color;
    };
    const renderBodySvg = (data) => {
        const SvgWrapper = SvgMaleWrapper_1.SvgMaleWrapper;
        return (react_1.default.createElement(SvgWrapper, { side: side, scale: scale }, mergedBodyParts(data).map((bodyPart) => {
            if (bodyPart.pathArray) {
                return bodyPart.pathArray.map((path) => {
                    return (react_1.default.createElement(react_native_svg_1.Path, { key: path, onPress: () => onBodyPartPress === null || onBodyPartPress === void 0 ? void 0 : onBodyPartPress(bodyPart), onPressIn: () => onBodyPartHover === null || onBodyPartHover === void 0 ? void 0 : onBodyPartHover(bodyPart.slug), onPressOut: () => onBodyPartHover === null || onBodyPartHover === void 0 ? void 0 : onBodyPartHover(null), id: bodyPart.slug, fill: getColorToFill(bodyPart), d: path }));
                });
            }
        })));
    };
    return renderBodySvg(side === "front" ? bodyFront_1.bodyFront : bodyBack_1.bodyBack);
};
exports.default = (0, react_1.memo)(Body);
