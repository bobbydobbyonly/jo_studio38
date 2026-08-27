import React from 'react';

interface ArtworkVisualProps {
  imageKey: string;
  className?: string;
  aspect?: string;
}

export const ArtworkVisual: React.FC<ArtworkVisualProps> = ({ imageKey, className = '', aspect }) => {
  switch (imageKey) {
    case 'city-panorama':
      return (
        <div className={`relative w-full overflow-hidden bg-[#faf7ef] select-none ${className}`}>
          {/* Panoramic City Life Illustration */}
          <svg
            viewBox="0 0 1600 580"
            className="w-full h-auto block"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="brick-pattern" width="20" height="10" patternUnits="userSpaceOnUse">
                <rect width="20" height="10" fill="#edd6c8" />
                <path d="M0,5 L20,5 M10,0 L10,5 M0,10 L20,10 M0,5 L0,10 M20,5 L20,10" stroke="#dab49d" strokeWidth="0.8" fill="none" />
              </pattern>
              <pattern id="stripe-awning-red" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="10" height="20" fill="#e74c3c" />
                <rect x="10" width="10" height="20" fill="#ffffff" />
              </pattern>
              <pattern id="stripe-awning-blue" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="10" height="20" fill="#3498db" />
                <rect x="10" width="10" height="20" fill="#f1c40f" />
              </pattern>
              <pattern id="roof-tiles" width="16" height="12" patternUnits="userSpaceOnUse">
                <path d="M0,0 Q8,10 16,0" fill="#d9534f" stroke="#b03a2e" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Sky Background */}
            <rect width="1600" height="580" fill="#faf7ee" />

            {/* Clouds & Sky Vehicles */}
            <g opacity="0.85">
              {/* Hot Air Balloon / Flying Machine */}
              <g transform="translate(180, 70)">
                <ellipse cx="20" cy="20" rx="18" ry="22" fill="#e67e22" stroke="#2c3e50" strokeWidth="2" />
                <path d="M 8,20 Q 20,40 32,20" stroke="#f1c40f" strokeWidth="2" fill="none" />
                <line x1="12" y1="40" x2="15" y2="48" stroke="#2c3e50" strokeWidth="1.5" />
                <line x1="28" y1="40" x2="25" y2="48" stroke="#2c3e50" strokeWidth="1.5" />
                <rect x="13" y="48" width="14" height="10" rx="2" fill="#8e44ad" stroke="#2c3e50" strokeWidth="1.5" />
                {/* Tiny Pilot */}
                <circle cx="20" cy="45" r="4" fill="#f39c12" />
                <rect x="16" y="43" width="8" height="2" fill="#2c3e50" />
              </g>

              {/* Helicopter */}
              <g transform="translate(420, 75)">
                <ellipse cx="25" cy="18" rx="20" ry="12" fill="#3498db" stroke="#2c3e50" strokeWidth="2" />
                <line x1="5" y1="6" x2="45" y2="6" stroke="#2c3e50" strokeWidth="2" />
                <line x1="25" y1="6" x2="25" y2="10" stroke="#2c3e50" strokeWidth="2" />
                <rect x="40" y="16" width="22" height="4" fill="#2c3e50" />
                <polygon points="62,12 62,24 66,18" fill="#e74c3c" />
                <circle cx="18" cy="18" r="5" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="1" />
              </g>

              {/* Biplane with banner */}
              <g transform="translate(1080, 60)">
                <ellipse cx="30" cy="15" rx="25" ry="8" fill="#e74c3c" stroke="#2c3e50" strokeWidth="1.5" />
                <rect x="15" y="4" width="30" height="3" rx="1" fill="#f1c40f" stroke="#2c3e50" strokeWidth="1" />
                <rect x="15" y="23" width="30" height="3" rx="1" fill="#f1c40f" stroke="#2c3e50" strokeWidth="1" />
                <line x1="22" y1="7" x2="22" y2="23" stroke="#2c3e50" strokeWidth="1.5" />
                <line x1="38" y1="7" x2="38" y2="23" stroke="#2c3e50" strokeWidth="1.5" />
                <circle cx="5" cy="15" r="4" fill="#2c3e50" />
                {/* trailing little birds */}
                <path d="M70,15 Q75,10 80,15 Q85,10 90,15" stroke="#7f8c8d" strokeWidth="1.5" fill="none" />
                <path d="M95,20 Q100,16 105,20 Q110,16 115,20" stroke="#7f8c8d" strokeWidth="1.5" fill="none" />
              </g>

              {/* Distant Pigeons */}
              <path d="M750,110 Q755,105 760,110 Q765,105 770,110" stroke="#95a5a6" strokeWidth="1.5" fill="none" />
              <path d="M775,120 Q780,115 785,120 Q790,115 795,120" stroke="#95a5a6" strokeWidth="1.5" fill="none" />
            </g>

            {/* City Skyline / Buildings Row */}
            <g id="buildings" stroke="#2c3e50" strokeWidth="2.2" strokeLinejoin="round">
              {/* Building 1 (Yellow Apartment - Far Left) */}
              <rect x="20" y="160" width="130" height="340" fill="#f9e79f" />
              <polygon points="15,160 85,100 155,160" fill="#e67e22" />
              <rect x="35" y="115" width="14" height="35" fill="#d35400" />
              {/* Windows */}
              <rect x="40" y="180" width="24" height="34" rx="2" fill="#aed6f1" />
              <rect x="85" y="180" width="24" height="34" rx="2" fill="#aed6f1" />
              <rect x="40" y="235" width="24" height="34" rx="2" fill="#aed6f1" />
              <rect x="85" y="235" width="24" height="34" rx="2" fill="#aed6f1" />
              <rect x="40" y="290" width="24" height="34" rx="2" fill="#aed6f1" />
              <rect x="85" y="290" width="24" height="34" rx="2" fill="#aed6f1" />
              <rect x="40" y="345" width="24" height="34" rx="2" fill="#aed6f1" />
              <rect x="85" y="345" width="24" height="34" rx="2" fill="#aed6f1" />
              {/* Balcony plants */}
              <rect x="35" y="260" width="34" height="10" fill="#58d68d" strokeWidth="1.5" />

              {/* Building 2 (Teal Townhouse) */}
              <rect x="150" y="190" width="140" height="310" fill="#a3e4d7" />
              <polygon points="145,190 220,130 295,190" fill="#16a085" />
              <circle cx="220" cy="165" r="12" fill="#fdfefe" />
              {/* Balconies */}
              <rect x="175" y="220" width="35" height="40" fill="#fdfefe" />
              <rect x="230" y="220" width="35" height="40" fill="#fdfefe" />
              <rect x="170" y="250" width="45" height="14" fill="#34495e" />
              <rect x="225" y="250" width="45" height="14" fill="#34495e" />
              {/* Ground Floor Shop: "Baking & Bagels" */}
              <rect x="160" y="380" width="120" height="120" fill="#f5b041" />
              <polygon points="155,380 285,380 275,410 165,410" fill="url(#stripe-awning-red)" />
              <text x="175" y="430" fontSize="10" fontFamily="Bricolage Grotesque" fontWeight="700" fill="#2c3e50" stroke="none">DENNY BAKERY</text>

              {/* Building 3 (Terracotta / Red Townhouse - "The Curious Cat Bakery") */}
              <rect x="290" y="140" width="160" height="360" fill="#f1948a" />
              <polygon points="285,140 370,80 455,140" fill="#c0392b" />
              <rect x="320" y="90" width="20" height="40" fill="#922b21" />
              <rect x="400" y="90" width="20" height="40" fill="#922b21" />
              {/* Cat on roof */}
              <ellipse cx="370" cy="80" rx="8" ry="6" fill="#e67e22" />
              <polygon points="364,74 367,70 370,74" fill="#e67e22" />
              <polygon points="370,74 373,70 376,74" fill="#e67e22" />
              {/* Windows */}
              <rect x="315" y="170" width="32" height="42" rx="4" fill="#fef9e7" />
              <rect x="390" y="170" width="32" height="42" rx="4" fill="#fef9e7" />
              <rect x="315" y="235" width="32" height="42" rx="4" fill="#fef9e7" />
              <rect x="390" y="235" width="32" height="42" rx="4" fill="#fef9e7" />
              {/* Storefront Sign: The Curious Cat Bakery */}
              <rect x="300" y="370" width="140" height="130" fill="#fdebd0" />
              <rect x="305" y="350" width="130" height="24" rx="3" fill="#2c3e50" />
              <text x="312" y="366" fontSize="9" fontFamily="Bricolage Grotesque" fontWeight="700" fill="#f1c40f" stroke="none">The Curious Cat Bakery</text>
              <polygon points="295,374 445,374 435,405 305,405" fill="url(#stripe-awning-blue)" />

              {/* Building 4 (Center Orange/Yellow Inventor Tower: Professor Puddle's Inventions) */}
              <rect x="450" y="110" width="180" height="390" fill="#f8c471" />
              <polygon points="440,110 540,40 640,110" fill="#d35400" />
              {/* Clock & Telescope on roof */}
              <circle cx="540" cy="80" r="18" fill="#fef9e7" stroke="#2c3e50" strokeWidth="2" />
              <line x1="540" y1="80" x2="540" y2="70" stroke="#2c3e50" strokeWidth="2" />
              <line x1="540" y1="80" x2="548" y2="80" stroke="#2c3e50" strokeWidth="2" />
              <rect x="580" y="45" width="24" height="6" transform="rotate(-30 580 45)" fill="#95a5a6" />
              {/* Windows with gears */}
              <rect x="480" y="145" width="36" height="48" rx="4" fill="#ebf5fb" />
              <rect x="560" y="145" width="36" height="48" rx="4" fill="#ebf5fb" />
              <rect x="480" y="220" width="36" height="48" rx="4" fill="#ebf5fb" />
              <rect x="560" y="220" width="36" height="48" rx="4" fill="#ebf5fb" />
              {/* Storefront Sign: Professor Puddle's Inventions */}
              <rect x="465" y="340" width="150" height="24" rx="3" fill="#8e44ad" />
              <text x="472" y="356" fontSize="9" fontFamily="Bricolage Grotesque" fontWeight="700" fill="#ffffff" stroke="none">Professor Puddle's Inventions</text>
              <rect x="465" y="370" width="150" height="130" fill="#ebf5fb" />
              {/* Robot parts in window */}
              <circle cx="510" cy="420" r="14" fill="#bdc3c7" />
              <circle cx="505" cy="416" r="3" fill="#e74c3c" />
              <circle cx="515" cy="416" r="3" fill="#e74c3c" />

              {/* Building 5 (Mint Green Cafe & Bookstore) */}
              <rect x="630" y="150" width="150" height="350" fill="#a9dfbf" />
              <polygon points="625,150 705,90 785,150" fill="#27ae60" />
              <rect x="655" y="180" width="30" height="40" fill="#fdfefe" />
              <rect x="720" y="180" width="30" height="40" fill="#fdfefe" />
              <rect x="655" y="245" width="30" height="40" fill="#fdfefe" />
              <rect x="720" y="245" width="30" height="40" fill="#fdfefe" />
              {/* Market awning */}
              <polygon points="635,370 775,370 765,400 645,400" fill="url(#stripe-awning-red)" />
              <text x="660" y="355" fontSize="10" fontFamily="Bricolage Grotesque" fontWeight="700" fill="#2c3e50" stroke="none">STREET MARKET</text>

              {/* Building 6 (Yellow & Slate Blue Clockhouse) */}
              <rect x="780" y="130" width="160" height="370" fill="#f9e79f" />
              <polygon points="775,130 860,65 945,130" fill="#2980b9" />
              <rect x="805" y="160" width="32" height="42" fill="#ebf5fb" />
              <rect x="880" y="160" width="32" height="42" fill="#ebf5fb" />
              <rect x="805" y="230" width="32" height="42" fill="#ebf5fb" />
              <rect x="880" y="230" width="32" height="42" fill="#ebf5fb" />
              {/* Street Shoes sign */}
              <rect x="795" y="340" width="130" height="22" fill="#d35400" />
              <text x="805" y="355" fontSize="9" fontFamily="Bricolage Grotesque" fontWeight="700" fill="#ffffff" stroke="none">Street Shoes & Clothing</text>

              {/* Building 7 (Blue/Cyan Grand Hotel with Arched Windows) */}
              <rect x="940" y="140" width="170" height="360" fill="#7fb3d5" />
              <polygon points="935,140 1025,80 1115,140" fill="#1b4f72" />
              {/* Arched windows */}
              <path d="M 965,200 L 965,180 A 15,15 0 0,1 995,180 L 995,200 Z" fill="#fdfefe" />
              <path d="M 1030,200 L 1030,180 A 15,15 0 0,1 1060,180 L 1060,200 Z" fill="#fdfefe" />
              <path d="M 965,260 L 965,240 A 15,15 0 0,1 995,240 L 995,260 Z" fill="#fdfefe" />
              <path d="M 1030,260 L 1030,240 A 15,15 0 0,1 1060,240 L 1060,260 Z" fill="#fdfefe" />

              {/* Building 8 (Beige Corner Bistro - Far Right) */}
              <rect x="1110" y="160" width="180" height="340" fill="#f5cba7" />
              <polygon points="1105,160 1200,105 1295,160" fill="#b9770e" />
              <rect x="1135" y="190" width="34" height="44" fill="#fef9e7" />
              <rect x="1210" y="190" width="34" height="44" fill="#fef9e7" />
              <rect x="1135" y="255" width="34" height="44" fill="#fef9e7" />
              <rect x="1210" y="255" width="34" height="44" fill="#fef9e7" />

              {/* Building 9 (Pastel Peach Building - Edge) */}
              <rect x="1290" y="145" width="290" height="355" fill="#f7dc6f" />
              <polygon points="1285,145 1420,80 1555,145" fill="#e74c3c" />
            </g>

            {/* Street & Sidewalk Ground */}
            <rect x="0" y="470" width="1600" height="110" fill="#eaecee" stroke="#2c3e50" strokeWidth="2" />
            <line x1="0" y1="510" x2="1600" y2="510" stroke="#bdc3c7" strokeWidth="3" strokeDasharray="20 15" />

            {/* Giant Friendly Robot Strolling down the street */}
            <g id="giant-robot" transform="translate(1200, 160)" stroke="#2c3e50" strokeWidth="2.5">
              {/* Robot Legs */}
              <rect x="40" y="180" width="28" height="150" rx="6" fill="#bdc3c7" />
              <rect x="90" y="170" width="28" height="160" rx="6" fill="#95a5a6" />
              {/* Big Feet */}
              <rect x="25" y="325" width="55" height="25" rx="5" fill="#7f8c8d" />
              <rect x="75" y="320" width="55" height="25" rx="5" fill="#7f8c8d" />
              {/* Robot Body */}
              <rect x="25" y="60" width="110" height="130" rx="16" fill="#a3e4d7" />
              {/* Chest dial & gauge */}
              <circle cx="80" cy="110" r="25" fill="#f9e79f" stroke="#2c3e50" strokeWidth="2" />
              <line x1="80" y1="110" x2="92" y2="98" stroke="#e74c3c" strokeWidth="3" />
              {/* Rivets */}
              <circle cx="35" cy="72" r="3" fill="#16a085" />
              <circle cx="125" cy="72" r="3" fill="#16a085" />
              <circle cx="35" cy="178" r="3" fill="#16a085" />
              <circle cx="125" cy="178" r="3" fill="#16a085" />
              {/* Robot Arms (Waving friendly hand) */}
              <path d="M 25,90 Q 0,110 5,160" fill="none" stroke="#bdc3c7" strokeWidth="22" strokeLinecap="round" />
              <path d="M 135,90 Q 170,70 180,30" fill="none" stroke="#bdc3c7" strokeWidth="22" strokeLinecap="round" />
              {/* Waving Hand */}
              <circle cx="185" cy="25" r="14" fill="#f1c40f" />
              {/* Robot Head */}
              <rect x="42" y="10" width="76" height="55" rx="12" fill="#a3e4d7" />
              <rect x="75" y="-5" width="10" height="15" fill="#e74c3c" />
              <circle cx="80" cy="-8" r="6" fill="#f1c40f" />
              {/* Glowing Friendly Eyes */}
              <circle cx="62" cy="35" r="9" fill="#f9e79f" />
              <circle cx="98" cy="35" r="9" fill="#f9e79f" />
              <circle cx="62" cy="35" r="4" fill="#2c3e50" />
              <circle cx="98" cy="35" r="4" fill="#2c3e50" />
              {/* Cheerful Smile */}
              <path d="M 68,50 Q 80,58 92,50" fill="none" stroke="#2c3e50" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Classic Red Convertible Car Driving */}
            <g id="red-car" transform="translate(420, 440)" stroke="#2c3e50" strokeWidth="2">
              <path d="M 0,40 L 25,25 L 80,25 L 110,40 L 170,40 L 180,55 L 0,55 Z" fill="#e74c3c" />
              {/* Windshield */}
              <polygon points="75,25 95,5 115,5 105,25" fill="#d6eaf8" opacity="0.9" />
              {/* Driver and dog passenger */}
              <circle cx="85" cy="18" r="7" fill="#f5cba7" />
              <rect x="78" y="15" width="14" height="4" fill="#34495e" /> {/* sunglasses */}
              <circle cx="105" cy="19" r="6" fill="#d35400" /> {/* happy dog */}
              <ellipse cx="100" cy="16" rx="2" ry="4" fill="#a04000" /> {/* dog ear */}
              {/* Wheels */}
              <circle cx="35" cy="55" r="14" fill="#2c3e50" />
              <circle cx="35" cy="55" r="6" fill="#ecf0f1" />
              <circle cx="145" cy="55" r="14" fill="#2c3e50" />
              <circle cx="145" cy="55" r="6" fill="#ecf0f1" />
              {/* Headlights & grill */}
              <ellipse cx="178" cy="46" rx="4" ry="6" fill="#f9e79f" />
            </g>

            {/* Street Vendors, Tables, Stalls & Crowds */}
            <g id="street-life" stroke="#2c3e50" strokeWidth="1.8">
              {/* Fruit & Flower Stall */}
              <g transform="translate(680, 440)">
                <rect x="0" y="20" width="80" height="35" fill="#d35400" />
                <polygon points="-5,20 85,20 75,-5 5,-5" fill="url(#stripe-awning-blue)" />
                {/* Apples & Oranges crates */}
                <circle cx="15" cy="15" r="5" fill="#e74c3c" />
                <circle cx="28" cy="15" r="5" fill="#e74c3c" />
                <circle cx="45" cy="15" r="5" fill="#f39c12" />
                <circle cx="58" cy="15" r="5" fill="#f39c12" />
                {/* Vendor character */}
                <circle cx="40" cy="-14" r="8" fill="#f5cba7" />
                <rect x="34" y="-6" width="12" height="20" fill="#27ae60" />
                <path d="M 32,-18 Q 40,-24 48,-18" fill="#2c3e50" /> {/* Hat */}
              </g>

              {/* Pedestrians & Cartoon Characters */}
              {/* Character 1: Walking dog */}
              <g transform="translate(240, 470)">
                <circle cx="15" cy="-20" r="7" fill="#f5cba7" />
                <rect x="9" y="-13" width="12" height="22" fill="#9b59b6" />
                <line x1="12" y1="9" x2="10" y2="25" strokeWidth="2" />
                <line x1="18" y1="9" x2="22" y2="25" strokeWidth="2" />
                {/* Leash & Dog */}
                <line x1="21" y1="-2" x2="45" y2="15" stroke="#7f8c8d" strokeWidth="1.2" />
                <rect x="45" y="10" width="18" height="10" rx="3" fill="#e67e22" />
                <circle cx="63" cy="10" r="5" fill="#e67e22" />
                <line x1="48" y1="20" x2="48" y2="28" strokeWidth="1.8" />
                <line x1="60" y1="20" x2="60" y2="28" strokeWidth="1.8" />
              </g>

              {/* Character 2: Child eating ice cream */}
              <g transform="translate(370, 475)">
                <circle cx="10" cy="-15" r="6" fill="#f5cba7" />
                <rect x="5" y="-9" width="10" height="18" fill="#f1c40f" />
                <polygon points="16,-8 22,-8 19,-2" fill="#d35400" /> {/* Ice cream cone */}
                <circle cx="19" cy="-11" r="4" fill="#ff69b4" />
                <line x1="8" y1="9" x2="6" y2="22" strokeWidth="2" />
                <line x1="12" y1="9" x2="14" y2="22" strokeWidth="2" />
              </g>

              {/* Character 3: Cyclist */}
              <g transform="translate(100, 470)">
                {/* Bicycle wheels */}
                <circle cx="0" cy="18" r="12" fill="none" strokeWidth="2" />
                <circle cx="34" cy="18" r="12" fill="none" strokeWidth="2" />
                <polygon points="0,18 17,18 24,5 7,5" fill="none" strokeWidth="2" />
                {/* Rider */}
                <circle cx="16" cy="-15" r="7" fill="#f5cba7" />
                <rect x="11" y="-8" width="11" height="18" fill="#3498db" />
                <circle cx="16" cy="-18" r="7" fill="#e74c3c" /> {/* Helmet */}
              </g>

              {/* Character 4 & 5: Couple at Cafe Table */}
              <g transform="translate(870, 455)">
                <rect x="25" y="10" width="30" height="4" fill="#7f8c8d" />
                <line x1="40" y1="14" x2="40" y2="35" strokeWidth="2" />
                <circle cx="40" cy="35" r="10" fill="#7f8c8d" />
                {/* Cups */}
                <rect x="30" y="5" width="6" height="5" fill="#fdfefe" />
                <rect x="44" y="5" width="6" height="5" fill="#fdfefe" />
                {/* Person A */}
                <circle cx="15" cy="5" r="6" fill="#f5cba7" />
                <rect x="10" y="11" width="10" height="18" fill="#e67e22" />
                {/* Person B */}
                <circle cx="65" cy="5" r="6" fill="#f5cba7" />
                <rect x="60" y="11" width="10" height="18" fill="#1abc9c" />
              </g>

              {/* Street Lamp Post */}
              <g transform="translate(1140, 390)">
                <line x1="10" y1="0" x2="10" y2="100" strokeWidth="3" />
                <path d="M 0,0 Q 10,-15 20,0" strokeWidth="2.5" fill="none" />
                <ellipse cx="20" cy="5" rx="6" ry="8" fill="#f9e79f" />
                <ellipse cx="0" cy="5" rx="6" ry="8" fill="#f9e79f" />
              </g>
            </g>

            {/* Signature Studio watermark in bottom right corner */}
            <text x="1480" y="565" fontSize="11" fontFamily="Bricolage Grotesque" fontWeight="700" fill="#7f8c8d" stroke="none">jo_studio38 ©</text>
          </svg>
        </div>
      );

    case 'sticker-trio':
      return (
        <div className={`relative w-full overflow-hidden bg-[#ffffff] p-6 flex flex-col items-center justify-between border border-gray-100 rounded-sm shadow-xs ${className}`}>
          {/* Trio of cute mascots: Cat with yarn, ghost, smiling coffee cup */}
          <div className="w-full flex flex-col items-center gap-6 py-2">
            {/* Top: Orange Cat with Yarn */}
            <div className="w-full max-w-[280px] flex justify-center items-center py-2">
              <svg viewBox="0 0 240 180" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Cat Body */}
                <g stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Tail */}
                  <path d="M 170,120 Q 210,130 205,80 Q 200,40 175,60" fill="none" stroke="#f39c12" strokeWidth="18" />
                  <path d="M 170,120 Q 210,130 205,80 Q 200,40 175,60" fill="none" stroke="#1a1a1a" strokeWidth="3" />
                  
                  {/* Body */}
                  <path d="M 70,120 C 60,60 160,60 170,120 C 170,155 70,155 70,120 Z" fill="#f39c12" />
                  
                  {/* Cat Head */}
                  <ellipse cx="105" cy="85" rx="38" ry="32" fill="#f39c12" />
                  
                  {/* Ears */}
                  <polygon points="76,68 82,38 98,60" fill="#f39c12" />
                  <polygon points="80,64 84,46 94,59" fill="#fad7a0" stroke="none" />
                  <polygon points="112,60 128,38 134,68" fill="#f39c12" />
                  <polygon points="116,59 126,46 130,64" fill="#fad7a0" stroke="none" />
                  
                  {/* Cute Face */}
                  <ellipse cx="94" cy="84" rx="4" ry="5" fill="#1a1a1a" stroke="none" />
                  <ellipse cx="116" cy="84" rx="4" ry="5" fill="#1a1a1a" stroke="none" />
                  {/* Eye sparkle */}
                  <circle cx="92.5" cy="82" r="1.5" fill="#ffffff" stroke="none" />
                  <circle cx="114.5" cy="82" r="1.5" fill="#ffffff" stroke="none" />
                  {/* Nose & Mouth */}
                  <polygon points="103,91 107,91 105,94" fill="#e74c3c" stroke="none" />
                  <path d="M 100,95 Q 105,99 105,94 Q 105,99 110,95" fill="none" />
                  {/* Whiskers */}
                  <line x1="70" y1="84" x2="52" y2="80" />
                  <line x1="70" y1="90" x2="50" y2="92" />
                  <line x1="140" y1="84" x2="158" y2="80" />
                  <line x1="140" y1="90" x2="160" y2="92" />
                  
                  {/* Paws */}
                  <ellipse cx="80" cy="130" rx="14" ry="10" fill="#f8c471" />
                  <ellipse cx="140" cy="130" rx="14" ry="10" fill="#f8c471" />
                  
                  {/* Yarn Ball */}
                  <g transform="translate(18, 105)">
                    <circle cx="20" cy="20" r="18" fill="#e74c3c" />
                    <path d="M 5,20 Q 20,5 35,20" fill="none" stroke="#c0392b" strokeWidth="2.5" />
                    <path d="M 5,25 Q 20,38 35,25" fill="none" stroke="#c0392b" strokeWidth="2.5" />
                    <path d="M 20,5 Q 35,20 20,35" fill="none" stroke="#c0392b" strokeWidth="2.5" />
                    {/* Yarn trail to cat paw */}
                    <path d="M 36,25 Q 55,30 65,26" fill="none" stroke="#e74c3c" strokeWidth="2.5" />
                  </g>
                </g>
              </svg>
            </div>

            {/* Bottom Row: Ghost (Left) & Smiling Coffee Cup (Right) */}
            <div className="w-full grid grid-cols-2 gap-4 items-center pt-2">
              {/* Cute Smiling Ghost */}
              <div className="flex justify-center">
                <svg viewBox="0 0 160 180" className="w-full max-w-[130px] h-auto" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    {/* Ghost Sheet Body */}
                    <path
                      d="M 40,90 C 35,30 125,30 120,90 C 120,130 130,150 115,150 C 105,150 100,138 90,146 C 80,154 75,138 65,146 C 55,154 50,138 40,148 C 30,156 35,130 40,90 Z"
                      fill="#ffffff"
                    />
                    {/* Ghost Eyes */}
                    <ellipse cx="68" cy="80" rx="4" ry="6" fill="#1a1a1a" stroke="none" />
                    <ellipse cx="92" cy="80" rx="4" ry="6" fill="#1a1a1a" stroke="none" />
                    <circle cx="66.5" cy="78" r="1.5" fill="#ffffff" stroke="none" />
                    <circle cx="90.5" cy="78" r="1.5" fill="#ffffff" stroke="none" />
                    {/* Blushing Cheeks */}
                    <ellipse cx="60" cy="88" rx="6" ry="3" fill="#ffb6c1" stroke="none" />
                    <ellipse cx="100" cy="88" rx="6" ry="3" fill="#ffb6c1" stroke="none" />
                    {/* Smile */}
                    <path d="M 76,86 Q 80,90 84,86" fill="none" strokeWidth="2.5" />
                    {/* Little waving hands */}
                    <path d="M 38,98 Q 24,92 28,84" fill="none" strokeWidth="3" />
                    <path d="M 122,98 Q 136,92 132,84" fill="none" strokeWidth="3" />
                  </g>
                </svg>
              </div>

              {/* Smiling Coffee Cup with Heart Steam */}
              <div className="flex justify-center">
                <svg viewBox="0 0 170 180" className="w-full max-w-[140px] h-auto" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    {/* Floating Heart Steam */}
                    <path
                      d="M 85,38 C 85,25 70,20 70,30 C 70,42 85,55 85,55 C 85,55 100,42 100,30 C 100,20 85,25 85,38 Z"
                      fill="#ffffff"
                      stroke="#1a1a1a"
                      strokeWidth="2.5"
                    />

                    {/* Mug Handle */}
                    <path d="M 125,90 C 155,90 155,130 125,130" fill="none" stroke="#5dade2" strokeWidth="12" />
                    <path d="M 125,90 C 155,90 155,130 125,130" fill="none" stroke="#1a1a1a" strokeWidth="3" />

                    {/* Mug Body */}
                    <rect x="45" y="75" width="85" height="70" rx="14" fill="#5dade2" />
                    {/* Cup rim */}
                    <ellipse cx="87.5" cy="75" rx="42.5" ry="10" fill="#3498db" />

                    {/* Cute Mug Face */}
                    <ellipse cx="74" cy="105" rx="3.5" ry="5" fill="#1a1a1a" stroke="none" />
                    <ellipse cx="101" cy="105" rx="3.5" ry="5" fill="#1a1a1a" stroke="none" />
                    <circle cx="72.5" cy="103" r="1.2" fill="#ffffff" stroke="none" />
                    <circle cx="99.5" cy="103" r="1.2" fill="#ffffff" stroke="none" />
                    {/* Blushing Cheeks */}
                    <ellipse cx="65" cy="112" rx="5" ry="2.5" fill="#ffb6c1" stroke="none" />
                    <ellipse cx="110" cy="112" rx="5" ry="2.5" fill="#ffb6c1" stroke="none" />
                    {/* Smile */}
                    <path d="M 83,110 Q 87.5,116 92,110" fill="none" strokeWidth="2.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Vertical watermark on right border */}
          <div className="w-full flex justify-end pt-3">
            <span className="text-[10px] tracking-widest font-mono text-gray-400 font-bold">jo_studio38</span>
          </div>
        </div>
      );

    case 'dynamic-motion':
      return (
        <div className={`relative w-full overflow-hidden bg-[#f7f6f2] p-5 flex flex-col justify-between border border-gray-100 rounded-sm shadow-xs ${className}`}>
          {/* Header bar within illustration */}
          <div className="w-full flex justify-between items-center text-xs text-gray-500 pb-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-800">studio38</span>
              <span className="text-gray-400">Dynamic Motion</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px]">
              <span>Home</span>
              <span>Work</span>
              <span>Shop</span>
            </div>
          </div>

          {/* Red Pill badge */}
          <div className="my-1">
            <span className="inline-block bg-[#e74c3c] text-white text-[9px] font-bold px-2 py-0.5 rounded-xs tracking-wider">
              Explore Collection
            </span>
          </div>

          {/* Character illustration: Girl jumping in yellow puffy jacket and red sneakers */}
          <div className="relative w-full h-[230px] flex items-center justify-center my-1">
            <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Dynamic Speed Lines & Sparkles */}
              <g stroke="#bdc3c7" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
                <line x1="80" y1="90" x2="50" y2="90" />
                <line x1="90" y1="120" x2="40" y2="120" />
                <line x1="85" y1="150" x2="60" y2="150" />
                {/* Sparkle 1 */}
                <path d="M 120,70 Q 125,75 130,70 Q 125,65 120,70" fill="#f1c40f" stroke="#f39c12" />
                {/* Sparkle 2 */}
                <path d="M 310,110 Q 315,115 320,110 Q 315,105 310,110" fill="#f1c40f" stroke="#f39c12" />
              </g>

              {/* Character */}
              <g stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Back Foot & Red Sneaker */}
                <g transform="translate(110, 160) rotate(-25)">
                  {/* Leg */}
                  <rect x="0" y="0" width="16" height="45" fill="#f5cba7" rx="6" />
                  {/* White athletic sock */}
                  <rect x="-2" y="30" width="20" height="15" fill="#ffffff" />
                  {/* Red High-top Sneaker */}
                  <path d="M -8,45 L 30,45 L 28,65 L -14,65 Z" fill="#e74c3c" />
                  <rect x="-14" y="65" width="44" height="6" fill="#ffffff" />
                  {/* White laces */}
                  <line x1="5" y1="48" x2="18" y2="48" stroke="#ffffff" strokeWidth="2" />
                  <line x1="3" y1="54" x2="20" y2="54" stroke="#ffffff" strokeWidth="2" />
                </g>

                {/* Front Jumping Leg */}
                <g transform="translate(230, 170) rotate(35)">
                  {/* Leg */}
                  <rect x="0" y="0" width="18" height="50" fill="#f5cba7" rx="6" />
                  {/* White athletic sock */}
                  <rect x="-2" y="32" width="22" height="18" fill="#ffffff" />
                  {/* Front Red Sneaker */}
                  <path d="M -10,50 L 35,50 L 32,72 L -16,72 Z" fill="#e74c3c" />
                  <rect x="-16" y="72" width="50" height="7" fill="#ffffff" />
                  <line x1="5" y1="54" x2="22" y2="54" stroke="#ffffff" strokeWidth="2" />
                  <line x1="3" y1="62" x2="24" y2="62" stroke="#ffffff" strokeWidth="2" />
                </g>

                {/* Dark Denim Shorts */}
                <rect x="175" y="160" width="55" height="30" rx="4" fill="#2c3e50" />

                {/* Yellow Puffer Jacket / Torso */}
                {/* Jacket Left Sleeve (Raised high waving) */}
                <g transform="translate(230, 80) rotate(-40)">
                  <ellipse cx="25" cy="20" rx="16" ry="30" fill="#f1c40f" />
                  <ellipse cx="40" cy="50" rx="14" ry="24" fill="#f1c40f" />
                  {/* Hand waving */}
                  <circle cx="55" cy="75" r="9" fill="#f5cba7" />
                  <line x1="58" y1="75" x2="64" y2="70" strokeWidth="2" />
                </g>

                {/* Main Yellow Jacket Body */}
                <path d="M 160,110 C 145,170 255,170 240,110 C 240,80 160,80 160,110 Z" fill="#f1c40f" />
                {/* Puffer Segments */}
                <path d="M 162,125 Q 200,135 238,125" fill="none" stroke="#d4ac0d" strokeWidth="2.5" />
                <path d="M 164,145 Q 200,155 236,145" fill="none" stroke="#d4ac0d" strokeWidth="2.5" />

                {/* Left Sleeve (Back/Down) */}
                <ellipse cx="150" cy="130" rx="14" ry="26" fill="#f1c40f" transform="rotate(30 150 130)" />
                <circle cx="130" cy="155" r="8" fill="#f5cba7" />

                {/* Character Head & Flowing Black Hair */}
                {/* Back Hair Volume */}
                <path d="M 165,60 C 140,20 220,10 235,50 C 250,75 220,110 195,95 Z" fill="#1a1a1a" />
                
                {/* Neck & Face */}
                <rect x="190" y="80" width="16" height="15" fill="#f5cba7" stroke="none" />
                <ellipse cx="198" cy="70" rx="22" ry="20" fill="#f5cba7" />

                {/* Cute Anime Face Expression */}
                <ellipse cx="190" cy="68" rx="3.5" ry="5" fill="#1a1a1a" stroke="none" />
                <ellipse cx="210" cy="68" rx="3.5" ry="5" fill="#1a1a1a" stroke="none" />
                <circle cx="188.5" cy="66" r="1.2" fill="#ffffff" stroke="none" />
                <circle cx="208.5" cy="66" r="1.2" fill="#ffffff" stroke="none" />
                {/* Blushing Cheeks */}
                <ellipse cx="182" cy="74" rx="5" ry="2.5" fill="#ff7675" stroke="none" opacity="0.8" />
                <ellipse cx="218" cy="74" rx="5" ry="2.5" fill="#ff7675" stroke="none" opacity="0.8" />
                {/* Joyful open smile */}
                <path d="M 194,76 Q 200,84 206,76 Z" fill="#d63031" />

                {/* Bangs */}
                <path d="M 178,56 Q 192,68 198,54 Q 208,68 218,56" fill="#1a1a1a" />
              </g>
            </svg>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-400 border-t border-gray-200/60 pt-2 font-mono">
            <span>jo_studio38</span>
            <span>Character Design & Animation</span>
          </div>
        </div>
      );

    case 'studio-desk':
      return (
        <div className={`relative w-full overflow-hidden bg-[#ecd8c6] p-4 flex flex-col justify-between border border-amber-900/10 rounded-sm shadow-xs ${className}`}>
          {/* Cozy Illustrator Studio Workspace Illustration */}
          <div className="w-full h-full">
            <svg viewBox="0 0 360 480" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="warm-lamp" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff3d6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#e28743" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Background Corkboard Wall */}
              <rect width="360" height="480" fill="#dfc09f" />
              <rect x="10" y="10" width="340" height="230" rx="4" fill="#cfad8c" stroke="#8d6e53" strokeWidth="2" />

              {/* Pinned Sketches and Sticky Notes on Board */}
              <g stroke="#5c3d2e" strokeWidth="1.2" strokeLinejoin="round">
                {/* Sketch 1: Mascot Cat */}
                <rect x="25" y="25" width="45" height="55" fill="#fdfbf7" transform="rotate(-4 45 50)" />
                <circle cx="47" cy="48" r="10" fill="#eed9c4" />
                <circle cx="47" cy="27" r="2" fill="#c0392b" /> {/* pushpin */}

                {/* Sketch 2: Anime Girl Concept */}
                <rect x="80" y="22" width="60" height="75" fill="#fdfbf7" transform="rotate(3 110 55)" />
                <rect x="90" y="32" width="40" height="50" fill="#fce4ec" />
                <circle cx="110" cy="25" r="2" fill="#2980b9" />

                {/* Sketch 3: Comic Strip Panel */}
                <rect x="150" y="30" width="85" height="60" fill="#fdfbf7" transform="rotate(-2 190 60)" />
                <rect x="156" y="36" width="34" height="48" fill="#e8f8f5" />
                <rect x="194" y="36" width="34" height="48" fill="#fef9e7" />
                <circle cx="190" cy="33" r="2" fill="#27ae60" />

                {/* Sketch 4: Environment Thumbnail */}
                <rect x="245" y="25" width="55" height="70" fill="#fdfbf7" transform="rotate(5 270 60)" />
                <rect x="252" y="32" width="42" height="52" fill="#ebf5fb" />
                <circle cx="270" cy="28" r="2" fill="#f39c12" />

                {/* Sticky Notes */}
                <rect x="35" y="110" width="35" height="35" fill="#fff59d" transform="rotate(6 50 125)" />
                <line x1="42" y1="120" x2="62" y2="120" stroke="#7f8c8d" />
                <line x1="42" y1="128" x2="58" y2="128" stroke="#7f8c8d" />

                <rect x="85" y="115" width="35" height="35" fill="#ffccbc" transform="rotate(-5 100 130)" />
                <rect x="130" y="105" width="40" height="40" fill="#c8e6c9" transform="rotate(4 150 125)" />
              </g>

              {/* Bookshelf on Right Side */}
              <rect x="300" y="100" width="55" height="260" fill="#8d6e63" stroke="#4e342e" strokeWidth="2" />
              {/* Shelf Shelves */}
              <line x1="300" y1="170" x2="355" y2="170" stroke="#4e342e" strokeWidth="4" />
              <line x1="300" y1="240" x2="355" y2="240" stroke="#4e342e" strokeWidth="4" />
              {/* Books on shelf */}
              <rect x="305" y="115" width="8" height="52" fill="#e74c3c" />
              <rect x="314" y="110" width="10" height="57" fill="#3498db" />
              <rect x="325" y="120" width="12" height="47" fill="#f1c40f" />
              <rect x="338" y="112" width="9" height="55" fill="#2ecc71" />

              <rect x="305" y="185" width="12" height="52" fill="#9b59b6" />
              <rect x="318" y="190" width="8" height="47" fill="#e67e22" />
              <rect x="327" y="180" width="14" height="57" fill="#1abc9c" />

              {/* Wooden Work Desk */}
              <polygon points="0,270 360,250 360,480 0,480" fill="#b08968" stroke="#58311a" strokeWidth="3" />

              {/* Desk Lighting Glow */}
              <polygon points="20,180 340,160 360,480 0,480" fill="url(#warm-lamp)" opacity="0.6" />

              {/* Wacom Cintiq Drawing Tablet in Center */}
              <g transform="translate(60, 270) rotate(-6)" stroke="#2c3e50" strokeWidth="2.5">
                {/* Tablet Frame */}
                <rect x="0" y="0" width="220" height="145" rx="12" fill="#2d3436" />
                {/* Express Keys on Left */}
                <rect x="8" y="20" width="14" height="16" rx="3" fill="#636e72" />
                <rect x="8" y="42" width="14" height="16" rx="3" fill="#636e72" />
                <circle cx="15" cy="72" r="7" fill="#b2bec3" />
                <rect x="8" y="86" width="14" height="16" rx="3" fill="#636e72" />
                <rect x="8" y="108" width="14" height="16" rx="3" fill="#636e72" />
                {/* Glowing Active Drawing Screen */}
                <rect x="30" y="10" width="175" height="125" rx="4" fill="#ffffff" />
                
                {/* Cute Character Sketch on Screen */}
                <g stroke="#1a1a1a" strokeWidth="1.8" fill="none">
                  <circle cx="115" cy="65" r="28" fill="#fdfefe" />
                  {/* Bunny ears on sketch */}
                  <path d="M 102,40 Q 95,15 105,18 Q 112,22 108,40" fill="#fadbd8" />
                  <path d="M 122,40 Q 128,15 138,18 Q 131,22 126,40" fill="#fadbd8" />
                  {/* Eyes & Smile */}
                  <circle cx="106" cy="62" r="2.5" fill="#1a1a1a" />
                  <circle cx="124" cy="62" r="2.5" fill="#1a1a1a" />
                  <path d="M 112,70 Q 115,74 118,70" />
                  {/* Drawing Guides / Grid */}
                  <line x1="40" y1="65" x2="190" y2="65" stroke="#aed6f1" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="115" y1="18" x2="115" y2="120" stroke="#aed6f1" strokeWidth="0.8" strokeDasharray="3 3" />
                </g>
              </g>

              {/* Stylus Pen on Desk */}
              <g transform="translate(265, 330) rotate(45)" stroke="#1a1a1a" strokeWidth="1.5">
                <rect x="0" y="0" width="6" height="65" rx="3" fill="#2d3436" />
                <polygon points="0,65 6,65 3,74" fill="#e74c3c" />
                <rect x="0" y="20" width="6" height="8" fill="#bdc3c7" />
              </g>

              {/* Open Sketchbook on Left Desk */}
              <g transform="translate(15, 360) rotate(8)" stroke="#5c3d2e" strokeWidth="2">
                <rect x="0" y="0" width="85" height="65" rx="3" fill="#fef9e7" />
                <line x1="42" y1="0" x2="42" y2="65" stroke="#d5dbdb" strokeWidth="2" />
                {/* Doodles in notebook */}
                <circle cx="22" cy="30" r="10" stroke="#7f8c8d" strokeWidth="1" fill="none" />
                <line x1="12" y1="50" x2="35" y2="50" stroke="#95a5a6" strokeWidth="1" />
                <line x1="52" y1="20" x2="75" y2="20" stroke="#95a5a6" strokeWidth="1" />
                <line x1="52" y1="32" x2="70" y2="32" stroke="#95a5a6" strokeWidth="1" />
              </g>

              {/* Pencils & Brushes Cup */}
              <g transform="translate(290, 240)" stroke="#2c3e50" strokeWidth="1.5">
                <rect x="5" y="25" width="28" height="35" rx="3" fill="#ecf0f1" />
                {/* Pens sticking out */}
                <line x1="12" y1="30" x2="5" y2="5" stroke="#e74c3c" strokeWidth="3" />
                <line x1="18" y1="30" x2="16" y2="0" stroke="#3498db" strokeWidth="3" />
                <line x1="24" y1="30" x2="28" y2="8" stroke="#f1c40f" strokeWidth="3" />
                <line x1="28" y1="30" x2="35" y2="12" stroke="#2ecc71" strokeWidth="3" />
              </g>
            </svg>
          </div>
          <div className="w-full flex justify-between items-center text-[10px] text-amber-900/60 font-mono pt-2">
            <span>Workspace Studio</span>
            <span>jo_studio38</span>
          </div>
        </div>
      );

    case 'window-cat':
      return (
        <div className={`relative w-full overflow-hidden bg-[#fffdf8] p-4 flex flex-col justify-between border border-gray-200/80 rounded-sm shadow-xs ${className}`}>
          {/* Header watermark */}
          <div className="w-full text-left text-[10px] font-mono text-gray-400 pb-1">
            jo_studio38
          </div>

          {/* Illustration: Grumpy cross-legged cat on sunny windowsill next to succulent */}
          <div className="w-full flex items-center justify-center">
            <svg viewBox="0 0 320 240" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Golden Sun Window Background */}
              <rect x="15" y="10" width="290" height="170" fill="#fef9e7" stroke="#e59866" strokeWidth="2.5" />
              {/* Window Frame Panes */}
              <line x1="160" y1="10" x2="160" y2="180" stroke="#e59866" strokeWidth="3" />
              <line x1="15" y1="90" x2="305" y2="90" stroke="#e59866" strokeWidth="2.5" />
              
              {/* Distant Sunny Rooftops in Window */}
              <polygon points="30,90 70,55 110,90" fill="#f8c471" opacity="0.6" />
              <polygon points="180,90 230,50 280,90" fill="#f8c471" opacity="0.6" />
              <circle cx="80" cy="40" r="14" fill="#f9e79f" opacity="0.8" />

              {/* Wooden Window Sill */}
              <polygon points="5,175 315,175 305,225 15,225" fill="#d35400" stroke="#78281f" strokeWidth="3" />
              {/* Wood Grain Lines */}
              <line x1="30" y1="195" x2="290" y2="195" stroke="#ba4a00" strokeWidth="1.5" />
              <line x1="45" y1="210" x2="275" y2="210" stroke="#ba4a00" strokeWidth="1.5" />

              {/* Potted Succulent Plant on Right */}
              <g transform="translate(230, 135)" stroke="#2c3e50" strokeWidth="2">
                {/* Terracotta Pot */}
                <polygon points="5,30 35,30 30,58 10,58" fill="#e59866" />
                <rect x="2" y="24" width="36" height="8" rx="2" fill="#d35400" />
                {/* Green Succulent Leaves */}
                <ellipse cx="20" cy="18" rx="7" ry="12" fill="#58d68d" />
                <ellipse cx="12" cy="22" rx="6" ry="9" fill="#2ecc71" transform="rotate(-30 12 22)" />
                <ellipse cx="28" cy="22" rx="6" ry="9" fill="#2ecc71" transform="rotate(30 28 22)" />
                <ellipse cx="8" cy="26" rx="5" ry="7" fill="#27ae60" transform="rotate(-50 8 26)" />
                <ellipse cx="32" cy="26" rx="5" ry="7" fill="#27ae60" transform="rotate(50 32 26)" />
              </g>

              {/* Grumpy Cross-Legged Cat (Meowth/Tabby Style) */}
              <g transform="translate(90, 80)" stroke="#2c3e50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Cat Tail curled on sill */}
                <path d="M 20,95 Q -15,100 -10,75 Q -5,60 10,70" fill="none" stroke="#f5b041" strokeWidth="10" />
                <path d="M 20,95 Q -15,100 -10,75 Q -5,60 10,70" fill="none" stroke="#2c3e50" strokeWidth="2.5" />

                {/* Cat Body (Chubby & sitting upright) */}
                <ellipse cx="55" cy="72" rx="30" ry="24" fill="#fdebd0" />

                {/* Cross-legged Paws */}
                <ellipse cx="35" cy="88" rx="14" ry="8" fill="#f5b041" />
                <ellipse cx="75" cy="88" rx="14" ry="8" fill="#f5b041" />
                {/* Belly patch */}
                <ellipse cx="55" cy="72" rx="16" ry="14" fill="#ffffff" stroke="none" />

                {/* Folded Arms on chest */}
                <path d="M 32,65 Q 55,75 78,65" fill="none" stroke="#2c3e50" strokeWidth="3" />
                <ellipse cx="55" cy="68" rx="8" ry="5" fill="#f5b041" />

                {/* Big Round Head */}
                <circle cx="55" cy="35" r="26" fill="#fdebd0" />

                {/* Ears */}
                <polygon points="32,24 35,0 48,16" fill="#f5b041" />
                <polygon points="36,20 38,5 45,15" fill="#f5b7b1" stroke="none" />
                <polygon points="62,16 75,0 78,24" fill="#f5b041" />
                <polygon points="65,15 72,5 74,20" fill="#f5b7b1" stroke="none" />

                {/* Gold Coin / Forehead Charm */}
                <ellipse cx="55" cy="18" rx="5" ry="9" fill="#f1c40f" />
                <line x1="55" y1="12" x2="55" y2="24" stroke="#d4ac0d" strokeWidth="1.5" />

                {/* Grumpy Eyes (Narrowed & skeptical) */}
                <path d="M 38,34 Q 45,30 50,35" fill="none" strokeWidth="3" />
                <ellipse cx="44" cy="37" rx="3" ry="4" fill="#1a1a1a" stroke="none" />
                
                <path d="M 60,35 Q 65,30 72,34" fill="none" strokeWidth="3" />
                <ellipse cx="66" cy="37" rx="3" ry="4" fill="#1a1a1a" stroke="none" />

                {/* Grumpy Mouth */}
                <polygon points="53,44 57,44 55,46" fill="#e74c3c" stroke="none" />
                <path d="M 48,50 Q 55,46 62,50" fill="none" strokeWidth="2.5" />

                {/* Cute Long Whiskers */}
                <line x1="30" y1="36" x2="10" y2="32" />
                <line x1="30" y1="42" x2="8" y2="45" />
                <line x1="80" y1="36" x2="100" y2="32" />
                <line x1="80" y1="42" x2="102" y2="45" />
              </g>
            </svg>
          </div>
        </div>
      );

    case 'ramen-cart':
      return (
        <div className={`relative w-full overflow-hidden bg-[#1a1d2e] p-5 flex flex-col justify-between rounded-sm text-white ${className}`}>
          <div className="w-full flex justify-between text-[11px] text-teal-300 font-mono pb-2">
            <span>Midnight Ramen & Raindrops</span>
            <span>Tokyo Alley No. 38</span>
          </div>
          <div className="w-full flex items-center justify-center my-2">
            <svg viewBox="0 0 400 240" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Rain lines */}
              <g stroke="#3a4f66" strokeWidth="1" strokeDasharray="6 8" opacity="0.6">
                <line x1="30" y1="0" x2="20" y2="240" />
                <line x1="90" y1="0" x2="80" y2="240" />
                <line x1="160" y1="0" x2="150" y2="240" />
                <line x1="240" y1="0" x2="230" y2="240" />
                <line x1="320" y1="0" x2="310" y2="240" />
                <line x1="380" y1="0" x2="370" y2="240" />
              </g>

              {/* Wooden Ramen Cart */}
              <rect x="100" y="80" width="200" height="120" rx="6" fill="#8d5b4c" stroke="#2c3e50" strokeWidth="2.5" />
              <polygon points="80,80 320,80 300,50 100,50" fill="#2c3e50" stroke="#1a1a1a" strokeWidth="2.5" />
              {/* Glowing Red Paper Lanterns */}
              <ellipse cx="140" cy="95" rx="14" ry="18" fill="#e74c3c" />
              <ellipse cx="260" cy="95" rx="14" ry="18" fill="#e74c3c" />
              <text x="133" y="100" fontSize="11" fontWeight="bold" fill="#f9e79f">拉</text>
              <text x="253" y="100" fontSize="11" fontWeight="bold" fill="#f9e79f">麺</text>
              {/* Steaming Bowl */}
              <ellipse cx="200" cy="140" rx="24" ry="10" fill="#f39c12" />
              <path d="M 190,125 Q 195,110 200,125 Q 205,110 210,125" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.8" />
              {/* Wheels */}
              <circle cx="130" cy="200" r="20" fill="#2c3e50" stroke="#f1c40f" strokeWidth="3" />
              <circle cx="270" cy="200" r="20" fill="#2c3e50" stroke="#f1c40f" strokeWidth="3" />
            </svg>
          </div>
          <div className="text-[10px] text-gray-400 font-mono">jo_studio38 Atmosphere Study</div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full aspect-video bg-[#f4f4f5] flex items-center justify-center p-6 text-gray-400 ${className}`}>
          <div className="text-center font-mono text-xs">
            <p className="font-bold text-gray-600">jo_studio38</p>
            <p>Digital Illustration</p>
          </div>
        </div>
      );
  }
};
