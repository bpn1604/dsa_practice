

//Longest Substring without repetition
let str = "ababc"

let maxL = 0
let start =0
let map = new Map()
for (let end = 0;end<str.length;end++) {
    if(map.has(str[end])) {
        start = Math.max(start, map.get(str[end])+1)
    }
    map.set(str[end],end)
    maxL = Math.max(maxL , end - start + 1)
    
}
console.log(maxL)
