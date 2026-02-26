import { useState } from "react";
import SpecsMosaic from "./components/SpecsMosaic/SpecsMosaic";
import MotorCanvas from "./components/MotorCanvas";
import "./App.css";

export default function App() {

  // ✅ Vite: public/motor.pdf => /motor.pdf (respetando BASE_URL si deploy en subcarpeta)
  const datasheetHref = `${import.meta.env.BASE_URL}motor.pdf`;

  // Tip: a veces estos params ayudan a que el visor se vea más limpio (depende del navegador)
  const iframeSrc = `${datasheetHref}#view=FitH&toolbar=1&navpanes=0`;

  return (
    <>
      {/* ======= VIEW: DATASHEET (iframe PDF) ======= */}

        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#0b0b0b",
            zIndex: 10,
            paddingTop: 0,
          }}
        >
          <iframe
            title="Motor datasheet"
            src={iframeSrc}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>


      {/* ✅ Botón para descargar PDF (fixed) */}
      <div style={{ position: "fixed", right: 18, bottom: 18, zIndex: 90 }}>
        <a
          href={datasheetHref}
          download="motor-datasheet.pdf"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 14px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.18)",
            background: "rgba(20,20,20,.85)",
            color: "white",
            textDecoration: "none",
            fontWeight: 800,
            boxShadow: "0 12px 30px rgba(0,0,0,.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          ⬇️ Descargar datasheet (PDF)
        </a>
      </div>
    </>
  );
}