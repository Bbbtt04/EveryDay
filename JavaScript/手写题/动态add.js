// 通过调用下面的 addRemote，实现 add 方法
// addRemote 仅能计算两个数字之和
// add 可以传入任意多个数字，返回的是这些数字之和

const addRemote = async (a, b) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000);
    });

async function add(...inputs) {
    // 你的实现
    return await inputs.reduce(async (pre,cur) => {
        const last = await pre;
        return await addRemote(last , cur)
    },0)
}

// 请用示例验证运行结果:
add(1, 2).then((result) => {
    console.log(result); // 3
});

add(3, 5, 2).then((result) => {
    console.log(result); // 10
});
