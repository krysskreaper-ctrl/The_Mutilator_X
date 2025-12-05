import React, { useState } from "react";

/* === Bottom-Left Toggle Component === */
type HealthMode = "healthy" | "infected";

function BottomLeftVirusToggle({
  value,
  onChange,
  topLabel = "HEALTHY",
  bottomLabel = "INFECTED",
  caption = "LANG",
}: {
  value: HealthMode;
  onChange: (v: HealthMode) => void;
  topLabel?: string;
  bottomLabel?: string;
  caption?: string;
}) {
  const isInfected = value === "infected";

  return (
    <div className="bl-virus">
      <div className="bl-virus__header">
        <span className="bl-virus__caption">{caption}</span>
        <span
          className={"bl-virus__led" + (isInfected ? " bl-virus__led--blink" : "")}
          aria-label={isInfected ? "infected on" : "healthy on"}
        />
      </div>

      <button
        type="button"
        className={"bl-virus__switch" + (isInfected ? " is-infected" : "")}
        onClick={() => onChange(isInfected ? "healthy" : "infected")}
        aria-pressed={isInfected}
      >
        <span className="bl-virus__label bl-virus__label--top">{topLabel}</span>
        <span className="bl-virus__thumb" />
        <span className="bl-virus__label bl-virus__label--bottom">{bottomLabel}</span>
      </button>
    </div>
  );
}

/* === Demo App === */
export default function TranslatorApp() {
  const [langMode, setLangMode] = useState<HealthMode>("healthy");
  const targetLang = langMode === "healthy" ? "en" : "es";

  return (
    <div style={{ padding: 40 }}>
      <h2>Kreaper Translator</h2>
      <p>Current language: {targetLang.toUpperCase()}</p>
      <p>
        Toggle between <b>HEALTHY</b> (English) and <b>INFECTED</b> (Spanish) using
        the bottom-left switch.
      </p>

      {/* The small blinking toggle */}
      <BottomLeftVirusToggle
        value={langMode}
        onChange={setLangMode}
        caption="LANG"
        topLabel="EN"
        bottomLabel="ES"
      />
    </div>
  );
}