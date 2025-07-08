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
        const audio = document.getElementById('birthdayMusic');
    
        // Show all elements
        message.classList.add('show');
        audioSection.classList.add('show');
    
        // Auto-play music (with error handling for browser policies)
        setTimeout(() => {
        audio.play().catch(error => {
            console.log('Auto-play prevented by browser policy:', error);
            // Show a friendly message if autoplay is blocked
            const audioSection = document.getElementById('audioSection');
            const playMessage = document.createElement('p');
            playMessage.style.color = '#feca57';
            playMessage.style.fontSize = '0.9rem';
            playMessage.style.marginTop = '10px';
            playMessage.textContent = '🎵 Click the play button to start the music! 🎵';
            audioSection.appendChild(playMessage);
        });
    }, 200);
    
    // Open photo gallery and start auto-carousel
    setTimeout(() => {
        gallery.classList.add('show');
        startAutoCarousel();
    }, 800);
            
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


        // Auto-carousel functionality
        function startAutoCarousel() {
        // Clear any existing interval
        if (autoCarouselInterval) {
            clearInterval(autoCarouselInterval);
        }
    
        // Start new auto-carousel (advance every 3 seconds)
        autoCarouselInterval = setInterval(() => {
            nextSlide();
        }, 3000);
    }

    function stopAutoCarousel() {
        if (autoCarouselInterval) {
            clearInterval(autoCarouselInterval);
            autoCarouselInterval = null;
        }
    }

        // Carousel functionality
        let autoCarouselInterval = null;
        let currentSlideIndex = 0;
        const totalSlides = 5;

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
            // Reset auto-carousel when user manually navigates
            if (autoCarouselInterval) {
                clearInterval(autoCarouselInterval);
                startAutoCarousel();
            }
        }

        // Close photo gallery
        function closeGallery() {
            const gallery = document.getElementById('photoGallery');
            gallery.classList.remove('show');
    
            // Stop auto-carousel when gallery is closed
            stopAutoCarousel();
    
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

        // Add event listeners for manual navigation (these will reset auto-carousel)
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.carousel-nav.prev');
    const nextBtn = document.querySelector('.carousel-nav.next');
    
    prevBtn.addEventListener('click', () => {
        if (autoCarouselInterval) {
            clearInterval(autoCarouselInterval);
            startAutoCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (autoCarouselInterval) {
            clearInterval(autoCarouselInterval);
            startAutoCarousel();
        }
    });
});

