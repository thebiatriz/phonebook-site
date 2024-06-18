<template>
    <div class="max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-4">Adicionar Novo Contato</h1>
      <form @submit.prevent="addContact" class="space-y-4">
        <div>
          <label for="name" class="block mb-1">Nome:</label>
          <input id="name" v-model="newContact.name" required class="border rounded p-2 w-full" />
        </div>
        <div>
          <label for="phone" class="block mb-1">Telefone:</label>
          <input id="phone" v-model="newContact.phoneNumber" required class="border rounded p-2 w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1">Email:</label>
          <input id="email" v-model="newContact.email" class="border rounded p-2 w-full mb-8"/>
        </div>
        <div class="flex flex-col space-y-3 w-32 mx-auto">
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Adicionar</button>
        <router-link to="/" class="text-blue-500 text-center">Voltar</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ContactModel } from "./../model/contact.model";
  import { from } from 'rxjs';
  import { ContactRest } from './../service/rest/contact.rest'
  
  export default defineComponent({

    data() {
      return {
        newContact: new ContactModel()
      };
    },   
    methods: {
    addContact(){
      const contactRest = new ContactRest();
      from(contactRest.postContact(this.newContact as ContactModel)).subscribe({
        next: response => {
          console.log('Contato adicionado:', response);
          this.newContact = { name: '', phoneNumber: '', email: '' };
          this.$router.push('/');              
        }
      });
    }
  }
});
  </script>
