package Negocio;


public class Quarto {
    
    private String numero;
    private String tipo;
    private double preco;
    private boolean estaDisponivel = true;
    
    Quarto(String numero, double preco, String tipo) {
        setNumero(numero);
        setPreco(preco);
        setTipo(tipo);
    }
    
    public String getNumero() {
        return numero;
    }
    
    public void setNumero(String numero) {
        this.numero = numero;
    }
    
    public String getTipo() {
        return tipo;
    }
    
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    
    public double getPreco() {
        return preco;
    }
    
    public void setPreco(double preco) {
        this.preco = preco;
    }
    
    public boolean getEstaDisponivel() {
        return estaDisponivel;
    }

    void reservar() {
        this.estaDisponivel = false;
    }
    
    
    void liberar() {
        this.estaDisponivel = true;

    }


    @Override
    public String toString() {
        return "Quarto " + numero + " Tipo: " + tipo + " Diária: R$ " + preco + " Status: " + (estaDisponivel ? "Disponível" : "Reservado");
    }
    
}
