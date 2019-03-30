webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "C:\\Users\\EMMANUEL\\Desktop\\testjava\\pages\\index.js";
// import React, { Component } from "react";
//  class index extends Component {
// constructor(props){
//   super(props);
// this.state = {
//   userInput: '',
//   list: []
// }
// }
// changeUserInput(input){
//   this.setState({
//     userInput: input
//   }, () => console.log(input))//you cany add a console.log() to check what you did was okay.
// }
// addToList(input){
//   let listArray = this.state.list;
//   listArray.push(input);
//   this.setState({
//     list: listArray,
//     userInput: ''
//   })
// }
// render(){
// return(
// <div className="to-do-list-main"> 
// <input
//  onChange={ (e)=>this.changeUserInput(e.target.value)}// all this are inside the input
//   value={this.state.userInput}
//    type="text" 
//    />
// <button onClick={ () => this.addToList(this.state.userInput)}  > PRESS ME</button>
// <ul>
// {this.state.list.map((val)=> <li>{val}</li>)};
// </ul>
// </div>
// );
// }
// }


var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(index, _Component);

  function index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(index).call(this, props));
    _this.state = {
      newItem: "",
      list: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(index, [{
    key: "updateInput",
    value: function updateInput(key, value) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, value));
    }
  }, {
    key: "addItem",
    value: function addItem() {
      //create item with unique id
      var newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      }; //copy of current list of items

      var list = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.list); //add new item to list


      list.push(newItem); //update state with new list and reset newItem input

      this.setState({
        list: list,
        newItem: ''
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(id) {
      //copy current list of items
      var list = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.list); //filter out item being deleted


      var updatedList = list.filter(function (item) {
        return item.id !== id;
      });
      this.setState({
        list: updatedList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "todo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "add an item..", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        placeholder: "type item here",
        value: this.state.newitem,
        onChange: function onChange(e) {
          return _this2.updateInput("newItem", e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2.addItem();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "add"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, this.state.list.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, item.value, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.deleteItem(item.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, "x"));
      })))); // this is where return stops
    } //this is where render() stops

  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.4bd65941cf45d3c292c5.hot-update.js.map