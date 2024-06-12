import api from '../config'
export class NameRest {
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
}