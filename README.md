RobotHanoi v1.0-alfa, 27 września 2016
---
[Zaprogramuj robota z okładki](http://konkurs-jubileusz.programistamag.pl)

# Reactions

* [CONNECTED: 0] = "Successfully connected to the remote document. Robot can be now activated.", 
* [ACTIVATED: 1] = "Robot has been activated. His limbs can be now moved.", 
* [MOVED: 2] = "A body part has been moved by a value.", 
* [LIMIT_REACHED: 3] = "A body part cannot be moved any more", 
* [HAND_OPENED: 4] = "A hand has been opened.", 
* [HAND_CLOSED: 5] = "A hand has been closed", 
* [DISK: 6] = "A disk has been placed in a hand.", 
* [DISK_ENTER: 7] = "A disk is now under a hand and can be picked up.", 
* [DISK_LEAVE: 8] = "A disk in now out of reach and cannot be picked up.", 
* [HANOI: 9] = "State of disks on Hanoi Towers has changed.", 
* [TOWER_ENTER: 16] = "Disk is over a tower and can be dropped.", 
* [TOWER_LEAVE: 17] = "Disk is no longer over a tower and cannot be dropped.";
* INVALID_MESSAGE: 18, 
* UNKNOWN_BODY_PART: 19

# Commands

* CONNECT: 0, Connects to remote document
* ACTIVATE: 1, Activates the robot
* MOVE: 2, Moves rightArm by given angle or Moves a hand by a given value
* HAND: 3, Changes grasp of a hand or Toggles hand state (grasp)

# Body parts

* rightArm
* rightForearm
* rightHand
* leftArm
* leftForearm
* leftHand
