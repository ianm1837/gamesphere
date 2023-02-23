/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/create-account.js":
/*!**********************************!*\
  !*** ./src/js/create-account.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst signupFormHandler = async (event) => {\n  event.preventDefault();\n\n  const username = document.querySelector('#username-signup').value.trim();\n  const password = document.querySelector('#password-signup').value.trim();\n  const passwordConfirm = document\n    .querySelector('#password-signup-confirm')\n    .value.trim();\n\n  if (username && password && passwordConfirm) {\n    if (password != passwordConfirm) {\n      deliverToast('Passwords do not match!');\n      return;\n    }\n\n    const response = await fetch('/user/api/create-account', {\n      method: 'POST',\n      body: JSON.stringify({ username, password }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.replace('/games');\n      return;\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet signupButton = document.querySelector('#signup-button') !== null;\nif (signupButton) {\n  document\n    .querySelector('#signup-button')\n    .addEventListener('click', signupFormHandler) !== null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLWFjY291bnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsb0JBQW9CO0FBQ2pELGlCQUFpQixvQ0FBb0M7QUFDckQsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2NyZWF0ZS1hY2NvdW50LmpzP2I0MTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVsaXZlclRvYXN0ID0gcmVxdWlyZSgnLi9tYWtlLXRvYXN0Jyk7XG5cbmNvbnN0IHNpZ251cEZvcm1IYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUtc2lnbnVwJykudmFsdWUudHJpbSgpO1xuICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZC1zaWdudXAnKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHBhc3N3b3JkQ29uZmlybSA9IGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZC1zaWdudXAtY29uZmlybScpXG4gICAgLnZhbHVlLnRyaW0oKTtcblxuICBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQgJiYgcGFzc3dvcmRDb25maXJtKSB7XG4gICAgaWYgKHBhc3N3b3JkICE9IHBhc3N3b3JkQ29uZmlybSkge1xuICAgICAgZGVsaXZlclRvYXN0KCdQYXNzd29yZHMgZG8gbm90IG1hdGNoIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy91c2VyL2FwaS9jcmVhdGUtYWNjb3VudCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZSgnL2dhbWVzJyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGl2ZXJUb2FzdChkYXRhLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5sZXQgc2lnbnVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZ251cC1idXR0b24nKSAhPT0gbnVsbDtcbmlmIChzaWdudXBCdXR0b24pIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignI3NpZ251cC1idXR0b24nKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZ251cEZvcm1IYW5kbGVyKSAhPT0gbnVsbDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/create-account.js\n");

/***/ }),

/***/ "./src/js/create-comment.js":
/*!**********************************!*\
  !*** ./src/js/create-comment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst commentFormHandler = async (event) => {\n  event.preventDefault();\n\n  const commentData = document.querySelector('#comment-content').value.trim();\n  const postId = document.querySelector('#post-title').dataset.postNumber;\n\n  if (commentData) {\n    const response = await fetch('/posts/api/create-comment', {\n      method: 'POST',\n      body: JSON.stringify({ commentData, postId }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.reload();\n\n      // console.log('response ok');\n      // return;\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet signupButton = document.querySelector('#post-comment-button') !== null;\nif (signupButton) {\n  document\n    .querySelector('#post-comment-button')\n    .addEventListener('click', commentFormHandler) !== null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLWNvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xELGlCQUFpQixvQ0FBb0M7QUFDckQsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2NyZWF0ZS1jb21tZW50LmpzPzdiZWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVsaXZlclRvYXN0ID0gcmVxdWlyZSgnLi9tYWtlLXRvYXN0Jyk7XG5cbmNvbnN0IGNvbW1lbnRGb3JtSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGNvbW1lbnREYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQtY29udGVudCcpLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcG9zdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bvc3QtdGl0bGUnKS5kYXRhc2V0LnBvc3ROdW1iZXI7XG5cbiAgaWYgKGNvbW1lbnREYXRhKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3Bvc3RzL2FwaS9jcmVhdGUtY29tbWVudCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50RGF0YSwgcG9zdElkIH0pLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygncmVzcG9uc2Ugb2snKTtcbiAgICAgIC8vIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsaXZlclRvYXN0KGRhdGEubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmxldCBzaWdudXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9zdC1jb21tZW50LWJ1dHRvbicpICE9PSBudWxsO1xuaWYgKHNpZ251cEJ1dHRvbikge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcjcG9zdC1jb21tZW50LWJ1dHRvbicpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tbWVudEZvcm1IYW5kbGVyKSAhPT0gbnVsbDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/create-comment.js\n");

/***/ }),

