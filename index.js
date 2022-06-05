function deepclone(obj) {
    let res = (Array.isArray(obj)) ? [] : {};
    let deep = (obj, res, prevIsArray) => {
        for (let key in obj) {
            if ((/boolean|number|string|null/).test(typeof obj[key])) {
                if (prevIsArray) {
                    res.push(obj[key])
                } else {
                    res[key] = obj[key];
                }
            } else {
                res[key] = (Array.isArray(obj[key])) ? [] : {};
                deep(obj[key], res[key], Array.isArray(obj[key]));
            }
        }
    }
    deep(obj, res, Array.isArray(obj));
    return res;
}

function eq(a, b) {
    for (let p in a) {
        if ((/boolean|number|string|null/).test(typeof a[p])) {
            if (a[p] !== b[p]) {
                return false;
            }
        } else {
            if (!eq(a[p], b[p])) {
                return false;
            }
        }
    }
    return true;
}
