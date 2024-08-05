import { fetchCompanyData } from './api/brasilapi.js';
import { CompanyInfo } from './components/CompanyInfo.js';
import { PartnerCard } from './components/PartnerCard.js';
import { formatCNPJ } from './utils/formatters.js';

let currentData = null;

const clearFields = () => {
  document.getElementById('info-fields').innerHTML = '';
  document.getElementById('partners').innerHTML = '';
  document.getElementById('company-info').classList.add('d-none');
  document.getElementById('error-message').classList.add('d-none');
};

const toggleEditSaveButtons = (isEditing) => {
  document.getElementById('edit-button').classList.toggle('d-none', isEditing);
  document.getElementById('save-button').classList.toggle('d-none', !isEditing);
};

const handleError = (error) => {
  console.error('Erro ao buscar os dados da empresa:', error);
  document.getElementById('error-message').classList.remove('d-none');
};

document
  .getElementById('cnpj-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const cnpjInput = document.getElementById('cnpj-input').value;
    const formattedCnpj = formatCNPJ(cnpjInput);

    clearFields();

    try {
      const companyData = await fetchCompanyData(formattedCnpj);
      currentData = companyData;
      document.getElementById('company-info').classList.remove('d-none');
      CompanyInfo(companyData);
      PartnerCard(companyData.qsa);
    } catch (error) {
      handleError(error);
    }
  });

document.getElementById('edit-button').addEventListener('click', () => {
  CompanyInfo(currentData, true);
  PartnerCard(currentData.qsa, true);
  toggleEditSaveButtons(true);
});

document.getElementById('save-button').addEventListener('click', () => {
  const inputs = document.querySelectorAll(
    '#info-fields input, #partners input'
  );
  inputs.forEach((input) => {
    input.setAttribute('disabled', 'disabled');
  });
  toggleEditSaveButtons(false);
});
