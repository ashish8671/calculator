let dislay = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {

  btn.addEventListener('click',(e) => {

      if (e.target.innerHTML == 'DEL') {
        string = string.substring(0 , string.length-1 );
        dislay.value = string;
      }else if (e.target.innerHTML == 'AC'){
        string = '';
        dislay.value = string;
      }else if (e.target.innerHTML == '='){
        string = eval(string);
        dislay.value = string;
      }else if (e.target.innerHTML == '%'){
        string = eval(string) / 100;
        dislay.value = string ;
      }else 
      {
    string += e.target.innerHTML;
    dislay.value = string;
      }

      console.log(e.target.innerHTML)
  });
});

