import React, { useState } from 'react';
import { X, Send, Mail, Check, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setName('');
    setEmail('');
    setMsg('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xs max-w-lg w-full overflow-hidden shadow-2xl p-6 md:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#004ac6] flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-gray-900 leading-tight">
                Contact jo_studio38
              </h3>
              <p className="text-[11px] text-gray-500 font-mono">Direct Studio Message</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-700 rounded-sm hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Smith"
                className="w-full bg-[#fafafa] border border-gray-300 px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-[#004ac6]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@studio.com"
                className="w-full bg-[#fafafa] border border-gray-300 px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-[#004ac6]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                rows={3}
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Hi Jo! I'd love to chat about..."
                className="w-full bg-[#fafafa] border border-gray-300 px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-[#004ac6] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a1c1c] hover:bg-black text-white text-xs font-semibold py-2.5 px-4 rounded-xs transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-lg text-gray-900">Message Received!</h4>
            <p className="text-xs text-gray-600 font-body">
              Thank you {name}, Jo will get back to your email at <span className="font-mono text-gray-900">{email}</span> within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="bg-[#1a1c1c] text-white text-xs font-semibold px-4 py-2 rounded-xs mt-2"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
