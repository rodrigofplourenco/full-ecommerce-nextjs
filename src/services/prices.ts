export function calculatePrice(formula: string, metadata: any) {
  const parsedFormula = formula.replace(/\[(.*?)\]/g, (match, param) => {
    return String(metadata[param]);
  });

  const result = eval(parsedFormula)

  return result
}

export function formatPrice(price: number) {
  return price ? price.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }) : 'NaN'
}
