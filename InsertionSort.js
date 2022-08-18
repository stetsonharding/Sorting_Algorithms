/* Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed 
at the correct position in the sorted part.  BEST FOR SMALL DATA SETS, AND PARTIALLY SORTED DATA.*/

//Time Complextiy = O(n2)

function InsertionSort(arr) {
    
    for(let i = 1; i < arr.length; i++) {

        let currentElement = arr[i] // 3

        //pointer to compair currentElement and the element behind it.
        let j = i - 1; // 1

        //Move elements for aa[0 ... i - 1] that are greater than curr, 
        //to one position ahead of their current position
        while(j > -1 && arr[j] > currentElement) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = currentElement; 
        
    }
    return arr;
}

console.log(InsertionSort([5,6,3,1,8]))












