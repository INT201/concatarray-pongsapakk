const { template } = require('@babel/core')

function concatArray(array1, array2) {

 if((array1 === null || array1 === undefined) && (array2 === undefined || array2 === null)) {
  return undefined
 }else if(array1 === [] && array2 === []) {
  return []
 }else if(array1 === null || array1 === undefined || array1 === []) {
 return array2
 }else if(array2 === null || array2 === undefined  || array2 === []) {
  return array1
 }
  return array1.concat(array2)
}
module.exports = concatArray

