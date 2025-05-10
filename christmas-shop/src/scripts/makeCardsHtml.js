const _toHTML = card => `
    <div class="best-card best-${card.category.slice(4).toLowerCase()}" data-id="${card.id}">
        <div class="best-image"> 
            <img class="best-img" data-id="${card.id}" src="${card.img}" alt="${card.category}">
        </div>
        <div class="best-content" data-id="${card.id}">
            <h4 class="best-category" data-id="${card.id}">${card.category}</h4>
            <h3 class="best-name" data-id="${card.id}">${card.name}</h3>
        </div>
    </div>            
`;
export default _toHTML;
