
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail } from 'lucide-react';

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
    // Here you would typically handle the email submission (e.g., API call)
    console.log('Email submitted:', email);
    // For now, just close the popup and mark as dismissed
    localStorage.setItem('newsletterPopupDismissed', 'true'); // Mark as dismissed
    setShowDialog(false);
    onClose();
    // Potentially show a success toast
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
        localStorage.setItem('newsletterPopupDismissed', 'true'); // Mark as dismissed if closed manually
        onClose();
    }
    setShowDialog(open);
  };

  if (!showDialog) {
    return null;
  }

  return (
    <Dialog open={showDialog} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            <Mail className="inline-block mr-2 h-6 w-6 text-brand-coral" />
            {t('newsletterPopup.title')}
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            {t('newsletterPopup.description')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <Input
              type="email"
              placeholder={t('newsletterPopup.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-base"
            />
          </div>
          <Button type="submit" className="w-full bg-brand-coral hover:bg-brand-coral-dark text-white">
            {t('newsletterPopup.subscribeButton')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
