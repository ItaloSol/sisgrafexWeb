<?php
if(isset($_GET['id'])){ 
    session_start(); 
        include_once('../conexoes/conexao.php');
    $nome = $_GET['id'];
    $id = $_GET['id'];
    if(isset($_POST['senha1'])){
        if($_POST['senha1'] == $_POST['senha2']){
            $senha1 = md5($_POST['senha1']);
            $id = $_GET['id'];
            date_default_timezone_set('America/Sao_Paulo');
            $hoje = date('Y-m-d');
            $dataHora = date('d/m/Y H:i:s');
            $senha = $conexao->prepare("UPDATE tabela_atendentes SET senha_atendente = '$senha1', mudanca_senha = '$hoje' WHERE codigo_atendente = '$id'");
            $senha->execute();
            $_SESSION['sucesso'] = ' <div style=";" id="alerta<?=$a?>"
      role="bs-toast"
      class=" bs-toast toast toast-placement-ex m-3 fade bg-success top-0 end-0 hide show "
      role="alert"
      aria-live="assertive"
      aria-atomic="true">
      <div class="toast-header">
        <i class="bx bx-bell me-2"></i>
        <div class="me-auto fw-semibold">Aviso!</div>
        <small>
          
          </small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      
      <div class="toast-body">
           Senha atualizada com suscesso!     
      </div>
    </div>';
    $Atividade_Supervisao = $conexao->prepare("INSERT INTO supervisao_atividade (alteracao_atividade , atendente_supervisao, data_supervisao) VALUES ('Alterou a Propria Senha' , '$id' , '$dataHora')");
    $Atividade_Supervisao->execute();
    echo "<script>window.location = '../index.php'</script>";
        }else{
            echo ' <div style=";" id="alerta<?=$a?>"
        role="bs-toast"
        class=" bs-toast toast toast-placement-ex m-3 fade bg-danger top-0 end-0 hide show "
        role="alert"
        aria-live="assertive"
        aria-atomic="true">
        <div class="toast-header">
          <i class="bx bx-bell me-2"></i>
          <div class="me-auto fw-semibold">Aviso!</div>
          <small>
            
            </small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        
        <div class="toast-body">
             As senhas não coincidem!     
        </div>
      </div>';
      
     echo "<script>window.location = 'b-recuperacao-senha.php?id=".$id."'</script>";
        }
    }
}else{
    if ($_POST['cpf'] != '' && $_POST['usuario'] != '') {
        session_start(); 
        include_once('../conexoes/conexao.php');
        $cpf = $_POST['cpf'];
        $usuario = $_POST['usuario'];
    
        $login = $conexao->prepare("SELECT * FROM tabela_atendentes WHERE cpf = '$cpf' AND login_atendente = '$usuario'");
        $login->execute();
        $i = 0;
        if ($linha = $login->fetch(PDO::FETCH_ASSOC)) {
            $id = $linha['codigo_atendente'];
            $nome = $linha['nome_atendente'];
        }else{
            $_SESSION['msg'] = ' <div style=";" id="alerta<?=$a?>"
            role="bs-toast"
            class=" bs-toast toast toast-placement-ex m-3 fade bg-danger top-0 end-0 hide show "
            role="alert"
            aria-live="assertive"
            aria-atomic="true">
            <div class="toast-header">
              <i class="bx bx-bell me-2"></i>
              <div class="me-auto fw-semibold">Aviso!</div>
              <small>
                
                </small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            
            <div class="toast-body">
                 Não foi encontrado o Login/CPF inseridos!     
            </div>
          </div>';
         
          //  echo "<script>window.location = 'tela-recuperacao-senha.php'</script>";
        }
    }else{
        $_SESSION['msg'] = ' <div style=";" id="alerta<?=$a?>"
        role="bs-toast"
        class=" bs-toast toast toast-placement-ex m-3 fade bg-danger top-0 end-0 hide show "
        role="alert"
        aria-live="assertive"
        aria-atomic="true">
        <div class="toast-header">
          <i class="bx bx-bell me-2"></i>
          <div class="me-auto fw-semibold">Aviso!</div>
          <small>
            
            </small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        
        <div class="toast-body">
             Algum dos campos não foram selecionados!     
        </div>
      </div>';
   
      //  echo "<script>window.location = 'tela-recuperacao-senha.php'</script>";
    }
}



