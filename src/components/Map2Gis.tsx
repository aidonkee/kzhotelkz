'use client';

type Map2GISProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

const Map2GIS = ({ latitude, longitude, zoom = 16 }: Map2GISProps) => {
  const src = `https://widgets.2gis.com/widget?type=map&center=${longitude},${latitude}&zoom=${zoom}`;

  return (
    <iframe
      className="absolute inset-0 w-full h-full"
      src={src}
      style={{ border: 0 }}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-popups"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map2GIS;
