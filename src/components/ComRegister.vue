<template>
  <div>
    <button @click="mostrarFormulario = !mostrarFormulario" class="boton-toggle">
      {{ mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario' }}
    </button>
    <form v-if="mostrarFormulario" @submit.prevent="submitForm" class="formulario">
      <div class="campo">
        <label for="nombre" class="label">Nombre:</label>
        <input type="text" id="nombre" v-model="formData.nombre" required class="input">
      </div>
      <div class="campo">
        <label for="password" class="label">Contraseña:</label>
        <input type="text" id="password" v-model="formData.password" required class="input">
      </div>
      <div class="campo">
        <label for="email" class="label">Email:</label>
        <input type="email" id="email" v-model="formData.email" required class="input">
      </div>
      <button type="submit" class="boton">Guardar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      formData: {
        nombre: '',
        password: '',
        email: ''
      },
      mostrarFormulario: false
    };
  },
  methods: {
    async submitForm() {
      console.log('Datos guardados:', this.formData);
      this.$emit('formSubmitted', this.formData);
      this.formData = { 
        nombre: '', 
        email: '' 
      };
    }
  }
});
</script>

<style scoped>
/* Estilos generales */
.main {
  font-family: 'Arial', sans-serif;
  padding: 40px;
  margin-top: 5rem;
}

.formulario {
  display: flex; 
  flex-wrap: wrap; 
}

.campo {
  flex: 0 0 calc(33.33% - 10px); 
  margin-right: 10px; 
  margin-bottom: 10px; 
}

.campo:last-child {
  margin-right: 0; 
}

.label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #000000;
}

.input {
  width: 100%; 
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.input:focus {
  border-color: #41b883;
}

.boton-toggle {
  margin-bottom: 10px;
  padding: 10px 20px; 
  font-size: 16px; 
  background-color: #41b883;
  color: #fff;
  border: 2px solid transparent; 
  border-radius: 8px; 
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.boton-toggle:hover {
  background-color: #34495e;
}

.boton {
  background-color: #34495e;
  color: #fff;
  padding: 14px 24px;
  font-size: 18px;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  width: 100%; 
  transition: background-color 0.3s, border-color 0.3s; 
}

.boton:hover {
  background-color: #32a672;
}


</style>




