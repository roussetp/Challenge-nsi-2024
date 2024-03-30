/*MENAL*/
const quizQuestions = [
    {
        question: "Quelle est la pyramide emblématique du Louvre ?",
        options: ["Pyramide de Gizeh", "Pyramide du Louvre", "Pyramide du Musée", "Pyramide Inversée"],
        correctAnswer: "Pyramide du Louvre"
    },
    {
        question: "Quelle œuvre célèbre est exposée au Louvre?",
        options: ["La Joconde", "La Nuit étoilée", "Le Cri", "Les Tournesols"],
        correctAnswer: "La Joconde"
    },
    {
        question: "Quand a été inauguré le Musée du Louvre ?",
        options: ["1793", "1993","1865"],
        correctAnswer: "1793"
    },
    {
        question:"Combien de visiteurs le Louvre accueille-t-il en moyenne chaque année ?",
        options:["20 millons","9 millions","10 millions"],
        correctAnswer:" Le Louvre accueille en moyenne plus de 9 millions de visiteurs chaque année.",
    },
    {
        question:"Le Louvre était à l'origine un palais royal. Qui était le roi associé à sa construction initiale ?",
        options:[" Philippe Auguste"," François 1er"," Charles V"],
        correctAnswer:"Le roi associé à la construction initiale du Louvre est le roi Philippe Auguste.",
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const currentQuizQuestion = quizQuestions[currentQuestion];

    questionElement.textContent = currentQuizQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuizQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const resultElement = document.getElementById("result");

    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect!";
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        resultElement.textContent = `Votre score final est ${score} sur ${quizQuestions.length}.`;
        document.getElementById("options-container").innerHTML = "";
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        selectAnswer(selectedOption.value);
    } else {
        alert("Veuillez sélectionner une option.");
    }

}

function speak(text, rate = 2.25) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate; // Ajustez la vitesse ici
    synth.speak(utterance);
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const currentQuizQuestion = quizQuestions[currentQuestion];

    questionElement.textContent = currentQuizQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuizQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            speak(option); // Ajout de la synthèse vocale pour lire l'option
            selectAnswer(option);
        });
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const resultElement = document.getElementById("result");

    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
        speak("Correct!"); // Synthèse vocale pour annoncer la réponse correcte
    } else {
        resultElement.textContent = "Incorrect!";
        speak("Incorrect!"); // Synthèse vocale pour annoncer la réponse incorrecte
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        resultElement.textContent = `Votre score final est ${score} sur ${quizQuestions.length}.`;
        document.getElementById("options-container").innerHTML = "";
        speak(`Votre score final est ${score} sur ${quizQuestions.length}.`); // Synthèse vocale pour annoncer le score final
        speak("Merci infiniment d'avoir pris le temps de visiter mon site fait par Erwan Menal! Je suis reconnaissants de votre présence. N'hésitez pas à revenir bientôt. À bientôt et bonne journée !") 
    }
}

// ...

// Assurez-vous d'avoir une voix sélectionnée pour la synthèse vocale
if ('speechSynthesis' in window) {
    synth = window.speechSynthesis;
    const voices = synth.getVoices();
    if (voices.length > 0) {
        synth.voice = voices[0];
    }
}

displayQuestion();
