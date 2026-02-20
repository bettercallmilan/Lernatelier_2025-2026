# Lernperiode 13

## Ausgewählte Technologie

ASP.NET Core MVC (mit Entity Framework und SQL Server)

## Begründung der Auswahl

### Prima facie Überlegungen

Für mein anstehendes Praktikum habe ich folgende Anforderungen identifiziert:
- Programmierung im Microsoft-Umfeld
- Technologien: ASP.NET, WPF, Entity Framework, SQL Server

### Warum ASP.NET Core MVC?

**Relevanz für das Praktikum:**
- ASP.NET ist eine zentrale Technologie im Praktikumsbetrieb
- Entity Framework wird für Datenbankzugriffe verwendet
- SQL Server ist das primäre Datenbanksystem
- Das Erlernen von ASP.NET Core bildet eine solide Grundlage für die Arbeit mit dem gesamten Microsoft-Stack

**Praktischer Nutzen:**
- Moderne, weitverbreitete Web-Framework-Architektur (MVC-Pattern)
- Direkte Anwendbarkeit in realen Projekten
- Gute Vorbereitung auf professionelle Entwicklungsarbeit

**Lernpotenzial:**
- Verständnis für serverseitiges Rendering und Web-Architektur
- Arbeit mit Datenbanken über Entity Framework (ORM)
- Integration verschiedener Microsoft-Technologien
- Praktische Erfahrung mit dem .NET-Ökosystem

## 09.01
- [x] Entwicklungsumgebung einrichten (VS Code)
- [x] .NET SDK installieren
- [x] Erstes "Hello World" MVC-Projekt erstellen
- [x] Grundstruktur verstehen (Program.cs, Controller, Views)

Heute habe ich die Grundlagen für meine Arbeit mit ASP.NET Core MVC gelegt. Zunächst habe ich meine Entwicklungsumgebung aufgesetzt, indem ich VS Code installiert und das .NET SDK (Version 8.0) heruntergeladen habe. Die Installation verlief problemlos. Ich habe mein erstes ASP.NET Core MVC-Projekt erstellt. Das "Hello World"-Projekt lief sofort nach dotnet run im Browser und zeigte die Standard-Willkommensseite.

## 16.01
- [x] Microsoft Learn Tutorial starten: "Get started with ASP.NET Core MVC"
- [x] Models erstellen und verstehen
- [x] Views mit Razor-Syntax erstellen
- [x] Controller-Actions implementieren

Heute habe ich das Microsoft Learn Tutorial gestartet und die MVC-Komponenten praktisch umgesetzt. Ich habe ein Product-Model mit grundlegenden Properties erstellt, Views mit Razor-Syntax gebaut (@Model, @if, @foreach) und im ProductController mehrere Actions implementiert, die Daten an die Views übergeben. Das MVC-Pattern und der Datenfluss zwischen Controller, Model und View sind mir jetzt klarer.

## 23.01

- [x] Entity Framework Core einbinden
- [x] Datenbankkontext konfigurieren
- [ ] Migrations erstellen und anwenden
- [x] CRUD-Operationen implementieren

Heute habe ich Entity Framework Core in mein Projekt integriert und die Datenbankanbindung eingerichtet. Zuerst habe ich die nötigen NuGet Packages installiert (Microsoft.EntityFrameworkCore.SqlServer und .Tools), dann einen AppDbContext erstellt, der meine Products-Tabelle verwaltet.

## 30.01

- [x] Eigenes Mini-Projekt fertigstellen
- [ ] Tutorial-Inhalt erstellen (Ziel, Vorwissen, Konzepte identifizieren und mit Code-Beispielen ausformulieren)
- [ ] Erwartetes Resultat visualisieren (mit .gif) und mindestens 1 Fehlerfall beschreiben
- [ ] Github Pages einrichten und konfigurieren
