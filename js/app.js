const nav = document.getElementById("nav");
const page = document.getElementById("page");

/* โหลดโครงสร้าง Docs */
fetch("data/docs.json")
  .then(res => res.json())
  .then(docs => {
    let firstPage = null;

    for (const category in docs) {
      const h3 = document.createElement("h3");
      h3.textContent = category;
      nav.appendChild(h3);

      docs[category].forEach(item => {
        const link = document.createElement("a");
        link.textContent = item.title;
        link.onclick = () => loadPage(item.file);
        nav.appendChild(link);

        if (!firstPage) firstPage = item.file;
      });
    }

    // โหลดหน้าแรกอัตโนมัติ
    if (firstPage) loadPage(firstPage);
  });

/* โหลดไฟล์เนื้อหา */
function loadPage(file) {
  fetch(`pages/${file}`)
    .then(res => res.text())
    .then(html => {
      page.innerHTML = html;
      window.scrollTo(0, 0);
    });
}
const nav = document.getElementById("nav");
const page = document.getElementById("page");
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

/* Toggle sidebar (mobile) */
menuBtn?.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
