# Touches clavier windows

**`AltGr` = `Alternate Graphic`**

**Note : touche `AltGr` == touche `Alt côté droit`**

**Note : touche `AltGr` == raccourci `Ctrl + Alt`**

- Touches à connaître : `? , . ; : ! @`
- Touches à connaître : `+ - * / = % \`
- Touches à connaître : `_ < > ' " $ €`
- Slash `/`
- Backslash `\` => `AltGr _`
- Tilde `~` => `AltGr é espace`
- Barre verticale `|` => `AltGr -`
- Crochet Ouvrant `[` => `AltGr (`
- Crochet Fermant `]` => `AltGr )`
- Accolade ouvrante `{` => `AltGr '`
- Accolade fermante `}` => `AltGr =`
- Dièse `#` => `AltGr "`
- Backstick / accent grave `` ` `` => `AltGr è espace`

## Clavier français complet

### Touche normales

```txt
²     &  é  "  '  (  -  è  _  ç  à  )  =  <BS>
↔TAB  a  z  e  r  t  y  u  i  o  p  ^  $   ENT
VERRM   q  s  d  f  g  h  j  k  l  m  ù  * REE
MAJ <    w  x  c  v  b  n  ,  ;  :  !    MAJJJ
<CTL><W><A><¤¤¤¤¤¤¤ESPACE¤¤¤¤¤¤¤>AGR<W><L><CT>
```

### Avec MAJ

```txt
²    1  2  3  4  5  6  7  8  9  0  °  +
      A  Z  E  R  T  Y  U  I  O  P  ¨  £
       Q  S  D  F  G  H  J  K  L  M  %  µ
    >   W  X  C  V  B  N  ?  .  /  §
```

### Avec AltGr

```txt
  ~ # { [ | ` \ ^ @ ] }
     €                 ¤
```

### Combinaisons de touches

```txt
àèìòù ÀÈÌÒÙ
âêîôû ÂÊÎÔÛ
äëïöü ÄËÏÖÜ ÿ
ãñ ÃÑ
```

### Caractères manquants au clavier français standard

- Lettres : `æ Æ œ Œ Ÿ Ç É Ù`
- `º` indicateur ordinal masculin à ne pas confondre avec le symbole degré `°` comme °C ou °F : voir la différence : `º°`
- Signes de ponctuation : `« » ’ …`
- Espace insécable
- Espace fine insécable (séparateur de milliers)
- Tiret cadratin —, demi-cadratin –, etc. : cf. [Tiret - Wikipedia](https://fr.wikipedia.org/wiki/Tiret)
- Signes mathématiques : `≥ ≤ ± ≠ √`, etc.

## Autres claviers

- [Clavier Galéron](http://accentuez.mon.nom.free.fr/Clavier-Galeron.php)
- [Nouveau clavier AZERTY](http://norme-azerty.fr/)
- [Unicode DB IME](https://sourceforge.net/projects/itf-unicode-db/)
  - `Ctrl+Shift+U ù(nom)` ou bien `Ctrl+Shift+U '(nom)` puis saisir le nom du caractère (en anglais, avec un clavier anglais)
  - `Ctrl+Shift+U(code)` pour saisir un caractère Unicode
  - `Win+Espace` pour changer de clavier
- Clavier Visuel Windows
- Logiciel `AutoHotKey` pour définir des touches personnalisées

## Raccourcis Windows

- [Liste](https://www.mediaforma.com/windows-10-raccourcis-simples-touche-windows/)

## Saisie Unicode sous Windows

1. Table de caractères
2. Alt ou AltGr + Pavé numérique cf. `@reg add "HKCU\Control Panel\Input Method" /v EnableHexNumpad /t REG_SZ /d 1 /f`
3. [Unicode DB IME](https://sourceforge.net/projects/itf-unicode-db/)
4. Touche AltGr sans pavé numérique (à tester)
   - Activer `NumLock`
   - Appuyer sur `Fn` et `Alt` simultanément
   - Le code sur le pavé numérique
   - En relâchant les touches `Fn` et `Alt`, le symbole apparaît
