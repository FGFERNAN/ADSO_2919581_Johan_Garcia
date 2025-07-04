package co.com.AutomatizacionFacebookPage.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "src/test/resources/features/autenticacionlogin_facebook.feature",
        glue = {"co.com.AutomatizacionFacebookPage.stepsdefinitions", "co.com.AutomatizacionFacebookPage.utils.hooks"},
        snippets = SnippetType.CAMELCASE)

public class AutenticacionFacebookRunner {
}
