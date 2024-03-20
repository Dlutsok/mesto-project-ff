const placesList = document.querySelector('.places__list');
const templateElement = document.querySelector('#card-template');

function createCard(item, { deleteCard }) {
    const cardElement = templateElement.content.cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = item.link;
    cardImage.alt = item.name;
    cardTitle.textContent = item.name;

    deleteButton.addEventListener('click', function () {
        const card = deleteButton.closest('.places__item');
        deleteCard(card);
    });

    return cardElement;
}

initialCards.forEach(function (element) {
    const cardElement = createCard(element, { deleteCard });
    placesList.append(cardElement);
});

function deleteCard(card) {
    card.remove();
}