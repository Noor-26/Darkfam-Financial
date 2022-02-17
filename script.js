function docId (idName){
    return document.getElementById(idName)
}
function parse(intId){
    return parseFloat(intId.value)
}
const income = docId('income');
docId('calculate-btn').addEventListener('click', function () {
    const totalExpenses = docId('total-ex')
    const balance = docId('total-balance')
    const warningEx = docId('warning-ex') 
    const warningOfNegative = docId('warning-ex-2')
    
    // expenses id
    
    const food = docId('food-ex');
    const rent = docId('rent-ex');
    const clothes = docId('clothes-ex');
    const expensemoney = document.getElementsByClassName('expense')
    let expenses = 0

    // error handle
    for (const expense of expensemoney) {
        if(expense.value == ''){
            expense.value = 0
        }
       else if( expense.value < 0){
        warningOfNegative.style.display = "block"
        expense.value = 0
       }
    }
    
    expenses = parse(food) + parse(rent) + parse(clothes)
    totalExpenses.innerText = expenses
    
    balance.innerText = income.value - expenses
    

    if (balance.innerText < 0){
        warningEx.style.display = "block"
        balance.innerText = 0
    }
})

// savings

docId('save-btn').addEventListener('click', function () {
    const save = docId('saving')
    const isSaving = docId('saving-amount')
    const saveparsent = parse(save)
    const incomeParse = parse(income)
    const saveAmount =(incomeParse* saveparsent) / 100
    isSaving.innerText = saveAmount
    
    // error handle of NaN

    if(save.value == ''){
        isSaving.innerText = 0
    }
    
    // warning text of saving

    const warningOfSave = docId('warning-save');
    if (saveAmount > incomeParse) {
        warningOfSave.style.display = "block"
        isSaving.innerText = 0
    }
    
})