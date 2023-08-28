
export const  WithdrawAmount=(amount)=> {
  return({
    type:"WITHDRAW",
    payload:Number( amount)
  })
}
