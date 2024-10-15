var interval;
var timer = 0;
let flage = false;

let textvalue = document.getElementsByClassName("text-area")[0];
textvalue.addEventListener("input", (e) => {
  ind = e.target.value.split(" ");
  console.log(ind.length);
  if (ind.length === 1 && !flage) {
    flage = true;
    interval = setInterval(() => {
      let show_time = document.getElementById("time");
      let minut = 0;
      show_time.innerText = `${minut}:${timer}`;
      timer++;
    }, 1000);
  }
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  window.location.reload();
});

let mistake = 0;
let modebtn = document.getElementsByClassName("mode")[0];
modebtn.addEventListener("click", function () {
  let fristdiv = document.querySelector("div");
  fristdiv.classList.toggle("dark");
  document.getElementsByClassName("text-area")[0];
});

let view = document.getElementsByClassName("view-text")[0];
let fetchdata;
let ind;

fetch("https://baconipsum.com/api/?type=all-meat&paras=1&format=text")
  .then((response) => response.text())
  .then((data) => {
    view.textContent = data;

    datacheck = data.split(" ");
    console.log("Datacheck -", datacheck);

    let text_value = document.getElementsByClassName("text-area")[0];
    text_value.addEventListener("input", (e) => {
      ind = e.target.value.split(" ");
      console.log(ind.length);
    });

    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => {
      clearInterval(interval);
      console.log("Complete Timer -", timer);
      mistake = 0;
      for (let i = 0; i < ind.length; i++) {
        if (ind[i] !== datacheck[i]) {
          mistake++;
        }
      }

      let percent = Math.floor(100 - (mistake / ind.length) * 100);
      document.body.innerHTML = `
                    <div class="result-container">
                        <div class="result-cart">
                            <h1>Result</h1>
                            <p>WPM - ${(Math.floor(ind.length/60) * 60) +(ind.length%60)}</p>
                            <p>Mistake - ${mistake}</p>
                            <p>Accuracy - ${percent}%</p>
                        </div>
                    </div>`;
    });
  });
