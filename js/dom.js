// let dem = document.getElementById("demo");
// console.log(dem);

// let links = document.getElementsByClassName("links");
// console.log("links");
// // console.log(Array.isArray(link));
// // link[0].style.background = "red";
// // link[1].style.background = "pink";
// // link[2].style.background = "blue";
// for (let i = 0; i <= links.length; i++) {
//   links[i].style.background = "crimson";
// }

// let links = document.getElementsByTagName("a");
// console.log(links);
// for (let i = 0; i <= links.length; i++) {
//   links[i].style.color = "red";
// }

// let demo = document.getElementById("demo");
// demo.setAttribute("class", "btnbtn-danger");
// demo.setAttribute("title", "iam title");
// demo.setAttribute("name", "iam name");

// //adding classname
// let links = document.getElementsByTagName("a");
// for (let i = 0; i <= links.length; i++) {
//   links[i].className = "link" + i;
// }

// let links = document.getElementsByTagName("a");
// Array.from(links).forEach(function (link, i) {
//   console.log(link);
//   link.className = "arrayfrom_" + i;
// });

// function jsp() {
//   return arguments;
// }
// let str = "hello jspiders";
// let users = jsp("development", "testing", "python");
// // [...users].foreach(function (user) {
// //     console.log(user);
// // })
// for (let user of users) {
//   console.log(user);
// }
// for (let s of str) {
//   console.log(s);
// }

// let linkOld = document.getElementsByTagName("a");
// console.log(linkOld, "tagName");

// let linkNew = document.querySelectorAll("a");
// console.log(linkNew, "Query Selector");

// let linksOdd = document.querySelectorAll("a:nth-child(odd)");
// let linksEven = document.querySelectorAll("a:nth-child(even)");

// console.log(Array.isArray(linksOdd));
// linksOdd.forEach(odd => odd.classList.add("btn", "btn-success"));
// linksEven.forEach(even => even.classList.add("btn", "btn-danger"));

// let templet = document.querySelector(".templet");
// console.log(templet);
// let demo = document.querySelector("#demo");
// console.log(demo);
// let p = document.querySelector("p");
// console.log(p);

// let linkOld = document.getElementsByTagName("li");
// console.log(linkOld, "tagName");

// let linkNew = document.querySelectorAll("li");
// console.log(linkNew, "Query Selector");

//create DOM Element
// let template = document.querySelector("#template");
// console.log(template);

// let p = document.createElement("p");
// p.textContent = "welcom to jspiders"; //or
// p.innerHTML = "welcom to qspiders";//or
// p.innerText = "welcom to pyspiders";//or
// console.log(p);
// template.appendChild(p);

///////////////////////////////////////////////
// let form = document.createElement("form");
// form.setAttribute("method", "GET");
// form.setAttribute("action", "#");
// //
// let labelUsername = document.createElement("label");
// labelUsername.textContent = "USER NAME ";
// labelUsername.setAttribute("for", "username");
// //
// let labelPassword = document.createElement("label");
// labelPassword.textContent = "PASSWORD";
// labelPassword.setAttribute("for", "password");
// //
// let username = document.createElement("input");
// username.setAttribute("type", "text");
// username.setAttribute("id", "username");
// username.setAttribute("name", "username");
// username.setAttribute("placeholder", "Enter UserName");
// username.className = "form-control";
// //
// let password = document.createElement("input");
// password.setAttribute("type", "text");
// password.setAttribute("id", "password");
// password.setAttribute("name", "password");
// password.setAttribute("placeholder", "Enter Password");
// password.className = "form-control";
// //
// let btn = document.createElement("button");
// btn.textContent = "login";
// btn.classList.add("btn", "btn-success", "my-2");
// //
// console.log(form);
// //
// form.append(labelUsername, username, labelPassword, password, btn);
// //
// document.body.classList.add("container", "my-2", "col-md-4", "mx-auto");
// document.body.appendChild(form);
///////////////////////////////////////////////

// let template = document.getElementById("template");
// console.log(template);
// template.onclick = function () {
//   alert("bullied 💥");
// };
// template.onmousemove = function () {
//   this.textContent = "starts bullying";
// };
// template.onmouseleave = function () {
//   this.textContent = "stop bullying";
// };

