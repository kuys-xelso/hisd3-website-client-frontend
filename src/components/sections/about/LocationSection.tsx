import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls } from "@/components/ui/map";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export const LocationSection = () => {
    // Placeholder coordinates for Bohol, Philippines 
    const position: [number, number] = [123.86921339069572, 9.634393431950372];

    return (
        <Section size="lg" className="bg-secondary/30">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 border-l-4 border-primary pl-4 inline-block">
                        Our Location
                    </h2>
                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                        Come visit us at our headquarters. We're always happy to connect with partners and clinicians.
                    </p>
                </div>

                <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative">
                    <Map
                        viewport={{
                            center: position,
                            zoom: 13,
                        }}
                        theme="light"
                        className="w-full h-full"
                    >
                        <MapMarker longitude={position[0]} latitude={position[1]}>
                            <MarkerContent>
                                <div className="flex flex-col items-center">
                                    <div className="bg-secondary text-white p-2 rounded-full shadow-lg animate-bounce">
                                        <img src="/hisd3-logo.svg" alt="HISD3" className="w-6 h-6" />
                                    </div>
                                    <div className="mt-1 bg-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm whitespace-nowrap">
                                        HISD3 Inc.
                                    </div>
                                </div>
                            </MarkerContent>
                            <MarkerPopup closeButton>
                                <div className="p-2 min-w-[200px]">
                                    <h4 className="font-bold text-primary mb-1">HISD3 Inc. Headquarters</h4>
                                    <p className="text-sm text-slate-600 leading-snug">
                                        8/F ACE Medical Center ,<br />

                                        Carlos P. Garcia Avenue, Tagbilaran City, 6300
                                    </p>
                                </div>
                            </MarkerPopup>
                        </MapMarker>
                        <MapControls showZoom showCompass showFullscreen />
                    </Map>
                </div>
            </Container>
        </Section>
    );
};
