function my(a, b, c) {
  return [a, b, c, a, b, c];
}

console.log(my.length); // 3 , cause length property on the function indicates how many parameter number requires
console.log(my(2, 1, 3).length); // 6  cause length on the return array
