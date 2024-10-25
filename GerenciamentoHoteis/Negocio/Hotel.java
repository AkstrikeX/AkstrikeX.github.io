package Negocio;

import java.util.ArrayList;
import java.util.List;

public class Hotel {   

    private String nome;
    private String endereco;
    private List<Quarto> listaDeQuartos = new ArrayList<>();
    private List<Reserva> listaDeReservas = new ArrayList<>();

    // Construtor

    Hotel(String nome, String endereco) {
        setNome(nome);
        setEndereco(endereco);
    }

    Hotel(String nome, String endereco, List<Quarto> listaDeQuartos) {
        setNome(nome);
        setEndereco(nome);
        setListaDeQuartos(listaDeQuartos);
    }

    // Getters/Setters

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    
    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }


    public List<Quarto> getListaDeQuartos() {
        return listaDeQuartos;
    }

    public void setListaDeQuartos(List<Quarto> listaDeQuartos) {
        this.listaDeQuartos = listaDeQuartos;
    }

    public Quarto getQuarto(String numeroQuarto) {
        for (Quarto quarto : listaDeQuartos) {
            if (quarto.getNumero().equals(numeroQuarto)) {
                return quarto;
            }
        }
        return null;
    }


    public List<Reserva> getListaDeReservas() {
        return listaDeReservas;
    }

    // Metodos  

    public String adicionarQuarto(String numero, double preco, String tipo) {
        Quarto quarto = new Quarto(numero, preco, tipo);
        for (Quarto q : listaDeQuartos) {
            if (q.getNumero().equals(quarto.getNumero())) {
                return "Quarto existente.";
            }
        }
        
        this.listaDeQuartos.add(quarto);
        return "Adicionado."; 
    }


    public void removerQuarto(String numeroQuarto) {
        Quarto quartoAlvo = null;
        for (Quarto quarto : listaDeQuartos) {
            if (quarto.getNumero().equals(numeroQuarto)){
                quartoAlvo = quarto;
                break;
            }
        }
        
        listaDeQuartos.remove(quartoAlvo);
    }
    
    
    public void listarQuartos(boolean disponivel) {
        for (Quarto quarto : listaDeQuartos) {
            System.out.println(quarto);
        }
    }

    public void listarQuartosDisponiveis() {
        int count = 0;
        for (Quarto quarto : listaDeQuartos) {
            if (quarto.getEstaDisponivel()){
                System.out.println(quarto);
                count++;
            }
        }
        if (count == 0) {
            System.out.println("Nenhum quarto disponível");
        }
    }

    public String adicionarReserva(Reserva reserva) {
        for (Reserva r : listaDeReservas) {
            if (r.getQuarto().equals(reserva.getQuarto())) {
                return "Quarto já reservado.";
            }
        }
        this.listaDeReservas.add(reserva);
        return "Reserva criada.";
    }

    public void removerReserva(String numeroQuarto) {
        Reserva alvo = null;
        for (Reserva reserva : listaDeReservas) {
            if (reserva.getQuarto().getNumero().equals(numeroQuarto)) {
                alvo = reserva;
                break;
            }
        }
        
        listaDeReservas.remove(alvo);
    }

    public void listarReservasCliente(String nome) {
        int count = 0;
        for (Reserva reserva : listaDeReservas) {
            if (reserva.getCliente().getNome().equals(nome)) {
                System.out.println(reserva);
                count++;
            }
        }

        if (count == 0) {
            System.out.println("Nenhuma reserva existente.");
        }
    }

    @Override
    public String toString() {
        return "Hotel " + this.nome + ", Endereço: " + this.endereco;
    }

}
