function selectRow(row) {
    "use strict";
    var firstInput = row.getElementsByTagName('input')[0];
    if (event.target.type !== 'checkbox') {
        firstInput.checked = !firstInput.checked;
    }
}