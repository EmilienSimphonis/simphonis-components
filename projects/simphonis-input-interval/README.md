# Simphonis Input Interval

Cette librairie met à disposition un input de type interval pour Angular.

## Installation

Pour installer ce composant, il suffit de lancer `npm install simphonis-input-interval --save`.

## Intégration

Afin de l'intégrer, ajoutez l'importation dans le module du composant où vous souhaitez l'intégrer, puis insérez dans le html le composant `<simphonis-input-interval></simphonis-input-interval>`. 

Les props à passer au composant sont : 
- `min` : La valeur minimum de l'interval
- `max` : La valeur maximum de l'interval
- `step` : Etape de saut de valeur
- `primaryColor` : Couleur principale
- `secondaryColor` : Couleur secondaire
- `onIntervalChange` : Le callback appelé lorsque un des curseurs de l'interval est modifié

L'objet retourné lors de l'appel au callback est le suivant : 
```
{
    min: number,
    max: number
}
```