package co.com.AutomatizacionFacebookPage.tasks;

import co.com.AutomatizacionFacebookPage.userinterface.inicioFacebook;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.Tasks;
import net.serenitybdd.screenplay.actions.Open;

public class AbrirPagina implements Task {

    inicioFacebook inicioFacebook;

    public static AbrirPagina laPagina() { return Tasks.instrumented(AbrirPagina.class); }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.wasAbleTo(Open.browserOn(inicioFacebook));

    }
}
