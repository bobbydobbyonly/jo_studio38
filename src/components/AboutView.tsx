import React, { useRef, useState, useEffect } from 'react';
import { Send, Sparkles, Monitor, Layers, Mail, Heart, Undo, Download, Eraser, Check, Camera, RefreshCw } from 'lucide-react';
import { JoProfileAvatar } from './JoProfileAvatar';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

export const AboutView: React.FC = () => {
  const { savePhoto, resetPhoto, hasPhoto } = useProfilePhoto();

  // Mini Interactive Studio Scratchpad State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#1a1a1a');
  const [brushSize, setBrushSize] = useState(3);
  const [activeStamp, setActiveStamp] = useState<'pen' | 'cat' | 'ghost' | 'coffee'>('pen');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('[AboutView] handleFileUpload triggered, file:', file?.name, 'type:', file?.type, 'size:', file?.size);
    if (!file) return;

    // Use the uploaded file directly as the profile image (no image generation, no AI models, no canvas alterations)
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      console.log('[AboutView] FileReader loaded, dataUrl length:', dataUrl?.length);
      if (dataUrl) {
        savePhoto(dataUrl);
      }
    };
    reader.onerror = (err) => {
      console.error('[AboutView] FileReader error:', err);
    };
    reader.readAsDataURL(file);
    // Clear input value so selecting the same file triggers change
    e.target.value = '';
  };

  const handleResetProfilePhoto = () => {
    resetPhoto();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize paper background
    ctx.fillStyle = '#faf8f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Initial greeting doodle text
    ctx.font = 'bold 16px "Bricolage Grotesque", sans-serif';
    ctx.fillStyle = '#9c9aa8';
    ctx.fillText('✎ Studio Scratchpad: Leave a doodle or stamp!', 20, 35);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    if (activeStamp !== 'pen') {
      // Stamp mascot
      ctx.save();
      if (activeStamp === 'cat') {
        ctx.font = '36px sans-serif';
        ctx.fillText('🐱', x - 18, y + 12);
      } else if (activeStamp === 'ghost') {
        ctx.font = '36px sans-serif';
        ctx.fillText('👻', x - 18, y + 12);
      } else if (activeStamp === 'coffee') {
        ctx.font = '36px sans-serif';
        ctx.fillText('☕', x - 18, y + 12);
      }
      ctx.restore();
      return;
    }

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || activeStamp !== 'pen') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#faf8f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'jo_studio38_doodle.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="space-y-14 pb-20 max-w-5xl mx-auto">
      {/* 1. Artist Bio Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-b border-gray-200 pb-12">
        {/* Left Column: Portrait Card */}
        <div className="bg-white p-6 rounded-xs border border-gray-200 shadow-2xs space-y-4 text-center">
          <div className="relative group w-32 h-32 rounded-full overflow-hidden mx-auto bg-white border-4 border-[#f0f0f0] shadow-sm flex items-center justify-center">
            <JoProfileAvatar size="xl" alt="Jo Profile" />
            <button
              onClick={() => fileInputRef.current?.click()}
              aria-label="Upload original profile photo"
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-mono font-medium gap-1 cursor-pointer"
            >
              <Camera className="w-5 h-5" />
              <span>Change Photo</span>
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/webp"
            className="hidden"
            onChange={handleFileUpload}
          />

          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-mono font-medium rounded transition-colors cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{hasPhoto ? 'Change Photo' : 'Upload Photo'}</span>
            </button>

            {hasPhoto && (
              <button
                type="button"
                onClick={handleResetProfilePhoto}
                className="text-[11px] font-mono text-gray-500 hover:text-red-600 flex items-center gap-1 cursor-pointer underline"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Photo
              </button>
            )}
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-gray-900">Jo</h2>
            <p className="text-xs text-gray-500 font-mono">@jo_studio38</p>
            <p className="text-xs text-[#004ac6] font-semibold mt-1">Digital Cartoonist & Worldbuilder</p>
          </div>

          <div className="pt-3 border-t border-gray-100 text-xs text-gray-600 space-y-1 text-left font-mono">
            <div className="flex justify-between">
              <span className="text-gray-400">Location:</span>
              <span>Vancouver & Tokyo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Experience:</span>
              <span>8+ Years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Focus:</span>
              <span>Environment & Manga</span>
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Story & Philosophy */}
        <div className="md:col-span-2 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#004ac6] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Artist Narrative</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1a1c1c] tracking-tight leading-tight">
            Crafting playful worlds filled with heart, humor, and intricate nostalgia.
          </h1>

          <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-body">
            <p>
              Hi there! I’m Jo, the illustrator behind <strong>jo_studio38</strong>. My artwork explores
              the boundary between whimsical cartoon character animation and dense, cozy European/Asian cityscapes.
              Whether drawing a robot ordering coffee at a retro bakery or a grumpy cat guarding a windowsill,
              my goal is to spark a momentary smile and transport viewers into lived-in fantasy settings.
            </p>
            <p>
              I’ve spent the last 8 years illustrating graphic novel chapters, creating merchandise for independent
              publishers, and teaching digital inking techniques to emerging comic artists worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Studio Setup & Hardware */}
      <section className="space-y-6">
        <h3 className="font-display font-bold text-2xl text-gray-900">Studio Hardware & Software</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Wacom Cintiq Pro 24', desc: 'Main studio desk display with 4K color fidelity', tag: 'Primary Rig' },
            { title: 'Apple iPad Pro 12.9"', desc: 'M2 with Apple Pencil 2 for coffee shop cafe sketches', tag: 'Mobile Rig' },
            { title: 'Clip Studio Paint EX', desc: 'Custom linework G-pens, speedlines, and raster inkers', tag: 'Core Software' },
            { title: 'Hahnemühle 310gsm Paper', desc: 'Archival fine art printing on 100% cotton rag stock', tag: 'Print Studio' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xs border border-gray-200 space-y-2">
              <span className="text-[10px] font-mono text-[#004ac6] font-bold uppercase tracking-wider">
                {item.tag}
              </span>
              <h4 className="font-display font-bold text-base text-gray-900">{item.title}</h4>
              <p className="text-xs text-gray-500 font-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Studio Sketchpad (Playground feature) */}
      <section className="bg-white border border-gray-200 rounded-xs p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
          <div>
            <h3 className="font-display font-bold text-2xl text-gray-900">Interactive Studio Guestbook</h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Draw a quick sketch or stamp studio stickers on the canvas below!
            </p>
          </div>

          {/* Tools & Colors */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Tool Mode Buttons */}
            <div className="flex bg-gray-100 p-1 rounded-xs gap-1">
              <button
                onClick={() => setActiveStamp('pen')}
                className={`px-2.5 py-1 text-xs rounded-xs font-semibold transition-colors ${
                  activeStamp === 'pen' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600'
                }`}
              >
                ✏️ Pen
              </button>
              <button
                onClick={() => setActiveStamp('cat')}
                className={`px-2.5 py-1 text-xs rounded-xs transition-colors ${
                  activeStamp === 'cat' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600'
                }`}
                title="Stamp Cat"
              >
                🐱 Cat
              </button>
              <button
                onClick={() => setActiveStamp('ghost')}
                className={`px-2.5 py-1 text-xs rounded-xs transition-colors ${
                  activeStamp === 'ghost' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600'
                }`}
                title="Stamp Ghost"
              >
                👻 Ghost
              </button>
              <button
                onClick={() => setActiveStamp('coffee')}
                className={`px-2.5 py-1 text-xs rounded-xs transition-colors ${
                  activeStamp === 'coffee' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600'
                }`}
                title="Stamp Coffee"
              >
                ☕ Mug
              </button>
            </div>

            {/* Color Swatches */}
            {activeStamp === 'pen' && (
              <div className="flex items-center gap-1.5 pl-2 border-l border-gray-200">
                {['#1a1a1a', '#e74c3c', '#004ac6', '#27ae60', '#f39c12'].map((c) => (
                  <button
                    key={c}
                    onClick={() => setBrushColor(c)}
                    className={`w-5 h-5 rounded-full border border-black/20 transition-transform ${
                      brushColor === c ? 'scale-125 ring-2 ring-blue-500' : ''
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            )}

            <button
              onClick={clearCanvas}
              className="p-1.5 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100 ml-2"
              title="Clear Canvas"
            >
              <Eraser className="w-4 h-4" />
            </button>
            <button
              onClick={downloadCanvas}
              className="p-1.5 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100"
              title="Download Doodle"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="relative border border-gray-300 rounded-xs overflow-hidden bg-[#faf8f2] shadow-inner">
          <canvas
            ref={canvasRef}
            width={800}
            height={320}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-64 sm:h-80 cursor-crosshair touch-none"
          />
        </div>
      </section>

      {/* 4. Direct Contact Form */}
      <section className="bg-white border border-gray-200 rounded-xs p-6 md:p-8 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#004ac6] uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h3 className="font-display font-bold text-2xl text-gray-900 mt-1">
            Say Hello or Discuss a Commercial Project
          </h3>
          <p className="text-xs text-gray-500 font-body">
            Direct email: <span className="font-mono text-gray-800">hello@jostudio38.art</span>
          </p>
        </div>

        {!contactSubmitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setContactSubmitted(true);
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full bg-[#fafafa] border border-gray-300 px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-[#004ac6]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="jane@example.com"
                className="w-full bg-[#fafafa] border border-gray-300 px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-[#004ac6]"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                rows={3}
                required
                placeholder="Tell me about your project, timeline, or just say hi..."
                className="w-full bg-[#fafafa] border border-gray-300 px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-[#004ac6] resize-none"
              />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-[#1a1c1c] hover:bg-black text-white text-xs font-semibold py-2.5 px-6 rounded-xs transition-colors flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xs text-center space-y-2">
            <Check className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="font-display font-bold text-base text-emerald-900">Message Sent!</h4>
            <p className="text-xs text-emerald-700">
              Thank you for reaching out! Jo will respond to your message shortly.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
