# Simphonis Input Interval

Cette librairie met à disposition un input de type interval pour Angular.
Il permet de gérer deux types d'intervale : 
- Intervale avec un min, un max et un step pour l'incrément;
- Intervale avec un tableau de valeurs.

## Installation

Pour installer ce composant, il suffit de lancer `npm install simphonis-input-interval --save`.

## Intégration

Afin de l'intégrer, ajoutez l'importation dans le module du composant où vous souhaitez l'intégrer, puis insérez dans le html le composant `<simphonis-input-interval></simphonis-input-interval>`. 

Les props à passer au composant sont : 
- `isRangeStepValues` : Si les valeurs de l'intervale sont comprises dans un tableau
- `min` : La valeur minimum de l'intervale (si isRangeStepValues est false)
- `max` : La valeur maximum de l'intervale (si isRangeStepValues est false)
- `step` : Etape de saut de valeur (si isRangeStepValues est false)
- `stepValues` : Tableau de valeurs (nombres) pour l'intervale (si isRangeStepValues est true)
- `primaryColor` : Couleur principale
- `secondaryColor` : Couleur secondaire
- `onIntervalChange` : Le callback appelé lorsque un des curseurs de l'intervale est modifié

L'objet retourné lors de l'appel au callback est le suivant : 
```
{
    min: number,
    max: number
}
```