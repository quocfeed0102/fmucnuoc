var temp = document.getElementById("high").innerText;
var warnning1 = document.getElementById("warnning");
var warnning2 = document.getElementById("warnning2");
var warnningPro = document.getElementById("warnningPro");
var mp3 = document.getElementById("autoplay");
var a = 1; //muc nuoc set co dinh
var count = 0;
var connt1 = 0;
var payloadTime = '';
var payloadData = 0;
var tempData = 0;
var tempData1=0;
var payloadData1 = 0;
function myFunction() {
  var txt;
  if (confirm(`mực nước đang tăng nhanh: ${tempData}m, xin vui lòng chú ý thông báo này!!!`)) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
}

setInterval(() => {
  f();
}, 2000);

function f() {
  fetch("http://localhost:3000/api/v1/time/newest")
    .then((res) => res.json())
    .then((data) => (payloadTime = data[0].payload));
  fetch("http://localhost:3000/api/v1/data/newest")
    .then((res) => res.json())
    .then((data) => (payloadData = data[0].payload));
  fetch("http://localhost:3000/api/v1/data/15s")
    .then((res) => res.json())
    .then((data) => (payloadData1 = data[0].payload));

  tempData = 1.38 - payloadData;
  tempData1 = payloadData - payloadData1;
  console.log("15s: "+tempData1);
  console.log("muc nuoc do",tempData)
  document.getElementById("time").innerText = tempData;
  document.getElementById("mucnuoc").innerText = `${tempData.toFixed(2)}m`;
  document.getElementById("sosanh").innerText = `${Math.abs(tempData1 - tempData).toFixed(2)}m`;
  if (tempData > a) {
    count++;
    warnning1.style.display = "block";
    if (count === 1) {
      myFunction();
    }
    mp3.play();
  } else {
    warnning1.style.display = "none";
    mp3.pause();
    count = 0;
  }

  if(payloadData <= 0.3){
    warnningPro.style.display = "block";
  }
  else{
    warnningPro.style.display = "none";
  }
  if(Math.abs(tempData1 - tempData).toFixed(2) > 0.3){
    warnning2.style.display = "block";
  }
  else{
    warnning2.style.display = "block";
  }
}
