const navLinks = document.querySelectorAll('.nav-item a');
const pages = document.querySelectorAll('.page');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      navLinks[entry.target.dataset.index].classList.toggle(
        'active-nav',
        entry.isIntersecting
      );
    });
  },
  { threshold: 0.2 }
);

pages.forEach((page) => {
  observer.observe(page);
});
