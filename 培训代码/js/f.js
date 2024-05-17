// 二维数组操作 三维数组 
// 创建一个二维数组
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][1])

for (let index = 0; index < matrix.length; index++) {
    const itemAry = matrix[index];
    for (let index = 0; index < itemAry.length; index++) {
        const item = itemAry[index];
        console.log(item);
        // 可以在这里对每一项进行操作 
    }
}
