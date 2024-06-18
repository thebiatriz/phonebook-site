import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'; 
/*importando duas funções do pacote vue router
createRouter cria uma instancia de roteador
createWebHistory cria uma instancia de historico de navegacao baseada em HTML5*/

//importando o componente ContactList.vue
import ContactList from '../components/ContactList.vue';

//importando o componente ContactDetail.vue 
import ContactDetail from '../components/ContactDetail.vue'

//importando o componente AddContact
import AddContact from '../components/AddContact.vue';

//importando o componente EditContact
import EditContact from '../components/EditContact.vue';

/*Esses componentes são páginas individuais da aplicação,
 que serão renderizadas quando as rotas correspondentes forem acessadas.
*/

const routes: Array<RouteRecordRaw> = [ //array de objetos, com as rotas da aplicação

  //path define o caminho da url referente ao component
  { path: '/', component: ContactList }, 
  { path: '/contact/:id', component: ContactDetail },
  { path: '/add', component: AddContact },
  { path: '/edit/:id', component: EditContact }

];

//criando uma instancia (variavel) com um objeto
//utiliza a funcao createRoute 

//objeto de configuracao para a funcao, com history
//chamando a funcao Web para armazenar o historico
const router = createRouter({
  history: createWebHashHistory(),
  routes, //lista de rotas definidas antes
});

export default router; //exportando a instancia do roteador
//assim, ela poderá ser importada em outras partes do
//projeto
