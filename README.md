# Budget Tracker
Alkalmazások fejlesztése 2017

Sevcsik Marcell (<b>...</b>) , Peitli Zoltán (<b>C14ZVE</b>)

## 1) Feladatleírás

Költségkövető rendszer cégeknek. Az alkalmazás lehetőséget biztosít az adott cégnek, hogy monitorozza az új projektek létrehozásához, illetve a már meglévők továbbfejlesztéséhez szükséges anyagi forrást. Amennyiben az adott projekt rendelkezik a szükséges anyagi háttérrel, igényelhet továbbfejlesztéseket a keret kimerültéig. A felhasználó ezáltal láthatja a rendelkezésére álló büdzsét, az igényelhető fejlesztéseket és azok költségét is. A felhasználó lényegében a projektet reprezentálja.

## 2) Funkcionális követelmények
 
Legyen lehetőség bejelentkezni az alkalmazásba a létező felhasználókkal (autentikáció). Regisztrációra nincs szükség, a felhasználók többsége előre definiált. A bejelentkezés során felmerülő problémáról legyen lehetőség visszajelzést küldeni az admin usernek. Új projekt indításakor keletkezik új felhasználó, ezt csak az admin user hozhatja létre. A felhasználóknak legyen lehetőségük az anyagi limit eléréséig új fejlesztéseket igényelni. Ez egy űrlap kitöltésével valósul meg. Amennyiben elérik a keretet, erről az alkalmazás tájékoztassa a felhasználót. Legyen lehetőség a rosszul felvett tételek szerkesztésére, - és amennyiben még nem kezdődött el a fejlesztés - törlésére is.

Az admin felhasználó látja el a jóváhagyó szerepkört. Miután elfogadja a projekt fejlesztési igényét, azt a sima user már nem törölheti vagy szerkesztheti. Ezek a funkciók innentől csak az admin felhasználó számára elérhetőek. Továbbá az admin felhasználó jogköre a projektek anyagi keretének bővítése, új projekt indítása és az autentikációnál felmerülő problémák kezelése.
   
## 3) Nem funkcionális követelmények

   * <b>Használhatóság:</b> A látogató számára a felület legyen egyértelmű és átlátható (egy átlagos ember a felhasználói dokumentum ismerete nélkül is könnyen tudja kezelni). Az admin felület a felhasználói dokumentáció ismeretében legyen egyértelműen használható.
   * <b>Teljesítmény:</b> A weboldal bármely funkcióját használva az oldal frissülése, illetve az új oldal megjelenése ne vegyen igénybe többet pár másodpernél egy átlagos internetkapcsolattal rendelkező felhasználónál. Az oldal legyen képes a cég projekt userének egyidejű kiszolgálására (minimum 10 user).
   * <b>Rendelkezésre állás:</b> Cél, hogy a weboldal elérhető legyen legalább egy év 99%-ában. Eszerint a felhasználóknak 100 kisérletből legalább 99 alkalommal el kell tudniuk érni az oldalt.
   * <b>Skálázhatóság:</b> A becsült felhasználó-létszám nem igényli skálázható rendszer tervezését (a későbbiekben a rendszer és a cég növekedésével ez változhat).
   * <b>Biztonság:</b> A felhasználók és az adminok jelszavai ne legyenek visszafejthetőek. A hibásan bevitt adatokat a rendszer lekezeli, autentikációs probléma esetén legyen lehetőség a hiba jelzésére. Egy projekthez csak egy account tartozhat. A látogatók által elérhető beviteli mezőkön a rendszer végezzen szűrést ártalmas kódokra.
   * <b>Karbantarthatóság:</b> Törekedni kell a felület könnyű bővíthetőségére és módosíthatóságára.
   * <b>Minőségi elvárások, felhasználói oldalról:</b> A webes alkalmazás legyen elérhető több platformról és különböző böngészőkből is. Működése legyen akadálymentes és az oldalak legyenek validak a megfelelő szabványok szerint.

## 4) Fogalomjegyzék

   * <b>Felhasználó (user):</b> A felhasználó az a személy (végfelhasználó, end-user) vagy szoftver ágens, aki egy számítógépes vagy számítógép-hálózati szolgáltatás használója. A felhasználóhoz gyakran felhasználói fiók tartozik, amit felhasználói név (username, screen name, nick vagy handle) azonosít.
   * <b>Jelszó:</b> A jelszó, vagy más néven kulcsszó, kódszó, kód, vagy jelmondat, egy jelből vagy jelsorból álló kifejezés, melyet azonosításnál, illetve hitelesítéshez használunk.
   * <b>Alkalmazás:</b> Az alkalmazás egy számítógépes program, ami egy fordítóprogram segítségével készül el egy forráskódból.
   * <b>Autentikáció:</b> A felhasználó adatainak ellenőrzése az alkalmazásba történő belépés során.

## 5) Szerepkörök

* <b>Ismeretlen felhasználó</b>
<table>
   <tr>
      <td>Szerepkör neve:</td>
      <td>unknown_user</td>
   </tr>
   <tr>
      <td>Leírás:</td>
      <td>Nem regisztrált felhasználó. Az alkalmazásnak csak minimális számú funkcióját használhatja amíg szerepköre nem változik.</td>
   </tr>
   <tr>
      <td>Profil adatok:</td>
      <td>...</td>
   </tr>
   <tr>
      <td>Objektumok olvasása:</td>
      <td>...</td>
   </tr>
   <tr>
      <td>Objektumok módosítása:</td>
      <td>...</td>
   </tr>
</table>

* <b>Azonosított felhasználó</b>
<table>
   <tr>
      <td>Szerepkör neve:</td>
      <td>simple_user</td>
   </tr>
   <tr>
      <td>Leírás:</td>
      <td>...</td>
   </tr>
   <tr>
      <td>Profil adatok:</td>
      <td>...</td>
   </tr>
   <tr>
      <td>Objektumok olvasása:</td>
      <td>...</td>
   </tr>
   <tr>
      <td>Objektumok módosítása:</td>
      <td>...</td>
   </tr>
</table>

* <b>Adminisztrátor</b>
<table>
   <tr>
      <td>Szerepkör neve:</td>
      <td>admin_user</td>
   </tr>
   <tr>
      <td>Leírás:</td>
      <td>...</td>
   </tr>
   <tr>
      <td>Profil adatok:</td>
      <td>...</td>
   </tr>
   <tr>
      <td>Objektumok olvasása:</td>
      <td>...</td>
   </tr>
   <tr>
      <td>Objektumok módosítása:</td>
      <td>...</td>
   </tr>
</table>
