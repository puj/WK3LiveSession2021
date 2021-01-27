const accordionHeader1 = document.getElementById('accordion-header-1');
const accordionContent1 = document.getElementById('accordion-content-1');

const accordionHeader2 = document.getElementById('accordion-header-2');
const accordionContent2 = document.getElementById('accordion-content-2');

const accordionHeader3 = document.getElementById('accordion-header-3');
const accordionContent3 = document.getElementById('accordion-content-3');

accordionHeader1.addEventListener('click', () => {
  /*
  Alternative 1: Open only one at a time
  accordionContent1.classList.add('accordion-selected');
  accordionContent2.classList.remove('accordion-selected');
  accordionContent3.classList.remove('accordion-selected');
  */

  /*
  Alternative 2: Open only one at a time AND close when clicked again
 */
  accordionContent1.classList.toggle('accordion-selected');
  accordionContent2.classList.remove('accordion-selected');
  accordionContent3.classList.remove('accordion-selected');
});

accordionHeader2.addEventListener('click', () => {
  accordionContent1.classList.remove('accordion-selected');
  accordionContent2.classList.toggle('accordion-selected');
  accordionContent3.classList.remove('accordion-selected');
});

accordionHeader3.addEventListener('click', () => {
  accordionContent1.classList.remove('accordion-selected');
  accordionContent2.classList.remove('accordion-selected');
  accordionContent3.classList.toggle('accordion-selected');
});
