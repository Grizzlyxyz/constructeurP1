// Exo 1
// Créer trois instances Humain avec les propriétés : nom,age
// Créer deux instance guerrier avec les propriétés : nom,age,force,vie
// Créer quatre instances mage avec les propriétés : nom,age,magie
// Créer une instance archer avec les propriétés nom,age,force,vie,flecheclass Humain {
    constructor(nom,age){
        this.nom = nom;
        this.age = age;
      }
     };let humain1 = new Humain("Patrick",48);
     let humain2 = new Humain("Mustafa", 41);
     let humain3 = new Humain("Francesco", 57);class Guerrier extends Humain {
      constructor(nom,age,force,vie){
        super(nom,age)
        this.force = force;
        this.vie = vie;
 }
};let guerrier1 = new Guerrier('Killer',29,100,200);
let guerrier2 = new Guerrier('Exterminator',31,120,180);class Mage extends Humain {
 constructor(nom,age,magie){
   super(nom,age)
   this.magie = magie;
 }
};let mage1 = new Mage('Gordon',71,500);
let mage2 = new Mage('Aragorn',64,410);
let mage3 = new Mage('Mufasa',101,910);class Archer extends Guerrier {
 constructor(nom,age,force,vie,fleche){
   super(nom,age,force,vie)
   this.fleche = fleche;
}
};

// Pour utiliser les import - export il faut utiliser un serveur exemple : Live Server
// Il faut modifier la balise script et y rajouter type="module"
// Dans le fichier ou l'on veut exporter des "class" en fin de fichier rajouter : export {nomDeLaClass};
// Dans le fichier ou l'on import au début du fichier il faut importer les class qui sont exporter des autres fichiers en faisant : import {nomDeLaClass,DeuxemeClass} from 'leChemin.js';// export defaultimport {Mage} from './partials/_mage.js';
import SuperMage from './partials/_mage'; // je ne peux pas mettre les accolades car l'export est en default
import {Guerrier} from './partials/_guerrier.js'let mage1 = new Mage("Nico");
let warrior = new Guerrier('Nino',55);
console.log(mage1);