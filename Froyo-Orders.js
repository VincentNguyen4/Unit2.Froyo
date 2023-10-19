// user input prompt

const userInputString = prompt(
  "Please enter flavors seperated by commas."
)
// split the string into arrays of strings
const stringArray = userInputString.split(",")

// convert the arrays of strings into arrays of values

const orders = []
for(i = 0; i < stringArray.length; i++){
  let str = stringArray[i]
  orders.push(str)
}

console.table(ordersIn(orders))

function ordersIn(orders){

  // setting up object

  const order = {
    flavors: ["coffee","vanilla","strawberry"],
    }

    // setting up array
    
  for(i = 0; i < orders.length; i++){
    const item = orders[i]
    const orderFlavor = item

    if(order[orderFlavor]){
      order[orderFlavor]++
    }else{
      order[orderFlavor] = 1
    }
  }
  return order
}