/***/ "./src/js/create-game.js":
/*!*******************************!*\
  !*** ./src/js/create-game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\n\n\nconst createGameForm = document.getElementById('uploadForm');\nif (createGameForm) {\n  createGameForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const formData = new FormData(createGameForm);\n\n    fetch('/games/api/create-game', {\n      method: 'POST',\n      body: formData,\n    })\n      .then((response) => {\n        console.log('File uploaded successfully!');\n      })\n      .catch((error) => {\n        console.error('Error uploading file:', error);\n      });\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLWdhbWUuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7Ozs7QUFJM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdHdvLWdyb3VwLXNpeC8uL3NyYy9qcy9jcmVhdGUtZ2FtZS5qcz8yYzg4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlbGl2ZXJUb2FzdCA9IHJlcXVpcmUoJy4vbWFrZS10b2FzdCcpO1xuXG5cblxuY29uc3QgY3JlYXRlR2FtZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkRm9ybScpO1xuaWYgKGNyZWF0ZUdhbWVGb3JtKSB7XG4gIGNyZWF0ZUdhbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoY3JlYXRlR2FtZUZvcm0pO1xuXG4gICAgZmV0Y2goJy9nYW1lcy9hcGkvY3JlYXRlLWdhbWUnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGZpbGU6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/create-game.js\n");

/***/ }),

/***/ "./src/js/create-post.js":
/*!*******************************!*\
  !*** ./src/js/create-post.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst newPostFormHandler = async (event) => {\n  event.preventDefault();\n\n  const title = document.querySelector('#new-post-title').value.trim();\n  const content = document.querySelector('#new-post-content').value.trim();\n  const timestamp = Date.now();\n\n  if (title && content) {\n    const response = await fetch('/posts/api/create-post', {\n      method: 'POST',\n      body: JSON.stringify({ title, timestamp, content }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.replace('/user/dashboard');\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet newPostButton = document.querySelector('.new-post-button') !== null;\nif (newPostButton) {\n  document\n    .querySelector('.new-post-button')\n    .addEventListener('click', newPostFormHandler);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLXBvc3QuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQkFBMkI7QUFDeEQsaUJBQWlCLG9DQUFvQztBQUNyRCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2NyZWF0ZS1wb3N0LmpzPzk0YjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVsaXZlclRvYXN0ID0gcmVxdWlyZSgnLi9tYWtlLXRvYXN0Jyk7XG5cbmNvbnN0IG5ld1Bvc3RGb3JtSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wb3N0LXRpdGxlJykudmFsdWUudHJpbSgpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wb3N0LWNvbnRlbnQnKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgaWYgKHRpdGxlICYmIGNvbnRlbnQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvcG9zdHMvYXBpL2NyZWF0ZS1wb3N0Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlLCB0aW1lc3RhbXAsIGNvbnRlbnQgfSksXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZSgnL3VzZXIvZGFzaGJvYXJkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGl2ZXJUb2FzdChkYXRhLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5sZXQgbmV3UG9zdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcG9zdC1idXR0b24nKSAhPT0gbnVsbDtcbmlmIChuZXdQb3N0QnV0dG9uKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5uZXctcG9zdC1idXR0b24nKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Bvc3RGb3JtSGFuZGxlcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/create-post.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./login.js */ \"./src/js/login.js\");\n__webpack_require__(/*! ./logout.js */ \"./src/js/logout.js\");\n__webpack_require__(/*! ./create-account.js */ \"./src/js/create-account.js\");\n__webpack_require__(/*! ./create-comment.js */ \"./src/js/create-comment.js\");\n__webpack_require__(/*! ./create-game.js */ \"./src/js/create-game.js\");\n__webpack_require__(/*! ./create-post.js */ \"./src/js/create-post.js\");\n__webpack_require__(/*! ./make-toast.js */ \"./src/js/make-toast.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNwQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3JCLG1CQUFPLENBQUMsdURBQXFCO0FBQzdCLG1CQUFPLENBQUMsdURBQXFCO0FBQzdCLG1CQUFPLENBQUMsaURBQWtCO0FBQzFCLG1CQUFPLENBQUMsaURBQWtCO0FBQzFCLG1CQUFPLENBQUMsK0NBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2luZGV4LmpzPzdiYTUiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9sb2dpbi5qcycpO1xucmVxdWlyZSgnLi9sb2dvdXQuanMnKTtcbnJlcXVpcmUoJy4vY3JlYXRlLWFjY291bnQuanMnKTtcbnJlcXVpcmUoJy4vY3JlYXRlLWNvbW1lbnQuanMnKTtcbnJlcXVpcmUoJy4vY3JlYXRlLWdhbWUuanMnKTtcbnJlcXVpcmUoJy4vY3JlYXRlLXBvc3QuanMnKTtcbnJlcXVpcmUoJy4vbWFrZS10b2FzdC5qcycpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst loginFormHandler = async (event) => {\n  event.preventDefault();\n\n  const username = document.querySelector('#username-login').value.trim();\n  const password = document.querySelector('#password-login').value.trim();\n\n  if (username && password) {\n    const response = await fetch('/user/api/login', {\n      method: 'POST',\n      body: JSON.stringify({ username, password }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    console.log(JSON.stringify(response));\n    if (response.ok) {\n      document.location.replace('/games');\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nconsole.log('login.js loaded');\n\nlet loginForm = document.querySelector('#login-form') !== null;\nif (loginForm) {\n  document\n    .querySelector('#login-form')\n    .addEventListener('submit', loginFormHandler);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0JBQW9CO0FBQ2pELGlCQUFpQixvQ0FBb0M7QUFDckQsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2xvZ2luLmpzP2RkNDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVsaXZlclRvYXN0ID0gcmVxdWlyZSgnLi9tYWtlLXRvYXN0Jyk7XG5cbmNvbnN0IGxvZ2luRm9ybUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZS1sb2dpbicpLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtbG9naW4nKS52YWx1ZS50cmltKCk7XG5cbiAgaWYgKHVzZXJuYW1lICYmIHBhc3N3b3JkKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3VzZXIvYXBpL2xvZ2luJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlcGxhY2UoJy9nYW1lcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxpdmVyVG9hc3QoZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc29sZS5sb2coJ2xvZ2luLmpzIGxvYWRlZCcpO1xuXG5sZXQgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0nKSAhPT0gbnVsbDtcbmlmIChsb2dpbkZvcm0pIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0nKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBsb2dpbkZvcm1IYW5kbGVyKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/login.js\n");

