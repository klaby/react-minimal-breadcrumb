"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px;\n  text-transform: capitalize;\n  color: #227093;\n\n  :hover {\n    color: #34ace0;\n  }\n\n  :first-child {\n    margin-left: 0;\n  }\n\n  :last-child {\n    color: #656565;\n    pointer-events: none;\n    cursor: default;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px;\n  height: 40px;\n  width: 100%;\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  margin-bottom: 10px;\n  border: 1px solid #ddd;\n  border-top: 0;\n  border-right: 0;\n  border-left: 0;\n\n  i {\n    color: #656565;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
var Breadcrumb = _styledComponents["default"].div(_templateObject());

var Li = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject2()); // Funcs

var getPaths = function getPaths() {
  var paths = [];
  var path = document.location.pathname.split('/');
  path.map(function (p) {
    return paths.push("/".concat(p));
  });
  return paths;
};

var createLinks = function createLinks(routes) {
  return routes.map(function (route) {
    return getPaths().includes(route.route) ? _react["default"].createElement(_react["default"].Fragment, {
      key: route.route
    }, route.route === '/' ? _react["default"].createElement("i", {
      className: route.icon
    }) : _react["default"].createElement("span", null, "/"), _react["default"].createElement(Li, {
      to: route.route
    }, route.route === '/' ? 'Home' : route.route.split('/'))) : '';
  });
}; // Main


var Main = function Main(_ref) {
  var routes = _ref.routes;
  return _react["default"].createElement(Breadcrumb, null, createLinks(routes));
}; // ProTypes


Main.propTypes = {
  routes: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired
};
var _default = Main;
exports["default"] = _default;