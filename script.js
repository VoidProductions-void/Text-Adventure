var room=0;
var items=0;
var text={
/*
A WINTERS NIGHT
Chapter 1:The Escape
It is a cold, miserable night with thunder pounding outside and rain drilling the houses derelict, run down scaly roof. You are afraid.
Very afraid. Your room is empty, your window shattered, the front door creaking open and shut. You would do anything, anything, to be
able to leave. But you know you must wait. You must wait and wait. And just as your about to burst in to tears, losing control of everything,
you hear the footsteps. The footsteps of the man. It's time.
What do you do?
1. Walk to window/examine window/look at window
2. Walk to door/examine door
3. Stay still/stay still/remain still/
4. Examine room/look around/search room
5. Shout out/call out/yell out/say hello
Text response to player input 1:
You walk to the window. There is a big gap in the middle where glass has been shattered. You have never quite worked out how it got there.
Text response to player input 2:
The door is made of Oak wood, but it is so old and worn that a simple touch of it and you would get splinters. It is slammed shut but not locked.
Text response to player input 3:
As you stand there staring at the door, you hear the creaking of the staircases wood under the mans heavy boots. The more you wait the closer they get, 
and the more worried you become.
*/
function delay(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
