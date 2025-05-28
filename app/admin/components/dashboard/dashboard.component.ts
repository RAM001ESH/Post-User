import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public IsShowCard: boolean = false;

  public LstUser: any[] = [];

  /* Table Action */
  public IsPagination: boolean = true;
  public PerPageSize: number = 10;
  public PaginationSize: any[] = [10, 25, 50, 100];

  constructor() {
    this.LstUser = records;
  }

  btnShowCard() {
    this.IsShowCard = true;
    this.isOpen = true
  }

  isOpen = false;

}

export const records = [
  { id: 1, name: "Raju", mobile: "+91 7579998745", email: "raju@gmail.com" },
  { id: 2, name: "Arjun", mobile: "+91 9876543210", email: "arjun@gmail.com" },
  { id: 3, name: "Veena", mobile: "+91 9123456789", email: "veena@gmail.com" },
  { id: 4, name: "Sara", mobile: "+91 8765432109", email: "sara@gmail.com" },
  { id: 5, name: "Kiran", mobile: "+91 7890123456", email: "kiran@gmail.com" },
  { id: 6, name: "Anita", mobile: "+91 9012345678", email: "anita@gmail.com" },
  { id: 7, name: "Rajesh", mobile: "+91 6547891234", email: "rajesh@gmail.com" },
  { id: 8, name: "Sunil", mobile: "+91 5678901234", email: "sunil@gmail.com" },
  { id: 9, name: "Meera", mobile: "+91 3456789012", email: "meera@gmail.com" },
  { id: 10, name: "Ganesh", mobile: "+91 2345678901", email: "ganesh@gmail.com" }
];
