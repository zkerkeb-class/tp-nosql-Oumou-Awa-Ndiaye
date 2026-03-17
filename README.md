# TP NoSQL - API Pokémon

**Étudiante :** Oumou Awa Ndiaye

##  Fonctionnalités réalisées
- **CRUD Complet** : Gestion des Pokémon (GET, POST, PUT, DELETE).
- **Authentification** : Système d'inscription et de connexion avec **JWT** et hachage de mot de passe via **Bcrypt**.
- **Sécurité** : Routes de modification (POST, PUT, DELETE) protégées par un middleware d'authentification.
- **Validation** : Schémas Mongoose stricts (ex: HP max 255).

##  Bonus implémentés
- **Agrégation (6.B)** : Route `/api/pokemons/stats` calculant le nombre de Pokémon par type et la moyenne des HP.
- **Filtrage avancé** : Recherche par type et par nom (insensible à la casse).
- **Pagination** : Gestion des paramètres `page` et `limit` sur la liste des Pokémon.
- **Validation avancée (6.C)** : Utilisation de `runValidators: true` sur les mises à jour.