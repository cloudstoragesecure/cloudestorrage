/* ===========================
   TEXT CONTENT (lokalisierbar)
   =========================== */
const TEXT_CONTENT = {
  "meta.title": "Speicherwarnung",
  "header.title": "Speicher",
  "lead.warning.a": "Sie könnten bald keinen Speicherplatz mehr haben.",
  "lead.warning.b": "Um Probleme beim Speichern von Fotos, Videos, Kontakten und Dateien zu vermeiden, handeln Sie jetzt.",
  "lead.warning.c": "Überprüfen Sie Ihre Backup-Optionen, bevor es zu spät ist.",
  "meter.title": "Kapazität",
  "rows.media.label": "Fotos",
  "rows.docs.label": "Dateien",
  "rows.contacts.label": "Familie",
  "rows.mail.label": "E-Mails",
  "rows.device.label": "Gerätesicherung",
  "rows.generic.done": "Backup",
  "rows.summary": "Ihr Speicher könnte voll sein",
  "cta.blurb":
    "Als geschätzter Kunde haben Sie die Möglichkeit, den offiziellen Datenschutzdienst heute mit 80 % Rabatt zu beanspruchen.",
  "cta.button": "Jetzt sichern",

  "footer.note":
    "Diese Website ist nicht mit Apple, iCloud oder einer ähnlichen Marke verbunden und behauptet nicht, ein offizieller Vertreter oder Inhaber von Markenrechten an Produkten zu sein, die den jeweiligen Eigentümern gehören.",
  "footer.fees":
    "Durch die Eingabe von Kreditkartendaten auf der Zahlungsseite können Sie in ein kostenpflichtiges Abonnement aufgenommen werden. Produkte auf dieser Seite erfordern Gebühren. Weitere Informationen finden Sie auf der Website des Anbieters; die Bedingungen variieren je nach Angebot.",
  "footer.privacy": "Datenschutzrichtlinie",
  "footer.terms": "Allgemeine Geschäftsbedingungen",

  "remind.title": "Erinnerung",
  "remind.subtitle": "Erhöhen Sie den Speicher Ihres Geräts",
  "remind.p1":
    "Warten Sie nicht, bis der Speicher Ihres Geräts sein Limit überschreitet. Sie könnten Gefahr laufen, Fotos, Videos und wichtige Dateien zu verlieren.",
  "remind.p2":
    "Schützen Sie jetzt Ihre persönlichen Daten, indem Sie den Speicher Ihres Geräts erweitern.",
  "remind.cta": "Fortfahren",

  // Modal-Titel (der Inhalt wird unten als HTML eingefügt)
  "pp.title": "Datenschutzrichtlinie",
  "tc.title": "Allgemeine Geschäftsbedingungen",
  "btn.des": "Schließen",
};

/* ===========================
   Hilfsfunktionen / i18n
   =========================== */
const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => r.querySelectorAll(s);

function applyI18n() {
  qsa("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key && TEXT_CONTENT[key] !== undefined) el.textContent = TEXT_CONTENT[key];
  });
}

