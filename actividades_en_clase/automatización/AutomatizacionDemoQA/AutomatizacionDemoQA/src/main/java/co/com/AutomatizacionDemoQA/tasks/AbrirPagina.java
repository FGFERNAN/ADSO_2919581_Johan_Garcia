package co.com.AutomatizacionDemoQA.tasks;

import co.com.AutomatizacionDemoQA.userInterface.inicioDemoQA;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.Tasks;
import net.serenitybdd.screenplay.actions.Open;

public class AbrirPagina implements Task {

    inicioDemoQA inicioDemoQA;

    public static AbrirPagina laPagina() { return Tasks.instrumented(AbrirPagina.class); }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.wasAbleTo(Open.browserOn(inicioDemoQA));

    }
}
