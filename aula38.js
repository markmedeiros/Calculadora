let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v2");
const res = document.querySelector("#res");
const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const mult = document.querySelector("#mult");
const divi = document.querySelector("#divi");

mais.addEventListener("click", () => {
  const valor1 = parseFloat(v1.value);
  const valor2 = parseFloat(v2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, adicione números válidos nos campos.");
  } else {
    const resultado = valor1 + valor2;
    res.innerHTML = resultado;
    console.log("Operação de adição concluída");
  }
});

menos.addEventListener("click", () => {
  const valor1 = parseFloat(v1.value);
  const valor2 = parseFloat(v2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, adicione números válidos nos campos.");
  } else {
    const resultado = valor1 - valor2;
    res.innerHTML = resultado;
    console.log("Operação de subtração concluída");
  }
});

mult.addEventListener("click", () => {
  const valor1 = parseFloat(v1.value);
  const valor2 = parseFloat(v2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, adicione números válidos nos campos.");
  } else {
    const resultado = valor1 * valor2;
    res.innerHTML = resultado;
    console.log("Operação de multiplicação concluída");
  }
});

divi.addEventListener("click", () => {
  const valor1 = parseFloat(v1.value);
  const valor2 = parseFloat(v2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, adicione números válidos nos campos.");
  } else {
    if (valor2 === 0) {
      alert("Não é possível dividir por zero.");
    } else {
      const resultado = valor1 / valor2;
      res.innerHTML = resultado;
      console.log("Operação de divisão concluída");
    }
  }
});



