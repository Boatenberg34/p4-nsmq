const mainDisplay = document.getElementById("quizRoundPage");
mainDisplay.style.display = "none";

const footerDisplay = document.getElementById("round-footer");
footerDisplay.style.display = "none";

const initializer = document.getElementById("initializer");

 // Get the modal
 var modal = document.getElementById("quizPromptModal");

 // Function to open the modal
 function openModal() {
     modal.style.display = "block";
 }

 // Function to close the modal
 function closeModal() {
     modal.style.display = "none";
 }

function startTheQuiz() {
    closeModal();
    alert("Great! Let's get started.");
    initializer.style.display = "none";
    mainDisplay.style.display = "block";
    startQuiz();
}

        const questions = [
            {
                "topic": "Mathematics",
                "text": "Two angles are supplementary, and their difference is \(50^{\circ}\), find the measures of the angles.",
                "answer": "\( 115^{\circ}, 65^{\circ} \) let angles be \( \mathrm{x} \) and \( \mathrm{y} . \) \( \mathrm{x} \) + \( \mathrm{y} \), and \( \mathrm{x} \) - \( \mathrm{y} = 50\), \( 2\mathrm{x} = 230 \) and \( \mathrm{x} = 115 \), \( \mathrm{y} = 65 \)"
            },
            {
                "topic": "Mathematics",
                "text": "Two angles are complementary and the sum of twice one angle and thrice the other angle is 2200 . Find the measures of the angles.",
                "answer": "$50,40^{\\circ}$.\\n$x+y=90,2 x+3 y=220$\\n$$\\n2 x+2 y=180 \\quad y=40 \\text { and } x=50\\n$$"
            },
            {
                "topic": "Physics",
                "text": "An incandescent source emits light because it is ....",
                "answer": "Hot"
            },
            {
                "topic": "Physics",
                "text": "Heat is spread through a liquid by the process of....",
                "answer": "Convection"
            },
            {
                "topic": "Biology",
                "text": "What are cusps?",
                "answer": "They are the raised surfaces of premolars and molars (they are also flaps that form part of the valves of the heart)"
            },
            {
                "topic": "Biology",
                "text": "What is renal pelvis?",
                "answer": "It is the expanded initial part of the mammalian ureter into which the collecting ducts of the kidneys empty."
            },
            {
                "topic": "Chemistry",
                "text": "Which class of alkanols when oxidized forms Alkanones? (1 attempt)",
                "answer": "Secondary Alkanols."
            },
            {
                "topic": "Chemistry",
                "text": "What is the functional group in Alkanes?",
                "answer": "Alkanes do not have any functional group."
            },
            {
                "topic": "Mathematics",
                "text": "Solve the quadratic equation $3 \\mathrm{x}^{2}-\\mathrm{x}-2=0$",
                "answer": "$x=1$, or $x=-2 \\/ 3$\\n$3 x^{2}-x-2=3 x^{2}-3 x+2 x-2=3 x(x-1)+2(x-1)$\\nHence $\\mathrm{x}=1$ or $\\mathrm{x}=-2 \\/ 3$\\n$$\\n=(3 x+2)(x-1)=0\\n$$"
            },
            {
                "topic": "Mathematics",
                "text": "Solve the quadratic equation $2 x^{2}+4 x-6=0$",
                "answer": "$x=-3$, or $x=1$\\n$2 x^{2}+4 x-6=2\\left(x^{2}+2 x-3\\right)=2(x+3)(x-1)=0$\\nHence $\\mathrm{x}=-3$, or $\\mathrm{x}=1$"
            },
            {
                "topic": "Physics",
                "text": "In the following questions, you are given a set of derived units. Give the corresponding S.I units. (1 attempt) $\\quad 1 \\mathrm{kgm} \\/ \\mathrm{s}^{2}$ is equivalent to $\\ldots$.",
                "answer": "1 Newton"
            },
            {
                "topic": "Physics",
                "text": "In the following questions, you are given a set of derived units. Give the corresponding S.I units. (1 attempt)  $1 \\mathrm{~N} \\/ \\mathrm{m}^{2}$ is equivalent to",
                "answer": "1 Pascal."
            },
            {
                "topic": "Biology",
                "text": "Which cellular organelle in animal cells forms vesicles that give rise to lysosomes?",
                "answer": "Golgi body (or Golgi apparatus)"
            },
            {
                "topic": "Biology",
                "text": "What event just precedes the division of the nucleus of a cell? (1attempt)",
                "answer": "Duplication of DNA."
            },
            {
                "topic": "Chemistry",
                "text": "Name or identify one Group of elements in the Periodic Table that tends to form divalent anions.",
                "answer": "Group VI, O, S, etc."
            },
            {
                "topic": "Chemistry",
                "text": "Name one group of elements in the Periodic Table that tends to form trivalent cations.",
                "answer": "Group III Al, Ga, In etc."
            }
        ];

