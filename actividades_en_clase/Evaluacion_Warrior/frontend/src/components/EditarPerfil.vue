<template>
  <div class="bg-custom">
    <div class="container-fluid">
      <div class="row no-gutters header-custom">
        <div class="col-12 d-flex align-items-center justify-content-between p-3">
          <button class="btn btn-primary buton-regresar" @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path
                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            <span class="button-text"> Regresar</span>
          </button>
          <h1 class="mb-0 text-center flex-grow-1">
            <i class="fa-solid fa-user-pen me-2"></i> <!-- Ícono de comentario de Bootstrap -->
            Editar Perfil
          </h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
        </div>
      </div>

      <form ref="form" @submit.prevent="editProfile"
        class="container form-create-project-editar-perfil needs-validation" novalidate>
        <div class="row mb-4"></div>

        <!-- Nombre -->
        <div class="row mb-3">
          <label for="nombre" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="data.nombre" class="form-control border-input" placeholder="Name"
                aria-label="Username" id="nombre" aria-describedby="basic-addon1" minlength="5" required />
              <div class="invalid-feedback">
                Por favor ingrese el nombre.
              </div>
            </div>
          </div>
        </div>

        <!-- Apellido -->
        <div class="row mb-3">
          <label for="apellidos" class="col-sm-2 col-form-label">Apellido:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                </svg>
              </span>
              <input type="text" v-model="data.apellidos" id="apellidos" class="form-control border-input"
                placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1" minlength="5" required />
              <div class="invalid-feedback">
                Por favor ingrese el apellido.
              </div>
            </div>
          </div>
        </div>

        <!-- Correo Electrónico -->
        <div class="row mb-3">
          <label for="email" class="col-sm-2 col-form-label">Correo Electrónico:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-at"></i></span>
              <input type="email" v-model="data.email" id="email" class="form-control border-input" placeholder="Email"
                aria-label="Username" aria-describedby="basic-addon1" minlength="15" maxlength="150" required />
              <div class="invalid-feedback">
                Por favor ingrese el correo electrónico (máximo 150 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Contraseña -->
        <div class="row mb-3">
          <label for="password" class="col-sm-2 col-form-label">Contraseña:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
              <input :type="passwordFieldType" v-model="data.password" id="password" class="form-control border-input"
                placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" minlength="8"
                maxlength="20" required />
              <button class="btn btn-outline-secondary border-input" type="button" @click="togglePasswordVisibility">
                <i :class="passwordVisible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
              </button>
              <div class="invalid-feedback">
                Por favor ingrese la contraseña (máximo 20 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Número de Celular -->
        <div class="row mb-3">
          <label for="numeroCelular" class="col-sm-2 col-form-label">Número de Celular:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-phone"></i></span>
              <input type="number" id="numeroCelular" class="form-control border-input" v-model="data.telefono"
                placeholder="Phone Number" min="1000000000" max="9999999999" required />
              <div class="invalid-feedback">
                Por favor ingrese el número de celular (10 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Tipo Documento -->
        <div class="row mb-3">
          <label for="tipo_documento" class="col-sm-2 col-form-label">Tipo Documento:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-id-card"></i></span>
              <select v-model="data.tipo_documento" id="tipo_documento" class="form-select border-input" required>
                <option value="" disabled>Seleccionar</option>
                <option value="1">Tarjeta de Identidad</option>
                <option value="2">Cédula de Ciudadanía</option>
                <option value="3">Cedula de Extranjeria</option>
              </select>
              <div class="invalid-feedback">
                Por favor seleccione un tipo de documento.
              </div>
            </div>
          </div>
        </div>

        <!-- Foto de perfil (al final del formulario) -->
        <div class="profile-pic-container mb-4">
          <div class="profile-pic">
            <!-- <img alt="Profile Picture" /> -->
            <div>Foto</div>
            <label class="edit-icon" for="fileInput">
              <i class="fas fa-plus" id="icon-plus"></i>
            </label>
            <input type="file" id="fileInput" accept="image/*" style="display: none;" />
          </div>
          <span class="text-muted">Foto de perfil</span>
        </div>

        <!-- Botones -->
        <div class="buttons">
          <div class="d-grid gap-2 col-3 mx-auto">
            <button class="btn btn-primary buton-form mb-4" type="submit">Confirmar</button>
          </div>
          <button type="button" class="btn btn-danger mb-4 fw-bold">Cancelar
            Cuenta</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
  mounted() {
    document.title = "Editar Perfil | TaskMaster Pro";
    this.getData();
  },
  data() {
    return {
      data: [],
      passwordVisible: false,
    }
  },
  computed: {
    // Computed property para cambiar el tipo del input
    passwordFieldType() {
      return this.passwordVisible ? 'text' : 'password';
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Navegar hacia atrás
    },
    async getData() {
      try {
        const response = await api.get('/editProfile');
        this.data = response.data.data;
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Usuario no encontrado') {
            console.log(serverErrors);
            alert(`${serverErrors.message} en la base de datos`);
          } else if (serverErrors.message === 'Error fetching data: ') {
            console.log(serverErrors);
            alert(`Ocurrio un error inesperado del lado del servidor: ${serverErrors.message}, vuelve a intentar más tarde`);
          } else {
            console.log(error.response);
            alert(error.response.data.mensaje)
          }
        }
      }
    },
    async editProfile() {
      const form = this.$refs.form;
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      try {
        const response = await api.post('/editProfile', this.data);
        console.log(response.data);
        alert(response.data.message);
        this.$router.push('/perfil-completo');
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Perfil no actualizado') {
            console.log(serverErrors);
            alert(`${serverErrors.message}, ingresa los parametros necesarios para realizar esta acción`);
          } else if (serverErrors.message === 'Unregistered user') {
            console.log(serverErrors);
            alert(`${serverErrors.message}, el usuario que intentas actualizar no se encuentra en la base de datos.`);
          } else if (serverErrors.message === 'Error updating profile: ') {
            console.log(serverErrors);
            alert(`Ocurrio un error inesperado del lado del servidor: ${serverErrors.message}, vuelve a intentar más tardes`);
          } else {
            console.log(error.response);
            alert(error.response.data.mensaje);
          }
        }
      }
    },
    togglePasswordVisibility() {
      // Cambia el estado de visibilidad de la contraseña
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>
<style scoped>
@import "@/../../assets/css/EditarPerfil.css";
</style>
