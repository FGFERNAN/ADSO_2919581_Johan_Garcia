<template>
  <div class="bg-custom">
    <!-- Contenedor de encabezado -->
    <div class="container-fluid">
      <div class="row no-gutters header-custom">
        <div class="col-12 d-flex align-items-center justify-content-between p-3">
          <button class="btn btn-primary buton-regresar" @click="goBack">
            <svg class="svg bi bi-caret-left-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 16 16">
              <path
                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            <span class="button-text"> Regresar</span>
          </button>
          <h1 class="mb-0 text-center flex-grow-1">
            <i class="fa-solid fa-user-plus me-2"></i> Creación de Rol
          </h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo">
        </div>
      </div>
      <form ref="form" @submit.prevent="handleSubmit" class="container-fluid form-create-project needs-validation" novalidate>
        <div class="row mb-4"></div>
        <div class="row mb-3">
          <label for="nombre" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-user-tag"></i></span>
              <input type="text" id="nombre" v-model="nombre" class="form-control border-input" placeholder="Name" aria-label="Username"
                aria-describedby="basic-addon1" maxlength="50" required />
              <div class="invalid-feedback">
                Por favor ingrese el nombre (máximo 50 caracteres).
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label for="descripcion" class="col-sm-2 col-form-label">Descripción:</label>
          <div class="col-sm-10 has-validation">
            <div class="form-floating mb-3">
              <textarea class="form-control border-input" id="descripcion" v-model="descripcion" placeholder="Leave a comment here" minlength="10" maxlength="1000"
                required></textarea>
              <label for="floatingTextarea">Description</label>
              <div class="invalid-feedback">Por favor ingrese la descripción (minimo 10 caracteres).</div>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary buton-form mb-4" type="submit">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
  data(){
    return {
      nombre: '',
      descripcion: '',
    };
  },
  methods: {
    // Redireccionar a otra vista al hacer clic en "Regresar"
    goBack() {
      this.$router.go(-1);
    },

    async handleSubmit() {
      const form = this.$refs.form;

      // Desactiva validación automática del navegador y aplica validación manual con Bootstrap
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      try {
        const response = await api.post("/role", {
          nombre: this.nombre,
          descripcion: this.descripcion,
        });
        console.log(response.data);
        alert(response.data.message);
        this.$router.push("/administrar-roles");
      } catch (error) {
        if(error.response && error.response.data){
          const serverErrors = error.response.data;
          if(serverErrors.message === 'Rol no creado'){
            console.log(serverErrors.message);
            alert('Ingresa los parametros necesarios para realizar la creación');
          } else if(serverErrors.message === 'Error creating role: '){
            console.log(serverErrors.message);
            alert('Ocurrio un error inesperado del lado del servidor, revisa la consola para obtener más detalles');
          } else if(serverErrors.mensaje === 'Usuario no autenticado'){
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a las funciones de esta ruta.`);
            this.$router.push('/iniciar-sesion');
          } else if(serverErrors.mensaje === 'No tienes permisos para realizar esta acción.'){
            console.log(serverErrors.mensaje);
            alert(serverErrors.mensaje);
          } else {
           console.log('Ocurrio un error inesperado del lado del servidor: ', serverErrors);
            alert('Ocurrio un error inesperado del lado del servidor, revisa la consola para obtener más detalles');
          }
        }
      }
    }
  },

  mounted() {
    document.title = "Crear Rol | TaskMaster Pro";
  },
};
</script>
<style scoped>
@import "@/../../assets/css/style.css";
</style>