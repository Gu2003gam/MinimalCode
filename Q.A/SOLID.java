//Princípio da Responsabilidade única
public class GerenciadorTarefas {
    public void criarTarefa(){

    }
    public void atualizarTarefa(){

    }
    public void removerTarefa(){

    }
}

public class ConectarAPI {
    public String conectarAPI(){

    }
}
public class Notificador {
    public static void enviarNotificacao(){

    }
}
public class GeradorRelatorio {
    public void produzirRelatorio(){

    }
    public void enviarRelatorio(){

    }
}

//Princípio Abero-Fechado
public interface AprovarExame{
    void aprovarSolicitacaoExame(Exame exame);
    boolean verificarCondicoesExame(Exame exame);
}
public class AprovarExameSangue implements AprovarExame{
    @Override
    public void aprovarSolicitacaoExame(Exame exame){
        if(verificarCondicoesExame(exame))
        System.out.println("Exame sanguineo aprovado!");
    }
    @Override
    boolean verificarCondicoesExame(Exame exame) {

    }
}

public class AprovarRaioX implements AprovarExame{
    @Override
    public void aprovarSolicitacaoExame(Exame exame){
        if(verificarCondicoesExame(exame))
        System.out.println("Raio-X aprovado!")
    }
    @Override
    boolean verificarCondicoesExame(Exame exame){

    }
}

//Princípio de Substituição de Liskov
public class EstudanteDeGraduacao extends Estudante {
    public void estudar(){
        System.out.println(nome + "está estudando na graduação.");
    }
    public void entregarTCC(){

    }
}

//Princípio de Segregação de Interface
import java.math.BigDecimal;
public interface Funcionario {
    public BigDecimal salario();
}

import java.math.BigDecimal;
public interface Comissionavel(
    public BigDecimal gerarComissao();
)

import java.math.BigDecimal;
public class Vendedor implements Funcionario, Comissionavel {
    @Override
    public BigDecimal salario(){

    }
    @Override
    public BigDecimal gerarComissao(){

    }
}

import java.math.BigDecimal;
public class Recepcionista implements Funcionario{
    @Override
    public BigDecimal salario(){

    }
}

//Princípio da Inversão de Dependência
public interface PedidoRepository {
    void salvarPedido(Pedido pedido);
}

public class PedidoService{
    private PedidoRepository repository;
    public PedidoService(PedidoRepository repository) {
        this.repository = repository;
    }
    public void processarPedido(Pedido pedido){
        //lógica de processamento do pedido
        repository.salvarPedido(pedido);
    }
}