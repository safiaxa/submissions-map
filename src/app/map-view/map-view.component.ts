import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {
  private map: L.Map;
  private markersLayer: L.LayerGroup = L.layerGroup();

  private markerLocations: { latitude: number; longitude: number; title: string }[] = [
    { latitude: 43.4723, longitude: -80.5449, title: 'Work Flow: UWaterloo' },
    { latitude: 43.4979, longitude: -80.5273, title: 'Work Flow: Conestoga Mall' },
    { latitude: 43.4890, longitude: -80.500, title: 'Work Flow: Tim Hortons' },
    { latitude: 43.4738, longitude: -80.5275, title: 'Work Flow: Wilfred Laurier' },
  ];

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }

  private initMap(): void {
    const mapOptions: L.MapOptions = {
      center: [43.4823, -80.5449],
      zoom: 13
    };

    this.map = L.map('map', mapOptions);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.markersLayer.addTo(this.map);

    this.map.invalidateSize();
  }

  private addMarkers(): void {
    this.markerLocations.forEach(location => {
      const marker = L.marker([location.latitude, location.longitude], {
        icon: L.icon({
          iconUrl: '../../assets/report.png', 
          iconSize: [35, 35],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34]
        }),
        title: location.title
      });

      marker.bindPopup(`<b>${location.title}</b><br>Latitude: ${location.latitude}<br>Longitude: ${location.longitude}`);
      this.markersLayer.addLayer(marker);
    });
  }
}
