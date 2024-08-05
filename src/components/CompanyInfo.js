export function CompanyInfo(data, isEditable) {
  const {
    nome,
    razao_social,
    data_inicio_atividade,
    situacao,
    cnae_fiscal_descricao,
    logradouro,
    numero,
    bairro,
    municipio,
    uf,
    cep,
    ddd_telefone_1,
    email,
  } = data;

  const infoFields = document.getElementById('info-fields');
  infoFields.innerHTML = '';

  const fields = [
    { label: 'Nome', value: nome },
    { label: 'Razão Social', value: razao_social },
    { label: 'Data de Abertura', value: data_inicio_atividade },
    { label: 'Situação', value: situacao },
    { label: 'Atividade Principal', value: cnae_fiscal_descricao },
    {
      label: 'Endereço Completo',
      value: `${logradouro}, ${numero} - ${bairro}, ${municipio} - ${uf}, ${cep}`,
    },
    { label: 'Telefone', value: ddd_telefone_1 },
    { label: 'E-mail', value: email },
  ];

  fields.forEach(({ label, value }) => {
    const div = document.createElement('div');
    div.className = 'col-md-6 mb-3';

    const labelElement = document.createElement('label');
    labelElement.textContent = label;

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.value = value;
    if (!isEditable) {
      input.disabled = true;
    }

    div.appendChild(labelElement);
    div.appendChild(input);
    infoFields.appendChild(div);
  });
}
