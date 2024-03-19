const placesList = document.querySelector('.places__list');
const templateElement = document.querySelector('#card-template');

<<<<<<< HEAD
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
        card.remove();
        deleteCard(item);
    });

    return cardElement;
}

initialCards.forEach(function (element) {
    const cardElement = createCard(element, { deleteCard });
    placesList.append(cardElement);
});

function deleteCard(item) {
}
=======
initialCards.forEach(function (element) {
    const cardElement = templateElement.content.cloneNode(true);

    cardElement.querySelector('.card__image').src = element.link;
    cardElement.querySelector('.card__title').textContent = element.name;

    placesList.append(cardElement);
});

const deleteButtons = document.querySelectorAll('.card__delete-button');

deleteButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const card = button.closest('.places__item');
        card.remove();
    });
});
>>>>>>> 4a0920701819fb331a250ac469d9f6d2923a71e7
