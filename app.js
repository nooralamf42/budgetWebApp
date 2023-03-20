let moneyIncome = new Audio("https://cdn.pixabay.com/download/audio/2022/12/17/audio_43e9af63f3.mp3?filename=cashier-quotka-chingquot-sound-effect-129698.mp3")
let moneyDeduction = new Audio("https://cdn.pixabay.com/download/audio/2022/03/10/audio_18fa31cc65.mp3?filename=coin-drop-39914.mp3")
let amount = (amountValue) => {
    moneyIncome.pause()
    moneyIncome.currentTime = 0;
    moneyDeduction.pause()
    moneyDeduction.currentTime = 0;
    let borderDiv = document.createElement('div')
    div2.classList.remove('d-none')
    dataDiv.appendChild(borderDiv)
    borderDiv.classList.add("border", "mb-3")
    let dataH3 = document.createElement("h3")
    dataH3.classList.add('border-4' ,'border-end', 'p-3', 'm-0')
    borderDiv.appendChild(dataH3)
    console.log(dataH3)
    if(amountInput.value=="")
    amountInput.value=0;
    if (amountValue) {
        moneyIncome.play();
        balance.innerText = parseFloat(balance.innerText) + parseFloat(amountInput.value)
        income.innerText = parseFloat(income.innerText) + parseFloat(amountInput.value)
        dataH3.classList.add('border-success')
        dataH3.innerHTML = `${description.value} <span class='text-success'>+${amountInput.value}</span>`
      }
      else {
        moneyDeduction.play()
        balance.innerText = parseFloat(balance.innerText) - parseFloat(amountInput.value)
        expense.innerText = parseFloat(expense.innerText) + parseFloat(amountInput.value)
        dataH3.classList.add('border-danger')
        dataH3.innerHTML = `${description.value} <span class='text-danger'>-${amountInput.value}</span>`
      }
      amountInput.value = ""
      description.value = ""
    }