# Clavier

## Images

### ISO QWERTY

![ISO_keyboard_(105)_QWERTY_UK](image-1.png)

### AZERTY

![AZERTY_FR](image.png)

### Nouvel AZERTY

![alt text](image-2.png)

Aller sur le site `https://norme-azerty.fr/`

### Clavier BÉPO

![alt text](image-5.png)

Aller sur le site `https://bepo.fr/wiki/Accueil`

### Clavier Galéron

![alt text](image-6.png)

Aller sur le site `http://accentuez.mon.nom.free.fr/Clavier-DispositionClavierGaleron.php`

### AZERTY MAC

![alt text](image-3.png)

### Clavier Visuel Windows (touche AltGr enfoncée)

![alt text](image-4.png)

## Liste des Touches du claiver AZERTY français

### Test du clavier

Clavier complet : `https://en.key-test.ru/`

Code JavaScript simple keyUp / keyDown : `https://javascript.info/keyboard-events#keyboard-test-stand`

### Nombre et disposition

Clavier standard : 105 touches au total + touche Fn.

- Gauche : 76 touches
  - Esc + 12 fonctions
  - Chiffres : 14 touches
  - (Tab) : 14 touches
  - (Caps Lock) : 13 touches
  - (Shift) : 13 touches
  - (Ctrl) : 8 touches
- Milieu : 13 touches
- Pavé numérique : 17 touches

### Touches de caractère

- 1 touche `Fn`
- 6 touches de modification
  - `⇧ LShift MajGauche ⇧ RShift MajDroit`
  - `⌃✲⎈ LCtrl CtrlGauche, ⌃✲⎈ RCtrl CtrlDroit`
  - `⎇ LAlt AltGauche, ⎇ AltGr`
- 1 touche `⎋ Escape Échap`
- 2 touches système rarement utilisées
  - `PrnScn Imprécr/SysRq Syst`
  - `Pause/Break Attn`
- 3 touches Window `⊞❖ LWindows, ⊞❖ RWindows, ▤ Menu`
- 3 touches de blocage :
  - `⇭ NumLock VerrNum`
  - `🄰 ⇪CapsLock VerrMaj`
  - `⇳ScrollLock ArrêtDéfil (rare)`
- 5 touches d'édition :
  - `↩ ⏎ ↵ Return Retour chariot (similaire à ⌤)`
  - `⌤ ⌅ Enter Entrée`
  - `⎀ Ins`
  - `⌦ Del Suppr`
  - `⌫ ⟵ Bacskapce Retour arrière`
- 9 touches de navigation
  - `⭾ Tab` 
  - `↖ Home Début, ↘ End Fin`
  - `⇞ PgUp Pg préc, ⇟ PgDwn Pg suiv`
  - `←, ↑, →, ↓`
- 12 touches de fonction `F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12`
- 15 autres touches sur le pavé numérique, dont ⎖ Séparateur de décimal 
- 49 touches de caractère

### Windows vs MacOS

- Windows : `Ctrl ❖ Window Alt ▤ Menu`
- Mac     : `Ctrl, ⌥ option (Alt), ⌘ command`
  
## Clavier et programmation

### Touche `Fn` et `F-Lock`

- La touche `Fn` n’est pas gérée par le système d’exploitation.  
- La touche `Fn` est une touche de modification
- Le nombre de touches sur un clavier est très variable. Certains claviers n’ont pas de pavé numérique et les 13 touches au milieu du clavier sont absentes ou disposées autrement. La touche `Fn` plus une autre touche permet de simuler l’appui sur une touche manquante.
- La touche `Fn` permet d’ajouter d’autres commandes : régler le volume sonore, régler la luminosité, etc.
- La touche `F-Lock` permet de déterminer si un appui sur la touche F1 affiche l’aide ou bien lance la commande comme si on avait appuyé sur `Fn + F1`.

### Touches particulières

