export function PartnerCard(partners) {
  const partnersContainer = document.getElementById('partners');
  partnersContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();

  partners.forEach(({ nome, qual, pais_origem }) => {
    const partnerCard = document.createElement('div');
    partnerCard.classList.add('col-md-4', 'mb-3');

    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = nome;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML = `
      <strong>Qualificação:</strong> ${qual} <br>
      <strong>País de Origem:</strong> ${pais_origem}
    `;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    partnerCard.appendChild(card);
    fragment.appendChild(partnerCard);
  });

  partnersContainer.appendChild(fragment);
}
