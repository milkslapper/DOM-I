const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const aTags = document.querySelectorAll('a');
aTags.forEach((link, i) => link.textContent = siteContent['nav'][`nav-item-${i+1}`])

// const aTags = document.querySelectorAll('a');
// aTags[0].textContent = siteContent['nav']['nav-item-1'];
// aTags[1].textContent = siteContent['nav']['nav-item-2'];
// aTags[2].textContent = siteContent['nav']['nav-item-3'];
// aTags[3].textContent = siteContent['nav']['nav-item-4'];
// aTags[4].textContent = siteContent['nav']['nav-item-5'];
// aTags[5].textContent = siteContent['nav']['nav-item-6'];

const headerOne = document.querySelector('h1');
headerOne.textContent = siteContent["cta"]["h1"];

const btn = document.querySelector('button');
btn.textContent = siteContent["cta"]["button"];

const hFourTags = document.querySelectorAll('h4');
hFourTags[0].textContent = siteContent["main-content"]["features-h4"];
hFourTags[1].textContent = siteContent["main-content"]["about-h4"];
hFourTags[2].textContent = siteContent["main-content"]["services-h4"];
hFourTags[3].textContent = siteContent["main-content"]["product-h4"];
hFourTags[4].textContent = siteContent["main-content"]["vision-h4"];
hFourTags[5].textContent = siteContent["contact"]["contact-h4"];

const pTags = document.querySelectorAll('p');
pTags[0].textContent = siteContent["main-content"]["features-content"];
pTags[1].textContent = siteContent["main-content"]["about-content"];
pTags[2].textContent = siteContent["main-content"]["services-content"];
pTags[3].textContent = siteContent["main-content"]["product-content"];
pTags[4].textContent = siteContent["main-content"]["vision-content"];
pTags[5].textContent = siteContent["contact"]["address"];
pTags[6].textContent = siteContent["contact"]["phone"];
pTags[7].textContent = siteContent["contact"]["email"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

const navText = document.querySelectorAll('a');
navText.forEach(function(element) {
 element.style.color = 'green';
});

const newParagraph = document.createElement('p');

newParagraph.textContent = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"

const bottomContent = document.querySelector('.bottom-content')
bottomContent.appendChild(newParagraph);





