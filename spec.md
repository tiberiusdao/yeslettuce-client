
## Client spec

Relevant links:
- [server spec](https://github.com/tiberiusdao/yeslettuce-server/blob/master/spec.md)

### User story

#### Registration

- launch
- auth into fb
- auth into uber
- select preferences (gender, age range)

#### On app load

- choose today's date preference (ice cream, beer, coffee)
- get user cards
    - swipe right
    - swipe left
- change preferences?

#### Settings
- select preferences (gender, age range)

### Pages

- launch
- auth into fb and uber
- preferences
- choose date spot
- swipe left swipe right!
- chat? lasts 30min (layer)
- ubers on a map


#### launch

Yes, Lettuce!

input:
- none

output:
- none

#### auth

fb button
uber button

input:
- none

output:
- json about user

`POST` to endpoint

#### preferences

My bio:

- textarea

I am looking for:

check box: M/F

Age:

18 to 35

input:
- `userId`

output:
- 

#### select date

[ice cream]

[coffee]

[beer]

input:

output:
- user info

#### game!

[web sockets]

input:
- stack of cards
- each card has photo[s], name, age, bio
- swipe left or right

output:
- like: `true`, `userId`

#### chat!

chat..

count down timer?

button to see uber?

#### ubers

see map of ubers?

button to go back to chat?

can cancel?


## STUFF

geolocation

push notifications

pan responder for swiping

image

slider

switchios

touchable 

textinput
text

