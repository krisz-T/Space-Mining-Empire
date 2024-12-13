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
        id: 'pickaxe',
        name: 'Space Pickaxe',
        description: 'Reinforced pickaxe for manual mining',
        baseCost: 30,
        baseIncrease: 1,
        owned: 0,
        costMultiplier: 1.2,
        type: 'click'
    },
    {
        id: 'scanner',
        name: 'Mineral Scanner',
        description: 'Identifies rich mineral deposits',
        baseCost: 75,
        baseIncrease: 0.5,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },

    // Mid-Early Game (100-500)
    {
        id: 'drone',
        name: 'Mining Drone',
        description: 'Autonomous drone that collects space minerals',
        baseCost: 100,
        baseIncrease: 0.8,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },
    {
        id: 'drill',
        name: 'Quantum Drill',
        description: 'Quantum-powered manual mining tool',
        baseCost: 250,
        baseIncrease: 5,
        owned: 0,
        costMultiplier: 1.2,
        type: 'click'
    },
    {
        id: 'collector',
        name: 'Particle Collector',
        description: 'Collects floating mineral particles',
        baseCost: 400,
        baseIncrease: 2,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },

    // Mid Game (500-2000)
    {
        id: 'station',
        name: 'Mining Station',
        description: 'Orbital station with advanced mining capabilities',
        baseCost: 1100,
        baseIncrease: 4,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },
    {
        id: 'atomizer',
        name: 'Mineral Atomizer',
        description: 'Breaks down asteroids at atomic level',
        baseCost: 1500,
        baseIncrease: 25,
        owned: 0,
        costMultiplier: 1.2,
        type: 'click'
    },
    {
        id: 'beam',
        name: 'Tractor Beam',
        description: 'Pulls in distant mineral clusters',
        baseCost: 1800,
        baseIncrease: 7,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },

    // Late Mid Game (2000-10000)
    {
        id: 'reactor',
        name: 'Fusion Reactor',
        description: 'Powers advanced mining operations',
        baseCost: 3000,
        baseIncrease: 12,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },
    {
        id: 'gauntlet',
        name: 'Mining Gauntlet',
        description: 'Harnesses stellar energy for manual mining',
        baseCost: 4000,
        baseIncrease: 50,
        owned: 0,
        costMultiplier: 1.2,
        type: 'click'
    },
    {
        id: 'satellite',
        name: 'Mining Satellite Network',
        description: 'Network of automated mining satellites',
        baseCost: 7500,
        baseIncrease: 25,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },

    // End Game (10000+)
    {
        id: 'planetcracker',
        name: 'Planet Cracker',
        description: 'Breaks small planets into mineable chunks',
        baseCost: 12000,
        baseIncrease: 100,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
    },
    {
        id: 'singularity',
        name: 'Quantum Singularity',
        description: 'Harnesses black hole energy for mining',
        baseCost: 20000,
        baseIncrease: 200,
        owned: 0,
        costMultiplier: 1.2,
        type: 'click'
    },
    {
        id: 'dysonrig',
        name: 'Dyson Mining Rig',
        description: 'Surrounds stars to maximize mineral extraction',
        baseCost: 50000,
        baseIncrease: 400,
        owned: 0,
        costMultiplier: 1.15,
        type: 'passive'
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
    }
];

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

let score = 0;
let baseClickPower = 1;
let clickMultiplier = 1;
let mineralsPerSecond = 0;

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

function createStatsPanel() {
    const statsDiv = document.createElement('div');
    statsDiv.className = 'stats-grid';
    statsDiv.innerHTML = `
        <div class="upgrade-item">
            <h3>Total Minerals Mined</h3>
            <div class="stat-value" id="stat-total">0</div>
        </div>
        <div class="upgrade-item">
            <h3>Total Clicks</h3>
            <div class="stat-value" id="stat-clicks">0</div>
        </div>
        <div class="upgrade-item">
            <h3>Time Played</h3>
            <div class="stat-value" id="stat-time">0h 0m</div>
        </div>
        <div class="upgrade-item">
            <h3>Minerals Spent</h3>
            <div class="stat-value" id="stat-spent">0</div>
        </div>
        <div class="upgrade-item">
            <h3>Upgrades Bought</h3>
            <div class="stat-value" id="stat-upgrades">0</div>
        </div>
        <div class="upgrade-item">
            <h3>Achievements Earned</h3>
            <div class="stat-value" id="achievements-earned">0/${achievements.length}</div>
        </div>
        <div id="achievements-list"></div>
    `;
    document.getElementById('statsContainer').appendChild(statsDiv);
    updateAchievementsDisplay();
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
    const randomX = x + (Math.random() * 10000 - 50);
    // Add some vertical variation too
    const randomY = y + (Math.random() * 20 - 10);
    floatingNumber.style.left = `${randomX}px`;
    floatingNumber.style.top = `${randomY}px`;
    document.body.appendChild(floatingNumber);
    setTimeout(() => floatingNumber.remove(), 1000);
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
    }
}

function updateUpgradeDisplay(upgrade) {
    const element = document.getElementById(`upgrade-${upgrade.id}`);
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
    
    element.querySelector('.cost').textContent = `Cost: ${formatNumber(cost)}`;
    element.querySelector('.owned').textContent = `Owned: ${upgrade.owned}`;
    element.className = `upgrade-item ${score < cost ? 'disabled' : ''}`;
}

function showFloatingNumber(x, y, amount) {
    const floatingNumber = document.createElement('div');
    floatingNumber.className = 'floating-number';
    floatingNumber.textContent = `+${formatNumber(amount)}`;
    const randomX = x + (Math.random() * 100 - 50);
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
}

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

    createStatsPanel();
    initTabs();

    setInterval(() => {
        if (mineralsPerSecond > 0) {
            score += mineralsPerSecond;
            updateDisplay();
        }
        checkAchievements();
    }, 1000);
}

document.getElementById('asteroid').addEventListener('click', (e) => {
    let clickPower = baseClickPower * clickMultiplier;
    score += clickPower;
    statistics.totalMinerals += clickPower;
    statistics.totalClicks++;
    createParticles(e);
    showFloatingNumber(e.clientX, e.clientY, clickPower);
    updateDisplay();
});

setInterval(() => {
    statistics.timePlayed = Math.floor((Date.now() - statistics.startDate) / 1000);
    document.getElementById('stat-total').textContent = formatNumber(statistics.totalMinerals);
    document.getElementById('stat-clicks').textContent = formatNumber(statistics.totalClicks);
    document.getElementById('stat-time').textContent = formatTime(statistics.timePlayed);
    document.getElementById('stat-spent').textContent = formatNumber(statistics.totalSpent);
    document.getElementById('stat-upgrades').textContent = statistics.upgradesBought;
}, 1000);

initGame();