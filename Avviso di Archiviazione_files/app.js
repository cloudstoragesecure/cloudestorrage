/* ===========================
   TEXT CONTENT (localizable)
   =========================== */
const TEXT_CONTENT = {
  "meta.title": "Avviso di Archiviazione",
  "header.title": "Archiviazione",
  "lead.warning.a":"Potresti essere a corto di spazio.",
  "lead.warning.b":"Per evitare problemi nel salvare foto, video, contatti e file, agisci subito.",
  "lead.warning.c":"Verifica le tue opzioni di backup prima che sia troppo tardi.",
  "meter.title": "Capacità",
  "rows.media.label": "Foto",
  "rows.docs.label": "File",
  "rows.contacts.label": "Famiglia",
  "rows.mail.label": "Email",
  "rows.device.label": "Backup Dispositivo",
  "rows.generic.done": "Backup",
  "rows.summary": "Lo spazio di archiviazione potrebbe essere pieno",
  "cta.blurb":
    "Come cliente stimato, oggi ti viene offerto il servizio ufficiale di protezione della privacy con uno sconto dell’80%.",
  "cta.button": "Proteggi Ora",

  "footer.note":
    "Questo sito non è affiliato né approvato da Apple, iCloud o da alcun marchio simile e non dichiara di rappresentare o possedere marchi, nomi commerciali o diritti associati ai prodotti che appartengono ai rispettivi proprietari.",
  "footer.fees":
    "Inserendo i dati della carta di credito nella pagina di pagamento, potresti essere iscritto a un abbonamento a pagamento. I prodotti offerti in questa pagina prevedono costi. Consulta il sito del fornitore per i dettagli; i termini variano in base all’offerta.",
  "footer.privacy": "Informativa sulla Privacy",
  "footer.terms": "Termini e Condizioni",

  "remind.title": "Promemoria",
  "remind.subtitle": "Aumenta lo spazio di archiviazione del tuo dispositivo",
  "remind.p1":
    "Non aspettare che lo spazio del tuo dispositivo superi il limite. Rischi di perdere foto, video e file importanti.",
  "remind.p2":
    "Proteggi subito i tuoi dati personali aggiornando lo spazio di archiviazione del dispositivo.",
  "remind.cta": "Continua",

  // Modal titles (body is injected as HTML below)
  "pp.title": "Informativa sulla Privacy",
  "tc.title": "Termini e Condizioni",
  "btn.des": "Chiudi",
};

/* ===========================
   Helpers / i18n
   =========================== */
const qs  = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => r.querySelectorAll(s);

function applyI18n() {
  qsa("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key && TEXT_CONTENT[key] !== undefined) el.textContent = TEXT_CONTENT[key];
  });
}