function datehax() {
  const d = new Date();
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  const mm = months[d.getMonth()];
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${mm} ${dd}, ${yyyy}`;
}

/* ===========================
   Rechtlicher Modal-HTML (aus Ihrem alten JS)
   =========================== */
function PP_BODY_HTML() {
  return `
    <p class='modeffdate'><b>Gültigkeitsdatum: </b>${datehax()}</p>
    <p>Diese Seite respektiert Ihre Privatsphäre. Diese Datenschutzrichtlinie erklärt, welche Arten von Daten wir während Ihrer Teilnahme an unserer Umfrage sammeln, wie wir diese Informationen verwenden und Ihre Rechte in Bezug auf diese Daten.</p><br/>
    <ol>
      <li><b>Einführung und Akzeptanz</b>
        <ul>
          <li><b>Click-Tracking-Daten:</b> Wir sammeln nicht-personenbezogene Daten wie Klicks und Navigationsverhalten, um das Nutzerengagement zu verstehen und unsere Seite zu verbessern.</li>
          <li><b>Keine persönlichen Informationen:</b> Wir sammeln oder verarbeiten keine persönlichen Daten wie Namen, E-Mails oder Zahlungsinformationen während dieser Umfrage. Verlinkte Drittanbieter-Websites können Daten gemäß ihren eigenen Richtlinien sammeln.</li>
        </ul>
      </li>
      <li><b>Verwendung von Informationen</b>
        <ul>
          <li>Click-Tracking-Daten werden nur verwendet, um das Nutzererlebnis zu verbessern und das Engagement zu analysieren.</li>
          <li>Wir teilen, verkaufen oder verwenden keine Click-Tracking-Daten außerhalb von aggregierten, nicht-identifizierbaren Analysen.</li>
        </ul>
      </li>
      <li><b>Links und Angebote von Drittanbietern</b>
        <ul>
          <li>Unsere Seite kann Links zu Angeboten von Drittanbietern enthalten. Diese Seiten arbeiten unabhängig und haben ihre eigenen Datenschutzrichtlinien. Wir sind nicht verantwortlich für deren Inhalte, Bedingungen oder Datenverarbeitungspraktiken.</li>
          <li>Persönliche Daten, die auf Drittanbieter-Seiten bereitgestellt werden, unterliegen den Datenschutzrichtlinien dieser Seiten. Diese Seite empfängt oder speichert keine Daten, die Sie diesen Seiten zur Verfügung stellen.</li>
        </ul>
      </li>
      <li><b>Datenteilung und Offenlegung</b>
        <ul>
          <li>Wir teilen, verkaufen oder verteilen keine gesammelten Daten, außer wenn dies gesetzlich erforderlich ist (z.B. als Antwort auf Vorladungen).</li>
          <li>Wenn unsere Vermögenswerte verkauft oder fusioniert werden, können aggregierte oder anonyme Nutzerdaten mit entsprechenden Schutzmaßnahmen übertragen werden.</li>
        </ul>
      </li>
      <li><b>Datensicherheit</b>
        <ul>
          <li>Wir setzen angemessene Sicherheitsmaßnahmen ein, um gesammelte Daten vor unbefugtem Zugriff oder Offenlegung zu schützen, können jedoch keine absolute Sicherheit garantieren.</li>
          <li>Benutzer sollten die Sicherheitspraktiken auf Drittanbieter-Seiten überprüfen, die von unserer Werbung verlinkt werden.</li>
        </ul>
      </li>
      <li><b>Datenspeicherung</b>
        <ul>
          <li>Click-Tracking-Daten werden nur so lange aufbewahrt, wie es für analytische Zwecke erforderlich oder gesetzlich vorgeschrieben ist. In der Regel werden aggregierte Daten bis zu 2 Jahre gespeichert.</li>
        </ul>
      </li>
      <li><b>Privatsphäre von Kindern</b>
        <ul>
          <li>Diese Promotion richtet sich an Personen ab 18 Jahren. Wir sammeln wissentlich keine Daten von Kindern unter 18 Jahren.</li>
        </ul>
      </li>
      <li><b>Richtlinienaktualisierungen</b>
        <ul>
          <li>Diese Datenschutzrichtlinie kann regelmäßig aktualisiert werden. Änderungen werden auf dieser Seite mit einem aktualisierten Gültigkeitsdatum veröffentlicht. Die fortgesetzte Nutzung unserer Seite stellt die Akzeptanz einer überarbeiteten Richtlinie dar.</li>
        </ul>
      </li>
    </ol>
  `;
}

function TC_BODY_HTML() {
  return `
    <p class='modeffdate'><b>Gültigkeitsdatum: </b>${datehax()}</p>
    <h3>Willkommen bei unserer Umfrage!</h3><br/>
    <p>Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig durch, bevor Sie an unserer Umfrage oder einem damit verbundenen Angebot oder Giveaway teilnehmen. Durch die Teilnahme stimmen Sie diesen Bedingungen vollständig zu. Wenn Sie nicht zustimmen, fahren Sie bitte nicht mit dieser Umfrage fort.</p><br/>
    <ol>
      <li><b>Einführung und Akzeptanz</b><br/>
        Diese Website und ihre Marketing-Erfahrung (“Erfahrung”) werden unabhängig betrieben und stehen nicht in Verbindung mit, werden nicht unterstützt oder repräsentieren keine offizielle Antivirenmarke, Softwareanbieter oder Cybersicherheitsbehörde. Die Erfahrung wurde entwickelt, um Lösungen von Drittanbietern für Cybersicherheit zu fördern und kann simulierte Scanergebnisse oder Systemwarnungen zu Werbezwecken anzeigen. Durch die Interaktion mit dieser Erfahrung stimmen Sie diesen Allgemeinen Geschäftsbedingungen sowie den Bedingungen von Drittanbietersoftwareanbietern zu, deren Angebote angezeigt werden können.
      </li>
      <li><b>Zweck der Erfahrung</b><br/>
        Diese Erfahrung kann simulierte Sicherheits-Scans oder Warnmeldungen anzeigen, die darauf abzielen, auf potenzielle Systemlücken hinzuweisen. Dies sind keine Echtzeit-Virenscans und sollten nicht als tatsächliche Diagnosen Ihres Geräts interpretiert werden. Das Hauptziel ist es, lizenzierte Cybersicherheitssoftwarelösungen zu fördern, die die Nutzer erwerben und installieren können.
      </li>
      <li><b>Teilnahmeberechtigung</b><br/>
        Diese Erfahrung richtet sich an Einwohner von Deutschland im Alter von 18 Jahren oder älter. Diese Seite und ihre Angebote sind dort ungültig, wo das Gesetz es verbietet. Zum Anzeigen oder Interagieren mit diesem Werbeinhalte ist kein Kauf erforderlich; jedoch kann der Kauf von Software erforderlich sein, um vollständigen Schutz und Zugang zu Premiumfunktionen zu erhalten.
      </li>
      <li><b>Softwareangebote von Drittanbietern</b><br/>
        Es kann Ihnen ein Link oder Werbung für Antivirensoftware oder Cybersicherheitswerkzeuge von Drittunternehmen angezeigt werden. Diese Anbieter arbeiten unabhängig von dieser Seite und sind allein verantwortlich für ihre Software, Funktionen, Preisgestaltung und den Kundenservice. Wenn Sie auf ein Angebot eines Drittanbieters klicken, stimmen Sie den Bedingungen, der Datenschutzerklärung und den Richtlinien des Unternehmens zu. Wir kontrollieren ihre Dienste oder Richtlinien nicht und übernehmen keine Verantwortung dafür.
      </li>
      <li><b>Keine Garantie für Schutz oder Leistung</b><br/>
        Obwohl die beworbene Software einen Systemschutz bieten kann, übernimmt diese Seite keine Garantie für ein bestimmtes Schutzniveau oder die Leistung eines Drittanbieterprodukts. Alle Ansprüche oder Vorteile liegen in der Verantwortung des Drittanbieters. Bewerten Sie Software immer auf Grundlage Ihrer individuellen Bedürfnisse und führen Sie eine eigene Due-Diligence-Prüfung durch.
      </li>
      <li><b>Datenerhebung und Privatsphäre</b><br/>
        Diese Seite erhebt keine personenbezogenen Daten (PII) von Nutzern. Wir können grundlegende Click-Tracking- und Engagement-Metriken verwenden, um unsere Inhalte zu verbessern. Ihre Interaktion mit Drittanbieter-Websites unterliegt deren eigenen Datenschutzrichtlinien, und wir sind nicht verantwortlich dafür, wie diese Daten erheben, speichern oder verwenden.
      </li>
      <li><b>Intellectual Property</b><br/>
        Alle Produktnamen, Marken und Logos sind Eigentum ihrer jeweiligen Besitzer. Jegliche Erwähnung von Produkten Dritter dient nur zu Informations- oder Marketingzwecken und impliziert keine Unterstützung oder Verbindung.
      </li>
      <li><b>Abmelden oder Opt-Out</b><br/>
        Wenn Sie über eine Anzeige, eine E-Mail oder einen Empfehlungslink auf diese Erfahrung gestoßen sind und ähnliche Promotionen nicht mehr erhalten möchten, folgen Sie bitte den Abmeldeanweisungen in der ursprünglichen Nachricht oder verwenden Sie die Abmeldefunktionen der Plattform, auf der die Promotion erschienen ist.
      </li>
      <li><b>Änderung der Bedingungen</b><br/>
        Diese Seite behält sich das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit ohne vorherige Ankündigung zu ändern. Alle Aktualisierungen sind sofort nach der Veröffentlichung auf dieser Seite wirksam. Die fortgesetzte Teilnahme an dieser Promotion bedeutet die Zustimmung zu den überarbeiteten Allgemeinen Geschäftsbedingungen. Wir empfehlen, diese Bedingungen regelmäßig zu überprüfen, um über Änderungen informiert zu bleiben.
      </li>
      <li><b>Änderungen dieser Bedingungen</b><br/>
        Wir können diese Allgemeinen Geschäftsbedingungen jederzeit ohne vorherige Ankündigung aktualisieren. Updates treten sofort nach Veröffentlichung auf dieser Seite in Kraft. Die fortgesetzte Nutzung der Seite bedeutet die Zustimmung zu allen Änderungen. Wir empfehlen, diese Bedingungen regelmäßig zu überprüfen.
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
