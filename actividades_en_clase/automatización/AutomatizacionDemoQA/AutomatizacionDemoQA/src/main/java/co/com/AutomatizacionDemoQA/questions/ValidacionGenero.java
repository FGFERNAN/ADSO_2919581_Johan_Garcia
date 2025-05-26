package co.com.AutomatizacionDemoQA.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionDemoQA.userInterface.Registro.BTN_GENDER;
import static jxl.biff.FormatRecord.logger;

public class ValidacionGenero implements Question<Boolean> {
    public static ValidacionGenero validacionGenero() {
        return new ValidacionGenero();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Text.of(BTN_GENDER).viewedBy(actor).asString();
            return "Male".equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
