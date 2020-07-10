var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level =0;
var started=false;
var windowsize=$(window).width();
$("body").fadeIn(100).fadeOut(100).fadeIn(100);
function nextSequence() {
  $(".mobile").hide();
 userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
 }
$(".btn").click(function () {
  var userChosenColour =$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
 audio.play();
}
function animatePress(currentColor) {
  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
  $("#"+currentColor).removeClass("pressed");}
  ,100);
}
if(windowsize < 1100){
$(".mobile").click(function () {
  if(!started){
$("#level-title").text("Level "+level);
  nextSequence();
started=true;
}
});}else {
  $(document).keypress(function () {
    if(!started){
  $("#level-title").text("Level "+level);
    nextSequence();
  started=true;
  }
  });
}
function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
  if(gamePattern.length===userClickedPattern.length){
  setTimeout(nextSequence(), 1000,);}
}else {
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
  $("body").removeClass("game-over");
  },200);
$("h1").text("Game Over, Press Any Key to Restart");
startOver();
}
}
function startOver() {
  level=0;
  gamePattern=[];
  started=false;
  windowsize=$(window).width();
if(windowsize < 1100){
  $(".mobile").show();
}}
