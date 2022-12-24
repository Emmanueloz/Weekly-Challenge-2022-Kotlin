let num0 = 0
let num1 = 1

for(let i = 1; i <=50; i++){
  console.log(num0);

  let sum = num0 + num1
  num0 = num1
  num1 = sum
}