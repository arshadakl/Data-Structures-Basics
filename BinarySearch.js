function searchBinary(arr,target){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(target===arr[mid]){
            return mid
        }
        if(target < arr[mid]){
            right=mid-1
        }else{
            left= mid+1
        }
    }
    return -1
}

const arr = [-5,2,4,6,10,5,84,424,124,54];
console.log(searchBinary(arr,10));