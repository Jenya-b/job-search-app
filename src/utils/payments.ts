export const getPayments = (from: number, to: number, currency: string): string => {
  if (from && to) return `з/п ${from}-${to} ${currency}`;
  if (!(from || to)) return `з/п от ${from} ${currency}`;
  if (!to) return `з/п ${from} ${currency}`;
  return `з/п ${to} ${currency}`;
};
