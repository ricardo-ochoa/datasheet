import React from "react";
import "./SpecsMosaic.css";

/**
 * Layout tipo mosaico (como la imagen).
 * - Cada bloque es un "slot" identificable por id.
 * - Si le pasas onAction, los tiles se vuelven clickeables.
 *
 * Slots esperados:
 * wifi, bluetooth, ssd, ports, perf,
 * cpu, gpu, center, memory, bandwidth,
 * chips, qr, os, caption
 */

function Tile({ className = "", onClick, ariaLabel, style, children }) {
  const clickable = typeof onClick === "function";
  const Comp = clickable ? "button" : "div";

  return (
    <Comp
      type={clickable ? "button" : undefined}
      className={`smTile ${clickable ? "smTile--clickable" : ""} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      style={style} 
    >
      {children}
    </Comp>
  );
}

export default function SpecsMosaic({ slots = {}, onAction, tileStyles = {} }) {
  const click = (tileId) => (onAction ? () => onAction(tileId) : undefined);

  return (
    <section className="smWrap">
      <Tile className="smWifi" onClick={click("wifi")} style={tileStyles.wifi}>
        {slots.wifi ?? <div className="smPlaceholder">Wi-Fi</div>}
      </Tile>

      <Tile className="smBluetooth" onClick={click("bluetooth")} style={tileStyles.bluetooth}>
        {slots.bluetooth ?? <div className="smPlaceholder">Bluetooth</div>}
      </Tile>

      <Tile className="smSsd" onClick={click("ssd")} style={tileStyles.ssd}>
        {slots.ssd ?? <div className="smPlaceholder">SSD</div>}
      </Tile>

      <Tile className="smPorts" onClick={click("ports")} style={tileStyles.ports}>
        {slots.ports ?? <div className="smPlaceholder">Puertos</div>}
      </Tile>

      <Tile className="smPerf" onClick={click("perf")} style={tileStyles.perf}>
        {slots.perf ?? <div className="smPlaceholder">Performance</div>}
      </Tile>

      <Tile className="smCpu" onClick={click("cpu")} style={tileStyles.cpu}>
        {slots.cpu ?? <div className="smPlaceholder">CPU</div>}
      </Tile>

      <Tile className="smCenter" onClick={click("center")} style={tileStyles.center}>
        <div className="smCenterInner">
          {slots.center ?? <div className="smPlaceholder">Centro (3D)</div>}
        </div>
      </Tile>

      <Tile className="smMemory" onClick={click("memory")} style={tileStyles.memory}>
        {slots.memory ?? <div className="smPlaceholder">Memoria</div>}
      </Tile>

      <Tile className="smGpu" onClick={click("gpu")} style={tileStyles.gpu}>
        {slots.gpu ?? <div className="smPlaceholder">GPU</div>}
      </Tile>

      <Tile className="smBandwidth" onClick={click("bandwidth")} style={tileStyles.bandwidth}>
        {slots.bandwidth ?? <div className="smPlaceholder">Bandwidth</div>}
      </Tile>

      <Tile className="smChips" onClick={click("chips")} style={tileStyles.chips}>
        {slots.chips ?? <div className="smPlaceholder">Chips</div>}
      </Tile>

      <Tile className="smQr" onClick={click("qr")} style={tileStyles.qr}>
        {slots.qr ?? <div className="smPlaceholder">QR</div>}
      </Tile>

      <Tile className="smOs" onClick={click("os")} style={tileStyles.os}>
        {slots.os ?? <div className="smPlaceholder">OS</div>}
      </Tile>

      <Tile className="smCaption" onClick={click("caption")} style={tileStyles.caption}>
        {slots.caption ?? <div className="smPlaceholder">Caption</div>}
      </Tile>

      <Tile className="smName" onClick={click("name")} style={tileStyles.name}>
        {slots.name ?? <div className="smPlaceholder">Ricardo Gaspar Ochoa</div>}
      </Tile>
    </section>
  );
}