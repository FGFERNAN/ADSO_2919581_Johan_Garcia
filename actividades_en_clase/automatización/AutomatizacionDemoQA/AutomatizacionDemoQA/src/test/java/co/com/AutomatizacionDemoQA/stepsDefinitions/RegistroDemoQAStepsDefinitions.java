package co.com.AutomatizacionDemoQA.stepsDefinitions;

import co.com.AutomatizacionDemoQA.models.DatosRegistro;
import co.com.AutomatizacionDemoQA.questions.ValidacionRegistro;
import co.com.AutomatizacionDemoQA.tasks.AbrirPagina;
import co.com.AutomatizacionDemoQA.tasks.Registrarse;
import cucumber.api.DataTable;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import java.util.List;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class RegistroDemoQAStepsDefinitions {
    @Dado("^que el usuario se encuentra en la pagina de inicio de registro de DemoQA$")
    public void queElUsuarioSeEncuentraEnLaPaginaDeInicioDeRegistroDeDemoQA() {
        theActorInTheSpotlight().wasAbleTo(AbrirPagina.laPagina());
    }

    @Cuando("^ingrese los campos obligatorios del formulario de registro y hace click en el boton Submit$")
    public void ingreseLosCamposObligatoriosDelFormularioDeRegistroYHaceClickEnElBotonSubmit(List<DatosRegistro> datos) {
        theActorInTheSpotlight().attemptsTo(Registrarse.aute(datos));
    }

    @Entonces("^el sistema debe mostrar un mensaje de confirmacion agradeciendo por el envio del formulario y una tabla con los datos diligenciados en el formulario$")
    public void elSistemaDebeMostrarUnMensajeDeConfirmacionAgradeciendoPorElEnvioDelFormulario() {
        theActorInTheSpotlight().should(seeThat(ValidacionRegistro.ValidacionRegistro()));
    }

}
