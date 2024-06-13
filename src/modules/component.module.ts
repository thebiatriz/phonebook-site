import AddContact from "@/components/AddContact.vue";
import ContactDetail from "@/components/ContactDetail.vue";
import ContactList from "@/components/ContactList.vue";
import EditContact from "@/components/EditContact.vue";
import { App } from "vue";

export function setComponent(app:App){
    app.component('add-contact', AddContact),
    app.component('contact-detail', ContactDetail),
    app.component('contact-list', ContactList),
    app.component('edit-contact', EditContact)
}