- `Ctrl + Alt + Delete` était interceptée par le BIOS et permettait de redémarrer un PC. Quasi impossible à simuler par logiciel sous Windows. L’équivalent sous macOS : `⌘ Command + ⌥ Option + Esc`.
- `Break` est un cas particulier. `Ctrl + Pause` ou `Ctrl + Attn` `(Attn=Attente)`, elle permet d’interrompre un programme en cours d’exécution. En PowerShell, cette touche démarre le débugger. `Ctrl + C` interrompt également un programme en cours d’exécution, `Ctrl + Break` est plus fort que `Ctrl + C` et moins facile à contourner.
- Sous Windows, `Ctrl + Alt` est similaire à `AltGr` mais il est possible de différencier les deux.
- Où se trouvent les touches `Pause/Break`, `NumLock`, `ScrollLock` sur votre clavier ? Une combinaison de touches produit-elle les `scancode` correspondants ?

### Notion : Scancode

![alt text](image-8.png)

Chaque touche du clavier est considérée comme un interrupteur, lorsqu’on appuie sur une touche, le clavier renvoie un numéro que l’on appelle le scan code. Lorsqu’on relâche la touche, le clavier envoie à nouveau un scan code à l’ordinateur. Mais certaines touches ne renvoient pas un scan code, mais deux ou trois : le premier octet envoyé est toujours 224 (0xE0 en hexadécimal), ou 225 (0xE1) (touche Break qui envoie `0xE1 0x1D 0x45` et `0xE1 0x9D 0xC5`).

Une touche Origine pressée envoie `0x47`, l’autre (sur le pavé numérique) envoie `0xE0 0x47`. Le code envoyé au relâchement de la touche est identique.

### Notion : Touche virtuelle

La liste des touches virtuelles dépend du système d’exploitation. La touche virtuelle `VK_F1` (ou équivalent) signifie que la touche `F1` a été pressée. La correspondance entre les `scancode` et les touches virtuelles est effectuée par le pilote de clavier.

Certaintes touches multimédia, par exemple pour gérer le volume audio, sont des touches virtuelles. Voir la [liste pour Windows](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes).

### Notion : Touches de modification

- Sous Windows, `⇧ Shift, ⌃ Ctrl, ⎇ Alt` sont des touches de modification facilement détectables (avec ou sans différencier droite et gauche).
- Il est facile de détecter si `⇭ NumLock` ou `⇪ CapsLock` sont activés  
- Les touches `⇮ AltGr, ⊞ Win, ⌘ Cmd, Fn` sont également des touches de modification mais fonctionnent différemment.

### Notion : Deadkey / Touche morte

Une `deadkey` ou `touche morte` provoque un événement clavier mais ne produit pas de caractère. Le symbole est combiné avec la touche suivante. Sur le clavier AZERTY, nous avons trois touches mortes (quatre diacritiques):

![alt text](image-9.png)

- ◌̀ `accent grave       àèìòù ÀÈÌÒÙ`
- ◌̂ `accent circonflexe âêîôû ÂÊÎÔÛ`
- ◌̈ `tréma              äëïöüÿ ÄËÏÖÜ`
- ◌̃ `tilde              ãñõ ÃÑÕ`
- Non présentes sur le clavier AZERTY :
  - ◌́ `accent aigu éÉ`
  - ◌̧ `cédille pour les lettre ç et Ç`

### Notion : Ligatures

- Au niveau du pilote de clavier, il est possible de définir des ligatures mais le clavier AZERTY français n’en comporte aucune.
- La langue française comporte deux ligatures : `æÆ` comme dans `Lætitia` et `œŒ` comme dans `cœur` ou `Œuf`.
- `&` et `w` sont des ligatures : `Et` `vv`

### Notion : HotKey / Raccourci / Touche système

Une `HotKey` ou un `raccourci clavier` est généralement une combinaison de touches (avec `Ctrl` ou `Alt`) qui permet d’exécuter une commande. Certains raccourcis sont définis au niveau du système d’exploitation mais les programmes ont une grande liberté.

Selon les besoins et les fonctions utilisées, il sera possible/souhaitable ou non de détecter la différence entre `Shift gauche` et `Shift droit`.

### Événements clavier

Le contrôleur électronique du clavier, le système d’exploitation et le pilote traitent les cas particuliers. Le système d’exploitation transmet les événements clavier aux services qui écoutent ces événements (keylogger, `AutoHotkey`) et à l’application active.

Le système d’exploitation permet aux processus des applications de capturer les événements suivants :

- touche enfoncée, avec son `scancode`
- touche relâchée, avec son `scancode`
- touche pressée (enfoncée puis relâchée)
- `caractère(s)` saisi(s), dans le codage local (`windows-1252`) ou en `UTF-16`.

Plusieurs fonctions de bas niveau sont disponibles. Certaines renvoient directement le caractère saisi, d’autre sont plus précises. La manière de déterminer la touche (fléche de direction) ou le caractère (lettre) dépend de la fonction utilisée. Se référer à la documentation correspondante.

### Transformation en caractère

