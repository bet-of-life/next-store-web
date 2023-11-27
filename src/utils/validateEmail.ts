export function validarEmail(email: string): boolean {
  const padrao: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return padrao.test(email);
}