export function PartnerCard(partners) {
  const partnersDiv = document.getElementById('partners');
  partnersDiv.innerHTML = '';
  partners.forEach((partner) => {
    const partnerDiv = document.createElement('div');
    partnerDiv.innerHTML = `
      <div>
        <label>Nome do Sócio:</label>
        <input type="text" value="${partner.nome}" disabled>
      </div>
      <div>
        <label>Qualificação:</label>
        <input type="text" value="${partner.qualificacao}" disabled>
      </div>
    `;
    partnersDiv.appendChild(partnerDiv);
  });
}
