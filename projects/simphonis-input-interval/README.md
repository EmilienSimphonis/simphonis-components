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
| Nom | Type | Description | Défaut |
| --- | --- | --- | --- |
| min | number | Valeur minimum de l'intervale | 0 |
| max | number | Valeur maximum de l'intervale | 0 |
| isRangeStepValues | boolean | Si les étapes de l'interval sont un tableau de valeurs | false |
| step | number | Etape de saut de valeur (si isRangeStepValues est false) | 1 |
| stepValues | number[] | Tableau de valeurs (nombres) pour l'intervale (si isRangeStepValues est true) | [] |
| primaryColor | string | Couleur principale | '#000000' |
| secondaryColor | string | Couleur secondaire | '#FFFFFF' |
| onIntervalChange | function | Le callback appelé lorsque un des curseurs de l'intervale est modifié |  |

L'objet retourné lors de l'appel au callback est le suivant : 
```json
{
    min: number,
    max: number
}
```