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

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nasync function signupFormHandler(event) {\n  event.preventDefault();\n\n  //get the values from the form\n  const username = document.querySelector('#username-signup').value.trim();\n  const password = document.querySelector('#password-signup').value.trim();\n  const passwordConfirm = document.querySelector('#password-signup-confirm').value.trim();\n\n  //check if the passwords match\n  if (password != passwordConfirm) {\n    deliverToast('Passwords do not match!');\n    return;\n  }\n\n  //send the data to the server\n  const response = await fetch('/user/api/create-account', {\n    method: 'POST',\n    body: JSON.stringify({ username, password }),\n    headers: { 'Content-Type': 'application/json' },\n  });\n\n  //check the response status\n  //redirect if successful; url comes from express route\n  if (response.ok) {\n    return response.json().then((data) => {\n      document.location.replace(data.url);\n    });\n  } else {\n    response.json().then((data) => {\n      deliverToast(data);\n    });\n  }\n}\n\n//check if the signup form exists\n//add event listener to the form submit if it does\nlet signupForm = document.querySelector('#createAccountForm') !== null;\nif (signupForm) {\n  document.querySelector('#createAccountForm').addEventListener('submit', signupFormHandler);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLWFjY291bnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DLGVBQWUsb0NBQW9DO0FBQ25ELEdBQUc7O0FBRUg7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2NyZWF0ZS1hY2NvdW50LmpzP2I0MTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVsaXZlclRvYXN0ID0gcmVxdWlyZSgnLi9tYWtlLXRvYXN0Jyk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNpZ251cEZvcm1IYW5kbGVyKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy9nZXQgdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtXG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lLXNpZ251cCcpLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtc2lnbnVwJykudmFsdWUudHJpbSgpO1xuICBjb25zdCBwYXNzd29yZENvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtc2lnbnVwLWNvbmZpcm0nKS52YWx1ZS50cmltKCk7XG5cbiAgLy9jaGVjayBpZiB0aGUgcGFzc3dvcmRzIG1hdGNoXG4gIGlmIChwYXNzd29yZCAhPSBwYXNzd29yZENvbmZpcm0pIHtcbiAgICBkZWxpdmVyVG9hc3QoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2ghJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy9zZW5kIHRoZSBkYXRhIHRvIHRoZSBzZXJ2ZXJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3VzZXIvYXBpL2NyZWF0ZS1hY2NvdW50Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcblxuICAvL2NoZWNrIHRoZSByZXNwb25zZSBzdGF0dXNcbiAgLy9yZWRpcmVjdCBpZiBzdWNjZXNzZnVsOyB1cmwgY29tZXMgZnJvbSBleHByZXNzIHJvdXRlXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZShkYXRhLnVybCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRlbGl2ZXJUb2FzdChkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vL2NoZWNrIGlmIHRoZSBzaWdudXAgZm9ybSBleGlzdHNcbi8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBmb3JtIHN1Ym1pdCBpZiBpdCBkb2VzXG5sZXQgc2lnbnVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVBY2NvdW50Rm9ybScpICE9PSBudWxsO1xuaWYgKHNpZ251cEZvcm0pIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZUFjY291bnRGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2lnbnVwRm9ybUhhbmRsZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/create-account.js\n");

/***/ }),

/***/ "./src/js/create-comment.js":
/*!**********************************!*\
  !*** ./src/js/create-comment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\n// gather form data and send it to the server as json\nconst commentFormHandler = async (event) => {\n  event.preventDefault();\n\n  // get the comment data and the post id\n  const commentData = document.querySelector('#comment-content').value.trim();\n  const postId = document.querySelector('#post-title').dataset.postNumber;\n\n  // if the comment data is not empty, send it to the server\n  // TODO: instead of checking for empty this should be handled on the page by adding \"required\" to the form elements\n  if (commentData) {\n    const response = await fetch('/posts/api/create-comment', {\n      method: 'POST',\n      body: JSON.stringify({ commentData, postId }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    // if the response is ok, reload the page\n    if (response.ok) {\n      document.location.reload();\n    } else {\n      // otherwise, deliver a toast with the error message\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\n// check if the button exists before adding the event listener\n// TODO: this should instead listen for the form to be submitted. see create-post.js\nlet signupButton = document.querySelector('#post-comment-button') !== null;\nif (signupButton) {\n  document.querySelector('#post-comment-button').addEventListener('click', commentFormHandler) !==\n    null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLWNvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxQkFBcUI7QUFDbEQsaUJBQWlCLG9DQUFvQztBQUNyRCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2NyZWF0ZS1jb21tZW50LmpzPzdiZWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVsaXZlclRvYXN0ID0gcmVxdWlyZSgnLi9tYWtlLXRvYXN0Jyk7XG5cbi8vIGdhdGhlciBmb3JtIGRhdGEgYW5kIHNlbmQgaXQgdG8gdGhlIHNlcnZlciBhcyBqc29uXG5jb25zdCBjb21tZW50Rm9ybUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBnZXQgdGhlIGNvbW1lbnQgZGF0YSBhbmQgdGhlIHBvc3QgaWRcbiAgY29uc3QgY29tbWVudERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC1jb250ZW50JykudmFsdWUudHJpbSgpO1xuICBjb25zdCBwb3N0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9zdC10aXRsZScpLmRhdGFzZXQucG9zdE51bWJlcjtcblxuICAvLyBpZiB0aGUgY29tbWVudCBkYXRhIGlzIG5vdCBlbXB0eSwgc2VuZCBpdCB0byB0aGUgc2VydmVyXG4gIC8vIFRPRE86IGluc3RlYWQgb2YgY2hlY2tpbmcgZm9yIGVtcHR5IHRoaXMgc2hvdWxkIGJlIGhhbmRsZWQgb24gdGhlIHBhZ2UgYnkgYWRkaW5nIFwicmVxdWlyZWRcIiB0byB0aGUgZm9ybSBlbGVtZW50c1xuICBpZiAoY29tbWVudERhdGEpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvcG9zdHMvYXBpL2NyZWF0ZS1jb21tZW50Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnREYXRhLCBwb3N0SWQgfSksXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KTtcblxuICAgIC8vIGlmIHRoZSByZXNwb25zZSBpcyBvaywgcmVsb2FkIHRoZSBwYWdlXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlLCBkZWxpdmVyIGEgdG9hc3Qgd2l0aCB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsaXZlclRvYXN0KGRhdGEubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIGNoZWNrIGlmIHRoZSBidXR0b24gZXhpc3RzIGJlZm9yZSBhZGRpbmcgdGhlIGV2ZW50IGxpc3RlbmVyXG4vLyBUT0RPOiB0aGlzIHNob3VsZCBpbnN0ZWFkIGxpc3RlbiBmb3IgdGhlIGZvcm0gdG8gYmUgc3VibWl0dGVkLiBzZWUgY3JlYXRlLXBvc3QuanNcbmxldCBzaWdudXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9zdC1jb21tZW50LWJ1dHRvbicpICE9PSBudWxsO1xuaWYgKHNpZ251cEJ1dHRvbikge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9zdC1jb21tZW50LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tbWVudEZvcm1IYW5kbGVyKSAhPT1cbiAgICBudWxsO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/create-comment.js\n");

/***/ }),

/***/ "./src/js/create-game.js":
/*!*******************************!*\
  !*** ./src/js/create-game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\n// gather form data and send it to the server as json\nconst createGameForm = document.getElementById('uploadForm');\nif (createGameForm) {\n  createGameForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    // create a new FormData object and add the form data to it\n    const formData = new FormData(createGameForm);\n\n    // send the form data to the server\n    fetch('/games/api/create-game', {\n      method: 'POST',\n      body: formData,\n    })\n      .then((response) => {\n        // TODO: redirect the user to the game details page for the game they just created\n        console.log('File uploaded successfully!');\n      })\n      .catch((error) => {\n        console.error('Error uploading file:', error);\n      });\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLWdhbWUuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdHdvLWdyb3VwLXNpeC8uL3NyYy9qcy9jcmVhdGUtZ2FtZS5qcz8yYzg4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlbGl2ZXJUb2FzdCA9IHJlcXVpcmUoJy4vbWFrZS10b2FzdCcpO1xuXG4vLyBnYXRoZXIgZm9ybSBkYXRhIGFuZCBzZW5kIGl0IHRvIHRoZSBzZXJ2ZXIgYXMganNvblxuY29uc3QgY3JlYXRlR2FtZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkRm9ybScpO1xuaWYgKGNyZWF0ZUdhbWVGb3JtKSB7XG4gIGNyZWF0ZUdhbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY3JlYXRlIGEgbmV3IEZvcm1EYXRhIG9iamVjdCBhbmQgYWRkIHRoZSBmb3JtIGRhdGEgdG8gaXRcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShjcmVhdGVHYW1lRm9ybSk7XG5cbiAgICAvLyBzZW5kIHRoZSBmb3JtIGRhdGEgdG8gdGhlIHNlcnZlclxuICAgIGZldGNoKCcvZ2FtZXMvYXBpL2NyZWF0ZS1nYW1lJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBnYW1lIGRldGFpbHMgcGFnZSBmb3IgdGhlIGdhbWUgdGhleSBqdXN0IGNyZWF0ZWRcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGZpbGU6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/create-game.js\n");

/***/ }),

