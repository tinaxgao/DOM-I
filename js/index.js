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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

  const services = document.createElement('a');
    services.textContent = "Services";
    services.href = "#";
    document.querySelector("nav").appendChild(services);
  const product = document.createElement('a');
    product.textContent = "Product";
    product.href = "#";
    document.querySelector("nav").appendChild(product);
  const vision = document.createElement('a');
    vision.textContent = "Vision";
    vision.href = "#";
    document.querySelector("nav").appendChild(vision);
  const features = document.createElement('a');
    features.textContent = "Features";
    features.href = "#";
    document.querySelector("nav").appendChild(features);
    const about = document.createElement('a');
    about.textContent = "About";
    about.href = "#";
    document.querySelector("nav").appendChild(about);
  const contact = document.createElement('a');
    contact.textContent = "Contact";
    contact.href = "#";
    document.querySelector("nav").appendChild(contact);

const cta = document.querySelector("h1");
cta.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector("button").textContent = siteContent["cta"]["button"];

const headerImg = document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];

const topContent = document.querySelector(".top-content");
const bottomContent = document.querySelector(".bottom-content");

const featuresContent = topContent.querySelector(".text-content:nth-of-type(1)");
featuresContent.querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
featuresContent.querySelector("p").textContent = siteContent["main-content"]["features-content"];

const aboutContent = topContent.querySelector(".text-content:nth-of-type(2)");
aboutContent.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
aboutContent.querySelector("p").textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img").src= siteContent["main-content"]["middle-img-src"];

const servicesContent = bottomContent.querySelector(".text-content:nth-of-type(1)");
servicesContent.querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
servicesContent.querySelector("p").textContent = siteContent["main-content"]["services-content"];

const productContent = bottomContent.querySelector(".text-content:nth-of-type(2)");
productContent.querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
productContent.querySelector("p").textContent = siteContent["main-content"]["product-content"];

const visionContent = bottomContent.querySelector(".text-content:nth-of-type(3)");
visionContent.querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
visionContent.querySelector("p").textContent = siteContent["main-content"]["vision-content"];

const contactContent = document.querySelector(".contact");
contactContent.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
contactContent.querySelector("p:nth-of-type(1)").textContent = siteContent["contact"]["address"];
contactContent.querySelector("p:nth-of-type(2)").textContent = siteContent["contact"]["phone"];
contactContent.querySelector("p:nth-of-type(3)").textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer > p").textContent = siteContent["footer"]["copyright"];