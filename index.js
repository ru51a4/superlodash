function deepclone(obj) {
    let res = (Array.isArray(obj)) ? [] : {};
    let createTree = (obj, res, prevIsArray) => {
        for (let key in obj) {
            if ((/boolean|number|string|null/).test(typeof obj[key])) {
                if (prevIsArray) {
                    res.push(obj[key])
                } else {
                    res[key] = obj[key];
                }
            } else {
                res[key] = (Array.isArray(obj[key])) ? [] : {};
                createTree(obj[key], res[key], Array.isArray(obj[key]));
            }
        }
    }
    createTree(obj, res, Array.isArray(obj));
    return res;
}


