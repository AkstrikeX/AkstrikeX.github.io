package Negocio;
import java.util.List;

public class Cliente {
    
    private String nome;
    private String email;
    private String telefone;


    public String getNome() {
        return nome;
    }


    public void setNome(String nome) {
        this.nome = nome;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        if (email.contains("@")) {
            this.email = email;  
        } else {
            System.out.println("Email invalido.");
        }
    }


    public String getTelefone() {
        return telefone;
    }


    public void setTelefone(String telefone) {
        if (telefone.length() != 11) {
            System.out.println("Telefone invalido.");
        } else {
            this.telefone = telefone;
        }
    }


    Cliente(String nome, String email, String telefone) {
        setNome(nome);
        setEmail(email);
        setTelefone(telefone);
    }

    public void fazerReserva(Hotel hotel, Quarto quarto, String dataCheckIn, String dataCheckOut) {
        Reserva reserva = new Reserva(this, quarto, dataCheckIn, dataCheckOut);
        reserva.confirmarReserva(quarto);
        hotel.adicionarReserva(reserva);

    }
    
    public void cancelarReserva(Hotel hotel, String numeroQuarto) {
        List<Reserva> reservas = hotel.getListaDeReservas();
        boolean existe = false;
        for (Reserva reserva : reservas) {
            Quarto quarto = reserva.getQuarto();
            if (quarto.getNumero().equals(numeroQuarto)) {
                reserva.cancelarReserva(quarto);
                existe = true;
            }
        }
        if (existe) {
            hotel.removerReserva(numeroQuarto);
        }
    }
}
