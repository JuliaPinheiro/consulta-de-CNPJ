export function PartnerCard(partners, isEditable = false) {
  const partnersContainer = document.getElementById('partners');
  partnersContainer.innerHTML = '';

  partners.forEach((partner, index) => {
    const partnerCard = document.createElement('div');
    partnerCard.className = 'col-md-4 mb-3';

    const card = document.createElement('div');
    card.className = 'card';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = partner.nome;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';

    const partnerFields = `
      <strong>Qualificação:</strong> ${partner.qual} <br>
      <strong>País de Origem:</strong> ${partner.pais_origem}
    `;

    cardText.innerHTML = partnerFields;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    if (isEditable) {
      const editButton = document.createElement('button');
      editButton.className = 'btn btn-warning mt-2';
      editButton.textContent = 'Editar';
      editButton.setAttribute('data-toggle', 'modal');
      editButton.setAttribute('data-target', '#editModal');
      editButton.addEventListener('click', () => {
        document.getElementById('edit-partner-name').value = partner.nome;
        document.getElementById('edit-partner-qual').value = partner.qual;
        document.getElementById('edit-partner-pais').value =
          partner.pais_origem;
        document.getElementById('edit-partner-form').onsubmit = (event) => {
          event.preventDefault();
          partner.nome = document.getElementById('edit-partner-name').value;
          partner.qual = document.getElementById('edit-partner-qual').value;
          partner.pais_origem =
            document.getElementById('edit-partner-pais').value;
          PartnerCard(partners, true);
          $('#editModal').modal('hide');
        };
      });
      cardBody.appendChild(editButton);
    }

    card.appendChild(cardBody);
    partnerCard.appendChild(card);
    partnersContainer.appendChild(partnerCard);
  });
}
2;
