package com.outlook.teles.dario.facade.subsistemaCRM;

public class CEPApi {
    private static CEPApi instancia = new CEPApi();

    private CEPApi() {
        super();
    }

    public static CEPApi getInstance(){
        return instancia;
    }

    public String recuperarCidade(String cep){
        return "Araraquara";
    }

    public String recuperarEstado(String cep){
        return "SP";
    }


}
