

## Ajout d'un Feuillage Canopée en Haut du Header

### Objectif
Créer un effet de feuillage décoratif qui s'étend en haut de la page, au-dessus du tronc, simulant une canopée d'arbre qui encadre le header.

---

### Solution Proposée

Créer un nouveau composant `TreeCanopy.tsx` qui affiche un feuillage SVG stylisé :
- Position fixe en haut de la page
- Feuilles vertes avec différentes teintes (vert forêt, vert sauge, vert foncé)
- Animation douce d'apparition
- S'étend de la gauche vers la droite en haut du viewport
- Utilise des formes organiques de feuilles avec des courbes Bezier

---

### Design du Feuillage

**Structure :**
```
┌────────────────────────────────────────────────┐
│  🍃🌿🍃🌿🍃  FEUILLAGE CANOPÉE  🍃🌿🍃🌿🍃    │
│  ↓                                              │
│  Commence près du tronc et s'étend vers →      │
├────────────────────────────────────────────────┤
│  HEADER / NAVIGATION                           │
└────────────────────────────────────────────────┘
```

**Caractéristiques :**
- 15-25 feuilles de différentes tailles
- 3-4 teintes de vert (primary, forest, sage)
- Positionnement aléatoire dans la zone supérieure
- Légère animation de balancement
- Z-index inférieur au header pour ne pas bloquer la navigation

---

### Fichiers à Créer/Modifier

| Fichier | Action |
|---------|--------|
| `src/components/TreeCanopy.tsx` | **Créer** - Nouveau composant avec feuillage SVG |
| `src/pages/Index.tsx` | Ajouter le composant TreeCanopy |
| `src/index.css` | Ajouter une animation de balancement pour les feuilles |

---

### Implémentation Technique

**TreeCanopy.tsx** comprendra :
- Un conteneur fixe en haut de page
- Un SVG avec des groupes de feuilles
- Chaque feuille avec une forme path courbe
- Dégradés verts pour l'effet naturel
- Animation CSS pour un mouvement subtil
- Opacité variable pour profondeur

**Animation** :
- Keyframe `sway` pour un balancement léger
- Délais différents pour chaque groupe de feuilles
- Transition d'apparition au chargement

