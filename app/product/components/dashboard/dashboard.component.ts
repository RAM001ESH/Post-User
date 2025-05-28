import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  /* List */
  public LstProduct: Product[] = [];

  /* Table Action */
  public IsPagination: boolean = true;
  public PerPageSize: number = 10;
  public PaginationSize: any[] = [10, 25, 50, 100];

  /* Model */
  public MlProduct: Product = new Product();

  /* Dialog */
  public IsOpenView: boolean = false;

  constructor(private _srvProduct: ProductService,
    private _srvConfirmation: ConfirmationService,
    private _srvMessage: MessageService) { }

  ngOnInit() {
    this._srvProduct.getProduct().subscribe({
      next: (res: any) => {
        this.LstProduct = res;
        console.log(this._srvProduct.Product);

        // this.IsLoader = false;
        if (this._srvProduct.Product.title) {
          this.LstProduct.unshift(this._srvProduct.Product)
        }

        this.LstProduct.filter((e, i) => {
          e.id = i + 1
        });
      },
      error: (err: any) => {
        alert(err);
      }
    });
  }

  btnDelete(index: number) {
    this._srvConfirmation.confirm({
      message: 'Are you sure to delete this product ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const arrindex = this.LstProduct.findIndex((e) => e.id == index);
        this.LstProduct.splice(arrindex, 1);
        this._srvMessage.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
      },
    });
  }

  btnViewProduct(data: Product) {
    this.MlProduct = data;
    this.IsOpenView = true;
  }
}
