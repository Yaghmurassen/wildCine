# wildcine

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#Lancement Projet

npm i && npm install axios pour les requetes ajax des routes > Home

sudo npm install less
sudo npm install less-loader


sudo npm install sass-loader node-sass && rajouter dans webpack.base.conf.js ces lignes : 

 {
test: /\.less$/,
use: [
 	'vue-style-loader',
 	'css-loader',
 	'less-loader'
]
},
{
test: /\.scss$/,
use: [
 	'vue-style-loader',
 	'css-loader',
 	'sass-loader'
]
    }

resolve.extensions >> '.less', '.scss']

-------------------------

Lancer la commande supervisor server pour le watch

Lancer en global depuis wildCine vue ui pour watch le front avec vue

Arborescence:

Index.html > Main.js > App.vue > router > store > components > views

Plus précisement on a : 

wildCine > api > movies.json & server.js
 		 > src > assets > jpg
 		 	   > components > FilmCard.vue
 				            > VHeader.vue
 		       > router > index.js 
 		       > store  > index.js
 		       > views  > Home.vue
 		 		  > Search.vue
 		       App.vue
 		       main.js