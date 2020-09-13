
const list = []

function createList(size){
	let number = 1
	// const list = [0,2,3,4,5,6,7,8,10]
	for(let i=0;i<size ;i++){
		// number += (Math.random() * 10 | 0)
		number =  i * 2
		list.push(number)
	}
	console.log(list)
}



function linearSearch(arr , target){
	const arrSize = arr.length
	for (let i = 0; i < arrSize ; i++) {
		if(arr[i]===target) return i
	}
	return -1
}

// const binarySearch = (arr ,target,{searchStartIdx=0,searchEndIdx=0}={}) => {
// 	debugger
// 	const arrSize = arr.length
// 	let startIdx = searchStartIdx
// 	let endIdx = searchEndIdx===0 ? arrSize : searchEndIdx
// 	return ()=>{
// 		const middleIdx = startIdx + (((endIdx-startIdx) / 2) | 0)
		
// 		if(arr[middleIdx]===target) return middleIdx
// 		//小於中點
// 		if(arr[middleIdx] > target) {
// 			if(target > arr[startIdx]){
// 				return binarySearch(arr,target,{searchStartIdx:0,searchEndIdx:middleIdx})()
// 			}else{
// 				return -1
// 			}
// 		} else if(arr[middleIdx] < target){
// 			if(target > arr[startIdx]){
// 				return binarySearch(arr,target,{searchStartIdx:middleIdx,searchEndIdx:arrSize})()
// 			}else{
// 				return -1
// 			}
			
// 		}
// 		// if(arr[middleIdx] > target && target > arr[startIdx] ){
// 		// 	return binarySearch(arr,target,{searchStartIdx:0,searchEndIdx:middleIdx})()
// 		// }
// 		// //大於中點
// 		// if(arr[middleIdx] < target && target > arr[startIdx] ){
// 		// 	return binarySearch(arr,target,{searchStartIdx:0,searchEndIdx:middleIdx})()
// 		// }
// 		//大於起點小於終點
// 		// if(arr[middleIdx] < target && target < arr[startIdx] ){
// 		// 	return -1
// 		// }
// 		return binarySearch(arr,target,{searchStartIdx:startIdx,searchEndIdx:middleIdx})()
// 	}
	
// }
let long = 100000000
let target = 17000080
createList(long)
console.time()
console.log("target=",target,"linearSearch=",linearSearch(list,target))
console.timeEnd()

console.time()
console.log("target=",target,"binarySearch=",binarySearch(list,target))
// console.log("target=",9,"binarySearch=",binarySearch(list,9))
// console.log("target=",-1,"binarySearch=",binarySearch(list,-1))
// console.log("target=",20,"binarySearch=",binarySearch(list,20))
// console.log("target=",10,"binarySearch=",binarySearch(list,10))
// console.log("target=",0,"binarySearch=",binarySearch(list,0))
// console.log("target=",18,"binarySearch=",binarySearch(list,18))
console.timeEnd()



function binarySearch(arr,target){
	const arrSize = arr.length
	let startIdx = 0;
	let endIdx = arrSize
	let beforeMiddleIdx = 0;
	//如果目標小於起點
	
	if(arr[startIdx] > target)return -1
	if(arr[startIdx] === target) return startIdx
	//如果目標大於終點
	if(arr[endIdx-1] < target)return -1
	if(arr[endIdx] === target)return endIdx
	//如果目標大於終點但又小於起點，出現黃金交叉 return -1
	while(!(arr[endIdx]<target && arr[startIdx] > target)){
		let middleIdx = (endIdx+startIdx) / 2 | 0;
		if(((endIdx+startIdx) % 2) > 0) middleIdx++
		if(arr[middleIdx]===target) return middleIdx
		if(arr[middleIdx] > target ) {
			if(arr[middleIdx-1] < target) return -1
			endIdx = middleIdx
		}
		if(arr[middleIdx] < target ) {
			if(arr[middleIdx-1] > target) return -1
			startIdx = middleIdx
		}
	}
	return -1
}