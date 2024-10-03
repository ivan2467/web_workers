const datos_originales = [1, 2, 3, 4, 5, 6, 7, 8, 9];

document.getElementById(
  "datos-originales"
).innerText = `Datos originales: ${datos_originales}`;
console.log(datos_originales);

const miWebWorker = new Worker("./web-worker.js");

miWebWorker.postMessage(datos_originales);

miWebWorker.addEventListener("message", (res) => {
  const datos_procesados = (document.getElementById(
    "datos-procesados"
  ).innerText = "Datos procesados por el web worker: " + res.data);
  console.log(res.data);
  miWebWorker.terminate();
});
