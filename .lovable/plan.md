

## Corrections visuelles

### Problème 1 : Gradient blanc trop prononcé sur le Hero
Le gradient actuel `from-background via-background/80 to-transparent` cache l'image de fond.

**Solution** :
- Modifier `src/pages/Index.tsx` ligne 31
- Changer en : `from-background/60 via-background/40 to-transparent`
- L'image de fond sera beaucoup plus visible

---

### Problème 2 : Retirer les "branchettes découpées" sur le tronc
Les 5 branches principales qui sortent du tronc (lignes 165-229 de `TreeOfLife.tsx`) ressemblent à des branches coupées.

**Solution** :
- Supprimer tout le groupe `<g>` contenant les "BRANCHES PRINCIPALES QUI SORTENT DU TRONC" (lignes 160-229)
- Le tronc restera propre avec juste l'écorce texturée

---

### Fichiers à modifier

| Fichier | Modification |
|---------|--------------|
| `src/pages/Index.tsx` | Réduire l'opacité du gradient (ligne 31) |
| `src/components/TreeOfLife.tsx` | Supprimer le groupe des branches principales (lignes 160-229) |

---

### Résultat attendu
- Image de fond visible avec un léger voile pour la lisibilité du texte
- Tronc propre sans branchettes découpées - seules les branches animées du BranchConnector resteront

