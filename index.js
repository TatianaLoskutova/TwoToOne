function longest(s1, s2) {
    let res = ''
    let abc = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < abc.length; i++) {
        if (s1.includes(abc[i]) || s2.includes(abc[i])) {
            res += abc[i]
        }
    }
    return res
}