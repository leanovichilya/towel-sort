
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }

    matrix.map((item, index) => index % 2 !== 0 ? item.reverse() : item);
    return [].concat(...matrix);
};
