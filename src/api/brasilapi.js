export async function fetchCompanyData(cnpj) {
  if (!/^\d{14}$/.test(cnpj)) {
    throw new Error('CNPJ inválido. Deve conter 14 dígitos numéricos.');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(
      `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`,
      {
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Erro ao buscar CNPJ: requisição expirada.');
    }
    throw new Error(`Erro ao buscar CNPJ: ${error.message}`);
  }
}
