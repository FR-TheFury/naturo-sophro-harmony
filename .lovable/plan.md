

## Design "Arbre de Vie" - Branches qui déclenchent l'apparition des blocs

### Concept
Transformer le design actuel en un véritable arbre vivant où le tronc sur la gauche fait pousser des branches animées. Chaque branche se déploie progressivement et, lorsqu'elle atteint sa destination, fait apparaître le bloc de contenu correspondant. C'est un effet "cascade naturelle" où l'arbre révèle le contenu.

### Structure visuelle

```text
┌──────────────────────────────────────────────────────────┐
│  HEADER                                                   │
├────┬─────────────────────────────────────────────────────┤
│    │                                                      │
│ T  │────────────────►  [HERO CONTENT BLOCK]               │
│ R  │                                                      │
│ O  │                                                      │
│ N  │────────────────►  [SECTION TITLE BLOCK]              │
│ C  │                                                      │
│    │   ┌──────────────┐     ┌──────────────┐             │
│    │───│ CARD 1       │     │ CARD 2       │◄────────    │
│    │   └──────────────┘     └──────────────┘             │
│    │                                                      │
│    │────────────────►  [CTA BLOCK]                        │
│    │                                                      │
│    │────────────────►  [VALUES SECTION]                   │
│    │                                                      │
└────┴─────────────────────────────────────────────────────┘
```

### Animation séquentielle

1. **T+0s** : Le tronc commence à se dessiner de haut en bas
2. **T+0.5s** : Première branche pousse vers le Hero
3. **T+1s** : Le Hero block apparaît en fade-in quand la branche arrive
4. **Au scroll** : Chaque nouvelle section déclenche sa branche puis son bloc

### Détails techniques

**1. Nouveau composant `TreeOfLife.tsx`**
- SVG du tronc principal fixé sur toute la hauteur de la page
- Position: `fixed` sur la gauche, largeur ~80-100px
- Animation stroke-dasharray pour le dessin progressif
- Couleur: vert forêt avec légère texture bois

**2. Nouveau composant `BranchConnector.tsx`**
- Composant réutilisable pour chaque branche
- Props: `delay`, `direction` (left-to-right ou right-to-left pour les cartes droites)
- Animation synchronisée avec l'apparition du bloc
- Terminaison par une petite feuille/bourgeon

**3. Nouveau composant `RevealBlock.tsx`**
- Wrapper pour les blocs de contenu
- Gère l'apparition avec `opacity: 0` → `opacity: 1`
- Utilise Intersection Observer pour déclencher au scroll
- Délai synchronisé avec l'animation de la branche

**4. Modifications de `Index.tsx`**
- Remplacer la structure actuelle par le nouveau système
- Chaque section majeure devient un `RevealBlock` connecté à une branche
- Garder le contenu centré avec `margin-left` pour laisser l'espace au tronc

**5. CSS/Animations dans `index.css`**
- `@keyframes draw-trunk` : animation du tronc
- `@keyframes grow-branch` : animation des branches
- `@keyframes reveal-block` : fade-in + léger mouvement du bloc
- Classes utilitaires pour les délais séquentiels

### Points clés du design

- **Tronc** : épaisseur ~12-15px, légèrement ondulé (naturel), couleur vert forêt foncé
- **Branches** : épaisseur dégradée (8px → 4px), courbes Bézier naturelles
- **Connexion** : les branches se terminent juste avant le bord gauche des blocs
- **Blocs centrés** : le contenu garde un `max-width` et reste centré, avec un padding-left pour éviter le tronc
- **Responsive** : sur mobile, le tronc devient plus fin et les branches sont simplifiées

### Fichiers à créer/modifier

| Fichier | Action |
|---------|--------|
| `src/components/TreeOfLife.tsx` | Créer - tronc principal SVG animé |
| `src/components/BranchConnector.tsx` | Créer - branches animées |
| `src/components/RevealBlock.tsx` | Créer - wrapper d'apparition |
| `src/pages/Index.tsx` | Modifier - intégrer le nouveau système |
| `src/index.css` | Modifier - ajouter animations |
| `src/components/NaturalElements.tsx` | Supprimer ou adapter |

### Résultat attendu

Un effet "wow" où l'utilisateur voit littéralement l'arbre faire pousser le site. Chaque scroll révèle une nouvelle branche qui "livre" son contenu. L'expérience est immersive, mémorable et parfaitement cohérente avec l'univers de la naturopathie/sophrologie.

