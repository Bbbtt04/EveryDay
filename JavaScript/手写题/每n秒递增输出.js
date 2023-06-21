// function resolve(n){
//     if(n > end) return;
//     let timer = setTimeout(() => {
//         console.log(n)
//         clearInterval(timer);
//         resolve(++n)
//     },n * 1000)
// }
// resolve(1)

function delay(n){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(n)
        },n * 1000)
    })
}
function resolve(n) {
    if(n > end) return;
    delay(n).then(res => {
        console.log(res)
        resolve(++n)
    })
}
