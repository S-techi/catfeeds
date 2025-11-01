const faqs = document.querySelectorAll('.faq-box');

faqs.forEach(faq => {
  faq.querySelector('.faq-question').addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
