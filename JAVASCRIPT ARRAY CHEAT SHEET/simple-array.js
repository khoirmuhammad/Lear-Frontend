//#region 1 Array.map()
// Definition : This method able to create new array as a result. Each element in array can be modified by particular funcation or logic. Example here I need to modify all array member by concatenate with fruit word after element 

let arrays1 = ['Apple','Grapes','Banana','Orange'];
let mapArrays = arrays1.map(item => {
    return item + ' Fruit';
})
console.log(mapArrays); 
// Result : ['Apple Fruit', 'Grapes Fruit', 'Banana Fruit', 'Orange Fruit']
//#endregion

//--------------------------------------------------------------------------------------------------------------------------------------------------

//#region 2 Array.filter()
// Definition : This method will return a new array that pass / match with particular condition. For example here I need to select all element has leter A at the begining

let arrays2 = ['Apple','Grapes','Banana','Orange','Avocado'];
let filterArrays = arrays2.filter(item => {
    return item.charAt(0) == 'A';
})
console.log(filterArrays);
// Result : ['Apple', 'Avocado']
//#endregion

//--------------------------------------------------------------------------------------------------------------------------------------------------

//#region 3 Array.reduce()
// Definition : Reduce all element array into single result. The single value is obtained from accumulation of elements.

let arrays3 = ['Apple','Grapes','Banana','Orange','Avocado'];
let reduceArrays = arrays3.reduce((total,item) => {
    return total + ' ' + item
})
console.log(reduceArrays);
// Result : Apple Grapes Banana Orange Avocado (it will add / join all string element from left to right)

let arrays31 = [100,20,30,40];
let reduceArrays1 = arrays31.reduce((total,item) => {
    return total - item
})
console.log(reduceArrays1);
// Result : 10 (it will substruct the the left value (100) with the next value) 100 - 20 - 30 - 40;
//#endregion

//--------------------------------------------------------------------------------------------------------------------------------------------------

//#region 4 Array.reduceRight()
// Definition : Reduce all element array into single result. The single value is obtained from accumulation of elements from right element to left

let arrays4 = ['Apple','Grapes','Banana','Orange','Avocado'];
let reduceRightArrays = arrays4.reduceRight((total,item) => {
    return total + ' ' + item
})
console.log(reduceRightArrays);
// Result : Avocado Orange Banana Grapes Apple

let arrays41 = [100,20,30,40];
let reduceRightArrays1 = arrays41.reduceRight((total,item) => {
    return total - item
})
console.log(reduceRightArrays1);
// Result : -110 (will substract from right element to left)
//#endregion

//--------------------------------------------------------------------------------------------------------------------------------------------------

//#region 5 Array.fill()
// Definition : This method will specify the new value for each array element
// parameter (value(required), start index (optional, but 0 is default), end index (optional, default value is array length))

let arrays5 = ['Apple','Grapes','Banana','Orange','Avocado'];
let fillRightArrays = arrays5.fill('Pinaple')
console.log(fillRightArrays);
// Result : [ 'Pinaple', 'Pinaple', 'Pinaple', 'Pinaple', 'Pinaple' ]

let arrays51 = ['Apple','Grapes','Banana','Orange','Avocado'];
let fillRightArrays1 = arrays51.fill('Pinaple',3,arrays51.length)
console.log(fillRightArrays1);
// result : [ 'Apple', 'Grapes', 'Banana', 'Pinaple', 'Pinaple' ] 

//#endregion

//--------------------------------------------------------------------------------------------------------------------------------------------------

//#region 6 Array.find()
// Definition : Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

let arrays6 = ['Apple','Grapes','Banana','Orange','Avocado'];
let findArrays = arrays6.find(item => {
    return item.charAt(0) == 'A';
})
console.log(findArrays);
// Result : Apple (although within array has 2 element that beginning with 'A', since Apple is the first element is found, then only select apple)

//#endregion

//--------------------------------------------------------------------------------------------------------------------------------------------------

//#region 7 Array.indexOf()
// Definition :Return the index of element, if no match value on element it will return -1, otherwise will return appropriate index

let arrays7 = ['Apple','Grapes','Banana','Orange','Avocado'];
let indexOfArrays = arrays7.indexOf('Banana')
console.log(indexOfArrays);
// Result : 2

//#endregion

//--------------------------------------------------------------------------------------------------------------------------------------------------

//#region Array.lastIndexOf()
// Definition : Return the last index (position) of a specified value: If no match element it will return -1

let arrays8 = ['Apple','Grapes','Banana','Orange','Banana','Avocado'];
let lastIndexOfArrays = arrays8.lastIndexOf('Banana')
console.log(lastIndexOfArrays);
// Result : 4

//#endregion