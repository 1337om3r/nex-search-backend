# 🚀 NexSearch Backend

NexSearch projesi için geliştirilmiş web tabanlı HTTP/HTTPS proxy backend servisi.

Bu servis, kullanıcıdan alınan URL’yi proxy üzerinden hedef siteye ileterek içeriği geri döndürür. Böylece istemci doğrudan hedef siteye bağlanmaz ve tüm trafik backend üzerinden yönlendirilir.

---

## 🌐 Canlı Servis

👉 https://nex-search-backend.onrender.com/

---

## ⚙️ Özellikler

* 🌐 HTTP/HTTPS proxy desteği
* 🔄 Dinamik URL yönlendirme
* 📡 İstemci → Backend → Hedef Site akışı
* 🧾 Basit loglama sistemi
* 🔓 CORS desteği (frontend entegrasyonu için)
* ⚡ Hafif ve hızlı yapı

---

## 🧩 Kullanılan Teknolojiler

* Node.js
* Express.js
* CORS
* node-fetch

---

## 🔗 API Kullanımı

### 📌 Endpoint

```http
POST /proxy
```

### 📥 Request Body

```json
{
  "url": "https://example.com"
}
```

### 📤 Response

* Hedef sitenin HTML içeriği döndürülür

---

## 🧪 Örnek Kullanım

```js
fetch("https://nex-search-backend.onrender.com/proxy", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ url: "https://example.com" })
})
.then(res => res.text())
.then(data => console.log(data));
```

---

## 🖥️ Local Kurulum

```bash
git clone https://github.com/1337om3r/nex-search-backend.git
cd nex-search-backend
npm install
node index.js
```

Server varsayılan olarak:

```txt
http://localhost:3000
```

---

## 🌍 Deploy

Backend servisi Render üzerinde deploy edilmiştir.

Deploy etmek için:

1. GitHub repo oluştur
2. Render → New Web Service
3. Repo bağla
4. Start Command:

```bash
node index.js
```

---

## ⚠️ Güvenlik Notları

* Bu proje **eğitim amaçlıdır**
* Açık proxy olarak kullanımı kötüye kullanılabilir
* Production ortamı için önerilenler:

  * 🔒 Rate limiting
  * 🌐 Domain whitelist
  * 🔐 Authentication
  * 📊 Gelişmiş loglama

---

## 📁 Proje Yapısı

```txt
nex-search-backend/
│
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## 📄 Lisans

MIT License
