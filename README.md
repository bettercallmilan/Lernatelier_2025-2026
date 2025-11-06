## Lernperiode 12
7.11 bis 19.12.2025

## Grob-Planung

Aktuell besteht die Herausforderung, dass meine Gruppe die Möglichkeit einer Interdisziplinären Projektarbeit (IDPA) im Lernatelier angefragt hat, aber noch auf eine Antwort wartet. Daher bin ich mir unsicher, ob ich meine geplante Zeit bis Weihnachten nutzen soll, um gezielte Programmiersprachen und Frameworks zu trainieren oder mit der IDPA zu arbeiten. Ich fokussiere mich daher auf ein Projekt, das die gewünschten Technologien abdeckt und flexibel in beiden Szenarien fortgeführt werden kann. Mein Ziel ist es, in jedem Fall die von meinem Praktikumsbetrieb VZ VermögensZentrum genutzten Technologien zu vertiefen.

### Technologien, die Sie üben möchten und warum (50 - 100 Wörter)
Microsoft-Umfeld: ASP.NET Core (Web-API), WPF (Desktop-Anwendung), Entity Framework Core (Datenzugriff) und SQL Server (Datenbank). Ich möchte mich in den zentralen Technologien meines Praktikumsbetriebs VZ VermögensZentrum vertiefen. Das Beherrschen des Microsoft-Stacks (ASP.NET, WPF, Entity Framework, SQL Server) ist für die Finanzbranche und meinen zukünftigen Berufsalltag essenziell. Da ich ein weniger komplexes Projekt wünsche, liegt der Fokus auf der sauberen Implementierung der Architektur und der grundlegenden CRUD-Operationen in diesen Frameworks.

### Grobe Beschreibung des Projekts, das Sie bis Weihnachten bearbeiten möchten  (50-100 Wörter)
Einfaches Geräte-Inventar-Tool: Das Projekt ist ein einfaches Inventar-Tool zur Verwaltung von Unternehmensgeräten (z.B. Laptops, Monitore). Das Backend wird als schlanke ASP.NET Core Web-API implementiert, die über Entity Framework Core auf eine lokale SQL Server Datenbank zugreift. Die Endanwendung wird eine WPF-Desktop-Applikation sein, die es dem Benutzer ermöglicht, Inventareinträge zu erstellen, zu bearbeiten, zu löschen und eine gefilterte Übersicht aller Geräte anzuzeigen. Der Fokus liegt auf der soliden Architektur und der Beherrschung der Kerntechnologien.

### 7 klare, große user stories (auch "epics" genant) im Format "als x möchte ich y, damit z", anhand derer man am Ende überprüfen kann, ob das Projekt erfolgreich zu Ende geführt wurde. Diese epics können Sie dann jeweils in 4 Arbeitspakete herunterbrechen, wenn Sie dann im Verlaufe der LP12 die Sitzungen planen.
- Als System-Benutzer möchte ich neue Geräte-Kategorien (z.B. "Laptop", "Monitor") erstellen und verwalten, damit das Inventar strukturiert und filterbar ist.
- Als Administrator möchte ich über die WPF-Anwendung neue Geräte mit Seriennummer, Kategorie und Standort in die Datenbank einpflegen, damit alle Assets erfasst sind.
- Als Administrator möchte ich ein bestehendes Gerät bearbeiten und dessen Status (z.B. "In Gebrauch", "Defekt") ändern können, damit die Gerätedaten aktuell bleiben.
- Als System muss die ASP.NET Core API in der Lage sein, alle Inventareinträge zu liefern, damit die WPF-Anwendung die Daten vom Backend abrufen kann.
- Als System-Benutzer möchte ich alle Geräte in einer sortierbaren Liste in der WPF-Anwendung sehen, damit ich schnell einen Überblick über das gesamte Inventar erhalte.
- Als System-Benutzer möchte ich die Geräteliste nach Kategorie oder Standort filtern können, damit ich gezielt nach bestimmten Assets suchen kann.
- Als System-Benutzer möchte ich einen Eintrag löschen können, damit ausgemusterte oder verlorene Geräte korrekt aus dem aktiven Inventar entfernt werden.
