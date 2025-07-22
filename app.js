function saveData() {
  const sleepTime = document.getElementById("sleepTime").value;
  const wakeTime = document.getElementById("wakeTime").value;

  if (!sleepTime || !wakeTime) {
    alert("Preencha ambos os campos!");
    return;
  }

  const data = {
    sleep: sleepTime,
    wake: wakeTime,
    date: new Date().toLocaleString("pt-BR")
  };

  localStorage.setItem("sleepData", JSON.stringify(data));
  document.getElementById("feedback").textContent = "Salvo com sucesso!";
  showLastData();
}

function showLastData() {
  const data = JSON.parse(localStorage.getItem("sleepData"));
  if (data) {
    document.getElementById("lastData").innerHTML = `
      Dormiu: <b>${data.sleep}</b> <br />
      Acordou: <b>${data.wake}</b> <br />
      Data: ${data.date}
    `;
  }
}

window.onload = showLastData;