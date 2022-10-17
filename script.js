let outputScreen = document.getElementById('out-screen');
function display(num){
  outputScreen.value +=num;
}

function calculate(){
  try{
    outputScreen.value = eval(outputScreen.value);

  }
  catch(err){
    alert('invaild operation')
  }
}
function clear(){
  outputScreen.value ="";
}
function del (){
  outputScreen.value = outputScreen.value.slice(0,-1)
}