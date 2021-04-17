# MyWays-TES21-Web-Development-Project
An algorithm to effectively measure the learning progress for an online learning platform.

**The site is live at:** https://coursedeck.netlify.app/ <br />
**DEMO:** https://vimeo.com/538088974

**Summary of logic used:**
1. The logic is relatively simple. When a video is played, a function is run that sets a `localStorage variable` value, and when the user clicks next, the value is checked to see if it is equal to true or not. This acts as a boolean, and depending on these flags, the user may or may not be able to move on to the next content.
2. LocalStorage variables was used to store the data so even if browser is closed, variable value is not reset. However A better alternative to local storage would be PHP.

**DETAILED EXPLAINATION:**
1. login using username: itspinnakkkk & pswd: Falcon29. (logic here is simple JS checks for both the inputs & comparing it with condition.)
2. Select any course.
3. Now on window load a function runs `loadin()` that is checking for any user activity using `document.activeElement === document.getElementById("IFRAME_ID")` happening in IFRAME. Once the video is played it will run a  `setTimeout` method with respect to videos length. once the video ends it sets a localStorage variable vaule
`localStorage.setItem("content_1_flag_video_1", "1");` this  way each content at its finshed state flags a localvariable to value 1 which later is used to check.<br />
* Alternative `setTimeout method` We could've used `video.onended` event to set localStorage variable, if we were to use video tag.
4. If the user clicks the NEXT button before the video ends, a popup will appear stating that the user must watch the entire video.
5. On clicking NEXT btn it runs a function `askamiallowed()` which has nested `if() elseif()` conditional statements.
where if the condition that the entire course has been completed is valid, it will allow the user to navigate without restriction, but if it is not true, it will check if the current content has been watched completely. Then it loads in next content ie `load_c2()` .
5.To tackle written content I came up with an average time to read the whole content concept, so even if user is slow at reading it doesn't matter bcs it will set localStorage variable vaule only after the avg time to read is passed. This can be sometimes not so important thats why the tutor has full rights to set value for each content individually. 
6. This logic works great but the NEXT btn won't work while moving to 3rd content bcs of ID issue in each if n eise if conditions so on each load content function it will change 
the btn id, that way same btn can be used multiple times.
7. The next button has a different ID each time it moves to next content i.e when user moves from content 1 to 2 the next button has one ID however when moving from 2nd to 3rd content, it has a different ID due to which it plays the next content and not the same one. This ensures that the same button can be used multiple times.
8. Same logic works for side nav bar thing without changing any ID, <br /> just via `document.activeElement === document.getElementById("RESPTIVE_LABLE_ID")` .

### Things not yet been added
1. PREV btn doesnt take you to previous content.
2. side nav will not take u to next content even if u have finished watching current content.
3. There's no status of how much course is finshed compeleting.
4. Side NAV will take you to any content only if u have compeleted whole course. <br>

### Limitations
I'm well aware of the fact this code falls short in many respects. However, as a novice, I lack experience with web development, JS, and other server-side languages.
Also due to my upcoming final exams, I am facing time constraint. <br />
In the future, I intend to update this logic and have critical code restricted to the server rather than making critical functions available to the user, which can be easily tweaked using a debugging tool. <br />Eventually making it a completely functional website.
