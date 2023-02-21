/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/add-game-button.js":
/*!***********************************!*\
  !*** ./src/js/add-game-button.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst addGameButtonHandler = async (event) => {\n  document.location.replace('/games/create-game');\n};\n\nlet addGameButton = document.querySelector('#add-game-button') !== null;\nif (addGameButton) {\n  document\n    .querySelector('#add-game-button')\n    .addEventListener('click', addGameButtonHandler);\n}\n\n\n//# sourceURL=webpack://project-two-group-six/./src/js/add-game-button.js?");

/***/ }),

/***/ "./src/js/create-account.js":
/*!**********************************!*\
  !*** ./src/js/create-account.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst signupFormHandler = async (event) => {\n  event.preventDefault();\n\n  const username = document.querySelector('#username-signup').value.trim();\n  const password = document.querySelector('#password-signup').value.trim();\n  const passwordConfirm = document.querySelector('#password-signup-confirm').value.trim();\n\n  if (username && password && passwordConfirm) {\n    if (password != passwordConfirm){\n      deliverToast('Passwords do not match!')\n      return\n    }\n\n    const response = await fetch('/user/api/create-account', {\n      method: 'POST',\n      body: JSON.stringify({ username, password }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.replace('/games');\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet signupButton = document.querySelector('#signup-button') !== null;\nif (signupButton) {\n  document\n    .querySelector('#signup-button')\n    .addEventListener('click', signupFormHandler) !== null;\n}\n\n\n//# sourceURL=webpack://project-two-group-six/./src/js/create-account.js?");

/***/ }),

/***/ "./src/js/create-comment.js":
/*!**********************************!*\
  !*** ./src/js/create-comment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst commentFormHandler = async (event) => {\n  event.preventDefault();\n\n  const commentData = document.querySelector('#comment-content').value.trim();\n  const postId = document.querySelector('#post-title').dataset.postNumber;\n\n  if (commentData) {\n    const response = await fetch('/posts/api/create-comment', {\n      method: 'POST',\n      body: JSON.stringify({ commentData, postId }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.reload();\n\n      // console.log('response ok');\n      // return;\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet signupButton = document.querySelector('#post-comment-button') !== null;\nif (signupButton) {\n  document\n    .querySelector('#post-comment-button')\n    .addEventListener('click', commentFormHandler) !== null;\n}\n\n\n//# sourceURL=webpack://project-two-group-six/./src/js/create-comment.js?");

/***/ }),

/***/ "./src/js/create-game.js":
/*!*******************************!*\
  !*** ./src/js/create-game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst newGameFormHandler = async (event) => {\n  event.preventDefault();\n\n  const title = document.querySelector('#new-game-title').value.trim();\n  const content = document.querySelector('#new-game-content').value.trim();\n  const timestamp = Date.now();\n\n  if (title && content) {\n    const response = await fetch('/games/api/create-game', {\n      method: 'POST',\n      body: JSON.stringify({ title, timestamp, content }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.replace('/games/all-games');\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet newGameButton = document.querySelector('#new-game-button') !== null;\nif (newGameButton) {\n  document\n    .querySelector('#new-game-button')\n    .addEventListener('click', newGameFormHandler);\n}\n\n\n//# sourceURL=webpack://project-two-group-six/./src/js/create-game.js?");

/***/ }),

/***/ "./src/js/create-post.js":
/*!*******************************!*\
  !*** ./src/js/create-post.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst newPostFormHandler = async (event) => {\n  event.preventDefault();\n\n  const title = document.querySelector('#new-post-title').value.trim();\n  const content = document.querySelector('#new-post-content').value.trim();\n  const timestamp = Date.now();\n\n  if (title && content) {\n    const response = await fetch('/posts/api/create-post', {\n      method: 'POST',\n      body: JSON.stringify({ title, timestamp, content }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.replace('/user/dashboard');\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet newPostButton = document.querySelector('.new-post-button') !== null;\nif (newPostButton) {\n  document\n    .querySelector('.new-post-button')\n    .addEventListener('click', newPostFormHandler);\n}\n\n\n//# sourceURL=webpack://project-two-group-six/./src/js/create-post.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./login.js */ \"./src/js/login.js\")\n__webpack_require__(/*! ./logout.js */ \"./src/js/logout.js\")\n__webpack_require__(/*! ./create-account.js */ \"./src/js/create-account.js\")\n__webpack_require__(/*! ./create-comment.js */ \"./src/js/create-comment.js\")\n__webpack_require__(/*! ./create-game.js */ \"./src/js/create-game.js\")\n__webpack_require__(/*! ./create-post.js */ \"./src/js/create-post.js\")\n__webpack_require__(/*! ./make-toast.js */ \"./src/js/make-toast.js\")\n__webpack_require__(/*! ./add-game-button.js */ \"./src/js/add-game-button.js\")\n\n//# sourceURL=webpack://project-two-group-six/./src/js/index.js?");

/***/ }),

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst loginFormHandler = async (event) => {\n  event.preventDefault();\n\n  const username = document.querySelector('#username-login').value.trim();\n  const password = document.querySelector('#password-login').value.trim();\n\n  if (username && password) {\n    const response = await fetch('/user/api/login', {\n      method: 'POST',\n      body: JSON.stringify({ username, password }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.replace('/games');\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet loginButton = document.querySelector('#login-button') !== null;\nif (loginButton) {\n  document\n    .querySelector('#login-button')\n    .addEventListener('click', loginFormHandler);\n}\n\n\n//# sourceURL=webpack://project-two-group-six/./src/js/login.js?");

/***/ }),

/***/ "./src/js/logout.js":
/*!**************************!*\
  !*** ./src/js/logout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst logoutHandler = async () => {\n  const response = await fetch('/user/api/logout', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n  });\n\n  if (response.ok) {\n    document.location.replace('/');\n  } else {\n    response.json().then((data) => {\n      deliverToast(data.message);\n    });\n  }\n};\n\nlet logoutButton = document.querySelector('#logout') !== null;\nif (logoutButton) {\n  document\n    .querySelector('#logout')\n    .addEventListener('click', logoutHandler);\n}\n\n//# sourceURL=webpack://project-two-group-six/./src/js/logout.js?");

/***/ }),

/***/ "./src/js/make-toast.js":
/*!******************************!*\
  !*** ./src/js/make-toast.js ***!
  \******************************/
/***/ ((module) => {

eval("function deliverToast(message) {\n  const toastLiveExample = document.getElementById('error-toast');\n  const toastBody = document.getElementById('toast-body');\n  toastBody.innerText = message;\n  const toast = new bootstrap.Toast(toastLiveExample);\n\n  toast.show();\n}\n\nmodule.exports = deliverToast;\n\n\n//# sourceURL=webpack://project-two-group-six/./src/js/make-toast.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;