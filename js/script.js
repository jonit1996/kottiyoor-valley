// --- CONFIGURATION: Add/Edit Banner Slides Here ---
const heroSlides = [
    {
        image: 'assets/images/hero-banner-1.jpg',
        title: "Welcome to Kottiyoor Valley",
        subtitle: "Experience Nature's Embrace in Kerala"
    },
    {
        image: 'assets/images/hero-banner-2.jpg',
        title: "Welcome to Kottiyoor Valley",
        subtitle: "Peaceful atmosphere for you and your loved ones"
    },
    {
        image: 'assets/images/hero-banner-3.jpg',
        title: "Welcome to Kottiyoor Valley",
        subtitle: "The perfect venue for celebrations and gatherings"
    },
	{
        image: 'assets/images/hero-banner-4.jpg',
        title: "Welcome to Kottiyoor Valley",
        subtitle: "Experience Nature's Embrace in Kannur"
    }
];

// --- HERO SLIDER LOGIC ---
const heroContainer = document.querySelector('.hero');
if(heroContainer) {
    // 1. Generate Slides Dynamically
    heroSlides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = index === 0 ? 'slide active' : 'slide';
        slideDiv.style.backgroundImage = `url('${slide.image}')`;
        heroContainer.prepend(slideDiv); // Add before content
    });

    const slides = document.querySelectorAll('.slide');
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        
        // Update text (optional: add fade effect for smoother transition)
        heroTitle.innerText = heroSlides[currentSlide].title;
        heroSubtitle.innerText = heroSlides[currentSlide].subtitle;
    }
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// --- MOBILE MENU ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// --- FORM HANDLER (Generic) ---
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent locally. (Connect a backend to process real emails).");
        form.reset();
    });
});