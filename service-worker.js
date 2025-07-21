const cacheName = "music-festival-schedule-v1-efmf2024";
const filesToCache = [
    "./", // Add other URLs that need to be cached here
"./app.js",
"./utils.js",
"./fest-logo.png",
"./bandcamp.png",
"./android-menu.png",
"./android-install.png",
"./safari-share.png",
"./safari-add-to-home-screen.png",
"./apple_splash_1125.png",
"./apple_splash_1242.png",
"./apple_splash_1536.png",
"./apple_splash_1668.png",
"./apple_splash_2048.png",
"./apple_splash_640.png",
"./apple_splash_750.png",
"./artists.json",
"./favicon.png",
"./files.txt",
"./follow-on.png",
"./heard-hover.png",
"./heard.png",
"./icon_x120.png",
"./icon_x152.png",
"./icon_x167.png",
"./icon_x180.png",
"./icon_x57.png",
"./icon_x76.png",
"./index.html",
"./jquery-3.7.0.min.js",
"./jquery.dataTables.min.css",
"./jquery.dataTables.min.js",
"./locations.json",
"./manifest.json",
"./map.jpg",
"./map0.jpg",
"./map1.jpg",
"./map2.jpg",
"./map3.jpg",
"./map5.jpg",
"./map6.jpg",
"./map7.jpg",
"./maskable_icon.png",
"./maskable_icon_x128.png",
"./maskable_icon_x192.png",
"./maskable_icon_x384.png",
"./maskable_icon_x48.png",
"./maskable_icon_x512.png",
"./maskable_icon_x72.png",
"./maskable_icon_x96.png",
"./schedule.json",
"./screenshot.png",
"./service-worker.js",
"./star-hover.png",
"./star-off.png",
"./star-on.png",
"./style.css",
"./unheard.png",
"./artists/abigail-lapell.jpg",
"./artists/aj-lee-blue-summit.jpg",
"./artists/alpha-yaya-diallo.jpg",
"./artists/angie-mcmahon.jpg",
"./artists/anna-muskego-nikamowin.jpg",
"./artists/ben-howard.jpg",
"./artists/black-pumas.jpg",
"./artists/black-umfolosi-international.jpg",
"./artists/blanco-white.jpg",
"./artists/blue-rodeo.jpg",
"./artists/boy-golden.jpg",
"./artists/brianna-lizotte-nikamowin.jpg",
"./artists/briscoe.jpg",
"./artists/buffalo-nichols.jpg",
"./artists/celina-loyer-nikamowin.jpg",
"./artists/danielle-ponder.jpg",
"./artists/dawes.jpg",
"./artists/don-ross.jpg",
"./artists/dorsten.jpg",
"./artists/ekti-margaret-cardinal-nikamowin.jpg",
"./artists/elisapie.jpg",
"./artists/eric-bibb-with-michael-jerome-browne.jpg",
"./artists/esta-bee-nikamowin.jpg",
"./artists/fantastic-negrito.jpg",
"./artists/good-lovelies.jpg",
"./artists/goota-desmarais-nikamowin.jpg",
"./artists/gunning-cormier.jpg",
"./artists/jake-vaadeland-the-sturgeon-river-boys.jpg",
"./artists/jake-xerxes-fussell.jpg",
"./artists/jd-mcpherson.jpg",
"./artists/jess-williamson.jpg",
"./artists/john-craigie.jpg",
"./artists/john-hewitt-school-of-song.jpg",
"./artists/john-reischman-the-jaybirds.jpg",
"./artists/jon-and-roy.jpg",
"./artists/kaiya-kodie-school-of-song.jpg",
"./artists/ken-stead-school-of-song.jpg",
"./artists/kim-churchill.jpg",
"./artists/kobo-town.jpg",
"./artists/kt-tunstall.jpg",
"./artists/la-misa-negra.jpg",
"./artists/leif-vollebekk.jpg",
"./artists/leith-ross.jpg",
"./artists/leo-and-priscilla-mcgilvery-nikamowin.jpg",
"./artists/les-grands-hurleurs.jpg",
"./artists/levi-wolfe-nikamowin.jpg",
"./artists/lily-monaghan-school-of-song.jpg",
"./artists/matt-hiltermann-nikamowin.jpg",
"./artists/miko-marks.jpg",
"./artists/nipisiy-nikamowin.jpg",
"./artists/noeline-hofmann.jpg",
"./artists/orchestra-gold.jpg",
"./artists/pharis-and-jason-romero.jpg",
"./artists/reuben-and-the-dark-with-bullhorn-singers.jpg",
"./artists/rhiannon-giddens.jpg",
"./artists/robert-finley.jpg",
"./artists/robert-plant-alison-krauss.jpg",
"./artists/rose-cousins.jpg",
"./artists/ruen-brothers.jpg",
"./artists/sammy-volkov.jpg",
"./artists/school-of-song-john-hewitt-kaiya-kodie-ken-stead-lily-monaghan.jpg",
"./artists/sg-goodman.jpg",
"./artists/sultans-of-string-walking-through-the-fire.jpg",
"./artists/the-bankes-brothers.jpg",
"./artists/the-heavy-heavy.jpg",
"./artists/the-langan-band.jpg",
"./artists/the-mcdades.jpg",
"./artists/tina-dico.jpg",
"./artists/tootoosis-crew-nikamowin.jpg",
"./artists/wild-rivers.jpg",
"./artists/wyatt-c-louis.jpg"


];

/*
async function delayCacheAddAll(cache, urls, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  await cache.addAll(urls);
}

const delayMilliseconds = 2000; // 2 seconds

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => delayCacheAddAll(cache, urlsToAdd, delayMilliseconds))
			.then(() => {
				console.log('Cache.addAll() with delay completed successfully.');
			})
            .catch(error => {
                console.error("Caching failed:", error);
            })
    );
});
*/

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
            .catch(error => {
                console.error("Caching failed:", error);
            })
    );
});

self.addEventListener("activate", (e) => {
console.log("activate");
      e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return;
          }
          return caches.delete(key);
        }),
      );
    }),
  );
});

self.addEventListener("fetch", event => {
console.log("fetch");
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(error => {
                console.error("Error fetching from cache:", error);
            })
    );
});
