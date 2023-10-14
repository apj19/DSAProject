function selectionSort(arr) {

    let processArr=[];
    
    for (let i = 0; i < arr.length - 1; i++) {
       let minPos = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minPos]) {
                minPos = j;
            }

        }
        let temp = arr[i];
        arr[i] = arr[minPos];
        arr[minPos] = temp;
        processArr.push([...arr]);
        
    }

    return processArr;

}

export {
    selectionSort
}