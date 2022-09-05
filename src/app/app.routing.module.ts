import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactReactiveComponent } from "./components/contact-reactive/contact-reactive.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contact-reactive', component: ContactReactiveComponent },
    { path: 'contact-template/:id', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: PagenotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }