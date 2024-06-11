<template>
    <div>
      <h1 class="text-2xl font-bold">{{ contact?.name }}</h1>
      <p><strong>Telefone:</strong> {{ contact?.phone }}</p>
      <router-link to="/" class="text-blue-500">Voltar para a Lista</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  
  interface Contact {
    id: number;
    name: string;
    phone: string;
  }
  
  export default defineComponent({
    data() {
      return {
        contact: null as Contact | null
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
        this.contact = contacts.find(contact => contact.id === id) || null;
      }
    }
  });
  </script>
  