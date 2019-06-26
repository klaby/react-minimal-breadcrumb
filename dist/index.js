"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Imports
// Main
var Main = function Main(_ref) {
  var routes = _ref.routes;
  return _react["default"].createElement(_Breadcrumb["default"], {
    routes: routes
  });
};

var _default = Main;
exports["default"] = _default;