
// LOG IN button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(){
     const loginArea = document.getElementById('login-area');
     loginArea.style.display='none'
     const transactionArea = document.getElementById('transaction-area');
     transactionArea.style.display='block'
})

//DEPOSIT button event handler
const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click',function(){
 const depositNumber = getInputNumber('depositAmount')


updateSpanText('current-deposit',depositNumber)
updateSpanText('current-balance',depositNumber)

document.getElementById('depositAmount').value='';
})

//Withdraw Button event handler
const withDrawBtn = document.getElementById('addWithdraw');
withDrawBtn.addEventListener('click',function(){
    const withdrawNumber=getInputNumber('withdrawAmount')

    updateSpanText('current-withdraw', withdrawNumber);
    updateSpanText('current-balance', -1* withdrawNumber)
    document.getElementById('withdrawAmount').value='';
})

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id,depositNumber){
const current=document.getElementById(id).innerText;
const currentNumber=parseFloat(current);
const totalAmount=depositNumber + currentNumber;
document.getElementById(id).innerText = totalAmount;
}