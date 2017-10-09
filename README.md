# Budget Tracker
Alkalmazások fejlesztése 2017

Sevcsik Marcell (<b>...</b>) , Peitli Zoltán (<b>C14ZVE</b>)

## 1) Feladatleírás

Költségkövető rendszer cégeknek. Az alkalmazás lehetőséget biztosít az adott cégnek, hogy monitorozza az új projektek létrehozásához, illetve a már meglévők továbbfejlesztéséhez szükséges anyagi forrást. Amennyiben az adott projekt rendelkezik a szükséges anyagi háttérrel, igényelhet továbbfejlesztéseket a keret kimerültéig. A felhasználó ezáltal láthatja a rendelkezésére álló büdzsét, az igényelhető fejlesztéseket és azok költségét is. A felhasználó lényegében a projektet reprezentálja.

## 2) Funkcionális követelmények
 
Legyen lehetőség bejelentkezni az alkalmazásba a létező felhasználókkal (autentikáció). Regisztrációra nincs szükség, a felhasználók többsége előre definiált. A bejelentkezés során felmerülő problémáról legyen lehetőség visszajelzést küldeni az admin usernek. Új projekt indításakor keletkezik új felhasználó, ezt csak az admin user hozhatja létre. A felhasználóknak legyen lehetőségük az anyagi limit eléréséig új fejlesztéseket igényelni. Ez egy űrlap kitöltésével valósul meg. Amennyiben elérik a keretet, erről az alkalmazás tájékoztassa a felhasználót. Legyen lehetőség a rosszul felvett tételek szerkesztésére, - és amennyiben még nem kezdődött el a fejlesztés - törlésére is.

Az admin felhasználó látja el a jóváhagyó szerepkört. Miután elfogadja a projekt fejlesztési igényét, azt a sima user már nem törölheti vagy szerkesztheti. Ezek a funkciók innentől csak az admin felhasználó számára elérhetőek. Továbbá az admin felhasználó jogköre a projektek anyagi keretének bővítése, új projekt indítása és az autentikációnál felmerülő problémák kezelése.
   
## 3) Nem funkcionális követelmények

   * <b>Használhatóság:</b> ...
   * <b>Teljesítmény:</b> ...
   * <b>Rendelkezésre állás:</b> ...
   * <b>Skálázhatóság:</b> ...
   * <b>Biztonság:</b> ...
   * <b>Karbantarthatóság:</b> ...
   * <b>Minőségi elvárások, felhasználói oldalról:</b> ...

## 4) Fogalomjegyzék

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
