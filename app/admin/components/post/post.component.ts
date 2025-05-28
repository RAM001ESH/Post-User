import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
// import { MessageService } from 'src/app/shared/app.global';
import { CreateUser, Post } from '../../model/admin';
import { v4 as uuidv4 } from 'uuid';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MessageService } from 'primeng/api';
import { MessageServicePrime } from 'src/app/shared/app.global';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  public LstPostUser: any[] = [];
  public LstMobileCode: string[] = ['+91', '+90'];
  public LstScheme: string[] = ['PP', 'FPP'];

  FrmEntry = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    MobileCode: new FormControl('', [Validators.required]),
    Mobile: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Age: new FormControl(''),
    JoinDate: new FormControl(''),
    Scheme: new FormControl('', [Validators.required]),
  });

  constructor(private _srvAdmin: AdminService,
    private _srvMessage: MessageServicePrime) { }

  ngOnInit() {
    this.setDefaultData();
    this.getUser();
  }

  getUser() {
    this._srvAdmin.getPostUser().subscribe({
      next: (res: any) => this.LstPostUser = res
    });
  }

  public IsopenDialog: boolean = false;
  btnCreateUser() {
    this.IsopenDialog = true;
    this.FrmEntry.reset();
    this.setDefaultData();
  }

  setDefaultData() {
    const str = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
    this.FrmEntry.controls['JoinDate'].setValue(str);
    this.FrmEntry.controls['MobileCode'].setValue('+91');
    this.FrmEntry.controls['Scheme'].setValue('PP');
  }

  private _mlCreateUser: CreateUser = new CreateUser();
  btnSave() {
    if (this.FrmEntry.valid) {
      const guid = uuidv4(); // Generates a version 4 UUID
      this._mlCreateUser.ContactID = guid;
      this._mlCreateUser.Name = this.FrmEntry.value.Name as any;
      this._mlCreateUser.Email = this.FrmEntry.value.Email as any;
      this._mlCreateUser.Scheme = this.FrmEntry.value.Scheme as any;
      this._mlCreateUser.Mobile = this.FrmEntry.value.MobileCode + ' ' + this.FrmEntry.value.Mobile;
      this._srvAdmin.createUser(this._mlCreateUser).subscribe({
        next: () => {
          this.IsopenDialog = false;
          // this._srvMessage.add({ severity: 'success', summary: 'Created', detail: `${this._mlCreateUser.Name} is created successfully`, life: 3000, closable: false });
          this._srvMessage.message('success', 'Created', `${this._mlCreateUser.Name} is created successfully`);
          this.getUser();
        },
        error: (err: any) => this._srvMessage.message('error', 'Error', err)
      })
    }
    else this.FrmEntry.markAllAsTouched();
  }
}
