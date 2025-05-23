package co.com.AutomatizacionDemoQA.userInterface;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class Registro extends PageObject {
    public static Target INPUT_NAME = Target.the(" Ingreso del nombre").located(By.id("firstName"));
    public static Target INPUT_LAST_NAME = Target.the("Ingreso del apellido").located(By.id("lastName"));
    public static Target INPUT_EMAIL = Target.the("Ingreso del email").located(By.id("userEmail"));
    public static Target BTN_GENDER = Target.the("Click Boton de genero").located(By.xpath("//*[@id=\"genterWrapper\"]/div[2]/div[1]/label"));
    public static Target INPUT_MOBILE = Target.the("Ingreso del telefono").located(By.id("userNumber"));
    public static Target INPUT_DATE = Target.the("Ingreso de la fecha").located(By.id("dateOfBirthInput"));
    public static Target INPUT_VDATE = Target.the("Ingreso de la fecha").located(By.xpath("/html/body/div[2]/div/div/div/div[2]/div[2]/form/div[5]/div[2]/div[2]/div[2]/div/div/div[2]/div[2]/div[6]/div[3]"));
    public static Target INPUT_PAGE = Target.the("Salir del input de fecha").located(By.id("dateOfBirth"));
    public static Target INPUT_HOBBIES = Target.the("Click Boton del hobbie").located(By.xpath("//*[@id=\"hobbiesWrapper\"]/div[2]/div[1]/label"));
    public static Target INPUT_HOBBIES1 = Target.the("Click Boton del hobbie 1").located(By.xpath("//*[@id=\"hobbiesWrapper\"]/div[2]/div[3]/label"));
    public static Target INPUT_ADDRESS = Target.the("Ingreso de la dirección").located(By.id("currentAddress"));
    public static Target BTN_SUBMIT = Target.the("Click Boton de enviar").located(By.id("submit"));
    public static Target MENSAJE_REGISTRO = Target.the("mensaje de registro").located(By.xpath("//*[@id=\"example-modal-sizes-title-lg\"]"));
}
