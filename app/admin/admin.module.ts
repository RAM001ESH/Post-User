import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.components";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CardModule } from "primeng/card";
import { PostComponent } from './components/post/post.component';
import { AdminService } from "./service/admin.service";
import { HttpClientModule } from "@angular/common/http";
import { DialogModule } from "primeng/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageService } from "primeng/api";
import { PostUserDataComponent } from './components/post-user-data/post-user-data.component';
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { CalendarModule } from "primeng/calendar";
import { MessageServicePrime } from "../shared/app.global";
import { ToastModule } from "primeng/toast";
import { CommonService } from "../shared/common.service";

const routes: Route[] = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'table',
                component: TableComponent
            },
            {
                path: 'post',
                component: PostComponent
            },
            {
                path: 'transcation',
                component: PostUserDataComponent
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ]
    },

]
@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        TableComponent,
        PostComponent,
        PostUserDataComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        TableModule,
        ButtonModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        CalendarModule,
        CardModule,
        DialogModule,
        InputNumberModule,
        ToastModule
    ],
    exports: [],
    providers: [AdminService, MessageService, MessageServicePrime, CommonService]
})
export class AdminModule { }