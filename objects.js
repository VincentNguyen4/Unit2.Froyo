// create an object for the shoe

const shoe = {
  brand: "converse",
  hasLaces: true,
  color: "green",
  price: 60,
  activityType: "casual",
  isClosedToe: true,
  availableSizes: [5,6,8,9,10],
  style: "hightop",
  onSale: false,
}
// dot & bracket notation
console.log(shoe.brand)

console.log(shoe["brand"])

const property = "price"
console.log(shoe[property])

// adding and updating properties
shoe.weight = "2lbs" 
shoe.discountPercentage = 0.25
// shoe.availableSizes.push(7,11,12)
// shoe.availableSizes.sort()
shoe.availableSizes.splice(2,0,7)
shoe.availableSizes.push(11,12)

delete shoe.isClosedToe

// console.table(shoe)

for(const key in shoe){
  // console.log(key + ": " + shoe[key])
  console.log(`${key} : ${shoe[key]}`)
}