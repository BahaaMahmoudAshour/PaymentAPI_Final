import { Component, OnInit , OnDestroy } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit , OnDestroy {
  constructor(public service: PaymentDetailService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
     }

  ngOnInit(){
    this.service.getById(Number(this.route.snapshot.paramMap.get("id")));
  
  }
  ngOnDestroy(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.paymentDetailId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

}
