

const text = document.getElementById("text");
const speakbtn = document.getElementById("speakBtn");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "hi-IN";
recognition.continuous = false;

function listenSpeech() {
  return new Promise((resolve, reject) => {
    recognition.start();
    recognition.onresult = (event) => {
      resolve(event.results[0][0].transcript);
    };
    recognition.onerror = (event) => {
      reject(event.error);
    };
  });
};
speakbtn.addEventListener("click", async () => {
    try { 
      text.value="Listning...";
      const speech = await listenSpeech();
      text.value = speech;
      const utterance = new SpeechSynthesisUtterance(speech);
      utterance.lang = "hi-IN";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      text.value = "COULD NOT WORK PROPERLY";
      console.log(err);
    }
  
});
