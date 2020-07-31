var counter = 0;

function countup(){
  counter++
  setCounter()
}
  
function countdown(){
  counter--
  setCounter()
}
  
function setCounter(){
  document.getElementById("counter").innerText = counter
  lifeWasted()
}
  
function lifeWasted(){
  if(counter >= 100){
    document.getElementById("lifewasted").innerText = "congratulations on wasting your life pressing buttons"
  }
}
