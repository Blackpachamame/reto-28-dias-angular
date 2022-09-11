import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutSaveGuard } from 'src/app/guards/without-save.guard';
import { DataResolverService } from 'src/app/resolvers/data.resolver.service';
import { ContactReactiveComponent } from './contact-reactive.component';

const routes: Routes = [
  { path: '', component: ContactReactiveComponent, canDeactivate: [WithoutSaveGuard], resolve: { departments: DataResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
