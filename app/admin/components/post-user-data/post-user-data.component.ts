import { Component, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTransaction, dateRanges } from '../../model/admin';
import { DateConversion, MessageServicePrime } from 'src/app/shared/app.global';
import { Month } from 'src/app/shared/common.model';

@Component({
  selector: 'app-post-user-data',
  templateUrl: './post-user-data.component.html',
  styleUrls: ['./post-user-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostUserDataComponent {

  /* List */
  public LstTransaction: any[] = [];
  public LstTransactionTemp: any[] = [];
  public LstUser: any[] = [];
  public LstScheme: any[] = [];
  public LstDateRange = dateRanges;

  /* Model */
  public MlCreateTranscation: CreateTransaction = new CreateTransaction();
  public MlDate: { fromDate?: Date, toDate?: Date } = {};

  /* Open Create Dialog */
  public IsOpenDialog: boolean = false;

  /* Table Action */
  public IsPagination: boolean = true;
  public PerPageSize: number = 10;
  public PaginationSize: any[] = [10, 25, 50, 100];

  /* Form Group */
  FrmEntry = this._fb.group({
    Name: [null, [Validators.required]],
    Scheme: [null, [Validators.required]],
    Amount: [null, [Validators.required]],
    TranscationDate: [new Date(), [Validators.required]],
    CreditMonth: [null, [Validators.required]],
  });

  /* Month */
  public LstMonths: string[] = Month;

  public Name: any;

  constructor(private _srvAdmin: AdminService,
    private _fb: FormBuilder,
    private _srvMessage: MessageServicePrime) { }

  ngOnInit() {
    this.getUserDetail();
    this.getScheme();
    this.FrmEntry.controls['TranscationDate'].setValue(new Date());
    this.FrmEntry.controls['TranscationDate'].updateValueAndValidity();
    this.MlDate = this.getDateRange(this.LstDateRange[0].value);
  }


  dateChangeEvent(data: any) {
    this.MlDate = this.getDateRange(data?.value?.value);
  }

  getUserDetail() {
    this._srvAdmin.getPostUser().subscribe({
      next: (res: any) => this.LstUser = res,
    });
  }

  getScheme() {
    this._srvAdmin.getScheme().subscribe({
      next: (res: any) => this.LstScheme = res
    })
  }

  btnSearch() {
    if (!this.MlDate.fromDate || !this.MlDate.toDate) this._srvMessage.message('error', 'Required', 'Please fill the date');
    else
      this.getTransaction(this.MlDate.fromDate, this.MlDate.toDate, this.Name?.ContactID);
  }

  /* Get Transaction */
  getTransaction(fromDate: Date | any, toDate: Date | any, ContactID?: string): any {
    this._srvAdmin.getTranscationHistory().subscribe({
      next: (res: any) => {
        this.LstTransactionTemp = res;
        this.LstTransaction = this.LstTransactionTemp.filter(t => {
          const transcationDate = new Date(t.TranscationDate.split('-').reverse().join('-'));
          if (ContactID) return transcationDate >= fromDate && transcationDate <= toDate && t.ContactID === ContactID;
          else return transcationDate >= fromDate && transcationDate <= toDate;
        });
      },
      error: (err: any) => this._srvMessage.message('error', 'Error', err)
    });
  }

  //#region Add New

  btnAddNewTranscation() {
    this.IsOpenDialog = true;
    this.FrmEntry.reset();
  }

  btnSave() {
    if (this.FrmEntry.invalid) this.FrmEntry.markAllAsTouched();
    else {
      const FrmEntry = this.FrmEntry.value;
      const FRM: any = FrmEntry.Name;
      const Scheme: any = FrmEntry.Scheme;
      this.MlCreateTranscation.Name = FRM.Name;
      this.MlCreateTranscation.ContactID = FRM.ContactID;
      this.MlCreateTranscation.Scheme = Scheme.SchemeName;
      this.MlCreateTranscation.Amount = FrmEntry.Amount as any;
      this.MlCreateTranscation.CreditMonth = FrmEntry.CreditMonth as any;
      this.MlCreateTranscation.TranscationDate = DateConversion.DatetoString(FrmEntry.TranscationDate as Date);

      this._srvAdmin.createTransaction(this.MlCreateTranscation).subscribe({
        next: () => {
          this.getTransaction(this.MlDate.fromDate, this.MlDate.toDate, this.Name?.ContactID);
          this.IsOpenDialog = false;
          this._srvMessage.message('success', 'Added', 'Added New Transaction Successfully');
        },
        error: (err: any) => this._srvMessage.message('error', 'Error', err)
      })
    }
  }
  //#endregion

  /* Date Change Event */
  getDateRange(selection: string): { fromDate: Date, toDate: Date } {
    const today: Date = new Date();
    let fromDate: Date | any = new Date();
    let toDate: Date | any = new Date();

    switch (selection) {
      case 'Today':
        fromDate = toDate = today;
        break;

      case 'This Week':
        const firstDayOfWeek = today.getDate() - today.getDay();
        fromDate = new Date(today.setDate(firstDayOfWeek));
        toDate = new Date();
        break;

      case 'This Month':
        fromDate = new Date(today.getFullYear(), today.getMonth(), 1);
        toDate = new Date();
        break;

      case 'This Year':
        fromDate = new Date(today.getFullYear(), 0, 1);
        toDate = new Date();
        break;

      case 'Last 30 days':
        fromDate = new Date();
        fromDate.setDate(today.getDate() - 30);
        toDate = new Date();
        break;

      case 'Last 3 Months':
        fromDate = new Date();
        fromDate.setMonth(today.getMonth() - 3);
        toDate = new Date();
        break;

      case 'Last 6 Months':
        fromDate = new Date();
        fromDate.setMonth(today.getMonth() - 6);
        toDate = new Date();
        break;

      case 'Last 12 Months':
        fromDate = new Date();
        fromDate.setMonth(today.getMonth() - 12);
        toDate = new Date();
        break;

      case 'Last Year':
        fromDate = new Date(today.getFullYear() - 1, 0, 1);
        toDate = new Date(today.getFullYear() - 1, 11, 31);
        break;

      case 'Custom':
        fromDate = toDate = null;
        break;
    }

    return { fromDate, toDate };
  }
}
