// quick sort
function quickSort(arr, campfunc, left, right){
	if(arguments.length < 2){
		campfunc = quickSort.comp;
	}
	if(arguments.length != 4){
		left = 0;
		right = arr.length - 1;
	}
	if(left > right){
		return;
	}
	var index = quickSort.partition(arr, campfunc, left, right);
	quickSort(arr, campfunc, left, index-1);
	quickSort(arr, campfunc, index + 1, right);
}

quickSort.comp = function(a, b){
	return a > b;
};

quickSort.swap = function(arr, lIndex, rIndex){
	var temp = arr[lIndex];
	arr[lIndex] = arr[rIndex];
	arr[rIndex] = temp;
};

quickSort.partition = function(arr, campfunc, left, right){
	var index = left;
	var pivot = arr[index];
	quickSort.swap(arr, index, right);
	for(var i = left; i < right; i++){
		if(campfunc(arr[i], pivot)){
			quickSort.swap(arr, index++, i);
		}
	}
	quickSort.swap(arr, right, index);
	return index;
};

var arr = [9,3,7,4,1,9,8,6,2];
quickSort(arr, function(a,b){return a < b;});
console.log(arr);
