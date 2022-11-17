package com.outlook.teles.dario;

import com.outlook.teles.dario.Singleton.SingletonEager;
import com.outlook.teles.dario.Singleton.SingletonLazy;
import com.outlook.teles.dario.Singleton.SingletonLazyHolder;
import com.outlook.teles.dario.Strategy.*;
import com.outlook.teles.dario.facade.Facade;

public class Teste {
    public static void main(String[] args) {
        //Singleton
        System.out.println("Testes Singleton");
        SingletonLazy lazy = SingletonLazy.getInstance();
        System.out.println(lazy);
        lazy = SingletonLazy.getInstance();
        System.out.println(lazy);

        SingletonEager eager = SingletonEager.getInstance();
        System.out.println(eager);
        eager = SingletonEager.getInstance();
        System.out.println(eager);

        SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstance();
        System.out.println(lazyHolder);
        lazyHolder = SingletonLazyHolder.getInstance();
        System.out.println(lazyHolder);

        //Strategy
        System.out.println("Testes Strategy");
        Comportamento normal = new ComportamentoNormal();
        Comportamento defensivo = new ComportamentoDefensivo();
        Comportamento agressivo = new ComportamentoAgressivo();

        Robo robo = new Robo();

        robo.setComportamentoStrategy(normal);
        robo.mover();

        robo.setComportamentoStrategy(defensivo);
        robo.mover();

        robo.setComportamentoStrategy(agressivo);
        robo.mover();

        //Strategy
        System.out.println("Testes Facade");
        Facade facade = new Facade();
        facade.migrarCliente("Dário", "01123-123");

    }
}
