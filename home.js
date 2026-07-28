
const validPin = 1234

// Common function for Numbers
function getInputValueNumber(id) {
    
  const inputField =  document.getElementById(id)
  const inputFieldValue = inputField.value
  const inputFieldValueNumber = parseInt(inputFieldValue)

  return inputFieldValueNumber
} 

// common function for value
 function getInputValue(id) {
    
  const inputField =  document.getElementById(id)
  const inputFieldValue = inputField.value
  
return inputFieldValue

 }

//  function to get inner text
   function getInnerText(id){

    const element = document.getElementById("available-balance")
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
   }

//    function to set inner text
function setInnerText(value){

    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value

}

//function to TOGGLE
    function handleToggle(id)
    {

        const forms = document.getElementsByClassName("form")

for(const form of forms)
{
    form.style.display = "none" //all out
}
document.getElementById(id).style.display = "block"

}



// add money js
document.getElementById("loginBtn").addEventListener("click",function(e){

e.preventDefault()
const bankName = getInputValue("bank")
const accountNum = document.getElementById("account-num").value

const amountAdd = getInputValueNumber("amount")


const pinNum = getInputValueNumber("pin")

const availableBalance = getInnerText("available-balance")

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

const TotalAvailableBalance = availableBalance + amountAdd

setInnerText(TotalAvailableBalance)

})

// cash out js

document.getElementById("withdraw-Btn").addEventListener("click",function(e){
e.preventDefault()

const agentNumber = document.getElementById("withdraw-account-num").value

const amountAdd = getInputValueNumber("amount-num")   

const pinNum = parseInt(document.getElementById("pin-num").value)

// main balance 45000
const availableBalance = getInnerText("available-balance")


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

setInnerText(TotalAvailableBalance)

})


// TOGGLING************

// add money
document.getElementById("add-money-btn").addEventListener("click",function(){

    handleToggle("addMoney-parent")
})

//cash-out
document.getElementById("add-cash-out-btn").addEventListener("click",function(){

   handleToggle("addCashOut-parent")
 
})


//Transfer Money
document.getElementById("transfer-btn").addEventListener("click",function(){

 handleToggle("transferMoney-parent")
})

//Bonus
document.getElementById("bonus-btn").addEventListener("click",function(){

     handleToggle("bonus-parent")

})

//pay bill
document.getElementById("pay-bill-btn").addEventListener("click",function(){

     handleToggle("pay-bill-parent")
})


//Transactions
document.getElementById("transactions-btn").addEventListener("click",function(){

     handleToggle("transaction-parent")

})




// inner work toogling

//   document.getElementById("addMoney-parent").style.display= "none"
//   document.getElementById("addCashOut-parent").style.display= "none"
//   document.getElementById("transferMoney-parent").style.display= "block"