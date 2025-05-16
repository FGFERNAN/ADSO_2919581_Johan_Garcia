#language:es
  #author:JohanGarcia

  Característica: Guardar videos en una playlist de YouTube
    Como usuario de YouTube
    Quiero guardar mis videos en una playlist
    Para poder organizar los videos que me gustan y verlos despues.

  @GuardarVideosEnUnaPlaylist

  Escenario: Guardar un video en una playlist existente
    Dado que el usuario selecciona la opción de guardar video en una playlist
    Cuando selecciona una o más playlist
    | nombre       |
    | programación |
    Entonces se debe guardar el video en la playlist seleccionada
    Y se muestra un mensaje de confirmación indicando que se agrego a la playlist