const btn = document.querySelector("#btn");
btn.addEventListener("click", montarTabuada);

function montarTabuada() {
  let numero = document.querySelector("#numero").value;
  let tabuada = document.querySelector("#tabuada");
  tabuada.innerHTML = "";
  let cabecalho = "<tr> <th> operação </th>  <th> resultado </th> </tr>";
  tabuada.innerHTML += cabecalho;

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    let operacao = numero + " x " + i;
    let linha =
      "<tr> <td> " + operacao + "</td> <td> " + resultado + "</td> </tr>";
    tabuada.innerHTML += linha;
  }
}
