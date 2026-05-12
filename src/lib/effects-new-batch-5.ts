export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface CSSEffect {
  id: string;
  name: string;
  category: string;
  tags: string[];
  difficulty: Difficulty;
  description: string;
  cssCode: string;
  htmlCode: string;
  isNew: boolean;
}

export const effectsNewBatch5: CSSEffect[] = [
  // ==================== GAME UI EFFECTS (10) ====================
  {
    id: 'game-health-bar-decrease',
    name: 'Health Bar Decrease',
    category: 'game-ui',
    tags: ['game', 'health', 'bar', 'decrease', 'damage'],
    difficulty: 'beginner',
    description: 'Animated health bar that decreases with a smooth drain effect and color transition',
    cssCode: `.health-bar-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
}
.health-bar-label {
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
}
.health-bar-track {
  height: 14px;
  background: #1a1a2e;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
}
.health-bar-fill {
  height: 100%;
  width: 35%;
  background: linear-gradient(90deg, #ef4444, #f97316);
  border-radius: 7px;
  animation: health-drain 3s ease-in-out infinite;
  position: relative;
}
.health-bar-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(180deg, #ffffff22, transparent);
  border-radius: 7px 7px 0 0;
}
@keyframes health-drain {
  0% { width: 100%; background: linear-gradient(90deg, #10b981, #34d399); }
  30% { width: 70%; background: linear-gradient(90deg, #eab308, #f97316); }
  60% { width: 45%; background: linear-gradient(90deg, #f97316, #ef4444); }
  100% { width: 35%; background: linear-gradient(90deg, #ef4444, #dc2626); }
}`,
    htmlCode: `<div class="health-bar-wrap"><div class="health-bar-label"><span>HP</span><span>35/100</span></div><div class="health-bar-track"><div class="health-bar-fill"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'game-mana-bar',
    name: 'Mana Bar',
    category: 'game-ui',
    tags: ['game', 'mana', 'bar', 'magic', 'resource'],
    difficulty: 'beginner',
    description: 'Shimmering mana bar with a glowing blue fill and pulse animation',
    cssCode: `.mana-bar-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
}
.mana-bar-label {
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
}
.mana-bar-track {
  height: 12px;
  background: #1a1a2e;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}
.mana-bar-fill {
  height: 100%;
  width: 75%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa);
  border-radius: 6px;
  position: relative;
  animation: mana-pulse 2s ease-in-out infinite;
}
.mana-bar-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #ffffff33, transparent);
  animation: mana-shimmer 2.5s ease-in-out infinite;
}
@keyframes mana-pulse {
  0%, 100% { box-shadow: 0 0 6px #6366f144; }
  50% { box-shadow: 0 0 14px #6366f166; }
}
@keyframes mana-shimmer {
  0% { left: -50%; }
  100% { left: 150%; }
}`,
    htmlCode: `<div class="mana-bar-wrap"><div class="mana-bar-label"><span>MP</span><span>75/100</span></div><div class="mana-bar-track"><div class="mana-bar-fill"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'game-xp-progress',
    name: 'XP Progress',
    category: 'game-ui',
    tags: ['game', 'xp', 'progress', 'level', 'experience'],
    difficulty: 'intermediate',
    description: 'Experience bar with level indicator and segmented progress fill',
    cssCode: `.xp-progress-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
}
.xp-progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.xp-progress-level {
  background: #10b981;
  color: #0a0a1a;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 2px 10px;
  border-radius: 10px;
}
.xp-progress-value {
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 600;
}
.xp-progress-track {
  height: 8px;
  background: #1a1a2e;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.xp-progress-fill {
  height: 100%;
  width: 62%;
  background: linear-gradient(90deg, #10b981, #34d399);
  border-radius: 4px;
  animation: xp-fill 3s ease-out forwards;
  position: relative;
}
.xp-progress-fill::after {
  content: '';
  position: absolute;
  right: 0;
  top: -2px;
  width: 4px;
  height: 12px;
  background: #34d399;
  border-radius: 2px;
  box-shadow: 0 0 8px #10b981;
}
@keyframes xp-fill {
  from { width: 0%; }
  to { width: 62%; }
}`,
    htmlCode: `<div class="xp-progress-wrap"><div class="xp-progress-header"><span class="xp-progress-level">LVL 12</span><span class="xp-progress-value">3,100 / 5,000 XP</span></div><div class="xp-progress-track"><div class="xp-progress-fill"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'game-achievement-badge',
    name: 'Achievement Badge',
    category: 'game-ui',
    tags: ['game', 'achievement', 'badge', 'unlock', 'trophy'],
    difficulty: 'intermediate',
    description: 'Animated achievement badge that unlocks with a golden glow and pop effect',
    cssCode: `.achievement-badge {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.achievement-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #eab308, #f59e0b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  animation: badge-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  box-shadow: 0 0 20px #eab30844;
  flex-shrink: 0;
}
@keyframes badge-pop {
  0% { transform: scale(0) rotate(-30deg); opacity: 0; }
  60% { transform: scale(1.2) rotate(5deg); }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}
.achievement-info { flex: 1; }
.achievement-title {
  color: #eab308;
  font-size: 0.85rem;
  font-weight: 700;
}
.achievement-desc {
  color: #94a3b8;
  font-size: 0.7rem;
  margin-top: 2px;
}
.achievement-xp {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
  margin-top: 4px;
}`,
    htmlCode: `<div class="achievement-badge"><div class="achievement-icon">🏆</div><div class="achievement-info"><div class="achievement-title">First Victory</div><div class="achievement-desc">Win your first match</div><div class="achievement-xp">+500 XP</div></div></div>`,
    isNew: true,
  },
  {
    id: 'game-score-counter',
    name: 'Score Counter',
    category: 'game-ui',
    tags: ['game', 'score', 'counter', 'number', 'points'],
    difficulty: 'beginner',
    description: 'Score counter with a rolling number animation and emerald accent highlight',
    cssCode: `.score-counter {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}
.score-counter-label {
  color: #64748b;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.score-counter-value {
  color: #10b981;
  font-size: 2.5rem;
  font-weight: 900;
  font-variant-numeric: tabular-nums;
  animation: score-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-shadow: 0 0 20px #10b98144;
}
@keyframes score-pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
.score-counter-delta {
  color: #34d399;
  font-size: 0.8rem;
  font-weight: 700;
  animation: score-float 1.5s ease-out forwards;
  opacity: 0;
}
@keyframes score-float {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
}
.score-counter-bar {
  height: 3px;
  background: #1a1a2e;
  border-radius: 2px;
  margin-top: 12px;
  overflow: hidden;
}
.score-counter-bar-fill {
  height: 100%;
  width: 72%;
  background: #10b981;
  border-radius: 2px;
}`,
    htmlCode: `<div class="score-counter"><div class="score-counter-label">Score</div><div class="score-counter-value">12,450</div><div class="score-counter-delta">+250</div><div class="score-counter-bar"><div class="score-counter-bar-fill"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'game-combo-multiplier',
    name: 'Combo Multiplier',
    category: 'game-ui',
    tags: ['game', 'combo', 'multiplier', 'streak', 'chain'],
    difficulty: 'intermediate',
    description: 'Combo multiplier display that scales up and glows with each successive hit',
    cssCode: `.combo-multiplier {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.combo-multiplier::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, #10b98110, transparent 70%);
  animation: combo-glow 1s ease-in-out infinite;
}
@keyframes combo-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
.combo-label {
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
}
.combo-value {
  color: #10b981;
  font-size: 3rem;
  font-weight: 900;
  position: relative;
  animation: combo-scale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-shadow: 0 0 30px #10b98144;
}
@keyframes combo-scale {
  0% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}
.combo-x {
  color: #10b981;
  font-size: 1.5rem;
  font-weight: 800;
  position: relative;
}`,
    htmlCode: `<div class="combo-multiplier"><div class="combo-label">Combo</div><div class="combo-value">x5</div><div class="combo-x">CHAIN ACTIVE</div></div>`,
    isNew: true,
  },
  {
    id: 'game-loot-rarity-border',
    name: 'Loot Rarity Border',
    category: 'game-ui',
    tags: ['game', 'loot', 'rarity', 'border', 'legendary'],
    difficulty: 'intermediate',
    description: 'Animated rarity border with a legendary golden glow and shimmer sweep effect',
    cssCode: `.loot-rarity {
  background: #0f0f1a;
  border: 2px solid #eab308;
  border-radius: 12px;
  padding: 16px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px #eab30822, inset 0 0 20px #eab30808;
}
.loot-rarity::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, #eab30844, transparent, transparent);
  animation: loot-spin 3s linear infinite;
}
@keyframes loot-spin {
  to { transform: rotate(360deg); }
}
.loot-rarity-inner {
  position: relative;
  background: #0f0f1a;
  border-radius: 10px;
  padding: 14px;
  text-align: center;
}
.loot-rarity-tag {
  color: #eab308;
  font-size: 0.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.loot-rarity-name {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 4px;
}
.loot-rarity-stat {
  color: #94a3b8;
  font-size: 0.7rem;
  margin-top: 4px;
}`,
    htmlCode: `<div class="loot-rarity"><div class="loot-rarity-inner"><div class="loot-rarity-tag">Legendary</div><div class="loot-rarity-name">Dragon Fang</div><div class="loot-rarity-stat">ATK +240 · CRIT +15%</div></div></div>`,
    isNew: true,
  },
  {
    id: 'game-quest-tracker',
    name: 'Quest Tracker',
    category: 'game-ui',
    tags: ['game', 'quest', 'tracker', 'objective', 'mission'],
    difficulty: 'beginner',
    description: 'Quest tracker UI showing active objectives with progress and completion state',
    cssCode: `.quest-tracker {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
}
.quest-tracker-title {
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.quest-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
}
.quest-item + .quest-item {
  border-top: 1px solid #2a2a3e22;
}
.quest-check {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 2px solid #2a2a3e;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  color: transparent;
  transition: all 0.3s ease;
}
.quest-check.done {
  background: #10b981;
  border-color: #10b981;
  color: #0a0a1a;
}
.quest-text {
  color: #94a3b8;
  font-size: 0.75rem;
  flex: 1;
}
.quest-text.done {
  color: #4a5568;
  text-decoration: line-through;
}
.quest-count {
  color: #64748b;
  font-size: 0.65rem;
  font-weight: 600;
}`,
    htmlCode: `<div class="quest-tracker"><div class="quest-tracker-title">Active Quest</div><div class="quest-item"><div class="quest-check done">✓</div><div class="quest-text done">Find the ancient map</div><div class="quest-count">1/1</div></div><div class="quest-item"><div class="quest-check"></div><div class="quest-text">Defeat 3 shadow beasts</div><div class="quest-count">1/3</div></div><div class="quest-item"><div class="quest-check"></div><div class="quest-text">Return to the elder</div><div class="quest-count">0/1</div></div></div>`,
    isNew: true,
  },
  {
    id: 'game-skill-cooldown',
    name: 'Skill Cooldown',
    category: 'game-ui',
    tags: ['game', 'skill', 'cooldown', 'ability', 'timer'],
    difficulty: 'advanced',
    description: 'Skill icon with a radial cooldown sweep overlay and timer countdown',
    cssCode: `.skill-cooldown-wrap {
  display: flex;
  gap: 12px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  justify-content: center;
}
.skill-slot {
  width: 56px;
  height: 56px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #2a2a3e;
}
.skill-slot.ready { border-color: #10b981; box-shadow: 0 0 10px #10b98122; }
.skill-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  background: #1a1a2e;
}
.skill-cooldown-overlay {
  position: absolute;
  inset: 0;
  background: #0a0a1acc;
  clip-path: polygon(50% 50%, 50% 0%, 50% 0%);
  animation: cooldown-sweep 4s linear infinite;
}
@keyframes cooldown-sweep {
  0% { clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%); }
  25% { clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%); }
  50% { clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%); }
  75% { clip-path: polygon(50% 50%, 50% 0%, 100% 0%); }
  100% { clip-path: polygon(50% 50%, 50% 0%); }
}
.skill-timer {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 800;
}
.skill-key {
  position: absolute;
  bottom: 2px;
  right: 4px;
  color: #94a3b8;
  font-size: 0.55rem;
  font-weight: 700;
}`,
    htmlCode: `<div class="skill-cooldown-wrap"><div class="skill-slot ready"><div class="skill-icon">⚔️</div><span class="skill-key">Q</span></div><div class="skill-slot"><div class="skill-icon">🔥</div><div class="skill-cooldown-overlay"></div><div class="skill-timer">3</div><span class="skill-key">W</span></div><div class="skill-slot ready"><div class="skill-icon">🛡️</div><span class="skill-key">E</span></div></div>`,
    isNew: true,
  },
  {
    id: 'game-damage-number-float',
    name: 'Damage Number Float',
    category: 'game-ui',
    tags: ['game', 'damage', 'number', 'float', 'combat'],
    difficulty: 'intermediate',
    description: 'Floating damage numbers that rise and fade out like in RPG combat',
    cssCode: `.damage-float-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  height: 140px;
  position: relative;
  overflow: hidden;
}
.damage-number {
  position: absolute;
  font-weight: 900;
  animation: dmg-float 2s ease-out forwards;
}
.damage-number.crit {
  font-size: 1.8rem;
  color: #f59e0b;
  text-shadow: 0 0 10px #f59e0b44;
}
.damage-number.normal {
  font-size: 1.2rem;
  color: #ef4444;
  text-shadow: 0 0 6px #ef444444;
}
.damage-number.heal {
  font-size: 1.1rem;
  color: #10b981;
  text-shadow: 0 0 6px #10b98144;
}
@keyframes dmg-float {
  0% { opacity: 1; transform: translateY(0) scale(1.3); }
  20% { transform: translateY(-15px) scale(1); }
  100% { opacity: 0; transform: translateY(-70px) scale(0.8); }
}
.damage-float-wrap .damage-number:nth-child(1) { left: 30%; bottom: 30%; animation-delay: 0s; }
.damage-float-wrap .damage-number:nth-child(2) { left: 55%; bottom: 40%; animation-delay: 0.6s; }
.damage-float-wrap .damage-number:nth-child(3) { left: 40%; bottom: 50%; animation-delay: 1.2s; }`,
    htmlCode: `<div class="damage-float-wrap"><div class="damage-number crit">CRIT 248!</div><div class="damage-number normal">-42</div><div class="damage-number heal">+85</div></div>`,
    isNew: true,
  },

  // ==================== WEATHER EFFECTS (10) ====================
  {
    id: 'weather-rain-drops',
    name: 'Rain Drops',
    category: 'weather',
    tags: ['weather', 'rain', 'drops', 'falling', 'water'],
    difficulty: 'intermediate',
    description: 'Animated rain drops falling with varying speeds and opacities',
    cssCode: `.rain-container {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
  padding: 0;
}
.rain-drop {
  position: absolute;
  width: 2px;
  background: linear-gradient(180deg, transparent, #60a5fa88);
  border-radius: 1px;
  animation: rain-fall linear infinite;
}
@keyframes rain-fall {
  0% { transform: translateY(-20px); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 0.6; }
  100% { transform: translateY(170px); opacity: 0; }
}
.rain-drop:nth-child(1) { left: 10%; height: 18px; animation-duration: 0.7s; animation-delay: 0s; }
.rain-drop:nth-child(2) { left: 25%; height: 14px; animation-duration: 0.9s; animation-delay: 0.2s; }
.rain-drop:nth-child(3) { left: 40%; height: 22px; animation-duration: 0.6s; animation-delay: 0.1s; }
.rain-drop:nth-child(4) { left: 55%; height: 16px; animation-duration: 0.8s; animation-delay: 0.4s; }
.rain-drop:nth-child(5) { left: 70%; height: 20px; animation-duration: 0.65s; animation-delay: 0.3s; }
.rain-drop:nth-child(6) { left: 85%; height: 12px; animation-duration: 1s; animation-delay: 0.5s; }
.rain-ground {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(180deg, transparent, #60a5fa15);
}`,
    htmlCode: `<div class="rain-container"><div class="rain-drop"></div><div class="rain-drop"></div><div class="rain-drop"></div><div class="rain-drop"></div><div class="rain-drop"></div><div class="rain-drop"></div><div class="rain-ground"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-snow-fall',
    name: 'Snow Fall',
    category: 'weather',
    tags: ['weather', 'snow', 'fall', 'winter', 'flake'],
    difficulty: 'intermediate',
    description: 'Gently falling snowflakes with swaying drift and soft opacity',
    cssCode: `.snow-container {
  background: linear-gradient(180deg, #0a0a1a, #1a1a2e);
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.snowflake {
  position: absolute;
  color: #e2e8f0;
  animation: snow-fall linear infinite;
  opacity: 0.8;
}
@keyframes snow-fall {
  0% { transform: translateY(-10px) translateX(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.6; }
  100% { transform: translateY(170px) translateX(20px) rotate(360deg); opacity: 0; }
}
.snowflake:nth-child(1) { left: 10%; font-size: 0.6rem; animation-duration: 4s; animation-delay: 0s; }
.snowflake:nth-child(2) { left: 25%; font-size: 0.9rem; animation-duration: 5s; animation-delay: 0.5s; }
.snowflake:nth-child(3) { left: 42%; font-size: 0.5rem; animation-duration: 3.5s; animation-delay: 1s; }
.snowflake:nth-child(4) { left: 58%; font-size: 1rem; animation-duration: 6s; animation-delay: 0.3s; }
.snowflake:nth-child(5) { left: 75%; font-size: 0.7rem; animation-duration: 4.5s; animation-delay: 1.5s; }
.snowflake:nth-child(6) { left: 88%; font-size: 0.55rem; animation-duration: 3.8s; animation-delay: 0.8s; }
.snowflake:nth-child(7) { left: 35%; font-size: 0.8rem; animation-duration: 5.5s; animation-delay: 2s; }`,
    htmlCode: `<div class="snow-container"><div class="snowflake">❄</div><div class="snowflake">❅</div><div class="snowflake">❄</div><div class="snowflake">❆</div><div class="snowflake">❅</div><div class="snowflake">❄</div><div class="snowflake">❆</div></div>`,
    isNew: true,
  },
  {
    id: 'weather-sun-rays',
    name: 'Sun Rays',
    category: 'weather',
    tags: ['weather', 'sun', 'rays', 'light', 'warm'],
    difficulty: 'intermediate',
    description: 'Radial sun rays rotating slowly with a warm golden center glow',
    cssCode: `.sun-rays-container {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sun-center {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(circle, #fbbf24, #f59e0b);
  box-shadow: 0 0 40px #fbbf2466, 0 0 80px #f59e0b33;
  position: relative;
  z-index: 2;
}
.sun-rays-ring {
  position: absolute;
  width: 200px;
  height: 200px;
  background: conic-gradient(from 0deg, transparent, #fbbf2418, transparent, #fbbf2418, transparent, #fbbf2418, transparent, #fbbf2418, transparent);
  border-radius: 50%;
  animation: sun-rotate 12s linear infinite;
  z-index: 1;
}
@keyframes sun-rotate {
  to { transform: rotate(360deg); }
}
.sun-glow {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, #fbbf2422, transparent 70%);
  animation: sun-pulse 3s ease-in-out infinite;
  z-index: 1;
}
@keyframes sun-pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 1; }
}`,
    htmlCode: `<div class="sun-rays-container"><div class="sun-rays-ring"></div><div class="sun-glow"></div><div class="sun-center"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-cloud-float',
    name: 'Cloud Float',
    category: 'weather',
    tags: ['weather', 'cloud', 'float', 'sky', 'drift'],
    difficulty: 'beginner',
    description: 'Soft floating clouds that drift across the sky with gentle bobbing motion',
    cssCode: `.cloud-container {
  background: linear-gradient(180deg, #0f0f2a, #1a1a2e);
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 140px;
  position: relative;
  overflow: hidden;
}
.cloud {
  position: absolute;
  background: #94a3b822;
  border-radius: 50px;
  animation: cloud-drift linear infinite;
}
.cloud::before, .cloud::after {
  content: '';
  position: absolute;
  background: inherit;
  border-radius: 50%;
}
.cloud::before {
  width: 55%;
  height: 130%;
  top: -50%;
  left: 20%;
}
.cloud::after {
  width: 40%;
  height: 110%;
  top: -30%;
  left: 55%;
}
.cloud:nth-child(1) {
  width: 90px; height: 30px; top: 25%; animation-duration: 12s; opacity: 0.6;
}
.cloud:nth-child(2) {
  width: 120px; height: 38px; top: 50%; animation-duration: 18s; animation-delay: -6s; opacity: 0.4;
}
.cloud:nth-child(3) {
  width: 70px; height: 24px; top: 70%; animation-duration: 15s; animation-delay: -3s; opacity: 0.5;
}
@keyframes cloud-drift {
  0% { left: -150px; }
  100% { left: calc(100% + 50px); }
}`,
    htmlCode: `<div class="cloud-container"><div class="cloud"></div><div class="cloud"></div><div class="cloud"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-lightning-flash',
    name: 'Lightning Flash',
    category: 'weather',
    tags: ['weather', 'lightning', 'flash', 'storm', 'electric'],
    difficulty: 'intermediate',
    description: 'Dramatic lightning flash effect with a bright bolt and screen illumination',
    cssCode: `.lightning-container {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.lightning-flash {
  position: absolute;
  inset: 0;
  background: #e2e8f0;
  opacity: 0;
  animation: lightning-flash-anim 4s ease-in-out infinite;
  z-index: 2;
}
@keyframes lightning-flash-anim {
  0%, 100% { opacity: 0; }
  4% { opacity: 0.8; }
  6% { opacity: 0; }
  8% { opacity: 0.5; }
  10% { opacity: 0; }
}
.lightning-bolt {
  position: absolute;
  top: 10px;
  left: 50%;
  width: 3px;
  height: 0;
  background: #fbbf24;
  box-shadow: 0 0 10px #fbbf24, 0 0 30px #fbbf2466;
  animation: bolt-strike 4s ease-in-out infinite;
  z-index: 3;
  clip-path: polygon(0 0, 100% 0, 60% 40%, 100% 40%, 30% 100%, 40% 55%, 0 55%);
  width: 30px;
  transform: translateX(-50%);
}
@keyframes bolt-strike {
  0%, 3% { height: 0; opacity: 0; }
  4% { height: 120px; opacity: 1; }
  10% { height: 120px; opacity: 0.8; }
  12% { opacity: 0; height: 0; }
  100% { height: 0; opacity: 0; }
}
.lightning-clouds {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(180deg, transparent, #1a1a2e);
}`,
    htmlCode: `<div class="lightning-container"><div class="lightning-flash"></div><div class="lightning-bolt"></div><div class="lightning-clouds"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-fog-drift',
    name: 'Fog Drift',
    category: 'weather',
    tags: ['weather', 'fog', 'drift', 'mist', 'atmosphere'],
    difficulty: 'intermediate',
    description: 'Layered fog patches that drift slowly creating an eerie mist effect',
    cssCode: `.fog-container {
  background: linear-gradient(180deg, #0a0a1a, #1a1a2e);
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.fog-layer {
  position: absolute;
  width: 250%;
  height: 80px;
  background: linear-gradient(90deg, transparent, #94a3b815, #94a3b808, transparent, #94a3b812, transparent);
  animation: fog-move linear infinite;
}
.fog-layer:nth-child(1) {
  top: 30%;
  animation-duration: 20s;
  opacity: 0.6;
}
.fog-layer:nth-child(2) {
  top: 55%;
  animation-duration: 28s;
  animation-direction: reverse;
  opacity: 0.4;
}
.fog-layer:nth-child(3) {
  top: 75%;
  animation-duration: 24s;
  opacity: 0.5;
}
@keyframes fog-move {
  0% { transform: translateX(-60%); }
  100% { transform: translateX(0%); }
}
.fog-ground {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(180deg, transparent, #1a1a2e);
}`,
    htmlCode: `<div class="fog-container"><div class="fog-layer"></div><div class="fog-layer"></div><div class="fog-layer"></div><div class="fog-ground"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-wind-lines',
    name: 'Wind Lines',
    category: 'weather',
    tags: ['weather', 'wind', 'lines', 'air', 'breeze'],
    difficulty: 'beginner',
    description: 'Horizontal wind streaks flowing across the screen with varying lengths and speeds',
    cssCode: `.wind-container {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 140px;
  position: relative;
  overflow: hidden;
}
.wind-line {
  position: absolute;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, #94a3b844, #94a3b822, transparent);
  border-radius: 1px;
  animation: wind-blow linear infinite;
}
@keyframes wind-blow {
  0% { transform: translateX(-100%); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { transform: translateX(400px); opacity: 0; }
}
.wind-line:nth-child(1) { top: 15%; width: 80px; animation-duration: 1.8s; animation-delay: 0s; }
.wind-line:nth-child(2) { top: 30%; width: 120px; animation-duration: 1.4s; animation-delay: 0.3s; }
.wind-line:nth-child(3) { top: 45%; width: 60px; animation-duration: 2.2s; animation-delay: 0.6s; }
.wind-line:nth-child(4) { top: 60%; width: 100px; animation-duration: 1.6s; animation-delay: 0.1s; }
.wind-line:nth-child(5) { top: 75%; width: 90px; animation-duration: 1.9s; animation-delay: 0.8s; }
.wind-line:nth-child(6) { top: 85%; width: 70px; animation-duration: 2.5s; animation-delay: 0.4s; }
.wind-leaf {
  position: absolute;
  top: 40%;
  font-size: 0.8rem;
  animation: leaf-blow 3s ease-in-out infinite;
}
@keyframes leaf-blow {
  0% { transform: translateX(-20px) rotate(0deg); opacity: 0; }
  20% { opacity: 1; }
  100% { transform: translateX(350px) rotate(720deg); opacity: 0; }
}`,
    htmlCode: `<div class="wind-container"><div class="wind-line"></div><div class="wind-line"></div><div class="wind-line"></div><div class="wind-line"></div><div class="wind-line"></div><div class="wind-line"></div><div class="wind-leaf">🍃</div></div>`,
    isNew: true,
  },
  {
    id: 'weather-rainbow-arc',
    name: 'Rainbow Arc',
    category: 'weather',
    tags: ['weather', 'rainbow', 'arc', 'color', 'spectrum'],
    difficulty: 'intermediate',
    description: 'Semi-circular rainbow arc with gradient bands and a subtle glow',
    cssCode: `.rainbow-container {
  background: linear-gradient(180deg, #0f0f2a, #0a0a1a);
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.rainbow-arc {
  width: 200px;
  height: 100px;
  border-radius: 100px 100px 0 0;
  background: conic-gradient(from 180deg at 50% 100%, #ef4444 0deg, #f97316 30deg, #eab308 60deg, #22c55e 90deg, #3b82f6 120deg, #6366f1 150deg, #8b5cf6 180deg, transparent 180deg);
  position: relative;
  mask: radial-gradient(circle at 50% 100%, transparent 62%, black 63%);
  -webkit-mask: radial-gradient(circle at 50% 100%, transparent 62%, black 63%);
  animation: rainbow-fade 3s ease-in-out infinite alternate;
  margin-bottom: -2px;
}
@keyframes rainbow-fade {
  0% { opacity: 0.5; filter: brightness(0.8); }
  100% { opacity: 0.9; filter: brightness(1.2); }
}
.rainbow-glow {
  position: absolute;
  width: 220px;
  height: 110px;
  border-radius: 110px 110px 0 0;
  background: transparent;
  box-shadow: 0 -10px 30px #3b82f622;
  bottom: 0;
  z-index: 0;
}
.rainbow-ground {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(180deg, transparent, #0a0a1a);
}`,
    htmlCode: `<div class="rainbow-container"><div class="rainbow-glow"></div><div class="rainbow-arc"></div><div class="rainbow-ground"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-moon-phases',
    name: 'Moon Phases',
    category: 'weather',
    tags: ['weather', 'moon', 'phases', 'night', 'lunar'],
    difficulty: 'intermediate',
    description: 'Animated moon cycling through its phases with a soft night sky glow',
    cssCode: `.moon-phases-container {
  background: linear-gradient(180deg, #0a0a1a, #1a1a2e);
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
}
.moon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  background: #e2e8f0;
  box-shadow: 0 0 10px #e2e8f033;
}
.moon-shadow {
  position: absolute;
  top: -2px;
  background: #0a0a1a;
  border-radius: 50%;
  width: 36px;
  height: 40px;
  transition: transform 0.3s ease;
}
.moon:nth-child(1) .moon-shadow { transform: translateX(0px); }
.moon:nth-child(2) .moon-shadow { transform: translateX(10px); }
.moon:nth-child(3) .moon-shadow { transform: translateX(18px); }
.moon:nth-child(4) .moon-shadow { transform: translateX(36px); }
.moon:nth-child(4) { background: #e2e8f0; animation: full-moon-glow 2s ease-in-out infinite; }
@keyframes full-moon-glow {
  0%, 100% { box-shadow: 0 0 10px #e2e8f033; }
  50% { box-shadow: 0 0 25px #e2e8f055; }
}
.moon-stars {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #e2e8f0;
  border-radius: 50%;
  animation: star-blink 2s ease-in-out infinite;
}
.moon-stars:nth-child(5) { top: 15%; left: 10%; animation-delay: 0s; }
.moon-stars:nth-child(6) { top: 25%; right: 12%; animation-delay: 0.7s; width: 3px; height: 3px; }
.moon-stars:nth-child(7) { bottom: 20%; left: 15%; animation-delay: 1.4s; width: 2px; height: 2px; }
@keyframes star-blink {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="moon-phases-container"><div class="moon"><div class="moon-shadow"></div></div><div class="moon"><div class="moon-shadow"></div></div><div class="moon"><div class="moon-shadow"></div></div><div class="moon"><div class="moon-shadow"></div></div><div class="moon-stars"></div><div class="moon-stars"></div><div class="moon-stars"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-star-twinkle-sky',
    name: 'Star Twinkle Sky',
    category: 'weather',
    tags: ['weather', 'star', 'twinkle', 'sky', 'night'],
    difficulty: 'beginner',
    description: 'Night sky with twinkling stars of varying sizes and brightness',
    cssCode: `.star-sky {
  background: radial-gradient(ellipse at 50% 0%, #1a1a2e, #0a0a1a);
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.star {
  position: absolute;
  background: #e2e8f0;
  border-radius: 50%;
  animation: twinkle ease-in-out infinite;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}
.star:nth-child(1) { width: 3px; height: 3px; top: 10%; left: 15%; animation-duration: 2.5s; }
.star:nth-child(2) { width: 2px; height: 2px; top: 20%; left: 45%; animation-duration: 3s; animation-delay: 0.5s; }
.star:nth-child(3) { width: 4px; height: 4px; top: 15%; left: 75%; animation-duration: 2s; animation-delay: 1s; box-shadow: 0 0 6px #e2e8f0; }
.star:nth-child(4) { width: 2px; height: 2px; top: 40%; left: 25%; animation-duration: 3.5s; animation-delay: 0.3s; }
.star:nth-child(5) { width: 3px; height: 3px; top: 55%; left: 60%; animation-duration: 2.8s; animation-delay: 1.5s; }
.star:nth-child(6) { width: 2px; height: 2px; top: 35%; left: 88%; animation-duration: 3.2s; animation-delay: 0.8s; }
.star:nth-child(7) { width: 5px; height: 5px; top: 65%; left: 40%; animation-duration: 4s; animation-delay: 0.2s; box-shadow: 0 0 8px #e2e8f088; }
.star:nth-child(8) { width: 2px; height: 2px; top: 80%; left: 70%; animation-duration: 2.6s; animation-delay: 1.2s; }
.star-shooting {
  position: absolute;
  top: 20%;
  left: 60%;
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, #e2e8f0, transparent);
  animation: shoot 4s ease-in infinite;
  transform: rotate(-30deg);
}
@keyframes shoot {
  0%, 90% { opacity: 0; transform: rotate(-30deg) translateX(0); }
  92% { opacity: 1; }
  100% { opacity: 0; transform: rotate(-30deg) translateX(80px); }
}`,
    htmlCode: `<div class="star-sky"><div class="star"></div><div class="star"></div><div class="star"></div><div class="star"></div><div class="star"></div><div class="star"></div><div class="star"></div><div class="star"></div><div class="star-shooting"></div></div>`,
    isNew: true,
  },

  // ==================== ECOMMERCE EFFECTS (10) ====================
  {
    id: 'ecom-product-card-hover',
    name: 'Product Card Hover',
    category: 'ecommerce',
    tags: ['ecommerce', 'product', 'card', 'hover', 'shop'],
    difficulty: 'beginner',
    description: 'Product card with image zoom, shadow lift, and reveal details on hover',
    cssCode: `.product-card {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.4);
  border-color: #10b98144;
}
.product-card-img {
  height: 80px;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.product-card:hover .product-card-img {
  transform: scale(1.05);
}
.product-card-body {
  padding: 12px 14px;
}
.product-card-title {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
}
.product-card-price {
  color: #10b981;
  font-size: 0.9rem;
  font-weight: 800;
  margin-top: 4px;
}
.product-card-desc {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 4px;
  opacity: 0;
  transform: translateY(4px);
  transition: all 0.3s ease;
}
.product-card:hover .product-card-desc {
  opacity: 1;
  transform: translateY(0);
}`,
    htmlCode: `<div class="product-card"><div class="product-card-img">👟</div><div class="product-card-body"><div class="product-card-title">Runner Pro X</div><div class="product-card-price">$129.99</div><div class="product-card-desc">Lightweight performance shoe</div></div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-cart-badge-count',
    name: 'Cart Badge Count',
    category: 'ecommerce',
    tags: ['ecommerce', 'cart', 'badge', 'count', 'shopping'],
    difficulty: 'beginner',
    description: 'Shopping cart icon with an animated count badge that bounces on update',
    cssCode: `.cart-badge-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
.cart-icon-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #1a1a2e;
  border-radius: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.2s ease;
}
.cart-icon-wrap:hover { background: #2a2a3e; }
.cart-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  background: #10b981;
  color: #0a0a1a;
  font-size: 0.6rem;
  font-weight: 800;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  animation: badge-bounce 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes badge-bounce {
  0% { transform: scale(0); }
  60% { transform: scale(1.3); }
  100% { transform: scale(1); }
}
.cart-label {
  color: #94a3b8;
  font-size: 0.8rem;
  font-weight: 600;
}
.cart-total {
  color: #10b981;
  font-size: 1rem;
  font-weight: 800;
}`,
    htmlCode: `<div class="cart-badge-wrap"><div class="cart-icon-wrap">🛒<span class="cart-badge">3</span></div><div><div class="cart-label">Cart</div><div class="cart-total">$89.97</div></div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-sale-tag',
    name: 'Sale Tag',
    category: 'ecommerce',
    tags: ['ecommerce', 'sale', 'tag', 'discount', 'promo'],
    difficulty: 'beginner',
    description: 'Eye-catching sale tag with diagonal stripe and pulsing discount badge',
    cssCode: `.sale-tag-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}
.sale-stripe {
  position: absolute;
  top: 16px;
  right: -30px;
  background: #ef4444;
  color: #fff;
  padding: 4px 36px;
  font-size: 0.65rem;
  font-weight: 800;
  transform: rotate(45deg);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px #ef444444;
}
.sale-tag-content {
  display: flex;
  align-items: center;
  gap: 16px;
}
.sale-tag-img {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}
.sale-tag-info { flex: 1; }
.sale-tag-name {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
}
.sale-tag-prices {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}
.sale-tag-original {
  color: #64748b;
  font-size: 0.8rem;
  text-decoration: line-through;
}
.sale-tag-price {
  color: #ef4444;
  font-size: 1rem;
  font-weight: 800;
}
.sale-tag-percent {
  background: #ef444420;
  color: #ef4444;
  font-size: 0.6rem;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 4px;
  animation: sale-pulse 1.5s ease-in-out infinite;
}
@keyframes sale-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}`,
    htmlCode: `<div class="sale-tag-wrap"><div class="sale-stripe">Sale</div><div class="sale-tag-content"><div class="sale-tag-img">🎧</div><div class="sale-tag-info"><div class="sale-tag-name">Wireless Headphones</div><div class="sale-tag-prices"><span class="sale-tag-original">$199</span><span class="sale-tag-price">$119</span><span class="sale-tag-percent">-40%</span></div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-out-of-stock-overlay',
    name: 'Out of Stock Overlay',
    category: 'ecommerce',
    tags: ['ecommerce', 'stock', 'overlay', 'unavailable', 'sold-out'],
    difficulty: 'beginner',
    description: 'Product card with a diagonal out-of-stick overlay stripe and dimmed content',
    cssCode: `.oos-card {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}
.oos-card.dimmed { opacity: 0.6; }
.oos-img {
  height: 80px;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
.oos-body {
  padding: 12px 14px;
}
.oos-title {
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 700;
}
.oos-price {
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 800;
  margin-top: 4px;
}
.oos-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.oos-stripe {
  background: #ef4444;
  color: #fff;
  padding: 6px 40px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  transform: rotate(-25deg);
  box-shadow: 0 2px 10px #ef444444;
}
.oos-notify {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: #2a2a3e;
  color: #94a3b8;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 6px;
  z-index: 3;
  cursor: pointer;
  transition: all 0.2s ease;
}
.oos-notify:hover { background: #10b981; color: #0a0a1a; }`,
    htmlCode: `<div class="oos-card dimmed"><div class="oos-img">👜</div><div class="oos-body"><div class="oos-title">Leather Tote Bag</div><div class="oos-price">$249.00</div></div><div class="oos-overlay"><div class="oos-stripe">Sold Out</div></div><div class="oos-notify">Notify Me</div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-quick-view-button',
    name: 'Quick View Button',
    category: 'ecommerce',
    tags: ['ecommerce', 'quick', 'view', 'button', 'preview'],
    difficulty: 'beginner',
    description: 'Product card with a quick view button that slides up from the bottom on hover',
    cssCode: `.quick-view-card {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.quick-view-card:hover { border-color: #10b98144; }
.quick-view-img {
  height: 100px;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  position: relative;
}
.quick-view-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #10b981dd;
  color: #0a0a1a;
  text-align: center;
  padding: 8px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.quick-view-card:hover .quick-view-btn {
  transform: translateY(0);
}
.quick-view-body {
  padding: 12px 14px;
}
.quick-view-title {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
}
.quick-view-price {
  color: #10b981;
  font-size: 0.9rem;
  font-weight: 800;
  margin-top: 2px;
}`,
    htmlCode: `<div class="quick-view-card"><div class="quick-view-img">⌚<div class="quick-view-btn">Quick View</div></div><div class="quick-view-body"><div class="quick-view-title">Smart Watch Elite</div><div class="quick-view-price">$349.00</div></div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-wishlist-heart',
    name: 'Wishlist Heart',
    category: 'ecommerce',
    tags: ['ecommerce', 'wishlist', 'heart', 'favorite', 'save'],
    difficulty: 'beginner',
    description: 'Animated heart toggle that fills and pulses when adding to wishlist',
    cssCode: `.wishlist-heart {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.wishlist-product-img {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  flex-shrink: 0;
}
.wishlist-product-info { flex: 1; }
.wishlist-product-name {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
}
.wishlist-product-price {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-top: 2px;
}
.heart-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}
.heart-btn.active {
  background: #ef444420;
  animation: heart-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes heart-pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}
.heart-btn:hover { background: #2a2a3e; }`,
    htmlCode: `<div class="wishlist-heart"><div class="wishlist-product-img">🎒</div><div class="wishlist-product-info"><div class="wishlist-product-name">Travel Backpack</div><div class="wishlist-product-price">$89.00</div></div><div class="heart-btn active">❤️</div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-rating-stars',
    name: 'Rating Stars',
    category: 'ecommerce',
    tags: ['ecommerce', 'rating', 'stars', 'review', 'score'],
    difficulty: 'beginner',
    description: 'Interactive star rating display with filled, half, and empty stars plus review count',
    cssCode: `.rating-stars {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.stars-wrap {
  display: flex;
  gap: 2px;
}
.star-item {
  font-size: 1.1rem;
  line-height: 1;
  transition: transform 0.2s ease;
  cursor: pointer;
}
.star-item:hover { transform: scale(1.2); }
.star-filled { color: #eab308; }
.star-half { color: #eab308; }
.star-empty { color: #2a2a3e; }
.rating-info {
  display: flex;
  flex-direction: column;
}
.rating-value {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 800;
}
.rating-count {
  color: #64748b;
  font-size: 0.7rem;
}
.rating-bar-track {
  width: 80px;
  height: 4px;
  background: #2a2a3e;
  border-radius: 2px;
  margin-top: 4px;
  overflow: hidden;
}
.rating-bar-fill {
  height: 100%;
  width: 82%;
  background: linear-gradient(90deg, #eab308, #f59e0b);
  border-radius: 2px;
}`,
    htmlCode: `<div class="rating-stars"><div class="stars-wrap"><span class="star-item star-filled">★</span><span class="star-item star-filled">★</span><span class="star-item star-filled">★</span><span class="star-item star-filled">★</span><span class="star-item star-half">★</span></div><div class="rating-info"><span class="rating-value">4.2</span><span class="rating-count">1,247 reviews</span><div class="rating-bar-track"><div class="rating-bar-fill"></div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-size-selector',
    name: 'Size Selector',
    category: 'ecommerce',
    tags: ['ecommerce', 'size', 'selector', 'picker', 'clothing'],
    difficulty: 'beginner',
    description: 'Size selector with pill-shaped options and an emerald highlight on selected size',
    cssCode: `.size-selector {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
}
.size-selector-label {
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.size-options {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.size-option {
  min-width: 40px;
  height: 36px;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0 10px;
}
.size-option:hover {
  border-color: #10b981;
  color: #e2e8f0;
}
.size-option.selected {
  background: #10b981;
  border-color: #10b981;
  color: #0a0a1a;
  font-weight: 800;
  box-shadow: 0 0 10px #10b98133;
}
.size-option.unavailable {
  opacity: 0.35;
  text-decoration: line-through;
  cursor: not-allowed;
}
.size-option.unavailable:hover {
  border-color: #2a2a3e;
  color: #94a3b8;
}`,
    htmlCode: `<div class="size-selector"><div class="size-selector-label">Select Size</div><div class="size-options"><span class="size-option">XS</span><span class="size-option">S</span><span class="size-option selected">M</span><span class="size-option">L</span><span class="size-option">XL</span><span class="size-option unavailable">XXL</span></div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-color-swatch-picker',
    name: 'Color Swatch Picker',
    category: 'ecommerce',
    tags: ['ecommerce', 'color', 'swatch', 'picker', 'variant'],
    difficulty: 'beginner',
    description: 'Color swatch picker with ring highlight on selection and color name display',
    cssCode: `.color-swatch-picker {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
}
.color-swatch-label {
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}
.color-swatch-name {
  color: #e2e8f0;
  text-transform: none;
  letter-spacing: 0;
}
.color-swatches {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}
.color-swatch {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid transparent;
  position: relative;
}
.color-swatch:hover {
  transform: scale(1.1);
}
.color-swatch.selected {
  border-color: #10b981;
  box-shadow: 0 0 0 2px #0f0f1a, 0 0 0 4px #10b981;
  transform: scale(1.1);
}
.color-swatch::after {
  content: '✓';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 800;
  opacity: 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}
.color-swatch.selected::after { opacity: 1; }`,
    htmlCode: `<div class="color-swatch-picker"><div class="color-swatch-label"><span>Color</span><span class="color-swatch-name">Midnight Black</span></div><div class="color-swatches"><div class="color-swatch selected" style="background:#1a1a2e"></div><div class="color-swatch" style="background:#ef4444"></div><div class="color-swatch" style="background:#3b82f6"></div><div class="color-swatch" style="background:#10b981"></div><div class="color-swatch" style="background:#eab308"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-quantity-spinner',
    name: 'Quantity Spinner',
    category: 'ecommerce',
    tags: ['ecommerce', 'quantity', 'spinner', 'counter', 'stepper'],
    difficulty: 'beginner',
    description: 'Quantity stepper with plus/minus buttons and a centered count display',
    cssCode: `.quantity-spinner {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.quantity-label {
  color: #94a3b8;
  font-size: 0.8rem;
  font-weight: 600;
}
.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  overflow: hidden;
}
.quantity-btn {
  width: 36px;
  height: 36px;
  background: #1a1a2e;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}
.quantity-btn:hover { background: #2a2a3e; color: #10b981; }
.quantity-btn:active { background: #10b98122; }
.quantity-btn.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.quantity-value {
  width: 44px;
  height: 36px;
  background: #0f0f1a;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  border-left: 1px solid #2a2a3e;
  border-right: 1px solid #2a2a3e;
  font-variant-numeric: tabular-nums;
}
.quantity-stock {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 600;
}`,
    htmlCode: `<div class="quantity-spinner"><div><div class="quantity-label">Quantity</div><div class="quantity-stock">In stock: 24</div></div><div class="quantity-controls"><div class="quantity-btn disabled">−</div><div class="quantity-value">1</div><div class="quantity-btn">+</div></div></div>`,
    isNew: true,
  },

  // ==================== EASTER EFFECTS (10) ====================
  {
    id: 'easter-confetti-burst',
    name: 'Confetti Burst',
    category: 'easter',
    tags: ['easter', 'confetti', 'burst', 'celebration', 'party'],
    difficulty: 'intermediate',
    description: 'Confetti particles bursting outward in multiple colors with rotation and gravity',
    cssCode: `.confetti-container {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.confetti-piece {
  position: absolute;
  width: 8px;
  height: 8px;
  top: 50%;
  left: 50%;
  animation: confetti-burst 2s ease-out forwards;
}
@keyframes confetti-burst {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
  100% { transform: translate(var(--tx), var(--ty)) rotate(720deg) scale(0.3); opacity: 0; }
}
.confetti-piece:nth-child(1) { background: #ef4444; --tx: -60px; --ty: -50px; animation-delay: 0s; border-radius: 2px; }
.confetti-piece:nth-child(2) { background: #10b981; --tx: 50px; --ty: -40px; animation-delay: 0.05s; border-radius: 50%; }
.confetti-piece:nth-child(3) { background: #3b82f6; --tx: -30px; --ty: 40px; animation-delay: 0.1s; width: 6px; height: 12px; }
.confetti-piece:nth-child(4) { background: #eab308; --tx: 70px; --ty: 20px; animation-delay: 0.15s; border-radius: 50%; }
.confetti-piece:nth-child(5) { background: #8b5cf6; --tx: -80px; --ty: 10px; animation-delay: 0.2s; border-radius: 2px; }
.confetti-piece:nth-child(6) { background: #f97316; --tx: 20px; --ty: -60px; animation-delay: 0.1s; width: 10px; height: 6px; }
.confetti-piece:nth-child(7) { background: #ec4899; --tx: 40px; --ty: 50px; animation-delay: 0.25s; border-radius: 50%; }
.confetti-piece:nth-child(8) { background: #14b8a6; --tx: -50px; --ty: -20px; animation-delay: 0.05s; }
.confetti-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
  z-index: 2;
}`,
    htmlCode: `<div class="confetti-container"><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-text">Surprise!</div></div>`,
    isNew: true,
  },
  {
    id: 'easter-party-popper',
    name: 'Party Popper',
    category: 'easter',
    tags: ['easter', 'party', 'popper', 'celebration', 'fun'],
    difficulty: 'intermediate',
    description: 'Party popper animation with expanding streamers and burst effect',
    cssCode: `.party-popper-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popper-icon {
  font-size: 2.5rem;
  animation: popper-shake 0.5s ease-in-out infinite;
  z-index: 2;
  position: relative;
}
@keyframes popper-shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}
.streamer {
  position: absolute;
  width: 3px;
  border-radius: 2px;
  animation: streamer-fly 1.5s ease-out infinite;
  top: 50%;
  left: 55%;
}
@keyframes streamer-fly {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; height: 10px; }
  50% { opacity: 0.8; }
  100% { transform: translateY(-80px) rotate(360deg); opacity: 0; height: 30px; }
}
.streamer:nth-child(2) { background: #ef4444; animation-delay: 0s; transform: rotate(20deg); }
.streamer:nth-child(3) { background: #eab308; animation-delay: 0.1s; transform: rotate(-15deg); }
.streamer:nth-child(4) { background: #10b981; animation-delay: 0.2s; transform: rotate(30deg); }
.streamer:nth-child(5) { background: #3b82f6; animation-delay: 0.15s; transform: rotate(-25deg); }
.streamer:nth-child(6) { background: #ec4899; animation-delay: 0.25s; transform: rotate(10deg); }
.streamer:nth-child(7) { background: #8b5cf6; animation-delay: 0.05s; transform: rotate(-35deg); }
.sparkle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  animation: sparkle-fly 1.2s ease-out infinite;
  top: 45%;
  left: 52%;
}
@keyframes sparkle-fly {
  0% { transform: translate(0,0) scale(1); opacity: 1; }
  100% { transform: translate(var(--sx), var(--sy)) scale(0); opacity: 0; }
}
.sparkle:nth-child(8) { background: #fbbf24; --sx: 40px; --sy: -60px; animation-delay: 0s; }
.sparkle:nth-child(9) { background: #fbbf24; --sx: -50px; --sy: -40px; animation-delay: 0.1s; }`,
    htmlCode: `<div class="party-popper-wrap"><div class="popper-icon">🎉</div><div class="streamer"></div><div class="streamer"></div><div class="streamer"></div><div class="streamer"></div><div class="streamer"></div><div class="streamer"></div><div class="sparkle"></div><div class="sparkle"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-secret-knock',
    name: 'Secret Knock',
    category: 'easter',
    tags: ['easter', 'secret', 'knock', 'door', 'hidden'],
    difficulty: 'intermediate',
    description: 'Door with a knock animation that reveals a hidden message on the third tap',
    cssCode: `.secret-knock-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}
.secret-door {
  width: 80px;
  height: 100px;
  background: linear-gradient(180deg, #2a2a3e, #1a1a2e);
  border: 2px solid #3a3a4e;
  border-radius: 8px 8px 0 0;
  margin: 0 auto;
  position: relative;
  animation: door-knock 2s ease-in-out infinite;
}
@keyframes door-knock {
  0%, 80%, 100% { transform: translateX(0); }
  82% { transform: translateX(-3px); }
  84% { transform: translateX(3px); }
  86% { transform: translateX(0); }
  90% { transform: translateX(-2px); }
  92% { transform: translateX(2px); }
  94% { transform: translateX(0); }
}
.door-knob {
  position: absolute;
  right: 10px;
  top: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #64748b;
  box-shadow: 0 0 4px #64748b66;
}
.door-peephole {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #0a0a1a;
  border: 2px solid #3a3a4e;
}
.knock-text {
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 12px;
}
.knock-message {
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 6px;
  animation: msg-flicker 3s ease-in-out infinite;
}
@keyframes msg-flicker {
  0%, 40%, 100% { opacity: 0; }
  50%, 90% { opacity: 1; }
}`,
    htmlCode: `<div class="secret-knock-wrap"><div class="secret-door"><div class="door-peephole"></div><div class="door-knob"></div></div><div class="knock-text">Knock 3 times...</div><div class="knock-message">Access Granted</div></div>`,
    isNew: true,
  },
  {
    id: 'easter-matrix-rain',
    name: 'Matrix Rain',
    category: 'easter',
    tags: ['easter', 'matrix', 'rain', 'code', 'hacker'],
    difficulty: 'advanced',
    description: 'Matrix-style falling green characters creating a digital rain effect',
    cssCode: `.matrix-rain {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
  font-family: monospace;
}
.matrix-col {
  position: absolute;
  top: -100%;
  color: #10b981;
  font-size: 0.7rem;
  line-height: 1.1;
  writing-mode: vertical-rl;
  animation: matrix-fall linear infinite;
  text-shadow: 0 0 8px #10b98144;
  opacity: 0.8;
}
@keyframes matrix-fall {
  0% { top: -100%; }
  100% { top: 100%; }
}
.matrix-col:nth-child(1) { left: 8%; animation-duration: 3s; animation-delay: 0s; }
.matrix-col:nth-child(2) { left: 20%; animation-duration: 4s; animation-delay: 0.5s; opacity: 0.6; }
.matrix-col:nth-child(3) { left: 35%; animation-duration: 2.5s; animation-delay: 1s; }
.matrix-col:nth-child(4) { left: 50%; animation-duration: 3.5s; animation-delay: 0.3s; opacity: 0.5; }
.matrix-col:nth-child(5) { left: 65%; animation-duration: 2.8s; animation-delay: 0.8s; }
.matrix-col:nth-child(6) { left: 80%; animation-duration: 4.2s; animation-delay: 1.2s; opacity: 0.7; }
.matrix-col:nth-child(7) { left: 92%; animation-duration: 3.2s; animation-delay: 0.6s; opacity: 0.4; }
.matrix-scanline {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: #10b98122;
  animation: scanline 3s linear infinite;
  box-shadow: 0 0 10px #10b98133;
}
@keyframes scanline {
  0% { top: -2px; }
  100% { top: 100%; }
}`,
    htmlCode: `<div class="matrix-rain"><div class="matrix-col">01100101</div><div class="matrix-col">11010010</div><div class="matrix-col">00110101</div><div class="matrix-col">10101110</div><div class="matrix-col">01011001</div><div class="matrix-col">11001011</div><div class="matrix-col">00101101</div><div class="matrix-scanline"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-rickroll-border',
    name: 'Rickroll Border',
    category: 'easter',
    tags: ['easter', 'rickroll', 'border', 'rainbow', 'animated'],
    difficulty: 'intermediate',
    description: 'Never Gonna Give You Up inspired animated rainbow border that cycles through colors',
    cssCode: `.rickroll-border {
  position: relative;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;
}
.rickroll-border::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 14px;
  background: conic-gradient(from 0deg, #ef4444, #eab308, #10b981, #3b82f6, #8b5cf6, #ec4899, #ef4444);
  animation: rickroll-spin 2s linear infinite;
  z-index: -1;
}
@keyframes rickroll-spin {
  to { transform: rotate(360deg); }
}
.rickroll-border::after {
  content: '';
  position: absolute;
  inset: 2px;
  background: #0f0f1a;
  border-radius: 11px;
  z-index: -1;
}
.rickroll-content {
  position: relative;
  z-index: 1;
  text-align: center;
}
.rickroll-title {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 800;
}
.rickroll-subtitle {
  color: #94a3b8;
  font-size: 0.75rem;
  margin-top: 4px;
}
.rickroll-lyric {
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 8px;
  animation: lyric-pulse 1.5s ease-in-out infinite;
}
@keyframes lyric-pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; color: #eab308; }
}`,
    htmlCode: `<div class="rickroll-border"><div class="rickroll-content"><div class="rickroll-title">Click Here</div><div class="rickroll-subtitle">You won't regret it</div><div class="rickroll-lyric">Never gonna give you up ♪</div></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-glitch-screen',
    name: 'Glitch Screen',
    category: 'easter',
    tags: ['easter', 'glitch', 'screen', 'distortion', 'error'],
    difficulty: 'advanced',
    description: 'Screen glitch effect with horizontal offset slices and color channel separation',
    cssCode: `.glitch-screen {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.glitch-text {
  color: #e2e8f0;
  font-size: 1.4rem;
  font-weight: 900;
  position: relative;
  animation: glitch-main 3s infinite;
}
@keyframes glitch-main {
  0%, 90%, 100% { transform: none; }
  92% { transform: skewX(-10deg) translateX(3px); }
  94% { transform: skewX(8deg) translateX(-2px); }
  96% { transform: skewX(-3deg) translateX(1px); }
}
.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.glitch-text::before {
  color: #ef444488;
  animation: glitch-red 3s infinite;
  clip-path: inset(20% 0 40% 0);
}
.glitch-text::after {
  color: #3b82f688;
  animation: glitch-blue 3s infinite;
  clip-path: inset(60% 0 10% 0);
}
@keyframes glitch-red {
  0%, 90%, 100% { transform: none; }
  92% { transform: translateX(-5px); }
  94% { transform: translateX(4px); }
  96% { transform: translateX(-2px); }
}
@keyframes glitch-blue {
  0%, 90%, 100% { transform: none; }
  91% { transform: translateX(3px); }
  93% { transform: translateX(-4px); }
  95% { transform: translateX(2px); }
}
.glitch-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: #10b98144;
  animation: glitch-scan 3s steps(1) infinite;
}
@keyframes glitch-scan {
  0%, 90%, 100% { opacity: 0; }
  91% { opacity: 1; top: 30%; }
  93% { opacity: 1; top: 65%; }
  95% { opacity: 0; }
}`,
    htmlCode: `<div class="glitch-screen"><div class="glitch-line"></div><div class="glitch-text" data-text="GLITCH">GLITCH</div></div>`,
    isNew: true,
  },
  {
    id: 'easter-disco-mode',
    name: 'Disco Mode',
    category: 'easter',
    tags: ['easter', 'disco', 'mode', 'dance', 'lights'],
    difficulty: 'intermediate',
    description: 'Disco ball effect with rotating color spots and pulsing background lights',
    cssCode: `.disco-mode {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.disco-ball {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #e2e8f0, #64748b, #94a3b8);
  position: relative;
  z-index: 3;
  animation: disco-spin 2s linear infinite;
  box-shadow: 0 0 20px #e2e8f044;
}
@keyframes disco-spin {
  to { transform: rotateY(360deg); }
}
.disco-spot {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  filter: blur(20px);
  animation: disco-color 2s ease-in-out infinite alternate;
}
@keyframes disco-color {
  0% { background: #ef444488; }
  33% { background: #3b82f688; }
  66% { background: #10b98188; }
  100% { background: #eab30888; }
}
.disco-spot:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
.disco-spot:nth-child(2) { top: 20%; right: 15%; animation-delay: 0.5s; }
.disco-spot:nth-child(3) { bottom: 15%; left: 20%; animation-delay: 1s; }
.disco-spot:nth-child(4) { bottom: 10%; right: 10%; animation-delay: 1.5s; }
.disco-spot:nth-child(5) { top: 50%; left: 50%; animation-delay: 0.7s; }
.disco-floor {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: linear-gradient(180deg, transparent, #1a1a2e);
  display: flex;
  justify-content: center;
  gap: 4px;
  align-items: flex-end;
}
.disco-tile {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  animation: tile-flash 0.8s ease-in-out infinite alternate;
}
.disco-tile:nth-child(odd) { animation-delay: 0.4s; }
@keyframes tile-flash {
  0% { background: #2a2a3e; }
  100% { background: #10b98144; }
}`,
    htmlCode: `<div class="disco-mode"><div class="disco-spot"></div><div class="disco-spot"></div><div class="disco-spot"></div><div class="disco-spot"></div><div class="disco-spot"></div><div class="disco-ball"></div><div class="disco-floor"><div class="disco-tile"></div><div class="disco-tile"></div><div class="disco-tile"></div><div class="disco-tile"></div><div class="disco-tile"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-fireworks-sparkle',
    name: 'Fireworks Sparkle',
    category: 'easter',
    tags: ['easter', 'fireworks', 'sparkle', 'explosion', 'celebration'],
    difficulty: 'intermediate',
    description: 'Firework burst with radiating sparkle trails that fade and scatter outward',
    cssCode: `.fireworks-container {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.firework-burst {
  position: absolute;
  top: 35%;
  left: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  animation: firework-explode 2s ease-out infinite;
}
@keyframes firework-explode {
  0% { transform: scale(0); opacity: 1; box-shadow: 0 0 0 0 #10b981; }
  30% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}
.firework-trail {
  position: absolute;
  width: 2px;
  height: 8px;
  border-radius: 1px;
  top: 35%;
  left: 50%;
  animation: trail-burst 2s ease-out infinite;
  opacity: 0;
}
@keyframes trail-burst {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  50% { opacity: 0.6; }
  100% { transform: translate(var(--mx), var(--my)) scale(0.3); opacity: 0; }
}
.firework-trail:nth-child(1) { background: #10b981; --mx: -40px; --my: -45px; animation-delay: 0s; }
.firework-trail:nth-child(2) { background: #34d399; --mx: 35px; --my: -50px; animation-delay: 0.05s; }
.firework-trail:nth-child(3) { background: #10b981; --mx: -50px; --my: 20px; animation-delay: 0.1s; }
.firework-trail:nth-child(4) { background: #6ee7b7; --mx: 45px; --my: 30px; animation-delay: 0.15s; }
.firework-trail:nth-child(5) { background: #10b981; --mx: 5px; --my: -55px; animation-delay: 0.08s; }
.firework-trail:nth-child(6) { background: #34d399; --mx: -25px; --my: 45px; animation-delay: 0.12s; }
.firework-trail:nth-child(7) { background: #10b981; --mx: 50px; --my: -10px; animation-delay: 0.18s; }
.firework-trail:nth-child(8) { background: #6ee7b7; --mx: -55px; --my: -15px; animation-delay: 0.04s; }
.firework-rocket {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 2px;
  height: 20px;
  background: linear-gradient(180deg, #10b981, transparent);
  animation: rocket-rise 2s ease-out infinite;
}
@keyframes rocket-rise {
  0% { transform: translateY(0); opacity: 1; }
  30% { transform: translateY(-100px); opacity: 0; }
  100% { opacity: 0; }
}`,
    htmlCode: `<div class="fireworks-container"><div class="firework-rocket"></div><div class="firework-burst"></div><div class="firework-trail"></div><div class="firework-trail"></div><div class="firework-trail"></div><div class="firework-trail"></div><div class="firework-trail"></div><div class="firework-trail"></div><div class="firework-trail"></div><div class="firework-trail"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-slot-machine-spin',
    name: 'Slot Machine Spin',
    category: 'easter',
    tags: ['easter', 'slot', 'machine', 'spin', 'casino'],
    difficulty: 'intermediate',
    description: 'Slot machine reels spinning with a bouncing stop animation and win highlight',
    cssCode: `.slot-machine {
  background: #0f0f1a;
  border: 2px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
  text-align: center;
}
.slot-header {
  color: #eab308;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.slot-reels {
  display: flex;
  gap: 8px;
  justify-content: center;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 10px;
}
.slot-reel {
  width: 44px;
  height: 44px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  overflow: hidden;
  position: relative;
}
.slot-reel .slot-symbol {
  animation: slot-spin 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes slot-spin {
  0% { transform: translateY(-120px); }
  60% { transform: translateY(5px); }
  80% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
}
.slot-reel:nth-child(2) .slot-symbol { animation-delay: 0.15s; }
.slot-reel:nth-child(3) .slot-symbol { animation-delay: 0.3s; }
.slot-reel.win {
  border-color: #eab308;
  box-shadow: 0 0 12px #eab30833;
  animation: win-glow 0.5s ease-in-out 3;
}
@keyframes win-glow {
  0%, 100% { box-shadow: 0 0 12px #eab30833; }
  50% { box-shadow: 0 0 24px #eab30855; }
}
.slot-result {
  margin-top: 10px;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 700;
  animation: result-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes result-pop {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="slot-machine"><div class="slot-header">Jackpot</div><div class="slot-reels"><div class="slot-reel win"><span class="slot-symbol">💎</span></div><div class="slot-reel win"><span class="slot-symbol">💎</span></div><div class="slot-reel win"><span class="slot-symbol">💎</span></div></div><div class="slot-result">You Win!</div></div>`,
    isNew: true,
  },
  {
    id: 'easter-egg-hidden',
    name: 'Easter Egg Hidden',
    category: 'easter',
    tags: ['easter', 'egg', 'hidden', 'secret', 'surprise'],
    difficulty: 'beginner',
    description: 'Hidden easter egg that reveals itself with a wobble and crack animation on hover',
    cssCode: `.easter-egg-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}
.easter-egg {
  width: 60px;
  height: 75px;
  background: linear-gradient(180deg, #10b981, #059669);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px #10b98133;
}
.easter-egg:hover {
  animation: egg-wobble 0.5s ease-in-out;
}
@keyframes egg-wobble {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  50% { transform: rotate(15deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}
.easter-egg-stripe {
  position: absolute;
  left: 5px;
  right: 5px;
  height: 3px;
  background: #34d39944;
  border-radius: 2px;
}
.easter-egg-stripe:nth-child(1) { top: 35%; }
.easter-egg-stripe:nth-child(2) { top: 50%; }
.easter-egg-stripe:nth-child(3) { top: 65%; }
.egg-crack {
  display: none;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 12px;
  animation: crack-reveal 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes crack-reveal {
  0% { transform: scale(0) rotate(-10deg); opacity: 0; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}
.easter-egg:hover + .egg-crack { display: block; }
.egg-hint {
  color: #64748b;
  font-size: 0.65rem;
  margin-top: 8px;
}`,
    htmlCode: `<div class="easter-egg-wrap"><div class="easter-egg"><div class="easter-egg-stripe"></div><div class="easter-egg-stripe"></div><div class="easter-egg-stripe"></div></div><div class="egg-crack">You found me! 🎁</div><div class="egg-hint">Hover the egg...</div></div>`,
    isNew: true,
  },
];
