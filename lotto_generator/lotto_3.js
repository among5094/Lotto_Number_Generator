
window.addEventListener("load", function()
{
    var generateBtn = document.querySelector(".generate-btn");
    generateBtn.addEventListener("click", function(){
      generateLottoBalls(7);
    });
  });
  
  function generateLottoBalls(size){

    var template = document.querySelector("#lotto-ball-template");
    var lottoBallDiv = template.content.children[0];
    var lottoWrapperDiv = document.querySelector(".lotto-wrapper");
    lottoWrapperDiv.innerHTML = "";
    var lottoNumbers = generateLottoNumbers(7);
  
    for(var i=0; i < lottoNumbers.length; i++){
      var cloneDiv = document.importNode(lottoBallDiv, true);
      cloneDiv.querySelector(".number").textContent = lottoNumbers[i];
      lottoWrapperDiv.appendChild(cloneDiv);
      moveBall(cloneDiv, i*500); 
    }
  }
  
  function moveBall(target, delay){
    setTimeout(function(){
      target.classList.add("active");
    }, delay);
  }
  
  function generateLottoNumbers(size){
    var numbers = [];
    for(var i=1; i <= 45; i++) {
      numbers.push(i);
    }
  
    //shuffle
    for(var i=0; i < numbers.length; i++){
      var j = Math.floor(Math.random() * numbers.length);
  
      //swap
      var tmp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = tmp;
    }
  
    //slice
    return numbers.slice(0, size);
  }