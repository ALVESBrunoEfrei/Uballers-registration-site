function removeElementsByID(ID){
    const elements = document.getElementById(ID)
    
    elements.parentNode.removeChild(elements);
    
} 




function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function select(clicked_id){

 clicked_case = document.getElementById(clicked_id)
 clicked_case.classList.add('img_cap_select');
 if(clicked_case.classList.contains('basket')){
    
 
 clicked_case.classList.add('ok')
}}

function captcha_sp(){

var exist = document.getElementById('div_princ');
if (JSON.stringify(exist) != "null") {
                removeElementsByID('div_princ');
            } 

var div_princ = document.createElement('div');
document.getElementById('body').appendChild(div_princ);
div_princ.setAttribute('id','div_princ');

var div_title = document.createElement('div');
div_princ.appendChild(div_title);
div_title.setAttribute('id','div_title');
var par = document.createElement('p');
div_title.appendChild(par);
par.setAttribute('id','par');
var par_writ = document.createTextNode('Select all images corresponding to a basketball')
par.appendChild(par_writ);


var table = document.createElement('table');
div_princ.appendChild(table);
table.setAttribute('id','table');

var div_verify = document.createElement('div');
div_princ.appendChild(div_verify);
div_verify.setAttribute('id','div_verify');
var btn_verify = document.createElement('button');
div_verify.appendChild(btn_verify);
btn_verify.setAttribute('id','btn_verify');
let funct = 'captcha_verify()';
btn_verify.setAttribute('onClick',funct);
par_writ2 = document.createTextNode('Verify')
btn_verify.appendChild(par_writ2);

let x
let casee = 1
var i = 1
var j = 1
var row_number = 0

while(i<4) {
  j = 0;
  row_number = row_number + 1;
  char_row_number = row_number.toString()
  var row = document.createElement('tr');
  row.setAttribute('id',char_row_number)
  table.appendChild(row);
  row.classList.add("captcha_squares")
  while(j<3) {
    random_n = randomNumber(1, 4)
    
    var img = new Image();
    if(random_n==3){
      
      x = 'basket'
      img.src = '../assets/basketball.png'
      
    }
    else{
      x = 'foot'
      img.src = '../assets/football.png'
     
    }

      let id = 'case ' + casee.toString();
      img.setAttribute('id',id);
      casee = casee +1
      let clas = 'img_cap ' + x;
      img.setAttribute('class',clas);
      let funct = 'select(this.id)';
      img.setAttribute('onClick',funct);
    document.getElementById(char_row_number).appendChild(img);
   
   j = j+1;
  }
  
i = i+1;
}



 

}




function view_password()
{ 


 var input = document.getElementById("input_password"); 
 if (input.type === "password")
 { 
 input.type = "text"; 
 } 
 else
 { 
 input.type = "password"; 
 } 
} 

function captcha_verify(){

  bask = document.getElementsByClassName('basket');

  let compt_b = 0
  let compt_ok = 0
  for(let i = 0; i < bask.length; i++) {
      
      if(bask[i].classList.contains('ok')){
      compt_ok = compt_ok + 1
      }
    compt_b = compt_b + 1
  }

  
  if(compt_b==compt_ok ){
  alert("captcha réussit")
  removeElementsByID('div_princ');
  removeElementsByID('btn_captcha');
  var btn_regis = document.getElementById("registration");
  btn_regis.classList.remove('display_none');
  var marg = document.getElementById("margin_bot");
  marg.classList.add("margin-top-100p");  }
  else{captcha_sp()
  
  
  }
}