$(function() {
  // '#splash'が非表示になるまで2000msかかる
  // ★並列で処理される？？
  $('#first-shown').delay(2000).fadeIn(1000).fadeOut(2000);
  $('#main').delay(5500).fadeIn(1000);
})
