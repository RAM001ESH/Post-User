import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent {

  /* List */
  public Lstcategory: string[] = ['Watch', 'Shoes', 'Jacket'];

  public FrmEntry = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    imageurl: new FormControl('', [Validators.required]),
  });


  constructor(private _srvProduct: ProductService,
    private _srvMessage: MessageService
  ) { }

  ngOnInit() { }

  public ImageURL: string = '';

  btnImageURLBlur() {
    this.ImageURL = this.FrmEntry.value.imageurl || '';
  }

  /* Reset Form */
  btnResetForm() {
    this.FrmEntry.reset();
  }

  /* Add Product */
  btnAddProduct() {
    if (this.FrmEntry.valid) {
      const FrmValue = this.FrmEntry.value;
      this._srvProduct.Product.title = FrmValue.title as any;
      this._srvProduct.Product.price = FrmValue.price as any
      this._srvProduct.Product.category = FrmValue.category as any
      this._srvProduct.Product.description = FrmValue.description as any
      this._srvProduct.Product.image = FrmValue.imageurl as any
      this._srvProduct.Product.rating.rate = 4;
      this._srvProduct.Product.rating.count = 120;

      this._srvMessage.add({ severity: 'success', summary: 'Created', detail: 'Product Created Successfully', life: 3000 })
      this.ImageURL = '';
      this.btnResetForm();
    }
    else this._srvMessage.add({ severity: 'error', summary: 'Required', detail: 'Please fill the forms details', life: 3000 })
  }
}
