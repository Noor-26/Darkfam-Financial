function docId (idName){
    return document.getElementById(idName)
}
function parse(intId){
    return parseFloat(intId.value)
}
docId('calculate-btn').addEventListener('click', function () {
    const income = docId('income');
    const totalExpenses = docId('total-ex')
    const balance = docId('total-balance')
    const warningEx = docId('warning-ex') 
    let expenses = 0

    const food = docId('food-ex');
    const rent = docId('rent-ex');
    const clothes = docId('clothes-ex');

     expenses = parse(food) + parse(rent) + parse(clothes)
    totalExpenses.innerText = expenses

    balance.innerText = income.value - expenses

   
})