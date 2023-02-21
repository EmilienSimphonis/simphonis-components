# Simphonis Input Interval

Cette librairie met à disposition une liste d'éléments à sélectionner pour Angular.

## Installation

Pour installer ce composant, il suffit de lancer `npm install simphonis-input-selection --save`.

## Intégration

Afin de l'intégrer, ajoutez l'importation dans le module du composant où vous souhaitez l'intégrer, puis insérez dans le html le composant `<simphonis-input-selection></simphonis-input-selection>`. 

Les props à passer au composant sont : 
| Nom | Type | Description | Défaut |
| --- | --- | --- | --- |
| list | Item[] | Liste d'items | [] |
| isSelectionMultiple | boolean | Si plusieurs items sont sélectionnables | false |
| type | enum | Si l'affichage des options est sous forme de checkbox ou bouton ('checkbox' ou 'button') | 'checkbox' |
| hasSelectorIcon | boolean | Si l'item a un icon | false |
| hasSelectorImage | boolean | Si l'item a une image | false |
| name | string | Nom du formulaire | 'radio' |
| inline | boolean | Affichage des items en ligne | true |
| onSelectionChange | function | Le callback appelé lorsqu'un des items est sélectionné ou non |  |
