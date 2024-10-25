package Aparencia;
import java.util.Scanner;
import Negocio.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
 
        System.out.println("Nome administrador:");
        String adminNome = scanner.next();

        System.out.println("ID administrador:");
        String adminID = scanner.next();
        
        Administrador administrador = new Administrador(adminNome, adminID);

        Sistema sistema = new Sistema(administrador);
        int opcao;

        do {
            System.out.println();
            System.out.println("===== Menu Principal =====");
            System.out.println("1. Adicionar Novo Hotel");
            System.out.println("2. Listar Todos os Hotéis");
            System.out.println("3. Adicionar Quarto a um Hotel");
            System.out.println("4. Listar Quartos Disponíveis em um Hotel");
            System.out.println("5. Adicionar Cliente");
            System.out.println("6. Fazer Reserva");
            System.out.println("7. Cancelar Reserva");
            System.out.println("8. Listar Reservas de um Cliente");
            System.out.println("9. Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();
            System.out.println();

            switch (opcao) {
                case 1:
                    sistema.adicionarHotel();
                    break;
                case 2:
                    sistema.listarHoteis();
                    break;
                case 3:
                    sistema.adicionarQuarto();
                    break;
                case 4:
                    sistema.listarQuartosDisponiveis();
                    break;
                case 5:
                    sistema.adicionarCliente();
                    break;
                case 6:
                    sistema.fazerReserva();
                    break;
                case 7:
                    sistema.cancelarReserva();
                    break;
                case 8:
                    sistema.listarReservasCliente();
                    break;
                case 9:
                    System.out.println("Saindo do sistema...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }
        } while (opcao != 9);

        scanner.close();
    }
}
