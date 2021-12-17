var donor = setInterval(donorCounting , 10)
var group = setInterval(groupCounting , 10)
var group2 = setInterval(group2Counting , 10)
var awards = setInterval(awardsCounting , 10)
let count1 = 3;
let count2 = 1;
let count3 = 1;
let count4 = 1;

// let counting = () =>{
//     count1++;
//     document.querySelector("#num1").innerHTML= count1;
// }
function donorCounting(){
    count1++;
    document.querySelector(".num1").innerHTML= count1;
    if(count1 == 1890){
        clearInterval(donor)
    }
}
function groupCounting(){
    count2++;
    document.querySelector(".num2").innerHTML= count2;
    if(count2 == 18){
        clearInterval(group)
    }
}
function group2Counting(){
    count3++;
    document.querySelector(".num3").innerHTML= count3;
    if(count3 == 182){
        clearInterval(group2)
    }
}
function awardsCounting(){
    count4++;
    document.querySelector(".num4").innerHTML= count4;
    if(count4 == 50){
        clearInterval(awards)
    }
}


// slider
let images = ["./images/bg4.jpg", "./images/bg1.jpg"]
    let count = 0
    let imgTag = document.querySelector(".sliderImage")
    let next = document.querySelector(".btnn1")
    let prev = document.querySelector(".btnn2")
    next.addEventListener("click", function () {
        console.log("hiiii");
      count++
      if (count >= images.length) {
        count = 0
        imgTag.src = images[count]
      } else {
        imgTag.src = images[count]
      }
    })
    prev.addEventListener("click", function () {
      count--
      if (count < 0) {
        count = images.length - 1
        imgTag.src = images[count]
      } else {
        imgTag.src = images[count]
      }
    })






















