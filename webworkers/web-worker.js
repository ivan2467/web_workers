self.addEventListener("message", (res) => {
  const result = res.data.map((n) => n * 9);
  postMessage(result);
});
