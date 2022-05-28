const arrangDiv = document.getElementById("arrang");
const chooseArrOtomticBtn = document.getElementById("chooseArrOtomtic");
const OtomticInput = document.getElementById("Otomtic");
const chooseArrBtn = document.getElementById("chooseArr");
const choosInput = document.getElementById("choos");

function theArray(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }
  function random(num) {
    let arr = [];
    for(let i = 0; i<num; i++){
    arr.push(Math.floor(Math.random() * 101))
    }
    console.log('Before'+': ' + arr)

    arr = theArray(arr);
    show(arr);
    console.log('After'+': ' + arr)
}
  function show(arr){
    for(let i = 0; i<arr.length; i++){
      arrangDiv.innerHTML +=   `<span>${arr[i]},</span>`
    }

  }

  let x;
  chooseArrOtomticBtn.addEventListener('click',() => {
    random(x);
  })
  OtomticInput.addEventListener('keyup',()=>{
    x = OtomticInput.value
  })
  
  let y;
  chooseArrBtn.addEventListener('click',() => {
    show(y);
  })
  choosInput.addEventListener('keyup',()=>{
   y = choosInput.value

  })
  

  let smallNums = nums.filter(num => num <30);
  let mediumNums = nums.filter(num => num > 31 & num < 60);
  let bigNums = nums.filter(num => num > 61 & num < 100);
  