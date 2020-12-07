try {
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'es-ES';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  //reconocimiento de voz
  document.getElementById("voiceRec").onclick = function () {
    recognition.start();
  };
  recognition.onresult = function (event) {
    let input = event.results[0][0].transcript;
    let arrayWords = input.split(' ');
    output(arrayWords, input);
  }
  recognition.onspeechend = function () {
    recognition.stop();
  }
} catch { }

//abre el chat
function openChat() {
  let browser = getBrowser();
  //micro desabilitado en firefox

  if (browser == "chrome") {
    document.getElementById("voiceRec").style.display = "inline";
  } else {
    document.getElementById("voiceRec").style.display = "none";
  }
  document.getElementById("input").style.display = "inline";
  document.getElementById("btn").style.display = "none";
  addChat("hola soy tu asistente de fisioproyectos, ¿en que puedo ayudarte?")
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      let input = inputField.value;
      console.log(input)
      inputField.value = "";
      let arrayWords = input.split(' ');
      output(arrayWords, input);
    }
  });
});

function output(arrayWords, inputComplete) {
  let product;
  let text;

  for (let x = 0; x < arrayWords.length; x++) {

    text = arrayWords[x].toLowerCase().trim();
    console.log(text)

    if (compare(prompts, replies, text)) {
      product = compare(prompts, replies, text);
    }
    if (product != null) {
      addChat(product, inputComplete);
      input = ""
      break;
    }
  }

  if (product == null) {
    product = alternative[Math.floor(Math.random() * alternative.length)];
    addChat(product, inputComplete);
  }

}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(product, inputComplete) {
  const messagesContainer = document.getElementById("messages");


  if (inputComplete != null) {

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${inputComplete}</span>`;
    messagesContainer.appendChild(userDiv);

  }


  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "avatar.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    let link = returnLink(product)
    if (link != null) {
      botText.innerHTML = `<a href=${link}>${product}</a>`;
    } else {
      botText.innerText = `${product}`;
    }
    //textToSpeech(product)
  }, 2000
  )
}
function returnLink(product) {

  const found = replies.findIndex(elemento => elemento == product)
  switch (found) {
    case 0:
      return "https://fisioproyectos.com/fisioterapia-personalizada/";
    case 1:
      return "https://fisioproyectos.com/dietista-y-nutricion/";
    case 2:
      return "https://fisioproyectos.com/psicologia/";
    case 3:
      return "https://fisioproyectos.com/podologia-fisioproyectos/";
    case 4:
      return "https://fisioproyectos.com/entrenamiento-personal/";
    case 5:
      return "https://fisioproyectos.com/clases-de-yogalates-en-tenerife/";
    case 6:
      return "https://fisioproyectos.com/clases-de-baile-en-tenerife/";
    case 7:
      return "https://fisioproyectos.com/clases-de-baile-en-tenerife/";
    case 8:
      return "https://api.whatsapp.com/send/?phone=34646280592&text=Hola%2C+me+gustar%C3%ADa+reservar+una+sala+%EF%BF%BD-Gym+7%E2%82%AC%2Fh-Despacho+5%E2%82%AC%2Fh&app_absent=0";
    case 10:
      return "https://goo.gl/maps/2iYgxwCo2jEj1jBZ8"
    case 11:
      return "tel:+34 646280592"
    case 12:
      return "mailto:fisioproyectos2014@gmail.com"
  }




}