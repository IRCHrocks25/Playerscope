import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "./ui/dialog";

interface FormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FormModal({ open, onOpenChange }: FormModalProps) {
  useEffect(() => {
    // Load the form embed script when modal opens
    if (open) {
      // Check if script already exists
      const existingScript = document.querySelector(
        'script[src="https://l.industryrockstars.ch/js/form_embed.js"]'
      );
      
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://l.industryrockstars.ch/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-[600px] w-full p-0 border-none bg-transparent">
        <div className="w-full rounded-[32px] overflow-hidden bg-white">
          {/* Workshop Details Header */}
          <div className="px-6 pt-6 pb-4 bg-white text-center">
            <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-xl md:text-2xl text-gray-900 mb-2 leading-tight">
              AI Change Management Workshop
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-gray-700 leading-tight">
              Saturday 14th March 2026 9:AM PST
            </p>
          </div>
          <div className="h-[593px]">
            <iframe
            src="https://l.industryrockstars.ch/widget/form/fzCQlAmoUcjf5ymPGPzp"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "32px",
            }}
            id="inline-fzCQlAmoUcjf5ymPGPzp"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="AI Change Management"
            data-height="593"
            data-layout-iframe-id="inline-fzCQlAmoUcjf5ymPGPzp"
            data-form-id="fzCQlAmoUcjf5ymPGPzp"
            title="AI Change Management"
          />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

