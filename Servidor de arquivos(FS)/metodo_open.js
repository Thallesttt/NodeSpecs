var fs = require('fs');
fs.open('meunovoarquivo.txt','w',(err,file)=>{
    if (err) throw err;
    console.log('Saved!');
});

/*var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
*/

