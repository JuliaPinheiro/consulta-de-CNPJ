import { fetchCompanyData } from './api/brasilapi.js';
import { CompanyInfo } from './components/CompanyInfo.js';
import { PartnerCard } from './components/PartnerCard.js';

document
  .getElementById('cnpj-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();
    let cnpj = document.getElementById('cnpj-input').value.trim();
    const errorMessage = document.getElementById('error-message');
    const companyInfo = document.getElementById('company-info');

    cnpj = cleanCNPJ(cnpj);

    if (cnpj) {
      try {
        const data = await fetchCompanyData(cnpj);
        CompanyInfo(data);
        PartnerCard(data.qsa);
        companyInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        document
          .getElementById('edit-button')
          .addEventListener('click', enableEditing);
        document
          .getElementById('save-button')
          .addEventListener('click', saveChanges);
      } catch (error) {
        errorMessage.classList.remove('hidden');
        companyInfo.classList.add('hidden');
        console.error('Erro ao buscar CNPJ:', error);
      }
    }
  });

function cleanCNPJ(cnpj) {
  return cnpj.replace(/[^\d]/g, '');
}

function enableEditing() {
  const inputs = document.querySelectorAll(
    '#info-fields input, #partners input'
  );
  inputs.forEach((input) => (input.disabled = false));
  document.getElementById('edit-button').classList.add('hidden');
  document.getElementById('save-button').classList.remove('hidden');
}

function saveChanges() {
  const inputs = document.querySelectorAll(
    '#info-fields input, #partners input'
  );
  inputs.forEach((input) => (input.disabled = true));
  document.getElementById('edit-button').classList.remove('hidden');
  document.getElementById('save-button').classList.add('hidden');
}
