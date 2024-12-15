// ===== CONSTANTS & CONFIGURATIONS =====
const upgrades = [
    // Early Game (1-100)
    {
        id: 'laser',
        name: 'Mining Laser',
        description: 'Basic laser that automatically mines asteroids',
        baseCost: 15,
        baseIncrease: 0.1,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },
    {
        id: 'drill',
        name: 'Rock Drill',
        description: 'Increases minerals per click',
        baseCost: 25,
        baseIncrease: 0.5,
        owned: 0,
        costMultiplier: 1.14,
        type: 'click'
    },
    {
        id: 'scanner',
        name: 'Mineral Scanner',
        description: 'Finds mineral-rich spots automatically',
        baseCost: 100,
        baseIncrease: 0.5,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },
    // Mid Game (100-1000)
    {
        id: 'beam',
        name: 'Plasma Beam',
        description: 'Advanced mining beam technology',
        baseCost: 500,
        baseIncrease: 2,
        owned: 0,
        costMultiplier: 1.16,
        type: 'passive'
    },
    {
        id: 'gauntlet',
        name: 'Power Gauntlet',
        description: 'Amplifies your clicking power',
        baseCost: 800,
        baseIncrease: 4,
        owned: 0,
        costMultiplier: 1.15,
        type: 'click'
    },
    // Late Early Game (1k-10k)
    {
        id: 'robot',
        name: 'Mining Robot',
        description: 'Automated mining assistant',
        baseCost: 3000,
        baseIncrease: 10,
        owned: 0,
        costMultiplier: 1.17,
        type: 'passive'
    },
    {
        id: 'quantum',
        name: 'Quantum Pickaxe',
        description: 'Mines across multiple dimensions',
        baseCost: 5000,
        baseIncrease: 20,
        owned: 0,
        costMultiplier: 1.16,
        type: 'click'
    },
    // Mid Game (10k-100k)
    {
        id: 'station',
        name: 'Mining Station',
        description: 'Orbital facility for continuous mining',
        baseCost: 15000,
        baseIncrease: 50,
        owned: 0,
        costMultiplier: 1.18,
        type: 'passive'
    },
    {
        id: 'amplifier',
        name: 'Neural Amplifier',
        description: 'Enhances mining focus and efficiency',
        baseCost: 25000,
        baseIncrease: 100,
        owned: 0,
        costMultiplier: 1.17,
        type: 'click'
    },
    // Late Mid Game (100k-1M)
    {
        id: 'swarm',
        name: 'Nanite Swarm',
        description: 'Self-replicating mining machines',
        baseCost: 100000,
        baseIncrease: 300,
        owned: 0,
        costMultiplier: 1.19,
        type: 'passive'
    },
    {
        id: 'forge',
        name: 'Star Forge',
        description: 'Harnesses stellar energy for mining',
        baseCost: 250000,
        baseIncrease: 600,
        owned: 0,
        costMultiplier: 1.18,
        type: 'click'
    },
    // Early Late Game (1M-10M)
    {
        id: 'dyson',
        name: 'Dyson Sphere',
        description: 'Captures entire star\'s energy for mining',
        baseCost: 1000000,
        baseIncrease: 2000,
        owned: 0,
        costMultiplier: 1.20,
        type: 'passive'
    },
    {
        id: 'reality',
        name: 'Reality Bender',
        description: 'Warps space-time for instant mineral extraction',
        baseCost: 2500000,
        baseIncrease: 4000,
        owned: 0,
        costMultiplier: 1.19,
        type: 'click'
    },
    // Late Game (10M+)
    {
        id: 'galaxy',
        name: 'Galaxy Harvester',
        description: 'Mines entire galaxy clusters automatically',
        baseCost: 10000000,
        baseIncrease: 10000,
        owned: 0,
        costMultiplier: 1.21,
        type: 'passive'
    },
    {
        id: 'cosmic',
        name: 'Cosmic Manipulator',
        description: 'Each click creates a mining supernova',
        baseCost: 25000000,
        baseIncrease: 20000,
        owned: 0,
        costMultiplier: 1.20,
        type: 'click'
    }
];
const statistics = {
    totalMinerals: 0,
    totalClicks: 0,
    timePlayed: 0,
    totalSpent: 0,
    upgradesBought: 0,
    startDate: Date.now()
};
const achievements = [
    // Beginning Achievements
    {
        id: 'first_steps',
        name: 'First Steps',
        description: 'Mine your first 100 minerals',
        requirement: () => statistics.totalMinerals >= 100,
        earned: false
    },
    {
        id: 'click_novice',
        name: 'Click Novice',
        description: 'Click 100 times',
        requirement: () => statistics.totalClicks >= 100,
        earned: false
    },
    {
        id: 'upgrade_starter',
        name: 'Upgrade Starter',
        description: 'Buy your first upgrade',
        requirement: () => statistics.upgradesBought >= 1,
        earned: false
    },
    {
        id: 'speed_miner',
        name: 'Speed Miner',
        description: 'Reach 10 minerals per second',
        requirement: () => mineralsPerSecond >= 10,
        earned: false
    },
    // Clicking Achievements
    {
        id: 'click_apprentice',
        name: 'Click Apprentice',
        description: 'Click 1,000 times',
        requirement: () => statistics.totalClicks >= 1000,
        earned: false
    },
    {
        id: 'click_master',
        name: 'Click Master',
        description: 'Click 10,000 times',
        requirement: () => statistics.totalClicks >= 10000,
        earned: false
    },
    {
        id: 'click_grandmaster',
        name: 'Click Grandmaster',
        description: 'Click 100,000 times',
        requirement: () => statistics.totalClicks >= 100000,
        earned: false
    },
    // Mining Milestones
    {
        id: 'thousand_club',
        name: 'Thousand Club',
        description: 'Mine 1,000 total minerals',
        requirement: () => statistics.totalMinerals >= 1000,
        earned: false
    },
    {
        id: 'million_miner',
        name: 'Million Miner',
        description: 'Mine 1,000,000 total minerals',
        requirement: () => statistics.totalMinerals >= 1000000,
        earned: false
    },
    {
        id: 'billion_baron',
        name: 'Billion Baron',
        description: 'Mine 1,000,000,000 total minerals',
        requirement: () => statistics.totalMinerals >= 1000000000,
        earned: false
    },
    // Speed Achievements
    {
        id: 'speed_demon',
        name: 'Speed Demon',
        description: 'Reach 100 minerals per second',
        requirement: () => mineralsPerSecond >= 100,
        earned: false
    },
    {
        id: 'hyperdrive',
        name: 'Hyperdrive',
        description: 'Reach 1,000 minerals per second',
        requirement: () => mineralsPerSecond >= 1000,
        earned: false
    },
    // Upgrade Collection
    {
        id: 'upgrade_collector',
        name: 'Upgrade Collector',
        description: 'Own 50 total upgrades',
        requirement: () => statistics.upgradesBought >= 50,
        earned: false
    },
    {
        id: 'upgrade_hoarder',
        name: 'Upgrade Hoarder',
        description: 'Own 100 total upgrades',
        requirement: () => statistics.upgradesBought >= 100,
        earned: false
    },
    // Specific Upgrade Achievements
    {
        id: 'laser_focus',
        name: 'Laser Focus',
        description: 'Own 10 Mining Lasers',
        requirement: () => upgrades.find(u => u.id === 'laser').owned >= 10,
        earned: false
    },
    {
        id: 'robot_army',
        name: 'Robot Army',
        description: 'Own 10 Mining Robots',
        requirement: () => upgrades.find(u => u.id === 'robot').owned >= 10,
        earned: false
    },
    // Spending Achievements
    {
        id: 'big_spender',
        name: 'Big Spender',
        description: 'Spend 1,000,000 minerals on upgrades',
        requirement: () => statistics.mineralsSpent >= 1000000,
        earned: false
    },
    {
        id: 'space_mogul',
        name: 'Space Mogul',
        description: 'Spend 1,000,000,000 minerals on upgrades',
        requirement: () => statistics.mineralsSpent >= 1000000000,
        earned: false
    }
];
const sounds = {
    upgrade: new Audio('sounds/upgrade.wav'),
    achievement: new Audio('sounds/achievement.wav')
};
const clickSounds = [
    new Audio('sounds/hit1.wav'),
    new Audio('sounds/hit2.wav'),
    new Audio('sounds/hit3.wav')
];
const gameSettings = {
    volume: 0.5,
    theme: {
        current: 'default',
        options: {
            default: {
                primary: '#4a9eff',
                accent: '#ffd93d',
                dark: '#0a0a2a'
            },
            midnight: {
                primary: '#ffffff',
                accent: '#00ffff',
                dark: '#000000'
            },
            toxic: {
                primary: '#39ff14',
                accent: '#ffff00',
                dark: '#051505'
            },
            neon: {
                primary: '#ff00ff',
                accent: '#00ffff',
                dark: '#0a0033'
            },
            blood: {
                primary: '#ff0000',
                accent: '#ff6b6b',
                dark: '#200000'
            },
            void: {
                primary: '#9400ff',
                accent: '#ff00aa',
                dark: '#0a0015'
            },
            sunset: {
                primary: '#ff6b2b',
                accent: '#ffd700',
                dark: '#1a0f0a'
            },
            matrix: {
                primary: '#00ff00',
                accent: '#66ff66',
                dark: '#001a00'
            },
            ocean: {
                primary: '#00ffff',
                accent: '#0088ff',
                dark: '#000033'
            },
            retro: {
                primary: '#ff9100',
                accent: '#ffff00',
                dark: '#1a1000'
            },
            crystal: {
                primary: '#00ffcc',
                accent: '#ff00ff',
                dark: '#001a15'
            },
            royal: {
                primary: '#9933ff',
                accent: '#ff3366',
                dark: '#110033'
            }
        }
    }
};
const prestigeConfig = {
    baseRequirement: 1000000, // 1 million minerals for prestige
    pointsFormula: (minerals) => Math.floor(Math.sqrt(minerals / 1000000)),
    multiplierPerPoint: 0.1
};

