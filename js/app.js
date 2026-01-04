const nav = document.getElementById("nav");
const page = document.getElementById("page");

fetch("data/docs.json")
  .then(res => res.json())
  .then(docs => {
    for (const category in docs) {
      const h3 = document.createElement("h3");
      h3.textContent = category;
      nav.appendChild(h3);

      docs[category].forEach(item => {
        const link = document.createElement("a");
        link.textContent = item.title;
        link.href = "#";
        link.onclick = () => loadPage(item.file);
        nav.appendChild(link);
      });
    }
  });

function loadPage(file) {
  fetch(`pages/${file}`)
    .then(res => res.text())
    .then(html => page.innerHTML = html);
}
