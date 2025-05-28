import { Component } from "@angular/core";
import { Menu } from "./model/product";

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    /* List */
    public LstMenu = Menu;

    public isClosed = false;

    public selectedItem = 'Dashboard';

    public userName: string = '';

    constructor() { }
    
    ngOnInit() {
        const username = localStorage.getItem('userName');
        if (username) this.userName = JSON.parse(username);

        console.log(username);
        const menuName = localStorage.getItem('menuName');
        if (menuName) this.selectedItem = JSON.parse(menuName);
    }

    selectItem(item: any) {
        this.selectedItem = item.MenuName;
        localStorage.setItem('menuName', JSON.stringify(this.selectedItem))
    }

    toggleSidebar() {
        this.isClosed = !this.isClosed;
    }

}

