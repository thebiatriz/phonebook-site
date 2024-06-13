<template>
    <div class="max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-4">Editar Contato</h1>
      <form @submit.prevent="updateContact">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Nome</label>
          <input type="text" v-model="contact.name" id="name" class="w-full px-2 py-1 border rounded" required />
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700">Telefone</label>
          <input type="text" v-model="contact.phone" id="phone" class="w-full mb-8 px-2 py-1 border rounded" required />
        </div>

        <div class="flex flex-col space-y-3 w-32 mx-auto">
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Salvar</button>
        <router-link to="/" class="text-blue-500 text-center">Voltar</router-link>
        </div>

    </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  interface Contact {
    id: number;
    name: string;
    phone: string;
  }
  
  export default defineComponent({
    data() {
      return {
        contact: {} as Contact
      };
    },
    created() {
      this.loadContact();
    },
    methods: {
      loadContact() {
        const route = useRoute();
        const id = parseInt(route.params.id as string, 10);
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
        const contact = contacts.find(contact => contact.id === id);
        if (contact) {
          this.contact = contact;
        }
      },
      updateContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
        const updatedContacts = contacts.map(contact =>
          contact.id === this.contact.id ? this.contact : contact
        );
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        this.$router.push('/');
      }
    }
  });
  </script>
  
  <style scoped>
  /* Adicione seu estilo aqui, se necessário */
  </style>
  