/***/ }),

/***/ "./src/js/logout.js":
/*!**************************!*\
  !*** ./src/js/logout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst logoutHandler = async () => {\n  const response = await fetch('/user/api/logout', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n  });\n\n  if (response.ok) {\n    document.location.replace('/');\n  } else {\n    response.json().then((data) => {\n      deliverToast(data.message);\n    });\n  }\n};\n\nlet logoutButton = document.querySelector('#logout') !== null;\nif (logoutButton) {\n  document\n    .querySelector('#logout')\n    .addEventListener('click', logoutHandler);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQixtQkFBTyxDQUFDLDRDQUFjOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdHdvLWdyb3VwLXNpeC8uL3NyYy9qcy9sb2dvdXQuanM/NTI1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWxpdmVyVG9hc3QgPSByZXF1aXJlKCcuL21ha2UtdG9hc3QnKTtcblxuY29uc3QgbG9nb3V0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3VzZXIvYXBpL2xvZ291dCcsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG5cbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZSgnLycpO1xuICB9IGVsc2Uge1xuICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkZWxpdmVyVG9hc3QoZGF0YS5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufTtcblxubGV0IGxvZ291dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvdXQnKSAhPT0gbnVsbDtcbmlmIChsb2dvdXRCdXR0b24pIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignI2xvZ291dCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nb3V0SGFuZGxlcik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/logout.js\n");

/***/ }),

/***/ "./src/js/make-toast.js":
/*!******************************!*\
  !*** ./src/js/make-toast.js ***!
  \******************************/
/***/ ((module) => {

eval("function deliverToast(message) {\n  const toastLiveExample = document.getElementById('error-toast');\n  const toastBody = document.getElementById('toast-body');\n  toastBody.innerText = message;\n  const toast = new bootstrap.Toast(toastLiveExample);\n\n  toast.show();\n}\n\nmodule.exports = deliverToast;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFrZS10b2FzdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXR3by1ncm91cC1zaXgvLi9zcmMvanMvbWFrZS10b2FzdC5qcz80M2JkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRlbGl2ZXJUb2FzdChtZXNzYWdlKSB7XG4gIGNvbnN0IHRvYXN0TGl2ZUV4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItdG9hc3QnKTtcbiAgY29uc3QgdG9hc3RCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0LWJvZHknKTtcbiAgdG9hc3RCb2R5LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIGNvbnN0IHRvYXN0ID0gbmV3IGJvb3RzdHJhcC5Ub2FzdCh0b2FzdExpdmVFeGFtcGxlKTtcblxuICB0b2FzdC5zaG93KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsaXZlclRvYXN0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/make-toast.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;