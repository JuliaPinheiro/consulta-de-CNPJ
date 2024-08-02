export function formatCNPJ(cnpj) {
  return cnpj.replace(/\D/g, '');
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
}
