<template>
  <div class="bg-custom">
    <!-- Navbar for mobile -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Menú</a>
      </div>
    </nav>

    <!-- Offcanvas for mobile menu -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav flex-column">
          <!-- Usamos router-link para redirigir en Vue -->
          <li class="nav-item">
            <router-link to="/perfil-completo" class="nav-link mi-link">
              <i class="fa-solid fa-home me-1"></i> Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/administrar-usuarios" class="nav-link mi-link">
              <i class="fa-solid fa-user-cog me-1"></i> Guerreros
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar for larger screens -->
        <div class="col-md-3 custom-col d-none d-lg-block">
          <img src="../assets/img/logos/logotipo.png" class="logo-inicio" width="300" />
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/perfil-completo" class="nav-link mi-link">
                <i class="fa-solid fa-home me-1"></i> Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/administrar-usuarios" class="nav-link mi-link">
                <i class="fa-solid fa-user-cog me-1"></i> Guerreros
              </router-link>
            </li>
          </ul>
        </div>

        <div class="col custom-col-main">
          <header>
            <div class="header d-flex justify-content-end align-items-center p-3">
              <div class="d-flex align-items-center">
                <span>Administrador</span>
                <a href="perfil.html" class="ms-3">
                  <img src="../assets/img/mariposa34.jpg" alt="Perfil" class="rounded-circle" width="40" />
                </a>
              </div>
            </div>
          </header>

          <section class="container-fluid mt-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex align-items-center">
                <h2>Guerreros</h2>
                <!-- Usamos router-link para redirigir -->
                <button class="btn btn-success ms-3" @click="redirectToRecoverWarrior"><i
                    class="fa-solid fa-plus me-1"></i></button>
              </div>
              <div class="d-flex align-items-center">
                <input v-model="searchQuery" type="text" class="form-control" placeholder="Buscar Guerreros">
              </div>
            </div>

            <!-- Table responsive container -->
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>warriorID</th>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Race Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(warrior) in filteredUser" :key="warrior.warriorID">
                    <td>{{ warrior.warriorID }}</td>
                    <td>{{ warrior.name }}</td>
                    <td>{{ warrior.level }}</td>
                    <td>{{ warrior.raceTypeID }}</td>
                    <td>
                      <!-- Usamos el método redirectToEditUser para redirigir a editar usuario -->
                      <button class="btn btn-sm btn-secondary" @click="redirectToEditWarrior(warrior.warriorID)"><i
                          class="fa-solid fa-pen"></i></button>
                      <button class="btn btn-sm btn-danger btn-eliminar" @click="deleteWarrior(warrior.warriorID)"><i class="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
  mounted() {
    document.title = "Guerreros | TaskMaster Pro";
    this.getWarriors();
  },
  data() {
    return {
      searchQuery: '',
      warriors: []
    };
  },
  computed: {
    filteredUser() {
      return this.warriors.filter(warrior => warrior.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  methods: {
    async getWarriors() {
      try {
        const response = await api.get('/warrior');
        this.warriors = response.data.data;
        console.log(response.data);
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Error Get') {
            console.log(serverErrors.message);
            alert(serverErrors.message);
          } else {
            console.log('Ocurrio un error inesperado del lado del servidor: ', serverErrors);
            alert('Ocurrio un error inesperado del lado del servidor, revisa la consola para obtener más detalles');
          }
        }
      }
    },

    // Redirige a la página de crear usuario
    redirectToRecoverWarrior() {
      console.log('Redirigiendo a crear-usuario');
      this.$router.push('/crear-guerrero');
    },
    // Redirige a la página de editar usuario
    redirectToEditWarrior(warriorID) {
      this.$router.push({ name: 'EditarGuerrero', params: { warriorID: warriorID }});
    },
    async deleteWarrior(warriorID) {
      try {
        if (confirm('¿Estás seguro que deseas eliminar el usuario?')) {
        const response =  await api.delete(`/warrior/${warriorID}}`);
        this.warriors = this.warriors.filter(warrior => warrior.warriorID !== warriorID);
        console.log(response.data.message);
        alert(response.data.message);
      }
      } catch (error) {
        if(error.response && error.response.data){
          const serverErrors = error.response.data;
          if(serverErrors.message === 'User not exists'){
            console.log(serverErrors.message);
            alert(serverErrors.message);
          } else if (serverErrors.message === 'Usuario no eliminado'){
            console.log(serverErrors.message);
            alert(serverErrors.message);
          } else if(serverErrors.message === 'Error deleting user: '){
            console.log('Ocurrio un error inesperado del lado del servidor: ', serverErrors);
            alert('Ocurrio un error inesperado del lado del servidor, revisa la consola para obtener más detalles');
          } else{
            console.log(error.response.data);
            alert(error.response.data.mensaje);
          }
        }
      }
    }
  }
};
</script>
