

## Refonte du Feuillage Canopée - Design Dense et Réaliste

### Problème Actuel
Le composant `TreeCanopy.tsx` affiche des feuilles isolées qui flottent sur la navbar. Ce n'est pas un vrai feuillage d'arbre mais des feuilles individuelles dispersées.

---

### Nouvelle Approche

Créer un **vrai feuillage dense** qui :
1. Part du haut du tronc (à gauche, position ~180px)
2. S'étend horizontalement comme une vraie canopée
3. Utilise des **clusters de feuilles** superposés (pas des feuilles isolées)
4. Crée un effet de **masse végétale dense** avec plusieurs couches
5. Se positionne **derrière la navbar** (z-index inférieur)

---

### Design du Nouveau Feuillage

```text
┌──────────────────────────────────────────────────────┐
│    🌿🌿🌿🌿                                          │
│  🌿🌿🌿🌿🌿🌿🌿🌿   ← Feuillage DENSE               │
│   🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿  qui s'étend                 │
│    🌿🌿🌿🌿🌿🌿🌿🌿🌿    progressivement             │
│     🌿🌿🌿🌿🌿🌿🌿       vers la droite              │
│      ~~~~~~~~~~~~~ (fondu progressif)                 │
│                                                       │
│  ▐▌  ← Tronc                                         │
│  ▐▌                                                  │
│  ▐▌    [   NAVBAR   ] ← DEVANT le feuillage         │
└──────────────────────────────────────────────────────┘
```

---

### Structure Technique

**3 couches de feuillage superposées** :
1. **Couche arrière** - Feuilles plus sombres, légèrement floutées
2. **Couche médiane** - Feuilles de taille moyenne, couleurs variées
3. **Couche avant** - Feuilles plus claires et détaillées

**Chaque couche** utilise des paths SVG organiques pour créer des amas de feuilles :
- Utilisation de courbes Bezier complexes
- Formes de "grappes" de feuilles (pas de feuilles individuelles)
- Dégradé d'opacité de gauche (100%) à droite (0%)

---

### Fichiers à Modifier

| Fichier | Modification |
|---------|--------------|
| `src/components/TreeCanopy.tsx` | **Réécriture complète** - Nouveau design avec feuillage dense en clusters |
| `src/pages/Index.tsx` | Ajuster le z-index pour que le feuillage passe DERRIÈRE le header |

---

### Spécifications du Nouveau Composant

**Position** :
- `fixed top-0 left-0`
- Hauteur : `h-40` à `h-48` (plus grand pour couvrir la zone)
- Largeur : commence au niveau du tronc (~160px) et s'étend sur ~500-600px

**Z-Index** :
- `z-20` pour passer derrière le header (qui est en `z-50`)

**SVG** :
- ViewBox adaptée pour une forme de canopée
- Plusieurs `<path>` organiques pour les clusters de feuilles
- Dégradés verts (forest, sage, leaf)
- Opacité décroissante vers la droite
- Animation subtile de balancement sur les couches avant

---

### Résultat Attendu
Un vrai feuillage dense et naturel qui semble être la couronne de l'arbre, pas des feuilles volantes. Le feuillage sera visible derrière la navbar et créera un effet immersif de nature.

