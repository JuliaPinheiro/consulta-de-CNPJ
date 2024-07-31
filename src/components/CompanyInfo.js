export function CompanyInfo(data, isEditable = false) {
  const infoFields = document.getElementById('info-fields');
  infoFields.innerHTML = `
    <div class="col-md-6 mb-3">
      <label>Nome:</label>
      <input type="text" class="form-control" value="${data.nome}" ${
    isEditable ? '' : 'disabled'
  }>
    </div>
    <div class="col-md-6 mb-3">
      <label>Razão Social:</label>
      <input type="text" class="form-control" value="${data.razao_social}" ${
    isEditable ? '' : 'disabled'
  }>
    </div>
    <div class="col-md-6 mb-3">
      <label>Data de Abertura:</label>
      <input type="text" class="form-control" value="${
        data.data_inicio_atividade
      }" ${isEditable ? '' : 'disabled'}>
    </div>
    <div class="col-md-6 mb-3">
      <label>Situação:</label>
      <input type="text" class="form-control" value="${data.situacao}" ${
    isEditable ? '' : 'disabled'
  }>
    </div>
    <div class="col-md-6 mb-3">
      <label>Atividade Principal:</label>
      <input type="text" class="form-control" value="${
        data.cnae_fiscal_descricao
      }" ${isEditable ? '' : 'disabled'}>
    </div>
    <div class="col-md-6 mb-3">
      <label>Endereço Completo:</label>
      <input type="text" class="form-control" value="${data.logradouro}, ${
    data.numero
  } - ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}" ${
    isEditable ? '' : 'disabled'
  }>
    </div>
    <div class="col-md-6 mb-3">
      <label>Telefone:</label>
      <input type="text" class="form-control" value="${data.ddd_telefone_1}" ${
    isEditable ? '' : 'disabled'
  }>
    </div>
    <div class="col-md-6 mb-3">
      <label>E-mail:</label>
      <input type="text" class="form-control" value="${data.email}" ${
    isEditable ? '' : 'disabled'
  }>
    </div>
  `;
}
