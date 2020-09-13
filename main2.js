
let button = document.querySelector('button')



function click(){
	let target = document.querySelector('#target')
	let long = document.querySelector('#long')
	let largeData = [];
	for (let i = 0; i< 100000000;i++) {
		largeData.push(i*2)
	}
	// console.log(target.value)
	// let arr = [2,3,8,10,12];
	let number = Number(target.value)
	console.log(number)
	console.time()
	console.log(linearSearch(largeData,number))
	console.timeEnd()
	console.time()
	console.log(binarySearch(largeData,number))
	console.timeEnd()
}

button.addEventListener('click',click)
//實作線性搜尋
function linearSearch(arr,target){
	for (let i=0;i<arr.length;i++) {
		//比對到了就回傳陣列中的位置
		if(arr[i]===target) return i;
	}
	return -1
}

//實作二元搜尋
function binarySearch(arr,target){
	let startIdx = 0
	//最後一位要記得減一
	let endIdx = arr.length-1
	//注意這裡比較的是編號不是值，因為值可能有差距
	while(endIdx>=startIdx){
		//取中間值如果有小數直接捨去
		let midIdx = Math.floor((startIdx+endIdx)/2);
		if(target === arr[midIdx]){
			return midIdx
		} else if(target > arr[midIdx]){
			//注意這裡必須加一因為中間數不需要被包含
			startIdx = midIdx+1
		} else {//比中間小
			endIdx = midIdx-1
		}
	}
	//如果整個迴圈都沒找到
	return -1
}