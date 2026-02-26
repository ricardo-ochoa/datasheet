import { useState } from "react";
import SpecsMosaic from "./components/SpecsMosaic/SpecsMosaic";
import MotorCanvas from "./components/MotorCanvas"
import "./App.css";

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <SpecsMosaic
        onAction={(tileId) => setActive(tileId)}
          tileStyles={{
          wifi: {
            "--tile-bg": "url(src/tiles/wifi.jpg)",
            "--tile-bg-opacity": 1,
            "--tile-bg-pos": "center",
            "--tile-overlay": "rgba(0, 0, 0, 0.13)",
          },
          cpu: {
            "--tile-bg": "url(/tiles/cpu.jpg)",
            "--tile-bg-opacity": 0.25,
            "--tile-bg-pos": "center",
            "--tile-overlay": "rgba(0, 0, 0, 0)",
          },
          center: {
            "--tile-bg-opacity": 0,
            "--tile-overlay": "rgba(0,0,0,0)"
          }
        }}
        slots={{
          wifi:(             
          <div style={{ textAlign: "center"}}>
              <div style={{ opacity: 1, fontWeight: 700 }}>GPU</div>
            </div>),
          bluetooth: <div>Bluetooth 5.0</div>,
          ssd: (
            <div style={{ textAlign: "center" }}>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>Up to</div>
              <div style={{ fontSize: 42, fontWeight: 900 }}>8TB</div>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>SSD</div>
            </div>
          ),
          ports: <div>10Gb Ethernet • Thunderbolt 4 • HDMI • SDXC</div>,
          perf: (
            <div style={{ textAlign: "center" }}>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>Up to</div>
              <div style={{ fontSize: 40, fontWeight: 900 }}>7.4GB/s</div>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>
                storage performance
              </div>
            </div>
          ),

          cpu: (
            <div style={{ textAlign: "center" }}>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>Up to</div>
              <div style={{ fontSize: 54, fontWeight: 900 }}>20-core</div>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>CPU</div>
            </div>
          ),
          gpu: (
            <div style={{ textAlign: "center" }}>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>Up to</div>
              <div style={{ fontSize: 54, fontWeight: 900 }}>64-core</div>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>GPU</div>
            </div>
          ),

          // Aquí va tu Canvas 3D (por ahora placeholder)
          center: <MotorCanvas />,

          memory: (
            <div style={{ textAlign: "center" }}>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>Up to</div>
              <div style={{ fontSize: 54, fontWeight: 900 }}>128GB</div>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>
                unified memory
              </div>
            </div>
          ),
          bandwidth: (
            <div style={{ textAlign: "center" }}>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>Up to</div>
              <div style={{ fontSize: 54, fontWeight: 900 }}>800GB/s</div>
              <div style={{ opacity: 0.7, fontWeight: 700 }}>
                memory bandwidth
              </div>
            </div>
          ),

          chips: (
            <div style={{ display: "flex", gap: 12, width: "100%" }}>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,.55)",
                  borderRadius: 18,
                  padding: 14,
                  textAlign: "center",
                  fontWeight: 800,
                }}
              >
                M1 Max
              </div>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,.55)",
                  borderRadius: 18,
                  padding: 14,
                  textAlign: "center",
                  fontWeight: 800,
                }}
              >
                M1 Ultra
              </div>
            </div>
          ),

          qr: (
            <div style={{ fontWeight: 900, opacity: 0.75, textAlign: "center" }}>
              QR
            </div>
          ),
          os: (
            <div style={{ textAlign: "center", fontWeight: 900, opacity: 0.8 }}>
              macOS
            </div>
          ),

          caption: (
            <div style={{ textAlign: "center", fontWeight: 800, opacity: 0.85 }}>
              Media engine with H.264, HEVC, ProRes encode and decode
            </div>
          ),

          name: (
            <div style={{ textAlign: "center", fontWeight: 800, opacity: 0.85 }}>
              Ricardo Gaspar Ochoa
            </div>
          ),
        }}
      />

      {/* Modal simple al click */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.38)",
            display: "grid",
            placeItems: "center",
            padding: 18,
            zIndex: 50,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 18,
              width: "min(560px, 94vw)",
            }}
          >
            <h3 style={{ margin: 0 }}>Tile: {active}</h3>
            <p style={{ marginTop: 10, opacity: 0.8 }}>
              Aquí puedes mostrar info, formularios, acciones, etc.
            </p>
            <button onClick={() => setActive(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}