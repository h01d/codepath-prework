# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jarod Crush**

Time spent: **10** hours spent in total

Link to project: (https://dent-crawling-lungfish.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are not implemented:

- [ ] not make it so meme ridden, maybe everyone won't get it or like it

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

General gameplay
![](http://g.recordit.co/4qna58Q7kR.gif)
Utilizing each button
![](http://g.recordit.co/HebIORTqkA.gif)
Showing loss after 3 mistakes
![](http://g.recordit.co/BnTFMykeJW.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[Mohanad Abu Sheikha (Software Engineer Friend) and developer.mozilla.org]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The code became more complex and bigger, I began to lose track of it. Specifically the timer. The code also had a lot of moving parts intertwining and I learned quickly of the domino effect that comes when changing small things here and there.  I had to track these errors and bugs through console.log and then I was able to find my way back to what was giving the issues. A specific example that comes to mind is when I started my timer, I attached to it to the startGame function. I followed the logic how It was in my head. Instead of writing it down and mapping it out prior to making changes I continued to add bits of logic that I thought of here and there. After adding the setInterval function to start game I then put it in the loseGame function, again I was following the logic as I understood it, this caused an endless loop of you loseGame since I added another threshold for loss to loseGame when the timer is less than 0. The timer continued to tick down from 0 to negatives and the loseGame box kept popping up and did not allow me to do anything until I refreshed the page. This felt sloppy and I felt frustrated, however I did remember how the tutorial for this program had us use Console.log. Console.log wasn't the only thing that helped me but also deleting any unnecessary code and organizing it all really helped. The biggest lesson I learned from this challenge is that working methodically from the ground up with my code and thinking a bit ahead when formatting and setting up the program goes a long way, particularly if I used console.log for each variable in question, diagnosing the issues at hand would of been a lot faster.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Is it always this fun? No seriously I had a blast working on this project, 10 hours went by like nothing. This to me felt like the first project I have done within this atmosphere that I could embellish a little. I understand things wont always be this cut and dry and or as simple. But getting acquainted with things to then figuring out parts of it on my own was a great way to hook my interest and keep it. Tracking down the bugs and error was frustrating for a very short time because it eventually felt like a puzzle or scavenger hunt. I really enjoyed my time with this and want more of it. Is web development, whether it be front end or back, always this exciting?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would of made my program supported on mobile, because I sent my program to various people and the first thing they would do was try to play it on mobile. I also would've liked to add  a feature that made the pattern infinite or really big and have an old school feeling leaderboard. I would've changed the aesthetic of the web page to match that of an old arcade cabinet (some more neon) because nostalgia. Maybe changing up the theme of my buttons from memes to be something a bit more serious would stick to the theme id want.  Adding some background music that would lightly play as you are on the webpage whether you start the game or just sit there would be what I would want as well.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/e852ed8d88fd4cd99697b2a8897b90e6)


## License

    Copyright [Jarod Crush]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
