// Em HomeView.vue

<script lang="ts">
import { defineComponent } from 'vue';
import { Contact } from '@/model/contact.model';
import { HomeService } from './HomeService';

export default defineComponent({
  data(){
    return{
      teste: '',
      // contact: new Contact()
    }
  },
  computed:{
    service(){
      return new HomeService()
    }
  },
//   methods: {
//     getAllContacts(){
//       this.service.getContacts(this.teste).then((response:Contact))=>this.contact=response)
//     }
//   }
// });
</script>
