
import api from '../rxjs'
import { ContactModel } from '@/model/contact.model';

export class ContactRest {
    getContactById(id: string){
        return api.get(`/users/${id}`)
    }

   postContact(contact: ContactModel){
        return api.post(`/users`, contact); //usando api ao inves de "axios"
    }

    updateContact(id: string, updatedData: Partial<ContactModel>){
        return api.patch(`/users/${id}`, updatedData) //id na url e dados atualizados no corpo da requisição
    }

    deleteContact(id: string){
        return api.delete(`/users/${id}`) //usa o id para realizar o delete
    }
    getContacts(){
        return api.get(`/users`);
      }


}

