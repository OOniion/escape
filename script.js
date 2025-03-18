document.getElementById("start-game").addEventListener("click", function() {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("challenge-container").classList.remove("hidden");
    startGame();
});

const challenges = [
    { title: "Desafio 1", description: "Qual é o presente que um pinguim dá à sua amada?", answer: "pedra" },
    { title: "Desafio 2", description: "O que os pinguins fazem para se aquecer no frio?", answer: "abraço" },
    { title: "Desafio 3", description: "Qual é a cor clássica de um pinguim?", answer: "preto e branco" },
    { title: "Desafio 4", description: "Onde os pinguins vivem?", answer: "antártida" },
    { title: "Desafio 5", description: "Quem é o teu pinguim?", answer: "raquel" }
];

let currentChallenge = 0;

function startGame() {
    showChallenge();
}

function showChallenge() {
    if (currentChallenge < challenges.length) {
        document.getElementById("challenge-title").innerText = challenges[currentChallenge].title;
        document.getElementById("challenge-description").innerText = challenges[currentChallenge].description;
    } else {
        document.getElementById("challenge-container").innerHTML = 
        "<h2>Parabéns, meu amor! Vai agora para o próximo desafio! 🐧💖 <a href=\"https://ooniion.github.io/escape2/\">Escape Room 2</a></h2>";
    
    }
}

document.getElementById("submit-answer").addEventListener("click", function() {
    let userAnswer = document.getElementById("challenge-input").value.toLowerCase();
    if (userAnswer === challenges[currentChallenge].answer) {
        currentChallenge++;
        document.getElementById("challenge-input").value = "";
        showChallenge();
    } else {
        document.getElementById("feedback").innerText = "Tente novamente!";
    }
});