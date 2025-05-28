import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTransaction } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _srvHttp: HttpClient) { }

  getPostUser() {
    return this._srvHttp.get("http://localhost:3000/postUser");
  }

  createUser(createUser: any) {
    return this._srvHttp.post('http://localhost:3000/postUser', createUser);
  }

  getScheme() {
    return this._srvHttp.get('http://localhost:3000/Scheme');
  }

  /* Get Transcation History */
  getTranscationHistory() {
    return this._srvHttp.get('http://localhost:3000/Transcation');
  }

  createTransaction(createTransaction: CreateTransaction) {
    return this._srvHttp.post('http://localhost:3000/Transcation', createTransaction);
  }
}
