
const validPin = 1234
// add money js

document.getElementById("loginBtn").addEventListener("click",function(e){

e.preventDefault()
const bankName = document.getElementById("bank").value
const accountNum = document.getElementById("account-num").value

const amountAdd = document.getElementById("amount").value
const newAmountAdd = parseInt(amountAdd)

const pinNum = parseInt(document.getElementById("pin").value)

const availableBalance = parseInt( document.getElementById("available-balance").innerText)


if(accountNum.length < 11)
{
    alert("Invalid account number")
    return
}
if(pinNum != validPin){
    alert("please provide valid pin")
    return
}


// console(availableBalance)

const TotalAvailableBalance = availableBalance + newAmountAdd

document.getElementById("available-balance").innerText = TotalAvailableBalance

})

// cash out js

document.getElementById("withdraw-Btn").addEventListener("click",function(e){
e.preventDefault()

const agentNumber = document.getElementById("withdraw-account-num").value

const amountAdd = parseInt(document.getElementById("amount-num").value)

const pinNum = parseInt(document.getElementById("pin-num").value)

const availableBalance = parseInt( document.getElementById("available-balance").innerText)


if(agentNumber.length < 11)
{
    alert("Invalid agent number")
    return
}
if(pinNum != validPin){
    alert("please provide valid pin")
    return
}


// console(availableBalance)

const TotalAvailableBalance = availableBalance - amountAdd

document.getElementById("available-balance").innerText = TotalAvailableBalance


})


// toogling 

document.getElementById("add-money-btn").addEventListener("click",function(){

  document.getElementById("addCashOut-parent").style.display= "none"
  document.getElementById("addMoney-parent").style.display= "block"


})

document.getElementById("add-cash-out-btn").addEventListener("click",function(){

  document.getElementById("addMoney-parent").style.display= "none"
  document.getElementById("addCashOut-parent").style.display= "block"


})