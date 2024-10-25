package Negocio;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


public class Reserva {

    private Cliente cliente;
    private Quarto quarto;
    private LocalDateTime dataCheckIn;
    private LocalDateTime dataCheckOut;
    
    
    Reserva(Cliente cliente, Quarto quarto, String dataCheckIn, String dataCheckOut) {
        setCliente(cliente);
        setQuarto(quarto);
        setDataCheckIn(dataCheckIn);
        setDataCheckOut(dataCheckOut);
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Quarto getQuarto() {
        return quarto;
    }

    public void setQuarto(Quarto quarto) {
        this.quarto = quarto;
    }

    public LocalDateTime getDataCheckIn() {
        return dataCheckIn;
    }
    
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    public void setDataCheckIn(String dataCheckIn) {
        this.dataCheckIn = LocalDateTime.parse(dataCheckIn, formatter);
    }

    public LocalDateTime getDataCheckOut() {
        return dataCheckOut;
    }
    
    public void setDataCheckOut(String dataCheckOut) {
        this.dataCheckOut = LocalDateTime.parse(dataCheckOut, formatter);
    }


    public void confirmarReserva(Quarto quarto) {
        quarto.reservar();
    }

    public void cancelarReserva(Quarto quarto) {
        quarto.liberar();
    }


    @Override
    public String toString() {
    
        return "Cliente: " + cliente.getNome() + " Quarto: " + quarto.getNumero() + " Data do Check-in: " + dataCheckIn + " Data do Check-Out: "
                + dataCheckOut;
    }
}
