const CURRENCY_FORMATTER = new Intl.NumberFormat("sv", {
  currency: "SEK",
  style: "currency",
  currencyDisplay: "narrowSymbol"//name, code,symbol
});
function formatCurrency (price){
    return CURRENCY_FORMATTER.format(price);
}
export default formatCurrency