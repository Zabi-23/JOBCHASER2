# JOBCHASER2

## Vad är state i React?
    Staete i React är en intern datastruktur som användas för att lagra infömation som kan förändras över tid. Den användas för att styra komponentens beteende och uppdatera dess rendring. 

## Vad är det för skillnad mellan state och props?
   Skillnaden mellan state och props är att state är internt för en komponent och kan ändras av komponenten själv, medan props är extena data som skickas till en komponenet och inte kan ändras av komponeneten själv. 
### State:
   Internt
   Kan ändras
   Styr komponentens beteende
   Uppdaterar rendering
### Props:
   Externt
   Oföränderligt
   Konfigurerar komponenten
   Statisk

## Vad menas med en kontrollerad komponent i React?
   En kontrollerad komponent är en komponent där värdet i en input-fält styrs av komponentens state. Används ofta för formulär. 

## Vad är en callback handler?
   En callback handler är en funktion som skickas som argument till en annan funktion. Den anropas när den andra funktionen har utförts.


## Vad menas med "lifting state up"?
   Lifting state up innebär att man flytta state till en gemensam komponenet som kan delas av flera underordande komponenter. Använda för att undvika redundans och förbättra kodens modularitet.

## Vad är syftet med useEffect-hook i React?
   UseEffect-hooken används för att utföra sideneffekter, t.ex. att hämta data från en API eller att lyssna på DOM-händelser. 

## Vad är syftet kring den s.k dependency-arrayen i useEffect?
    Dependency-arrayen i useEffect-hooken används för att ange under vilka villkor hooken ska köras. Om arrayen ändras, kommer hooken att köras igen. 