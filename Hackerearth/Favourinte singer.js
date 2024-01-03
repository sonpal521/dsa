function favourite_singer(n,playlist) {
    // Count the frequency of each singer
    const singerCount = {};
    for (let i = 0; i < n; i++) {
      const singer = playlist[i];
      if (singerCount[singer]) {
        singerCount[singer]++;
      } else {
        singerCount[singer] = 1;
      }
    }
    
    // Find the maximum frequency
    let maxFrequency = 0;
    for (const singer in singerCount) {
      if (singerCount[singer] > maxFrequency) {
        maxFrequency = singerCount[singer];
      }
    }
    
    // Count the number of favorite singers
    let favoriteSingerCount = 0;
    for (const singer in singerCount) {
      if (singerCount[singer] === maxFrequency) {
        favoriteSingerCount++;
      }
    }
    
    return favoriteSingerCount;
  }