const fs = require('fs');

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', (err, data) => {
  if (err === null){
    console.log('Poprawnie odczytano plik.', data);

    let text = "";
    for(let i = 0; i < data.length; i++){
      if (i % 2 != 0) {
        text += data[i].toUpperCase();
      } else {
        text += data[i].toLowerCase();
      }
    }

    fs.writeFile('./data/zadanieDnia/test.txt', text, err => {
      if (err === null){
        console.log('Zapisano poprawnie!');
      } else {
        console.log('Błąd podczas zapisu pliku!', err);
      }
    });

  } else {
    console.log('Błąd podczas odczytu pliku!', err);
  }
});
