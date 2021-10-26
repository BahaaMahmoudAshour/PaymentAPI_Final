import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PaymentDetailsComponent },
  { path: 'paymentdetails/:id', component: PaymentDetailFormComponent },
  { path: 'paymentdetails', component: PaymentDetailFormComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }