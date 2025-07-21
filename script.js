let partyCount = 0;
let isPartyMode = false;

const jokes = [
	'Why did the 20-year-old bring a ladder to the bar? Because they heard the drinks were on the house! 🍻',
	"What's the difference between 19 and 20? One year and a whole lot of pretending to be mature! 😎",
	"Why don't 20-year-olds ever get cold? Because they're always surrounded by their hot takes! 🔥",
	"What do you call a 20-year-old's budget? A work of fiction! 📚💸",
	"Why did the 20-year-old become a photographer? They had a lot of exposure... to their parents' disappointment! 📸",
	"What's a 20-year-old's favorite type of music? Anything their parents don't understand! 🎵",
];

const adviceList = [
	"Remember: You're not lost, you're just taking the scenic route through life! 🗺️",
	'Pro tip: Coffee counts as a vegetable if you believe hard enough! ☕',
	"Life hack: If you can't afford therapy, just talk to your houseplants! 🌱",
	'Wisdom: Your 20s are for making mistakes so you have good stories in your 30s! 📖',
	"Truth: Nobody actually knows what they're doing, we're all just winging it! 🕊️",
	"Fact: You're still young enough to blame everything on 'still figuring it out'! 🤷‍♂️",
];

const loveMessages = [
	"You're officially too old for kiddie pools but too young for real responsibilities! Perfect! 🏊‍♂️",
	"Happy Birthday to someone who's 20 years young and still counting! 🎈",
	"You've leveled up to Level 20! New abilities unlocked: Paying bills and existential dread! 🎮",
	'Cheers to 20 years of being absolutely awesome (most of the time)! 🥳',
	"You're not getting older, you're just increasing in value like a fine wine! 🍷",
	'Happy 20th! May your WiFi be strong and your coffee stronger! 📶☕',
];

function tellJoke() {
	const jokeDisplay = document.getElementById('joke-display');
	const jokeText = document.getElementById('joke-text');

	const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
	jokeText.textContent = randomJoke;
	jokeDisplay.classList.remove('hidden');

	// Add some sparkle effect
	createSparkles();
}

function giveAdvice() {
	const wisdomText = document.getElementById('wisdom-text');
	const randomAdvice =
		adviceList[Math.floor(Math.random() * adviceList.length)];
	wisdomText.textContent = randomAdvice;

	// Add bounce animation
	wisdomText.style.animation = 'bounce 1s ease';
	setTimeout(() => {
		wisdomText.style.animation = '';
	}, 1000);
}

let partyAudio = null;

function startParty() {
	partyCount++;
	document.getElementById('party-count').textContent = partyCount;

	// Play party music
	playPartyMusic();

	// Create confetti
	createConfetti();

	// Create emoji rain
	createEmojiRain();

	// Play party sound effect (visual feedback)
	document.body.style.animation = 'none';
	document.body.offsetHeight; // Trigger reflow
	document.body.style.animation = 'gradientShift 0.5s ease';
}

function playPartyMusic() {
	// Local audio file path - replace with your actual filename
	const songPath = './birthday-song.mp3'; // Change this to your actual filename

	// Stop any currently playing music
	if (partyAudio) {
		partyAudio.pause();
		partyAudio.currentTime = 0;
	}

	// Create new audio element
	partyAudio = new Audio(songPath);
	partyAudio.volume = 0.7; // Set volume to 70%

	// Play the music
	partyAudio.play().catch((error) => {
		console.log('Audio playback failed:', error);
		// Fallback: show a message if audio fails
		alert('🎵 Party music ready! (Audio file may need to be loaded)');
	});

	// Optional: Stop the music after 30 seconds to avoid it playing too long
	setTimeout(() => {
		if (partyAudio) {
			partyAudio.fadeOut = setInterval(() => {
				if (partyAudio.volume > 0.1) {
					partyAudio.volume -= 0.1;
				} else {
					partyAudio.pause();
					clearInterval(partyAudio.fadeOut);
				}
			}, 200);
		}
	}, 30000); // 30 seconds
}

function showLove() {
	const jokeDisplay = document.getElementById('joke-display');
	const jokeText = document.getElementById('joke-text');

	const randomLove =
		loveMessages[Math.floor(Math.random() * loveMessages.length)];
	jokeText.textContent = randomLove;
	jokeDisplay.classList.remove('hidden');

	// Create heart effects
	createHearts();
}

function createConfetti() {
	const colors = ['#ff6b35', '#f7931e', '#ffd23f', '#06ffa5', '#5d5fef'];

	for (let i = 0; i < 50; i++) {
		const confetti = document.createElement('div');
		confetti.classList.add('confetti');
		confetti.style.left = Math.random() * 100 + 'vw';
		confetti.style.background =
			colors[Math.floor(Math.random() * colors.length)];
		confetti.style.animationDelay = Math.random() * 3 + 's';
		confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
		document.body.appendChild(confetti);

		setTimeout(() => {
			confetti.remove();
		}, 5000);
	}
}

function createEmojiRain() {
	const emojis = ['🎉', '🎂', '🎈', '🎁', '🥳', '🎊', '🍰', '🎵'];

	for (let i = 0; i < 20; i++) {
		const emoji = document.createElement('div');
		emoji.classList.add('emoji-rain');
		emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
		emoji.style.left = Math.random() * 100 + 'vw';
		emoji.style.animationDelay = Math.random() * 2 + 's';
		document.body.appendChild(emoji);

		setTimeout(() => {
			emoji.remove();
		}, 4000);
	}
}

function createHearts() {
	const hearts = ['❤️', '💖', '💕', '💗', '💓', '💝'];

	for (let i = 0; i < 15; i++) {
		const heart = document.createElement('div');
		heart.classList.add('emoji-rain');
		heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
		heart.style.left = Math.random() * 100 + 'vw';
		heart.style.animationDelay = Math.random() * 2 + 's';
		document.body.appendChild(heart);

		setTimeout(() => {
			heart.remove();
		}, 4000);
	}
}

function createSparkles() {
	const sparkles = ['✨', '⭐', '🌟', '💫'];

	for (let i = 0; i < 10; i++) {
		const sparkle = document.createElement('div');
		sparkle.classList.add('emoji-rain');
		sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
		sparkle.style.left = Math.random() * 100 + 'vw';
		sparkle.style.animationDelay = Math.random() * 1 + 's';
		sparkle.style.animationDuration = '2s';
		document.body.appendChild(sparkle);

		setTimeout(() => {
			sparkle.remove();
		}, 2000);
	}
}

// Auto-start some celebration when page loads
window.addEventListener('load', () => {
	setTimeout(() => {
		createConfetti();
		createEmojiRain();
	}, 1000);
});

// Add click anywhere for surprise effect
document.addEventListener('click', (e) => {
	if (e.target.tagName !== 'BUTTON') {
		createSparkles();
	}
});
