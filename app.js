function calcular() {
  let salario1 = parseFloat(document.querySelector("#salario1").value);
  let salario2 = parseFloat(document.querySelector("#salario2").value);
  let salarioTotal = salario1 + salario2;
  let conta = parseFloat(document.querySelector("#conta").value);
  let pagamento1 = Math.round((salario1 / salarioTotal) * conta * 100) / 100;
  let pagamento2 = Math.round((salario2 / salarioTotal) * conta * 100) / 100;

  let mensagem = document.querySelector("h2");
  mensagem.textContent = `A primeira pessoa paga R$${pagamento1} e a segunda paga R$${pagamento2}.`;
}
