document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#form');
    const array = document.querySelector('#inputArray');

    function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > current) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = current;
        }
        return arr;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputValue = array.value;
        let transformArray = inputValue.split(',').map(x => x.trim());
        let intArray = transformArray.map(number => parseInt(number, 10));
        let sortedArray = insertionSort(intArray);
        let unorderArray = document.querySelector('#unorderArray');
        let spanOrderArray = document.querySelector('#spanOrderArray');
        unorderArray.innerText = `Primeiro array: ${inputValue}`;
        spanOrderArray.innerText = `Array ordenado por inserção: ${sortedArray.join(', ')}`;
    });
});
