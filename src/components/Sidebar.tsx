import React from 'react';
import { Palette, SlidersHorizontal, ShoppingBag, User, Instagram, Share2, Mail, Check, Menu, X } from 'lucide-react';
import { JoProfileAvatar } from './JoProfileAvatar';

interface SidebarProps {
  currentTab: 'gallery' | 'commissions' | 'shop' | 'about';
  onSelectTab: (tab: 'gallery' | 'commissions' | 'shop' | 'about') => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenContact: () => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  cartCount,
  onOpenCart,
  onOpenContact,
  mobileOpen,
  setMobileOpen,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'jo_studio38 — Digital Cartoonist & Illustrator',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navItems = [
    { id: 'gallery' as const, label: 'Gallery', icon: Palette },
    { id: 'commissions' as const, label: 'Commissions', icon: SlidersHorizontal },
    { id: 'shop' as const, label: 'Shop', icon: ShoppingBag, badge: cartCount > 0 ? cartCount : undefined },
    { id: 'about' as const, label: 'About', icon: User },
  ];

  return (
    <>
      {/* Mobile Top App Bar */}
      <div className="lg:hidden sticky top-0 z-40 bg-[#f9f9f9]/95 backdrop-blur-md border-b border-[#e5e7eb] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-gray-300 shadow-2xs">
            <JoProfileAvatar size="custom" className="w-full h-full" alt="jo_studio38" />
          </div>
          <div>
            <h1 className="font-display font-bold text-base tracking-tight leading-none text-[#1a1c1c]">
              jo_studio38
            </h1>
            <p className="text-[11px] text-[#5f5e5e] font-normal leading-tight mt-0.5">
              Digital Cartoonist & Illustrator
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {cartCount > 0 && (
            <button
              onClick={onOpenCart}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#004ac6] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-700 hover:text-gray-900 rounded-md focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop Fixed Sidebar & Mobile Slide-over */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-[280px] bg-[#f9f9f9] border-r border-[#e5e7eb] flex flex-col justify-between p-8 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Top: Identity Header & Nav */}
        <div className="space-y-8">
          {/* Avatar & Title (Matches screenshot) */}
          <div className="space-y-3">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white shadow-xs border border-gray-200">
              <JoProfileAvatar size="custom" className="w-full h-full" alt="jo_studio38 profile" />
            </div>

            <div>
              <h2 className="font-display font-bold text-xl tracking-tight text-[#1a1c1c] leading-tight">
                jo_studio38
              </h2>
              <p className="text-xs text-[#5f5e5e] font-normal leading-tight mt-0.5">
                Digital Cartoonist & Illustrator
              </p>
            </div>
          </div>

          {/* Navigation Links (Matches screenshot with active blue indicator line) */}
          <nav className="space-y-1 -mx-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;

              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-8 py-3.5 text-[17px] font-display transition-all duration-150 relative text-left ${
                    isActive
                      ? 'text-[#004ac6] font-semibold bg-blue-50/40'
                      : 'text-[#5f5e5e] hover:text-[#1a1c1c] hover:bg-gray-100/50 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-[18px] h-[18px] transition-colors ${
                        isActive ? 'text-[#004ac6]' : 'text-[#5f5e5e]'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== undefined && (
                    <span className="bg-[#004ac6] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  {/* Active Indicator Bar on right edge (as in screenshot) */}
                  {isActive && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[#004ac6] rounded-l" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Social & Action Bar (Matches screenshot) */}
        <div className="pt-6 border-t border-[#e5e7eb] flex items-center gap-4 text-gray-500">
          <button
            id="sidebar-instagram-btn"
            onClick={() => window.open('https://instagram.com', '_blank')}
            className="p-2 -m-2 text-gray-600 hover:text-gray-900 transition-colors rounded-sm hover:bg-gray-200/50"
            title="Instagram / Art Stream"
            aria-label="Instagram"
          >
            <Instagram className="w-[18px] h-[18px]" />
          </button>

          <button
            id="sidebar-share-btn"
            onClick={handleShare}
            className="p-2 -m-2 text-gray-600 hover:text-gray-900 transition-colors rounded-sm hover:bg-gray-200/50 relative"
            title="Share Portfolio Link"
            aria-label="Share Link"
          >
            {copied ? <Check className="w-[18px] h-[18px] text-green-600" /> : <Share2 className="w-[18px] h-[18px]" />}
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>

          <button
            id="sidebar-mail-btn"
            onClick={onOpenContact}
            className="p-2 -m-2 text-gray-600 hover:text-gray-900 transition-colors rounded-sm hover:bg-gray-200/50"
            title="Contact Studio Directly"
            aria-label="Contact Studio"
          >
            <Mail className="w-[18px] h-[18px]" />
          </button>
        </div>
      </aside>
    </>
  );
};
