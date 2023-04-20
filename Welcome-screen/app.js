function karşılama() {
    // Kullanıcı tarafından girilen ismi alın
    var isim = document.getElementById("isim").value;

    // Karşılama mesajını oluşturun
    var mesaj = "<h2>Merhaba</h2> " + `<h1>${isim}</h1>` + "<h2>! Hoşgeldin.</h2>";

    // Karşılama mesajını ekrana yazdırın
    document.getElementById("karşılama").innerHTML = mesaj;

    // Şu anki saat ve tarih bilgisini alın
    var tarih = new Date();

    // Saat ve tarih bilgisini formatlayın ve ekrana yazdırın
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
    var gün = tarih.getDay();
    var günler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var tarihMesajı =
        `<h2>${günler[gün] + " " + saat + ":" + dakika + ":" + saniye}</h2>`;
    document.getElementById("saat").innerHTML = tarihMesajı;
}
