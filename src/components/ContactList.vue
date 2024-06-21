<template>
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">Lista de Contatos</h1>
    <router-link to="/add" class="text-blue-500 mb-12 inline-block">Adicionar Novo Contato</router-link>
    <ul>
      <li v-for="contact in contacts" :key="contact.id" class="mb-2 flex justify-between items-center">
        <router-link :to="'/contact/' + contact.id" class="text-blue-700">{{ contact.name }}</router-link>

        <div class="relative">
          <button @click="toggleMenu(contact.id!)" class="text-gray-500 hover:text-gray-700 scale-150">
            ⋮
          </button>

          <div v-if="menuOpen === contact.id" class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
            <div @click="editContact(contact.id)" class="block bg-green-600 text-white px-2 py-1 rounded cursor-pointer">
              Editar 
            </div>
            <div @click="confirmDelete(contact.id)" class="block bg-gray-600 text-white px-2 py-1 rounded cursor-pointer">
              Excluir 
            </div>          
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ContactModel } from '@/model/contact.model';
import { HomeService } from '@/views/Home/HomeService';
import Swal from 'sweetalert2';

export default defineComponent({
  name: 'ContactList',
  data() {
    return {
      contacts: [] as ContactModel[], //array vazia para ser preenchida
      menuOpen: null as number | null,
      homeService: new HomeService() //instância de HomeService para realizar operações relacionadas aos contatos
    };
  },
  created() {
    this.getContacts();
  },
  methods: {
    getContacts() {
      this.homeService.contact.subscribe({
        next: (contacts: ContactModel[]) => {
          this.contacts = contacts;
        },
        error: (error: any) => {
          console.error('Erro ao carregar contatos:', error);
        }
      });
      this.homeService.getContacts();
    },
    confirmDelete(id: number) {
      Swal.fire({
        title: 'Tem certeza que deseja apagar o contato?',
        text: "Essa ação não poderá ser revertida!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3daf7c',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tenho certeza',
        cancelButtonText: 'Cancelar',
        iconColor: '#FF7F50'
      }).then((result) => {
        if (result.isConfirmed) {
          this.homeService.deleteContact(id).subscribe({
            next: () => {
              this.getContacts();
              Swal.fire({
                title: 'Apagado!',
                text: 'Seu contato foi apagado.',
                icon: 'success',
                confirmButtonColor: '#3daf7c'
              });
            },
            error: (error: any) => {
              console.error('Erro ao apagar o contato:', error);
            }
          });
        }
      });
    },
    toggleMenu(id: number) {
      this.menuOpen = this.menuOpen === id ? null : id;
    },
    editContact(id: number) {
      this.$router.push(`/edit/${id}`);
    }
  }
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

button {
  margin-left: 10px;
}
</style>
