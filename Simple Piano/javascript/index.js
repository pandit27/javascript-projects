let nob = document.querySelectorAll("button").length; // nob === number of buttons

for (let i = 0; i < nob; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function () {


    switch(this.innerText) {
          case "sa":
            let audio1 = new Audio("sa.mp3");
            audio1.play();
            break;
          case "re":
            let audio2 = new Audio("re.mp3");
            audio2.play();
            break;
          case "ga":
            let audio3 = new Audio("ga.mp3");
            audio3.play();
            break;
          case "ma":
            let audio4 = new Audio("ma.mp3");
            audio4.play();
            break;
          default:
            console.log(this.innerHTML)
        } 
  });
}
  
    document.addEventListener("keypress", (event) => {

        let k = event.key

        switch(k) {
              case "1":
                let audio1 = new Audio("sa.mp3");
                audio1.play();
                break;
              case "2":
                let audio2 = new Audio("re.mp3");
                audio2.play();
                break;
              case "3":
                let audio3 = new Audio("ga.mp3");
                audio3.play();
                break;
              case "4":
                let audio4 = new Audio("ma.mp3");
                audio4.play();
                break;
              default:
                console.log(event.key)
            } 
    });
