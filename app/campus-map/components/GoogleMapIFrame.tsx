type GoogleMapIFrameProps = {
    lat: number;
    lng: number;
    q?: string;
};

const GoogleMapIFrame = (props: GoogleMapIFrameProps) => {
    const { lat, lng, q } = props;
    const center = `${lat}, ${lng}`;

    return (
        <div className="w-full">
            <iframe
                width="100%"
                height="600px"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${
                    process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
                }&q=${q || center}&center=${center}&zoom=18`}
            ></iframe>
        </div>
    );
};

export { GoogleMapIFrame };
