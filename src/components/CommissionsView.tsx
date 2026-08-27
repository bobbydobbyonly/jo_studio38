import React, { useState } from 'react';
import { COMMISSION_TIERS } from '../data/artworks';
import { ArtworkVisual } from './ArtworkVisual';
import { CheckCircle2, Sparkles, Clock, FileText, Send, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export const CommissionsView: React.FC = () => {
  // Calculator State
  const [selectedTier, setSelectedTier] = useState<string>('character-dynamic');
  const [characterCount, setCharacterCount] = useState<number>(1);
  const [bgComplexity, setBgComplexity] = useState<'simple' | 'moderate' | 'complex'>('moderate');
  const [timeline, setTimeline] = useState<'standard' | 'rush'>('standard');
  const [licenseType, setLicenseType] = useState<'personal' | 'commercial' | 'exclusive'>('personal');

  // Form State
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [briefText, setBriefText] = useState('');
  const [referenceUrl, setReferenceUrl] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Price Calculation Logic
  const baseTier = COMMISSION_TIERS.find((t) => t.id === selectedTier) || COMMISSION_TIERS[1];
  let calculatedPrice = baseTier.price;

  // Additional characters beyond 1
  if (characterCount > 1) {
    calculatedPrice += (characterCount - 1) * (baseTier.price * 0.65);
  }

  // Background complexity modifier
  if (bgComplexity === 'moderate') calculatedPrice += 40;
  if (bgComplexity === 'complex') calculatedPrice += 110;

  // Timeline rush modifier
  if (timeline === 'rush') calculatedPrice *= 1.35;

  // Commercial licensing modifier
  if (licenseType === 'commercial') calculatedPrice += 150;
  if (licenseType === 'exclusive') calculatedPrice += 380;

  calculatedPrice = Math.round(calculatedPrice);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-14 pb-20 max-w-5xl mx-auto">
      {/* 1. Header & Status Banner */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-5">
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1c1c] tracking-tight">
              Commission Studio
            </h1>
            <p className="text-sm text-gray-600 mt-1 font-body">
              Custom illustration, character design, book cover art, and mascot branding.
            </p>
          </div>

          {/* Slot availability pill */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>2 of 5 Commission Slots Open (March 2026)</span>
          </div>
        </div>
      </section>

      {/* 2. Commission Tiers Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-bold text-2xl text-[#1a1c1c] tracking-tight">
            Popular Commission Packages
          </h2>
          <span className="text-xs text-gray-500 font-mono">Select a tier to customize</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMISSION_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                id={`tier-card-${tier.id}`}
                onClick={() => setSelectedTier(tier.id)}
                className={`relative rounded-xs border p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-[#004ac6] bg-blue-50/20 shadow-xs ring-1 ring-[#004ac6]'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {tier.badge && (
                        <span className="inline-block bg-[#f3f4f6] text-[#004ac6] text-[10px] font-bold px-2 py-0.5 rounded-[3px] uppercase tracking-wider mb-1.5">
                          {tier.badge}
                        </span>
                      )}
                      <h3 className="font-display font-bold text-xl text-gray-900 leading-tight">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">{tier.tagline}</p>
                    </div>

                    <div className="text-right">
                      <span className="font-display font-extrabold text-2xl text-gray-900">
                        ${tier.price}
                      </span>
                      <span className="block text-[10px] text-gray-500 font-mono">Starting</span>
                    </div>
                  </div>

                  {/* Sample Thumbnail */}
                  <div className="h-32 w-full rounded-xs overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <ArtworkVisual imageKey={tier.sampleImage} className="w-full h-full object-cover" />
                  </div>

                  <p className="text-xs text-gray-600 font-body leading-relaxed">{tier.description}</p>

                  {/* Included features checklist */}
                  <ul className="space-y-1.5 pt-2 border-t border-gray-100">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tier.turnaround}</span>
                  </div>

                  <button
                    className={`text-xs font-semibold px-3 py-1.5 rounded-xs transition-colors ${
                      isSelected
                        ? 'bg-[#004ac6] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Select Package'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Interactive Commission Quote Calculator & Brief Builder */}
      <section className="bg-white border border-gray-200 rounded-xs p-6 md:p-8 space-y-8">
        <div className="border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#004ac6] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-gray-900 mt-1">
            Build Your Custom Project Estimate
          </h2>
          <p className="text-xs text-gray-500 font-body">
            Adjust the project parameters below to see an instant real-time quote for your illustration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cols: Controls & Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Number of Characters */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider font-mono">
                  Characters / Subjects ({characterCount})
                </label>
                <span className="text-xs text-gray-500">
                  {characterCount === 1 ? 'Solo Subject' : `${characterCount} Subjects`}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setCharacterCount(num)}
                    className={`py-2 text-xs font-semibold rounded-xs border transition-colors ${
                      characterCount === num
                        ? 'border-[#004ac6] bg-blue-50 text-[#004ac6]'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {num} {num === 1 ? 'Character' : 'Characters'}
                  </button>
                ))}
              </div>
            </div>

            {/* Background Complexity */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider font-mono">
                Background & Environment
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'simple' as const, title: 'Simple / Gradient', desc: 'Free' },
                  { id: 'moderate' as const, title: 'Room / Street', desc: '+$40' },
                  { id: 'complex' as const, title: 'Epic Panorama', desc: '+$110' },
                ].map((bg) => (
                  <button
                    key={bg.id}
                    type="button"
                    onClick={() => setBgComplexity(bg.id)}
                    className={`p-3 text-left rounded-xs border transition-colors ${
                      bgComplexity === bg.id
                        ? 'border-[#004ac6] bg-blue-50 text-[#004ac6]'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{bg.title}</div>
                    <div className="text-[10px] text-gray-500">{bg.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Speed */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider font-mono">
                Turnaround Timeline
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTimeline('standard')}
                  className={`p-3 text-left rounded-xs border transition-colors ${
                    timeline === 'standard'
                      ? 'border-[#004ac6] bg-blue-50 text-[#004ac6]'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="text-xs font-bold">Standard Queue</div>
                  <div className="text-[10px] text-gray-500">10 – 14 business days (Included)</div>
                </button>
                <button
                  type="button"
                  onClick={() => setTimeline('rush')}
                  className={`p-3 text-left rounded-xs border transition-colors ${
                    timeline === 'rush'
                      ? 'border-[#004ac6] bg-blue-50 text-[#004ac6]'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="text-xs font-bold">Priority Rush Express</div>
                  <div className="text-[10px] text-gray-500">3 – 5 days guaranteed (+35%)</div>
                </button>
              </div>
            </div>

            {/* Usage Rights License */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider font-mono">
                Usage & Rights
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'personal' as const, title: 'Personal / Streamer', extra: '$0' },
                  { id: 'commercial' as const, title: 'Commercial Merch/Book', extra: '+$150' },
                  { id: 'exclusive' as const, title: 'Exclusive Full IP', extra: '+$380' },
                ].map((lic) => (
                  <button
                    key={lic.id}
                    type="button"
                    onClick={() => setLicenseType(lic.id)}
                    className={`p-3 text-left rounded-xs border transition-colors ${
                      licenseType === lic.id
                        ? 'border-[#004ac6] bg-blue-50 text-[#004ac6]'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{lic.title}</div>
                    <div className="text-[10px] text-gray-500">{lic.extra}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: Quote Breakdown & Instant Inquiry Form */}
          <div className="bg-[#f9f9f9] border border-gray-200 rounded-xs p-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-bold text-gray-700 uppercase tracking-wider font-mono border-b border-gray-200 pb-2">
                Estimated Project Total
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-display font-extrabold text-gray-900">
                    ${calculatedPrice}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">USD</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-tight">
                  Includes 3 milestone check-ins (Concept sketch, Inking pass, Final color).
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-gray-600 border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span>Base Package:</span>
                  <span className="font-medium text-gray-900">{baseTier.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Subjects:</span>
                  <span className="font-medium text-gray-900">{characterCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Environment:</span>
                  <span className="font-medium text-gray-900 capitalize">{bgComplexity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Turnaround:</span>
                  <span className="font-medium text-gray-900 capitalize">{timeline}</span>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 border-t border-gray-200 pt-4">
                <div className="text-xs font-bold text-gray-800">Send Commission Inquiry</div>
                <input
                  type="text"
                  required
                  placeholder="Your Name / Studio"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-white border border-gray-300 px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-[#004ac6]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-white border border-gray-300 px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-[#004ac6]"
                />
                <textarea
                  rows={2}
                  required
                  placeholder="Brief description of the concept or characters..."
                  value={briefText}
                  onChange={(e) => setBriefText(e.target.value)}
                  className="w-full bg-white border border-gray-300 px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-[#004ac6] resize-none"
                />
                <button
                  type="submit"
                  id="submit-commission-btn"
                  className="w-full bg-[#1a1c1c] hover:bg-black text-white text-xs font-semibold py-2.5 px-4 rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Commission Slot</span>
                </button>
              </form>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xs text-center space-y-2">
                <ShieldCheck className="w-7 h-7 text-emerald-600 mx-auto" />
                <h4 className="font-display font-bold text-sm text-emerald-900">Inquiry Received!</h4>
                <p className="text-[11px] text-emerald-700">
                  Thanks {clientName}! Jo will review your project brief and email you within 24 hours with sketch timeline slots.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-[10px] text-emerald-800 underline font-semibold mt-1"
                >
                  Submit another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Commission Process Milestones & FAQ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
        <div className="space-y-4">
          <h3 className="font-display font-bold text-xl text-gray-900">How the Workflow Works</h3>
          <ol className="space-y-3 text-xs text-gray-600">
            <li className="flex gap-3">
              <span className="font-mono font-bold text-[#004ac6] bg-blue-50 px-2 py-0.5 rounded-xs h-fit">01</span>
              <div>
                <strong className="text-gray-900 block">Brief & Sketch Stage:</strong>
                We review references and explore 2–3 rough thumbnail compositions for posture and flow.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-mono font-bold text-[#004ac6] bg-blue-50 px-2 py-0.5 rounded-xs h-fit">02</span>
              <div>
                <strong className="text-gray-900 block">Linework & Inking:</strong>
                High-definition brushwork is laid down. Line adjustments can be finalized here.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-mono font-bold text-[#004ac6] bg-blue-50 px-2 py-0.5 rounded-xs h-fit">03</span>
              <div>
                <strong className="text-gray-900 block">Color, Lighting & Delivery:</strong>
                Cel-shading, textures, and lighting passes applied. You receive 300DPI TIFF, PSD, and transparent PNG files.
              </div>
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="font-display font-bold text-xl text-gray-900">Commission FAQ</h3>
          <div className="space-y-2.5 text-xs">
            <div className="bg-white p-3 rounded-xs border border-gray-200">
              <strong className="text-gray-900 block mb-0.5">What payment methods do you accept?</strong>
              <p className="text-gray-600">Stripe, PayPal Invoicing, and Apple Pay. 50% deposit upfront, 50% upon final artwork approval.</p>
            </div>
            <div className="bg-white p-3 rounded-xs border border-gray-200">
              <strong className="text-gray-900 block mb-0.5">Can I order custom stickers or comic pages?</strong>
              <p className="text-gray-600">Yes! Reach out with your page count or print quantity and we will create a tailored package.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
