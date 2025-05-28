import { NgModule } from "@angular/core";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Route[] = [
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }
]
@NgModule({
    declarations: [
        SignInComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }