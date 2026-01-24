// js/sections/questions.js
import { loadSection } from '../main.js'
import { clickable } from '../utils.js'

let root;
const failMsgs = [];
failMsgs.push("Nope, not this one", "Try again", "There should be a better response", "Are you sure?");

export function initQuestions() {
    console.log("QUESTIONS");
    root = document.createElement('section');
    root.id = 'questions';
    root.classList.add('center')

    /* ---------- First block ---------- */
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('center', 'w80');

    const question1Div = document.createElement('div');
    question1Div.id = 'q1';
    const question2Div = document.createElement('div');
    question2Div.id = 'q2';
    const question3Div = document.createElement('div');
    question3Div.id = 'q3';
    const question4Div = document.createElement('div');
    question4Div.id = 'q4';
    const question5Div = document.createElement('div');
    question5Div.id = 'q5';
    const question6Div = document.createElement('div');
    question6Div.id = 'q6';

    const title1 = document.createElement('h3');
    title1.textContent = 'Question 1: What is your favorite pizza flavour?';

    const answer1_1Div = document.createElement('div');
    answer1_1Div.style.position = 'relative';
    answer1_1Div.style.width = 'fit-content';
    const answer1_1ClickDiv = document.createElement('div');
    answer1_1ClickDiv.style.position = 'absolute';
    answer1_1ClickDiv.style.width = '100%';
    answer1_1ClickDiv.style.top = '23%';
    answer1_1ClickDiv.style.height = '70%';
    const answer1_1Btn = document.createElement('img');
    answer1_1Btn.style.width = '384px';
    answer1_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer1_1 = document.createElement('div');
    answer1_1.classList.add("btnText2");
    answer1_1.textContent = 'Pizza Funghi';
    hoverAction(answer1_1ClickDiv, answer1_1Btn);
    tryAgain(answer1_1ClickDiv, answer1_1Btn, answer1_1);
    answer1_1Div.append(answer1_1Btn, answer1_1, answer1_1ClickDiv);

    const answer1_2Div = document.createElement('div');
    answer1_2Div.style.position = 'relative';
    answer1_2Div.style.width = 'fit-content';
    const answer1_2ClickDiv = document.createElement('div');
    answer1_2ClickDiv.style.position = 'absolute';
    answer1_2ClickDiv.style.width = '100%';
    answer1_2ClickDiv.style.top = '23%';
    answer1_2ClickDiv.style.height = '70%';
    const answer1_2Btn = document.createElement('img');
    answer1_2Btn.style.width = '384px';
    answer1_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer1_2 = document.createElement('div');
    answer1_2.classList.add("btnText2");
    answer1_2.textContent = 'Pizza Salame';
    hoverAction(answer1_2ClickDiv, answer1_2Btn);
    tryAgain(answer1_2ClickDiv, answer1_2Btn, answer1_2);
    answer1_2Div.append(answer1_2Btn, answer1_2, answer1_2ClickDiv);

    const answer1_3Div = document.createElement('div');
    answer1_3Div.style.position = 'relative';
    answer1_3Div.style.width = 'fit-content';
    const answer1_3ClickDiv = document.createElement('div');
    answer1_3ClickDiv.style.position = 'absolute';
    answer1_3ClickDiv.style.width = '100%';
    answer1_3ClickDiv.style.top = '23%';
    answer1_3ClickDiv.style.height = '70%';
    const answer1_3Btn = document.createElement('img');
    answer1_3Btn.style.width = '384px';
    answer1_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer1_3 = document.createElement('div');
    answer1_3.classList.add("btnText2");
    answer1_3.textContent = 'Pizza Margherita';
    hoverAction(answer1_3ClickDiv, answer1_3Btn);
    answer1_3ClickDiv.addEventListener('click', () => nextQuestion());
    answer1_3Div.append(answer1_3Btn, answer1_3, answer1_3ClickDiv);

    const answer1_4Div = document.createElement('div');
    answer1_4Div.style.position = 'relative';
    answer1_4Div.style.width = 'fit-content';
    const answer1_4ClickDiv = document.createElement('div');
    answer1_4ClickDiv.style.position = 'absolute';
    answer1_4ClickDiv.style.width = '100%';
    answer1_4ClickDiv.style.top = '23%';
    answer1_4ClickDiv.style.height = '70%';
    const answer1_4Btn = document.createElement('img');
    answer1_4Btn.style.width = '384px';
    answer1_4Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer1_4 = document.createElement('div');
    answer1_4.classList.add("btnText2");
    answer1_4.textContent = 'Pizza Quattri Formaggi';
    hoverAction(answer1_4ClickDiv, answer1_4Btn);
    tryAgain(answer1_4ClickDiv, answer1_4Btn, answer1_4);
    answer1_4Div.append(answer1_4Btn, answer1_4, answer1_4ClickDiv);

    question1Div.append(title1, answer1_1Div, answer1_2Div, answer1_3Div, answer1_4Div);


    const title2 = document.createElement('h3');
    title2.textContent = 'Question 2: What is the worst crime (according to you)?';

    const answer2_1Div = document.createElement('div');
    answer2_1Div.style.position = 'relative';
    answer2_1Div.style.width = 'fit-content';
    const answer2_1ClickDiv = document.createElement('div');
    answer2_1ClickDiv.style.position = 'absolute';
    answer2_1ClickDiv.style.width = '100%';
    answer2_1ClickDiv.style.top = '23%';
    answer2_1ClickDiv.style.height = '70%';
    const answer2_1Btn = document.createElement('img');
    answer2_1Btn.style.width = '384px';
    answer2_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_1 = document.createElement('div');
    answer2_1.classList.add("btnText2");
    answer2_1.textContent = 'Keeping merchants alive';
    hoverAction(answer2_1ClickDiv, answer2_1Btn);
    tryAgain(answer2_1ClickDiv, answer2_1Btn, answer2_1);
    answer2_1Div.append(answer2_1Btn, answer2_1, answer2_1ClickDiv);

    const answer2_2Div = document.createElement('div');
    answer2_2Div.style.position = 'relative';
    answer2_2Div.style.width = 'fit-content';
    const answer2_2ClickDiv = document.createElement('div');
    answer2_2ClickDiv.style.position = 'absolute';
    answer2_2ClickDiv.style.width = '100%';
    answer2_2ClickDiv.style.top = '23%';
    answer2_2ClickDiv.style.height = '70%';
    const answer2_2Btn = document.createElement('img');
    answer2_2Btn.style.width = '384px';
    answer2_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_2 = document.createElement('div');
    answer2_2.classList.add("btnText2");
    answer2_2.textContent = 'Watching other people\'s streams';
    hoverAction(answer2_2ClickDiv, answer2_2Btn);
    tryAgain(answer2_2ClickDiv, answer2_2Btn, answer2_2);
    answer2_2Div.append(answer2_2Btn, answer2_2, answer2_2ClickDiv);

    const answer2_3Div = document.createElement('div');
    answer2_3Div.style.position = 'relative';
    answer2_3Div.style.width = 'fit-content';
    const answer2_3ClickDiv = document.createElement('div');
    answer2_3ClickDiv.style.position = 'absolute';
    answer2_3ClickDiv.style.width = '100%';
    answer2_3ClickDiv.style.top = '23%';
    answer2_3ClickDiv.style.height = '70%';
    const answer2_3Btn = document.createElement('img');
    answer2_3Btn.style.width = '384px';
    answer2_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_3 = document.createElement('div');
    answer2_3.classList.add("btnText2");
    answer2_3.textContent = 'Putting pineapple where it doesn\'t belong';
    hoverAction(answer2_3ClickDiv, answer2_3Btn);
    tryAgain(answer2_3ClickDiv, answer2_3Btn, answer2_3);
    answer2_3Div.append(answer2_3Btn, answer2_3, answer2_3ClickDiv);

    const answer2_4Div = document.createElement('div');
    answer2_4Div.style.position = 'relative';
    answer2_4Div.style.width = 'fit-content';
    const answer2_4ClickDiv = document.createElement('div');
    answer2_4ClickDiv.style.position = 'absolute';
    answer2_4ClickDiv.style.width = '100%';
    answer2_4ClickDiv.style.top = '23%';
    answer2_4ClickDiv.style.height = '70%';
    const answer2_4Btn = document.createElement('img');
    answer2_4Btn.style.width = '384px';
    answer2_4Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_4 = document.createElement('div');
    answer2_4.classList.add("btnText2");
    answer2_4.textContent = 'Leaving the basement';
    hoverAction(answer2_4ClickDiv, answer2_4Btn);
    tryAgain(answer2_4ClickDiv, answer2_4Btn, answer2_4);
    answer2_4Div.append(answer2_4Btn, answer2_4, answer2_4ClickDiv);

    const answer2_5Div = document.createElement('div');
    answer2_5Div.style.position = 'relative';
    answer2_5Div.style.width = 'fit-content';
    const answer2_5ClickDiv = document.createElement('div');
    answer2_5ClickDiv.style.position = 'absolute';
    answer2_5ClickDiv.style.width = '100%';
    answer2_5ClickDiv.style.top = '23%';
    answer2_5ClickDiv.style.height = '70%';
    const answer2_5Btn = document.createElement('img');
    answer2_5Btn.style.width = '384px';
    answer2_5Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_5 = document.createElement('div');
    answer2_5.classList.add("btnText2");
    answer2_5.textContent = 'All of the above';
    hoverAction(answer2_5ClickDiv, answer2_5Btn);
    answer2_5ClickDiv.addEventListener('click', () => nextQuestion());
    answer2_5Div.append(answer2_5Btn, answer2_5, answer2_5ClickDiv);

    question2Div.append(title2, answer2_1Div, answer2_2Div, answer2_3Div, answer2_4Div, answer2_5Div);


    const title3 = document.createElement('h3');
    title3.textContent = 'Question 3: Have you ever participated in any sports, and if so: which?';

    const answer3_1Div = document.createElement('div');
    answer3_1Div.style.position = 'relative';
    answer3_1Div.style.width = 'fit-content';
    const answer3_1ClickDiv = document.createElement('div');
    answer3_1ClickDiv.style.position = 'absolute';
    answer3_1ClickDiv.style.width = '100%';
    answer3_1ClickDiv.style.top = '23%';
    answer3_1ClickDiv.style.height = '70%';
    const answer3_1Btn = document.createElement('img');
    answer3_1Btn.style.width = '384px';
    answer3_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer3_1 = document.createElement('div');
    answer3_1.classList.add("btnText2");
    answer3_1.textContent = 'No!';
    hoverAction(answer3_1ClickDiv, answer3_1Btn);
    tryAgain(answer3_1ClickDiv, answer3_1Btn, answer3_1);
    answer3_1Div.append(answer3_1Btn, answer3_1, answer3_1ClickDiv);

    const answer3_2Div = document.createElement('div');
    answer3_2Div.style.position = 'relative';
    answer3_2Div.style.width = 'fit-content';
    const answer3_2ClickDiv = document.createElement('div');
    answer3_2ClickDiv.style.position = 'absolute';
    answer3_2ClickDiv.style.width = '100%';
    answer3_2ClickDiv.style.top = '23%';
    answer3_2ClickDiv.style.height = '70%';
    const answer3_2Btn = document.createElement('img');
    answer3_2Btn.style.width = '384px';
    answer3_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer3_2 = document.createElement('div');
    answer3_2.classList.add("btnText2");
    answer3_2.textContent = 'Yes, I used to play volleyball';
    hoverAction(answer3_2ClickDiv, answer3_2Btn);
    answer3_2ClickDiv.addEventListener('click', () => nextQuestion());
    answer3_2Div.append(answer3_2Btn, answer3_2, answer3_2ClickDiv);

    const answer3_3Div = document.createElement('div');
    answer3_3Div.style.position = 'relative';
    answer3_3Div.style.width = 'fit-content';
    const answer3_3ClickDiv = document.createElement('div');
    answer3_3ClickDiv.style.position = 'absolute';
    answer3_3ClickDiv.style.width = '100%';
    answer3_3ClickDiv.style.top = '23%';
    answer3_3ClickDiv.style.height = '70%';
    const answer3_3Btn = document.createElement('img');
    answer3_3Btn.style.width = '384px';
    answer3_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer3_3 = document.createElement('div');
    answer3_3.classList.add("btnText2");
    answer3_3.textContent = 'Yes, I am an Olympic swimming champion!';
    hoverAction(answer3_3ClickDiv, answer3_3Btn);
    tryAgain(answer3_3ClickDiv, answer3_3Btn, answer3_3);
    answer3_3Div.append(answer3_3Btn, answer3_3, answer3_3ClickDiv);

    const answer3_4Div = document.createElement('div');
    answer3_4Div.style.position = 'relative';
    answer3_4Div.style.width = 'fit-content';
    const answer3_4ClickDiv = document.createElement('div');
    answer3_4ClickDiv.style.position = 'absolute';
    answer3_4ClickDiv.style.width = '100%';
    answer3_4ClickDiv.style.top = '23%';
    answer3_4ClickDiv.style.height = '70%';
    const answer3_4Btn = document.createElement('img');
    answer3_4Btn.style.width = '384px';
    answer3_4Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer3_4 = document.createElement('div');
    answer3_4.classList.add("btnText2");
    answer3_4.textContent = 'Sports? I only play chess (on a casual level)';
    hoverAction(answer3_4ClickDiv, answer3_4Btn);
    tryAgain(answer3_4ClickDiv, answer3_4Btn, answer3_4);
    answer3_4Div.append(answer3_4Btn, answer3_4, answer3_4ClickDiv);

    question3Div.append(title3, answer3_1Div, answer3_2Div, answer3_3Div, answer3_4Div);


    const title4 = document.createElement('h3');
    title4.textContent = 'Question 4: When is your birthday?';

    const answer4_1Div = document.createElement('div');
    answer4_1Div.style.position = 'relative';
    answer4_1Div.style.width = 'fit-content';
    const answer4_1ClickDiv = document.createElement('div');
    answer4_1ClickDiv.style.position = 'absolute';
    answer4_1ClickDiv.style.width = '100%';
    answer4_1ClickDiv.style.top = '23%';
    answer4_1ClickDiv.style.height = '70%';
    const answer4_1Btn = document.createElement('img');
    answer4_1Btn.style.width = '384px';
    answer4_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer4_1 = document.createElement('div');
    answer4_1.classList.add("btnText2");
    answer4_1.textContent = 'On the 25th of December (By the way, my name is Jesus)';
    hoverAction(answer4_1ClickDiv, answer4_1Btn);
    tryAgain(answer4_1ClickDiv, answer4_1Btn, answer4_1);
    answer4_1Div.append(answer4_1Btn, answer4_1, answer4_1ClickDiv);

    const answer4_2Div = document.createElement('div');
    answer4_2Div.style.position = 'relative';
    answer4_2Div.style.width = 'fit-content';
    const answer4_2ClickDiv = document.createElement('div');
    answer4_2ClickDiv.style.position = 'absolute';
    answer4_2ClickDiv.style.width = '100%';
    answer4_2ClickDiv.style.top = '23%';
    answer4_2ClickDiv.style.height = '70%';
    const answer4_2Btn = document.createElement('img');
    answer4_2Btn.style.width = '384px';
    answer4_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer4_2 = document.createElement('div');
    answer4_2.classList.add("btnText2");
    answer4_2.textContent = 'Exactly 5 days after Easter';
    hoverAction(answer4_2ClickDiv, answer4_2Btn);
    tryAgain(answer4_2ClickDiv, answer4_2Btn, answer4_2);
    answer4_2Div.append(answer4_2Btn, answer4_2, answer4_2ClickDiv);

    const answer4_3Div = document.createElement('div');
    answer4_3Div.style.position = 'relative';
    answer4_3Div.style.width = 'fit-content';
    const answer4_3ClickDiv = document.createElement('div');
    answer4_3ClickDiv.style.position = 'absolute';
    answer4_3ClickDiv.style.width = '100%';
    answer4_3ClickDiv.style.top = '23%';
    answer4_3ClickDiv.style.height = '70%';
    const answer4_3Btn = document.createElement('img');
    answer4_3Btn.style.width = '384px';
    answer4_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer4_3 = document.createElement('div');
    answer4_3.classList.add("btnText2");
    answer4_3.textContent = 'Today, silly! (but only if we are the 8th of February now)';
    hoverAction(answer4_3ClickDiv, answer4_3Btn);
    answer4_3ClickDiv.addEventListener('click', () => nextQuestion());
    answer4_3Div.append(answer4_3Btn, answer4_3, answer4_3ClickDiv);

    question4Div.append(title4, answer4_1Div, answer4_2Div, answer4_3Div);


    const title5 = document.createElement('h3');
    title5.textContent = 'Question 5: Which of the following quotes (by you) fits the best after "Fire, fire, ...":';

    const answer5_1Div = document.createElement('div');
    answer5_1Div.style.position = 'relative';
    answer5_1Div.style.width = 'fit-content';
    const answer5_1ClickDiv = document.createElement('div');
    answer5_1ClickDiv.style.position = 'absolute';
    answer5_1ClickDiv.style.width = '100%';
    answer5_1ClickDiv.style.top = '23%';
    answer5_1ClickDiv.style.height = '70%';
    const answer5_1Btn = document.createElement('img');
    answer5_1Btn.style.width = '384px';
    answer5_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_1 = document.createElement('div');
    answer5_1.classList.add("btnText2");
    answer5_1.textContent = 'BALLS';
    hoverAction(answer5_1ClickDiv, answer5_1Btn);
    tryAgain(answer5_1ClickDiv, answer5_1Btn, answer5_1);
    answer5_1Div.append(answer5_1Btn, answer5_1, answer5_1ClickDiv);

    const answer5_2Div = document.createElement('div');
    answer5_2Div.style.position = 'relative';
    answer5_2Div.style.width = 'fit-content';
    const answer5_2ClickDiv = document.createElement('div');
    answer5_2ClickDiv.style.position = 'absolute';
    answer5_2ClickDiv.style.width = '100%';
    answer5_2ClickDiv.style.top = '23%';
    answer5_2ClickDiv.style.height = '70%';
    const answer5_2Btn = document.createElement('img');
    answer5_2Btn.style.width = '384px';
    answer5_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_2 = document.createElement('div');
    answer5_2.classList.add("btnText2");
    answer5_2.textContent = 'Oh my days!';
    hoverAction(answer5_2ClickDiv, answer5_2Btn);
    tryAgain(answer5_2ClickDiv, answer5_2Btn, answer5_2);
    answer5_2Div.append(answer5_2Btn, answer5_2, answer5_2ClickDiv);

    const answer5_3Div = document.createElement('div');
    answer5_3Div.style.position = 'relative';
    answer5_3Div.style.width = 'fit-content';
    const answer5_3ClickDiv = document.createElement('div');
    answer5_3ClickDiv.style.position = 'absolute';
    answer5_3ClickDiv.style.width = '100%';
    answer5_3ClickDiv.style.top = '23%';
    answer5_3ClickDiv.style.height = '70%';
    const answer5_3Btn = document.createElement('img');
    answer5_3Btn.style.width = '384px';
    answer5_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_3 = document.createElement('div');
    answer5_3.classList.add("btnText2");
    answer5_3.textContent = 'Backshot time';
    hoverAction(answer5_3ClickDiv, answer5_3Btn);
    tryAgain(answer5_3ClickDiv, answer5_3Btn, answer5_3);
    answer5_3Div.append(answer5_3Btn, answer5_3, answer5_3ClickDiv);

    const answer5_4Div = document.createElement('div');
    answer5_4Div.style.position = 'relative';
    answer5_4Div.style.width = 'fit-content';
    const answer5_4ClickDiv = document.createElement('div');
    answer5_4ClickDiv.style.position = 'absolute';
    answer5_4ClickDiv.style.width = '100%';
    answer5_4ClickDiv.style.top = '23%';
    answer5_4ClickDiv.style.height = '70%';
    const answer5_4Btn = document.createElement('img');
    answer5_4Btn.style.width = '384px';
    answer5_4Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_4 = document.createElement('div');
    answer5_4.classList.add("btnText2");
    answer5_4.textContent = 'Leck meine Eier';
    hoverAction(answer5_4ClickDiv, answer5_4Btn);
    answer5_4ClickDiv.addEventListener('click', () => nextQuestion());
    answer5_4Div.append(answer5_4Btn, answer5_4, answer5_4ClickDiv);

    const answer5_5Div = document.createElement('div');
    answer5_5Div.style.position = 'relative';
    answer5_5Div.style.width = 'fit-content';
    const answer5_5ClickDiv = document.createElement('div');
    answer5_5ClickDiv.style.position = 'absolute';
    answer5_5ClickDiv.style.width = '100%';
    answer5_5ClickDiv.style.top = '23%';
    answer5_5ClickDiv.style.height = '70%';
    const answer5_5Btn = document.createElement('img');
    answer5_5Btn.style.width = '384px';
    answer5_5Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_5 = document.createElement('div');
    answer5_5.classList.add("btnText2");
    answer5_5.textContent = 'Who said this game is hard?';
    hoverAction(answer5_5ClickDiv, answer5_5Btn);
    tryAgain(answer5_5ClickDiv, answer5_5Btn, answer5_5);
    answer5_5Div.append(answer5_5Btn, answer5_5, answer5_5ClickDiv);

    question5Div.append(title5, answer5_1Div, answer5_2Div, answer5_3Div, answer5_4Div, answer5_5Div);


    const title6 = document.createElement('h3');
    title6.textContent = 'Question 6: Do you consider yourself the cutest person alive?';

    const answer6_1Div = document.createElement('div');
    answer6_1Div.style.position = 'relative';
    answer6_1Div.style.width = 'fit-content';
    const answer6_1ClickDiv = document.createElement('div');
    answer6_1ClickDiv.style.position = 'absolute';
    answer6_1ClickDiv.style.width = '100%';
    answer6_1ClickDiv.style.top = '23%';
    answer6_1ClickDiv.style.height = '70%';
    const answer6_1Btn = document.createElement('img');
    answer6_1Btn.style.width = '384px';
    answer6_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer6_1 = document.createElement('div');
    answer6_1.classList.add("btnText2");
    answer6_1.textContent = 'Yes';
    hoverAction(answer6_1ClickDiv, answer6_1Btn);
    answer6_1ClickDiv.addEventListener('click', () => nextQuestion());
    answer6_1Div.append(answer6_1Btn, answer6_1, answer6_1ClickDiv);

    let clicked = false;
    let ready = false;
    const answer6_2Div = document.createElement('div');
    answer6_2Div.style.position = 'relative';
    answer6_2Div.style.width = 'fit-content';
    const answer6_2ClickDiv = document.createElement('div');
    answer6_2ClickDiv.style.position = 'absolute';
    answer6_2ClickDiv.style.width = '100%';
    answer6_2ClickDiv.style.top = '23%';
    answer6_2ClickDiv.style.height = '70%';
    const answer6_2Btn = document.createElement('img');
    answer6_2Btn.style.width = '384px';
    answer6_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer6_2 = document.createElement('div');
    answer6_2.classList.add("btnText2");
    answer6_2Div.append(answer6_2Btn, answer6_2, answer6_2ClickDiv);
    answer6_2.textContent = 'No';
    hoverAction(answer6_2ClickDiv, answer6_2Btn);
    answer6_2ClickDiv.addEventListener('mouseenter', () => {
        if (!clicked) {
            answer6_2.textContent = 'HEY! •`_\´•';
            answer6_2Btn.setAttribute('src', './assets/svgs/cutebutton_sad.svg');
        }
        else answer6_2.textContent = 'Of course! (✿◠‿◠)';
    });
    answer6_2ClickDiv.addEventListener('mouseleave', () => {
        if (!clicked) {
            answer6_2.textContent = 'No!';
            answer6_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
        }
    });
    answer6_2ClickDiv.addEventListener('click', () => {
        if (!clicked) {
            clicked = true;
            answer6_2.textContent = 'Fine, let\'s play it your way!';
            setTimeout(() => {
                answer6_2.textContent = 'Of course! (✿◠‿◠)';
                answer6_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
                ready = true;
            }, 1000);
        } else if (ready) {
            nextQuestion();
        }
    });

    question6Div.append(title6, answer6_1Div, answer6_2Div);


    questionDiv.append(question1Div);
    root.append(questionDiv);
    document.querySelector('#app').appendChild(root);

    function tryAgain(clickElement, buttonElement, textElement) {
        let oldText = textElement.textContent;
        clickElement.addEventListener('click', () => {
            buttonElement.setAttribute('src', './assets/svgs/cutebutton_sad.svg');
            let textIndex = Math.floor(Math.random() * 4);
            textElement.textContent = failMsgs[textIndex];
            setTimeout(() => {
                buttonElement.setAttribute('src', './assets/svgs/cutebutton.svg');
                textElement.textContent = oldText;
            }, 1000);
        });
    }

    function nextQuestion() {
        var currentQuestion = questionDiv.firstChild;
        if (currentQuestion.id) {
            var question = Number(currentQuestion.id.charAt(1));
            switch (question) {
                case 1:
                    questionDiv.replaceChild(question2Div, question1Div);
                    break;
                case 2:
                    questionDiv.replaceChild(question3Div, question2Div);
                    break;
                case 3:
                    questionDiv.replaceChild(question4Div, question3Div);
                    break;
                case 4:
                    questionDiv.replaceChild(question5Div, question4Div);
                    break;
                case 5:
                    questionDiv.replaceChild(question6Div, question5Div);
                    break;
                default:
                    loadSection('hearts');
                    break;
            }
        }
    }

    function hoverAction(element, buttonElement) {
        clickable(element);
        element.addEventListener('mouseenter', () => {
            buttonElement.setAttribute('src', './assets/svgs/cutebutton_happy.svg');
        });
        element.addEventListener('mouseleave', () => {
            buttonElement.setAttribute('src', './assets/svgs/cutebutton.svg');
        });
    }
}

export function destroyQuestions() {
    // remove timers, listeners, DOM nodes
    root.remove();
}