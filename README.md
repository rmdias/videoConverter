Video Converter
=================
A NodeJS project

###### Testar usando `localhost:3000`

![Class videoConverter](/public/images/videoConverter.png)


## Este projeto usa:

* [FFMPEG - Para a conversão dos vídeos](https://www.ffmpeg.org/)
* [MongoDB](http://www.mongodb.org/)
* [NodeJS](http://nodejs.org/)
* [Jade](http://jade-lang.com/)
* [Express](http://expressjs.com/)
* [Gulp Web App Workflow](http://rmdias.com/gulpworkflow)
* [SASS](http://sass-lang.com/)
* [AngularJS](https://angularjs.org/)

## Justificativa pela escolha:
  
Achei que seria mais interessante trabalhar na conversão do vídeo ultilizando NodeJS. Tentei prezar pela performance e desempenho maior da aplicação.

<br>

Infelizmente tive um problema pequeno problema com a configuracão do FFMPEG no meu servidor (Acabei instalando uma versão que logo será depreciada). Por esse motive é preciso instalar o serviço do FFMPEG local ( O link e o guia de instalação pode ser encontrado na lista acima ).

<br>

* Se nescessário, posso ir até a @Samba para demonstrar a aplicação rodando em meu servidor local sem nenhum problema :)


## Para testar:

1. Clone este repositório:

        https://github.com/rmdias/videoConverter.git

2. Navege até o diretório `cd videoConverter`

3. Instale as dependencias do projeto:

        npm install

4. Rode o NodeJS:

        node app.js


## Estrutura do projeto

Os arquivos do projeto estão organizados da seguinte forma:

<pre>
.
|--/_assets
|--|--/_stylesheets
|--/public
|--|--/images
|--|--/javascripts
|--|--/stylesheets
|--|--/videos
|--|--|--/convertedData
|--|--|--/originalData
|--/routes
|--/views
|--app.js.html
|--package.json
|--gulpfile.js
</pre>



## Retorno com lista de vídeos do MongoDB:

        http://rmdias.com:3000/listVideos



