/*
 * @Author: liweilong
 * @Date: 2020-12-26 15:48:11
 */
const c_array = require('./js/city_arry')
const makePy = require('./getFistLetter')
const fs = require('fs')
const { totalmem } = require('os')
// console.log( total_arry);
// let dong = ['美丽', '被', '啊', '智障', '懂', '啊噜哈']

function arrSortByName(array) {
  function fn(a, b) {
    return a.localeCompare(b, "zh")
  }
  return array.sort(fn)
}

function filterByName(arr, letter) {
  return arr.filter(item => {
    // console.log(getFirstLetter(item));
    return makePy(item)[0][0] === letter
  })
}

let letters = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
]

let tolal = []

letters.forEach((letter, index) => {
  let obj = {}
  obj.id = index
  obj.name = letter
  obj.cities = filterByName(c_array, letter)
  tolal.push(obj)
})

fs.writeFile('./citys.json', JSON.stringify(tolal), (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log('成功');
})

// console.log(tolal);
