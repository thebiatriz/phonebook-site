
import api from '../config'
import { Contact} from '@/model/contact.model';

export class ContactRest {
    getContactById(id: string){
        return api.get(`/users/${id}`)
    }

    postContact(contact: Contact){
        return api.post(`/users`, contact); //usando api ao inves de "axios"
    }

    patchContact(id: string, updatedData: Partial<Contact>){
        return api.patch(`/users/${id}`, updatedData) //id na url e dados atualizados no corpo da requisição
    }

    deleteContact(id: string){
        return api.delete(`/users/${id}`) //usa o id para realizar o delete
    }


}



/*export class NameRest {
    getContactByIdName(name: string){
        return api.get(`/${name}/json`)
    }
}

export class ContactRest {
    getContactByIdPhone(contact: string){
        return api.get(`/${contact}/json`)
    }
}

export class EmailRest {
    getContactByIdPhone(email: string){
        return api.get(`/${email}/json`)
    }
}*/