// //addEventListener
// let template = document.getElementById("template");
// template.addEventListener("click", event => {
//   console.log("iam add event listener");
//   console.log(event.target);
//   console.log(event.type);
//   console.log(this);
//   console.log(event.clientX);
//   console.log(event.clientY);
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("click", e => {
//   btn.classList.toggle("active");
//   let getActcls = btn.getAttribute("class", "active");
//   console.log(getActcls);
// });

// //
// let btn = document.getElementById("btn");
// btn.addEventListener("click", e => {
//   let change = e.target.classList.toggle("active");
//   console.log(change);
//   if (change === true) {
//     document.body.style.background = "crimson";
//     e.target.style.background = "white";
//     e.target.style.border = "none";
//     e.target.style.color = "black";
//   } else {
//     document.body.style.background = "white";
//     e.target.style.background = "crimson";
//     e.target.style.border = "crimson";
//     e.target.style.color = "white";
//   }
// });

// //
// let btn = document.getElementById("btn");
// btn.addEventListener("click", e => {
//   let changetext = e.target.classList.toggle("active");
//   console.log(changetext);
//   if (changetext === true) {
//     e.target.innerHTML = "susccessfull";
//     e.target.className = "btn btn-success active";
//   } else {
//     e.target.innerHTML = "login";
//     e.target.className = "btn btn-danger";
//   }
// });

// let username = document.getElementById("username");
// console.log(username);
// username.addEventListener("keyup", e => {
//   console.log(e.target.value);
// });

// let textarea = document.getElementById("textarea");
// let textareaclone = document.getElementById("textareaclone");
// textarea.addEventListener("keyup", e => {
//   let result = e.target.value;
//   textareaclone.innerHTML = result;
//   if (result.length > 10) {
//     let rev = [...result].reverse().join("");
//     textareaclone.innerHTML = rev;
//     textareaclone.style.color = "green";
//   } else if (result.length > 10 && result.length < 20) {
//     textareaclone.style.color = "yellow";
//   } else if (result.length > 20) {
//     textareaclone.style.color = "crimson";
//   }
// });

// let text1 = document.getElementById("textarea");
// let text2 = document.getElementById("textareaclone");
// text1.addEventListener("keyup", e => {
//     let res = e.target.value;

// })

// let username = document.getElementById("username");
// let password = document.getElementById("password");
// username.addEventListener("keyup", e => {
//   let res = e.target.value;
//   if (res.length < 3) {
//     username.style.borderColor = "red";
//   } else if (res.length > 3) {
//     username.style.borderColor = "green";
//   }
//   if (res.length < 6) {
//     password.style.borderColor = "red";
//   } else if (res.length > 6) {
//     password.style.borderColor = "green";
//   }
// });

// //login form
// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let form = document.getElementById("form");
// let errorBlock = document.getElementById("errorBlock");
// // console.log(form);
// // console.log(username);
// // console.log(password);

// form.addEventListener("submit", e => {
//   let errormessage = [];
//   e.preventDefault();
//   let name = username.value;
//   let pass = password.value;
//   if (name === "" || name === null) {
//     //alert("Username is Required");
//     errormessage.push("Username is Required");
//     username.style.borderColor = "red";
//   }
//   if (pass === "" || pass === null) {
//     //alert("Password is Required");
//     errormessage.push("Password is Required");
//     password.style.borderColor = "red";
//   }
//   if (pass.length < 6) {
//     errormessage.push("password charactor should be 6 or more");
//   }
//   //check for errors
//   if (errormessage.length > 0) {
//     errorBlock.innerHTML = errormessage.join("<br/>");
//   } else {
//     console.log(name);
//     console.log(pass);
//     username.value = "";
//     password.value = "";
//   }
//   // console.log(name);
//   // console.log(pass);
//   //client side validation
// });

// let lists = document.querySelectorAll("li");
// let form = document.getElementById("form");
// let input = document.getElementById("input");
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   let item = input.value;
//   console.log(item);
//   let li = document.getElementById("li");
//   li.classList.add("list-group-item");
//   li.append(item);
// });
// // console.log(lists);
// for (let list of lists) {
//   let btn = document.createElement("button");
//   btn.classList.add("btn", "btn-sm", "btn-danger", "float-right");
//   btn.textContent = "Remove";
//   list.append(btn);
//   // console.log(list);
//   btn.addEventListener("click", e => {
//     // console.log(e.target);
//     // console.log(e.target);
//     btn.parentElement.remove();
//   });
// }

//////
let child = document.getElementById("child");
let parent = document.getElementById("parent");
let grandparent = document.getElementById("grandparent");

child.addEventListener("click", e => {
  console.log("child clicked");
  e.stopPropagation();
});
parent.addEventListener("click", e => {
  console.log("parent clicked");
});
grandparent.addEventListener("click", e => {
  console.log("grandparent clicked");
});