Au niveau du [pilote du clavier](https://github.com/m icrosoft/Windows-driver-samples/blob/main/input/layout/all_kbds/kbdfr/kbdfr.c) ([fichier .h générique](https://github.com/awakecoding/Win32Keyboard/blob/master/kbd.h)), à certaines combinaisons de touches (`scancode` + `modificateurs` + `touches mortes`) sont associées un caractère. 

Par exemple, la touche `e` située entre le `z` et le `r` permet de produire les caractères suivants avec `Shift`, `AltGr` (`Ctrl + Alt`) et les touches mortes : ``eE€ êëè ÊËÈ ˆ€¨€`€``. Le raccourci `⊞ Win + e` ouvre l’explorateur de fichier et `⊞ Win + Shift + e` est défini dans Visual Studio Code. Cela fait 14 comportements différents pour une seule touche, dont 5 sans tenir compte des touches mortes !

Au niveau du pilote de clavier, dans l’exemple ci-dessus, l’encodage est soit `ascii` soit `Unicode` (probablement `UTF-16`). Le système d’exploitation impose les encodages possibles aux pilotes.

Le système d’exploitation fournit aux applications les caractères frappés au clavier. Les caractères sont presque toujours réencodées par le système d’exploitation et/ou par les applications (`ISO 8859-15`,`Windows-1252`, `UTF-8`, `UTF-16`, etc.) avant d’être traités par les applications.

## Redéfinir les touches de clavier

Plusieurs solutions permettent de redéfinir le comportement des touches de clavier :

- Installer un autre pilote de clavier : [clavier galéron](http://accentuez.mon.nom.free.fr/Clavier-Galeron.php) qui ajoute des touches au clavier azery classique, [bépo](https://bepo.fr/wiki/Windows) qui replace les touches selon la fréquence d’utilisation, [azerty NF Z71-300](https://norme-azerty.fr/#setup) qui complète le clavier azerty français
- [`Microsoft PowerToys`](https://learn.microsoft.com/fr-fr/windows/powertoys/) permet de remapper certaines touches.
- [`AutoHotKey`](https://www.autohotkey.com/). Très complet et flexible. `AutoHotKey` affiche le `scancode` des touches. On ajoute des symboles pour les modificateurs. On associe un comportement à une touche ou une combinaison de touches.
- [`Microsoft Keyboard Layout Creator`](https://www.microsoft.com/en-us/download/details.aspx?id=102134)
  
## Saisie Unicode / caractères spéciaux

### Table des caractères

Le plus simple : chercher le caractère souhaité dans la table des caractères.

### Windows : Alt ou AltGr

> Avertissement : non testé

Pressez la touche `Alt + nnn` (trois chiffres) ou `Alt + 0nnn` pour produire un caractère qui dépend de la page de code (`437`, `850`, `windows-1252`).

`Alt + 8364` devrait produire le symbole `€`.

Dans la clé de registre `HKEY_CURRENT_USER\Control Panel\Input Method` mettez `EnableHexNumpad` à 1. `Alt + x20AC` devrait produire le symbole `€` (ou `Alt + c20AC`) dans certaines applications.

### Linux : Ctrl + Shift + U

Possible sous Windows grâce à [Unicode DB IME for Windows](https://github.com/xkjyeah/itf-unicode-db). Il faut mettre le clavier en anglais, lancer l’application, appuyer sur `Ctrl+Shift+u+ù` ou sur `Ctrl+Shift+u+'`. Cela permet de rechercher un caractère Unicode d’après son nom.

> Avertissement : non testé

`Ctrl + Shift` (maintenir enfoncé) `u + code hexadécimal`  puis relâcher `Ctrl + Shift`.

### MacOS

> Avertissement : non testé

Nécessite l’activation de la saisie hexadécimale.

### Clavier Visuel

Le clavier Visuel de Microsoft, qui permet de trouver un caractère, un emoji, un gif animé... Pour l’ouvrir, il faut aller dans `Paramètres`.

![alt text](image-11.png)

### Internet

- [Xahlee, des icônes classées](http://xahlee.info/comp/unicode_index.html?q=) 
- [FileFormat.Info - Unicode](https://www.fileformat.info/info/unicode/index.htm) pour plus des détails techniques
- [Compart.com - Unicode](https://www.compart.com/fr/unicode) qui explique Unicode et permet de trouver des caractères Unicode.

### Voir et tester des dispositions de clavier

Site [branah.com](https://www.branah.com/french)

![alt text](image-14.png)

Le pilote du clavier azery français sous Linux est plus complet :

![alt text](image-10.png)

## Divers / Icônes complémentaires

- ⭿ Tabulation verticale
- ⏏ Eject
- ⌽ Power
- ⍽ No break space
- ␣ Space

## Source

[Wikimedia QWERTY](https://commons.wikimedia.org/wiki/File:ISO_keyboard_(105)_QWERTY_UK.svg)

[Wikimedia AZERTY](https://commons.wikimedia.org/wiki/File:Clavier-Azerty.svg)

[norme-azerty.fr](https://norme-azerty.fr/)

[Amazon Apple](https://static.macway.com/images/p/g/originalid_2500/100/2654/main/2654_0540707.jpg (Amazon - Apple Magic Keyboard 2 - Blanc - Français))

[Icones touches de clavier acrobat](https://www.acrobatfaq.com/atbref5/index/KeyboardShortcuts/UnicodeCodesforKeyboards.html) / cf. [maj](https://acrobatfaq.com/atbref10/index/Keyboard_Shortcuts/Keyboard_shortcuts_keys_and_symbols.html)

[Icones touches de clavier xahlee](http://xahlee.info/comp/unicode_computing_symbols.html)

[xahlee Différence Windows Mac](http://xahlee.info/kbd/apple_pc_kb_diff.html)

[TaranVH ScanCode, VK et AutoHotkey](https://github.com/TaranVH/2nd-keyboard/blob/master/README.md)

[AutoHotkey](https://www.autohotkey.com/docs/v2/KeyList.htm)

[Wikipedia Key_press](https://en.m.wikipedia.org/wiki/Template:Key_press)

[github keylogger](https://github.com/wikthewiz/windows_keylogger/)

[Wikipedia IBM_PC_keyboard](https://en.m.wikipedia.org/wiki/IBM_PC_keyboard#Keyboard_layouts)

[github pilote clavier kbd.h](https://github.com/awakecoding/Win32Keyboard/blob/master/kbd.h)

[branah.com Modèles de clavier](https://www.branah.com/)