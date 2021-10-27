import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaymentDetail } from './payment-detail.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[] = [];

  postPaymentDetail() {
    return this.http.post(environment.baseURL, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${environment.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${environment.baseURL}/${id}`);
  }

  refreshList() {
    this.formData =  new PaymentDetail();
    this.http.get(environment.baseURL)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }

  getById(id : number) {
    this.http.get(`${environment.baseURL}/${id}`)
      .toPromise()
      .then(res =>this.formData = res as PaymentDetail);
  }
}
