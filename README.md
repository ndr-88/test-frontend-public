## Design

Il design si trova alla [seguente pagina di Figma](https://www.figma.com/file/vP91H4eD6zzkH4XHd0wn1j/Rick-and-Morty?mode=dev). Nel tab "Design System" si trovano i diversi elementi del design system da implementare (font, colori, griglia). Nel tab "homepage" si trovano le schermate da sviluppare. La terza schermata è opzionale.

## Obiettivi del test

Gli obiettivi del test sono divisi in "**mandatory**" (ovvero quello che ci si aspetta per raggiungere la definition of done del test) e "**nice to have**" (bonus nel caso si finisca prima del previsto)

- #### Mandatory
- - Fetchare dalla [API di Rick And Morty](https://rickandmortyapi.com/) dei personaggi e mostrarli come da layout, stampando le informazioni in maniera corretta prestando particolare attenzione alla descrizione.
- - Al click sulle frecce nella paginazione (precedente e successiva) si dovrà fetchare la pagina successiva della API e **aggiornare la UI** con i nuovi personaggi ottenuti.
- - Inserendo un testo nella barra di ricerca sarà possibile **filtrare** il personaggio ottenuto in base al nome.
- - Almeno **la griglia con i personaggi e la barra di ricerca devono seguire il design system** ed essere il più accurati possibile.

- #### Nice to have
- - Chiara divisione dei componenti e del codice riutilizzabile, utilizzando una folder structure leggibile.
- - Completare l'intera logica dei filtri, implementando anche quelli nella pagina 3 del Figma.
- - Completare l'intera UI seguendo il design proposto.
- - Creare una paginazione infinita così che i nuovi personaggi fetchati si vadano ad aggiungere a quelli già esistenti, scrollando il Documento nel punto giusto.
- - Versione Mobile e/o Tablet

## Note

- Sarebbe opportuno utilizzare TypeScript.
- Sarebbe opportuno effettuare vari commit ogni volta che si lavora ad una feature, utilizzando i conventional commits.
