# Lernperiode 11

22.8 bis 26.9.2024

## Grob-Planung

1. Erklären Sie Ihre Projekt-Idee in einem Satz, als müssen Sie einen Investor davon überzeugen.
   Eine Haushaltsverwaltungs-App, die Familien und Mitbewohnern ermöglicht, Aufgaben und Einkaufslisten in Echtzeit zu koordinieren und so den Alltag stressfreier zu gestalten.
2. Erklären Sie, welche technischen Herausforderungen Sie in Ihrem Projekt erwarten.
   - Implementierung Cloud Sychronisierung von Aufgaben
   - Offline-Funktionalität mit lokaler Datenpersistenz
   - evtl. Implementierung Benachrichtigungen
3. Beschreiben Sie, welche nicht-technischen Aspekte Sie in diesem Projekt besonders üben möchten.
   - UI/UX
   - Planung
4. Wie unterscheidet sich dieses Projekt von Ihrem Projekt in 335; und wo ergänzen sich diese Projekte?
   In 335 habe ich mich noch nicht für ein Projekt entschieden.

## 22.8

- [x] Prototyp App
- [x] Projektsetup und Lokalspeicher-Konzept

✍️ Heute habe ich mir überlegt, was für ein Projekt ich machen soll. Dabei bin ich auf die Idee gekommen, meine App aus der Lernperiode 10 für Mobile zu entwickeln. Dazu habe ich ein Prototyp für Mobile mithilfe von der Web-App erstellt. Da wir im Modul 335 noch nicht so weit sind und noch nie ein Mobile-App Projekt erstellt habe, werde ich dies wahrscheinlich nächste Woche machen können. Dazu habe ich mich von IntelliJ und Android Studio erkundet. Für mein Lokalspeicher-Konzept habe ich mir überlegt, die schon erstellte Datenbank (mongoDB Atlas) zu benutzen - dann ist die Mobile App direkt mit der Desktop sychronisiert.

## 29.8

- [x] Als Entwickler möchte ich eine IDE auswählen und ein Projekt erstellen, damit ich eine Entwicklungsumgebung für das Modul habe.
- [x] Als Designer möchte ich ein Design für die Homepage und andere Bereiche erstellen, damit die Anwendung eine ansprechende und benutzerfreundliche Oberfläche hat.
- [x] Als Entwickler möchte ich mich über das MongoDB Atlas Device SDK informieren, damit ich die Synchronisierung von Daten zwischen dem Gerät und der Cloud in die Anwendung integrieren kann.
- [x] Als Entwickler möchte ich alle notwendigen Informationen für die Entwicklung aus dem Modul sammeln, damit ich eine klare Vorstellung von den Anforderungen und dem Umfang des Projekts habe.

✍️ Heute habe ich meine Entwicklungsumgebung eingerichtet und mich für eine IDE entschieden. Parallel dazu habe ich ein erstes Design für die Benutzeroberfläche der App entworfen, um eine klare visuelle Vorstellung zu bekommen. Ein wichtiger Schritt war die Recherche zum MongoDB Atlas Device SDK, um die Datensynchronisierung zu planen. Ich konnte auch alle Anforderungen aus dem Modul zusammentrug, jedoch wurde in der Besprechung gesagt, dass .NET MAUI als veraltet gilt. Das bedeutet, ich muss nächste Woche auf eine andere Technologie umsteigen.

## 5.9

- [x] Als Entwickler möchte ich von .NET MAUI auf eine modernere Technologie migrieren, damit mein Projekt auf einer zukunftsfähigen Basis steht.
- [x] Als Entwickler möchte ich die neue Projektstruktur aufsetzen und alle notwendigen Abhängigkeiten installieren, damit die Entwicklungsumgebung bereit ist.
- [x] Als Designer möchte ich die entworfene Homepage in der neuen Technologie implementieren, um einen ersten sichtbaren Fortschritt zu haben.
- [x] Als Entwickler möchte ich die Login-Page als index.tsx anzeigen (noch keine Logik).

✍️ Heute habe ich den Technologiewechsel vollzogen und bin von .NET MAUI auf React Native umgestiegen. Ich habe die neue Entwicklungsumgebung eingerichtet und alle notwendigen Pakete installiert. Die Login-Seite konnte ich auch umzusetzen. Zum Testen habe ich die Expo Go App auf meinem Handy installiert und dann den QR-Code von VSC gescannt. Das funktionierte gut und die Änderungen wurden auch live angezeigt (Bild). Das UI-Layout dafür steht und ist bereit für die Logik-Implementierung.

<img src="https://github.com/user-attachments/assets/79881076-5b80-4b49-9451-283e6ce543b5" height="500">

## 12.9

- [ ] Als Entwickler möchte ich eine Authentifizierungslogik für die Login-Seite implementieren, damit sich Benutzer anmelden können.
- [x] Als Entwickler möchte ich die Hauptansicht für die Aufgabenliste erstellen, damit nach dem Login die Aufgaben angezeigt werden können.
- [x] Als Entwickler möchte ich eine wiederverwendbare "Task-Item"-Komponente erstellen, um einzelne Aufgaben in der Liste darzustellen.
- [x] Als Entwickler möchte ich die Navigation einrichten, sodass ein Benutzer nach erfolgreichem Login von der Anmeldeseite zur Aufgabenliste weitergeleitet wird.

✍️ Heute habe ich Fortschritte bei der Benutzeroberfläche gemacht. Ich habe die Hauptansicht für die Aufgabenliste und eine wiederverwendbare Komponente für einzelne Aufgaben erfolgreich erstellt. Ausserdem funktioniert die Navigation jetzt wie geplant: Nach einem (noch simulierten) Login wird man korrekt zur Aufgabenliste weitergeleitet. Leider hat die Zeit nicht mehr gereicht, um die eigentliche Authentifizierungslogik zu implementieren.

## 19.9

- [ ] Als Entwickler möchte ich eine Authentifizierungslogik für die Login-Seite implementieren, damit sich Benutzer anmelden können.
- [ ] Als Entwickler möchte ich die Aufgabenliste mit der MongoDB-Datenbank verbinden, um echte Daten anzuzeigen.
- [ ] Als Entwickler möchte ich eine Funktion zum Hinzufügen neuer Aufgaben erstellen, inklusive Eingabefeld und Speicherlogik.
- [x] Als Entwickler möchte ich die Möglichkeit schaffen, Aufgaben als "erledigt" zu markieren.
