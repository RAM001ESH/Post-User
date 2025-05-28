import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { ProductService } from "./service/product.service";
import { HttpClientModule } from "@angular/common/http";
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from "primeng/dropdown";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from "primeng/api";

const routes: Route[] = [
    {
        path: '',
        component: ProductComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'create',
                component: CreateEditComponent
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ]
    },
]
@NgModule({
    declarations: [
        ProductComponent,
        DashboardComponent,
        CreateEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        HttpClientModule,

        ButtonModule,
        TableModule,
        InputTextModule,
        InputTextareaModule,
        RatingModule,
        CardModule,
        DialogModule,
        InputNumberModule,
        DropdownModule,
        ConfirmDialogModule,
        ToastModule
    ],
    exports: [],
    providers: [ProductService,ConfirmationService,MessageService]
})
export class ProductModule { }
