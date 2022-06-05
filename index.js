function deepclone(obj) {
    let res = {};
    let createTree = (obj, res) => {
        for (let key in obj) {
            if ((/boolean|number|string/).test(typeof obj[key])) {
                res[key] = obj[key];
            } else {
                res[key] = {};
                createTree(obj[key], res[key]);
            }
        }
    }
    createTree(obj, res);
    return res;
}

