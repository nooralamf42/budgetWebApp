let moneyIncome = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/12/17/audio_43e9af63f3.mp3?filename=cashier-quotka-chingquot-sound-effect-129698.mp3"
);
let moneyDeduction = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/03/10/audio_18fa31cc65.mp3?filename=coin-drop-39914.mp3"
);

let lsData = localStorage.getItem("data") && JSON.parse(localStorage.getItem('data'))

const clearData = () =>{
  localStorage.removeItem('data')
  location.reload()
}

const upDateBalance = (balance,name, newMoney, isExpense)=>{
  console.log(income.innerText)
  let data = {
    amount ,
    income : income.innerText,
    expense,
    history : [
      {
        'expenseName': name,
        'value' : newMoney,
        'isExpense' : isExpense
      }
    ],
  }
let lsData = localStorage.getItem("data") && JSON.parse(localStorage.getItem('data'))

  if (lsData==null)
    localStorage.setItem('data',JSON.stringify(data))
  else{
    lsData.amount = balance
    lsData.income = income.innerText
    lsData.expense = expense.innerText
    lsData.history.push(data.history[0])
    localStorage.setItem('data', JSON.stringify(lsData))
  }
}


const createHistory = ({value, expenseName, isExpense}) =>{
  let borderDiv = document.createElement("div");
  expense.innerText = lsData.expense
  income.innerText = lsData.income
  div2.classList.remove("d-none");
  dataDiv.appendChild(borderDiv);
  borderDiv.classList.add("border", "mb-3");
  let dataH3 = document.createElement("h3");
  dataH3.classList.add("border-4", "border-end", "p-3", "m-0");
  borderDiv.appendChild(dataH3);
  if(!isExpense)
      {
        dataH3.classList.add("border-success");
        dataH3.innerHTML = `${expenseName} <span class='text-success'>+${value}</span>`;
      }
  else
    {
      dataH3.classList.add("border-danger");
      dataH3.innerHTML = `${expenseName} <span class='text-danger'>-${value}</span>`;
    }
  }     

const onLoad = () =>{
  console.log(lsData.expense)
  balance.innerText = lsData.amount
  income.innerText = parseFloat(lsData.income)
  expense.innerText = lsData.expense
  lsData?.history.map((history)=>createHistory(history))
}

lsData && onLoad()
if(+balance.innerText>=0){
  balance.classList.add('text-success')
}
else{
  balance.classList.add('text-danger')
}

let amount = (amountValue) => {
  moneyIncome.pause();
  moneyIncome.currentTime = 0;
  moneyDeduction.pause();
  moneyDeduction.currentTime = 0;
  if(+balance.innerText>=0){
    balance.classList.add('text-success')
  }
  else{
    balance.classList.add('text-danger')
  }

  if (amountInput.value != "") {
    let borderDiv = document.createElement("div");
    div2.classList.remove("d-none");
    dataDiv.appendChild(borderDiv);
    borderDiv.classList.add("border", "mb-3");
    let dataH3 = document.createElement("h3");
    dataH3.classList.add("border-4", "border-end", "p-3", "m-0");
    borderDiv.appendChild(dataH3);
    console.log(dataH3);

    if (amountValue) {
      moneyIncome.play();
      balance.innerText =
      (+balance.innerText) + (+amountInput.value);
      income.innerText =
        parseFloat(income.innerText) + parseFloat(amountInput.value);
      dataH3.classList.add("border-success");

      upDateBalance(balance.innerText, description.value, amountInput.value, false)

      dataH3.innerHTML = `${description.value} <span class='text-success'>+${amountInput.value}</span>`;

    } else {
      moneyDeduction.play();
      balance.innerText =
        parseFloat(balance.innerText) - parseFloat(amountInput.value);
      expense.innerText =
        parseFloat(expense.innerText) + parseFloat(amountInput.value);
      dataH3.classList.add("border-danger");

      upDateBalance(balance.innerText, description.value, amountInput.value, true)


      dataH3.innerHTML = `${description.value} <span class='text-danger'>-${amountInput.value}</span>`;
    }
  }
  amountInput.value = "";
  description.value = "";
};
