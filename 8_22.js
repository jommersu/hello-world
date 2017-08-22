let nums1 = [1, 2, 2, 1];
let nums2 = [2,2];
console.log(getArr(nums1, nums2));
function getArr(nums1, nums2) {
    let len = nums2.length;
    for(let i = 0; i < nums1.length - len; i++){
        let arr1 = nums1.slice(i , i+len);
        for(let j = 0; j < len; j++){
            if(arr1[j] === nums2[j]){
                return nums2;
            }

        }
    }

}