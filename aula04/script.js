const button = document.getElementById("btnEnviar");

function trocarAriaLabel(button) {
    if (
      button.getAttribute("aria-label") ===
      "Botão para envio de formulário"
    ) {
      button.setAttribute(
        "aria-label",
        "Botao para reenvio de formulario"
      );
    }
  }

  button.addEventListener("click", trocarAriaLabel(button));

  // Na primeira renderização o aria-label deve ser "Botao para reenvio de formulario"

  // adicionar listener para que toda vez que o botao seja
  //   executado ele faça a chamada do trocarAriaLabel() com suas devidas
  // normalizações
  // Evento de click
  