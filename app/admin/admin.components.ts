import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'admin',
    templateUrl: './admin.components.html',
    styleUrls: ['./admin.components.scss']
})
export class AdminComponent {
    public LstMenu: any[] = [];
    public selectedItem: string = 'Dashboard';

    constructor(private _router: Router) {
        this.LstMenu = Menu;
    }
    ngOnInit() {
        this.selectedItem = this.LstMenu.find((E) => E.MenuPath == this._router.url)?.MenuName;
    }

    selectItem(item: any) {
        this.selectedItem = item.MenuName;
        // localStorage.setItem('menuName', JSON.stringify(this.selectedItem))
    }

}

export const Menu = [
    {
        MenuName: 'Dashboard',
        MenuIcon: 'fa-solid fa-chart-line',
        MenuPath: '/admin/dashboard'
    },
    {
        MenuName: 'Table',
        MenuIcon: 'fa-solid fa-table',
        MenuPath: '/admin/table'
    },
    {
        MenuName: 'Post',
        MenuIcon: 'fa-solid fa-users',
        MenuPath: '/admin/post'
    },
    {
        MenuName: 'Transcation',
        MenuIcon: 'fa-solid fa-arrow-right-arrow-left',
        MenuPath: '/admin/transcation'
    },
    // <i class="fa-solid fa-arrow-right-arrow-left"></i>
]