/***/ "./src/js/create-post.js":
/*!*******************************!*\
  !*** ./src/js/create-post.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\n// gather form data and send it to the server as json\nconst createPostForm = document.getElementById('postForm');\nif (createPostForm) {\n  createPostForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n    // get the post data\n    const postTitle = document.getElementById('newPostTitle').value;\n    const postContent = document.getElementById('newPostContent').value;\n    const postGame = document.getElementById('newPostGame').dataset.game;\n\n    // send the post data to the server\n    fetch('/posts/api/create-post', {\n      method: 'POST',\n      body: JSON.stringify({\n        postContent: postContent,\n        postTitle: postTitle,\n        postGame: postGame,\n      }),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    })\n      .then((response) => {\n        // TODO: redirect the user to the post details page for the post they just created and remove console.log\n        console.log('Post created successfully!');\n      })\n      .catch((error) => {\n        console.error('Error:', error);\n      });\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLXBvc3QuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2NyZWF0ZS1wb3N0LmpzPzk0YjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVsaXZlclRvYXN0ID0gcmVxdWlyZSgnLi9tYWtlLXRvYXN0Jyk7XG5cbi8vIGdhdGhlciBmb3JtIGRhdGEgYW5kIHNlbmQgaXQgdG8gdGhlIHNlcnZlciBhcyBqc29uXG5jb25zdCBjcmVhdGVQb3N0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0Rm9ybScpO1xuaWYgKGNyZWF0ZVBvc3RGb3JtKSB7XG4gIGNyZWF0ZVBvc3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBnZXQgdGhlIHBvc3QgZGF0YVxuICAgIGNvbnN0IHBvc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQb3N0VGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBwb3N0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQb3N0Q29udGVudCcpLnZhbHVlO1xuICAgIGNvbnN0IHBvc3RHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Bvc3RHYW1lJykuZGF0YXNldC5nYW1lO1xuXG4gICAgLy8gc2VuZCB0aGUgcG9zdCBkYXRhIHRvIHRoZSBzZXJ2ZXJcbiAgICBmZXRjaCgnL3Bvc3RzL2FwaS9jcmVhdGUtcG9zdCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBwb3N0Q29udGVudDogcG9zdENvbnRlbnQsXG4gICAgICAgIHBvc3RUaXRsZTogcG9zdFRpdGxlLFxuICAgICAgICBwb3N0R2FtZTogcG9zdEdhbWUsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBUT0RPOiByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgcG9zdCBkZXRhaWxzIHBhZ2UgZm9yIHRoZSBwb3N0IHRoZXkganVzdCBjcmVhdGVkIGFuZCByZW1vdmUgY29uc29sZS5sb2dcbiAgICAgICAgY29uc29sZS5sb2coJ1Bvc3QgY3JlYXRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/create-post.js\n");

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

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst loginFormHandler = async (event) => {\n  event.preventDefault();\n\n  //get the values from the form\n  const username = document.querySelector('#username-login').value.trim();\n  const password = document.querySelector('#password-login').value.trim();\n\n  //send the data to the server\n  const response = await fetch('/user/api/login', {\n    method: 'POST',\n    body: JSON.stringify({ username, password }),\n    headers: { 'Content-Type': 'application/json' },\n  });\n\n  //check the response status\n  //redirect if successful; url comes from express route\n  if (response.ok) {\n    return response.json().then((data) => {\n      document.location.replace(data.url);\n    });\n  } else {\n    response.json().then((data) => {\n      deliverToast(data);\n    });\n  }\n};\n\n// Check if the login form exists and add the event listener\nlet loginForm = document.querySelector('#login-form') !== null;\nif (loginForm) {\n  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0MsZUFBZSxvQ0FBb0M7QUFDbkQsR0FBRzs7QUFFSDtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2xvZ2luLmpzP2RkNDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVsaXZlclRvYXN0ID0gcmVxdWlyZSgnLi9tYWtlLXRvYXN0Jyk7XG5cbmNvbnN0IGxvZ2luRm9ybUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvL2dldCB0aGUgdmFsdWVzIGZyb20gdGhlIGZvcm1cbiAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUtbG9naW4nKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkLWxvZ2luJykudmFsdWUudHJpbSgpO1xuXG4gIC8vc2VuZCB0aGUgZGF0YSB0byB0aGUgc2VydmVyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy91c2VyL2FwaS9sb2dpbicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG5cbiAgLy9jaGVjayB0aGUgcmVzcG9uc2Ugc3RhdHVzXG4gIC8vcmVkaXJlY3QgaWYgc3VjY2Vzc2Z1bDsgdXJsIGNvbWVzIGZyb20gZXhwcmVzcyByb3V0ZVxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlcGxhY2UoZGF0YS51cmwpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkZWxpdmVyVG9hc3QoZGF0YSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIENoZWNrIGlmIHRoZSBsb2dpbiBmb3JtIGV4aXN0cyBhbmQgYWRkIHRoZSBldmVudCBsaXN0ZW5lclxubGV0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbi1mb3JtJykgIT09IG51bGw7XG5pZiAobG9naW5Gb3JtKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbi1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbG9naW5Gb3JtSGFuZGxlcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/login.js\n");

/***/ }),

/***/ "./src/js/logout.js":
/*!**************************!*\
  !*** ./src/js/logout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst logoutHandler = async () => {\n  // send a logout request to the server\n  const response = await fetch('/user/api/logout', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n  });\n\n  // if the response is ok, redirect the user to the home page\n  if (response.ok) {\n    document.location.replace('/');\n  } else {\n    response.json().then((data) => {\n      deliverToast(data.message);\n    });\n  }\n};\n\n// check if the button exists before adding the event listener\nlet logoutButton = document.querySelector('#logout') !== null;\nif (logoutButton) {\n  document.querySelector('#logout').addEventListener('click', logoutHandler);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQixtQkFBTyxDQUFDLDRDQUFjOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25ELEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10d28tZ3JvdXAtc2l4Ly4vc3JjL2pzL2xvZ291dC5qcz81MjUyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlbGl2ZXJUb2FzdCA9IHJlcXVpcmUoJy4vbWFrZS10b2FzdCcpO1xuXG5jb25zdCBsb2dvdXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAvLyBzZW5kIGEgbG9nb3V0IHJlcXVlc3QgdG8gdGhlIHNlcnZlclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvdXNlci9hcGkvbG9nb3V0Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcblxuICAvLyBpZiB0aGUgcmVzcG9uc2UgaXMgb2ssIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBob21lIHBhZ2VcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZSgnLycpO1xuICB9IGVsc2Uge1xuICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkZWxpdmVyVG9hc3QoZGF0YS5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gY2hlY2sgaWYgdGhlIGJ1dHRvbiBleGlzdHMgYmVmb3JlIGFkZGluZyB0aGUgZXZlbnQgbGlzdGVuZXJcbmxldCBsb2dvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nb3V0JykgIT09IG51bGw7XG5pZiAobG9nb3V0QnV0dG9uKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dEhhbmRsZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/logout.js\n");

/***/ }),

/***/ "./src/js/make-toast.js":
/*!******************************!*\
  !*** ./src/js/make-toast.js ***!
  \******************************/
/***/ ((module) => {

eval("// this is a function that creates a toast message using the message passed to it\nfunction deliverToast(message) {\n  const headerToast = document.getElementById('error-toast');\n  const toastBody = document.getElementById('toast-body');\n  toastBody.innerText = message;\n  const toast = new bootstrap.Toast(headerToast);\n\n  toast.show();\n}\n\nmodule.exports = deliverToast;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFrZS10b2FzdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdHdvLWdyb3VwLXNpeC8uL3NyYy9qcy9tYWtlLXRvYXN0LmpzPzQzYmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRvYXN0IG1lc3NhZ2UgdXNpbmcgdGhlIG1lc3NhZ2UgcGFzc2VkIHRvIGl0XG5mdW5jdGlvbiBkZWxpdmVyVG9hc3QobWVzc2FnZSkge1xuICBjb25zdCBoZWFkZXJUb2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci10b2FzdCcpO1xuICBjb25zdCB0b2FzdEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QtYm9keScpO1xuICB0b2FzdEJvZHkuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgY29uc3QgdG9hc3QgPSBuZXcgYm9vdHN0cmFwLlRvYXN0KGhlYWRlclRvYXN0KTtcblxuICB0b2FzdC5zaG93KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsaXZlclRvYXN0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/make-toast.js\n");

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