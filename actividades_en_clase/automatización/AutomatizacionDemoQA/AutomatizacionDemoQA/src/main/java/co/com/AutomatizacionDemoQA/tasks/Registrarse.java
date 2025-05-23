package co.com.AutomatizacionDemoQA.tasks;

import co.com.AutomatizacionDemoQA.models.DatosRegistro;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;

import java.util.List;

import static co.com.AutomatizacionDemoQA.userInterface.Registro.*;

public class Registrarse implements Task {

    private List<DatosRegistro> datos;

    public  Registrarse(List<DatosRegistro> datos){
        this.datos = datos;
    }

    public static Registrarse aute(List<DatosRegistro> datos){
        return Instrumented.instanceOf(Registrarse.class).withProperties(datos);
    }
    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(INPUT_NAME),
                Enter.theValue(datos.get(0).getNombre()).into(INPUT_NAME),
                Click.on(INPUT_LAST_NAME),
                Enter.theValue(datos.get(0).getApellidos()).into(INPUT_LAST_NAME),
                Click.on(INPUT_EMAIL),
                Enter.theValue(datos.get(0).getEmail()).into(INPUT_EMAIL),
                Click.on(BTN_GENDER),
                Click.on(INPUT_MOBILE),
                Enter.theValue(datos.get(0).getMobile()).into(INPUT_MOBILE),
                Click.on(INPUT_DATE),
                Click.on(INPUT_VDATE),
                Click.on(INPUT_PAGE),
                Click.on(INPUT_HOBBIES),
                Click.on(INPUT_HOBBIES1),
                Click.on(INPUT_ADDRESS),
                Enter.theValue(datos.get(0).getCurrentAddress()).into(INPUT_ADDRESS),
                Click.on(BTN_SUBMIT));
    }

}
