export function PartnerCard(partners) {
  const partnersDiv = document.getElementById('partners');
  partnersDiv.innerHTML = '';
  partners.forEach((partner) => {
    const partnerDiv = document.createElement('div');
    partnerDiv.className = 'col-md-6 mb-3';
    partnerDiv.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Nome do Sócio</h5>
          <input type="text" class="form-control mb-2" value="${partner.nome}" disabled>
          <h6 class="card-subtitle mb-2 text-muted">Qualificação</h6>
          <input type="text" class="form-control" value="${partner.qualificacao}" disabled>
        </div>
      </div>
    `;
    partnersDiv.appendChild(partnerDiv);
  });
}
