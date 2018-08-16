
(function(){
  'use strict';

var btn = document.getElementById('btn');
var do1 = document.getElementById('do1');
var do2 = document.getElementById('do2');
var result = document.getElementById('result');
var reset = document.getElementById('reset');

//ボタンを押したときのアニメーション
btn.addEventListener('mousedown',function(){
  this.className ='pushed';
});

//ボタンから離れたときの処理
btn.addEventListener('mouseup',function(){
  this.className ='';
});

//ボタンをクリックしたときの処理
btn.addEventListener("click",function(){
  var choise = [do1,do2];
  var n = Math.floor(Math.random()*choise.length);
result.textContent  = `今日は「${choise[n].value}」をしよう！`;
reset.classList.remove("hidden");
});

reset.addEventListener("click",function(){
 result.textContent = "結果はここに表示されます";
 do1.value ="";
 do2.value = "";
 do1.focus();
});


do1.focus();
})();
