'use strict';
{
const tabs = document.querySelectorAll(".tabs li a");
const contents = document.querySelectorAll(".contents section ul");
  
console.log(tabs);

for (let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener("click", function(e) {
    e.preventDefault();

    for (let j = 0; j < tabs.length; j++){
      tabs[j].classList.remove("active");
    }
    for (let j = 0; j < contents.length; j++){
      contents[j].classList.remove("active");
    }


    this.classList.add("active");
    contents[i].classList.add("active");
  });
}

  const targetElement = document.querySelectorAll(".animationTarget");
  console.log(window.innerHeight);
  document.addEventListener("scroll", function() {

    for (let i = 0; i < targetElement.length; i++){
      const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[1].clientHeight * .4
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add('show');
      }
    }
  });



  function loaded() {
    document.getElementById('loading').classList.remove('active');

  }

  // ロードが終わったら＋1秒後に実行

  window.addEventListener("load", function () {
    setTimeout(loaded, 1000);
  });

  // 読み込めなくても実行

  setTimeout(loaded, 5000);


}