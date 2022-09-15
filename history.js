const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];




  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("div");

    newRow.innerHTML = `

  <div class ="card" >

  <div class="row row-cols-sm-1 row-cols-lg-3  row-cols-md-3 g-3">
  
  <div class ="col-3">
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  </div>

  </div>

  </div>
 
  
  `;

    histories.appendChild(newRow);
  });
}
