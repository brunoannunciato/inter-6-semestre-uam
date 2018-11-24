<?php include('header.php'); ?>

<main class="game">
    <section class="panel">
        <div class="container">
            <p class="text">
                Pinte os quadrados para formar a letra do painel.
            </p>

            <div class="board">
                <div class="led" data-color="0" id="1"></div>
                <div class="led" data-color="0" id="2"></div>
                <div class="led" data-color="0" id="3"></div>
                <div class="led" data-color="0" id="4"></div>
                <div class="led" data-color="0" id="5"></div>
                <div class="led" data-color="0" id="6"></div>
                <div class="led" data-color="0" id="7"></div>
                <div class="led" data-color="0" id="8"></div>
                <div class="led" data-color="0" id="9"></div>
                <div class="led" data-color="0" id="10"></div>
                <div class="led" data-color="0" id="11"></div>
                <div class="led" data-color="0" id="12"></div>
                <div class="led" data-color="0" id="13"></div>
                <div class="led" data-color="0" id="14"></div>
                <div class="led" data-color="0" id="15"></div>
                <div class="led" data-color="0" id="16"></div>
                <div class="led" data-color="0" id="17"></div>
                <div class="led" data-color="0" id="18"></div>
                <div class="led" data-color="0" id="19"></div>
                <div class="led" data-color="0" id="20"></div>
                <div class="led" data-color="0" id="21"></div>
                <div class="led" data-color="0" id="22"></div>
                <div class="led" data-color="0" id="23"></div>
                <div class="led" data-color="0" id="24"></div>
                <div class="led" data-color="0" id="25"></div>
                <div class="led" data-color="0" id="26"></div>
                <div class="led" data-color="0" id="27"></div>
                <div class="led" data-color="0" id="28"></div>
                <div class="led" data-color="0" id="29"></div>
                <div class="led" data-color="0" id="30"></div>
                <div class="led" data-color="0" id="31"></div>
                <div class="led" data-color="0" id="32"></div>
                <div class="led" data-color="0" id="33"></div>
                <div class="led" data-color="0" id="34"></div>
                <div class="led" data-color="0" id="35"></div>
                <div class="led" data-color="0" id="36"></div>
                <div class="led" data-color="0" id="37"></div>
                <div class="led" data-color="0" id="38"></div>
                <div class="led" data-color="0" id="39"></div>
                <div class="led" data-color="0" id="40"></div>
                <div class="led" data-color="0" id="41"></div>
                <div class="led" data-color="0" id="42"></div>
                <div class="led" data-color="0" id="43"></div>
                <div class="led" data-color="0" id="44"></div>
                <div class="led" data-color="0" id="45"></div>
                <div class="led" data-color="0" id="46"></div>
                <div class="led" data-color="0" id="47"></div>
                <div class="led" data-color="0" id="48"></div>
                <div class="led" data-color="0" id="49"></div>
                <div class="led" data-color="0" id="50"></div>
                <div class="led" data-color="0" id="51"></div>
                <div class="led" data-color="0" id="52"></div>
                <div class="led" data-color="0" id="53"></div>
                <div class="led" data-color="0" id="54"></div>
                <div class="led" data-color="0" id="55"></div>
                <div class="led" data-color="0" id="56"></div>
                <div class="led" data-color="0" id="57"></div>
                <div class="led" data-color="0" id="58"></div>
                <div class="led" data-color="0" id="59"></div>
                <div class="led" data-color="0" id="60"></div>
                <div class="led" data-color="0" id="61"></div>
                <div class="led" data-color="0" id="62"></div>
                <div class="led" data-color="0" id="63"></div>
                <div class="led" data-color="0" id="64"></div>
            </div>

            <div class="button done">
                Terminar
            </div>
        </div>
    </section>

    <section class="result" style="display: none;">
        <div class="slider">
            <div class="slide">
                <div class="first">
                    <div class="container">
                        <img src="./images/result-medal.png" alt="Icone de medalha">
                        <p class="text bold">
                            Parabéns!
                        </p>
                        <p class="text">
                            Você acertou a letra:
                        </p>
        
                        <p class="letter">
                            A
                        </p>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="second">
                    <div class="container">
                        <p class="text">
                            Palavras que começam com essa letra:
                        </p>
                        <ul class="word-list">
                            <li class="list-item">
                                Amor
                            </li>
                            <li class="list-item">
                                Amigo
                            </li>
                            <li class="list-item">
                                Artigo
                            </li>
                            <li class="list-item">
                                Astuto
                            </li>
                            <li class="list-item">
                                Alimento
                            </li>
                            <li class="list-item">
                                Amargo
                            </li>
                            <li class="list-item">
                                Atrair
                            </li>
                            <li class="list-item">
                                Augusto
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="thrid">
                    <div class="container">
                        <p class="text">
                            Objetos que começam com essa letra:
                        </p>
                        <ul class="object-list">
                            <li class="object">
                                <figure class="image">
                                    <img src="https://assets.nike.com.br/ArquivoExibir/1233946.jpg" alt="">
                                </figure>
                                <p class="obj-name">Bola</p>
                            </li>
                            <li class="object">
                                <figure class="image">
                                    <img src="https://assets.nike.com.br/ArquivoExibir/1233946.jpg" alt="">
                                </figure>
                                <p class="obj-name">Bola</p>
                            </li>
                            <li class="object">
                                <figure class="image">
                                    <img src="https://assets.nike.com.br/ArquivoExibir/1233946.jpg" alt="">
                                </figure>
                                <p class="obj-name">Bola</p>
                            </li>
                            <li class="object">
                                <figure class="image">
                                    <img src="https://assets.nike.com.br/ArquivoExibir/1233946.jpg" alt="">
                                </figure>
                                <p class="obj-name">Bola</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="button finish active">Terminar</div>
        </div>
    </section>
</main>

<?php include('footer.php'); ?>