// ===== GAME STATE =====
let score = 0;
let baseClickPower = 1;
let clickMultiplier = 1;
let mineralsPerSecond = 0;
let spacePressed = false;
let currentClickSound = 0;
let prestigePoints = 0;
let totalPrestigePoints = 0;
let prestigeMultiplier = 1;

// ===== GAME MECHANICS =====
function purchaseUpgrade(upgrade) {
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
    if (score >= cost) {
        score -= cost;
        statistics.totalSpent += cost;
        statistics.upgradesBought++;
        upgrade.owned++;
        
        if (upgrade.type === 'passive') {
            mineralsPerSecond += upgrade.baseIncrease;
        } else if (upgrade.type === 'click') {
            clickMultiplier += upgrade.baseIncrease;
        }
        
        updateDisplay();
        sounds.upgrade.currentTime = 0;
        sounds.upgrade.play();
    }
}
function checkAchievements() {
    achievements.forEach(achievement => {
        if (!achievement.earned && achievement.requirement()) {
            unlockAchievement(achievement);
        }
    });
}
function unlockAchievement(achievement) {
    achievement.earned = true;
    showAchievementNotification(achievement);
    updateAchievementsDisplay();
    sounds.achievement.currentTime = 0;
    sounds.achievement.play();
}
function calculatePrestigePoints() {
    return prestigeConfig.pointsFormula(statistics.totalMinerals);
}
function canPrestige() {
    const newPoints = calculatePrestigePoints();
    return newPoints > 0 && statistics.totalMinerals >= prestigeConfig.baseRequirement;
}
function prestige() {
    if (!canPrestige()) return;
    
    const newPoints = calculatePrestigePoints();
    prestigePoints += newPoints;
    totalPrestigePoints += newPoints;
    prestigeMultiplier = 1 + (totalPrestigePoints * prestigeConfig.multiplierPerPoint);
    
    // Reset game state
    score = 0;
    mineralsPerSecond = 0;
    clickMultiplier = 1 * prestigeMultiplier;
    statistics.totalMinerals = 0; // Reset total minerals
    
    // Reset upgrades
    upgrades.forEach(upgrade => {
        upgrade.owned = 0;
    });
    
    updateDisplay();
    createPrestigeNotification(newPoints);
}

