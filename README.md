1. Title of Website : Movie Trivia -this trivia page seeks to entertain and test the knowledge on common movies.
.Description -general info on the project and what it tries to accomplish

2. Validations Used
-W3C Markup Validation Service was used ro validate HTML.  Once the code was run, there was one error "Element head is missing a required instance of child element title."  This error was solved by adding a title to page.
-W3C CSS validation was used to validate CSS.  
JSlint was used to validate Java code and these were the warnings /There are 13 functions in this file.Function with the largest signature take 1 arguments, while the median is 0.Largest function has 11 statements in it, while the median is 3.
The most complex function has a cyclomatic complexity value of 2 while the median is 1./

3. How the project runs and how to use it. 
    The webpage shows a movie quiz consisting of HTML and CSS for styling and layout, and JavaScript to handle the quiz's logic.

    The HTML structure includes a container div with a logo image and the quiz section where the questions and answer buttons appear. The answer buttons and next button are dynamically created using JavaScript. The footer includes the copyright notice.

   The CSS styles the page's layout, including the background color, font, and sizing and spacing of the container, buttons, and logo.

    Finally, the JavaScript code defines an array of questions and their possible answers. It dynamically loads the questions and answer options and handles the selection of the correct answer and displaying the user's score at the end of the quiz.

##Development of the project -The HTML code includes two main sections: an introduction section and the quiz section. The introduction section contains a heading, a short paragraph, and a button to start the quiz. The quiz section is hidden by default and becomes visible when the user clicks on the start button. The quiz section includes a logo, a question section, a set of answer buttons, and a next button. At the end of the quiz, a "Try Again" button and a score section are displayed. The code also includes a footer with a copyright notice.

The CSS code provides styling for the HTML elements used in the movie trivia quiz. It includes styling for the background color, font family, alignment, positioning, and padding of various elements, such as the quiz container, answer buttons, and footer.

The JavaScript code includes an array of questions with their corresponding answers and a variable to track the current question. The code also includes functions to start the quiz, display the current question and answer choices, check the user's answer, move to the next question, and display the score at the end of the quiz. The JavaScript code also includes an event listener for the start button to initiate the quiz and display the first question.. These were the steps taken in the  making of this website.

    Planning out the quiz: Once l had determined the number of questions, the types of questions, and the possible answers for each question. it made it easy to decide on the scoring system and what happens when a user finishes the quiz.

    After creating the HTML and CSS: setting up the basic structure of the quiz using HTML and applying styling using CSS and creating  a container to hold the quiz questions and answer options.

    The JavaScript code: the JavaScript code was written to generate the questions and answer options dynamically. Create event listeners for when a user clicks on an answer and for when the user wants to move on to the next question.

    Testing and debugging: the quiz was tested thoroughly to ensure that it functions as intended and any issues th arose were resolvede.

4. Design ##Colour Scheme -the project uses light colors so that there arent as much colors that are clushing. I want the quiz to be a clam and relaxed page and not bright and overwhelming to the user. palette of colors used
Imagery
-the project makes use of one image the logo. I chose to use a logo designed using a third party website and does not have copyright.

5. Wireframes
-The project uses https://balsamiq.cloud/ to create a wireframe which will guide the creation of the quiz. 
![Screenshot](Screenshot (44).png)

6. Technologies used
Languages Used
-the project makes use of HTML, CSS and Java script.

Frameworks, Libraries & Programs Used
-Balsamiq - was used to draw the wireframes to see -Git - was used for version control. -Github - was used to save and store the files for the website

7. Deployment & Local Development
Github Pages was used to deploy the live website. The instructions to achieve this are below:

Log in (or sign up) to Github.
Find the repository for this project, Bully-Book-Club.
Click on the Settings link.
Click on the Pages link in the left hand side navigation bar.
In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
Click Save. Your live Github Pages site is now deployed at the URL shown.


8. References and Outside information -This project made use of the code institute lessons as well as the YouTube tutorial on how to build a Quiz App by Florida JS. 
The project relied heavily on https://eloquentjavascript.net/ as well as YouTube tutorial by Brian Design titled How to Make a Quiz using HTML, CSS and Javascript. 

9. Unsolved bugs
totalseems to load beneath while the quiz is ongoing. l tried endQuiz() function that will display the final score and hide the answer buttons and next buttonc but the code was  not reading.
Between the start again and the Start quiz prompts there is a quiz questioon that pops up and l tried looking for ways on Stackflow on how to solve this bug but did not succeed. 
10. This project used the below sources for more information.;
-l signed up and paid for a taught bootcamp that assisted me with the complilation of this project. 
-also used the following Youtube channels for reference and assistance in the creation of the site "Build a Quiz App with HTML CSS AND Javascript - By James Q Quick FloridaJS"
    -"How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial by Brian Design"
    -"Create a Quiz App with Timer using HTML CSS & JavaScript | Quiz Web App using JavaScript CodingNepal"

