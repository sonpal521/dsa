function minMaxCloudSound(l,r,s){
    const min = Math.ceil(l/s);
    const max = Math.floor(r/s);

    if(min * s >= 1 && min* s <= r && max * s >= 1 && max * s <=r){
        return `${min} ${max}`;
    } else {
      return '-1 -1'; // Return '0 0' when there's no valid range for clouds
    }
    
}