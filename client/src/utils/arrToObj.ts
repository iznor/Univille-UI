export function arrToObj(objArr:any[], keyOfId = "id") {
    return objArr.reduce(function (acc, curr) {
        acc[curr[keyOfId]] = curr;
        return acc;
    }, {});
}
