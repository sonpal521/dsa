
function checkPossibility(s1, s2) {
    const mp = new Map();
    let cnt = 0;
    const n = s1.length;

    for (let i = 0; i < n; i++) {
        if (s1[i] === '?') {
            cnt++;
        } else {
            if (mp.has(s1[i])) {
                mp.set(s1[i], mp.get(s1[i]) + 1);
            } else {
                mp.set(s1[i], 1);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (s2[i] !== '?') {
            if (mp.has(s2[i])) {
                mp.set(s2[i], mp.get(s2[i]) - 1);
                if (mp.get(s2[i]) === 0) {
                    mp.delete(s2[i]);
                }
            } else if (cnt !== 0) {
                cnt--;
            } else {
                return "NO";
            }
        }
    }

    return "YES";
}
let s1    = "aaa?a"
let s2    = "bbbb?"
console.log(checkPossibility(s1, s2));