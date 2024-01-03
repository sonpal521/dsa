function zoos_pair(zoo) {
    let zCount = 0;
    let oCount = 0;
   
    for (let i = 0; i < zoo.length; i++) {
      if (zoo[i] === 'z') {
        zCount++;
      } else if (zoo[i] === 'o') {
        oCount++;
      }
    }
   
    if (2 * zCount === oCount) {
      return 'Yes';
    } else {
      return 'No';
    }
  }