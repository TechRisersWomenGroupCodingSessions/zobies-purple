function fizzbuzz(num) {
  let char = '';
  for (let i=1; i < num + 1; i++) {
    if (i % 3 === 0) {
      char += 'Fizz\n';
    }
    else{
      char += i.toString() + '\n';
    }
    
    console.log(char);
  }
  return char.trim();
  }

module.exports = fizzbuzz;