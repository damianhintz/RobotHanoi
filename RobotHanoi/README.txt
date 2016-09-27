RobotHanoi v1.0-alfa, 27 września 2016
---
Zaprogramuj robota z okładki

CONNECTED: 0, 
ACTIVATED: 1, 
MOVED: 2, 
LIMIT_REACHED: 3, 
HAND_OPENED: 4, 
HAND_CLOSED: 5, 
DISK: 6, 
DISK_ENTER: 7, 
DISK_LEAVE: 8, 
HANOI: 9, 
TOWER_ENTER: 16, 
TOWER_LEAVE: 17, 
INVALID_MESSAGE: 18, 
UNKNOWN_BODY_PART: 19

k.reactions[E.CONNECTED] = "Successfully connected to the remote document. Robot can be now activated.", 
k.reactions[E.ACTIVATED] = "Robot has been activated. His limbs can be now moved.", 
k.reactions[E.MOVED] = "A body part has been moved by a value.", 
k.reactions[E.LIMIT_REACHED] = "A body part cannot be moved any more", 
k.reactions[E.HAND_OPENED] = "A hand has been opened.", 
k.reactions[E.HAND_CLOSED] = "A hand has been closed", 
k.reactions[E.DISK] = "A disk has been placed in a hand.", 
k.reactions[E.DISK_ENTER] = "A disk is now under a hand and can be picked up.", 
k.reactions[E.DISK_LEAVE] = "A disk in now out of reach and cannot be picked up.", 
k.reactions[E.HANOI] = "State of disks on Hanoi Towers has changed.", 
k.reactions[E.TOWER_ENTER] = "Disk is over a tower and can be dropped.", 
k.reactions[E.TOWER_LEAVE] = "Disk is no longer over a tower and cannot be dropped.";

# Commands:

* CONNECT: 0, Connects to remote document
* ACTIVATE: 1, 
* MOVE: 2, Moves rightArm by given angle
* HAND: 3, Changes grasp of a hand

k.commands[S.CONNECT] = "Connects to the remove document. This is the first message that needs to be sent with a port object to the remote document.", 
k.commands[S.ACTIVATE] = "Activated the robot."
k.commands[S.MOVE] = "Moves a hand by a given value"
k.commands[S.HAND] = "Toggles hand state (grasp)"

# bodyParts

* "rightArm", 
* "rightForearm",
* "rightHand", 
* "leftArm", 
* "leftForearm", 
* "leftHand"
