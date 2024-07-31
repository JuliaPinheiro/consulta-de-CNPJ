export async function fetchCompanyData(cnpj) {
  try {
    const response = await fetch(
      `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
    );
    if (!response.ok) {
      throw new Error('Erro na API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Erro ao buscar CNPJ: ${error.message}`);
  }
}
