export function CompanyInfo(data) {
  const infoFields = document.getElementById('info-fields');
  infoFields.innerHTML = `
    <div class="col-md-6 mb-3">
      <label>Nome:</label>
      <input type="text" class="form-control" value="${data.nome}" disabled>
    </div>
    <div class="col-md-6 mb-3">
      <label>Razão Social:</label>
      <input type="text" class="form-control" value="${data.razao_social}" disabled>
    </div>
    <div class="col-md-6 mb-3">
      <label>Data de Abertura:</label>
      <input type="text" class="form-control" value="${data.data_inicio_atividade}" disabled>
    </div>
    <div class="col-md-6 mb-3">
      <label>Situação:</label>
      <input type="text" class="form-control" value="${data.situacao}" disabled>
    </div>
    <div class="col-md-6 mb-3">
      <label>Atividade Principal:</label>
      <input type="text" class="form-control" value="${data.cnae_fiscal_descricao}" disabled>
    </div>
    <div class="col-md-6 mb-3">
      <label>Endereço Completo:</label>
      <input type="text" class="form-control" value="${data.logradouro}, ${data.numero} - ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}" disabled>
    </div>
    <div class="col-md-6 mb-3">
      <label>Telefone:</label>
      <input type="text" class="form-control" value="${data.ddd_telefone_1}" disabled>
    </div>
    <div class="col-md-6 mb-3">
      <label>E-mail:</label>
      <input type="text" class="form-control" value="${data.email}" disabled>
    </div>
  `;
}
