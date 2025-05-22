package co.com.AutomatizacionFacebookPage.userinterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class autenticacion extends PageObject {
    public static Target INPUT_NAME = Target.the(" Ingreso del nombre").located(By.id("firstName"));
    public static Target INPUT_LAST_NAME = Target.the("Ingreso del apellido").located(By.id("lastName"));
    public static Target INPUT_EMAIL = Target.the("Ingreso del email").located(By.id("userEmail"));
    public static Target BTN_GENDER = Target.the("Click Boton de genero").located(By.xpath("//*[@id=\"genterWrapper\"]/div[2]/div[1]/label"));
    public static Target INPUT_MOBILE = Target.the("Ingreso del telefono").located(By.id("userNumber"));
    public static Target INPUT_ADDRESS = Target.the("Ingreso de la dirección").located(By.id("currentAddress"));
    public static Target BTN_SUBMIT = Target.the("Click Boton de enviar").located(By.id("submit"));

}