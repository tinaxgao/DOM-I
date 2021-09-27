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

const nav = document.querySelector("nav");
nav.querySelectorAll('a').forEach(i => i.style.color="green");

  const services = nav.querySelector('a:nth-of-type(1)');
    services.textContent = siteContent["nav"]["nav-item-1"];
    services.href = "#";
  const product = nav.querySelector('a:nth-of-type(2)');
    product.textContent = siteContent["nav"]["nav-item-2"];
    product.href = "#";
  const vision = nav.querySelector('a:nth-of-type(3)');
    vision.textContent = siteContent["nav"]["nav-item-3"];
    vision.href = "#";
  const features = nav.querySelector('a:nth-of-type(4)');
    features.textContent = siteContent["nav"]["nav-item-4"];
    features.href = "#";
    const about = nav.querySelector('a:nth-of-type(5)');
    about.textContent = siteContent["nav"]["nav-item-5"];
    about.href = "#";
  const contact = nav.querySelector('a:nth-of-type(6)');
    contact.textContent = siteContent["nav"]["nav-item-6"];
    contact.href = "#";
 const newLink1 = document.createElement("a");
 newLink1.textContent = "First";
 newLink1.href="#";
 nav.prepend(newLink1);

 const newLink2 = document.createElement("a");
 newLink2.textContent = "Last";
 newLink2.href="#";
 nav.appendChild(newLink2);

 //call to action
const cta = document.querySelector("h1").textContent = siteContent["cta"]["h1"];
const ctaButton = document.querySelector("button").textContent = siteContent["cta"]["button"];

const headerImg = document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];

//main content
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

//contact
const contactContent = document.querySelector(".contact");
contactContent.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
contactContent.querySelector("p:nth-of-type(1)").textContent = siteContent["contact"]["address"];
contactContent.querySelector("p:nth-of-type(2)").textContent = siteContent["contact"]["phone"];
contactContent.querySelector("p:nth-of-type(3)").textContent = siteContent["contact"]["email"];

//footer
const footer = document.querySelector("footer > p").textContent = siteContent["footer"]["copyright"];