package com.outlook.teles.dario.facade;

import com.outlook.teles.dario.facade.subsistemaCEP.CRMService;
import com.outlook.teles.dario.facade.subsistemaCRM.CEPApi;

public class Facade {
    public void migrarCliente(String nome, String cep){
        String cidade = CEPApi.getInstance().recuperarCidade(cep);
        String estado = CEPApi.getInstance().recuperarEstado(cep);

        CRMService.gravarCliente(nome, cep, cidade, estado);
    }

}
