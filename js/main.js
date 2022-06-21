// //const btnIniciar = document.querySelector('#iniciarCronometro');
// //const texto = document.querySelector('#cronometro');
// const btnIniciar = document.querySelector('#iniciarCronometro');
// const texto = document.querySelector('#cronometro');
// let minutos = 0
// let interval;


// function iniciarCronometro(){

// }

// iniciarCronometro();
const botaoInicio = document.querySelector('.iniciar');
const botaoPausa = document.querySelector('.pausar');
const botaoResetar = document.querySelector('.resetar');
const min = document.querySelector('.minutos');
const seg = document.querySelector('.segundos');
const milisseg = document.querySelector('.milissegundos');
let minNum = 0;
let segNum = 0;
let miliNum = 0;
let intervalo;


function doisDigitos(numero){
  if(numero < 10){
    return('0'+numero);
  }else{
    return(numero);
  }
}

botaoInicio.addEventListener('click', () => {
  function cronometrar(){
    miliNum++
    milisseg.innerHTML = doisDigitos(miliNum);

    if(miliNum == 60){
      miliNum = 0;
      segNum++;
      seg.innerHTML = doisDigitos(segNum);
    }

    else if(segNum == 60){
      segNum = 0;
      minNum++;
      min.innerHTML = doisDigitos(minNum);
    }
  }
  intervalo = setInterval(function(){cronometrar()}, 10);
});


botaoPausa.addEventListener('click', () =>{
  clearInterval(intervalo);
});



botaoResetar.addEventListener('click', () => {
  clearInterval(intervalo);
  miliNum = 0;
  segNum = 0;
  minNum = 0;
  milisseg.innerHTML = '00';
  seg.innerHTML = '00';
  min.innerHTML = '00';
});



















// function milissegundos(){
//   miliNum++;
//   miliNum.innerHTML = miliNum;
// }
// function segundos(){
//   segNum++;
//   segNum.innerHTML = segNum;
// }
// function minutos(){
//   minNum++;
//   minNum.innerHTML = minNum;
// }

// function iniciar(){
//   clearInterval(intervalo);
//   intervalo = setInterval(() => {
//     milissegundos()
//   }, 10)
// }
