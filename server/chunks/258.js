"use strict";
exports.id = 258;
exports.ids = [258];
exports.modules = {

/***/ 68:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button),
  "cV": () => (/* reexport */ SectionBigHeading),
  "S$": () => (/* reexport */ SectionContainer),
  "jm": () => (/* reexport */ SectionInnerHeading),
  "LK": () => (/* reexport */ SectionSubheading)
});

// UNUSED EXPORTS: SectionHeading, SectionParagraph, SectionTinyHeading

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Button/elements.jsx
const _excluded = ["color", "variant"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const outlinedVariantButton = (0,external_styled_components_.css)(["background-color:transparent;border:1px solid;border-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";color:", ";}"], ({
  theme,
  color
}) => theme[color], ({
  theme,
  color
}) => theme[color], ({
  theme
}) => theme.main, ({
  theme
}) => theme.main, ({
  theme
}) => theme.white);
const containedVariantButton = (0,external_styled_components_.css)(["background-color:", ";&:hover{background-color:", ";}"], ({
  theme,
  color
}) => theme[color], ({
  theme,
  color
}) => theme.hover[color]);
const textVariantButton = (0,external_styled_components_.css)(["background-color:transparent;border:none;border-radius:0;min-width:unset;padding:0 2rem;margin:0 2rem;color:", ";&:hover{color:", ";border-bottom:1px solid ", ";}"], ({
  theme,
  color
}) => theme[color], ({
  theme
}) => theme.black, ({
  theme
}) => theme.black);
const buttonVariants = {
  outlined: outlinedVariantButton,
  contained: containedVariantButton,
  text: textVariantButton
};
const StyledButton = external_styled_components_default()(_ref => {
  let {
    color = "primary",
    variant = "contained"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("button", _objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledButton",
  componentId: "sc-agcaap-0"
})(["font-family:sans-serif;overflow:hidden;text-align:center;align-self:center;display:flex;align-items:center;justify-content:center;border-radius:7px;font-weight:500;font-size:16px;line-height:24px;min-width:184px;min-height:56px;padding:16px 0;cursor:pointer;border:none;color:white;", ""], ({
  variant
}) => buttonVariants[variant]);
const StyledButtonText = external_styled_components_default()(props => /*#__PURE__*/jsx_runtime_.jsx(SectionInnerHeading, _objectSpread({}, props))).withConfig({
  displayName: "elements__StyledButtonText",
  componentId: "sc-agcaap-1"
})([""]);
;// CONCATENATED MODULE: ./components/Button/Button.jsx
const Button_excluded = ["children"];

function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Button_ownKeys(Object(source), true).forEach(function (key) { Button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Button = _ref => {
  let {
    children
  } = _ref,
      props = Button_objectWithoutProperties(_ref, Button_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(StyledButton, Button_objectSpread(Button_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(StyledButtonText, {
      children: children
    })
  }));
};
;// CONCATENATED MODULE: ./components/Button/index.js

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Typography/elements.jsx
function elements_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function elements_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { elements_ownKeys(Object(source), true).forEach(function (key) { elements_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { elements_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function elements_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/display-name */



const StyledSectionBigHeading = external_styled_components_default()( /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => /*#__PURE__*/jsx_runtime_.jsx("h1", elements_objectSpread(elements_objectSpread({}, props), {}, {
  ref: ref
})))).withConfig({
  displayName: "elements__StyledSectionBigHeading",
  componentId: "sc-1k6ba63-0"
})(["font-family:Poppins;font-weight:600;font-size:3rem;line-height:3.94rem;"]);
const elements_StyledSectionHeading = external_styled_components_default()( /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => /*#__PURE__*/jsx_runtime_.jsx("h2", elements_objectSpread(elements_objectSpread({}, props), {}, {
  ref: ref
})))).withConfig({
  displayName: "elements__StyledSectionHeading",
  componentId: "sc-1k6ba63-1"
})(["font-family:Poppins;font-size:2.5rem;line-height:4.375rem;font-weight:600;"]);
const StyledSectionSubheading = external_styled_components_default()( /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => /*#__PURE__*/jsx_runtime_.jsx("h3", elements_objectSpread(elements_objectSpread({}, props), {}, {
  ref: ref
})))).withConfig({
  displayName: "elements__StyledSectionSubheading",
  componentId: "sc-1k6ba63-2"
})(["font-family:Poppins;font-size:1.25rem;line-height:1.875rem;font-weight:300;"]);
const StyledSectionInnerHeading = external_styled_components_default()( /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => /*#__PURE__*/jsx_runtime_.jsx("h4", elements_objectSpread(elements_objectSpread({}, props), {}, {
  ref: ref
})))).withConfig({
  displayName: "elements__StyledSectionInnerHeading",
  componentId: "sc-1k6ba63-3"
})(["font-family:Poppins;font-size:1rem;line-height:1.5rem;font-weight:300;"]);
const elements_StyledSectionTinyHeading = external_styled_components_default()( /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => /*#__PURE__*/jsx_runtime_.jsx("h5", elements_objectSpread(elements_objectSpread({}, props), {}, {
  ref: ref
})))).withConfig({
  displayName: "elements__StyledSectionTinyHeading",
  componentId: "sc-1k6ba63-4"
})(["font-family:Poppins;font-size:0.75rem;line-height:1.125rem;font-weight:300;"]);
const elements_StyledSectionParagraph = external_styled_components_default()(props => /*#__PURE__*/jsx_runtime_.jsx("p", elements_objectSpread({}, props))).withConfig({
  displayName: "elements__StyledSectionParagraph",
  componentId: "sc-1k6ba63-5"
})(["font-family:Poppins;font-size:1rem;line-height:1.5rem;font-weight:400;"]);
;// CONCATENATED MODULE: ./components/Typography/SectionBigHeading.jsx
function SectionBigHeading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SectionBigHeading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionBigHeading_ownKeys(Object(source), true).forEach(function (key) { SectionBigHeading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionBigHeading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionBigHeading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SectionBigHeading = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx(StyledSectionBigHeading, SectionBigHeading_objectSpread({}, props));
};
;// CONCATENATED MODULE: ./components/Typography/SectionHeading.jsx
function SectionHeading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SectionHeading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionHeading_ownKeys(Object(source), true).forEach(function (key) { SectionHeading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionHeading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionHeading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SectionHeading = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/_jsx(StyledSectionHeading, SectionHeading_objectSpread({}, props));
};
;// CONCATENATED MODULE: ./components/Typography/SectionSubheading.jsx
function SectionSubheading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SectionSubheading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionSubheading_ownKeys(Object(source), true).forEach(function (key) { SectionSubheading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionSubheading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionSubheading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/display-name */



const SectionSubheading = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx(StyledSectionSubheading, SectionSubheading_objectSpread(SectionSubheading_objectSpread({}, props), {}, {
    ref: ref
  }));
});
;// CONCATENATED MODULE: ./components/Typography/SectionInnerHeading.jsx
function SectionInnerHeading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SectionInnerHeading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionInnerHeading_ownKeys(Object(source), true).forEach(function (key) { SectionInnerHeading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionInnerHeading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionInnerHeading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SectionInnerHeading = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx(StyledSectionInnerHeading, SectionInnerHeading_objectSpread({}, props));
};
;// CONCATENATED MODULE: ./components/Typography/SectionParagraph.jsx
function SectionParagraph_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SectionParagraph_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionParagraph_ownKeys(Object(source), true).forEach(function (key) { SectionParagraph_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionParagraph_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionParagraph_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SectionParagraph = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/_jsx(StyledSectionParagraph, SectionParagraph_objectSpread({}, props));
};
;// CONCATENATED MODULE: ./components/Typography/SectionTinyHeading.jsx
function SectionTinyHeading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SectionTinyHeading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionTinyHeading_ownKeys(Object(source), true).forEach(function (key) { SectionTinyHeading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionTinyHeading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionTinyHeading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SectionTinyHeading = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/_jsx(StyledSectionTinyHeading, SectionTinyHeading_objectSpread({}, props));
};
;// CONCATENATED MODULE: ./components/Typography/index.js






;// CONCATENATED MODULE: ./components/Containers/SectionContainer/elements.jsx
const elements_excluded = ["topMargin", "bottomMargin"];

function SectionContainer_elements_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SectionContainer_elements_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionContainer_elements_ownKeys(Object(source), true).forEach(function (key) { SectionContainer_elements_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionContainer_elements_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionContainer_elements_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function elements_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = elements_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function elements_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const StyledSectionContainer = external_styled_components_default()(_ref => {
  let {
    topMargin = 0,
    bottomMargin = 0
  } = _ref,
      props = elements_objectWithoutProperties(_ref, elements_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("div", SectionContainer_elements_objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledSectionContainer",
  componentId: "sc-5etjys-0"
})(["display:flex;max-width:1920px;width:100%;height:auto;margin-left:auto;margin-right:auto;margin-top:", "rem;margin-bottom:", "rem;"], ({
  topMargin
}) => topMargin, ({
  bottomMargin
}) => bottomMargin);
;// CONCATENATED MODULE: ./components/Containers/SectionContainer/SectionContainer.jsx
function SectionContainer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SectionContainer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SectionContainer_ownKeys(Object(source), true).forEach(function (key) { SectionContainer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SectionContainer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SectionContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SectionContainer = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx(StyledSectionContainer, SectionContainer_objectSpread({}, props));
};
;// CONCATENATED MODULE: ./components/Containers/SectionContainer/index.js

;// CONCATENATED MODULE: ./components/Containers/index.js

;// CONCATENATED MODULE: ./components/index.js




/***/ }),

/***/ 258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* reexport */ ManagedAgencySelection)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./collections/Card/elements.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const StyledCard = external_styled_components_default()(_ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledCard",
  componentId: "sc-1h2nc89-0"
})(["background-color:#F1F1F1;display:flex;align-items:center;padding:1rem;margin-bottom:2rem;width:", ";max-width:", ";border-radius:10px;font-family:\"Poppins\",sans-serif;border:2px solid transparent;transition:0.2s ease-in-out;:hover{border:2px solid blue;}@media (max-width:1300px){max-width:60%;width:60%;}"], props => props.size === 'medium' ? '50%' : '55%', props => props.size === 'small' ? '45%' : '55%');
const StyledTitle = external_styled_components_default()( /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => /*#__PURE__*/jsx_runtime_.jsx("h3", _objectSpread(_objectSpread({}, props), {}, {
  ref: ref
})))).withConfig({
  displayName: "elements__StyledTitle",
  componentId: "sc-1h2nc89-1"
})(["display:block;margin:0;", ":hover &{color:blue;text-decoration:underline;}"], StyledCard);
const StyledArticle = external_styled_components_default()(_ref2 => {
  let props = Object.assign({}, _ref2);
  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledArticle",
  componentId: "sc-1h2nc89-2"
})(["margin-left:2rem;"]);
const Text = external_styled_components_default()( /*#__PURE__*/(0,external_react_.forwardRef)((props, ref) => /*#__PURE__*/jsx_runtime_.jsx("p", _objectSpread(_objectSpread({}, props), {}, {
  ref: ref
})))).withConfig({
  displayName: "elements__Text",
  componentId: "sc-1h2nc89-3"
})(["margin-top:0;"]);
;// CONCATENATED MODULE: ./collections/Card/Card.jsx
// The Card to be exported goes here




const Card = ({
  title,
  icon,
  size,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledCard, {
    size: size,
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
      src: icon.src,
      alt: "Icon",
      width: icon.width,
      height: icon.height
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledArticle, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(StyledTitle, {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
        children: children
      })]
    })]
  });
};
// EXTERNAL MODULE: ./components/index.js + 15 modules
var components = __webpack_require__(68);
;// CONCATENATED MODULE: ./sections/AgencySelection/elements.jsx
const _excluded = ["height"];

function elements_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function elements_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { elements_ownKeys(Object(source), true).forEach(function (key) { elements_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { elements_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function elements_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const StyledContainer = external_styled_components_default()(_ref => {
  let {
    height
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(components/* SectionContainer */.S$, elements_objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledContainer",
  componentId: "sc-13w6yvz-0"
})(["align-items:center;margin-bottom:2rem;"]);
const elements_StyledTitle = external_styled_components_default()(props => /*#__PURE__*/jsx_runtime_.jsx(components/* SectionBigHeading */.cV, elements_objectSpread({}, props))).withConfig({
  displayName: "elements__StyledTitle",
  componentId: "sc-13w6yvz-1"
})(["margin:4rem auto 0;color:black;"]);
const StyledDescription = external_styled_components_default()(props => /*#__PURE__*/jsx_runtime_.jsx(components/* SectionSubheading */.LK, elements_objectSpread({}, props))).withConfig({
  displayName: "elements__StyledDescription",
  componentId: "sc-13w6yvz-2"
})(["margin:.3rem 0 0;text-align:center;"]);
const StyledTextContainer = external_styled_components_default()(_ref2 => {
  let props = Object.assign({}, _ref2);
  return /*#__PURE__*/jsx_runtime_.jsx("div", elements_objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledTextContainer",
  componentId: "sc-13w6yvz-3"
})(["color:black;margin:0 auto;font-family:sans-serif;"]);
const StyledVideoContainer = external_styled_components_default()(_ref3 => {
  let props = Object.assign({}, _ref3);
  return /*#__PURE__*/jsx_runtime_.jsx("div", elements_objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledVideoContainer",
  componentId: "sc-13w6yvz-4"
})(["width:fit-content;@media (max-width:1024px){margin-bottom:2rem;}"]);
const StyledOuterContainer = external_styled_components_default()(_ref4 => {
  let props = Object.assign({}, _ref4);
  return /*#__PURE__*/jsx_runtime_.jsx("div", elements_objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledOuterContainer",
  componentId: "sc-13w6yvz-5"
})(["background:url(\"/img/background.png\") 25% / contain no-repeat;display:flex;justify-content:center;position:relative;"]);
const StyledInnerContainer = external_styled_components_default()(_ref5 => {
  let props = Object.assign({}, _ref5);
  return /*#__PURE__*/jsx_runtime_.jsx("div", elements_objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledInnerContainer",
  componentId: "sc-13w6yvz-6"
})(["display:flex;align-items:center;margin-left:17rem;@media (max-width:1024px){margin:auto;flex-direction:column;}"]);
const StyledSection = external_styled_components_default()(_ref6 => {
  let props = Object.assign({}, _ref6);
  return /*#__PURE__*/jsx_runtime_.jsx("div", elements_objectSpread({}, props));
}).withConfig({
  displayName: "elements__StyledSection",
  componentId: "sc-13w6yvz-7"
})(["margin-left:3rem;@media (max-width:1024px){margin-left:0;display:flex;flex-flow:column;align-items:center;}"]);
;// CONCATENATED MODULE: ./sections/AgencySelection/AgencySelection.jsx
const AgencySelection_excluded = ["video", "title", "description", "cardTitle", "cardIcon", "cardText"];

function AgencySelection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function AgencySelection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AgencySelection_ownKeys(Object(source), true).forEach(function (key) { AgencySelection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AgencySelection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AgencySelection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AgencySelection_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AgencySelection_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AgencySelection_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ManagedAgencySelection = _ref => {
  let {
    video,
    title,
    description,
    cardTitle,
    cardIcon,
    cardText
  } = _ref,
      props = AgencySelection_objectWithoutProperties(_ref, AgencySelection_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(StyledContainer, AgencySelection_objectSpread(AgencySelection_objectSpread({}, props), {}, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledTextContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(elements_StyledTitle, {
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledDescription, {
          children: description
        })]
      })
    })), /*#__PURE__*/jsx_runtime_.jsx(StyledOuterContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledInnerContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(StyledVideoContainer, {
          children: /*#__PURE__*/jsx_runtime_.jsx("video", {
            src: video.src,
            width: video.width,
            height: video.height,
            type: "video/mp4",
            controls: true
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledSection, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
            size: "small",
            title: "Brief",
            icon: {
              src: '/img/icon1.png',
              width: 60,
              height: 60
            },
            children: ["Complete ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: "brief writing or simple guidance"
            }), " on what to include, we've got you covered."]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
            size: "medium",
            title: "Search",
            icon: {
              src: '/img/icon2.png',
              width: 60,
              height: 60
            },
            children: ["In-depth agency search covering; ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: "criteria matching,"
            }), " door knocking and due-dilligence vetting."]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
            title: "Pitch",
            icon: {
              src: '/img/icon3.png',
              width: 60,
              height: 60
            },
            children: ["Comprehensive ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: "pitch management"
            }), " including comms, diary managment and pitch hosting."]
          })]
        })]
      })
    })]
  });
};
;// CONCATENATED MODULE: ./sections/AgencySelection/index.js


/***/ })

};
;