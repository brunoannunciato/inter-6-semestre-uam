<?php include('header.php'); ?>

<main class="home">
	<div class="container">
		<section class="no-profiles">
			<img src="images/home-estrela.png" alt="Icone de estrela triste" class="img">
		
			<p class="text">
				Ops! parece que você não possui nenhum perfil cadastrado!
			</p>
	
			<div class="button create-profile-cta">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
				<defs>
					<style>
						.cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}
					</style>
				</defs>
				<g id="plus-circle" transform="translate(-1 -1)">
					<circle id="Ellipse_3" cx="10" cy="10" r="10" class="cls-1" data-name="Ellipse 3" transform="translate(2 2)"/>
					<path id="Line_3" d="M0 0v8" class="cls-1" data-name="Line 3" transform="translate(12 8)"/>
					<path id="Line_4" d="M0 0h8" class="cls-1" data-name="Line 4" transform="translate(8 12)"/>
				</g>
			</svg>
				Adicionar Perfil
			</div>
		</section>

		<section class="profiles-shelf hide">
			<div class="container">
				<div>
					<p class="text">Selecione seu perfil:</p>

					<ul class="profiles"></ul>
				</div>

				<div class="button play">Jogar</div>
			</div>
		</section>

		<section class="create-profile hide">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" class="back-button" viewBox="0 0 16 16">
					<defs>
						<style>
							.cls-1{fill:none;stroke:#84a2e8;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}
						</style>
					</defs>
					<g id="arrow-left" transform="translate(-4 -4)">
						<path id="Line_6" d="M14 0H0" class="cls-1" data-name="Line 6" transform="translate(5 12)"/>
						<path id="Path_5" d="M12 19l-7-7 7-7" class="cls-1" data-name="Path 5"/>
					</g>
				</svg>
				<h2 class="title">
					Qual o seu nome?
				</h2>
				<input type="text" class="name" id="input-name">
			</div>

			<div class="button create">Criar perfil</div>
		</section>

	</div>
</main>

<?php include('footer.php'); ?>