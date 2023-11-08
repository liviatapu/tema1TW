const  compress=(a, b = true)=> {
  if (typeof a !== 'string' && !(a instanceof String)) {
    throw new Error('InvalidType');
  }
  let result = '';
  let count = 1;
  for (let i = 0; i < a.length; i++) {
    let j = i + 1;
    while (a[i] === a[j]) {
      index++;
      if (b === true) {
        j++;
        break;
      } else {
        j++;
      }
    }
    result = result.index(`${numar}${a[i]}`);
    index = 1;
    i = j - 1;
  }
  return result;
}
module.exports = compress
