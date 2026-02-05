

## Refonte Complète : Un Véritable Arbre Majestueux

### Le Probleme Actuel
Le tronc actuel fait environ 20px de large dans un viewBox de 120px avec une largeur d'affichage de 96-128px. Le resultat : une fine brindille marron, pas un arbre.

### La Solution : Un Arbre Imposant et Realiste

---

### 1. Nouveau TreeOfLife.tsx - Un Vrai Tronc d'Arbre

**Changements majeurs :**
- Largeur du composant : **180-220px** au lieu de 96-128px
- Tronc SVG : epaisseur de **60-80px** au lieu de 20px
- Texture d'ecorce realiste avec :
  - Fissures verticales profondes
  - Noeuds du bois visibles
  - Degrade marron realiste (brun fonce au centre, plus clair sur les bords)
  - Effet 3D avec ombrage
- **Racines imposantes** qui s'etalent vers le bas
- **Branches principales** qui sortent du tronc a differentes hauteurs
- Mousse et lichen sur le tronc
- Forme irreguliere naturelle (pas parfaitement droite)

**Structure SVG :**
```
Tronc : ~80px de large, courbes naturelles
Ecorce : lignes de texture, noeuds, fissures
Branches : 3-4 branches principales visibles sortant vers la droite
Racines : reseau de racines epaisses en bas
```

---

### 2. Nouveau BranchConnector.tsx - De Vraies Branches

**Actuellement :** Une ligne fine de 10px
**Nouveau design :**
- Epaisseur de **15-25px** degressif
- Forme en S naturelle avec courbes Bezier
- Texture bois visible sur la branche
- Sous-branches et brindilles
- **Feuilles au bout** (plusieurs feuilles stylisees)
- Petits bourgeons et ramifications

---

### 3. Nouveau Hero avec Image de Fond Immersive

**Remplacement de l'image hero actuelle par :**
- Grande image de fond (foret, nature luxuriante)
- Overlay gradient pour lisibilite du texte
- Contenu hero positionne avec espace pour l'arbre
- Stats et badges redesignes avec style organique

---

### 4. Ajustements Layout

**Modifications :**
- `.tree-content-area` : padding-left augmente a 180-220px
- Hero : layout asymetrique avec l'arbre bien visible
- Sections : espacement adapte pour les nouvelles branches

---

### 5. Animations Enrichies

**Nouvelles animations :**
- Tronc qui "pousse" de haut en bas
- Ecorce qui apparait progressivement
- Branches qui se deploient avec un effet de croissance naturel
- Feuilles qui apparaissent avec un leger tremblement
- Parallax subtil au scroll

---

### Implementation Technique

| Fichier | Action |
|---------|--------|
| `src/components/TreeOfLife.tsx` | Refonte complete - tronc 3x plus large, texture realiste |
| `src/components/BranchConnector.tsx` | Branches epaisses avec feuillage |
| `src/components/RevealBlock.tsx` | Ajustements positionnement |
| `src/pages/Index.tsx` | Hero redesigne, layout ajuste |
| `src/index.css` | Nouvelles animations, classes utilitaires |
| `tailwind.config.ts` | Animations supplementaires si necessaire |

---

### Resultat Attendu

Un vrai arbre de vie majestueux :
- Tronc epais et texturee visible des l'arrivee
- Branches qui "poussent" vers les blocs de contenu
- Sensation d'etre dans une foret/nature
- Design premium et unique qui marque les visiteurs
- Coherence totale avec l'univers naturopathie/sophrologie

