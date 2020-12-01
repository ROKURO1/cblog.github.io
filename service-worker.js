/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e8cdb3880d1b3909de01306e4d193331"
  },
  {
    "url": "assets/css/0.styles.fceb914e.css",
    "revision": "df9c15b09328848a3f742f2528a533b4"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.36fcc0b1.js",
    "revision": "6624320af45a500e8eaba3f7d756d848"
  },
  {
    "url": "assets/js/10.09721554.js",
    "revision": "6d8ab7c2d3cbfcaecc0c52ac80f65cca"
  },
  {
    "url": "assets/js/11.2f313439.js",
    "revision": "f0f724f5ba7ae5eceee8ee8e360d7fd3"
  },
  {
    "url": "assets/js/12.e9052a8a.js",
    "revision": "08e736b6d6851e3635309698d82762c1"
  },
  {
    "url": "assets/js/13.72a2af11.js",
    "revision": "bdaff04c809c7565f6ad871ae75f7ff4"
  },
  {
    "url": "assets/js/14.f4a4ba38.js",
    "revision": "b34d8513d16125bb5ac46ac728f5f76a"
  },
  {
    "url": "assets/js/15.ac6cd703.js",
    "revision": "9ef03066f41692e5ed173c667fe05fa4"
  },
  {
    "url": "assets/js/16.a092ad7d.js",
    "revision": "92e9023e781d8a037e9f6e6305e66bc3"
  },
  {
    "url": "assets/js/17.41daee80.js",
    "revision": "17ff1104350624d509cef9ea5070818d"
  },
  {
    "url": "assets/js/18.263778f7.js",
    "revision": "3764f706f955e1f1314ed40620fcd7b1"
  },
  {
    "url": "assets/js/19.de397fb6.js",
    "revision": "a22b7d0ced792172b572f6cd63be7db1"
  },
  {
    "url": "assets/js/20.9d7dc0d3.js",
    "revision": "dc69d9651c3768ac987a39ed7c7e152d"
  },
  {
    "url": "assets/js/21.a4f2ae32.js",
    "revision": "56e78ffd3c4ed1ee9cbe6eb62e585ce8"
  },
  {
    "url": "assets/js/22.913529fa.js",
    "revision": "56bf49bfce68749c5bb3e56db172bb4a"
  },
  {
    "url": "assets/js/23.e553f2ec.js",
    "revision": "84e3079dfd41361a8cbc5d4b0746149a"
  },
  {
    "url": "assets/js/24.e92d046f.js",
    "revision": "547920bff20075f0def0bfd36d0fa4c3"
  },
  {
    "url": "assets/js/25.0a1d9f45.js",
    "revision": "28519c3e2e609aceb9f5129afb196512"
  },
  {
    "url": "assets/js/26.9d2d0ef5.js",
    "revision": "83cf6a5e3993235efc8a4699d8e94963"
  },
  {
    "url": "assets/js/27.226ff2d2.js",
    "revision": "8dbb43258aab1ce6335de70fcdc7913d"
  },
  {
    "url": "assets/js/28.6c3b4b1e.js",
    "revision": "5a2803d9c75540dd0774590b69a3ff4d"
  },
  {
    "url": "assets/js/29.02c222a0.js",
    "revision": "96151f0e3f49a694266fc35a1522b1a1"
  },
  {
    "url": "assets/js/3.7fe797ad.js",
    "revision": "3ef011b5ddd6c2eed59f3bb3b06f1880"
  },
  {
    "url": "assets/js/30.19789709.js",
    "revision": "04606ebfcb1ed73dade1e19dd85f6c35"
  },
  {
    "url": "assets/js/31.7a00c04e.js",
    "revision": "b84a086df5d3b4cef978f9018ffaa9b4"
  },
  {
    "url": "assets/js/32.5014aa97.js",
    "revision": "e0cb077801952401a851914941df3e02"
  },
  {
    "url": "assets/js/33.216fcfba.js",
    "revision": "f7720ab9f4672e0d6e07269f0f024e6f"
  },
  {
    "url": "assets/js/34.64c28738.js",
    "revision": "81bfd9190e27b77688cb77017f134ee8"
  },
  {
    "url": "assets/js/35.c09baead.js",
    "revision": "9a7708da9097760643556f88423e7d70"
  },
  {
    "url": "assets/js/36.10bcdd7d.js",
    "revision": "ba8d6330b8b6db6c98a4f2b4b9a95aba"
  },
  {
    "url": "assets/js/37.d365d448.js",
    "revision": "4b4201793c104a5e54db0beacb50b6ef"
  },
  {
    "url": "assets/js/38.b0108a1d.js",
    "revision": "4de330625cd6e82180e8d2c18db169be"
  },
  {
    "url": "assets/js/39.98df4fbe.js",
    "revision": "5ea5fc218371becb67f72d58560d9940"
  },
  {
    "url": "assets/js/4.88c5667f.js",
    "revision": "c9e683a4dfc06a25145d2a5b3378b64c"
  },
  {
    "url": "assets/js/40.b0905d95.js",
    "revision": "f275b21dc583bf4b179cd87ae1b0662e"
  },
  {
    "url": "assets/js/41.5b6e9eac.js",
    "revision": "0ec1c1fc9f25b7430b69ea7740d866b3"
  },
  {
    "url": "assets/js/5.3784bb0e.js",
    "revision": "2c343717c7cf1c73d2746b1dfad86109"
  },
  {
    "url": "assets/js/6.0f09439e.js",
    "revision": "2fbb2b7f0fad2a698c9e8df4c3daec22"
  },
  {
    "url": "assets/js/7.92a21e76.js",
    "revision": "ea5c5377e4eeedaf170eef14f72887f3"
  },
  {
    "url": "assets/js/8.7042e7a1.js",
    "revision": "70719301de45f6c3cf63e81fe8553e2f"
  },
  {
    "url": "assets/js/9.39031d2d.js",
    "revision": "3a03dc5cecfa7fa6be32466b17c3c033"
  },
  {
    "url": "assets/js/app.d8a0645a.js",
    "revision": "5594f66c2cb5a175142fce4c9d8d2963"
  },
  {
    "url": "categories/index.html",
    "revision": "9a1c2e08680c144c3be12ce3bc4d27c1"
  },
  {
    "url": "ComputerBasic/algorithm/BFS.html",
    "revision": "0c75d68fcf524e15f4d1571a01d2ed16"
  },
  {
    "url": "ComputerBasic/algorithm/Huisu.html",
    "revision": "621255b22d4833b9872f21ac81030eca"
  },
  {
    "url": "ComputerBasic/algorithm/linkedList.html",
    "revision": "379fcbd635935fe65862f7f36b7f2a20"
  },
  {
    "url": "ComputerBasic/algorithm/sort.html",
    "revision": "df99a7446e7ad67e2bc8e7152ad065c8"
  },
  {
    "url": "ComputerBasic/algorithm/tree.html",
    "revision": "be39a96fca74b10af6df0f8b7fbd6585"
  },
  {
    "url": "ComputerBasic/algorithm/买卖股票最佳时机.html",
    "revision": "92fec5ccbbc38f2e745c2bb99f24d566"
  },
  {
    "url": "ComputerBasic/designPattern.html",
    "revision": "0f9f6c15c3c17837dc719099c47394bd"
  },
  {
    "url": "ComputerBasic/network/http.html",
    "revision": "05377248f89c0f325dda72a829c98e07"
  },
  {
    "url": "ComputerBasic/network/network.html",
    "revision": "841f3fbb3e583810cbb347c7b397eaeb"
  },
  {
    "url": "ComputerBasic/network/secury.html",
    "revision": "e113e652cc72cbfa26354391912542ea"
  },
  {
    "url": "FrontEnd/crossDomain.html",
    "revision": "632cad668611f8fa855aaf3b639a985f"
  },
  {
    "url": "FrontEnd/css/basics.html",
    "revision": "a0f2f3ab94f5a54ef8d99fe83e54ba9f"
  },
  {
    "url": "FrontEnd/css/questions.html",
    "revision": "2e35e0d3065e3d582218d4ab0938283e"
  },
  {
    "url": "FrontEnd/css/移动端适配.html",
    "revision": "b0db11a3386dba02a3b7d58e58f4f6bf"
  },
  {
    "url": "FrontEnd/JavaScript/Ajax&Axios&Fetch.html",
    "revision": "4e8e2a51d172191916ccd141036a5862"
  },
  {
    "url": "FrontEnd/JavaScript/BOM.html",
    "revision": "d81de3a9481d0f6bf8ff43cf176195a5"
  },
  {
    "url": "FrontEnd/JavaScript/DOM.html",
    "revision": "b929fff07abe70ca743d79852a5dc735"
  },
  {
    "url": "FrontEnd/JavaScript/ES6.html",
    "revision": "d70e14e85d7e608e0108e8e1d1a1f4a4"
  },
  {
    "url": "FrontEnd/JavaScript/JS.html",
    "revision": "be402b7202a7431dd985ff499bbeba85"
  },
  {
    "url": "FrontEnd/performance.html",
    "revision": "ae27a6d406ae1bc3a53f58af8e4fff5f"
  },
  {
    "url": "FrontEnd/PWA.html",
    "revision": "c4d0aeed9b08d9efc69b40d4fa3d4a08"
  },
  {
    "url": "FrontEnd/regularExpression.html",
    "revision": "8e9724ff9ac5fe639fa752b5f42fa9d4"
  },
  {
    "url": "FrontEnd/vue/basic.html",
    "revision": "8c42ebbda2f48cd69fc62210443d1caf"
  },
  {
    "url": "FrontEnd/vue/questions.html",
    "revision": "78e7ff45479933f76bfa71ca6b3f9093"
  },
  {
    "url": "FrontEnd/vue/sourceCode.html",
    "revision": "0fffda9fa86e414ad4c381ab9603af66"
  },
  {
    "url": "FrontEnd/webpack.html",
    "revision": "f4dc7599b20b2f142f399e1ee5533288"
  },
  {
    "url": "FrontEnd/WebWorker.html",
    "revision": "a85d91586a7ff4c6b154beeb10cf2911"
  },
  {
    "url": "index.html",
    "revision": "734608ff38aef638b42886409b725633"
  },
  {
    "url": "interview/codeByHand/code.html",
    "revision": "9b4dcb466d63527935b056658c46d755"
  },
  {
    "url": "interview/project.html",
    "revision": "56a5f4171c33f13a839afe9588aa2a05"
  },
  {
    "url": "interview/questions.html",
    "revision": "283d256e0c4ac85dcbba04913198dcf9"
  },
  {
    "url": "tag/index.html",
    "revision": "1b62f40b7e546d2fff4b12eb8fb34076"
  },
  {
    "url": "timeline/index.html",
    "revision": "a1d247268bffae7fa8bffbefda33585c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
