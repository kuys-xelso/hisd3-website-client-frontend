"use client";

import { useState, useEffect, useRef } from "react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MapControls,
  type MapRef,
} from "@/components/ui/map";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

const styles = {
  default: undefined,
  openstreetmap: "https://tiles.openfreemap.org/styles/bright",
  openstreetmap3d: "https://tiles.openfreemap.org/styles/liberty",
};

type StyleKey = keyof typeof styles;

export const LocationSection = () => {
  const mapRef = useRef<MapRef>(null);

  const [style, setStyle] = useState<StyleKey>("default");

  const selectedStyle = styles[style];
  const is3D = style === "openstreetmap3d";

  const position: [number, number] = [123.86921339069572, 9.634393431950372];

  useEffect(() => {
    mapRef.current?.easeTo({
      pitch: is3D ? 60 : 0,
      duration: 500,
    });
  }, [is3D]);

  const mapStyles = selectedStyle
    ? { light: selectedStyle, dark: selectedStyle }
    : undefined;

  const googleMapsLink = `https://www.google.com/maps?q=${position[1]},${position[0]}`;

  return (
    <Section size="lg" className="bg-secondary/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary border-l-4 border-primary pl-4 inline-block">
            Our Location
          </h2>

          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Come visit us at our headquarters. We're always happy to connect
            with partners and clinicians.
          </p>
        </div>

        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative">
          <Map
            ref={mapRef}
            viewport={{
              center: position,
              zoom: 13,
            }}
            styles={mapStyles}
            theme="light"
            className="w-full h-full"
          >
            <MapMarker longitude={position[0]} latitude={position[1]}>
              <MarkerContent>
                <div className="flex flex-col items-center">
                  {/* Pulse Location Pin */}
                  <div className="relative flex items-center justify-center">
                    {/* Pulse ring */}
                    <span className="absolute inline-flex h-10 w-10 rounded-full bg-primary/40 animate-ping"></span>

                    {/* Pin background */}
                    <div className="relative bg-white p-2 rounded-full shadow-lg border border-slate-200">
                      <img
                        src="/hisd3-logo.svg"
                        alt="HISD3"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mt-1 bg-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm whitespace-nowrap">
                    HISD3 Inc.
                  </div>
                </div>
              </MarkerContent>

              <MarkerPopup closeButton>
                <div className="p-2 min-w-[220px]">
                  <h4 className="font-bold text-primary mb-1">
                    HISD3 Inc. Headquarters
                  </h4>

                  <p className="text-sm text-slate-600 leading-snug">
                    8th Floor, ACEMC-Bohol, Mansasa District,
                    <br />
                    Tagbilaran City, Bohol, Philippines
                  </p>

                  {/* Open Google Maps */}
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-medium text-primary hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </MarkerPopup>
            </MapMarker>

            <MapControls showZoom showCompass showFullscreen />
          </Map>

          {/* Apple-style Map Controls */}
          <div className="absolute top-4 right-4 z-10 flex gap-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-1 shadow-md">
            <button
              onClick={() => setStyle("default")}
              className={`px-3 py-1 text-xs rounded-lg transition ${
                style === "default"
                  ? "bg-primary text-white"
                  : "hover:bg-slate-100"
              }`}
            >
              Default
            </button>

            <button
              onClick={() => setStyle("openstreetmap")}
              className={`px-3 py-1 text-xs rounded-lg transition ${
                style === "openstreetmap"
                  ? "bg-primary text-white"
                  : "hover:bg-slate-100"
              }`}
            >
              Map
            </button>

            <button
              onClick={() => setStyle("openstreetmap3d")}
              className={`px-3 py-1 text-xs rounded-lg transition ${
                style === "openstreetmap3d"
                  ? "bg-primary text-white"
                  : "hover:bg-slate-100"
              }`}
            >
              3D
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
