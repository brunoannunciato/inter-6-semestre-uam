<?php include('header.php'); ?>

<main class="config">
	<section class="config">
		<div class="container">
			<h2 class="title">
				Configurações
			</h2>

			<div class="content">
				<div class="row">
					<div class="col-50">
						<p class="text">
							Modo econômico:
						</p>
					</div>
					<div class="col-50 j-end">
						<label for="economic-mode" class="white">
							<input type="checkbox" id="economic-mode" class="economic">
							<span class="checked"></span>
						</label>
					</div>
				</div>

				<div class="row">
					<div class="col-50">
						<p class="text">
							Cor de acerto:
						</p>
					</div>

					<div class="col-50 j-end">
						<div class="colors">
							<label for="rc1" class="green">
								<input type="radio" name="right-color" class="right-color-select" id="rc1" value="#43ff75" checked="checked">
								<span class="checked"></span>
							</label>

							<label for="rc2" class="blue">
								<input type="radio" name="right-color" class="right-color-select" id="rc2" value="#4388ff">
								<span class="checked"></span>
							</label>

							<label for="rc3" class="yellow">
								<input type="radio" name="right-color" class="right-color-select" id="rc3" value="#ffe043">
								<span class="checked"></span>
							</label>

							<label for="rc4" class="red">
								<input type="radio" name="right-color" class="right-color-select" id="rc4" value="#ff4343">
								<span class="checked"></span>
							</label>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-50">
						<p class="text">
							Cor de erro:
						</p>
					</div>
					
					<div class="col-50 j-end">
						<div class="colors">
							<label for="wc1" class="green">
								<input type="radio" name="wrong-color" class="wrong-color-select" id="wc1" value="#43ff75">
								<span class="checked"></span>
							</label>

							<label for="wc2" class="blue">
								<input type="radio" name="wrong-color" class="wrong-color-select" id="wc2" value="#4388ff">
								<span class="checked"></span>
							</label>

							<label for="wc3" class="yellow">
								<input type="radio" name="wrong-color" class="wrong-color-select" id="wc3" value="#ffe043">
								<span class="checked"></span>
							</label>

							<label for="wc4" class="red">
								<input type="radio" name="wrong-color" class="wrong-color-select" id="wc4" value="#ff4343" checked="checked">
								<span class="checked"></span>
							</label>
						</div>
					</div>
				</div>
			</div>

			<div class="button active save">
				Salvar
			</div>
		</div>
	</section>
</main>


<?php include('footer.php'); ?>
<script src="./js/config.min.js"></script>