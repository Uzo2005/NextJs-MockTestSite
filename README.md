I am not actually sure what this readme file should contain but I will try my best to explain what I have done in this project and what I still hope to do.

## Why this?
The idea for this project came to me when I observed that EdUSAabuja members used google forms to practice for the SAT which I felt was not a very effective method.

I began this project bebcause I wanted to make it easier for me and my mates to practice for the SAT with tools that we can customize. I continued working on it because I realised that since the SAT will soon go digital, then online SAT practice would be more popular in the future.

## What Is Going On Here?
THIS IS HOW THIS WEBSITE WORKS:
1. The landing page is a register form which requires your name, email and preferred password.
2. On filling the form details and submitting: the student is led to login. 
3. After login,  the student is led to a dashboard listing all the available mocktests.
4. On selecting one of the Mocktest available on the dashboard, the user is redirected to a general instructions page prompted to begin the Timer for the Reading section.
   This instructioms page contains a button for going back to the dashboard and another button for starting the Reading section which should last 65 minutes.

5. If the student  clicked the "Start Timer" button on the general instructions page he will be  redirected to the Reading page which has a 65 minutes countdown timer and which redirects  to the writing instructions when the timer counts to 0. Also after the timer counts to zero the student cannot return to that section until he is done with the test.

6. After the submit button for the English reading is clicked or the timer runs out, the student is led to the wrting instructions page which contains the instructioms for the writing page, buttons for exit and another button for starting the Timer.

7. The writing page lasts for 35 minutes and when it ends the user cannot return to the page.

8. When the timer for the MathsNoCalc is started the 25 minutes countdown starts and the user can now begin answering the maths questions without the use of a calculator. Questions 15 to 20 have to be typed in the box provided.

9. After the MathNoCalc ends the student is redirected to the MathsCalc section where a calculator is allowed. This will last for 55minutes and is very similar to the MathNocalc section except it that it should have 38 questions. Also questions 30 to 38 are to typed in the input box provided.
 
10. When the student submits or the timer runs out, the student is led to the ending page where he is congratulated for finishing the SAT mocktest and his score displayed.

##What About The Future?
THIS ARE THE FUTURE FEATURES THAT WILL COME LATER:

1. Enable students to go back and view their mistakes, rather than just knowing their scores.

2. A leaderboard feature to foster a competitive spirit among the users and speed up user progress.

3. Many many more things to be added ;).......


## Contributing To This Project

This is a [Next.js](https://nextjs.org/) project that uses tailwind for styling.


First create an environmental variables file and add you environmental variables to it (Contact me for the database details).

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

                   
         Thank you, happy coding:)
