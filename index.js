
function getInput(e){
  event.preventDefault();

let rb1 = document.getElementById('male');
let rb2 = document.getElementById('female');
let show1El = document.getElementById('display');





  let dateEl = new Date (document.getElementById('date').value);
  let finalEl = dateEl.getDay();
  let maleEl = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
  let femaleEl =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

  if (rb1.checked==true){
   show1El.innerText = "Your name is" + " " +(maleEl[finalEl])

  }
  else if(rb2.checked==true){
   show1El.innerText = "Your name is" + " " +(femaleEl[finalEl])
  }


  console.log(finalEl)

};
