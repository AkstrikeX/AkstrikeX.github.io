package Aparencia;
import java.util.List;
import java.util.Scanner;

import Negocio.*;

public class Sistema {
    Administrador administrador;
    Scanner in = new Scanner(System.in);

    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }

    Sistema(Administrador administrador) {
        setAdministrador(administrador);
    }

    void adicionarHotel() {
        System.out.println("Insira nome do hotel:");
        String nome = in.nextLine();

        System.out.println("Insira endereço do hotel:");
        String endereco = in.nextLine();

        administrador.adicionarHotel(nome, endereco);
    }

    void removerHotel() {
        System.out.println("Insira nome do hotel:");
        String nome = in.nextLine();

        administrador.removerHotel(nome);
    }

    void listarHoteis() {
        List<Hotel> hoteis = administrador.getListaHoteis();

        for (Hotel hotel : hoteis) {
            System.out.println(hotel);
        }
    }

    void adicionarQuarto() {

        System.out.println("Insira nome do hotel:");
        String nome = in.nextLine();

        Hotel hotel = administrador.getHotel(nome);

        if (hotel == null) {
            System.out.println("Hotel não cadastrado.");
            return;
        }
        
        System.out.println("Insira numero do quarto:");
        String numero = in.nextLine();

        System.out.println("Insira tipo do quarto:");
        String tipo = in.nextLine();

        System.out.println("Insira valor da diária:");
        double preco = in.nextDouble();
        in.nextLine();


        hotel.adicionarQuarto(numero, preco, tipo);
    }

    void listarQuartosDisponiveis(){

        System.out.println("Insira nome do hotel:");
        String nome = in.nextLine();

        Hotel hotel = administrador.getHotel(nome);

        if (hotel == null) {
            System.out.println("Hotel não cadastrado.");
            return;
        }
        
        hotel.listarQuartosDisponiveis();

    }

    void adicionarCliente() {
        System.out.println("Insira nome do cliente:");
        String nome = in.nextLine();

        System.out.println("Insira email do cliente:");
        String email = in.nextLine();

        System.out.println("Insira telefone do cliente:");
        String telefone = in.nextLine();

        administrador.adicionarCliente(nome, email, telefone);
        
    }
    void fazerReserva() {

        System.out.println("Insira o nome do hotel:");
        String nomeHotel = in.nextLine();

        Hotel hotel = administrador.getHotel(nomeHotel);

        if (hotel == null) {
            System.out.println("Hotel não cadastrado.");
        }

        System.out.println("Insira nome do cliente:");
        String nome = in.nextLine();
        
        Cliente cliente = administrador.getCliente(nome);

        if (cliente == null) {
            System.out.println("Cliente não cadastrado.");
            return;
        }

        System.out.println("Insira o numero do quarto:");
        String numeroQuarto = in.nextLine();

        Quarto quarto = hotel.getQuarto(numeroQuarto);

        if (quarto == null) {
            System.out.println("Quarto não cadastrado.");
            return;
        }

        System.out.println("Insira a data e a hora prevista de entrada no formato 00/00/0000 00:00  :");
        String dataCheckIn = in.nextLine();

        System.out.println("Insira a data e a hora prevista de saída no formato 00/00/0000 00:00  :");
        String dataCheckOut = in.nextLine();

        cliente.fazerReserva(hotel, quarto, dataCheckIn, dataCheckOut);     
    }

    void cancelarReserva() {
        System.out.println("Insira o nome do hotel:");
        String nomeHotel = in.nextLine();

        Hotel hotel = administrador.getHotel(nomeHotel);

        if (hotel == null) {
            System.out.println("Hotel não cadastrado.");
            return;
        }

        System.out.println("Insira o nome do cliente:");
        String nomeCliente = in.nextLine();

        Cliente cliente = administrador.getCliente(nomeCliente);

        if (cliente == null) {
            System.out.println("Cliente não cadastrado.");
            return;
        }


        System.out.println("Insira o numero do quarto:");
        String numeroQuarto = in.nextLine();

        cliente.cancelarReserva(hotel, numeroQuarto);
    }
    
    void listarReservasCliente() {
        System.out.println("Insira o nome do hotel:");
        String nomeHotel = in.nextLine();

        Hotel hotel = administrador.getHotel(nomeHotel);

        if (hotel == null) {
            System.out.println("Hotel não cadastrado.");
            return;
        }

        System.out.println("Insira o nome do cliente:");
        String nomeCliente = in.nextLine();

        hotel.listarReservasCliente(nomeCliente);
    }

}   
