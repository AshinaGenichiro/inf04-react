const obliczPoleProstokata = (a,b) => 
{
    return a*b;
}

const celsujeszNaFahrenheit = (celsius) =>
{
    return celsius * 9/5 + 32
}

const opiszPogode =(stopnie) =>
{
    if(stopnie < 0 )
    {
        console.log("Mróz")
    }else if (stopnie >=0 && stopnie <15)
    {
        console.log("Chłodno")
    }else if (stopnie >=15 && stopnie < 25 )
    {
        console.log("ciepło")
    }else 
    {
        console.log("Upał")
    }

}

console.log(`Pole prostokąta wynosi ${obliczPoleProstokata(5,8)}`)
console.log(`32 stopnie celsiusza to ${celsujeszNaFahrenheit(32)} stopni Fahrenheita`)
opiszPogode(67)

const uczniowie = [ 
 { imie: "Anna", punkty: 85 }, 
 { imie: "Bartek", punkty: 42 }, 
 { imie: "Cyprian", punkty: 67 }, 
 { imie: "Daria", punkty: 30 }, 
]; 

const zdane = uczniowie.filter(u => u.punkty > 50);
const imionaZdane = zdane.map(uczen => uczen.imie)
console.log(zdane)
console.log(imionaZdane)

const zamowienia = [ 
 { produkt: "Klawiatura", cena: 129, ilosc: 2 }, 
 { produkt: "Monitor", cena: 899, ilosc: 1 }, 
 { produkt: "Myszka", cena: 79, ilosc: 3 }, 
]; 

const opis = zamowienia.map(({produkt,cena,ilosc}) => ({produkt:produkt, wartosc : ilosc * cena}))
const wartoscKoszyka = zamowienia.reduce((suma,zamowienia) => {return suma + zamowienia.cena * zamowienia.ilosc} ,0)
const monitor = zamowienia.find(zamowienie => zamowienie.produkt === "Monitor")

console.log(opis)
console.log(wartoscKoszyka)
console.log(monitor.cena)

const changeButton = document.getElementById("przelacznik")
const paragraf = document.getElementById("akapit")

changeButton.addEventListener("click",() => {
    paragraf.classList.toggle("aktywny")
})

const message = document.getElementById("wiadomosc")
const ileznakowparagraf = document.getElementById("paragrafIleZnakow")
message.addEventListener("input", event =>{
    if(event.target.value.length > 90)
    {
        ileznakowparagraf.style.color = "red";
    }else
    {
        ileznakowparagraf.style.color = "black";
    }
    ileznakowparagraf.textContent = `Zostało : ${100 - event.target.value.length}`
})
function obliczSrednia(oceny) { 

 let suma = 0; 

 for (const ocena of oceny) { 

 suma = suma + ocena; 

 } 

 return suma / oceny.length; 

} 

/*
function obliczSredniaTypescript(oceny: number[]) :number
{
    let suma: number = 0;
    for(const ocena of oceny)
    {
        suma = suma + ocena;
    }
    if(oceny.length === 0) return 0;
    return suma / oceny.length
}
console.log(`Średnia wynosi : ${obliczSredniaTypescript([5,4,3,5])}`)
 interface Zamowienia {
    id : number;
    klient: string;
    kwota: number;
    uwaga: string;
}
let StatusZamowienia: "nowe" | "opłacone" | "wysłane";

const WszystkieZamowienia : Zamowienia[] = [
    {id:1,klient:"Artur", kwota: 67, uwaga:"Golf lezy w rowie"},
    {id:2,klient:"golf", kwota: 100, uwaga:"pejda lezy w rowie"}

]
const sumaZamowien = (tablica: Zamowienia[]): number => {
    let suma: number = 0;
    for(const z of tablica)
    {
        suma = z.kwota + suma;
    }
    return suma; 
}
console.log(`Suma wszystkich zamówień to: ${sumaZamowien(WszystkieZamowienia)} zł`); 
*/