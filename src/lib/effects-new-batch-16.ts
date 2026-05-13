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

export const effectsNewBatch16: CSSEffect[] = [
  // ==================== INPUTS (20) ====================
  {
    id: 'input-float-label-outline',
    name: 'Floating Label Outline',
    category: 'inputs',
    tags: ['input', 'floating-label', 'outline', 'animated', 'form'],
    difficulty: 'intermediate',
    description: 'An input with a floating label that moves up and an outline border that animates on focus',
    cssCode: `.input-float-label-outline {
  position: relative; width: 200px;
}
.input-float-label-outline input {
  width: 100%; padding: 14px 12px 6px;
  background: #0f0f1a; border: 2px solid #2a2a3e;
  border-radius: 8px; color: #e2e8f0; font-size: 0.85rem;
  outline: none; transition: border-color 0.3s;
}
.input-float-label-outline label {
  position: absolute; left: 12px; top: 50%;
  transform: translateY(-50%); color: #6b7280;
  font-size: 0.8rem; pointer-events: none;
  transition: all 0.25s ease;
}
.input-float-label-outline input:focus { border-color: #10b981; }
.input-float-label-outline input:focus + label,
.input-float-label-outline input:not(:placeholder-shown) + label {
  top: 4px; transform: translateY(0);
  font-size: 0.6rem; color: #10b981;
}`,
    htmlCode: `<div class="input-float-label-outline"><input type="text" placeholder=" "><label>Username</label></div>`,
    isNew: true,
  },
  {
    id: 'input-underline-slide',
    name: 'Underline Slide',
    category: 'inputs',
    tags: ['input', 'underline', 'slide', 'focus', 'animated'],
    difficulty: 'intermediate',
    description: 'An input with an underline that slides in from the center on focus',
    cssCode: `.input-underline-slide {
  position: relative; width: 200px;
}
.input-underline-slide input {
  width: 100%; padding: 10px 0;
  background: transparent; border: none;
  border-bottom: 2px solid #2a2a3e;
  color: #e2e8f0; font-size: 0.85rem; outline: none;
}
.input-underline-slide::after {
  content: ''; position: absolute;
  bottom: 0; left: 50%; width: 0; height: 2px;
  background: #10b981; transition: all 0.3s ease;
  transform: translateX(-50%);
}
.input-underline-slide:focus-within::after {
  width: 100%;
}
.input-underline-slide label {
  font-size: 0.7rem; color: #10b981; display: block;
  margin-bottom: 4px; transition: color 0.3s;
}`,
    htmlCode: `<div class="input-underline-slide"><label>Email</label><input type="text"></div>`,
    isNew: true,
  },
  {
    id: 'input-focus-ring-expand',
    name: 'Focus Ring Expand',
    category: 'inputs',
    tags: ['input', 'focus', 'ring', 'expand', 'accessibility'],
    difficulty: 'beginner',
    description: 'An input with a focus ring that expands outward with an emerald glow',
    cssCode: `.input-focus-ring-expand input {
  padding: 10px 14px; width: 200px;
  background: #1a1a2e; border: 2px solid #2a2a3e;
  border-radius: 8px; color: #e2e8f0;
  font-size: 0.85rem; outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.input-focus-ring-expand input:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 4px #10b98133, 0 0 12px #10b98122;
}`,
    htmlCode: `<div class="input-focus-ring-expand"><input type="text" placeholder="Focus me"></div>`,
    isNew: true,
  },
  {
    id: 'input-validation-bounce',
    name: 'Validation Bounce',
    category: 'inputs',
    tags: ['input', 'validation', 'bounce', 'error', 'form'],
    difficulty: 'intermediate',
    description: 'An input that bounces and shakes when validation fails with a red border flash',
    cssCode: `.input-validation-bounce input {
  padding: 10px 14px; width: 200px;
  background: #1a1a2e; border: 2px solid #2a2a3e;
  border-radius: 8px; color: #e2e8f0;
  font-size: 0.85rem; outline: none;
  transition: border-color 0.3s;
}
.input-validation-bounce input:invalid {
  border-color: #ef4444;
  animation: input-bounce-shake 0.5s ease;
}
.input-validation-bounce input:valid {
  border-color: #10b981;
}
@keyframes input-bounce-shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}`,
    htmlCode: `<div class="input-validation-bounce"><input type="email" required placeholder="Enter email"></div>`,
    isNew: true,
  },
  {
    id: 'input-search-morph',
    name: 'Search Expand Morph',
    category: 'inputs',
    tags: ['input', 'search', 'expand', 'morph', 'animated'],
    difficulty: 'advanced',
    description: 'A search icon that morphs into a full-width search input on click',
    cssCode: `.input-search-morph {
  position: relative; width: 44px; height: 44px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.input-search-morph:focus-within {
  width: 220px;
}
.input-search-morph input {
  width: 100%; height: 100%;
  padding: 0 14px 0 40px;
  background: #1a1a2e; border: 2px solid #2a2a3e;
  border-radius: 22px; color: #e2e8f0;
  font-size: 0.85rem; outline: none;
  transition: border-color 0.3s;
}
.input-search-morph:focus-within input { border-color: #10b981; }
.input-search-morph::before {
  content: '⌕'; position: absolute; left: 14px; top: 50%;
  transform: translateY(-50%); color: #10b981;
  font-size: 1.1rem; pointer-events: none;
}`,
    htmlCode: `<div class="input-search-morph"><input type="text" placeholder="Search..."></div>`,
    isNew: true,
  },
  {
    id: 'input-password-meter',
    name: 'Password Strength Meter',
    category: 'inputs',
    tags: ['input', 'password', 'strength', 'meter', 'form'],
    difficulty: 'intermediate',
    description: 'A password input with an animated strength meter bar that changes color',
    cssCode: `.input-password-meter {
  width: 200px; position: relative;
}
.input-password-meter input {
  width: 100%; padding: 10px 14px;
  background: #1a1a2e; border: 2px solid #2a2a3e;
  border-radius: 8px 8px 0 0; color: #e2e8f0;
  font-size: 0.85rem; outline: none;
}
.input-password-meter-meter {
  height: 4px; width: 100%;
  background: #0f0f1a; border-radius: 0 0 8px 8px;
  overflow: hidden;
}
.input-password-meter-meter::after {
  content: ''; display: block; height: 100%;
  width: 65%; background: #10b981;
  animation: meter-fill 2s ease-in-out infinite;
}
@keyframes meter-fill {
  0% { width: 20%; background: #ef4444; }
  33% { width: 45%; background: #f59e0b; }
  66% { width: 65%; background: #10b981; }
  100% { width: 85%; background: #10b981; }
}`,
    htmlCode: `<div class="input-password-meter"><input type="password" placeholder="Password"><div class="input-password-meter-meter"></div></div>`,
    isNew: true,
  },
  {
    id: 'input-autocomplete-fade',
    name: 'Autocomplete Fade',
    category: 'inputs',
    tags: ['input', 'autocomplete', 'fade', 'suggest', 'dropdown'],
    difficulty: 'intermediate',
    description: 'An input with autocomplete suggestions that fade in below on focus',
    cssCode: `.input-autocomplete-fade {
  position: relative; width: 200px;
}
.input-autocomplete-fade input {
  width: 100%; padding: 10px 14px;
  background: #1a1a2e; border: 2px solid #2a2a3e;
  border-radius: 8px; color: #e2e8f0;
  font-size: 0.85rem; outline: none;
  transition: border-color 0.3s;
}
.input-autocomplete-fade:focus-within input {
  border-color: #10b981; border-radius: 8px 8px 0 0;
}
.input-autocomplete-fade-list {
  position: absolute; top: 100%; left: 0; right: 0;
  background: #1a1a2e; border: 2px solid #10b981;
  border-top: none; border-radius: 0 0 8px 8px;
  overflow: hidden;
}
.input-autocomplete-fade-item {
  padding: 8px 14px; color: #e2e8f0;
  font-size: 0.8rem; cursor: pointer;
  transition: background 0.2s; opacity: 0;
  animation: item-fade-in 0.3s ease forwards;
}
.input-autocomplete-fade-item:nth-child(2) { animation-delay: 0.05s; }
.input-autocomplete-fade-item:nth-child(3) { animation-delay: 0.1s; }
.input-autocomplete-fade-item:hover { background: #10b98122; }
@keyframes item-fade-in { to { opacity: 1; } }`,
    htmlCode: `<div class="input-autocomplete-fade"><input type="text" placeholder="Type..." value="em"><div class="input-autocomplete-fade-list"><div class="input-autocomplete-fade-item">emerald</div><div class="input-autocomplete-fade-item">email</div><div class="input-autocomplete-fade-item">emoji</div></div></div>`,
    isNew: true,
  },
  {
    id: 'input-textarea-grow',
    name: 'Textarea Auto-Grow',
    category: 'inputs',
    tags: ['input', 'textarea', 'grow', 'auto', 'animated'],
    difficulty: 'beginner',
    description: 'A textarea that visually indicates auto-grow capability with an animated border',
    cssCode: `.input-textarea-grow textarea {
  width: 200px; min-height: 40px; padding: 10px 14px;
  background: #1a1a2e; border: 2px solid #2a2a3e;
  border-radius: 8px; color: #e2e8f0;
  font-size: 0.85rem; outline: none; resize: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.input-textarea-grow textarea:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px #10b98122;
}
.input-textarea-grow-label {
  font-size: 0.7rem; color: #6b7280;
  text-align: right; margin-top: 4px;
  transition: color 0.3s;
}
.input-textarea-grow:focus-within .input-textarea-grow-label {
  color: #10b981;
}`,
    htmlCode: `<div class="input-textarea-grow"><textarea placeholder="Type here..." rows="2"></textarea><div class="input-textarea-grow-label">auto-grow</div></div>`,
    isNew: true,
  },
  {
    id: 'input-range-emerald',
    name: 'Range Slider Emerald',
    category: 'inputs',
    tags: ['input', 'range', 'slider', 'custom', 'emerald'],
    difficulty: 'intermediate',
    description: 'A custom styled range slider with emerald accent and animated thumb',
    cssCode: `.input-range-emerald input[type="range"] {
  -webkit-appearance: none; width: 200px; height: 6px;
  background: #2a2a3e; border-radius: 3px; outline: none;
}
.input-range-emerald input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 20px; height: 20px;
  background: #10b981; border-radius: 50%;
  cursor: pointer; border: 3px solid #0f0f1a;
  box-shadow: 0 0 8px #10b98144;
  transition: transform 0.2s, box-shadow 0.2s;
}
.input-range-emerald input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 14px #10b98166;
}
.input-range-emerald input[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.3);
  box-shadow: 0 0 20px #10b98188;
}`,
    htmlCode: `<div class="input-range-emerald"><input type="range" min="0" max="100" value="60"></div>`,
    isNew: true,
  },
  {
    id: 'input-checkbox-tick',
    name: 'Checkbox Custom Tick',
    category: 'inputs',
    tags: ['input', 'checkbox', 'custom', 'tick', 'animated'],
    difficulty: 'intermediate',
    description: 'A custom checkbox with an animated tick mark that draws on check',
    cssCode: `.input-checkbox-tick label {
  display: flex; align-items: center; gap: 10px;
  color: #e2e8f0; font-size: 0.85rem; cursor: pointer;
}
.input-checkbox-tick input { display: none; }
.input-checkbox-tick-box {
  width: 22px; height: 22px; border: 2px solid #2a2a3e;
  border-radius: 4px; background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.3s, border-color 0.3s;
}
.input-checkbox-tick input:checked + .input-checkbox-tick-box {
  background: #10b981; border-color: #10b981;
}
.input-checkbox-tick-box::after {
  content: ''; width: 6px; height: 10px;
  border: solid #fff; border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(0); transition: transform 0.2s ease;
}
.input-checkbox-tick input:checked + .input-checkbox-tick-box::after {
  transform: rotate(45deg) scale(1);
}`,
    htmlCode: `<div class="input-checkbox-tick"><label><input type="checkbox" checked><span class="input-checkbox-tick-box"></span>Accept terms</label></div>`,
    isNew: true,
  },
  {
    id: 'input-radio-pulse',
    name: 'Radio Custom Pulse',
    category: 'inputs',
    tags: ['input', 'radio', 'custom', 'pulse', 'animated'],
    difficulty: 'beginner',
    description: 'A custom radio button with a pulsing dot animation on selection',
    cssCode: `.input-radio-pulse label {
  display: flex; align-items: center; gap: 10px;
  color: #e2e8f0; font-size: 0.85rem; cursor: pointer;
}
.input-radio-pulse input { display: none; }
.input-radio-pulse-dot {
  width: 20px; height: 20px; border: 2px solid #2a2a3e;
  border-radius: 50%; background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.3s;
}
.input-radio-pulse input:checked + .input-radio-pulse-dot {
  border-color: #10b981;
}
.input-radio-pulse-dot::after {
  content: ''; width: 10px; height: 10px;
  background: #10b981; border-radius: 50%;
  transform: scale(0); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.input-radio-pulse input:checked + .input-radio-pulse-dot::after {
  transform: scale(1);
  animation: radio-pulse-ring 1s ease-out;
}
@keyframes radio-pulse-ring {
  0% { box-shadow: 0 0 0 0 #10b98166; }
  100% { box-shadow: 0 0 0 8px #10b98100; }
}`,
    htmlCode: `<div class="input-radio-pulse"><label><input type="radio" name="rp" checked><span class="input-radio-pulse-dot"></span>Option A</label></div>`,
    isNew: true,
  },
  {
    id: 'input-file-upload-area',
    name: 'File Upload Area',
    category: 'inputs',
    tags: ['input', 'file', 'upload', 'drag', 'drop'],
    difficulty: 'intermediate',
    description: 'A styled file upload area with dashed border and hover animation',
    cssCode: `.input-file-upload-area {
  width: 200px; padding: 28px 16px;
  border: 2px dashed #2a2a3e; border-radius: 12px;
  background: #0f0f1a; text-align: center;
  cursor: pointer; transition: border-color 0.3s, background 0.3s;
}
.input-file-upload-area:hover {
  border-color: #10b981; background: #10b98108;
}
.input-file-upload-area-icon {
  font-size: 1.5rem; color: #10b981; margin-bottom: 6px;
  animation: upload-float 2s ease-in-out infinite;
}
.input-file-upload-area-text {
  color: #6b7280; font-size: 0.75rem;
}
.input-file-upload-area-text span { color: #10b981; font-weight: 600; }
@keyframes upload-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}`,
    htmlCode: `<div class="input-file-upload-area"><div class="input-file-upload-area-icon">↑</div><div class="input-file-upload-area-text"><span>Click to upload</span> or drag</div></div>`,
    isNew: true,
  },
  {
    id: 'input-drag-drop-zone',
    name: 'Drag Drop Zone',
    category: 'inputs',
    tags: ['input', 'drag', 'drop', 'zone', 'upload'],
    difficulty: 'advanced',
    description: 'A drag-and-drop zone with animated dashed border and hover glow effect',
    cssCode: `.input-drag-drop-zone {
  width: 200px; height: 100px;
  border: 2px dashed #2a2a3e; border-radius: 12px;
  background: #0f0f1a;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; position: relative; overflow: hidden;
  transition: border-color 0.3s;
}
.input-drag-drop-zone::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 50%, #10b98111, transparent 70%);
  opacity: 0; transition: opacity 0.3s;
}
.input-drag-drop-zone:hover { border-color: #10b981; }
.input-drag-drop-zone:hover::before { opacity: 1; }
.input-drag-drop-zone-text {
  color: #6b7280; font-size: 0.8rem; z-index: 1;
  transition: color 0.3s;
}
.input-drag-drop-zone:hover .input-drag-drop-zone-text { color: #10b981; }
@keyframes dash-march { to { stroke-dashoffset: -16; } }`,
    htmlCode: `<div class="input-drag-drop-zone"><span class="input-drag-drop-zone-text">Drop files here</span></div>`,
    isNew: true,
  },
  {
    id: 'input-color-swatch',
    name: 'Color Picker Swatch',
    category: 'inputs',
    tags: ['input', 'color', 'picker', 'swatch', 'custom'],
    difficulty: 'beginner',
    description: 'A styled color picker input with a rounded swatch and glow ring on focus',
    cssCode: `.input-color-swatch {
  position: relative; display: inline-block;
}
.input-color-swatch input[type="color"] {
  -webkit-appearance: none; width: 44px; height: 44px;
  border: 3px solid #2a2a3e; border-radius: 50%;
  cursor: pointer; padding: 0; background: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.input-color-swatch input[type="color"]::-webkit-color-swatch-wrapper { padding: 2px; }
.input-color-swatch input[type="color"]::-webkit-color-swatch { border-radius: 50%; border: none; }
.input-color-swatch input[type="color"]:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px #10b98133;
}`,
    htmlCode: `<div class="input-color-swatch"><input type="color" value="#10b981"></div>`,
    isNew: true,
  },
  {
    id: 'input-date-calendar',
    name: 'Date Picker Styled',
    category: 'inputs',
    tags: ['input', 'date', 'picker', 'calendar', 'custom'],
    difficulty: 'beginner',
    description: 'A styled date input with emerald focus ring and custom appearance',
    cssCode: `.input-date-calendar input[type="date"] {
  padding: 10px 14px; width: 200px;
  background: #1a1a2e; border: 2px solid #2a2a3e;
  border-radius: 8px; color: #e2e8f0;
  font-size: 0.85rem; outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.input-date-calendar input[type="date"]:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px #10b98122;
}
.input-date-calendar input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.7) sepia(1) hue-rotate(120deg);
  cursor: pointer;
}`,
    htmlCode: `<div class="input-date-calendar"><input type="date"></div>`,
    isNew: true,
  },
  {
    id: 'input-toggle-pill',
    name: 'Toggle Switch Pill',
    category: 'inputs',
    tags: ['input', 'toggle', 'switch', 'pill', 'animated'],
    difficulty: 'intermediate',
    description: 'A pill-shaped toggle switch input with smooth sliding knob and color transition',
    cssCode: `.input-toggle-pill label {
  display: flex; align-items: center; gap: 10px;
  color: #e2e8f0; font-size: 0.8rem; cursor: pointer;
}
.input-toggle-pill input { display: none; }
.input-toggle-pill-track {
  width: 44px; height: 24px;
  background: #2a2a3e; border-radius: 12px;
  position: relative; transition: background 0.3s;
}
.input-toggle-pill-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 18px; height: 18px; background: #e2e8f0;
  border-radius: 50%; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.input-toggle-pill input:checked + .input-toggle-pill-track {
  background: #10b981;
}
.input-toggle-pill input:checked + .input-toggle-pill-track::after {
  transform: translateX(20px);
}`,
    htmlCode: `<div class="input-toggle-pill"><label><input type="checkbox" checked><span class="input-toggle-pill-track"></span>Active</label></div>`,
    isNew: true,
  },
  {
    id: 'input-segmented-tab',
    name: 'Segmented Control',
    category: 'inputs',
    tags: ['input', 'segmented', 'control', 'tab', 'selector'],
    difficulty: 'advanced',
    description: 'A segmented control with sliding indicator that moves between options',
    cssCode: `.input-segmented-tab {
  display: flex; background: #1a1a2e;
  border-radius: 10px; padding: 3px;
  position: relative; width: 200px;
}
.input-segmented-tab-slider {
  position: absolute; top: 3px; left: 3px;
  width: 33.33%; height: calc(100% - 6px);
  background: #10b981; border-radius: 8px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.input-segmented-tab input:nth-child(2):checked ~ .input-segmented-tab-slider {
  transform: translateX(100%);
}
.input-segmented-tab input:nth-child(3):checked ~ .input-segmented-tab-slider {
  transform: translateX(200%);
}
.input-segmented-tab input { display: none; }
.input-segmented-tab label {
  flex: 1; text-align: center; padding: 8px 0;
  font-size: 0.75rem; font-weight: 600;
  color: #6b7280; cursor: pointer;
  position: relative; z-index: 1;
  transition: color 0.3s;
}
.input-segmented-tab input:checked + label { color: #fff; }`,
    htmlCode: `<div class="input-segmented-tab"><input type="radio" name="seg" id="s1" checked><label for="s1">One</label><input type="radio" name="seg" id="s2"><label for="s2">Two</label><input type="radio" name="seg" id="s3"><label for="s3">Three</label><div class="input-segmented-tab-slider"></div></div>`,
    isNew: true,
  },
  {
    id: 'input-chip-tag',
    name: 'Chip Input Tag',
    category: 'inputs',
    tags: ['input', 'chip', 'tag', 'badge', 'multi'],
    difficulty: 'intermediate',
    description: 'An input with chip-style tags that can be added and removed with animation',
    cssCode: `.input-chip-tag {
  display: flex; flex-wrap: wrap; gap: 6px;
  padding: 8px; width: 200px;
  background: #1a1a2e; border: 2px solid #2a2a3e;
  border-radius: 8px; align-items: center;
}
.input-chip-tag-chip {
  display: flex; align-items: center; gap: 4px;
  padding: 4px 8px; background: #10b98122;
  border: 1px solid #10b98144; border-radius: 6px;
  color: #10b981; font-size: 0.7rem; font-weight: 600;
  animation: chip-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.input-chip-tag-chip::after {
  content: '×'; cursor: pointer; margin-left: 2px;
  color: #10b98188; transition: color 0.2s;
}
.input-chip-tag-chip:hover::after { color: #ef4444; }
.input-chip-tag input {
  border: none; background: transparent;
  color: #e2e8f0; font-size: 0.8rem;
  outline: none; flex: 1; min-width: 40px;
}
@keyframes chip-in { from { transform: scale(0.5); opacity: 0; } }`,
    htmlCode: `<div class="input-chip-tag"><span class="input-chip-tag-chip">CSS</span><span class="input-chip-tag-chip">React</span><input placeholder="Add tag"></div>`,
    isNew: true,
  },
  {
    id: 'input-multi-select-badge',
    name: 'Multi Select Badge',
    category: 'inputs',
    tags: ['input', 'multi-select', 'badge', 'dropdown', 'form'],
    difficulty: 'intermediate',
    description: 'A multi-select dropdown with selected items shown as badges with remove animation',
    cssCode: `.input-multi-select-badge {
  width: 200px; position: relative;
}
.input-multi-select-badge-display {
  display: flex; flex-wrap: wrap; gap: 4px;
  padding: 8px; background: #1a1a2e;
  border: 2px solid #2a2a3e; border-radius: 8px;
  min-height: 40px; cursor: pointer;
}
.input-multi-select-badge-badge {
  padding: 3px 8px; background: #10b98122;
  border: 1px solid #10b98144; border-radius: 4px;
  color: #10b981; font-size: 0.7rem;
  animation: badge-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.input-multi-select-badge-placeholder {
  color: #6b7280; font-size: 0.8rem;
  align-self: center;
}
@keyframes badge-pop {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="input-multi-select-badge"><div class="input-multi-select-badge-display"><span class="input-multi-select-badge-badge">JS</span><span class="input-multi-select-badge-badge">TS</span><span class="input-multi-select-badge-placeholder">Select...</span></div></div>`,
    isNew: true,
  },
  {
    id: 'input-wizard-progress',
    name: 'Form Wizard Step',
    category: 'inputs',
    tags: ['input', 'wizard', 'step', 'progress', 'form'],
    difficulty: 'advanced',
    description: 'A form wizard with animated step indicators and a connecting progress line',
    cssCode: `.input-wizard-progress {
  display: flex; align-items: center; gap: 0;
  width: 200px; position: relative;
}
.input-wizard-progress-step {
  display: flex; flex-direction: column; align-items: center;
  flex: 1; position: relative; z-index: 1;
}
.input-wizard-progress-dot {
  width: 24px; height: 24px; border-radius: 50%;
  background: #2a2a3e; border: 2px solid #2a2a3e;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.6rem; color: #6b7280; font-weight: 700;
  transition: all 0.3s;
}
.input-wizard-progress-step.active .input-wizard-progress-dot {
  background: #10b981; border-color: #10b981;
  color: #fff; box-shadow: 0 0 10px #10b98144;
}
.input-wizard-progress-step.done .input-wizard-progress-dot {
  background: #10b98144; border-color: #10b981; color: #10b981;
}
.input-wizard-progress-label {
  font-size: 0.6rem; color: #6b7280; margin-top: 4px;
}
.input-wizard-progress-step.active .input-wizard-progress-label { color: #10b981; }
.input-wizard-progress-line {
  position: absolute; top: 12px; left: 15%;
  width: 35%; height: 2px; background: #10b981;
  z-index: 0;
  animation: line-grow 1s ease forwards;
}
@keyframes line-grow { from { width: 0; } }`,
    htmlCode: `<div class="input-wizard-progress"><div class="input-wizard-progress-step done"><div class="input-wizard-progress-dot">1</div><div class="input-wizard-progress-label">Info</div></div><div class="input-wizard-progress-line"></div><div class="input-wizard-progress-step active"><div class="input-wizard-progress-dot">2</div><div class="input-wizard-progress-label">Detail</div></div><div class="input-wizard-progress-step"><div class="input-wizard-progress-dot">3</div><div class="input-wizard-progress-label">Done</div></div></div>`,
    isNew: true,
  },

  // ==================== TOGGLES (20) ====================
  {
    id: 'toggle-ios-sleek',
    name: 'iOS Switch Sleek',
    category: 'toggles',
    tags: ['toggle', 'ios', 'switch', 'sleek', 'smooth'],
    difficulty: 'beginner',
    description: 'A sleek iOS-style toggle switch with smooth knob transition and emerald active color',
    cssCode: `.toggle-ios-sleek label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-ios-sleek input { display: none; }
.toggle-ios-sleek-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: background 0.3s;
}
.toggle-ios-sleek-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #fff;
  border-radius: 50%; transition: transform 0.3s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
.toggle-ios-sleek input:checked + .toggle-ios-sleek-track {
  background: #10b981;
}
.toggle-ios-sleek input:checked + .toggle-ios-sleek-track::after {
  transform: translateX(22px);
}`,
    htmlCode: `<div class="toggle-ios-sleek"><label><input type="checkbox" checked><span class="toggle-ios-sleek-track"></span>Wi-Fi</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-android-material',
    name: 'Android Material Switch',
    category: 'toggles',
    tags: ['toggle', 'android', 'material', 'switch', 'design'],
    difficulty: 'beginner',
    description: 'A Material Design inspired Android switch with thumb elevation change',
    cssCode: `.toggle-android-material label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-android-material input { display: none; }
.toggle-android-material-track {
  width: 40px; height: 20px; background: #3a3a4e;
  border-radius: 10px; position: relative;
  transition: background 0.3s;
}
.toggle-android-material-thumb {
  position: absolute; top: -2px; left: -2px;
  width: 24px; height: 24px; background: #9ca3af;
  border-radius: 50%; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
.toggle-android-material input:checked + .toggle-android-material-track {
  background: #10b98155;
}
.toggle-android-material input:checked + .toggle-android-material-track .toggle-android-material-thumb {
  left: 18px; background: #10b981;
  box-shadow: 0 2px 6px #10b98144;
}`,
    htmlCode: `<div class="toggle-android-material"><label><input type="checkbox"><span class="toggle-android-material-track"><span class="toggle-android-material-thumb"></span></span>Bluetooth</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-flat-minimal',
    name: 'Flat Toggle Minimal',
    category: 'toggles',
    tags: ['toggle', 'flat', 'minimal', 'clean', 'simple'],
    difficulty: 'beginner',
    description: 'A flat minimal toggle with no shadows, just color change and slide',
    cssCode: `.toggle-flat-minimal label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-flat-minimal input { display: none; }
.toggle-flat-minimal-track {
  width: 44px; height: 22px; background: #2a2a3e;
  border-radius: 11px; position: relative;
  transition: background 0.3s;
}
.toggle-flat-minimal-track::after {
  content: ''; position: absolute; top: 2px; left: 2px;
  width: 18px; height: 18px; background: #6b7280;
  border-radius: 50%; transition: all 0.3s ease;
}
.toggle-flat-minimal input:checked + .toggle-flat-minimal-track {
  background: #10b98133;
}
.toggle-flat-minimal input:checked + .toggle-flat-minimal-track::after {
  transform: translateX(22px); background: #10b981;
}`,
    htmlCode: `<div class="toggle-flat-minimal"><label><input type="checkbox" checked><span class="toggle-flat-minimal-track"></span>Notify</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-3d-push',
    name: '3D Push Toggle',
    category: 'toggles',
    tags: ['toggle', '3d', 'push', 'depth', 'perspective'],
    difficulty: 'advanced',
    description: 'A 3D toggle with depth perspective that appears to push the knob into the track',
    cssCode: `.toggle-3d-push label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-3d-push input { display: none; }
.toggle-3d-push-track {
  width: 52px; height: 28px;
  background: linear-gradient(180deg, #1a1a2e, #0f0f1a);
  border-radius: 14px; position: relative;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
  transition: box-shadow 0.3s;
}
.toggle-3d-push-knob {
  position: absolute; top: 3px; left: 3px;
  width: 22px; height: 22px;
  background: linear-gradient(180deg, #4a4a5e, #2a2a3e);
  border-radius: 50%; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
}
.toggle-3d-push input:checked + .toggle-3d-push-track {
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.5), 0 0 8px #10b98133;
}
.toggle-3d-push input:checked + .toggle-3d-push-track .toggle-3d-push-knob {
  left: 27px;
  background: linear-gradient(180deg, #14d494, #0d9e6c);
  box-shadow: 0 2px 6px #10b98144, inset 0 1px 0 rgba(255,255,255,0.2);
}`,
    htmlCode: `<div class="toggle-3d-push"><label><input type="checkbox" checked><span class="toggle-3d-push-track"><span class="toggle-3d-push-knob"></span></span>3D Mode</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-neon-line',
    name: 'Neon Line Toggle',
    category: 'toggles',
    tags: ['toggle', 'neon', 'line', 'glow', 'bright'],
    difficulty: 'intermediate',
    description: 'A neon-styled toggle with glowing line track and pulsing knob',
    cssCode: `.toggle-neon-line label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-neon-line input { display: none; }
.toggle-neon-line-track {
  width: 48px; height: 4px;
  background: #2a2a3e; border-radius: 2px;
  position: relative; transition: all 0.3s;
}
.toggle-neon-line-track::before {
  content: ''; position: absolute; top: -10px; left: -2px;
  width: 24px; height: 24px; background: #3a3a4e;
  border-radius: 50%; transition: all 0.3s ease;
  border: 2px solid #2a2a3e;
}
.toggle-neon-line input:checked + .toggle-neon-line-track {
  background: #10b981;
  box-shadow: 0 0 10px #10b981, 0 0 20px #10b98144;
}
.toggle-neon-line input:checked + .toggle-neon-line-track::before {
  left: 26px; background: #10b981;
  border-color: #10b981;
  box-shadow: 0 0 10px #10b981, 0 0 20px #10b98144;
}`,
    htmlCode: `<div class="toggle-neon-line"><label><input type="checkbox" checked><span class="toggle-neon-line-track"></span>Neon</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-glow-aura',
    name: 'Glow Aura Toggle',
    category: 'toggles',
    tags: ['toggle', 'glow', 'aura', 'light', 'animated'],
    difficulty: 'intermediate',
    description: 'A toggle with an expanding glow aura when activated',
    cssCode: `.toggle-glow-aura label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-glow-aura input { display: none; }
.toggle-glow-aura-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: all 0.3s;
}
.toggle-glow-aura-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #6b7280;
  border-radius: 50%; transition: all 0.3s ease;
}
.toggle-glow-aura input:checked + .toggle-glow-aura-track {
  background: #10b981;
  box-shadow: 0 0 15px #10b98166, 0 0 30px #10b98133;
  animation: aura-pulse 1.5s ease-in-out infinite;
}
.toggle-glow-aura input:checked + .toggle-glow-aura-track::after {
  transform: translateX(22px); background: #fff;
}
@keyframes aura-pulse {
  0%, 100% { box-shadow: 0 0 15px #10b98166, 0 0 30px #10b98133; }
  50% { box-shadow: 0 0 20px #10b98188, 0 0 40px #10b98144; }
}`,
    htmlCode: `<div class="toggle-glow-aura"><label><input type="checkbox" checked><span class="toggle-glow-aura-track"></span>Glow</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-morph-shape',
    name: 'Morph Shape Toggle',
    category: 'toggles',
    tags: ['toggle', 'morph', 'shape', 'transform', 'creative'],
    difficulty: 'advanced',
    description: 'A toggle where the knob morphs between square and circle when toggled',
    cssCode: `.toggle-morph-shape label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-morph-shape input { display: none; }
.toggle-morph-shape-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 6px;
  position: relative; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-morph-shape-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #6b7280;
  border-radius: 4px; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-morph-shape input:checked + .toggle-morph-shape-track {
  background: #10b98133; border-radius: 13px;
}
.toggle-morph-shape input:checked + .toggle-morph-shape-track::after {
  transform: translateX(22px);
  background: #10b981; border-radius: 50%;
}`,
    htmlCode: `<div class="toggle-morph-shape"><label><input type="checkbox" checked><span class="toggle-morph-shape-track"></span>Morph</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-elastic-snap',
    name: 'Elastic Snap Toggle',
    category: 'toggles',
    tags: ['toggle', 'elastic', 'snap', 'spring', 'bounce'],
    difficulty: 'intermediate',
    description: 'A toggle with elastic overshoot animation when the knob snaps to position',
    cssCode: `.toggle-elastic-snap label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-elastic-snap input { display: none; }
.toggle-elastic-snap-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: background 0.3s;
}
.toggle-elastic-snap-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #e2e8f0;
  border-radius: 50%; transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), background 0.3s;
}
.toggle-elastic-snap input:checked + .toggle-elastic-snap-track {
  background: #10b981;
}
.toggle-elastic-snap input:checked + .toggle-elastic-snap-track::after {
  transform: translateX(22px);
}`,
    htmlCode: `<div class="toggle-elastic-snap"><label><input type="checkbox" checked><span class="toggle-elastic-snap-track"></span>Elastic</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-bounce-overshoot',
    name: 'Bounce Overshoot Toggle',
    category: 'toggles',
    tags: ['toggle', 'bounce', 'overshoot', 'playful', 'animated'],
    difficulty: 'intermediate',
    description: 'A toggle with a knob that bounces past its final position before settling',
    cssCode: `.toggle-bounce-overshoot label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-bounce-overshoot input { display: none; }
.toggle-bounce-overshoot-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: background 0.3s;
}
.toggle-bounce-overshoot-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #e2e8f0;
  border-radius: 50%;
  transition: background 0.3s;
}
.toggle-bounce-overshoot input:checked + .toggle-bounce-overshoot-track {
  background: #10b981;
}
.toggle-bounce-overshoot input:checked + .toggle-bounce-overshoot-track::after {
  background: #fff;
  animation: bounce-knob 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes bounce-knob {
  0% { transform: translateX(0); }
  60% { transform: translateX(26px); }
  80% { transform: translateX(20px); }
  100% { transform: translateX(22px); }
}`,
    htmlCode: `<div class="toggle-bounce-overshoot"><label><input type="checkbox" checked><span class="toggle-bounce-overshoot-track"></span>Bounce</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-slide-track',
    name: 'Slide Track Toggle',
    category: 'toggles',
    tags: ['toggle', 'slide', 'track', 'smooth', 'transition'],
    difficulty: 'beginner',
    description: 'A toggle where the knob smoothly slides along a colored track with gradient fill',
    cssCode: `.toggle-slide-track label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-slide-track input { display: none; }
.toggle-slide-track-bar {
  width: 48px; height: 24px;
  background: linear-gradient(90deg, #2a2a3e, #2a2a3e);
  border-radius: 12px; position: relative;
  transition: background 0.4s; overflow: hidden;
}
.toggle-slide-track-fill {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, #10b981, #0d9e6c);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s ease; border-radius: 12px;
}
.toggle-slide-track-knob {
  position: absolute; top: 2px; left: 2px;
  width: 20px; height: 20px; background: #fff;
  border-radius: 50%; z-index: 1;
  transition: transform 0.4s ease;
}
.toggle-slide-track input:checked + .toggle-slide-track-bar .toggle-slide-track-fill {
  transform: scaleX(1);
}
.toggle-slide-track input:checked + .toggle-slide-track-bar .toggle-slide-track-knob {
  transform: translateX(24px);
}`,
    htmlCode: `<div class="toggle-slide-track"><label><input type="checkbox" checked><span class="toggle-slide-track-bar"><span class="toggle-slide-track-fill"></span><span class="toggle-slide-track-knob"></span></span>Slide</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-flip-3d',
    name: 'Flip 3D Toggle',
    category: 'toggles',
    tags: ['toggle', 'flip', '3d', 'rotate', 'perspective'],
    difficulty: 'advanced',
    description: 'A 3D flip toggle where the knob rotates in 3D space to reveal on/off states',
    cssCode: `.toggle-flip-3d label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-flip-3d input { display: none; }
.toggle-flip-3d-track {
  perspective: 200px; width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: background 0.3s;
}
.toggle-flip-3d-knob {
  position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}
.toggle-flip-3d-knob-front, .toggle-flip-3d-knob-back {
  position: absolute; inset: 0;
  border-radius: 50%; backface-visibility: hidden;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.55rem; font-weight: 700;
}
.toggle-flip-3d-knob-front { background: #6b7280; color: #1a1a2e; }
.toggle-flip-3d-knob-back { background: #10b981; color: #fff; transform: rotateY(180deg); }
.toggle-flip-3d input:checked + .toggle-flip-3d-track { background: #10b98133; }
.toggle-flip-3d input:checked + .toggle-flip-3d-track .toggle-flip-3d-knob {
  transform: translateX(22px) rotateY(180deg);
}`,
    htmlCode: `<div class="toggle-flip-3d"><label><input type="checkbox" checked><span class="toggle-flip-3d-track"><span class="toggle-flip-3d-knob"><span class="toggle-flip-3d-knob-front">OFF</span><span class="toggle-flip-3d-knob-back">ON</span></span></span>3D Flip</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-rotate-knob',
    name: 'Rotate Knob Toggle',
    category: 'toggles',
    tags: ['toggle', 'rotate', 'knob', 'dial', 'spin'],
    difficulty: 'intermediate',
    description: 'A toggle with a knob that rotates 90 degrees like a dial when toggled',
    cssCode: `.toggle-rotate-knob label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-rotate-knob input { display: none; }
.toggle-rotate-knob-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: background 0.3s;
}
.toggle-rotate-knob-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #6b7280;
  border-radius: 50%; transition: all 0.4s ease;
  display: flex; align-items: center; justify-content: center;
}
.toggle-rotate-knob-track::before {
  content: ''; position: absolute; top: 9px; left: 9px;
  width: 8px; height: 2px; background: #1a1a2e;
  border-radius: 1px; z-index: 1;
  transition: all 0.4s ease;
}
.toggle-rotate-knob input:checked + .toggle-rotate-knob-track {
  background: #10b981;
}
.toggle-rotate-knob input:checked + .toggle-rotate-knob-track::after {
  transform: translateX(22px); background: #fff;
}
.toggle-rotate-knob input:checked + .toggle-rotate-knob-track::before {
  left: 31px; transform: rotate(90deg); background: #10b981;
}`,
    htmlCode: `<div class="toggle-rotate-knob"><label><input type="checkbox" checked><span class="toggle-rotate-knob-track"></span>Rotate</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-scale-pop',
    name: 'Scale Pop Toggle',
    category: 'toggles',
    tags: ['toggle', 'scale', 'pop', 'grow', 'animated'],
    difficulty: 'beginner',
    description: 'A toggle where the knob pops up in scale before sliding to position',
    cssCode: `.toggle-scale-pop label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-scale-pop input { display: none; }
.toggle-scale-pop-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: background 0.3s;
}
.toggle-scale-pop-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #e2e8f0;
  border-radius: 50%;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s;
}
.toggle-scale-pop input:checked + .toggle-scale-pop-track {
  background: #10b981;
}
.toggle-scale-pop input:checked + .toggle-scale-pop-track::after {
  transform: translateX(22px) scale(1.15);
  background: #fff;
}`,
    htmlCode: `<div class="toggle-scale-pop"><label><input type="checkbox" checked><span class="toggle-scale-pop-track"></span>Pop</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-fade-cross',
    name: 'Fade Cross Toggle',
    category: 'toggles',
    tags: ['toggle', 'fade', 'cross', 'opacity', 'transition'],
    difficulty: 'beginner',
    description: 'A toggle that fades between OFF and ON labels with a crossfade effect',
    cssCode: `.toggle-fade-cross label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-fade-cross input { display: none; }
.toggle-fade-cross-track {
  width: 52px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: background 0.3s;
  overflow: hidden;
}
.toggle-fade-cross-off, .toggle-fade-cross-on {
  position: absolute; top: 50%; font-size: 0.55rem;
  font-weight: 700; transition: opacity 0.3s;
}
.toggle-fade-cross-off { left: 8px; transform: translateY(-50%); color: #6b7280; opacity: 1; }
.toggle-fade-cross-on { right: 8px; transform: translateY(-50%); color: #fff; opacity: 0; }
.toggle-fade-cross input:checked + .toggle-fade-cross-track {
  background: #10b981;
}
.toggle-fade-cross input:checked + .toggle-fade-cross-track .toggle-fade-cross-off { opacity: 0; }
.toggle-fade-cross input:checked + .toggle-fade-cross-track .toggle-fade-cross-on { opacity: 1; }`,
    htmlCode: `<div class="toggle-fade-cross"><label><input type="checkbox" checked><span class="toggle-fade-cross-track"><span class="toggle-fade-cross-off">OFF</span><span class="toggle-fade-cross-on">ON</span></span>Fade</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-blur-focus',
    name: 'Blur Focus Toggle',
    category: 'toggles',
    tags: ['toggle', 'blur', 'focus', 'defocus', 'transition'],
    difficulty: 'intermediate',
    description: 'A toggle that blurs the inactive state and sharpens the active one with focus effect',
    cssCode: `.toggle-blur-focus label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-blur-focus input { display: none; }
.toggle-blur-focus-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: all 0.3s;
}
.toggle-blur-focus-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #6b7280;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: blur(2px);
}
.toggle-blur-focus input:checked + .toggle-blur-focus-track {
  background: #10b981;
  box-shadow: 0 0 12px #10b98144;
}
.toggle-blur-focus input:checked + .toggle-blur-focus-track::after {
  transform: translateX(22px); background: #fff;
  filter: blur(0);
}`,
    htmlCode: `<div class="toggle-blur-focus"><label><input type="checkbox" checked><span class="toggle-blur-focus-track"></span>Focus</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-gradient-sweep',
    name: 'Gradient Sweep Toggle',
    category: 'toggles',
    tags: ['toggle', 'gradient', 'sweep', 'colorful', 'animated'],
    difficulty: 'intermediate',
    description: 'A toggle with a gradient that sweeps across the track when activated',
    cssCode: `.toggle-gradient-sweep label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-gradient-sweep input { display: none; }
.toggle-gradient-sweep-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; overflow: hidden; transition: box-shadow 0.3s;
}
.toggle-gradient-sweep-fill {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, #10b981, #06b6d4, #8b5cf6);
  transform: translateX(-100%); transition: transform 0.4s ease;
}
.toggle-gradient-sweep-knob {
  position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #fff;
  border-radius: 50%; z-index: 1;
  transition: transform 0.4s ease;
}
.toggle-gradient-sweep input:checked + .toggle-gradient-sweep-track .toggle-gradient-sweep-fill {
  transform: translateX(0);
}
.toggle-gradient-sweep input:checked + .toggle-gradient-sweep-track .toggle-gradient-sweep-knob {
  transform: translateX(22px);
}`,
    htmlCode: `<div class="toggle-gradient-sweep"><label><input type="checkbox" checked><span class="toggle-gradient-sweep-track"><span class="toggle-gradient-sweep-fill"></span><span class="toggle-gradient-sweep-knob"></span></span>Gradient</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-dark-mode-sun',
    name: 'Dark Mode Sun/Moon',
    category: 'toggles',
    tags: ['toggle', 'dark-mode', 'sun', 'moon', 'theme'],
    difficulty: 'advanced',
    description: 'A dark mode toggle that transforms between sun and moon with creative animation',
    cssCode: `.toggle-dark-mode-sun label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-dark-mode-sun input { display: none; }
.toggle-dark-mode-sun-track {
  width: 52px; height: 28px;
  background: linear-gradient(180deg, #1e3a5f, #0f1a2e);
  border-radius: 14px; position: relative;
  transition: background 0.4s; overflow: hidden;
}
.toggle-dark-mode-sun-track::before {
  content: ''; position: absolute; top: 4px; left: 4px;
  width: 20px; height: 20px; background: #fbbf24;
  border-radius: 50%; transition: all 0.4s ease;
  box-shadow: 0 0 6px #fbbf2444;
}
.toggle-dark-mode-sun-track::after {
  content: ''; position: absolute; top: 7px; left: 11px;
  width: 14px; height: 14px; background: #0f1a2e;
  border-radius: 50%; opacity: 0;
  transition: all 0.4s ease;
}
.toggle-dark-mode-sun input:checked + .toggle-dark-mode-sun-track {
  background: linear-gradient(180deg, #1a1a2e, #0a0a1a);
}
.toggle-dark-mode-sun input:checked + .toggle-dark-mode-sun-track::before {
  transform: translateX(24px); background: #e2e8f0;
  box-shadow: 0 0 8px #e2e8f044;
}
.toggle-dark-mode-sun input:checked + .toggle-dark-mode-sun-track::after {
  opacity: 1; left: 31px; top: 4px;
}`,
    htmlCode: `<div class="toggle-dark-mode-sun"><label><input type="checkbox"><span class="toggle-dark-mode-sun-track"></span>Dark Mode</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-day-night-sky',
    name: 'Day Night Sky Toggle',
    category: 'toggles',
    tags: ['toggle', 'day', 'night', 'sky', 'celestial'],
    difficulty: 'advanced',
    description: 'A toggle with a day sky that transitions to a starry night sky when switched',
    cssCode: `.toggle-day-night-sky label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-day-night-sky input { display: none; }
.toggle-day-night-sky-track {
  width: 56px; height: 28px;
  background: linear-gradient(180deg, #60a5fa, #93c5fd);
  border-radius: 14px; position: relative;
  transition: background 0.4s; overflow: hidden;
}
.toggle-day-night-sky-star {
  position: absolute; width: 2px; height: 2px;
  background: #fff; border-radius: 50%; opacity: 0;
  transition: opacity 0.4s 0.2s;
}
.toggle-day-night-sky-star:nth-child(1) { top: 6px; right: 12px; }
.toggle-day-night-sky-star:nth-child(2) { top: 14px; right: 8px; }
.toggle-day-night-sky-star:nth-child(3) { top: 10px; right: 20px; }
.toggle-day-night-sky-knob {
  position: absolute; top: 4px; left: 4px;
  width: 20px; height: 20px; background: #fbbf24;
  border-radius: 50%; z-index: 1;
  transition: all 0.4s ease;
  box-shadow: 0 0 8px #fbbf2444;
}
.toggle-day-night-sky input:checked + .toggle-day-night-sky-track {
  background: linear-gradient(180deg, #1e1b4b, #0f0f2e);
}
.toggle-day-night-sky input:checked + .toggle-day-night-sky-track .toggle-day-night-sky-star { opacity: 1; }
.toggle-day-night-sky input:checked + .toggle-day-night-sky-track .toggle-day-night-sky-knob {
  transform: translateX(28px); background: #e2e8f0;
  box-shadow: inset -4px -2px 0 0 #94a3b8;
}`,
    htmlCode: `<div class="toggle-day-night-sky"><label><input type="checkbox" checked><span class="toggle-day-night-sky-track"><span class="toggle-day-night-sky-star"></span><span class="toggle-day-night-sky-star"></span><span class="toggle-day-night-sky-star"></span><span class="toggle-day-night-sky-knob"></span></span>Night</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-power-btn',
    name: 'Power Button Toggle',
    category: 'toggles',
    tags: ['toggle', 'power', 'button', 'icon', 'energy'],
    difficulty: 'intermediate',
    description: 'A power button styled toggle with a glowing ring when activated',
    cssCode: `.toggle-power-btn label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-power-btn input { display: none; }
.toggle-power-btn-ring {
  width: 36px; height: 36px; border-radius: 50%;
  border: 3px solid #2a2a3e; background: transparent;
  position: relative; transition: all 0.3s;
}
.toggle-power-btn-ring::before {
  content: ''; position: absolute; top: 2px;
  left: 50%; width: 3px; height: 10px;
  background: #2a2a3e; transform: translateX(-50%);
  border-radius: 2px; transition: background 0.3s;
}
.toggle-power-btn input:checked + .toggle-power-btn-ring {
  border-color: #10b981;
  box-shadow: 0 0 10px #10b98144, 0 0 20px #10b98122;
}
.toggle-power-btn input:checked + .toggle-power-btn-ring::before {
  background: #10b981;
}`,
    htmlCode: `<div class="toggle-power-btn"><label><input type="checkbox" checked><span class="toggle-power-btn-ring"></span>Power</label></div>`,
    isNew: true,
  },
  {
    id: 'toggle-check-confirm',
    name: 'Check Confirm Toggle',
    category: 'toggles',
    tags: ['toggle', 'check', 'confirm', 'animated', 'success'],
    difficulty: 'intermediate',
    description: 'A toggle that shows an animated checkmark when confirmed in the on state',
    cssCode: `.toggle-check-confirm label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.8rem; color: #e2e8f0;
}
.toggle-check-confirm input { display: none; }
.toggle-check-confirm-track {
  width: 48px; height: 26px;
  background: #2a2a3e; border-radius: 13px;
  position: relative; transition: background 0.3s;
}
.toggle-check-confirm-track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 20px; height: 20px; background: #6b7280;
  border-radius: 50%; transition: all 0.3s ease;
  display: flex; align-items: center; justify-content: center;
}
.toggle-check-confirm input:checked + .toggle-check-confirm-track {
  background: #10b981;
}
.toggle-check-confirm input:checked + .toggle-check-confirm-track::after {
  transform: translateX(22px); background: #fff;
  box-shadow: inset 0 0 0 10px #fff;
}
.toggle-check-confirm input:checked + .toggle-check-confirm-track::before {
  content: '✓'; position: absolute; top: 5px; left: 28px;
  color: #10b981; font-size: 0.7rem; font-weight: 900;
  z-index: 2; animation: check-pop 0.3s ease;
}
@keyframes check-pop {
  from { transform: scale(0); } to { transform: scale(1); }
}`,
    htmlCode: `<div class="toggle-check-confirm"><label><input type="checkbox" checked><span class="toggle-check-confirm-track"></span>Confirm</label></div>`,
    isNew: true,
  },

  // ==================== TOOLTIPS (20) ====================
  {
    id: 'tooltip-fade-soft',
    name: 'Fade Soft Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'fade', 'soft', 'hover', 'subtle'],
    difficulty: 'beginner',
    description: 'A soft fading tooltip that smoothly appears on hover with gentle opacity transition',
    cssCode: `.tooltip-fade-soft {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-fade-soft::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%; transform: translateX(-50%);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
}
.tooltip-fade-soft:hover::after { opacity: 1; }`,
    htmlCode: `<div class="tooltip-fade-soft" data-tip="Hello tooltip!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-slide-up',
    name: 'Slide Up Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'slide', 'up', 'hover', 'animated'],
    difficulty: 'beginner',
    description: 'A tooltip that slides up from below the element with a smooth translateY animation',
    cssCode: `.tooltip-slide-up {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-slide-up::after {
  content: attr(data-tip); position: absolute;
  bottom: 100%; left: 50%; transform: translateX(-50%) translateY(8px);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; pointer-events: none;
  transition: all 0.3s ease;
}
.tooltip-slide-up:hover::after {
  opacity: 1; transform: translateX(-50%) translateY(-4px);
}`,
    htmlCode: `<div class="tooltip-slide-up" data-tip="Sliding up!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-scale-pop',
    name: 'Scale Pop Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'scale', 'pop', 'hover', 'spring'],
    difficulty: 'intermediate',
    description: 'A tooltip that pops into view with a scale spring animation from center',
    cssCode: `.tooltip-scale-pop {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-scale-pop::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%;
  transform: translateX(-50%) scale(0);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  pointer-events: none;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.tooltip-scale-pop:hover::after {
  transform: translateX(-50%) scale(1);
}`,
    htmlCode: `<div class="tooltip-scale-pop" data-tip="Popped!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-flip-reveal',
    name: 'Flip Reveal Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'flip', 'reveal', '3d', 'rotate'],
    difficulty: 'advanced',
    description: 'A tooltip that flips in from a 3D rotation like a card being turned over',
    cssCode: `.tooltip-flip-reveal {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
  perspective: 300px;
}
.tooltip-flip-reveal::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%;
  transform: translateX(-50%) rotateX(90deg);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  pointer-events: none; transform-origin: bottom center;
  transition: transform 0.4s ease;
}
.tooltip-flip-reveal:hover::after {
  transform: translateX(-50%) rotateX(0deg);
}`,
    htmlCode: `<div class="tooltip-flip-reveal" data-tip="Flipped in!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-bounce-in',
    name: 'Bounce In Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'bounce', 'playful', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'A tooltip that bounces into view with an overshoot animation',
    cssCode: `.tooltip-bounce-in {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-bounce-in::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%;
  transform: translateX(-50%) translateY(10px);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; pointer-events: none;
}
.tooltip-bounce-in:hover::after {
  animation: tip-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes tip-bounce {
  0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
  60% { opacity: 1; transform: translateX(-50%) translateY(-4px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}`,
    htmlCode: `<div class="tooltip-bounce-in" data-tip="Bounced!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-elastic-spring',
    name: 'Elastic Spring Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'elastic', 'spring', 'overshoot', 'animated'],
    difficulty: 'intermediate',
    description: 'A tooltip with elastic spring overshoot animation that wobbles before settling',
    cssCode: `.tooltip-elastic-spring {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-elastic-spring::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%;
  transform: translateX(-50%) scale(0);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  pointer-events: none;
}
.tooltip-elastic-spring:hover::after {
  animation: tip-elastic 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
}
@keyframes tip-elastic {
  0% { transform: translateX(-50%) scale(0); }
  50% { transform: translateX(-50%) scale(1.15); }
  75% { transform: translateX(-50%) scale(0.95); }
  100% { transform: translateX(-50%) scale(1); }
}`,
    htmlCode: `<div class="tooltip-elastic-spring" data-tip="Elastic!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-blur-sharp',
    name: 'Blur Sharp Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'blur', 'sharp', 'focus', 'transition'],
    difficulty: 'intermediate',
    description: 'A tooltip that transitions from blurred to sharp focus when appearing',
    cssCode: `.tooltip-blur-sharp {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-blur-sharp::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%; transform: translateX(-50%);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; filter: blur(4px);
  pointer-events: none;
  transition: all 0.3s ease;
}
.tooltip-blur-sharp:hover::after {
  opacity: 1; filter: blur(0);
}`,
    htmlCode: `<div class="tooltip-blur-sharp" data-tip="Sharp focus!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-glow-emerald',
    name: 'Glow Emerald Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'glow', 'emerald', 'bright', 'hover'],
    difficulty: 'beginner',
    description: 'A tooltip with an emerald glow shadow that illuminates around the tooltip',
    cssCode: `.tooltip-glow-emerald {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-glow-emerald::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%; transform: translateX(-50%);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; pointer-events: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px #10b98166;
}
.tooltip-glow-emerald:hover::after {
  opacity: 1;
  box-shadow: 0 0 15px #10b98188, 0 0 30px #10b98144;
}`,
    htmlCode: `<div class="tooltip-glow-emerald" data-tip="Glowing!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-neon-flicker',
    name: 'Neon Flicker Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'neon', 'flicker', 'bright', 'animated'],
    difficulty: 'advanced',
    description: 'A neon-styled tooltip with a flickering animation like a neon sign',
    cssCode: `.tooltip-neon-flicker {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-neon-flicker::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%; transform: translateX(-50%);
  padding: 6px 12px; background: #0f0f1a;
  color: #10b981; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  border: 1px solid #10b981;
  opacity: 0; pointer-events: none;
  transition: opacity 0.2s;
}
.tooltip-neon-flicker:hover::after {
  opacity: 1;
  animation: neon-flick 1.5s ease-in-out infinite;
}
@keyframes neon-flick {
  0%, 100% { text-shadow: 0 0 4px #10b981, 0 0 8px #10b98166; box-shadow: 0 0 6px #10b98144; }
  5% { opacity: 0.8; }
  10% { opacity: 1; text-shadow: 0 0 6px #10b981, 0 0 12px #10b98188; }
  50% { text-shadow: 0 0 4px #10b981, 0 0 8px #10b98166; }
}`,
    htmlCode: `<div class="tooltip-neon-flicker" data-tip="Neon sign!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-gradient-bar',
    name: 'Gradient Bar Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'gradient', 'bar', 'colorful', 'hover'],
    difficulty: 'intermediate',
    description: 'A tooltip with a gradient background and a colorful bottom border accent',
    cssCode: `.tooltip-gradient-bar {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-gradient-bar::after {
  content: attr(data-tip); position: absolute;
  bottom: 115%; left: 50%; transform: translateX(-50%) translateY(4px);
  padding: 8px 14px 8px;
  background: #0f0f1a; color: #e2e8f0;
  border-radius: 6px 6px 0 0;
  font-size: 0.7rem; white-space: nowrap;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(90deg, #10b981, #06b6d4, #8b5cf6) 1;
  opacity: 0; pointer-events: none;
  transition: all 0.3s ease;
}
.tooltip-gradient-bar:hover::after {
  opacity: 1; transform: translateX(-50%) translateY(0);
}`,
    htmlCode: `<div class="tooltip-gradient-bar" data-tip="Gradient tip!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-arrow-sharp',
    name: 'Arrow Sharp Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'arrow', 'sharp', 'pointer', 'clean'],
    difficulty: 'beginner',
    description: 'A tooltip with a sharp CSS arrow pointing down to the trigger element',
    cssCode: `.tooltip-arrow-sharp {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-arrow-sharp::after {
  content: attr(data-tip); position: absolute;
  bottom: 120%; left: 50%; transform: translateX(-50%);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 4px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
}
.tooltip-arrow-sharp::before {
  content: ''; position: absolute;
  bottom: 112%; left: 50%; transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #10b981;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
}
.tooltip-arrow-sharp:hover::after, .tooltip-arrow-sharp:hover::before { opacity: 1; }`,
    htmlCode: `<div class="tooltip-arrow-sharp" data-tip="With arrow!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-balloon-chat',
    name: 'Balloon Chat Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'balloon', 'chat', 'speech', 'rounded'],
    difficulty: 'intermediate',
    description: 'A balloon chat-style tooltip with rounded corners and a tail like a speech bubble',
    cssCode: `.tooltip-balloon-chat {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-balloon-chat::after {
  content: attr(data-tip); position: absolute;
  bottom: 120%; left: 50%; transform: translateX(-50%) scale(0.8);
  padding: 8px 16px; background: #10b981;
  color: #fff; border-radius: 16px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; pointer-events: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px #10b98144;
}
.tooltip-balloon-chat::before {
  content: ''; position: absolute;
  bottom: 112%; left: 50%; transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #10b981;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease 0.1s;
}
.tooltip-balloon-chat:hover::after { opacity: 1; transform: translateX(-50%) scale(1); }
.tooltip-balloon-chat:hover::before { opacity: 1; }`,
    htmlCode: `<div class="tooltip-balloon-chat" data-tip="Chat bubble!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-speech-tail',
    name: 'Speech Bubble Tail',
    category: 'tooltips',
    tags: ['tooltip', 'speech', 'bubble', 'tail', 'chat'],
    difficulty: 'intermediate',
    description: 'A speech bubble tooltip with an offset tail that points to the trigger element',
    cssCode: `.tooltip-speech-tail {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-speech-tail::after {
  content: attr(data-tip); position: absolute;
  bottom: 120%; left: 30%; transform: translateY(6px);
  padding: 8px 14px; background: #0f0f1a;
  color: #10b981; border-radius: 12px;
  font-size: 0.7rem; white-space: nowrap;
  border: 1px solid #10b98144;
  opacity: 0; pointer-events: none;
  transition: all 0.3s ease;
}
.tooltip-speech-tail::before {
  content: ''; position: absolute;
  bottom: 112%; left: 40%;
  border: 6px solid transparent;
  border-top-color: #0f0f1a;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease 0.05s;
}
.tooltip-speech-tail:hover::after { opacity: 1; transform: translateY(0); }
.tooltip-speech-tail:hover::before { opacity: 1; }`,
    htmlCode: `<div class="tooltip-speech-tail" data-tip="Speech bubble!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-callout-pin',
    name: 'Callout Pin Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'callout', 'pin', 'marker', 'pointed'],
    difficulty: 'advanced',
    description: 'A callout tooltip with a pin marker style that appears connected to the element',
    cssCode: `.tooltip-callout-pin {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-callout-pin::after {
  content: attr(data-tip); position: absolute;
  bottom: 130%; left: 50%; transform: translateX(-50%) translateY(10px);
  padding: 10px 14px; background: #0f0f1a;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.7rem; white-space: nowrap;
  border: 1px solid #10b98144;
  opacity: 0; pointer-events: none;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.tooltip-callout-pin-pin {
  position: absolute; bottom: 118%; left: 50%;
  transform: translateX(-50%) translateY(10px);
  width: 12px; height: 12px;
  background: #10b981; border-radius: 50% 50% 50% 0;
  transform: translateX(-50%) rotate(-45deg);
  opacity: 0; pointer-events: none;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
}
.tooltip-callout-pin:hover::after { opacity: 1; transform: translateX(-50%) translateY(0); }
.tooltip-callout-pin:hover .tooltip-callout-pin-pin { opacity: 1; transform: translateX(-50%) rotate(-45deg) translateY(0); }`,
    htmlCode: `<div class="tooltip-callout-pin" data-tip="Callout pin!"><span class="tooltip-callout-pin-pin"></span>Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-pinned-sticky',
    name: 'Pinned Sticky Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'pinned', 'sticky', 'persistent', 'hover'],
    difficulty: 'beginner',
    description: 'A tooltip that appears pinned with a dot connector to the trigger element',
    cssCode: `.tooltip-pinned-sticky {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-pinned-sticky::after {
  content: attr(data-tip); position: absolute;
  bottom: 125%; left: 50%; transform: translateX(-50%);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.tooltip-pinned-sticky::before {
  content: ''; position: absolute;
  bottom: 117%; left: 50%; transform: translateX(-50%);
  width: 2px; height: 8px; background: #10b981;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
}
.tooltip-pinned-sticky:hover::after,
.tooltip-pinned-sticky:hover::before { opacity: 1; }`,
    htmlCode: `<div class="tooltip-pinned-sticky" data-tip="Pinned here!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-animated-loop',
    name: 'Animated Loop Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'animated', 'loop', 'continuous', 'pulse'],
    difficulty: 'intermediate',
    description: 'A tooltip with a continuous subtle pulse animation while visible',
    cssCode: `.tooltip-animated-loop {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-animated-loop::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%; transform: translateX(-50%) scale(0);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  pointer-events: none;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.tooltip-animated-loop:hover::after {
  transform: translateX(-50%) scale(1);
  animation: tip-loop-pulse 2s ease-in-out infinite;
}
@keyframes tip-loop-pulse {
  0%, 100% { box-shadow: 0 0 0 0 #10b98144; }
  50% { box-shadow: 0 0 0 6px #10b98100; }
}`,
    htmlCode: `<div class="tooltip-animated-loop" data-tip="Animated!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-shake-alert',
    name: 'Shake Alert Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'shake', 'alert', 'warning', 'attention'],
    difficulty: 'intermediate',
    description: 'A tooltip that shakes briefly on appearance to draw attention like an alert',
    cssCode: `.tooltip-shake-alert {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-shake-alert::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%; transform: translateX(-50%) scale(0);
  padding: 6px 12px; background: #f59e0b;
  color: #0f0f1a; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  pointer-events: none; font-weight: 600;
}
.tooltip-shake-alert:hover::after {
  animation: tip-shake-in 0.4s ease forwards;
}
@keyframes tip-shake-in {
  0% { transform: translateX(-50%) scale(0); }
  30% { transform: translateX(-50%) scale(1.05); }
  40% { transform: translateX(calc(-50% + 4px)) scale(1); }
  50% { transform: translateX(calc(-50% - 4px)) scale(1); }
  60% { transform: translateX(calc(-50% + 2px)) scale(1); }
  70% { transform: translateX(calc(-50% - 2px)) scale(1); }
  100% { transform: translateX(-50%) scale(1); }
}`,
    htmlCode: `<div class="tooltip-shake-alert" data-tip="⚠ Warning!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-pulse-breathe',
    name: 'Pulse Breathe Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'pulse', 'breathe', 'soft', 'animated'],
    difficulty: 'beginner',
    description: 'A tooltip with a gentle breathing pulse animation while visible',
    cssCode: `.tooltip-pulse-breathe {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-pulse-breathe::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%; transform: translateX(-50%);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
}
.tooltip-pulse-breathe:hover::after {
  opacity: 1;
  animation: tip-breathe 2s ease-in-out infinite;
}
@keyframes tip-breathe {
  0%, 100% { box-shadow: 0 0 0 0 #10b98133; }
  50% { box-shadow: 0 0 12px 2px #10b98144; }
}`,
    htmlCode: `<div class="tooltip-pulse-breathe" data-tip="Breathing!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-wave-ripple',
    name: 'Wave Ripple Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'wave', 'ripple', 'expand', 'animated'],
    difficulty: 'advanced',
    description: 'A tooltip that appears with a wave ripple expanding from the center',
    cssCode: `.tooltip-wave-ripple {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-wave-ripple::after {
  content: attr(data-tip); position: absolute;
  bottom: 110%; left: 50%; transform: translateX(-50%) scale(0);
  padding: 6px 12px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  pointer-events: none;
}
.tooltip-wave-ripple:hover::after {
  animation: tip-wave-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.tooltip-wave-ripple:hover {
  animation: tip-ripple-out 0.6s ease;
}
@keyframes tip-wave-in {
  0% { transform: translateX(-50%) scale(0); opacity: 0; }
  50% { transform: translateX(-50%) scale(1.1); opacity: 1; }
  100% { transform: translateX(-50%) scale(1); opacity: 1; }
}
@keyframes tip-ripple-out {
  0% { box-shadow: 0 0 0 0 #10b98144; }
  100% { box-shadow: 0 0 0 8px #10b98100; }
}`,
    htmlCode: `<div class="tooltip-wave-ripple" data-tip="Ripple wave!">Hover me</div>`,
    isNew: true,
  },
  {
    id: 'tooltip-corner-notch',
    name: 'Corner Notch Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'corner', 'notch', 'cut', 'geometric'],
    difficulty: 'intermediate',
    description: 'A tooltip with a corner notch cut-out design pointing to the trigger element',
    cssCode: `.tooltip-corner-notch {
  position: relative; display: inline-block;
  padding: 10px 20px; background: #1a1a2e;
  color: #e2e8f0; border-radius: 8px;
  font-size: 0.85rem; cursor: pointer;
}
.tooltip-corner-notch::after {
  content: attr(data-tip); position: absolute;
  bottom: 120%; left: 50%; transform: translateX(-50%) translateY(6px);
  padding: 8px 14px; background: #10b981;
  color: #fff; border-radius: 6px;
  font-size: 0.7rem; white-space: nowrap;
  opacity: 0; pointer-events: none;
  transition: all 0.3s ease;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 55% 75%, 50% 100%, 45% 75%, 0 75%);
  padding-bottom: 14px;
}
.tooltip-corner-notch:hover::after {
  opacity: 1; transform: translateX(-50%) translateY(0);
}`,
    htmlCode: `<div class="tooltip-corner-notch" data-tip="Notch tip!">Hover me</div>`,
    isNew: true,
  },

  // ==================== TRANSITIONS (20) ====================
  {
    id: 'transition-fade-in-soft',
    name: 'Fade In Soft',
    category: 'transitions',
    tags: ['transition', 'fade', 'in', 'soft', 'entrance'],
    difficulty: 'beginner',
    description: 'A soft fade-in entrance transition with gentle opacity and slight upward movement',
    cssCode: `.transition-fade-in-soft {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: soft-fade-in 0.6s ease forwards;
}
@keyframes soft-fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    htmlCode: `<div class="transition-fade-in-soft">Fade In Soft</div>`,
    isNew: true,
  },
  {
    id: 'transition-fade-out-dim',
    name: 'Fade Out Dim',
    category: 'transitions',
    tags: ['transition', 'fade', 'out', 'dim', 'exit'],
    difficulty: 'beginner',
    description: 'A fade-out exit transition that dims and slightly moves down',
    cssCode: `.transition-fade-out-dim {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: dim-fade-out 2s ease forwards;
}
@keyframes dim-fade-out {
  0% { opacity: 1; transform: translateY(0); }
  70% { opacity: 1; }
  100% { opacity: 0; transform: translateY(8px); }
}`,
    htmlCode: `<div class="transition-fade-out-dim">Fade Out Dim</div>`,
    isNew: true,
  },
  {
    id: 'transition-slide-in-right',
    name: 'Slide In Right',
    category: 'transitions',
    tags: ['transition', 'slide', 'in', 'right', 'entrance'],
    difficulty: 'beginner',
    description: 'A slide-in transition from the right with deceleration easing',
    cssCode: `.transition-slide-in-right {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: slide-right-in 0.5s ease-out forwards;
}
@keyframes slide-right-in {
  from { transform: translateX(60px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="transition-slide-in-right">Slide In Right</div>`,
    isNew: true,
  },
  {
    id: 'transition-slide-out-left',
    name: 'Slide Out Left',
    category: 'transitions',
    tags: ['transition', 'slide', 'out', 'left', 'exit'],
    difficulty: 'beginner',
    description: 'A slide-out transition to the left with acceleration easing',
    cssCode: `.transition-slide-out-left {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: slide-left-out 2s ease-in forwards;
}
@keyframes slide-left-out {
  0% { transform: translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translateX(-60px); opacity: 0; }
}`,
    htmlCode: `<div class="transition-slide-out-left">Slide Out Left</div>`,
    isNew: true,
  },
  {
    id: 'transition-scale-in-up',
    name: 'Scale In Up',
    category: 'transitions',
    tags: ['transition', 'scale', 'in', 'up', 'entrance'],
    difficulty: 'intermediate',
    description: 'A scale-in entrance from below with a combined scale and translate animation',
    cssCode: `.transition-scale-in-up {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: scale-up-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes scale-up-in {
  from { transform: scale(0.6) translateY(20px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="transition-scale-in-up">Scale In Up</div>`,
    isNew: true,
  },
  {
    id: 'transition-scale-out-down',
    name: 'Scale Out Down',
    category: 'transitions',
    tags: ['transition', 'scale', 'out', 'down', 'exit'],
    difficulty: 'intermediate',
    description: 'A scale-out exit that shrinks down and fades away',
    cssCode: `.transition-scale-out-down {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: scale-down-out 2s ease forwards;
}
@keyframes scale-down-out {
  0% { transform: scale(1) translateY(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: scale(0.6) translateY(20px); opacity: 0; }
}`,
    htmlCode: `<div class="transition-scale-out-down">Scale Out Down</div>`,
    isNew: true,
  },
  {
    id: 'transition-rotate-in-spin',
    name: 'Rotate In Spin',
    category: 'transitions',
    tags: ['transition', 'rotate', 'in', 'spin', 'entrance'],
    difficulty: 'intermediate',
    description: 'A rotate-in entrance that spins from -180deg while fading in',
    cssCode: `.transition-rotate-in-spin {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: rotate-spin-in 0.6s ease-out forwards;
}
@keyframes rotate-spin-in {
  from { transform: rotate(-180deg) scale(0.5); opacity: 0; }
  to { transform: rotate(0deg) scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="transition-rotate-in-spin">Rotate In</div>`,
    isNew: true,
  },
  {
    id: 'transition-rotate-out-twist',
    name: 'Rotate Out Twist',
    category: 'transitions',
    tags: ['transition', 'rotate', 'out', 'twist', 'exit'],
    difficulty: 'intermediate',
    description: 'A rotate-out exit that twists and fades away to the right',
    cssCode: `.transition-rotate-out-twist {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: twist-out 2s ease-in forwards;
}
@keyframes twist-out {
  0% { transform: rotate(0deg) scale(1); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotate(90deg) scale(0.5); opacity: 0; }
}`,
    htmlCode: `<div class="transition-rotate-out-twist">Rotate Out</div>`,
    isNew: true,
  },
  {
    id: 'transition-flip-in-x',
    name: 'Flip In X',
    category: 'transitions',
    tags: ['transition', 'flip', 'in', '3d', 'perspective'],
    difficulty: 'advanced',
    description: 'A 3D flip-in transition on the X-axis like a card being flipped over',
    cssCode: `.transition-flip-in-x {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  perspective: 400px;
  animation: flip-x-in 0.6s ease-out forwards;
  backface-visibility: hidden;
}
@keyframes flip-x-in {
  from { transform: rotateX(90deg); opacity: 0; }
  60% { transform: rotateX(-10deg); }
  to { transform: rotateX(0deg); opacity: 1; }
}`,
    htmlCode: `<div class="transition-flip-in-x">Flip In X</div>`,
    isNew: true,
  },
  {
    id: 'transition-flip-out-y',
    name: 'Flip Out Y',
    category: 'transitions',
    tags: ['transition', 'flip', 'out', '3d', 'perspective'],
    difficulty: 'advanced',
    description: 'A 3D flip-out transition on the Y-axis that rotates the element away',
    cssCode: `.transition-flip-out-y {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  perspective: 400px;
  animation: flip-y-out 2s ease-in forwards;
  backface-visibility: hidden;
}
@keyframes flip-y-out {
  0% { transform: rotateY(0deg); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotateY(90deg); opacity: 0; }
}`,
    htmlCode: `<div class="transition-flip-out-y">Flip Out Y</div>`,
    isNew: true,
  },
  {
    id: 'transition-blur-in-focus',
    name: 'Blur In Focus',
    category: 'transitions',
    tags: ['transition', 'blur', 'in', 'focus', 'entrance'],
    difficulty: 'intermediate',
    description: 'A blur-in entrance that transitions from defocused blur to sharp focus',
    cssCode: `.transition-blur-in-focus {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: blur-focus-in 0.6s ease-out forwards;
}
@keyframes blur-focus-in {
  from { filter: blur(10px); opacity: 0; transform: scale(1.05); }
  to { filter: blur(0); opacity: 1; transform: scale(1); }
}`,
    htmlCode: `<div class="transition-blur-in-focus">Blur In Focus</div>`,
    isNew: true,
  },
  {
    id: 'transition-blur-out-defocus',
    name: 'Blur Out Defocus',
    category: 'transitions',
    tags: ['transition', 'blur', 'out', 'defocus', 'exit'],
    difficulty: 'intermediate',
    description: 'A blur-out exit that defocuses and fades away like a camera losing focus',
    cssCode: `.transition-blur-out-defocus {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: blur-defocus-out 2s ease-in forwards;
}
@keyframes blur-defocus-out {
  0% { filter: blur(0); opacity: 1; transform: scale(1); }
  70% { opacity: 1; }
  100% { filter: blur(10px); opacity: 0; transform: scale(0.95); }
}`,
    htmlCode: `<div class="transition-blur-out-defocus">Blur Out</div>`,
    isNew: true,
  },
  {
    id: 'transition-skew-in-tilt',
    name: 'Skew In Tilt',
    category: 'transitions',
    tags: ['transition', 'skew', 'in', 'tilt', 'entrance'],
    difficulty: 'intermediate',
    description: 'A skew-in entrance that tilts the element in from a skewed perspective',
    cssCode: `.transition-skew-in-tilt {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: skew-tilt-in 0.5s ease-out forwards;
}
@keyframes skew-tilt-in {
  from { transform: skewX(-15deg) translateX(-30px); opacity: 0; }
  to { transform: skewX(0deg) translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="transition-skew-in-tilt">Skew In Tilt</div>`,
    isNew: true,
  },
  {
    id: 'transition-skew-out-lean',
    name: 'Skew Out Lean',
    category: 'transitions',
    tags: ['transition', 'skew', 'out', 'lean', 'exit'],
    difficulty: 'intermediate',
    description: 'A skew-out exit that leans the element away and fades it out',
    cssCode: `.transition-skew-out-lean {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: skew-lean-out 2s ease-in forwards;
}
@keyframes skew-lean-out {
  0% { transform: skewX(0deg) translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: skewX(15deg) translateX(30px); opacity: 0; }
}`,
    htmlCode: `<div class="transition-skew-out-lean">Skew Out Lean</div>`,
    isNew: true,
  },
  {
    id: 'transition-bounce-in-drop',
    name: 'Bounce In Drop',
    category: 'transitions',
    tags: ['transition', 'bounce', 'in', 'drop', 'entrance'],
    difficulty: 'advanced',
    description: 'A bounce-in entrance that drops from above and bounces on landing',
    cssCode: `.transition-bounce-in-drop {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: bounce-drop-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes bounce-drop-in {
  0% { transform: translateY(-80px) scale(0.8); opacity: 0; }
  40% { transform: translateY(10px) scale(1.05); opacity: 1; }
  60% { transform: translateY(-5px) scale(0.98); }
  80% { transform: translateY(3px) scale(1.01); }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="transition-bounce-in-drop">Bounce In Drop</div>`,
    isNew: true,
  },
  {
    id: 'transition-bounce-out-float',
    name: 'Bounce Out Float',
    category: 'transitions',
    tags: ['transition', 'bounce', 'out', 'float', 'exit'],
    difficulty: 'advanced',
    description: 'A bounce-out exit that floats upward with a bouncy spring effect',
    cssCode: `.transition-bounce-out-float {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: bounce-float-out 0.7s ease-in forwards;
}
@keyframes bounce-float-out {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  20% { transform: translateY(10px) scale(0.95); }
  40% { transform: translateY(-60px) scale(1.05); opacity: 0.8; }
  100% { transform: translateY(-120px) scale(0.8); opacity: 0; }
}`,
    htmlCode: `<div class="transition-bounce-out-float">Bounce Out Float</div>`,
    isNew: true,
  },
  {
    id: 'transition-elastic-in-stretch',
    name: 'Elastic In Stretch',
    category: 'transitions',
    tags: ['transition', 'elastic', 'in', 'stretch', 'entrance'],
    difficulty: 'advanced',
    description: 'An elastic entrance with overshoot stretching that springs into position',
    cssCode: `.transition-elastic-in-stretch {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: elastic-stretch-in 0.8s ease forwards;
}
@keyframes elastic-stretch-in {
  0% { transform: scaleX(0.3) scaleY(1.4); opacity: 0; }
  30% { transform: scaleX(1.15) scaleY(0.85); opacity: 1; }
  50% { transform: scaleX(0.9) scaleY(1.1); }
  70% { transform: scaleX(1.05) scaleY(0.97); }
  100% { transform: scaleX(1) scaleY(1); opacity: 1; }
}`,
    htmlCode: `<div class="transition-elastic-in-stretch">Elastic In</div>`,
    isNew: true,
  },
  {
    id: 'transition-elastic-out-snap',
    name: 'Elastic Out Snap',
    category: 'transitions',
    tags: ['transition', 'elastic', 'out', 'snap', 'exit'],
    difficulty: 'advanced',
    description: 'An elastic exit that snaps with a quick stretch before vanishing',
    cssCode: `.transition-elastic-out-snap {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: elastic-snap-out 0.6s ease-in forwards;
}
@keyframes elastic-snap-out {
  0% { transform: scaleX(1) scaleY(1); opacity: 1; }
  20% { transform: scaleX(1.2) scaleY(0.8); }
  40% { transform: scaleX(0.8) scaleY(1.2); opacity: 0.8; }
  100% { transform: scaleX(0) scaleY(0); opacity: 0; }
}`,
    htmlCode: `<div class="transition-elastic-out-snap">Elastic Out</div>`,
    isNew: true,
  },
  {
    id: 'transition-spring-in-wobble',
    name: 'Spring In Wobble',
    category: 'transitions',
    tags: ['transition', 'spring', 'in', 'wobble', 'entrance'],
    difficulty: 'advanced',
    description: 'A spring entrance with wobble overshoot that oscillates before settling',
    cssCode: `.transition-spring-in-wobble {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: spring-wobble-in 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes spring-wobble-in {
  0% { transform: scale(0) rotate(-5deg); opacity: 0; }
  25% { transform: scale(1.15) rotate(3deg); opacity: 1; }
  50% { transform: scale(0.95) rotate(-2deg); }
  75% { transform: scale(1.05) rotate(1deg); }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}`,
    htmlCode: `<div class="transition-spring-in-wobble">Spring In</div>`,
    isNew: true,
  },
  {
    id: 'transition-spring-out-settle',
    name: 'Spring Out Settle',
    category: 'transitions',
    tags: ['transition', 'spring', 'out', 'settle', 'exit'],
    difficulty: 'advanced',
    description: 'A spring exit that wobbles slightly before settling into nothing',
    cssCode: `.transition-spring-out-settle {
  padding: 16px 24px; background: #1a1a2e;
  color: #10b981; border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  animation: spring-settle-out 0.7s ease-in forwards;
}
@keyframes spring-settle-out {
  0% { transform: scale(1) rotate(0deg); opacity: 1; }
  15% { transform: scale(1.05) rotate(2deg); }
  30% { transform: scale(0.95) rotate(-3deg); opacity: 0.9; }
  50% { transform: scale(0.85) rotate(1deg); opacity: 0.6; }
  100% { transform: scale(0) rotate(0deg); opacity: 0; }
}`,
    htmlCode: `<div class="transition-spring-out-settle">Spring Out</div>`,
    isNew: true,
  },
];
