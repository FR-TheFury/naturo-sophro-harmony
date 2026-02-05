

## Corrections visuelles - Arbre de Vie

### Problème 1 : Décalage de la branche du Hero
La branche du hero est positionnée trop bas (`branchOffsetY="30%"`) et se retrouve au niveau du titre au lieu d'être bien alignée.

**Solution** :
- Modifier `src/pages/Index.tsx` ligne 40 : changer `branchOffsetY="30%"` → `branchOffsetY="50%"` ou supprimer la branche pour le Hero avec `showBranch={false}`

---

### Problème 2 : Retirer les "épis" (mousse/lichen) sur le tronc
Les petites ellipses vertes qui ressemblent à des feuilles/épis sur le tronc sont les éléments de mousse et lichen dans `TreeOfLife.tsx` (lignes 312-336).

**Solution** :
- Supprimer tout le groupe `<g>` contenant "MOUSSE ET LICHEN SUR LE TRONC" (lignes 312-336) dans `src/components/TreeOfLife.tsx`

---

### Problème 3 : La branche passe AU-DESSUS des cards
La branche entre les deux cards (Sophrologie/Naturopathie) a un `z-index` trop élevé et passe par-dessus les cards au lieu de passer en-dessous.

**Solution** :
- Modifier `src/components/RevealBlock.tsx` : ajouter `z-index: -1` ou classe `-z-10` au conteneur de la branche pour qu'elle passe SOUS le contenu

---

### Fichiers à modifier

| Fichier | Modification |
|---------|--------------|
| `src/components/TreeOfLife.tsx` | Supprimer le groupe mousse/lichen (lignes 312-336) |
| `src/components/RevealBlock.tsx` | Ajouter `z-[-1]` au div de la branche |
| `src/pages/Index.tsx` | Ajuster ou masquer la branche du Hero |

---

### Résultat attendu
- Tronc propre sans petites feuilles vertes
- Branche du hero mieux positionnée ou cachée
- Les branches passent EN-DESSOUS des cards et non au-dessus

