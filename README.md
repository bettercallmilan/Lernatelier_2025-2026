## Lernperiode 12
7.11 bis 19.12.2025

## Grob-Planung

Aktuell besteht die Herausforderung, dass meine Gruppe die IDPA (Purbank-Projekt) angefragt hat und diese eine hohe Priorität für eine bevorstehende Expo hat. Mein ursprüngliches Ziel war es, meine C#/.NET-Technologien für meinen Praktikumsbetrieb VZ zu vertiefen. Aufgrund der knappen Zeit bis Weihnachten und der Dringlichkeit der IDPA, werde ich mich in dieser Lernperiode jedoch vollständig auf das Purbank Mobile-Projekt fokussieren. Dieses Projekt ermöglicht es mir, die Frontend-Anforderungen der IDPA rechtzeitig zu erfüllen.

### Technologien, die Sie üben möchten und warum (50 - 100 Wörter)
React Native (mit Expo), TypeScript, Expo Router und ein professioneller GitHub-Workflow. Ich möchte mich in der mobilen Entwicklung mit React Native vertiefen, da dies eine Schlüsseltechnologie für plattformübergreifende Apps ist. Das Beherrschen von Expo Router ist essenziell, um eine saubere, native App-Navigation (Stack-Navigation) aufzubauen. Ein strukturierter GitHub-Workflow (Issues, Branches, PRs) ist für die erfolgreiche Zusammenarbeit im IDPA-Team und für meinen zukünftigen Berufsalltag unerlässlich.

### Grobe Beschreibung des Projekts, das Sie bis Weihnachten bearbeiten möchten  (50-100 Wörter)
Purbank Onboarding App (IDPA): Das Projekt ist der initiale Onboarding-Flow für die "Purbank" (IDPA) Mobile-App. Es ist eine React Native (Expo) App, die als Einstiegspunkt für Benutzer dient. Sie wird einen Welcome-Screen anzeigen und den Benutzer durch die Abläufe "Setup" (QR-Scan), "Login from another device" und "Register" (Info-Screen) führen. Der Fokus liegt auf einer sauberen UI/UX, einer logischen Stack-Navigation und einer professionellen Code-Struktur (Routing, Styling, Fonts).

### 7 klare, große user stories (auch "epics" genant) im Format "als x möchte ich y, damit z", anhand derer man am Ende überprüfen kann, ob das Projekt erfolgreich zu Ende geführt wurde. Diese epics können Sie dann jeweils in 4 Arbeitspakete herunterbrechen, wenn Sie dann im Verlaufe der LP12 die Sitzungen planen.
- Als neuer Benutzer möchte ich einen klaren Welcome-Screen (Startseite) sehen, damit ich die Hauptoptionen (Setup, Login, Register) sofort erkenne.
- Als Entwickler möchte ich eine saubere Stack-Navigation (ohne Tabs) implementieren, damit der Benutzer logisch von einem Screen zum nächsten (z.B. von Welcome zu Setup) geführt wird und immer einen "Zurück"-Button hat.
- Als Benutzer möchte ich ein konsistentes App-Branding (Purbank-Logo, Custom Font 'Special Gothic' und das offizielle Farbschema) auf allen Screens sehen, damit die App professionell und wiedererkennbar ist.
- Als Benutzer möchte ich auf "Setup" klicken und einen QR-Code-Scanner sehen, damit ich mein Gerät mit einem bestehenden Konto verknüpfen kann. Unklarheit: Das Backend für die QR-Code-Validierung ist noch unklar und nicht Teil dieses Arbeitspakets. Der Fokus liegt auf der reinen UI-Implementierung der Kamerafunktion.
- Als Benutzer möchte ich auf "Register" klicken und einen Info-Screen sehen, der mir erklärt, wie ich ein Konto eröffnen kann (z.B. "Geh zur Filiale"), damit ich über den offiziellen Prozess informiert bin.
- Als Benutzer möchte ich auf "Login from another device" klicken, damit ich den Prozess starten kann, um mich über ein anderes Gerät zu authentifizieren. Unklarheit: Der genaue "Login"-Flow ist technisch noch unklar und wird voraussichtlich vom Backend-Team definiert. Vorerst wird ein Platzhalter-Screen erstellt, der den Flow repräsentiert.
- Konstant: Als Entwickler möchte ich das Projekt mit einem professionellen GitHub-Workflow (Issues, Branching, PRs) und einer sauberen Code-Struktur (z.B. app/_layout.tsx, Font-Loading) aufsetzen, damit die Wartbarkeit und Kollaboration im IDPA-Team gesichert ist.

## 07.11

- [x] GitHub-Workflow (Issue, Branch) für das "Welcome Screen"-Feature initialisieren und aufsetzen.
- [x] Den "Welcome Screen" (app/index.tsx) mit Logo, Titel und den drei Navigations-Buttons implementieren.
- [x] Die Purbank-CI/CD-Richtlinien (Custom Font 'Special Gothic' & Farbschema) in den Screen integrieren.
- [x] Die App-Navigation auf einen reinen <Stack>-Navigator refactoren (<code>(tabs)</code>-Ordner entfernt) und im Root-Layout (app/_layout.tsx) konsolidieren.

# 14.11

- [x] i18n-Kernsystem mit LanguageContext implementieren (Englisch/Deutsch, AsyncStorage-Persistenz, t()-Funktion).
- [x] LanguageToggle-Komponente entwickeln und in allen Screens integrieren (oben rechts).
- [x] Alle bestehenden Screens (index.tsx, register.tsx) mit Übersetzungen ausstatten.
- [x] Vollständige Übersetzungsdatenbank aus web-frontend übernehmen und um Navigation, Buttons und Status-Meldungen erweitern.

Heute hatte ich ursprünglich geplant, den QR-Code-Scan-Screen zu implementieren. Nach dem letzten Pull Request sind jedoch Issues mit Inkonsistenzen im Language-System aufgetaucht, die priorisiert werden mussten. Stattdessen habe ich das komplette i18n-System implementiert: LanguageContext mit persistenter Speicherung, LanguageToggle-Komponente für alle Screens und die vollständige Übersetzungsdatenbank aus dem web-frontend übernommen und erweitert. Die ungeplante Umpriorisierung war sinnvoll, da ein konsistentes Sprachsystem die Grundlage für alle weiteren Features bildet. Der QR-Code-Scan-Screen wird auf die nächste Session verschoben.

# 21.11

- [x] Recherche, Installation und Konfiguration des expo-barcode-scanner (QR-Code) Moduls für das Projekt.
- [ ] Projekt Struktur anpassen (https://github.com/reazndev/purbank-mobile-app/issues/12)
- [ ] Registrierungsseite erstellen (https://github.com/reazndev/purbank-mobile-app/issues/13)
- [ ] Registrierungsseite erstellen (https://github.com/reazndev/purbank-mobile-app/issues/13)
