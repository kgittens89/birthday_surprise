        // Create confetti
        function createConfetti() {
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 3 + 's';
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                document.body.appendChild(confetti);
                
                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

        // Show surprise message, music, and photo gallery all at once
        function showSurprise() {
            const message = document.getElementById('surpriseMessage');
            const audioSection = document.getElementById('audioSection');
            const gallery = document.getElementById('photoGallery');
            
            // Show all elements
            message.classList.add('show');
            audioSection.classList.add('show');
            
            // Open photo gallery with a slight delay for dramatic effect
            setTimeout(() => {
                gallery.classList.add('show');
            }, 500);
            
            // Create multiple confetti bursts
            createConfetti();
            setTimeout(() => createConfetti(), 1000);
            setTimeout(() => createConfetti(), 2000);
            
            showMusicalNotes();
            
            // Play celebration sound (visual feedback)
            const btn = document.querySelector('.surprise-btn');
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        }

        // Carousel functionality
        let currentSlideIndex = 0;
        const totalSlides = 4;

        function updateCarousel() {
            const track = document.getElementById('carouselTrack');
            const currentSlideSpan = document.getElementById('currentSlide');
            const dots = document.querySelectorAll('.carousel-dot');
            
            // Move carousel
            track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
            
            // Update counter
            currentSlideSpan.textContent = currentSlideIndex + 1;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlideIndex);
            });
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlideIndex = index;
            updateCarousel();
        }

        // Close photo gallery
        function closeGallery() {
            const gallery = document.getElementById('photoGallery');
            gallery.classList.remove('show');
            // Reset carousel to first slide when closing
            currentSlideIndex = 0;
            updateCarousel();
        }

        // Show musical notes animation
        function showMusicalNotes() {
            const notes = document.querySelectorAll('.music-note');
            notes.forEach((note, index) => {
                setTimeout(() => {
                    note.classList.add('show');
                    setTimeout(() => {
                        note.classList.remove('show');
                    }, 3000);
                }, index * 300);
            });
        }

        // Auto-create some confetti on page load
        window.addEventListener('load', () => {
            setTimeout(createConfetti, 2000);
        });

        // Create periodic confetti
        setInterval(createConfetti, 10000);