// Renders the m and math components (data-tex), then $...$ and $$...$$ in the post text.
(() => {
  const prose = document.querySelector(".prose");
  if (!prose || !window.katex) return;
  for (const el of prose.querySelectorAll("[data-tex]")) {
    katex.render(el.dataset.tex, el, { displayMode: el.tagName === "DIV", throwOnError: false });
  }
  window.renderMathInElement?.(prose, {
    delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
    throwOnError: false,
  });
})();
