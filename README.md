# Notifica automatica bonus mobilità

Requisiti:
- avere node.js installato
- essere già in coda

Istruzioni:
1. crea un bot su telegram e inserisci il token nel file config.json
2. scrivi un messaggio al bot su telegram e otteni l'id della tua chat su `https://api.telegram.org/bot<YourBOTToken>/getUpdates`
3. vai sul sito della coda, apri i DevTools di chrome con F12, vai sulla tab network, dopo un po' vedrai queste connessioni:
4. fai tasto destro su una connessione > copia come node.js fetch
5. incolla alla linea 11 del file index.js
6. esegui con `node index.js`
