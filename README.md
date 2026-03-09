# Beauty & Makeup Hub - Proiect Laborator

### 1. Ce este o resursa (resource) in aplicatia ta?
[cite_start]In aplicatia mea, o resursa reprezinta un serviciu sau o locatie de infrumusetare (ex: salon de machiaj, spa sau studio de unghii)[cite: 42]. [cite_start]Datele despre acestea sunt stocate in format JSON si includ numele, locatia si programul[cite: 15, 16].

### 2. Da exemplu de un URI si explica componentele acestuia.
[cite_start]Exemplu: `https://utilizator.github.io/beauty-hub/pages/library.html#orar`[cite: 5, 43].
- **Protocol**: `https`
- **Host**: `utilizator.github.io`
- **Path**: `/beauty-hub/pages/library.html`
- [cite_start]**Fragment**: `#orar` (folosit pentru a sari direct la sectiunea de program)[cite: 10, 14].

### 3. Care parti sunt statice si care sunt dinamice?
- [cite_start]**Statice**: Structura HTML a paginilor si meniul de navigare[cite: 44].
- [cite_start]**Dinamice**: Lista de servicii de pe pagina principala, care este generata prin JavaScript (fetch) din fisierul JSON.

### 4. Este aplicatia ta document-centric sau interactive (sau ambele)? De ce?
[cite_start]Aplicatia este **ambele**[cite: 45]. [cite_start]Este **document-centric** deoarece ofera informatii de citit despre servicii si este **interactiva** deoarece permite filtrarea dinamica a continutului prin butoane[cite: 24, 45].