// ===== UTILITY FUNCTIONS =====
function formatNumber(num) {
    if (num >= 1000000) {
        return (num/1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num/1000).toFixed(1) + 'K';
    }
    return Math.floor(num);
}
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
}
function updateGameVolume(volume) {
    gameSettings.volume = volume;
    clickSounds.forEach(sound => sound.volume = volume);
    Object.values(sounds).forEach(sound => sound.volume = volume);
}
function applyTheme(themeName) {
    const theme = gameSettings.theme.options[themeName];
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--accent', theme.accent);
    document.documentElement.style.setProperty('--dark', theme.dark);
    gameSettings.theme.current = themeName;
}

// ===== UI FUNCTIONS =====
function createParticles(e) {    
    const particles = 12;
    for(let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const angle = (i / particles) * 360;
        const distance = 50 + Math.random() * 50;
        const x = Math.cos(angle * Math.PI / 180) * distance;
        const y = Math.sin(angle * Math.PI / 180) * distance;
        
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);
        
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }
}
function showFloatingNumber(x, y, amount) {
    const floatingNumber = document.createElement('div');
    floatingNumber.className = 'floating-number';
    floatingNumber.textContent = `+${formatNumber(amount)}`;
    // Wider spread between -50 and 50 pixels
    const randomX = x + (Math.random() * 100 - 50);
    // Add some vertical variation too
    const randomY = y + (Math.random() * 20 - 10);
    floatingNumber.style.left = `${randomX}px`;
    floatingNumber.style.top = `${randomY}px`;
    document.body.appendChild(floatingNumber);
    setTimeout(() => floatingNumber.remove(), 1000);
}
function updateDisplay() {
    document.getElementById('score').textContent = formatNumber(score);
    document.getElementById('cps').textContent = 
        `Minerals/sec: ${mineralsPerSecond.toFixed(1)} | Minerals/click: ${(baseClickPower * clickMultiplier).toFixed(1)}`;
    
    upgrades.forEach(updateUpgradeDisplay);
    if (document.getElementById('current-prestige')) {
        document.getElementById('current-prestige').textContent = prestigePoints;
        document.getElementById('total-prestige').textContent = totalPrestigePoints;
        document.getElementById('prestige-multiplier').textContent = `x${prestigeMultiplier.toFixed(1)}`;
        document.getElementById('next-prestige').textContent = calculatePrestigePoints();
        document.getElementById('prestige-button').disabled = !canPrestige();
    }
}
function createUpgradeElement(upgrade) {
    const div = document.createElement('div');
    div.className = 'upgrade-item';
    div.id = `upgrade-${upgrade.id}`;
    div.dataset.type = upgrade.type;
    
    const effect = upgrade.type === 'passive' 
        ? `+${upgrade.baseIncrease}/sec` 
        : `+${upgrade.baseIncrease}x click power`;
    
    div.innerHTML = `
        <h3>${upgrade.name}</h3>
        <div class="description">${upgrade.description}</div>
        <div class="stats">${effect}</div>
        <div class="cost">Cost: ${formatNumber(upgrade.baseCost)}</div>
        <div class="owned">Owned: ${upgrade.owned}</div>
    `;
    
    div.addEventListener('click', () => purchaseUpgrade(upgrade));
    return div;
}
function updateUpgradeDisplay(upgrade) {
    const element = document.getElementById(`upgrade-${upgrade.id}`);
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
    
    element.querySelector('.cost').textContent = `Cost: ${formatNumber(cost)}`;
    element.querySelector('.owned').textContent = `Owned: ${upgrade.owned}`;
    element.className = `upgrade-item ${score < cost ? 'disabled' : ''}`;
}
function createStatsPanel() {
    const statsDiv = document.createElement('div');
    statsDiv.className = 'stats-grid';
    statsDiv.innerHTML = `
        <div class="stat-card">
            <div class="stat-title">Total Minerals Mined</div>
            <div class="stat-value" id="stat-total">0</div>
        </div>
        <div class="stat-card">
            <div class="stat-title">Total Clicks</div>
            <div class="stat-value" id="stat-clicks">0</div>
        </div>
        <div class="stat-card">
            <div class="stat-title">Time Played</div>
            <div class="stat-value" id="stat-time">0h 0m</div>
        </div>
        <div class="stat-card">
            <div class="stat-title">Minerals Spent</div>
            <div class="stat-value" id="stat-spent">0</div>
        </div>
        <div class="stat-card">
            <div class="stat-title">Upgrades Purchased</div>
            <div class="stat-value" id="stat-upgrades">0</div>
        </div>
    `;
    document.getElementById('statsContainer').appendChild(statsDiv);
}
function createSettingsPanel() {
    const container = document.getElementById('settingsContainer');
    container.innerHTML = `
        <div class="settings-section">
            <h2>Audio</h2>
            <div class="setting-item">
                <label>Master Volume</label>
                <input type="range" id="masterVolume" min="0" max="100" value="${gameSettings.volume * 100}">
            </div>
        </div>
        <div class="settings-section">
            <h2>Theme</h2>
            <div class="theme-selector">
                ${Object.keys(gameSettings.theme.options).map(theme => `
                    <div class="theme-option ${theme === gameSettings.theme.current ? 'active' : ''}" 
                         data-theme="${theme}">
                        <div class="theme-preview" style="background: ${gameSettings.theme.options[theme].primary}"></div>
                        <span>${theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    initializeSettingsListeners();
}
function updateAchievementsDisplay() {
    const container = document.getElementById('achievementsContainer');
    const earnedCount = achievements.filter(a => a.earned).length;
    
    container.innerHTML = `
        <div class="upgrade-item">
            <h3>Achievements Progress</h3>
            <div class="stat-value">${earnedCount}/${achievements.length}</div>
        </div>
        <div id="achievements-list">
            ${achievements.map(a => `
                <div class="upgrade-item ${a.earned ? 'earned' : 'locked'}">
                    <h3>${a.name}</h3>
                    <div>${a.description}</div>
                </div>
            `).join('')}
        </div>
    `;
}
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <h3>🏆 Achievement Unlocked!</h3>
        <div class="achievement-name">${achievement.name}</div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}
