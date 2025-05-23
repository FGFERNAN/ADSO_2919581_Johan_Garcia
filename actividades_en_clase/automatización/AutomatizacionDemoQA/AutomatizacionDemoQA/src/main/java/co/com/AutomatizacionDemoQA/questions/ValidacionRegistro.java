package co.com.AutomatizacionDemoQA.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

import static co.com.AutomatizacionDemoQA.userInterface.Registro.MENSAJE_REGISTRO;
import static jxl.biff.FormatRecord.logger;

public class ValidacionRegistro implements Question<Boolean> {
    public static ValidacionRegistro ValidacionRegistro() {
        return new ValidacionRegistro();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        try {
            String texto = Text.of(MENSAJE_REGISTRO).viewedBy(actor).asString();
            return "Thanks for submitting the form".equals(texto);
        } catch (Exception e) {
            logger.info("No encontró el texto o hubo otro error");
            return false;
        }
    }
}
