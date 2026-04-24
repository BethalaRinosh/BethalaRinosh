// Run with: node generate-contributions.js
// This creates a "game save file" for your contributions

const fs = require('fs');

const gameStats = {
  level: 42,
  exp: 8472,
  contributionStreak: 15,
  achievements: [
    "EARLY_ADOPTER",
    "HACKATHON_FINALIST", 
    "50_PRS_MERGED",
    "MIDNIGHT_COMMITTER"
  ],
  lastPlayed: new Date().toISOString(),
  totalContributions: 487
};

console.log(`
╔═══════════════════════════════════════╗
║   🎮 CONTRIBUTION SAVE FILE LOADED    ║
╠═══════════════════════════════════════╣
║   LVL: ${gameStats.level}  |  XP: ${gameStats.exp}                    ║
║   STREAK: ${gameStats.contributionStreak} days          ║
║   TOTAL CONTRIBUTIONS: ${gameStats.totalContributions}     ║
║   ACHIEVEMENTS: ${gameStats.achievements.length} unlocked      ║
╚═══════════════════════════════════════╝
`);

fs.writeFileSync('assets/game-save.json', JSON.stringify(gameStats, null, 2));
