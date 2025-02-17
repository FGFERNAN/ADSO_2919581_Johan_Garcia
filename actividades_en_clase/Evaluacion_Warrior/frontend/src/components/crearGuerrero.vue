<template>
  <div class="bg-custom">
    <div class="container-fluid">
      <!-- Header -->
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
            <i class="fa-solid fa-user-plus me-2"></i>
            Crear Guerrero
          </h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
        </div>
      </div>
      <form ref="form" @submit.prevent="handleSubmit" class="container form-create-project-editar-perfil needs-validation"
        novalidate>
        <div class="row mb-4"></div>
        <!-- Nombre -->
        <div class="row mb-3">
          <label for="nombreUsuario" class="col-sm-2 col-form-label">Name:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <i class="fa-solid fa-user"></i>
              </span>
              <input type="text" class="form-control border-input" id="nombreUsuario" placeholder="Name"
                v-model="name" minlength="5" required />
              <div class="invalid-feedback">
                Por favor ingrese el nombre.
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label for="numeroCelular" class="col-sm-2 col-form-label">Level:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input"><i class="fa-solid fa-phone"></i></span>
              <input type="number" id="numeroCelular" class="form-control border-input" v-model="level"
                placeholder="Level" min="1" max="999" required />
              <div class="invalid-feedback">Por favor ingrese el número de nivel.</div>
            </div>
          </div>
        </div>

        <!-- Nuevo campo: Rol -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label ">Race Type:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
                  <path
                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.043c-.612-.18-.612-1.048 0-1.229l.149-.043a.64.64 0 0 0 .38-.921l-.074-.136c-.306-.561.309-1.175.87-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.149zM8 12.5c.301 0 .578-.143.78-.381.173-.181.38-.3.599-.3s.426.119.599.3c.202.238.479.381.78.381.584 0 1.057-.473 1.057-1.057 0-.24-.085-.459-.228-.638-.142-.18-.336-.311-.56-.394 0 0-.736-.383-.628-.318-.176.033-.324.136-.496.243-.211.137-.392.346-.497.582-.065.13-.111.27-.147.419-.043-.074-.085-.152-.134-.232-.015-.003-.035-.008-.05-.008s-.036.005-.05.008c-.05.08-.09.158-.134.232-.036-.149-.082-.289-.147-.419-.105-.236-.286-.445-.497-.582-.172-.107-.32-.21-.496-.243-.108-.065-.148.145-.628.318-.225.083-.418.214-.56.394-.143.179-.228.398-.228.638 0 .584.473 1.057 1.057 1.057z" />
                </svg></span>
                <select id="rol" class="form-select border-input" v-model="raceTypeID" required>
                <option value="" selected disabled>Seleccionar</option>
                <option value="1">Gladiador</option>
              </select>
            </div>
          </div>
        </div>

        <div class="d-grid gap-2 col-3 mx-auto">
          <button class="btn btn-primary buton-form mb-4" id="guardar" type="submit">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import api from '@/services/api';
export default {
  mounted() {
    document.title = "Crear Guerrero | TaskMaster Po";
  },
  data() {
    return {
      formData: {
        name: "",
        level: "",
        raceTypeID: "",
      },
    };
  },
  methods: {
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
        const response = await api.post("/warrior", {
          name: this.name,
          level: this.level,
          raceTypeID: this.raceTypeID,
        });
        console.log(response.data);
        alert(response.data.message);
        this.$router.push("/administrar-guerreros");
      } catch (error) {
        if(error.response && error.response.data){
          const serverErrors = error.response.data;
          if(serverErrors.message === 'Error Post '){
            console.log(serverErrors.message);
            alert('Ingresa los parametros necesarios para realizar la creación');
          } else {
           console.log('Ocurrio un error inesperado del lado del servidor: ', serverErrors);
            alert('Ocurrio un error inesperado del lado del servidor, revisa la consola para obtener más detalles');
          }
        }
      }
    },
  },
};
</script>
<style scoped>
@import "@/../../assets/css/EditarPerfil.css";
</style>
