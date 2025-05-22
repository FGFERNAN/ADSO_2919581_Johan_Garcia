package co.com.AutomatizacionFacebookPage.utils.hooks;

import cucumber.api.java.Before;
import net.serenitybdd.screenplay.actors.OnlineCast;

import static net.serenitybdd.screenplay.actors.OnStage.setTheStage;
import static net.serenitybdd.screenplay.actors.OnStage.theActorCalled;

public class preparacionEscenario {

    @Before

    public void sepUp() {
        setTheStage(new OnlineCast());
        theActorCalled("usuario");
    }
}
