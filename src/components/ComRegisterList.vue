<template>
  <table class="crud-table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in tableData" :key="index">
        <td>{{ entry.nombre }}</td>
        <td>{{ entry.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    tableData: {
      type: Array as () => Array<{ nombre: string; email: string }>,
      required: true
    }
  },
});
</script>

<style scoped>
.crud-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px; /* Agregar un espacio entre la tabla y otros elementos */
}

.crud-table th,
.crud-table td {
  padding: 12px; /* Aumentar el padding para una apariencia más espaciada */
  text-align: left;
  color: #000;
  border-bottom: 1px solid #ddd;
}

.crud-table th {
  background-color: #f8f9fa; /* Cambiar el color de fondo de los encabezados */
  color: #212529; /* Cambiar el color del texto de los encabezados */
  font-weight: bold; /* Hacer que el texto de los encabezados sea negrita */
}

.crud-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.crud-table tbody tr:hover {
  background-color: #e9ecef; /* Cambiar el color de fondo al pasar el cursor */
}

</style>

