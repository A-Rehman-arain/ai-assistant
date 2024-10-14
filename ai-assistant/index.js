let box = document.querySelector(".box");
let btn =  document.querySelector("button");

const speakFunc = (input) =>{
    let speakInput = new SpeechSynthesisUtterance(input);
    speakInput.pitch = 1;
    speakInput.pitch = 1;
   speakInput.volume = 1;
   speakInput.lang = 'urdu-pk'
    window.speechSynthesis.speak(speakInput);

}
window.onload = ()=>{
    // speakFunc("hello sir")
    greetingFunc();
}

const greetingFunc = () =>{
    let date = new Date();
    let hour = date.getHours();
    if(hour >=0 && hour < 12){
        speakFunc("Good morning sir, How can i help you !")
    }else if(hour >=12 && hour < 16){
        speakFunc("Good afternoon sir, How can i help you !")
    }else{
        speakFunc("Good evening sir, How can i help you! ")
    }
}

const startVoiceInput = () =>{
    if('webkitSpeechRecognition' in window){
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = (e) => {
            let spokenText = e.results[0][0].transcript;
            handleCommands(spokenText.toLowerCase());
            box.classList.remove("btn-box");
            btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
        }
        recognition.start();
    }else("Your Browser dose not support voice input !")
    
}

btn.onclick = () =>{
    box.classList.add("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
}


const handleCommands = (command) =>{
    // console.log(command)
    if(command.includes("hi") || command.includes("hello") || command.includes("hey  abdul")){
        speakFunc("Hello  sir, How Can I Help You !")
    }else if(command.includes("who are you")){
        speakFunc("I Am Virtual Assistant!")
    }else if(command.includes("who developed you")){
        speakFunc("Developed by code with Abdul")
    }
    else if(command.includes("how are you")){
        speakFunc("I'm doing great, thank you! How about you?")
    }
    else if(command.includes("open github")){
        speakFunc("Opening... Github")
        window.open("https://github.com/A-Rehman-arain")
    }
    else if(command.includes("open chat gpt")){
        speakFunc("Opening... Chat GPT")
        window.open("https://chatgpt.com/c/670d69b5-ad14-800e-bf8e-c1f99b0ce196")
    }
    else if(command.includes("open youtube")){
        speakFunc("Opening... youtube")
        window.open("https://www.youtube.com")
    }
    else if(command.includes("open calculator")){
        speakFunc("Opening... calculator, be patience")
        window.open("calculator://")
    }
    else if(command.includes("tell me time")){
       let time = Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'})
        speakFunc(time); 

    }
   
    else if(command.includes("open google")){
        speakFunc("Opening Google")
        window.open("https://www.Google.com")
    }else {
       speakFunc(`This is, What i Found on Internet regarding ${command}`) 
     window.open(`https://www.Google.com/search?q=${command}`)
    }
    
}