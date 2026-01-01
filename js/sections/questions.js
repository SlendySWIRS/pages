// js/sections/questions.js
import { loadSection } from '../main.js'
import { hoverOverClickable, hoverOutClickable } from '../utils.js'

let root;
const failMsgs = [];
failMsgs.push("Nope, not this one", "Try again", "There should be a better response", "Are you sure?");

export function initQuestions() {
    console.log("QUESTIONS");
    root = document.createElement('section');
    root.id = 'questions';

    /* ---------- First block ---------- */

    root.classList.add('center')
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

    const title1 = document.createElement('h3');
    title1.textContent = 'First question (out of 5):';

    const question1 = document.createElement('p');
    question1.textContent = 'What is your favorite pizza flavour? (to eat, so pizzapotomus is not an answer)';

    const answer1_1 = document.createElement('p');
    answer1_1.textContent = 'Pizza Funghi';
    clickable(answer1_1);
    tryAgain(answer1_1);

    const answer1_2 = document.createElement('p');
    answer1_2.textContent = 'Pizza Salame';
    clickable(answer1_2);
    tryAgain(answer1_2);

    const answer1_3 = document.createElement('p');
    answer1_3.textContent = 'Pizza Margherita';
    clickable(answer1_3);
    answer1_3.addEventListener('click', () => nextQuestion());
    const answer1_4 = document.createElement('p');
    answer1_4.textContent = 'Pizza Quattri Formaggi';
    clickable(answer1_4);
    tryAgain(answer1_4);

    question1Div.append(title1, question1, answer1_1, answer1_2, answer1_3, answer1_4);


    const title2 = document.createElement('h3');
    title2.textContent = 'Question 2:';

    const question2 = document.createElement('p');
    question2.textContent = 'What is the worst crime (according to you)?';

    const answer2_1 = document.createElement('p');
    answer2_1.textContent = 'Keeping merchants alive';
    clickable(answer2_1);
    tryAgain(answer2_1);

    const answer2_2 = document.createElement('p');
    answer2_2.textContent = 'Watching other people\'s streams';
    clickable(answer2_2);
    tryAgain(answer2_2);

    const answer2_3 = document.createElement('p');
    answer2_3.textContent = 'Putting pineapple where it doesn\'t belong';
    clickable(answer2_3);
    tryAgain(answer2_3);

    const answer2_4 = document.createElement('p');
    answer2_4.textContent = 'Leaving the basement';
    clickable(answer2_4);
    tryAgain(answer2_4);

    const answer2_5 = document.createElement('p');
    answer2_5.textContent = 'All of the above';
    clickable(answer2_5);
    answer2_5.addEventListener('click', () => nextQuestion());

    question2Div.append(title2, question2, answer2_1, answer2_2, answer2_3, answer2_4, answer2_5);


    const title3 = document.createElement('h3');
    title3.textContent = 'Question 3 (3 to go now!):';

    const question3 = document.createElement('p');
    question3.textContent = 'Have you ever participated in any sports, and if so: which?';

    const answer3_1 = document.createElement('p');
    answer3_1.textContent = 'No!';
    clickable(answer3_1);
    tryAgain(answer3_1);

    const answer3_2 = document.createElement('p');
    answer3_2.textContent = 'Yes, I used to play volleyball';
    clickable(answer3_2);
    answer3_2.addEventListener('click', () => nextQuestion());

    const answer3_3 = document.createElement('p');
    answer3_3.textContent = 'Yes, I am an Olympic swimming champion!';
    clickable(answer3_3);
    tryAgain(answer3_3);

    const answer3_4 = document.createElement('p');
    answer3_4.textContent = 'Sports? I only play chess (on a casual level)';
    clickable(answer3_4);
    tryAgain(answer3_4);

    question3Div.append(title3, question3, answer3_1, answer3_2, answer3_3, answer3_4);


    const title4 = document.createElement('h3');
    title4.textContent = 'Question 4:';

    const question4 = document.createElement('p');
    question4.textContent = 'When is your birthday?';

    const answer4_1 = document.createElement('p');
    answer4_1.textContent = 'On the 25th of December (By the way, my name is Jesus)';
    clickable(answer4_1);
    tryAgain(answer4_1);

    const answer4_2 = document.createElement('p');
    answer4_2.textContent = 'Exactly 5 days after the start of summer';
    clickable(answer4_2);
    tryAgain(answer4_2);

    const answer4_3 = document.createElement('p');
    answer4_3.textContent = 'Today, silly! (but only if we are the 8th of February now)';
    clickable(answer4_3);
    answer4_3.addEventListener('click', () => nextQuestion());



    question4Div.append(title4, question4, answer4_1, answer4_2, answer4_3);


    const title5 = document.createElement('h3');
    title5.textContent = 'Last question (finally):';

    const question5 = document.createElement('p');
    question5.textContent = 'Do you consider yourself the cutest person alive?';

    const answer5_1 = document.createElement('p');
    answer5_1.textContent = 'Yes';
    clickable(answer5_1);
    answer5_1.addEventListener('click', () => nextQuestion());

    let clicked = false;
    let ready = false;
    const answer5_2 = document.createElement('p');
    answer5_2.textContent = 'No';
    clickable(answer5_2);
    answer5_2.addEventListener('mouseenter', () => {
        if (!clicked) answer5_2.textContent = 'HEY! •`_\´•';
        else answer5_2.textContent = 'Of course! (✿◠‿◠)';
    });
    answer5_2.addEventListener('mouseleave', () => {
        if (!clicked) answer5_2.textContent = 'No!';
    });
    answer5_2.addEventListener('click', () => {
        if (!clicked) {
            clicked = true;
            answer5_2.textContent = 'Fine, let\'s play it your way!';
            setTimeout(() => {
                answer5_2.textContent = 'Of course! (✿◠‿◠)';
                ready = true;
            }, 1000);
        } else if (ready) {
            nextQuestion();
        }
    });

    question5Div.append(title5, question5, answer5_1, answer5_2);


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
                default:
                    loadSection('hearts');
                    break;
            }
        }
    }

    function clickable(element) {
        element.addEventListener('mouseenter', () => hoverOverClickable());
        element.addEventListener('mouseleave', () => hoverOutClickable());
    }
}

export function destroyQuestions() {
    // remove timers, listeners, DOM nodes
    root.remove();
}