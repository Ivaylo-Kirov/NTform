const fname = document.querySelector('#fnameid');
const button = document.querySelector('#sbutton');

fname.addEventListener('keyup', () => {
    console.log(fname.value);
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submitting with ' + fname.value);
});

button.addEventListener('mouseover', (e) => {
    console.log('hovering over button');
});