
import api from '../config'
import { Contact} from '@/model/contact.model';

export class ContactRest {
    async getContactById(id: string){
        return api.get(`/users/${id}`)
    }

    async postContact(contact: Contact){
        return api.post(`/users`, contact); //usando api ao inves de "axios"
    }

    async updateContact(id: string, updatedData: Partial<Contact>){
        return api.patch(`/users/${id}`, updatedData) //id na url e dados atualizados no corpo da requisição
    }

    async deleteContact(id: string){
        return api.delete(`/users/${id}`) //usa o id para realizar o delete
    }
    async getContacts(){
        return api.get(`/users`);
      }


}

