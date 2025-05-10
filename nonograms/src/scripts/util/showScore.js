import modal from "../plugins/modal";

const showScore = () => {
  const _toHTML = item => `
      <div class="score-info">
          <p class="score-item">${item.category}</p>
          <p class="score-item">${item.name}</p>
          <p class="score-item">${item.time}</p>
      </div>
    `;
  const arr = JSON.parse(localStorage.getItem('data')) || [];
  if (arr.length) {
    arr.sort((a, b) => a.id - b.id);
  }
  const html = arr.map(_toHTML).join('');
  modal.setContent(`
        <div class="score-content">
          <p class="score-title">level</p>
          <p class="score-title">nonogram</p>
          <p class="score-title">time</p>
        </div>`, 
        arr.length ? html : `
            <p class="score-result">No results yet, let's play</p>`
  );
  modal.open();
}
export default showScore
