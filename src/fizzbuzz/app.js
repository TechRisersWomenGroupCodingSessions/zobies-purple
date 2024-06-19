function fizzbuzz(num) {
  let char = '';
  for (let i=1; i < num; i++) {
    char += i.toString() + '\n';
  }
  return char.trim();
  }

module.exports = fizzbuzz;