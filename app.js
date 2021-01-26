const accordionHeader1 = document.getElementById('accordion-header-1');
const accordionContent1 = document.getElementById('accordion-content-1');

const accordionHeader2 = document.getElementById('accordion-header-2');
const accordionContent2 = document.getElementById('accordion-content-2');

const accordionHeader3 = document.getElementById('accordion-header-3');
const accordionContent3 = document.getElementById('accordion-content-3');

accordionHeader1.addEventListener('click', () => {
    accordionContent1.classList.toggle('accordion-selected');
});

accordionHeader2.addEventListener('click', () => {
    accordionContent2.classList.toggle('accordion-selected');
});

accordionHeader3.addEventListener('click', () => {
    accordionContent3.classList.toggle('accordion-selected');
});