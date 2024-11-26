const formatCurrency = (amount) => {
    amount = Math.round(amount);
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default formatCurrency;