window.addEventListener('DOMContentLoaded', init);

function init() {
  // #TODO
  let synth = window.speechSynthesis;

  const voiceSelect = document.getElementById('voice-select');
  const img = document.querySelector('img[alt="Smiling face"]');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');

  let voices = [];

  function clearDropdown(selectElement) {
    while (selectElement.firstChild) {
        selectElement.removeChild(selectElement.firstChild);
    }
  }

  function populateVoiceList() {
    voices = synth.getVoices();
    clearDropdown(voiceSelect);  // Use the new function to clear the dropdown

    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})` + (voice.default ? ' — DEFAULT' : '');
        option.setAttribute("value", index);  // Set the index of the voice as the option value
        voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const selectedVoiceIndex = voiceSelect.selectedOptions[0].value;
    speak(textArea.value, voices[selectedVoiceIndex]);
  });

  function speak(text, voice) {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    if (text !== '') {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.onstart = () => {
        img.src = 'assets/images/smiling-open.png'; // Ensure the path is correct
      };
      utterance.onend = () => {
        img.src = 'assets/images/smiling.png';
      };
      synth.speak(utterance);
    }
  }
}
