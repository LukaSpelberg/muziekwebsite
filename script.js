// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.menu a');
const menuOverlay = document.querySelector('.menu-overlay');

if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  });
  if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  }
}

// Language switching logic
const languageSwitcher = document.querySelector('.language-switcher');
const langButtons = document.querySelectorAll('.lang-btn');
const defaultLang = 'nl';
let currentLang = localStorage.getItem('siteLang') || defaultLang;

function setActiveLangButton(lang) {
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('siteLang', lang);
  setActiveLangButton(lang);
  updateAboutPageLang(lang);
  updateIndexPageLang(lang);
  updateLessonsPageLang(lang);
  // Update <html lang="..."> for SEO
  document.documentElement.lang = lang;
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

setActiveLangButton(currentLang);

// About page translations
function updateAboutPageLang(lang) {
  if (!document.querySelector('.about-story')) return;
  const translations = {
    nl: {
      h1: 'Een leven in muziek',
      story1: 'Alicia Spelberg werd geboren in een muzikale familie. Muziek speelde al generaties een leidende rol. Aan Alicia werd een indrukwekkende collectie muziekboeken van hen overgedragen. Zij maakte dierbare ervaringen met haar familieleden en bouwde een eigen leven op dat gewijd is aan de muziek.',
      story2: 'Zij had vioolles van Gijs van der Grinten, Manja de Waart en Leo Boelens. Zij deed enkele zomercursussen in Dartington en bij Coosje Wijzenbeek. Ze studeerde bij Lotje Hertzberger aan het Sweelinck conservatorium in Amsterdam en studeerde af bij Jan Hulst aan het conservatorium in Rotterdam.',
      h2: 'Muzieklessen sinds 1989, 35+ jaar!',
      philosophy: 'Al op zeer jonge leeftijd begon zij muziekles te geven en richtte zij haar lespraktijk in 1989 op. Al snel ontwikkelde zij haar vaardigheden niet alleen met vioolles geven, maar ook met piano, altviool, kwartet, muziektheorie en het arrangeren van muziek. Omdat ze ook geboren is in een familie van pedagogen, was ze al in een vroeg stadium in staat een duidelijke visie te ontwikkelen hoe zij wilde lesgeven. Deze is beproefd gebleken en tot op heden een houvast voor haar en haar leerlingen gebleven. ',
      h3: '“Haar filosofie: muziek voor het hele leven meegeven”',
      about3: 'Na een uitgebreide stage bij Manja de Waart aan de Muziekschool Amsterdam in de Bachstraat, werkte ze enige jaren daar en in Zaandam met grote groepen leerlingen. Ondertussen groeide haar praktijk consistent door van een part time naar een fulltime job, altijd in combinatie met optredens in kleine ensembles. Zij heeft drie jongens groot gebracht, die muziekles bij haar hadden vanaf hun derde jaar tot aan hun volwassenheid. De meeste kinderen blijven zo lang bij haar, indachtig de filosofie van de lessen ze muziek mee te geven voor het hele leven. '
    },
    en: {
      h1: 'A Lifetime in Music',
      story1: 'Alicia Spelberg was born into a musical family. Music played a leading role for generations. She was left with an impressive collection of music books and she had precious experiences with her family, and built a life dedicated to music of her own.',
      story2: 'She had violin lessons with Gijs van der Grinten, Manja de Waart and Leo Boelens. She attended summer courses in Dartington and with Coosje Wijzenbeek. She studied with Lotje Hertzberger at the Sweelinck Conservatory in Amsterdam and with Jan Hulst at the conservatory in Rotterdam, where she passed her final exams in 1995.',
      h2: 'Music lessons since 1989, 35+ years!',
      philosophy: 'Already at a very young age she started giving music lessons, founding her praxis in 1989. Quickly she developed her skills not only in giving violin lessons, but also in piano, viola, quartet, music theory and arranging music. Since she was also born into a family of teachers, she was able in a very early stage to make a clear vision of how she wanted to teach. This foundation has proven to be a strong one, carrying her and her pupils up to this day.',
      h3: '“Her philosophy: to give them music for their whole life”',
      about3: 'After her extensive internship with Manja de Waart at Muziekschool Amsterdam at de Bachstraat, she worked some years there and in Zaandam with large groups of pupils. Her own praxis consistently grew from a part time to a fulltime job, always combining it with performing in small ensembles. She raised three boys that had music lessons with her from the age of 3 years old till adulthood. Most children stay this long, living up to her philosophy to give them music for the whole life. But she does not only teach children, she has pupils from all ages and levels. She started out with teaching adults, getting them started or moving further where they left off and the experience she made with them is very dear to her.'
    }
  };
  const t = translations[lang];
  // Header
  const h1 = document.querySelector('.subpage-header h1');
  if (h1) h1.textContent = t.h1;
  // About story
  const aboutStory = document.querySelector('.about-story-text');
  if (aboutStory) {
    const ps = aboutStory.querySelectorAll('p');
    if (ps[0]) ps[0].textContent = t.story1;
    if (ps[1]) ps[1].textContent = t.story2;
  }
  // Philosophy section
  const aboutPhilosophy = document.querySelector('.about-philosophy');
  if (aboutPhilosophy) {
    const h2 = aboutPhilosophy.querySelector('h2');
    if (h2) h2.textContent = t.h2;
    const p = aboutPhilosophy.querySelector('p');
    if (p) p.textContent = t.philosophy;
  }
  // About3 section
  const about3 = document.querySelector('.about3');
  if (about3) {
    const h3 = about3.querySelector('h2');
    if (h3) h3.textContent = t.h3;
    const p = about3.querySelector('p');
    if (p) p.textContent = t.about3;
  }
}

// On page load, set language
document.addEventListener('DOMContentLoaded', () => {
  updateAboutPageLang(currentLang);
  updateIndexPageLang(currentLang);
  updateLessonsPageLang(currentLang);
  document.documentElement.lang = currentLang;
});

// Index page translations
function updateIndexPageLang(lang) {
  if (!document.querySelector('.hero-content')) return;
  const translations = {
    nl: {
      h1: 'Muziekpraktijk Alicia Spelberg',
      p: 'Muzieklessen voor elke leeftijd, elk niveau.',
      scroll: 'Scroll',
      aboutH2: 'Een leven in muziek',
      aboutText: 'Alicia Spelberg is een ervaren muziekdocent die viool- en pianolessen aanbiedt aan kinderen en volwassenen van elk niveau. Met meer dan 30 jaar ervaring en een achtergrond in performance en educatie, geeft ze elke leerling persoonlijke aandacht en een gestructureerde, plezierige aanpak. De lessen vinden plaats in het centrum van Amsterdam, met prachtig uitzicht op de Amstel. Of je nu beginner bent of later in het leven terugkeert naar muziek, Alicia helpt je groeien op je eigen tempo — in een ontspannen, stimulerende omgeving.',
      aboutBtn: 'Meer over Alicia →',
      lessonsH2: 'Persoonlijke muzieklessen met hart.',
      lessonsText: 'Alicia’s lessen staan bekend om hun warme, persoonlijke aanpak. Elke leerling krijgt individuele aandacht, met lessen afgestemd op hun behoeften, niveau en muzikale smaak. Of je nu solo leert of samen speelt tijdens informele optredens, leerlingen groeien in een ontspannen, gestructureerde setting waar je goed voelen voorop staat. De lessen duren 60 minuten, zodat er echt tijd is om te focussen en te genieten. Alicia geeft les aan kinderen, volwassenen en broers/zussen, zowel op locatie aan de Amstel als online. Flexibele planning is mogelijk, evenals korting via jaarcontracten voor schoolkinderen.',
      lessonsBtn: 'Meer details →',
      contactH2: 'Contact',
      contactP: 'Vragen of wil je starten met lessen? Neem contact op!',
      contactBtn: '',
      contactTel: '+31 6 20233379',
      contactMail: 'alicia_spelberg@hotmail.com'
    },
    en: {
      h1: 'Alicia Spelberg Music Studio',
      p: 'Music lessons for every age, every stage.',
      scroll: 'Scroll',
      aboutH2: 'A Lifetime in Music',
      aboutText: 'Alicia Spelberg is an experienced music teacher offering violin and piano lessons to children and adults of all levels. With over 30 years of teaching experience and a background in performance and education, she gives each student personal attention and a structured, joyful approach. Lessons take place in the center of Amsterdam, with a spectacular view on the Amstel. Whether you’re a beginner or returning to music later in life, Alicia helps you grow at your own pace — in a relaxed, encouraging setting.',
      aboutBtn: 'More about Alicia →',
      lessonsH2: 'Personal music lessons with heart.',
      lessonsText: 'Alicia’s lessons are known for their warm, personal approach. Every student receives individual attention, with lessons tailored to their needs, level, and musical taste. Whether learning solo or playing together in informal performances, pupils grow in a relaxed, structured setting where feeling good comes first. Lessons are 60 minutes, giving time to truly focus and enjoy the process. Alicia teaches children, adults and siblings, both in-person at the Amstel and online. Flexible scheduling is available, as well as discounted year contracts for schoolchildren.',
      lessonsBtn: 'More details →',
      contactH2: 'Contact',
      contactP: 'Have questions or want to start lessons? Get in touch!',
      contactBtn: '',
      contactTel: '+31 6 20233379',
      contactMail: 'alicia_spelberg@hotmail.com'
    }
  };
  const t = translations[lang];
  // Hero
  const h1 = document.querySelector('.hero-content h1');
  if (h1) h1.textContent = t.h1;
  const p = document.querySelector('.hero-content p');
  if (p) p.textContent = t.p;
  const scroll = document.querySelector('.scroll-indicator');
  if (scroll) scroll.textContent = t.scroll;
  // About preview
  const aboutH2 = document.querySelector('.about-preview h2');
  if (aboutH2) aboutH2.textContent = t.aboutH2;
  const aboutText = document.querySelector('.about-preview .about-text');
  if (aboutText) aboutText.textContent = t.aboutText;
  const aboutBtn = document.querySelector('.about-preview .btn');
  if (aboutBtn) aboutBtn.textContent = t.aboutBtn;
  // Lessons preview
  const lessonsH2 = document.querySelector('.lessons-preview h2');
  if (lessonsH2) lessonsH2.textContent = t.lessonsH2;
  const lessonsText = document.querySelector('.lessons-preview .lessons-text');
  if (lessonsText) lessonsText.textContent = t.lessonsText;
  const lessonsBtn = document.querySelector('.lessons-preview .btn');
  if (lessonsBtn) lessonsBtn.textContent = t.lessonsBtn;
  // Contact preview
  const contactH2 = document.querySelector('.contact-preview h2');
  if (contactH2) contactH2.textContent = t.contactH2;
  const contactP = document.querySelector('.contact-preview p');
  if (contactP) contactP.textContent = t.contactP;
}

// Lessons page translations
function updateLessonsPageLang(lang) {
  if (!document.querySelector('.lessons-details')) return;
  const translations = {
    nl: {
      h1: 'Persoonlijke lessen, passend bij ieders voorkeur',
      details: 'Alicia’s lesgeven wordt gekenmerkt door grote persoonlijke aandacht voor elke leerling. Tegelijk probeert ze hen met elkaar in contact te brengen tijdens regelmatige gelegenheden om samen te spelen en voor te spelen, die elke 6 tot 8 weken plaatsvinden. Ook houdt ze ervan familie of vrienden van de leerling, die zelf ook een instrument bespelen  daarbij te betrekken, met in gedachten de dierbare persoonlijke ervaringen die ze heeft gemaakt met het samenspelen met familie. Maar, omdat de lessen op maat gemaakt worden, kan het ook dat een leerling uitsluitend individueel les krijgt, precies naar ieders behoefte. Alicia houdt ervan haarzelf uit te dagen en geeft elke leerling eigen repertoire, zodat ze levendig blijft in haar wekelijkse programma en inspeelt op ieders eigen voorkeuren.',
      feelgoodH2: '“Feel good” staat altijd voorop',
      feelgood: 'Haar lesgeven wordt verder gekenmerkt door sterke structuur en coaching, waarbij "feelgood" altijd voorop staat. Zij kan lesgeven in meerdere talen en ook kan zij online lesgeven. Zij biedt lessen aan met veel flexibiliteit of lessen gebaseerd op jaarcontract. Dit contract biedt een aanzienlijke korting en is bedoeld voor schoolkinderen. Haar les tarieven volgen de adviesprijzen van de vakvereniging voor musici. '
    },
    en: {
      h1: 'Personal lessons, suiting everyone’s personal preference',
      details: 'Alicia’s teaching can be defined by great personal attention to every pupil. At the same time she tries to connect them with each other on regular occasions every 6-8 weeks with performances and playing together. Also she likes to involve family or friends of the pupil if they can play an instrument too, having such precious personal memories of playing together with her own family. But, since the lessons are highly personalised, it can also be that the pupil has only lessons on his own, just like it fits everyone’s needs. Alicia loves to challenge herself and to give every pupil different repertoire, so she stays very vivid in her weekly program and she can serve everyone’s personal preference.',
      feelgoodH2: '“Feel good” always goes first',
      feelgood: 'Her teaching can further be defined by strong structure and coaching, always putting "feelgood" first. She can also teach in multiple languages and via online lessons. She offers lessons with lots of flexibility or lessons based on a year contract. This contract provides a substantial discount and is meant for schoolchildren. Her prices follow the advice of the union for musicians. Her lessons are always 60 minutes. This way there is space for a relaxed setting, having time to practise practising and optimize results. Sibling’s can have a combined time together, having the lesson privately and spending time reading or drawing while the other one has the lesson. The lessons take place in the familyhouse next to theater Carré, where the praxis has been located since the beginning, with a spectaculair view at the river Amstel. Quartetlessons are on an alternative location.'
    }
  };
  const t = translations[lang];
  // Header
  const h1 = document.querySelector('.subpage-header h1');
  if (h1) h1.textContent = t.h1;
  // Details section
  const detailsText = document.querySelector('.lessons-detail-text p');
  if (detailsText) detailsText.textContent = t.details;
  // Feelgood section
  const feelgoodH2 = document.querySelector('.lessons-feelgood h2');
  if (feelgoodH2) feelgoodH2.textContent = t.feelgoodH2;
  const feelgoodText = document.querySelector('.lessons-feelgood p');
  if (feelgoodText) feelgoodText.textContent = t.feelgood;
}

// Carousel functionality for about and lessons previews
function startCarousel(carouselSelector) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;
  const images = carousel.querySelectorAll('.carousel-img');
  const progressBar = carousel.querySelector('.carousel-progress-bar');
  let current = 0;
  let intervalId;
  if (images.length < 2) return;

  function showImage(idx) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === idx);
    });
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      // Force reflow for transition restart
      void progressBar.offsetWidth;
      progressBar.style.transition = 'width 10s linear';
      progressBar.style.width = '100%';
    }
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  showImage(current);
  if (progressBar) {
    progressBar.style.width = '100%';
    progressBar.style.transition = 'width 10s linear';
  }
  intervalId = setInterval(nextImage, 10000);
}

document.addEventListener('DOMContentLoaded', () => {
  updateAboutPageLang(currentLang);
  updateIndexPageLang(currentLang);
  updateLessonsPageLang(currentLang);
  document.documentElement.lang = currentLang;
  // Start all carousels on the page
  document.querySelectorAll('.carousel').forEach(carousel => {
    startCarousel('.' + Array.from(carousel.classList).join('.'));
  });
});