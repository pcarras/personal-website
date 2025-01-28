// JavaScript for interactive elements can be added here

function createGameElement(className) {
    const element = document.createElement('div');
    element.className = className;
    return element;
}

function initGameBackground() {
    const background = document.createElement('div');
    background.className = 'game-background';
    document.body.appendChild(background);

    // Create multiple game elements
    for (let i = 0; i < 3; i++) {
        const pacman = createGameElement('pacman');
        const ghost = createGameElement('ghost');
        const tetris = createGameElement('tetris-piece');
        
        // Add random delays to animations
        pacman.style.animationDelay = `${Math.random() * 5}s`;
        ghost.style.animationDelay = `${Math.random() * 5}s`;
        tetris.style.animationDelay = `${Math.random() * 5}s`;
        
        // Random positions for tetris pieces
        tetris.style.left = `${Math.random() * 80 + 10}%`;
        
        background.appendChild(pacman);
        background.appendChild(ghost);
        background.appendChild(tetris);
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initGameBackground);
