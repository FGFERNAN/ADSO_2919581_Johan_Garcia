import { createRouter, createWebHistory } from 'vue-router';
import administrarGuerreros from '../components/administrarGuerreros.vue';
import crearGuerrero from '../components/crearGuerrero.vue';
import PerfilCompleto from '../components/PerfilCompleto.vue';
import EditarPerfil from '../components/EditarPerfil.vue';
import administrarRazas from '../components/administrarRazas.vue';
import crearRol from '../components/crearRol.vue';
import EditarRol from '../components/EditarRol.vue';
import EditarGuerrero from '../components/EditarGuerrero.vue';


const routes = [
  { path: '/', component: PerfilCompleto }, // Ruta para iniciar sesión
 // Ruta para recuperar contraseña en minúsculas
  { path: '/administrar-guerreros', component: administrarGuerreros }, 
  { path: '/crear-guerrero', component: crearGuerrero },
  { path: '/perfil-completo', component: PerfilCompleto },
  { path: '/editar-perfil', component: EditarPerfil },
  { path: '/administrar-razas', component: administrarRazas },
  { path: '/crear-rol', component: crearRol},
  { path: '/editar-rol/:id', name: 'EditarRol', component: EditarRol, props: true },
  { path: '/editar-guerrero/:warriorID', name: 'EditarGuerrero', component: EditarGuerrero, props: true },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
