function binary_search(arr,target) {
    const len = arr.length;
    let l = 0, r = len - 1;

    while(l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (target === arr[mid]) {
            return mid;
        } else if(target > arr[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return -1;
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,11,11,11,22,33,44];
console.log(binary_search(arr,11))