?>
<!DOCTYPE html>

<html lang="en" class="light-style customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template-free">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>SISGRAFEx - Confirme a nova Senha?</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../img/logo.ico" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

    <!-- Icons. Uncomment required icon fonts -->
    <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
    <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="../assets/css/demo.css" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

    <!-- Page CSS -->
    <!-- Page -->
    <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />
    <!-- Helpers -->
    <script src="../assets/vendor/js/helpers.js"></script>

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="../assets/js/config.js"></script>
</head>

<body>
    <!-- Content -->

    <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
            <div class="authentication-inner py-4">
                <!-- Forgot Password -->
                <div class="card">
                    <div class="card-body">
                        <!-- Logo -->
                        <div class="app-brand justify-content-center">
                            <span class="app-brand-logo demo">
                                <img src="http://www.graficadoexercito.eb.mil.br/images/grafex1.png"><br></br>
                                <defs>
                                    <path d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z" id="path-1"></path>
                                    <path d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z" id="path-3"></path>
                                    <path d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z" id="path-4"></path>
                                    <path d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z" id="path-5"></path>
                                </defs>
                                <g id="g-app-brand" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
                                        <g id="Icon" transform="translate(27.000000, 15.000000)">
                                            <g id="Mask" transform="translate(0.000000, 8.000000)">
                                                <mask id="mask-2" fill="white">
                                                    <use xlink:href="#path-1"></use>
                                                </mask>
                                                <use fill="#696cff" xlink:href="#path-1"></use>
                                                <g id="Path-3" mask="url(#mask-2)">
                                                    <use fill="#696cff" xlink:href="#path-3"></use>
                                                    <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-3"></use>
                                                </g>
                                                <g id="Path-4" mask="url(#mask-2)">
                                                    <use fill="#696cff" xlink:href="#path-4"></use>
                                                    <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-4"></use>
                                                </g>
                                            </g>
                                            <g id="Triangle" transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) ">
                                                <use fill="#696cff" xlink:href="#path-5"></use>
                                                <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-5"></use>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                </svg>
                            </span>

                        </div>
                        <!-- /Logo -->
                        <?php /* ||| 
            if(isset($_SESSION['msg'])){
              echo $_SESSION['msg'];
              unset($_SESSION['msg']);
            }  
              ?>
                        <h4 class="mb-2">Você é o(a) <b><?= $nome ?> ?</b></h4>
                        <h4 class="mb-2">Confirme a nova senha 🔒</h4>
                        <p class="mb-4">Insira sua nova senha para a alteração</p>
                        <form id="formAuthentication" class="mb-3" action="b-recuperacao-senha.php?id=<?= $id ?>" method="POST">
                            <div class="mb-3">
                                <label for="senha1" class="form-label">Senha</label>
                                <input type="text" class="form-control" id="senha1" name="senha1" placeholder="Insira sua nova Senha" autofocus />
                                <label for="senha2" class="form-label">Confirmar Senha</label>
                                <input type="text" class="form-control" id="senha2" name="senha2" placeholder="Confirme a nova senha" autofocus />
                            </div>
                            <button class="btn btn-primary d-grid w-100">Enviar</button>
                        </form>
                        <div class="text-center">
                            <a href="../index.php" class="d-flex align-items-center justify-content-center">
                                <i class="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                                Voltar para tela de login
                            </a>
                        </div>
                    </div>
                </div>
                <!-- /Forgot Password -->
            </div>
        </div>
    </div>

    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
    <script src="../assets/vendor/libs/jquery/jquery.js"></script>
    <script src="../assets/vendor/libs/popper/popper.js"></script>
    <script src="../assets/vendor/js/bootstrap.js"></script>
    <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    <script src="../assets/vendor/js/menu.js"></script>
    <!-- endbuild -->

    <!-- Vendors JS -->

    <!-- Main JS -->
    <script src="../assets/js/main.js"></script>

    <!-- Page JS -->

    <!-- Place this tag in your head or just before your close body tag. -->
    <script async defer src="https://buttons.github.io/buttons.js"></script>
</body>

</html>