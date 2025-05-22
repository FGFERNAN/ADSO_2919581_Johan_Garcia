package co.com.AutomatizacionDemoQA.models;

public class DatosRegistro {
    private String nombre;

    private String apellidos;

    private String email;

    private String mobile;

    private String currentAddress;


    public String getNombre() {

        return nombre;
    }

    public void setNombre(String nombre) {

        this.nombre = nombre;
    }

    public String getApellidos() {

        return apellidos;
    }

    public void setApellidos(String apellidos) {

        this.apellidos = apellidos;
    }

    public String getEmail() {

        return email;
    }

    public void setEmail(String email) {

        this.email = email;
    }

    public String getMobile() {

        return mobile;
    }

    public void setMobile(String mobile) {

        this.mobile = mobile;
    }

    public String getCurrentAddress() {

        return currentAddress;
    }

    public void setCurrentAddress(String currentAddress) {

        this.currentAddress = currentAddress;
    }


    public DatosRegistro(String nombre, String apellidos, String email, String mobile, String currentAddress) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.mobile = mobile;
        this.currentAddress = currentAddress;
    }
}
