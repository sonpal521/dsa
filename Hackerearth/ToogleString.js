function swapCase(n, s) {
    var swapped = "";
    for (var i = 0; i < n; i++) {
      var char = s[i];
      if (char === char.toUpperCase()) {
        swapped += char.toLowerCase();
      } else {
        swapped += char.toUpperCase();
      }
    }
    return swapped;
  }
  