let morseCharObj = {
  "...---...": "SOS",
  ".-.-.-": ".",
  "-.-.--": "!",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};
decodeMorse = function (morseCode) {
  if (morseCode) {
    let result = "";
    let morseWords = morseCode.trim().split("   ");
    let sentence = morseWords.map((itemWord) => {
      let char = itemWord.split(" ");
      let word = char
        .map((key) => {
          return morseCharObj[key];
        })
        .join("");
      return word;
    });
    if (sentence.length > 1) {
      result = sentence.join(" ");
    } else {
      result = sentence.join(" ");
    }
    console.log(result);
    return result;
  }
};

//should return "HEY JUDE"
decodeMorse("   .... . -.--   .--- ..- -.. .    ");
//SOS
decodeMorse("...---...");
//SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', expected 'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
decodeMorse(
  "...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-"
);
