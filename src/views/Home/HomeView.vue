<template>
  <div class="home">
    <div v-if="contact">
      <h3>{{ contact.name }}</h3>
      <p>{{ contact.phoneNumber }}</p>
      <p>{{ contact.email }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ContactModel } from '@/model/contact.model';
import { HomeService } from './HomeService';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import { pipe } from 'rxjs';

export default defineComponent({
  data(){
    return{
      id: 0,
      contact: new ContactModel() // Fornecer um objeto vazio inicialmente, ou com dados padrão se necessário
    };
  },
  computed:{
    service(){
      return new HomeService()
    }
  },
  methods: {
    getAllContacts(){
      this.service.contact.pipe().subscribe({next:(response) => this.contact = response})
      this.service.getContactById(this.id)
    }

  }
});
</script>
