import { ContactRest } from "@/service/rest/contact.rest";
import { AxiosResponse } from "axios";

export class HomeService{
    constructor(
        private _contacts = new ContactRest()
    ){}
    getContacts(){
        return this._contacts.getContacts().then((response:AxiosResponse)=>response.data)
    }
}
