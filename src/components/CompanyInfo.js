export function CompanyInfo(data) {
  const infoFields = document.getElementById('info-fields');
  infoFields.innerHTML = `
    <div>
      <label>Nome:</label>
      <input type="text" value="${data.nome}" disabled>
    </div>
    <div>
      <label>Razão Social:</label>
      <input type="text" value="${data.razao_social}" disabled>
    </div>
    <div>
      <label>Data de Abertura:</label>
      <input type="text" value="${data.data_inicio_atividade}" disabled>
    </div>
    <div>
      <label>Situação:</label>
      <input type="text" value="${data.situacao}" disabled>
    </div>
    <div>
      <label>Atividade Principal:</label>
      <input type="text" value="${data.cnae_fiscal_descricao}" disabled>
    </div>
    <div>
      <label>Endereço Completo:</label>
      <input type="text" value="${data.logradouro}, ${data.numero} - ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}" disabled>
    </div>
    <div>
      <label>Telefone:</label>
      <input type="text" value="${data.ddd_telefone_1}" disabled>
    </div>
    <div>
      <label>E-mail:</label>
      <input type="text" value="${data.email}" disabled>
    </div>
  `;
}
