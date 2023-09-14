const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastBoxChecked;

function handleCheck(e) {
    let inBetween = false;

    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastBoxChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastBoxChecked = this;
}

checkboxes.forEach(box => box.addEventListener('click', handleCheck));
