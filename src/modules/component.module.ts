import AddContact from "@/components/AddContact.vue";
import ContactDetail from "@/components/ContactDetail.vue";
import ContactList from "@/components/ContactList.vue";
import { App } from "vue";

export function setComponent(app:App){
    app.component('AddContact', AddContact),
    app.component('ContactDetail', ContactDetail),
    app.component('ContactList', ContactList)
}
