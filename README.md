<!---
Pure aesthetic profile README with animated snake grid and centered name.
No filled boxes, only outlines with smooth animations.
-->

<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&size=28&duration=3000&pause=500&color=A0C49D&center=true&vCenter=true&width=600&lines=𓆙+Bethala+Rinosh+𓆙" alt="Typing SVG" />
</h1>

<div align="center">
  <!-- SNAKE + OUTLINE BOXES ANIMATION (SVG + CSS) -->
  <div style="background: #F9FFF5; border-radius: 32px; padding: 20px; display: inline-block;">
    <svg width="100%" height="auto" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" style="max-width: 800px; background: transparent; font-family: 'Space Grotesk', 'Segoe UI', system-ui;">
      <defs>
        <!-- glowing filter for snake segments -->
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        <!-- subtle shadow for text -->
        <filter id="textShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#A0C49D" flood-opacity="0.3"/>
        </filter>

        <!-- path: snake zigzag through grid cells -->
        <!-- 6 columns, 5 rows. cell centers: (130,100), (200,100), (270,100)... then snake pattern -->
        <path id="snakePath" d="
          M 130 100 L 200 100 L 270 100 L 340 100 L 410 100 L 480 100
          L 480 170 L 410 170 L 340 170 L 270 170 L 200 170 L 130 170
          L 130 240 L 200 240 L 270 240 L 340 240 L 410 240 L 480 240
          L 480 310 L 410 310 L 340 310 L 270 310 L 200 310 L 130 310
          L 130 380 L 200 380 L 270 380 L 340 380 L 410 380 L 480 380
          L 480 450 L 410 450 L 340 450 L 270 450 L 200 450 L 130 450
        " fill="none" stroke="none" />
      </defs>

      <!-- background (soft, no fill on boxes) -->
      <rect width="800" height="600" fill="#F9FFF5" rx="20" />

      <!-- OUTLINE BOXES GRID – 6 cols x 5 rows, no fill, only borders -->
      <g stroke="#A0C49D" stroke-width="2" fill="none" rx="6" ry="6">
        <!-- Row 1 -->
        <rect x="100" y="72" width="60" height="56" />
        <rect x="170" y="72" width="60" height="56" />
        <rect x="240" y="72" width="60" height="56" />
        <rect x="310" y="72" width="60" height="56" />
        <rect x="380" y="72" width="60" height="56" />
        <rect x="450" y="72" width="60" height="56" />
        <!-- Row 2 -->
        <rect x="100" y="142" width="60" height="56" />
        <rect x="170" y="142" width="60" height="56" />
        <rect x="240" y="142" width="60" height="56" />
        <rect x="310" y="142" width="60" height="56" />
        <rect x="380" y="142" width="60" height="56" />
        <rect x="450" y="142" width="60" height="56" />
        <!-- Row 3 -->
        <rect x="100" y="212" width="60" height="56" />
        <rect x="170" y="212" width="60" height="56" />
        <rect x="240" y="212" width="60" height="56" />
        <rect x="310" y="212" width="60" height="56" />
        <rect x="380" y="212" width="60" height="56" />
        <rect x="450" y="212" width="60" height="56" />
        <!-- Row 4 -->
        <rect x="100" y="282" width="60" height="56" />
        <rect x="170" y="282" width="60" height="56" />
        <rect x="240" y="282" width="60" height="56" />
        <rect x="310" y="282" width="60" height="56" />
        <rect x="380" y="282" width="60" height="56" />
        <rect x="450" y="282" width="60" height="56" />
        <!-- Row 5 -->
        <rect x="100" y="352" width="60" height="56" />
        <rect x="170" y="352" width="60" height="56" />
        <rect x="240" y="352" width="60" height="56" />
        <rect x="310" y="352" width="60" height="56" />
        <rect x="380" y="352" width="60" height="56" />
        <rect x="450" y="352" width="60" height="56" />
      </g>

      <!-- SNAKE: animated circles moving along the zigzag path -->
      <!-- Snake Head (bigger, different shade) -->
      <circle r="9" fill="#A0C49D" filter="url(#glow)">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
          <mpath href="#snakePath" />
        </animateMotion>
      </circle>
      <!-- Body segment 1 -->
      <circle r="7" fill="#B8D9AA">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="-0.4s">
          <mpath href="#snakePath" />
        </animateMotion>
      </circle>
      <!-- Body segment 2 -->
      <circle r="7" fill="#C8E6BB">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="-0.8s">
          <mpath href="#snakePath" />
        </animateMotion>
      </circle>
      <!-- Body segment 3 -->
      <circle r="7" fill="#D4EDC4">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="-1.2s">
          <mpath href="#snakePath" />
        </animateMotion>
      </circle>
      <!-- Tail -->
      <circle r="6" fill="#E0F3D6">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="-1.6s">
          <mpath href="#snakePath" />
        </animateMotion>
      </circle>

      <!-- CENTER BIG NAME with custom font + soft outline effect -->
      <text x="400" y="520" text-anchor="middle" dominant-baseline="middle" 
            font-family="'Space Grotesk', 'Segoe UI', monospace" font-size="58" 
            font-weight="700" fill="#4A6741" filter="url(#textShadow)"
            letter-spacing="2">
        <tspan x="400" dy="0">BETHALA RINOSH</tspan>
      </text>
      
      <!-- subtle sub line -->
      <text x="400" y="560" text-anchor="middle" font-family="'Space Grotesk', sans-serif" 
            font-size="16" fill="#8AAE7D" letter-spacing="3">
        𓆙  AI/ML · CREATIVE SYSTEMS  𓆙
      </text>
    </svg>
  </div>
