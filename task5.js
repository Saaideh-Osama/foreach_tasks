function vowelCount(str) {
    let strings = str.toLowerCase().split('');
    let letters = {};
    let vowels = 'aeiou';
    
    strings.forEach(letter => {
      if (vowels.indexOf(letter) !== -1) {
        letters[letter]
          ? letters[letter]++
          : letters[letter] = 1;
      }    
    });
    
    return letters;
  }
  
  console.log(vowelCount("Elie"));
  console.log(vowelCount('osama'))