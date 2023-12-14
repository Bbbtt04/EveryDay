function merge(arr) {
    arr = arr.sort((a,b) => a.start - b.start);

    const ans = [];
    for(let i = 0; i < arr.length; ) {
        let {start: curStart, end: curEnd} = arr[i];

        let j = i + 1;
        for (; j < arr.length; j ++) {
            const {start, end} = arr[j];
            if (start > curEnd) {
                break;
            } else {
                curEnd = end;
            }
        }
        i = j;

        ans.push({
            start: curStart,
            end: curEnd
        })
    }

    return ans;
}


console.log(merge([{start: 3, end: 5}, {start: 9, end: 11}, {start: 4, end: 8}]))
