function shout(string) {
  return string.toUpperCase() 
}
shout("something")

function whisper(string) {
  return string.toLowerCase() 
}
whisper("everything")

function logShout(string) {
  console.log("HELLO") 
}

function logWhisper(string) {
  console.log("hello") 
}

function sayHiToGrandma(string){
  if (string == string.toLowerCase()) {
    console.log(string) 
  } else if (string == string.toUpperCase()) {
    console.log(string) 
