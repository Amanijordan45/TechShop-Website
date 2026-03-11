// ===== NAVBAR TOGGLE =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};

// ===== HERO BACKGROUND SLIDESHOW =====
const heroBg = document.getElementById("heroBg");

// ✅ Online images URLs
const images = [
  "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=1950&q=80"
];

let current = 0;

function changeBackground(){
  current++;
  if(current >= images.length) current = 0;

  // Fade out
  heroBg.style.opacity = 0;

  setTimeout(() => {
    heroBg.style.backgroundImage = `url('${images[current]}')`;
    heroBg.style.opacity = 1; // Fade in
  }, 500); // Matches half of transition
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);


// ===== HERO TYPING EFFECT =====
const typedText = document.getElementById("typed-text");
const textToType = ["TecShop", "Your IT Store", "Tech Products"]; // Words to type
let typeIndex = 0;
let charIndex = 0;

function type(){
  if(charIndex < textToType[typeIndex].length){
    typedText.textContent += textToType[typeIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150); // typing speed
  } else {
    setTimeout(erase, 1500); // pause before erasing
  }
}

function erase(){
  if(charIndex > 0){
    typedText.textContent = textToType[typeIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100); // erasing speed
  } else {
    typeIndex++;
    if(typeIndex >= textToType.length) typeIndex = 0;
    setTimeout(type, 500);
  }
}

// Start typing effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});

// ===== PRODUCT FILTER =====
const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    // Highlight active button
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    productCards.forEach(card => {
      if(category === "all" || card.dataset.category === category){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ===== PRODUCT MODAL =====
const productBtns = document.querySelectorAll(".product-btn");

productBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = btn.closest(".product-card");
    const title = card.querySelector("h3").textContent;
    const price = card.querySelector(".price").textContent;
    const img = card.querySelector("img").src;

    // Create modal
    const modal = document.createElement("div");
    modal.classList.add("product-modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <img src="${img}" alt="${title}">
        <h3>${title}</h3>
        <p class="price">${price}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. High-quality IT product perfect for your needs.</p>
        <a href="#" class="btn-hero">Buy Now</a>
      </div>
    `;
    document.body.appendChild(modal);

    // Close modal
    modal.querySelector(".close-btn").addEventListener("click", () => {
      modal.remove();
    });

    // Close by clicking outside
    modal.addEventListener("click", (event) => {
      if(event.target === modal) modal.remove();
    });
  });
});

// ===== SERVICE MODALS =====
const serviceBtns = document.querySelectorAll(".service-btn");
serviceBtns.forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const title = btn.dataset.title;
    const desc = btn.dataset.desc;

    const modal = document.createElement("div");
    modal.classList.add("service-modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h3>${title}</h3>
        <p>${desc}</p>
        <a href="products.html" class="btn-hero">Explore Products</a>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close-btn").addEventListener("click", ()=>modal.remove());
    modal.addEventListener("click", (event)=>{if(event.target===modal) modal.remove();});
  });
});

// ===== FAQ Accordion =====
const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {
  const question = card.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Close other open cards
    faqCards.forEach(c => {
      if(c !== card) {
        c.classList.remove('active');
      }
    });

    // Toggle current card
    card.classList.toggle('active');
  });
});

const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showNextTestimonial() {
  cards.forEach((card, i) => {
    card.style.display = i === currentIndex ? 'block' : 'none';
  });
  currentIndex = (currentIndex + 1) % cards.length;
}

// Initially show first
showNextTestimonial();
setInterval(showNextTestimonial, 5000); // change every 5 seconds

// Highlight active nav link
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
  if(link.href === window.location.href){
    link.style.color = '#ffd700'; // active page color
  }
});