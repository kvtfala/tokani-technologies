const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const scopeForm = document.querySelector('#scope-form');
if (scopeForm) {
  scopeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(scopeForm).entries());
    const summary = [
      'TOKANI INITIAL SCOPING ENQUIRY',
      '',
      `Name: ${data.name || ''}`,
      `Business: ${data.business || ''}`,
      `Email: ${data.email || ''}`,
      `Phone: ${data.phone || ''}`,
      `Stage: ${data.stage || ''}`,
      `Need: ${data.need || ''}`,
      `Current setup: ${data.current || ''}`,
      `What would make this project successful: ${data.success || ''}`
    ].join('\n');
    navigator.clipboard?.writeText(summary);
    const note = document.querySelector('#form-note');
    if (note) {
      note.textContent = 'Your enquiry summary has been prepared and copied to your clipboard where supported. Contact-channel/CRM delivery will be connected before the public launch.';
      note.hidden = false;
      note.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}
