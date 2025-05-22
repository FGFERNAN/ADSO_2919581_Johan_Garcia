package co.com.AutomatizacionFacebookPage.tasks;

import co.com.AutomatizacionFacebookPage.models.CredencialesInicioSesion;
import net.serenitybdd.core.steps.Instrumented;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;


import java.util.List;

import static co.com.AutomatizacionFacebookPage.userinterface.autenticacion.*;

public class Autenticarse implements Task {

    private List<CredencialesInicioSesion> credenciales;


    public  Autenticarse(List<CredencialesInicioSesion> credenciales){
        this.credenciales = credenciales;
    }

    public static Autenticarse aute(List<CredencialesInicioSesion> credenciales){
        return Instrumented.instanceOf(Autenticarse.class).withProperties(credenciales);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Click.on(INPUT_NAME),
                Enter.theValue(credenciales.get(0).getNombre()).into(INPUT_NAME),
                Click.on(INPUT_LAST_NAME),
                Enter.theValue(credenciales.get(0).getApellidos()).into(INPUT_LAST_NAME),
                Click.on(INPUT_EMAIL),
                Enter.theValue(credenciales.get(0).getEmail()).into(INPUT_EMAIL),
                Click.on(BTN_GENDER),
                Click.on(INPUT_MOBILE),
                Enter.theValue(credenciales.get(0).getMobile()).into(INPUT_MOBILE),
                Click.on(INPUT_ADDRESS),
                Enter.theValue(credenciales.get(0).getCurrentAddress()).into(INPUT_ADDRESS),
                Click.on(BTN_SUBMIT));
    }
}

