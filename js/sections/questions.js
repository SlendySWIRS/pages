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
    const answer1_1Btn = document.createElement('img');
    answer1_1Btn.style.width = '384px';
	answer1_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer1_1 = document.createElement('div');
    answer1_1.classList.add("btnText2");
	answer1_1Div.append(answer1_1Btn, answer1_1);
    answer1_1.textContent = 'Pizza Funghi';
    clickable(answer1_1);
    tryAgain(answer1_1);

    const answer1_2Div = document.createElement('div');
    answer1_2Div.style.position = 'relative';
    answer1_2Div.style.width = 'fit-content';
    const answer1_2Btn = document.createElement('img');
    answer1_2Btn.style.width = '384px';
	answer1_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer1_2 = document.createElement('div');
    answer1_2.classList.add("btnText2");
	answer1_2Div.append(answer1_2Btn, answer1_2);
    answer1_2.textContent = 'Pizza Salame';
    clickable(answer1_2);
    tryAgain(answer1_2);

    const answer1_3Div = document.createElement('div');
    answer1_3Div.style.position = 'relative';
    answer1_3Div.style.width = 'fit-content';
    const answer1_3Btn = document.createElement('img');
    answer1_3Btn.style.width = '384px';
	answer1_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer1_3 = document.createElement('div');
    answer1_3.classList.add("btnText2");
	answer1_3Div.append(answer1_3Btn, answer1_3);
    answer1_3.textContent = 'Pizza Margherita';
    clickable(answer1_3);
    answer1_3.addEventListener('click', () => nextQuestion());
    const answer1_4Div = document.createElement('div');
    answer1_4Div.style.position = 'relative';
    answer1_4Div.style.width = 'fit-content';
    const answer1_4Btn = document.createElement('img');
    answer1_4Btn.style.width = '384px';
	answer1_4Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer1_4 = document.createElement('div');
    answer1_4.classList.add("btnText2");
	answer1_4Div.append(answer1_4Btn, answer1_4);
    answer1_4.textContent = 'Pizza Quattri Formaggi';
    clickable(answer1_4);
    tryAgain(answer1_4);

    question1Div.append(title1, answer1_1Div, answer1_2Div, answer1_3Div, answer1_4Div);


    const title2 = document.createElement('h3');
    title2.textContent = 'Question 2: What is the worst crime (according to you)?';

    const answer2_1Div = document.createElement('div');
    answer2_1Div.style.position = 'relative';
    answer2_1Div.style.width = 'fit-content';
    const answer2_1Btn = document.createElement('img');
    answer2_1Btn.style.width = '384px';
	answer2_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_1 = document.createElement('div');
    answer2_1.classList.add("btnText2");
	answer2_1Div.append(answer2_1Btn, answer2_1);
    answer2_1.textContent = 'Keeping merchants alive';
    clickable(answer2_1);
    tryAgain(answer2_1);

    const answer2_2Div = document.createElement('div');
    answer2_2Div.style.position = 'relative';
    answer2_2Div.style.width = 'fit-content';
    const answer2_2Btn = document.createElement('img');
    answer2_2Btn.style.width = '384px';
	answer2_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_2 = document.createElement('div');
    answer2_2.classList.add("btnText2");
	answer2_2Div.append(answer2_2Btn, answer2_2);
    answer2_2.textContent = 'Watching other people\'s streams';
    clickable(answer2_2);
    tryAgain(answer2_2);

    const answer2_3Div = document.createElement('div');
    answer2_3Div.style.position = 'relative';
    answer2_3Div.style.width = 'fit-content';
    const answer2_3Btn = document.createElement('img');
    answer2_3Btn.style.width = '384px';
	answer2_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_3 = document.createElement('div');
    answer2_3.classList.add("btnText2");
	answer2_3Div.append(answer2_3Btn, answer2_3);
    answer2_3.textContent = 'Putting pineapple where it doesn\'t belong';
    clickable(answer2_3);
    tryAgain(answer2_3);

    const answer2_4Div = document.createElement('div');
    answer2_4Div.style.position = 'relative';
    answer2_4Div.style.width = 'fit-content';
    const answer2_4Btn = document.createElement('img');
    answer2_4Btn.style.width = '384px';
	answer2_4Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_4 = document.createElement('div');
    answer2_4.classList.add("btnText2");
	answer2_4Div.append(answer2_4Btn, answer2_4);
    answer2_4.textContent = 'Leaving the basement';
    clickable(answer2_4);
    tryAgain(answer2_4);

    const answer2_5Div = document.createElement('div');
    answer2_5Div.style.position = 'relative';
    answer2_5Div.style.width = 'fit-content';
    const answer2_5Btn = document.createElement('img');
    answer2_5Btn.style.width = '384px';
	answer2_5Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer2_5 = document.createElement('div');
    answer2_5.classList.add("btnText2");
	answer2_5Div.append(answer2_5Btn, answer2_5);
    answer2_5.textContent = 'All of the above';
    clickable(answer2_5);
    answer2_5.addEventListener('click', () => nextQuestion());

    question2Div.append(title2, answer2_1Div, answer2_2Div, answer2_3Div, answer2_4Div, answer2_5Div);


    const title3 = document.createElement('h3');
    title3.textContent = 'Question 3: Have you ever participated in any sports, and if so: which?';

    const answer3_1Div = document.createElement('div');
    answer3_1Div.style.position = 'relative';
    answer3_1Div.style.width = 'fit-content';
    const answer3_1Btn = document.createElement('img');
    answer3_1Btn.style.width = '384px';
	answer3_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer3_1 = document.createElement('div');
    answer3_1.classList.add("btnText2");
	answer3_1Div.append(answer3_1Btn, answer3_1);
    answer3_1.textContent = 'No!';
    clickable(answer3_1);
    tryAgain(answer3_1);

    const answer3_2Div = document.createElement('div');
    answer3_2Div.style.position = 'relative';
    answer3_2Div.style.width = 'fit-content';
    const answer3_2Btn = document.createElement('img');
    answer3_2Btn.style.width = '384px';
	answer3_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer3_2 = document.createElement('div');
    answer3_2.classList.add("btnText2");
	answer3_2Div.append(answer3_2Btn, answer3_2);
    answer3_2.textContent = 'Yes, I used to play volleyball';
    clickable(answer3_2);
    answer3_2.addEventListener('click', () => nextQuestion());

    const answer3_3Div = document.createElement('div');
    answer3_3Div.style.position = 'relative';
    answer3_3Div.style.width = 'fit-content';
    const answer3_3Btn = document.createElement('img');
    answer3_3Btn.style.width = '384px';
	answer3_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer3_3 = document.createElement('div');
    answer3_3.classList.add("btnText2");
	answer3_3Div.append(answer3_3Btn, answer3_3);
    answer3_3.textContent = 'Yes, I am an Olympic swimming champion!';
    clickable(answer3_3);
    tryAgain(answer3_3);

    const answer3_4Div = document.createElement('div');
    answer3_4Div.style.position = 'relative';
    answer3_4Div.style.width = 'fit-content';
    const answer3_4Btn = document.createElement('img');
    answer3_4Btn.style.width = '384px';
	answer3_4Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer3_4 = document.createElement('div');
    answer3_4.classList.add("btnText2");
	answer3_4Div.append(answer3_4Btn, answer3_4);
    answer3_4.textContent = 'Sports? I only play chess (on a casual level)';
    clickable(answer3_4);
    tryAgain(answer3_4);

    question3Div.append(title3, answer3_1Div, answer3_2Div, answer3_3Div, answer3_4Div);


    const title4 = document.createElement('h3');
    title4.textContent = 'Question 4: When is your birthday?';

    const answer4_1Div = document.createElement('div');
    answer4_1Div.style.position = 'relative';
    answer4_1Div.style.width = 'fit-content';
    const answer4_1Btn = document.createElement('img');
    answer4_1Btn.style.width = '384px';
	answer4_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer4_1 = document.createElement('div');
    answer4_1.classList.add("btnText2");
	answer4_1Div.append(answer4_1Btn, answer4_1);
    answer4_1.textContent = 'On the 25th of December (By the way, my name is Jesus)';
    clickable(answer4_1);
    tryAgain(answer4_1);

    const answer4_2Div = document.createElement('div');
    answer4_2Div.style.position = 'relative';
    answer4_2Div.style.width = 'fit-content';
    const answer4_2Btn = document.createElement('img');
    answer4_2Btn.style.width = '384px';
	answer4_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer4_2 = document.createElement('div');
    answer4_2.classList.add("btnText2");
	answer4_2Div.append(answer4_2Btn, answer4_2);
    answer4_2.textContent = 'Exactly 5 days after Easter';
    clickable(answer4_2);
    tryAgain(answer4_2);

    const answer4_3Div = document.createElement('div');
    answer4_3Div.style.position = 'relative';
    answer4_3Div.style.width = 'fit-content';
    const answer4_3Btn = document.createElement('img');
    answer4_3Btn.style.width = '384px';
	answer4_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer4_3 = document.createElement('div');
    answer4_3.classList.add("btnText2");
	answer4_3Div.append(answer4_3Btn, answer4_3);
    answer4_3.textContent = 'Today, silly! (but only if we are the 8th of February now)';
    clickable(answer4_3);
    answer4_3.addEventListener('click', () => nextQuestion());

    question4Div.append(title4, answer4_1Div, answer4_2Div, answer4_3Div);


    const title5 = document.createElement('h3');
    title5.textContent = 'Question 5: Which of the following quotes (by you) fits the best after "Fire, fire, ...":';

    const answer5_1Div = document.createElement('div');
    answer5_1Div.style.position = 'relative';
    answer5_1Div.style.width = 'fit-content';
    const answer5_1Btn = document.createElement('img');
    answer5_1Btn.style.width = '384px';
	answer5_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_1 = document.createElement('div');
    answer5_1.classList.add("btnText2");
	answer5_1Div.append(answer5_1Btn, answer5_1);
    answer5_1.textContent = 'BALLS';
    clickable(answer5_1);
    tryAgain(answer5_1);

    const answer5_2Div = document.createElement('div');
    answer5_2Div.style.position = 'relative';
    answer5_2Div.style.width = 'fit-content';
    const answer5_2Btn = document.createElement('img');
    answer5_2Btn.style.width = '384px';
	answer5_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_2 = document.createElement('div');
    answer5_2.classList.add("btnText2");
	answer5_2Div.append(answer5_2Btn, answer5_2);
    answer5_2.textContent = 'Oh my days!';
    clickable(answer5_2);
    tryAgain(answer5_2);

    const answer5_3Div = document.createElement('div');
    answer5_3Div.style.position = 'relative';
    answer5_3Div.style.width = 'fit-content';
    const answer5_3Btn = document.createElement('img');
    answer5_3Btn.style.width = '384px';
	answer5_3Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_3 = document.createElement('div');
    answer5_3.classList.add("btnText2");
	answer5_3Div.append(answer5_3Btn, answer5_3);
    answer5_3.textContent = 'Backshot time';
    clickable(answer5_3);
    tryAgain(answer5_3);

    const answer5_4Div = document.createElement('div');
    answer5_4Div.style.position = 'relative';
    answer5_4Div.style.width = 'fit-content';
    const answer5_4Btn = document.createElement('img');
    answer5_4Btn.style.width = '384px';
	answer5_4Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_4 = document.createElement('div');
    answer5_4.classList.add("btnText2");
	answer5_4Div.append(answer5_4Btn, answer5_4);
    answer5_4.textContent = 'Leck meine Eier';
    clickable(answer5_4);
    answer5_4.addEventListener('click', () => nextQuestion());

    const answer5_5Div = document.createElement('div');
    answer5_5Div.style.position = 'relative';
    answer5_5Div.style.width = 'fit-content';
    const answer5_5Btn = document.createElement('img');
    answer5_5Btn.style.width = '384px';
	answer5_5Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer5_5 = document.createElement('div');
    answer5_5.classList.add("btnText2");
	answer5_5Div.append(answer5_5Btn, answer5_5);
    answer5_5.textContent = 'Who said this game is hard?';
    clickable(answer5_5);
    tryAgain(answer5_5);

    question5Div.append(title5, answer5_1Div, answer5_2Div, answer5_3Div, answer5_4Div, answer5_5Div);


    const title6 = document.createElement('h3');
    title6.textContent = 'Question 6: Do you consider yourself the cutest person alive?';

    const answer6_1Div = document.createElement('div');
    answer6_1Div.style.position = 'relative';
    answer6_1Div.style.width = 'fit-content';
    const answer6_1Btn = document.createElement('img');
    answer6_1Btn.style.width = '384px';
	answer6_1Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer6_1 = document.createElement('div');
    answer6_1.classList.add("btnText2");
	answer6_1Div.append(answer6_1Btn, answer6_1);
    answer6_1.textContent = 'Yes';
    clickable(answer6_1);
    answer6_1.addEventListener('click', () => nextQuestion());

    let clicked = false;
    let ready = false;
    const answer6_2Div = document.createElement('div');
    answer6_2Div.style.position = 'relative';
    answer6_2Div.style.width = 'fit-content';
    const answer6_2Btn = document.createElement('img');
    answer6_2Btn.style.width = '384px';
	answer6_2Btn.setAttribute('src', './assets/svgs/cutebutton.svg');
    const answer6_2 = document.createElement('div');
    answer6_2.classList.add("btnText2");
	answer6_2Div.append(answer6_2Btn, answer6_2);
    answer6_2.textContent = 'No';
    clickable(answer6_2);
    answer6_2.addEventListener('mouseenter', () => {
        if (!clicked) answer6_2.textContent = 'HEY! •`_\´•';
        else answer6_2.textContent = 'Of course! (✿◠‿◠)';
    });
    answer6_2.addEventListener('mouseleave', () => {
        if (!clicked) answer6_2.textContent = 'No!';
    });
    answer6_2.addEventListener('click', () => {
        if (!clicked) {
            clicked = true;
            answer6_2.textContent = 'Fine, let\'s play it your way!';
            setTimeout(() => {
                answer6_2.textContent = 'Of course! (✿◠‿◠)';
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

    function tryAgain(element) {
        let oldText = element.textContent;
        element.addEventListener('click', () => {
            let textIndex = Math.floor(Math.random() * 4);
            element.textContent = failMsgs[textIndex];
            setTimeout(() => { element.textContent = oldText; }, 1000);
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
}

export function destroyQuestions() {
    // remove timers, listeners, DOM nodes
    root.remove();
}