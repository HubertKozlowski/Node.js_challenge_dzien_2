const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
  if (err === null) {
    console.log('Poprawnie odczytano plik.', data);

    const arr = JSON.parse(data);

    const sum = arr.reduce((a, b) => a + b);

    console.log('Suma: ' + sum);

    fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
      if (err === null){
        console.log('Zapisano poprawnie!');
      } else {
        console.log('Błąd podczas zapisu pliku!', err);
      }
    });
  } else {
    console.log('Błąd podczas odczytu pliku!', err);
  }
})
