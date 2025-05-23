
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
// Mail icon is no longer used.

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const { t } = useLanguage();
  const [showDialog, setShowDialog] = useState(isOpen);

  useEffect(() => {
    // Check if popup was already shown in this session or dismissed permanently
    const popupDismissed = localStorage.getItem('newsletterPopupDismissed');
    if (popupDismissed) {
      setShowDialog(false);
    } else {
      setShowDialog(isOpen);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    localStorage.setItem('newsletterPopupDismissed', 'true');
    setShowDialog(false);
    onClose();
    // Potentially show a success toast here
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
        localStorage.setItem('newsletterPopupDismissed', 'true');
        onClose();
    }
    setShowDialog(open);
  };

  if (!showDialog) {
    return null;
  }

  return (
    <Dialog open={showDialog} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden shadow-2xl border-none">
        {/* Background Image and Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url('https://source.unsplash.com/random/450x650/?fashion,activewear,model&sig=${Date.now()}')` }} 
        />
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[550px] p-8 text-white text-center">
          <DialogHeader className="text-center space-y-3 mb-8">
            <DialogTitle className="text-3xl font-extrabold uppercase tracking-wider text-shadow-lg">
              {t('newsletterPopup.title')}
            </DialogTitle>
            <DialogDescription className="text-base pt-1 text-gray-200 text-shadow">
              {t('newsletterPopup.description')}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xs">
            <div>
              <Input
                type="email"
                placeholder={t('newsletterPopup.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:ring-brand-coral focus:border-brand-coral text-center h-12 text-md rounded-md"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-white hover:bg-gray-200 text-slate-900 font-semibold h-12 text-md rounded-md"
            >
              {t('newsletterPopup.subscribeButton')}
            </Button>
          </form>
        </div>
        {/* The X close button from shadcn/ui DialogContent will be styled by its own definition, should be visible on dark overlay */}
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
