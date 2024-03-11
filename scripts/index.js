const placesList = document.querySelector('.places__list');
const templateElement = document.querySelector('#card-template');

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
