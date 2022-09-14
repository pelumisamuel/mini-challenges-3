function listSorting(needle, haystack) {
  let position = [];

  if (Array.isArray(haystack[0])) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i].lastIndexOf(needle) !== -1) {
        position.push([i, haystack[i].lastIndexOf(needle)]);
      }
    }
  } else {
    return haystack.lastIndexOf(needle);
  }
  return position.length < 1 ? -1 : position[position.length - 1];
}

module.exports = listSorting;