function createPrestigePanel() {
    const container = document.getElementById('prestigeContainer');
    container.innerHTML = `
        <div class="prestige-info">
            <h2>Prestige</h2>
            <p>Reset your progress to gain Prestige Points</p>
            <div class="prestige-stats">
                <div>Current Prestige Points: <span id="current-prestige">${prestigePoints}</span></div>
                <div>Total Prestige Points: <span id="total-prestige">${totalPrestigePoints}</span></div>
                <div>Current Multiplier: <span id="prestige-multiplier">x${prestigeMultiplier.toFixed(1)}</span></div>
                <div>Next Prestige Available: <span id="next-prestige">${calculatePrestigePoints()}</span></div>
            </div>
            <button id="prestige-button" ${canPrestige() ? '' : 'disabled'}>Prestige Now</button>
        </div>
    `;
    
    document.getElementById('prestige-button').addEventListener('click', prestige);
}

function createPrestigeNotification(points) {
    const notification = document.createElement('div');
    notification.className = 'prestige-notification';
    notification.innerHTML = `
        <h3>🌟 Prestige Achieved!</h3>
        <div>+${points} Prestige Points</div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}


// ===== EVENT LISTENERS =====
function initializeSettingsListeners() {
    const volumeSlider = document.getElementById('masterVolume');
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        gameSettings.volume = volume;
        updateGameVolume(volume);
    });
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            applyTheme(theme);
            document.querySelectorAll('.theme-option').forEach(opt => 
                opt.classList.toggle('active', opt.dataset.theme === theme)
            );
        });
    });
}
function initializeTabScrolling() {
    const tabButtons = document.querySelector('.tab-buttons');
    let isDown = false;
    let startX;
    let scrollLeft;

    tabButtons.addEventListener('mousedown', (e) => {
        isDown = true;
        tabButtons.classList.add('active');
        startX = e.pageX - tabButtons.offsetLeft;
        scrollLeft = tabButtons.scrollLeft;
    });

    tabButtons.addEventListener('mouseleave', () => {
        isDown = false;
        tabButtons.classList.remove('active');
    });

    tabButtons.addEventListener('mouseup', () => {
        isDown = false;
        tabButtons.classList.remove('active');
    });

    tabButtons.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tabButtons.offsetLeft;
        const walk = (x - startX) * 2;
        tabButtons.scrollLeft = scrollLeft - walk;
    });
}
function initializeSounds() {
    clickSounds.forEach(sound => {
        sound.volume = gameSettings.volume;
        sound.preload = 'auto';
    });

    Object.values(sounds).forEach(sound => {
        sound.volume = gameSettings.volume;
        sound.preload = 'auto';
    });
}
document.getElementById('asteroid').addEventListener('click', (e) => {
    const sound = clickSounds[currentClickSound];
    sound.currentTime = 0;
    sound.play();
    currentClickSound = (currentClickSound + 1) % clickSounds.length;

    let clickPower = baseClickPower * clickMultiplier;
    score += clickPower;
    statistics.totalMinerals += clickPower;
    statistics.totalClicks++;
    createParticles(e);
    showFloatingNumber(e.clientX, e.clientY, clickPower);
    updateDisplay();
});
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !spacePressed) {
        spacePressed = true;
        event.preventDefault();
        
        const asteroid = document.getElementById('asteroid');
        const rect = asteroid.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const fakeClick = new MouseEvent('click', {
            clientX: centerX,
            clientY: centerY
        });
        
        asteroid.dispatchEvent(fakeClick);
    }
});
document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        spacePressed = false;
    }
});

// ===== INITIALIZATION =====
function initGame() {
    const upgradesContainer = document.getElementById('upgradesContainer');
    upgrades.forEach(upgrade => {
        upgradesContainer.appendChild(createUpgradeElement(upgrade));
    });
    
    function initTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and panes
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
                
                // Add active class to clicked button and corresponding pane
                button.classList.add('active');
                document.getElementById(button.dataset.tab + 'Container').classList.add('active');
            });
        });
    }

    setInterval(() => {
        statistics.timePlayed = Math.floor((Date.now() - statistics.startDate) / 1000);
        document.getElementById('stat-total').textContent = formatNumber(statistics.totalMinerals);
        document.getElementById('stat-clicks').textContent = formatNumber(statistics.totalClicks);
        document.getElementById('stat-time').textContent = formatTime(statistics.timePlayed);
        document.getElementById('stat-spent').textContent = formatNumber(statistics.totalSpent);
        document.getElementById('stat-upgrades').textContent = statistics.upgradesBought;
        }, 1000);

    createStatsPanel();
    createSettingsPanel();
    createPrestigePanel();
    initTabs();
    initializeTabScrolling();

    setInterval(() => {
        if (mineralsPerSecond > 0) {
            score += mineralsPerSecond;
            updateDisplay();
        }
        checkAchievements();
    }, 1000);
    initializeSounds();
}
clickSounds.forEach(sound => {
    sound.volume = 0.5; // Lower volume to prevent sound overlap
    sound.preload = 'auto'; // Preload the sound
});

// ===== DEVELOPER TOOLS =====
function boostClick() {
    clickMultiplier *= 100;
    updateDisplay();
    console.log('Click power boosted 100x! New click power:', baseClickPower * clickMultiplier);
}

// ===== GAME =====
initGame();