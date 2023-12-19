import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "submissions_map";
  submissionCards = [
    {
      title: 'Work Flow: UWaterloo',
      from: 'john@example.com',
      to: 'alice@example.com',
      dueDate: new Date('2023-12-20'),
      status: 'Low-Risk',
      text: 'Low Risk',
      latitude: 43.4723, 
      longitude: 80.5449  
    },
    {
      title: 'Work Flow: Conestoga Mall',
      from: 'bob@example.com',
      to: 'carol@example.com',
      dueDate: new Date('2023-12-18'),
      status: 'Uncomplete',
      text: 'Uncomplete',
      latitude: 43.4979,  
      longitude: 80.5273  
    },
    {
      title: 'Work Flow: Tim Hortons',
      from: 'dave@example.com',
      to: 'eve@example.com',
      dueDate: new Date('2023-12-22'),
      status: 'Needs-Review',
      text: 'Needs Review',
      latitude: 43.1111,  
      longitude: 80.000  
    },
    {
      title: 'Work Flow: Wilfred Laurier',
      from: 'frank@example.com',
      to: 'grace@example.com',
      dueDate: new Date('2023-12-16'),
      status: 'Uncomplete',
      text: 'Uncomplete',
      latitude: 43.4738, 
      longitude: 80.5275
    }
  ];

  filteredSubmissionCards: any[] = this.submissionCards;

  updateFilteredData(filteredData: any[]): void {
    this.filteredSubmissionCards = filteredData;
  }
}

     

