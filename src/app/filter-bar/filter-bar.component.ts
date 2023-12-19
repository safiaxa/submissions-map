// filter-bar.component.ts
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
})
export class FilterBarComponent implements OnInit {
  @Input() cards: any[] = []; 
  @Output() filteredData = new EventEmitter<any[]>();

  searchTerm: string = '';
  selectedTitle: string = '';
  selectedStatus: string = '';
  selectedDate: string = '';

  uniqueTitles: string[] = [];
  uniqueStatus: string[] = [];
  filteredCards: any[] = [];

  ngOnInit(): void {
    this.uniqueTitles = [...new Set(this.cards.map((card) => card.title))];
    this.uniqueStatus = [...new Set(this.cards.map((card) => card.status))];
    this.filteredCards = this.cards; 
  }

  mapView: boolean = true;

  toggleMapView(): void {
    this.mapView = !this.mapView;
    this.applyFilters();
  }
  
  applyFilters(): void {
 
    this.filteredCards = this.cards
      .filter((card) =>
        card.title.toLowerCase().includes(this.selectedTitle.toLowerCase()) ||
        card.from.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .filter((card) => !this.selectedStatus || card.status === this.selectedStatus)
      .filter((card) => !this.selectedDate || new Date(card.dueDate).toDateString() === new Date(this.selectedDate).toDateString());


    this.filteredData.emit(this.filteredCards);
  }

  exportToHTML(): void {
    const table = `
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>From</th>
            <th>To</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          ${this.filteredCards.map(card => `
            <tr>
              <td>${card.title}</td>
              <td>${card.from}</td>
              <td>${card.to}</td>
              <td>${card.dueDate}</td>
              <td>${card.status}</td>
              <td>${card.text}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    const blob = new Blob([table], { type: 'text/html' });

   
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'exported_data.html';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  }
}


