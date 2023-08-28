
export const DepositAmount=(amount)=> {
  return({
    type:"DEPOSIT",
    payload:Number(amount)
    
  })
}
