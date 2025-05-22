package co.com.AutomatizacionDemoQA.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "src/test/resources/features/registro_demoQA.feature",
        glue = {"co.com.AutomatizacionDemoQA.stepsDefinitions", "co.com.AutomatizacionDemoQA.utils.hooks"},
        snippets = SnippetType.CAMELCASE)

public class RegistroDemoQARunner {
}

