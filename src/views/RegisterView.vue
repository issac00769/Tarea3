<template>
    <div>
      <ComRegister @formSubmitted="handleFormSubmitted" />
      <!-- Utiliza v-if para condicionalmente mostrar la tabla -->
      <ComRegisterList v-if="showTable" :tableData="filteredData" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ComRegister from '@/components/ComRegister.vue';
  import ComRegisterList from '@/components/ComRegisterList.vue';
  
  export default defineComponent({
    components: {
      ComRegister,
      ComRegisterList
    },
    data() {
      return {
        savedData: [], 
        showTable: false 
      };
    },
    computed: {
      filteredData() {
       
        const uniqueData = this.savedData.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.nombre === value.nombre && t.email === value.email 
          ))
        );
        return uniqueData;
      }
    },
    methods: {
      handleFormSubmitted(formData) {
        
        const exists = this.savedData.some(
          entry => entry.nombre === formData.nombre || entry.email === formData.email
        );
        
     
        if (!exists) {
          this.savedData.push(formData);
          this.showTable = true; 
        }
      }
    }
  });
  </script>
  