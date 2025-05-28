import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root' // Automatically available everywhere
})

export class MessageServicePrime {
    

    constructor(private _srvMessage: MessageService) { 
        console.log("Message");
    }
    message(severity: string, summary: string, detail: string, life: number = 3000) {
        this._srvMessage.add({
            severity: severity,
            summary: summary,
            detail: detail,
            life: life,
            closable: false
        });
    }
}

export class MessageServices {
    static message(title: string, icon: string | any, timer: number = 2000, position: string | any) {
        Swal.fire({
            title: title,
            // text: message,
            icon: icon,
            draggable: false,
            timer: timer,
            position: position,
            showCancelButton: false,
            showConfirmButton: false,
        })
    }
}



export class DateConversion {

    /* Date to String */
    static DatetoString(date: Date) {
        return date.toLocaleDateString('en-GB').split('/').join('-');
    }
}