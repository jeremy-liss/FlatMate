export const calculateBillAllocation = function(billItems, flatUsers) {
  let total = 0
  let userNum = 0

  billItems.map(function(bill){
    total += bill.amount
    return total
  })

  flatUsers.map(function(user){
    userNum ++
    return userNum
  })
  let userTotal = Math.round((total/ userNum) * 100) / 100
  return {total, userTotal, userNum}
}
