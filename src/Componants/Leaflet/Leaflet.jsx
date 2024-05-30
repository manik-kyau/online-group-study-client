import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

const customIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const Leaflet = () => {

    const position = [23.6850, 90.3563];

    return (
        <div className='mt-8 md:mt-24'>

            <MapContainer center={position} zoom={13} className='w-full h-[300px] md:h-[400px] lg:h-[500px]'>
                <TileLayer
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=EqHVdHYRx1jI6vE0GGzF"
                ></TileLayer>
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Leaflet;