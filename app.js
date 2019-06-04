const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = [
	"Hello! I'm good! How about You?",
	"I am Okay, just looking for some fun, you busy?",
	"This world is going to die soon and here you are asking an AI, How they are feeling?",
	"I am fine! Thanks for asking.",
	"I am good but since Aditya is still working on me, I am going to be great soon!",
	"I am good also ask my creator Aditya about his life",
	"I am great, Enjoying my digital life",
	"Damn! good... Now go to hell, I don't care!"
];

const weather = [
	"Weather is fine, Anyway you never leave your home, so chill",
	"This is Summer Dude, what can you expect!",
	"Summer madnesss, waiting for the rain!",
	"Summer is already here",
	"Winter is coming my Love!"
];

recognition.onstart = function() {
	console.log("Speech Recognition Services are Activated");
};

recognition.onresult = function(event) {
	const currentText = event.resultIndex;
	const transcript = event.results[currentText][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
};

btn.addEventListener("click", () => {
	recognition.start();
});

function readOutLoud(message) {
	const speech = new SpeechSynthesisUtterance();
	speech.text =
		"Hey! I didn't get that, Aditya is still working on me! Give me some time to understand you more";
	if (message.includes("how are you")) {
		const aiReply = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = aiReply;
	}
	if (message.includes("how is the weather")) {
		const aiReply2 = weather[Math.floor(Math.random() * weather.length)];
		speech.text = aiReply2;
	}

	speech.pitch = 1;
	speech.rate = 1;
	speech.volume = 1;
	window.speechSynthesis.speak(speech);
}
