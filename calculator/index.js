console.log("Enjoy your calculator");
let str = "";
let a = document.querySelectorAll(".myButton");

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      str = eval(str);
      document.querySelector("input").value = str;
    } else if (e.target.innerText == "C") {
      str = "";
      document.querySelector("input").value = str;
    } else if (e.target.innerText == "bksp") {
      let str2 = slice(0, str.innerText.length - 1);
      document.querySelector("input").value = str2;
    } else {
      let val = e.target.innerText;
      console.log(val);
      str = str + val;
      document.querySelector("input").value = str;
    }
  });
}
