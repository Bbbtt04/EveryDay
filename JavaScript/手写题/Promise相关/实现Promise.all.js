_all = function (promises) {
    if(typeof promises[Symbol.iterator] !== 'function') {
        throw new TypeError(`${promises} is not iterable`)
    }
    return new Promise((resolve, reject) => {
        let result = []
        let counter = 0
        promises.forEach((item,index) => {
           Promise.resolve(item).then(
               (res) => {
                   result[counter] = item;
                   counter ++;
               }
           ).catch(err => {
               reject(err)
           })
        })
        if(result.length === promises.length) {
            resolve(result)
        }
    })
}


const promises = [
    new Promise((resolve, reject) => {resolve(1)}),
    new Promise((resolve, reject) => {resolve(2)}),
    new Promise((resolve, reject) => {resolve(3)}),
]

let a = Promise.all(promises).then(res => {
        console.log("123",res)
    },
    err => {
        console.log("error：",err)
    })

let b = _all(promises).then(res => {
    console.log(res)
},err => {
    console.log("error：",err)
}).then(res => {
    console.log(res)
})