</div>

<br>

<div align="center">
  <!-- minimal outline buttons / badges -->
  <a href="mailto:rinoshbethala@gmail.com">
    <img src="https://img.shields.io/badge/email-FFFFFF?style=for-the-badge&logo=gmail&logoColor=607D5B&color=F9FFF5&borderColor=A0C49D&borderRadius=8&borderWidth=1" />
  </a>
  <a href="https://www.linkedin.com/in/rinosh-bethala-69324537b/">
    <img src="https://img.shields.io/badge/linkedin-FFFFFF?style=for-the-badge&logo=linkedin&logoColor=607D5B&color=F9FFF5&borderColor=A0C49D&borderRadius=8&borderWidth=1" />
  </a>
  <a href="https://x.com/bethalarinosh">
    <img src="https://img.shields.io/badge/x-FFFFFF?style=for-the-badge&logo=x&logoColor=607D5B&color=F9FFF5&borderColor=A0C49D&borderRadius=8&borderWidth=1" />
  </a>
</div>

<br>

<!-- minimal project cards – only outlines and clean spacing -->
<div align="center">
  <table style="background: transparent; border-collapse: separate; border-spacing: 10px;">
    <tr align="center">
      <td style="border: 1px solid #D0E8C5; border-radius: 20px; padding: 12px 20px; background: transparent;">
        <b style="color:#4A6741;">🎨 Sky Draw</b><br>CV → gesture art
      </td>
      <td style="border: 1px solid #D0E8C5; border-radius: 20px; padding: 12px 20px; background: transparent;">
        <b style="color:#4A6741;">🚗 Safe Drive</b><br>drowsiness monitor
      </td>
      <td style="border: 1px solid #D0E8C5; border-radius: 20px; padding: 12px 20px; background: transparent;">
        <b style="color:#4A6741;">🧱 Brick Breaker</b><br>arcade game (C)
      </td>
      <td style="border: 1px solid #D0E8C5; border-radius: 20px; padding: 12px 20px; background: transparent;">
        <b style="color:#4A6741;">🌱 Crop Suggester</b><br>ML agri engine
      </td>
    </tr>
  </table>
</div>

<br>

<div align="center">
  <p style="color:#8AAE7D; font-size: 13px; letter-spacing: 1px;">
    ✦ SNAKE LOOP ✦ 30 FPS AESTHETIC ✦ ONLY OUTLINES ✦
  </p>
</div>

<!-- smooth page transition + pure aesthetic (no extra files) -->
<style>
  /* ultra smooth hover + animations */
  body {
    background-color: #F9FFF5;
  }
  img, svg, div {
    transition: all 0.2s ease;
  }
  a img, a {
    transition: transform 0.2s ease, filter 0.2s;
  }
  a:hover img {
    transform: translateY(-2px);
    filter: brightness(0.96);
  }
  td {
    transition: all 0.2s;
  }
  td:hover {
    border-color: #A0C49D !important;
    transform: scale(1.02);
    background: rgba(160, 196, 157, 0.05);
  }
  /* no filled boxes anywhere – only outlines */
  * {
    box-shadow: none;
    text-decoration: none;
  }
</style>
