import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ExternalCtaButtonProps {
  url: string | null;
  label: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  showIcon?: boolean;
  hideIfEmpty?: boolean;
}

export const ExternalCtaButton: React.FC<ExternalCtaButtonProps> = ({
  url,
  label,
  className = '',
  variant = 'primary',
  showIcon = true,
  hideIfEmpty = false,
}) => {
  const isConfigured = Boolean(url && url.trim().length > 0);

  if (!isConfigured && hideIfEmpty) {
    return null;
  }

  const baseStyles = "inline-flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-none px-6 py-4 border";
  
  const variants = {
    primary: "bg-dwild-sand text-dwild-black border-dwild-sand hover:bg-dwild-offwhite hover:border-dwild-offwhite shadow-lg",
    secondary: "bg-dwild-jungle text-dwild-sand border-dwild-border hover:bg-dwild-earth hover:text-dwild-offwhite",
    outline: "bg-transparent text-dwild-sand border-dwild-sand/40 hover:border-dwild-sand hover:bg-dwild-sand/10",
    ghost: "bg-transparent text-dwild-offwhite border-transparent hover:text-dwild-sand",
  };

  if (!isConfigured) {
    return (
      <button
        disabled
        title="URL not configured yet in siteConfig.ts"
        className={`${baseStyles} ${variants[variant]} opacity-40 cursor-not-allowed ${className}`}
      >
        <span>{label}</span>
        <span className="text-[9px] tracking-normal lowercase opacity-70">(Not Configured)</span>
      </button>
    );
  }

  return (
    <a
      href={url!}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span>{label}</span>
      {showIcon && <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />}
    </a>
  );
};
