import * as React from "react";

export interface ToggleSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export function ToggleSwitch({ checked, onCheckedChange, label, className }: ToggleSwitchProps) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer select-none ${className ?? ""}`}>
      <span className="relative inline-block w-10 h-6">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onCheckedChange(e.target.checked)}
          className="peer sr-only"
        />
        <span className="absolute left-0 top-0 h-6 w-10 rounded-full bg-muted transition-colors peer-checked:bg-primary" />
        <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-background shadow transition-transform peer-checked:translate-x-4" />
      </span>
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}