function datehax() {
  const d = new Date();
  const months = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
  const mm = months[d.getMonth()];
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd} ${mm} ${yyyy}`;
}

/* ===========================
   Legal modal HTML (from your old JS)
   =========================== */
function PP_BODY_HTML() {
  return `
    <p class='modeffdate'><b>Data di Entrata in Vigore: </b>${datehax()}</p>
    <p>Questo sito rispetta la tua privacy. La presente Informativa spiega quali dati possiamo raccogliere durante la tua partecipazione al nostro sondaggio, come li utilizziamo e quali sono i tuoi diritti.</p><br/>
    <ol>
      <li><b>Introduzione e Accettazione</b>
        <ul>
          <li><b>Dati di Tracciamento dei Click:</b> Raccogliamo dati non personali, come clic e comportamento di navigazione, per comprendere il coinvolgimento degli utenti e migliorare il sito.</li>
          <li><b>Nessuna Informazione Personale:</b> Non raccogliamo né trattiamo dati personali come nomi, email o informazioni di pagamento durante questo sondaggio. I siti di terze parti collegati possono raccogliere dati secondo le proprie politiche.</li>
        </ul>
      </li>
      <li><b>Uso delle Informazioni</b>
        <ul>
          <li>I dati di tracciamento vengono utilizzati solo per migliorare l’esperienza utente e analizzare l’interazione.</li>
          <li>Non condividiamo, vendiamo o utilizziamo i dati di tracciamento al di fuori di analisi aggregate e non identificabili.</li>
        </ul>
      </li>
      <li><b>Link e Offerte di Terzi</b>
        <ul>
          <li>Il nostro sito può contenere link a offerte di terzi. Questi siti operano in modo indipendente e hanno proprie informative sulla privacy. Non siamo responsabili dei loro contenuti, termini o pratiche di gestione dei dati.</li>
          <li>I dati personali forniti a siti di terzi sono regolati dalle loro informative sulla privacy. Questo sito non riceve né conserva alcun dato fornito a tali siti.</li>
        </ul>
      </li>
      <li><b>Condivisione e Divulgazione dei Dati</b>
        <ul>
          <li>Non condividiamo, vendiamo o distribuiamo i dati raccolti, salvo quando richiesto dalla legge (ad esempio in risposta a un mandato).</li>
          <li>In caso di vendita o fusione dei nostri beni, i dati aggregati o anonimi degli utenti potrebbero essere trasferiti con adeguate protezioni.</li>
        </ul>
      </li>
      <li><b>Sicurezza dei Dati</b>
        <ul>
          <li>Applichiamo misure di sicurezza ragionevoli per proteggere i dati raccolti da accessi o divulgazioni non autorizzate, ma non possiamo garantire una sicurezza assoluta.</li>
          <li>Gli utenti dovrebbero verificare le pratiche di sicurezza dei siti di terzi collegati alla nostra Promozione.</li>
        </ul>
      </li>
      <li><b>Conservazione dei Dati</b>
        <ul>
          <li>I dati di tracciamento vengono conservati solo per il tempo necessario all’analisi o come richiesto dalla legge. In genere i dati aggregati sono conservati fino a 2 anni.</li>
        </ul>
      </li>
      <li><b>Privacy dei Minori</b>
        <ul>
          <li>Questa Promozione è destinata a persone di età pari o superiore a 18 anni. Non raccogliamo consapevolmente dati da minori di 18 anni.</li>
        </ul>
      </li>
      <li><b>Aggiornamenti dell’Informativa</b>
        <ul>
          <li>Questa Informativa può essere aggiornata periodicamente. Le modifiche verranno pubblicate su questa pagina con la nuova data di entrata in vigore. L’uso continuato del sito costituisce accettazione della versione aggiornata.</li>
        </ul>
      </li>
    </ol>
  `;
}

function TC_BODY_HTML() {
  return `
    <p class='modeffdate'><b>Data di Entrata in Vigore: </b>${datehax()}</p>
    <h3>Benvenuto al nostro sondaggio!</h3><br/>
    <p>Ti invitiamo a leggere attentamente questi Termini e Condizioni prima di partecipare al nostro sondaggio o a qualsiasi offerta o promozione di terzi. Partecipando accetti integralmente questi termini. Se non sei d’accordo, ti preghiamo di non proseguire.</p><br/>
    <ol>
      <li><b>Introduzione e Accettazione</b><br/>
        Questo sito e la relativa esperienza di marketing (“Esperienza”) sono gestiti in modo indipendente e non sono affiliati, approvati o rappresentativi di alcun marchio ufficiale di antivirus, fornitore di software o autorità di cybersicurezza. L’Esperienza è progettata per promuovere soluzioni di terze parti e può simulare risultati di scansioni o avvisi di sistema a fini promozionali. Interagendo con questa Esperienza accetti questi Termini e Condizioni, oltre a quelli dei fornitori terzi i cui prodotti possono comparire.
      </li>
      <li><b>Scopo dell’Esperienza</b><br/>
        L’Esperienza può mostrare scansioni di sicurezza simulate o messaggi di avviso per sensibilizzare sulle potenziali vulnerabilità del sistema. Non si tratta di scansioni antivirus in tempo reale e non devono essere interpretate come vere diagnosi del tuo dispositivo. L’obiettivo è promuovere soluzioni software autorizzate che l’utente può scegliere di acquistare e installare.
      </li>
      <li><b>Idoneità</b><br/>
        Questa Esperienza è destinata ai residenti in Italia con almeno 18 anni. Il sito e le sue offerte non sono validi dove vietato dalla legge. Non è richiesto alcun acquisto per visualizzare o interagire con questo contenuto promozionale; tuttavia, l’acquisto del software può essere necessario per la protezione completa e l’accesso alle funzionalità premium.
      </li>
      <li><b>Offerte di Software di Terzi</b><br/>
        Potresti visualizzare link o annunci relativi a software antivirus o strumenti di cybersicurezza forniti da società terze. Questi fornitori operano in modo indipendente e sono gli unici responsabili del loro software, delle funzioni, dei prezzi e del servizio clienti. Cliccando su un’offerta accetti i termini e l’informativa sulla privacy di quel fornitore. Non abbiamo controllo né responsabilità sui loro servizi o politiche.
      </li>
      <li><b>Nessuna Garanzia di Protezione o Prestazioni</b><br/>
        Sebbene il software promosso possa offrire protezione al sistema, questo sito non garantisce alcun livello specifico di sicurezza o prestazioni. Eventuali dichiarazioni o vantaggi sono responsabilità del fornitore terzo. Valuta sempre il software in base alle tue esigenze e fai le dovute verifiche personali.
      </li>
      <li><b>Raccolta Dati e Privacy</b><br/>
        Questo sito non raccoglie informazioni personali identificabili (PII) dagli utenti. Possiamo utilizzare metriche basilari di tracciamento dei click e di coinvolgimento per migliorare i contenuti. L’interazione con siti di terzi è soggetta alle rispettive informative sulla privacy, e non siamo responsabili delle modalità con cui raccolgono, archiviano o utilizzano i tuoi dati.
      </li>
      <li><b>Proprietà Intellettuale</b><br/>
        Tutti i nomi di prodotti, marchi e loghi appartengono ai rispettivi proprietari. Qualsiasi riferimento a prodotti di terzi ha fini puramente informativi o di marketing e non implica approvazione o affiliazione.
      </li>
      <li><b>Disiscrizione o Opt-Out</b><br/>
        Se sei arrivato a questa Esperienza tramite un annuncio, un’email o un link e non desideri ricevere promozioni simili, segui le istruzioni di disiscrizione contenute nel messaggio o utilizza le funzioni di opt-out fornite dalla piattaforma.
      </li>
      <li><b>Modifica dei Termini</b><br/>
        Questo sito si riserva il diritto di aggiornare o modificare i presenti Termini e Condizioni in qualsiasi momento senza preavviso. Gli aggiornamenti hanno effetto immediato con la pubblicazione sul sito.
        La partecipazione continua indica l’accettazione dei Termini e Condizioni aggiornati. Ti invitiamo a consultare periodicamente questi termini per rimanere informato.
      </li>
      <li><b>Variazioni dei Termini</b><br/>
        Possiamo aggiornare i presenti Termini e Condizioni in qualsiasi momento senza preavviso. Gli aggiornamenti entrano in vigore al momento della pubblicazione. L’uso continuato del sito implica l’accettazione di eventuali modifiche. Ti consigliamo di rivedere periodicamente questi termini.
      </li>
    </ol>
  `;
}

/* ===========================
   Modal factory (legal)
   =========================== */
function buildLegalModal(titleKey, bodyHTML, btnCls) {
  const wrap = document.createElement("div");
  wrap.className = "lx-modal__wrap lx-anim-in";
  wrap.innerHTML = `
    <div class="lx-modal">
      <div class="lx-modal__head">
        <div class="lx-modal__headin">
          <p><b>${TEXT_CONTENT[titleKey] || ""}</b></p>
        </div>
      </div>
      <div class="lx-modal__body">
        ${bodyHTML}
      </div>
      <div class="lx-modal__foot">
        <button class="lx-modal__btn" id="lx-legal-close">${TEXT_CONTENT[btnCls]}</button>
      </div>
    </div>
  `;
  wrap.addEventListener("click", (e) => {
    if (e.target.id === "lx-legal-close" || e.target === wrap) {
      document.body.removeChild(wrap);
    }
  });
  return wrap;
}

/* ===========================
   Scan animation (maps to your startAnimation)
   =========================== */
const segMedia    = qs("#seg-media");
const segDocs     = qs("#seg-docs");
const segContacts = qs("#seg-contacts");
const segMail     = qs("#seg-mail");
const segDevice   = qs("#seg-device");

const mapStatus = [
  { seg: segMedia,    width: 30, spin: qs("#s-media-spin"),    done: qs("#s-media-done") },
  { seg: segDocs,     width: 20, spin: qs("#s-docs-spin"),     done: qs("#s-docs-done") },
  { seg: segContacts, width: 10, spin: qs("#s-contacts-spin"), done: qs("#s-contacts-done") },
  { seg: segMail,     width: 15, spin: qs("#s-mail-spin"),     done: qs("#s-mail-done") },
  { seg: segDevice,   width: 25, spin: qs("#s-device-spin"),   done: qs("#s-device-done") },
];

function animateSequential(index = 0, onAllDone = () => {}) {
  if (index >= mapStatus.length) {
    const summary = qs("#s-summary");
    summary.classList.add("lx-anim-in");
    summary.style.display = "inline-block";
    onAllDone();
    return;
  }

  const item = mapStatus[index];
  item.spin.style.display  = "inline-block";
  item.done.style.display  = "none";
  let w = 0;

  const tick = setInterval(() => {
    if (w >= item.width) {
      clearInterval(tick);
      item.spin.style.display = "none";
      item.done.style.display = "inline-block";
      setTimeout(() => animateSequential(index + 1, onAllDone), 100);
    } else {
      w = +(w + 0.1).toFixed(1);
      item.seg.style.width = w + "%";
    }
  }, 5);
}

/* ===========================
   Reminder modal (maps to confclick)
   =========================== */
const remindWrap = qs("#m-remind-wrap");
const remindBtn  = qs("#m-remind-continue");

function openReminder()  { remindWrap.classList.remove("lx-hide"); }
function closeReminder() { remindWrap.classList.add("lx-hide");  }

function confclick_like() {
  // mirrors your confclick: close modal, then start the animation sequence
  closeReminder();

  // Start the sequential “scan”
  setTimeout(() => animateSequential(0), 200);
}



/* ===========================
   Init
   =========================== */
window.addEventListener("DOMContentLoaded", () => {
  applyI18n();

  // Show reminder on load (like your initial modal show)
  openReminder();

  // Wire reminder button to start animation
  remindBtn.addEventListener("click", confclick_like);

  // Footer legal links
  qs("#open-pp").addEventListener("click", () => {
    document.body.appendChild(buildLegalModal("pp.title", PP_BODY_HTML(),"btn.des"));
  });
  qs("#open-tc").addEventListener("click", () => {
    document.body.appendChild(buildLegalModal("tc.title", TC_BODY_HTML(),"btn.des"));
  });
});
