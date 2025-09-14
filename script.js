document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonials.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            testimonials[index].classList.add('active');
        }
        
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
            showTestimonial(currentIndex);
        });
        
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
            showTestimonial(currentIndex);
        });
        
        setInterval(function() {
            currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
            showTestimonial(currentIndex);
        }, 5000);
    }
    
    const serviceButtons = document.querySelectorAll('.service-btn');
    const modal = document.getElementById('serviceModal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    if (modal) {
        const serviceDescriptions = {
            'Веб-розробка': 'Ми створюємо сучасні, адаптивні веб-сайти та веб-додатки з використанням останніх технологій. Наш підхід гарантує високу продуктивність та зручність використання.',
            'Мобільні додатки': 'Розробка мобільних додатків для iOS та Android. Ми створюємо інтуїтивні та функціональні додатки, що відповідають потребам ваших користувачів.',
            'UI/UX дизайн': 'Наші дизайнери створюють зручні та естетичні інтерфейси, що покращують взаємодію користувача з вашим продуктом.',
            'Хмарні рішення': 'Налаштування та підтримка хмарної інфраструктури для бізнесу будь-якого розміру. Безпека та масштабованість гарантовані.',
            'Аналітика даних': 'Ми допомагаємо збирати, аналізувати та візуалізувати дані для прийняття обґрунтованих бізнес-рішень.',
            'SEO оптимізація': 'Просування вашого сайту в пошукових системах для залучення більшої кількості відвідувачів та потенційних клієнтів.'
        };
        
        if (serviceButtons.length > 0) {
            serviceButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const service = this.getAttribute('data-service');
                    modalTitle.textContent = service;
                    modalDescription.textContent = serviceDescriptions[service] || 'Опис послуги наразі недоступний.';
                    modal.style.display = 'flex';
                });
            });
        }
        
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
        
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Будь ласка, введіть ваше ім\'я';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Будь ласка, введіть ваш email';
                isValid = false;
            } else if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = 'Будь ласка, введіть коректний email';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Будь ласка, введіть ваше повідомлення';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            if (isValid) {
                alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
                contactForm.reset();
            }
        });
    }
    
    const priceButtons = document.querySelectorAll('.price-btn');
    
    if (priceButtons.length > 0) {
        priceButtons.forEach(button => {
            button.addEventListener('click', function() {
                const plan = this.parentElement.querySelector('h3').textContent;
                alert(`Дякуємо за вибір тарифу "${plan}"! Наш менеджер зв'яжеться з вами для уточнення деталей.`);
            });
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});