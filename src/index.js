
exports.min = function min (array) {
    let min = Math.min.apply(null, array);
    if (!array || !array.length) {
        min = '0';
    }
    return min;
};

exports.max = function max (array) {
    let max= Math.max.apply(null, array);
    if (!array || !array.length) {
        max = '0';
    }
    return max;
};

exports.avg = function avg (array) {
    if (!array || array.length === 0) {
        return 0;
    };
    let avg = (array.reduce((sum, current) => sum + current, 0))/array.length;
    return avg;
};
