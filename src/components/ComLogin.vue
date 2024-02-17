<template>
  <main class="main">
    <form @submit.prevent="submitForm" class="formulario">
      <h1>Inicio de Sesión</h1>
      <div class="campo">
        <label for="correo" class="label">Correo Electrónico:</label>
        <input type="text" id="correo" v-model="correo" @input="validarCorreo" class="input" :class="{ error: !correoValido && correo.length > 0 }" required>
        <span v-if="!correoValido" class="mensaje-error">Por favor, introduce un correo electrónico válido.</span>
      </div>
      <div class="campo">
        <label for="contraseña" class="label">Contraseña:</label>
        <input type="password" id="contraseña" v-model="contraseña" @input="validarContraseña" class="input" :class="{ error: !contraseñaValida && contraseña.length > 0 }" required>
        <span v-if="!contraseñaValida" class="mensaje-error">La contraseña debe tener entre 5 y 18 caracteres.</span>
      </div>
      <button type="submit" :disabled="!validarFormulario()" class="boton">Iniciar Sesión</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const correo = ref('');
const contraseña = ref('');
const enviado = ref(false);
const correoValido = ref(true);
const contraseñaValida = ref(true);
const router = useRouter();

const redirectToCrud = () => {
  router.push({ path: '../registro' });
};

const validarCorreo = () => {
  correoValido.value = /\S+@\S+\.\S+/.test(correo.value);
}

const validarContraseña = () => {
  contraseñaValida.value = contraseña.value.length >= 5 && contraseña.value.length <= 18;
}

const validarFormulario = () => {
  return correoValido.value && contraseñaValida.value;
}

const submitForm = () =>{
  if (correo.value === 'correo@example.com' && contraseña.value === 'contraseña123') {
    enviado.value = true;
    redirectToCrud();
  } else {
    alert('Correo o contraseña incorrectos');
  }
}
</script>

<style scoped>
/* Estilos generales */
.main {
  font-family: 'Arial', sans-serif;
  padding: 80px;
  margin-top: 5rem;
}

h1 {
  font-size: 28px; 
  margin-bottom: 30px; 
  color: #ffffff;
  font-weight: bold;
  text-align: center;
}

.input {
  width: 100%;
  padding: 16px; 
  font-size: 18px; 
  margin-bottom: 15px; 
  border: 1px solid #ccc;
  border-radius: 8px; 
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.input:focus {
  border-color: #41b883;
}

.formulario {
  background-color: #34495e;
  padding: 40px; 
  border-radius: 15px; 
  margin: 0 auto;
  max-width: 500px; 
}

.campo {
  margin-bottom: 30px; 
}

.label {
  font-weight: bold;
  display: block;
  margin-bottom: 10px; 
  color: #ffffff;
}

.boton {
  background-color: #41b883;
  color: #fff;
  padding: 16px 24px; 
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 18px; 
}

.boton:hover {
  background-color: #32a672;
  color: #fff;
}

.mensaje-error {
  color: rgb(255, 255, 255);
  font-size: 16px; 
  display: block;
  margin-top: 5px;
}

.error {
  border-color: #f00;
}
</style>

