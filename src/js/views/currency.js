class CurrencyUI {
    constructor() {
        this.currency = document.getElementById('currency');
        this.dictionary = {
            USD: '$',
            EUR: '€',
            RUB: '₽'
        }
    }

    get currencyValue() {
        return this.currency.value;
    }

    getCurrencySymbol() {
        return this.dictionary[this.currency.value];
    }
}

const currencyUI = new CurrencyUI();

export default currencyUI;