let currentQuestionIndex = 0;

function startQuiz() {
    displayQuestion(currentQuestionIndex);
}

function displayQuestion(index) {
    const question = questions[index];
    const questionNumber = document.getElementById("question_number");
    questionNumber.innerHTML = `
    ${index + 1}`;
    const questionDiv = document.getElementById("question_div");
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<h4>${question.text}</h4>`;
    // container.appendChild(questionDiv);

    // questionDiv.style.color = "white";
    document.getElementsByClassName("courseinnerHTML") = `${question.topic}`;
                
    document.getElementsByClassName("answeredinnerHTML") = `${index + 1}`;
                
    // <button onclick="showAnswer(${inde">Show Answer</button>
    // <p class="answer" id="answer-${indexstyle="display: none;">${question.answer}</p>

    MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
        },
        options: {
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        }
    };

    // Ensure MathJax processes the new content
    MathJax.typesetPromise()
        .then(() => {
            console.log('MathJax typesetting complete.');
        })
        .catch((err) => console.error('MathJax typesetting failed:', err));
}
const typeInto = document.getElementById("type_into");
typeInto.style.display = "none";

function openInput(){
    typeInto.style.display = "block";
}
function closeInput(){
    typeInto.style.display = "none";
}

        function showAnswer(index) {
            const answer = document.getElementById(`answer-${index}`);
            answer.style.display = 'block';
            
            // Move to the next question
            currentQuestionIndex++;
            
            // If there are more questions, display the next one
            if (currentQuestionIndex < questions.length) {
                setTimeout(() => {
                    displayQuestion(currentQuestionIndex);
                }, 10000); // Adjust delay as needed
            }
        }

// Function to start the countdown
function startCountdown(seconds) {
    let remainingTime = seconds;
    const timerElement = document.getElementById('timer');
    const alarmAudio = document.getElementById('alarmAudio');

    const countdownInterval = setInterval(() => {
        const mins = Math.floor(remainingTime / 60);
        const secs = remainingTime % 60;
        const timeFormat = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        timerElement.textContent = timeFormat;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "Time's up!";
            alarmAudio.play();
        } else {
            remainingTime -= 1;
        }
    }, 1000);
}

// Start countdown from 10 seconds
// startCountdown(seconds);

// Microphone access and recording
let mediaRecorder;
        let audioChunks = [];
        startButton = document.getElementById('start-btn');
        // startButton.onclick.textContent = "recording";
        startButton.onclick = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                audioChunks = [];
                const formData = new FormData();
                formData.append('audio', audioBlob);

                await fetch('/process_audio', {
                    method: 'POST',
                    body: formData
                });
            };

            mediaRecorder.start();
            document.getElementById('stop-btn').disabled = false;
        };

        document.getElementById('stop-btn').onclick = () => {
            mediaRecorder.stop();
            document.getElementById('stop-btn').disabled = true;
        };
