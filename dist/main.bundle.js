"use strict";
(self["webpackChunktemplate_repo"] = self["webpackChunktemplate_repo"] || []).push([["main"],{

/***/ "./src/LinkedList_class.js":
/*!*********************************!*\
  !*** ./src/LinkedList_class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedList: () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _src_node_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/node_class */ "./src/node_class.js");


// Linked list
class LinkedList {
  constructor(head) {
    this.head = head;
  }

  // add a node to the end of the list
  append(value) {
    let tmp = head;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = new _src_node_class__WEBPACK_IMPORTED_MODULE_0__.Node(value, null);
  }
  prepend(value) {
    head = new _src_node_class__WEBPACK_IMPORTED_MODULE_0__.Node(value, head);
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_node_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/node_class.js */ "./src/node_class.js");
/* harmony import */ var _src_LinkedList_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/LinkedList_class.js */ "./src/LinkedList_class.js");


let test = new _src_LinkedList_class_js__WEBPACK_IMPORTED_MODULE_1__.LinkedList(new _src_node_class_js__WEBPACK_IMPORTED_MODULE_0__.Node('first node'));
console.log(test);

/***/ }),

/***/ "./src/node_class.js":
/*!***************************!*\
  !*** ./src/node_class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
// Node class
class Node {
  constructor() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.value = value;
    this.next = next;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7O0FBRXpDO0FBQ0EsTUFBTUMsVUFBVSxDQUFDO0VBQ2JDLFdBQVdBLENBQUVDLElBQUksRUFBRTtJQUNmLElBQUksQ0FBQ0EsSUFBSSxHQUFHQSxJQUFJO0VBQ3BCOztFQUdBO0VBQ0FDLE1BQU1BLENBQUNDLEtBQUssRUFBRTtJQUNWLElBQUlDLEdBQUcsR0FBR0gsSUFBSTtJQUNkLE9BQU9HLEdBQUcsQ0FBQ0MsSUFBSSxLQUFLLElBQUksRUFBRTtNQUN0QkQsR0FBRyxHQUFHQSxHQUFHLENBQUNDLElBQUk7SUFDbEI7SUFDQUQsR0FBRyxDQUFDQyxJQUFJLEdBQUcsSUFBSVAsaURBQUksQ0FBQ0ssS0FBSyxFQUFFLElBQUksQ0FBQztFQUNwQztFQUVBRyxPQUFPQSxDQUFDSCxLQUFLLEVBQUU7SUFDWEYsSUFBSSxHQUFHLElBQUlILGlEQUFJLENBQUNLLEtBQUssRUFBRUYsSUFBSSxDQUFDO0VBQ2hDO0FBQ0o7Ozs7Ozs7Ozs7Ozs7O0FDckI0QztBQUNZO0FBRXhELElBQUlNLElBQUksR0FBRyxJQUFJUixnRUFBVSxDQUFDLElBQUlELG9EQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDakRVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDSmpCO0FBQ0EsTUFBTVQsSUFBSSxDQUFDO0VBQ1BFLFdBQVdBLENBQUEsRUFBNEI7SUFBQSxJQUEzQkcsS0FBSyxHQUFBTyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO0lBQUEsSUFBRUwsSUFBSSxHQUFBSyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO0lBQ2pDLElBQUksQ0FBQ1AsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0UsSUFBSSxHQUFHQSxJQUFJO0VBQ3BCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL0xpbmtlZExpc3RfY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL25vZGVfY2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uL3NyYy9ub2RlX2NsYXNzJztcclxuXHJcbi8vIExpbmtlZCBsaXN0XHJcbmNsYXNzIExpbmtlZExpc3Qge1xyXG4gICAgY29uc3RydWN0b3IgKGhlYWQpIHtcclxuICAgICAgICB0aGlzLmhlYWQgPSBoZWFkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBhZGQgYSBub2RlIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcclxuICAgIGFwcGVuZCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCB0bXAgPSBoZWFkO1xyXG4gICAgICAgIHdoaWxlICh0bXAubmV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0bXAgPSB0bXAubmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG1wLm5leHQgPSBuZXcgTm9kZSh2YWx1ZSwgbnVsbClcclxuICAgIH1cclxuXHJcbiAgICBwcmVwZW5kKHZhbHVlKSB7XHJcbiAgICAgICAgaGVhZCA9IG5ldyBOb2RlKHZhbHVlLCBoZWFkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTGlua2VkTGlzdCB9OyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi9zcmMvbm9kZV9jbGFzcy5qcyc7XHJcbmltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICcuLi9zcmMvTGlua2VkTGlzdF9jbGFzcy5qcyc7XHJcblxyXG5sZXQgdGVzdCA9IG5ldyBMaW5rZWRMaXN0KG5ldyBOb2RlKCdmaXJzdCBub2RlJykpO1xyXG5jb25zb2xlLmxvZyh0ZXN0KTsiLCIvLyBOb2RlIGNsYXNzXHJcbmNsYXNzIE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUgPSBudWxsLCBuZXh0ID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm5leHQgPSBuZXh0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBOb2RlIH07Il0sIm5hbWVzIjpbIk5vZGUiLCJMaW5rZWRMaXN0IiwiY29uc3RydWN0b3IiLCJoZWFkIiwiYXBwZW5kIiwidmFsdWUiLCJ0bXAiLCJuZXh0IiwicHJlcGVuZCIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==