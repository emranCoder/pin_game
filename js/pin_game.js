//ripple button design num pad
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}
//button target
const buttons = document.getElementsByClassName("num-key");
for (const button of buttons) {

  button.addEventListener("click", createRipple);
  
}

//pin check 
var i=0;
function numTap(num)
{
  const rNum = document.querySelector(".pn_num").value;
  const nString = rNum.toString();
  const numSt = num.toString();
  const l = nString.length;
    if(rNum>1)
    {
      if(nString[i]==numSt)
    {
        document.querySelector(".test").innerHTML += numSt;
        document.querySelector(".test").classList.remove("d-none");
    }else
    {
      document.querySelector(".test").innerHTML += "<span style='color: red;'>"+numSt+"</span>";
      document.querySelector(".test").classList.remove("d-none");
      setTimeout(function () {
        document.querySelector(".bloost").classList.remove("d-none");
        document.querySelector(".bloost").src='image/bloost1.gif';
      },1000);
      setTimeout(windowReload,6000);
    }
    i++;
    if(i==l)
    {
      setTimeout(function(){
        document.querySelector(".accepted").classList.remove("d-none");
      document.querySelector(".accepted").src='image/Accepted1.gif';
    },1000);
      setTimeout(windowReload,4000);
    } 
  }   
}
function windowReload()
{
    location.reload(true);
}

