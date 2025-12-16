"use client";

import React, { useEffect, useRef } from "react";

interface VideoSectionProps {
    videoId?: string;
}

export default function VideoSection({ videoId = "dQw4w9WgXcQ" }: VideoSectionProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (iframeRef.current && iframeRef.current.contentWindow) {
                        const message = entry.isIntersecting
                            ? '{"event":"command","func":"playVideo","args":""}'
                            : '{"event":"command","func":"pauseVideo","args":""}';
                        iframeRef.current.contentWindow.postMessage(message, "*");
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => {
            if (iframeRef.current) {
                observer.unobserve(iframeRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full flex justify-center py-20">
            <div className="w-full max-w-7xl px-4">
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-video">
                    <iframe
                        ref={iframeRef}
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&playsinline=1&controls=0`}
                        title="Reproductor de YouTube"
                        frameBorder="0"
                        allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}