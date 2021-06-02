import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// Init select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
    return M.FormSelect.getInstance(elem);
}

// Init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete);

export function getAutocompleteInstance(elem) {
    return M.Autocomplete.getInstance(elem);
}

// Init dateickers
const dateickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(dateickers, {
    showClearBtn: true,
    firstDay: 1,
    format: 'yyyy-mm-dd',
});

export function getDatepickerInstance(elem) {
    return M.Datepicker.getInstance(elem);
}