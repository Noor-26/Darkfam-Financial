function docId (idName){
    return document.getElementById(idName)
}
docId('calculate-btn').addEventListener('click', function () {
    const income = docId('income')
    const incomeValue = income.value
    console.log(incomeValue)

})