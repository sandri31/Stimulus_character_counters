# Mon Application Rails avec Stimulus : Compteur de Caractères
![Capture d’écran du 2023-06-08 17-15-33](https://github.com/sandri31/Stimulus_character_counters/assets/85675011/609c783f-c19d-4057-ae7c-37a5a4d33946)

Ce projet est une feature construite avec Ruby on Rails 7, utilisant la bibliothèque  
JavaScript Stimulus pour créer un compteur de caractères.

## Description du projet
Ce projet est une simple application web qui permet aux utilisateurs de compter le nombre  
de caractères qu'ils saisissent dans un champ de texte. Il utilise la bibliothèque Stimulus  
pour gérer l'interactivité de l'interface utilisateur.

## Comment ça marche ?
Lorsque vous saisissez du texte dans le champ de texte, le nombre de caractères est affiché  
en temps réel sous le champ de texte. Le comptage des caractères est géré par un  
contrôleur Stimulus, qui écoute les événements de saisie sur le champ de texte et met à jour  
le compteur de caractères en conséquence.

Voici un exemple de code qui illustre comment cela fonctionne :


## Comment utiliser cette fonctionnalité dans votre propre projet ?
Pour utiliser cette fonctionnalité dans votre propre projet Rails, vous devez d'abord ajouter la  
bibliothèque 'stimulus-character-counter' à votre importmap. Vous pouvez le faire en  
exécutant la commande suivante dans votre terminal :
```bash
./bin/importmap pin stimulus-character-counter.
```

Ensuite, vous pouvez utiliser votre propre code HTML dans les vues où vous souhaitez avoir  
un compteur de caractères. Assurez-vous d'avoir initialisé et enregistré le contrôleur  
Stimulus dans votre application.
