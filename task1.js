const string = 'Привет! Как дела?';
    const vowels = ['а', 'е', 'о', 'ы', 'у', 'я', 'ю', 'ё', 'э', 'и'];
    
    function getVowels(element) {
      let answer = "";

      for(let i=0; i < element.length; i++){
        let currentLetter = element[i].toLowerCase();

        if (vowels.includes(currentLetter)) {
          answer += currentLetter;
        }
      }

      return answer;
    }
    console.log(getVowels(string));
