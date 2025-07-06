
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll progress indicator
        function updateScrollProgress() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            document.getElementById('scrollProgress').style.width = scrollProgress + '%';
        }

        window.addEventListener('scroll', updateScrollProgress);

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            }
        });

        // Add animation classes on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.skill-card, .project-card, .about-card, .contact-card').forEach(el => {
            observer.observe(el);
        });

        // Mobile menu toggle (placeholder for mobile functionality)
        document.querySelector('.mobile-toggle').addEventListener('click', function() {
            // Add mobile menu functionality here if needed
            console.log('Mobile menu toggle clicked');
        });

        // Add floating animation to profile card
        setInterval(() => {
            const profileCard = document.querySelector('.profile-card');
            if (profileCard) {
                profileCard.style.transform = 'translateY(' + (Math.sin(Date.now() * 0.001) * 5) + 'px)';
            }
        }, 16);
    