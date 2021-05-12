const inputs = document.querySelectorAll('.control-input');

function handleUpdate() {
    const rootElement = document.documentElement;
    const units = this.dataset.units || '';
    rootElement.style.setProperty(`--${this.name}`, this.value + units)
}

inputs.forEach(elem => elem.addEventListener('change', handleUpdate))
inputs.forEach(elem => elem.addEventListener('mousemove', handleUpdate))