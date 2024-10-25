package Negocio;
import java.util.ArrayList;
import java.util.List;

public class Administrador {
    
    private String nome;
    private String id;
    private List<Hotel> listaHoteis = new ArrayList<>();
    private List<Cliente> listaClientes = new ArrayList<>();


    public Administrador(String nome, String id){
        this.id = id;
        setNome(nome);
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getId() {
        return id;
    }

    public List<Cliente> getListaClientes() {
        return listaClientes;
    }

    public List<Hotel> getListaHoteis() {
        return listaHoteis;
    }

    public Hotel getHotel(String nomeHotel) {

        for (Hotel hotel : listaHoteis) {
            if (hotel.getNome().equals(nomeHotel)) {
                return hotel;
            }
        }
        return null;
    } 

    public Cliente getCliente(String nomeCliente) {

        for (Cliente cliente : listaClientes) {
            if (cliente.getNome().equals(nomeCliente)) {
                return cliente;
            }
        }

        return null;
    }
    
    public String adicionarHotel(String nome, String endereco) {

        Hotel hotel = new Hotel(nome, endereco);
        for (Hotel h : listaHoteis) {
            if (h.getNome().equals(hotel.getNome())){
                return "Hotel existente.";
            }
        } 
        
        this.listaHoteis.add(hotel);
        return "Adicionado.";
    }

    public void removerHotel(String nomeHotel) {
        for (Hotel hotel : listaHoteis) {
            if (hotel.getNome().equals(nomeHotel)) {
                listaHoteis.remove(hotel);
            }
        }
    }


    public String adicionarCliente(String nome, String email, String telefone) {
        Cliente cliente = new Cliente(nome, email, telefone);
        for (Cliente c : listaClientes) {
            if (c.getNome().equals(cliente.getNome())) {
                return "Cliente já cadastrado.";
            }
        }
        this.listaClientes.add(cliente);
        return "Adicionado.";
    }

    public void removerCliente(String nomeCliente) {
        for (Cliente cliente : listaClientes) {
            if (cliente.getNome().equals(nomeCliente)) {
                listaClientes.remove(cliente);
            }
        }
    }
    


}
