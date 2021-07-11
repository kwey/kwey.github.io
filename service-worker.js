/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/11/14/brower/Cache-Control/index.html","dc09150e944ed117e11f1daaf50315fa"],["/2020/11/14/brower/cache/index.html","5ddd08002a128e0517a410a97b67598b"],["/2020/11/14/brower/cache2/index.html","e032129787df60a3b022461bc29b06b3"],["/2020/11/14/brower/chrome-performance/index.html","b02e18867f94823974d489c161805102"],["/2020/11/14/brower/repaint-reflow/index.html","3e3be00cdc0240fa9a2218d34894193f"],["/2020/11/14/css/bfc/index.html","9f9e89b10452e4ecc79b101be16a4062"],["/2020/11/14/css/css-box/index.html","1c8179eda709e9b2342867c7f91add44"],["/2020/11/14/css/flex/index.html","5cc0fb5252f6bcdc7ca3b1335e340e7e"],["/2020/11/14/css/hide/index.html","9c31997f193006d127fbf9da9fc46e22"],["/2020/11/14/css/layer/index.html","d1e81db08b55a46f6ea784c56108fd67"],["/2020/11/14/css/layer0/index.html","5cf6c79ca2a91d83e81843b1b1ede695"],["/2020/11/14/database/Innodb/index.html","1d475b04e756f2e898ad597df4dec0a5"],["/2020/11/14/database/centos-mongo/index.html","2c6cb95dcbf527c44e80627075bf8707"],["/2020/11/14/database/mariadb-mysql/index.html","82a042a13f07c6fb4a0a42ab85fbd8d4"],["/2020/11/14/database/mongo-restore/index.html","84b5254155be5af512c0c893392ce450"],["/2020/11/14/database/mongoose-populate/index.html","106d7672e21f4391d0b8aa240828bc69"],["/2020/11/14/database/mysql-transaction/index.html","302ea729869121b3b7fdb834e2c00b9d"],["/2020/11/14/database/mysql/index.html","31f939302b74da2d2a8c9357078d9881"],["/2020/11/14/frame/cmd-amd-es6/index.html","40a1d883eba7b287e46624e6104d287a"],["/2020/11/14/frame/express-session-mongo/index.html","f43b8a8aac697c825a31c4fb97666d70"],["/2020/11/14/frame/nuxt/index.html","4e9a324f48b5193cba242da0029e1585"],["/2020/11/14/frame/react/index.html","2842a7b05ba427f93f3a21c6069b9ee5"],["/2020/11/14/frame/vue-life/index.html","ec2b0ba48dca117b8a0efdfcfd66e24e"],["/2020/11/14/frame/vue-nextTick/index.html","15f4a78b5015ac4240f6c9cd4f1b682c"],["/2020/11/14/frame/web-mvc/index.html","30372c4a2e5aa5734b7ce6456b834e89"],["/2020/11/14/html/cors/index.html","1e32ee70c0e194939191df1fbb01058f"],["/2020/11/14/html/history-2/index.html","00079a36585c098d9967d0bb66f6b68d"],["/2020/11/14/html/history/index.html","94e2d60e5fcc3c9d7136aa8c56f0b53a"],["/2020/11/14/html/html-render/index.html","f829ee388272926d106446dbcac3dccb"],["/2020/11/14/html/link-preload/index.html","458333e8e1bac7b22770c5d1ff41fc42"],["/2020/11/14/html/link/index.html","bd4a2a2305ce8b9a74e5628492a2ec0b"],["/2020/11/14/html/nofollow/index.html","886ff5d0e51ea3aaf739045b96533d56"],["/2020/11/14/html/video-auto-err/index.html","9b3b6b63bd248d17e8ae47359b709f8b"],["/2020/11/14/html/video-auto/index.html","bafa462a26f8decaa8506b4e2a6dacf0"],["/2020/11/14/html/video-play/index.html","d75afe434310852d17ec4cf32be2ffa0"],["/2020/11/14/html/video/index.html","9237aa0082d3eaae1167cb892d988b70"],["/2020/11/14/js/MessageChannel/index.html","96cefd94aa070471579351a10a95333e"],["/2020/11/14/js/MutationObserver/index.html","03831a65450d0b3d1bbf2d4e3a31694f"],["/2020/11/14/js/addEventListener/index.html","feb107033b0b2e98494d7f584dc4303b"],["/2020/11/14/js/binary-tree/index.html","3c4cf2286b0d1e8d6c35691c1433b1be"],["/2020/11/14/js/bind-polyfill/index.html","f0a18396c7c7e8cc07b2a1c7023b139f"],["/2020/11/14/js/bind/index.html","579ddf3ee3f96d9c17f1bcef4623aa3e"],["/2020/11/14/js/color-hex-rgb/index.html","3f0c92d45b91dfbf50fddb40e7522eb9"],["/2020/11/14/js/data-format/index.html","3665d719bfbc78061a7f5b6b552487d3"],["/2020/11/14/js/dom/index.html","7cddf2714f087fc7d37be3f9b1e15d84"],["/2020/11/14/js/es2020/index.html","a9962ed850eb0733f7701719401c85c3"],["/2020/11/14/js/es6-1/index.html","1c9d7d14fed4f524a3a7152ddd9f53b4"],["/2020/11/14/js/es6-2/index.html","19aeca70b99ec34b0d3d7d6faa92c399"],["/2020/11/14/js/es6-3/index.html","344df3e4d57f2ded714cc60b6117b89b"],["/2020/11/14/js/es6-4/index.html","f9b4c2c35782b99b7ef35047282b6b38"],["/2020/11/14/js/es6-5/index.html","2f9546a2f18e25cf9f4af86c048bf10d"],["/2020/11/14/js/es6-6/index.html","f66e991ef1cee1a3f237322c0dfb2e1a"],["/2020/11/14/js/es6-7/index.html","f0a680415ed881a032f1560263a7b3ac"],["/2020/11/14/js/es6-module/index.html","925fc8c54fbc4568ee99b81a68efb2c7"],["/2020/11/14/js/es6-next/index.html","73529e283df2243e7ac7c1bb00f572b2"],["/2020/11/14/js/fetch/index.html","608374fa21c05617ed0c111a570110cd"],["/2020/11/14/js/fun-currying/index.html","ed25bd818f7eb374634c21351191624b"],["/2020/11/14/js/fun-currying2/index.html","2e0979817dcf05dc92c175a87efe860a"],["/2020/11/14/js/fun-set/index.html","d925eef89ca48f5cd9463631b552e2a3"],["/2020/11/14/js/function/index.html","b2527e975f362c40fc72e0ec3d6da923"],["/2020/11/14/js/js-precompile/index.html","fade0f5d4afde075320d28ea0ffef765"],["/2020/11/14/js/js-proto/index.html","9bae6b5cf6990628271dfe7deeca6a56"],["/2020/11/14/js/js-utils/index.html","dcfc882b7e81d252f49e234278bd2cca"],["/2020/11/14/js/link-list/index.html","9f5263f2e16b9dc6e137aa5d2663ae0e"],["/2020/11/14/js/micro-task/index.html","a1284f510c3ad943218a25a4d8c897cd"],["/2020/11/14/js/mse/index.html","12677496059cad262d7f24ad55458fb5"],["/2020/11/14/js/new/index.html","59e37f50b4fecbb4669a4eb4cb4452e4"],["/2020/11/14/js/num-string/index.html","e47b14325c8b3c3657da061a2f441aec"],["/2020/11/14/js/parseInt/index.html","b55ba5376d561ad9461a701eb0bbc610"],["/2020/11/14/js/promise-polyfill/index.html","f2961ca2c25fae67a633b88cbbd1f20d"],["/2020/11/14/js/queue/index.html","f58bb79b4472d2098fb366c82c661a9e"],["/2020/11/14/js/regex/index.html","cd58e92acede8e695a5dcca44b26f098"],["/2020/11/14/js/regex2/index.html","9c56e5d5b5dc70c7a6d4936254a90f95"],["/2020/11/14/js/sort/index.html","21b448e756af29ecd5df71f703fb71a8"],["/2020/11/14/js/stack/index.html","88e8c2eb88d4815e2c1d97bd7c49d920"],["/2020/11/14/js/textContent/index.html","fa07fb62f5bbb3ced55e7cfeb341bc6b"],["/2020/11/14/js/tostring/index.html","4443678422d7172a4b8e0c458ffe1d3a"],["/2020/11/14/js/ts-3.7/index.html","d7e6b99bfbffd9c9468c5772340d940d"],["/2020/11/14/js/ts-dts/index.html","e7f67a1d158e05d2571c6ee938411ea1"],["/2020/11/14/js/video-demuxing-muxing/index.html","21d7220b8d7e5ffd01e2b3785389299b"],["/2020/11/14/js/web-err/index.html","d67a598c367a39d0c1e9ab1660efcc82"],["/2020/11/14/js/web-worker/index.html","e8afbf112aa4940af3673b5d7172ec84"],["/2020/11/14/js/xss-csrf/index.html","072d51a721ecfef0614b991034839e7d"],["/2020/11/14/linux/centos-cmd/index.html","22937c9cf3901613a462c33d44cb715c"],["/2020/11/14/linux/centos-node/index.html","24524e83c1f97ee11d8c9d737eba8e98"],["/2020/11/14/linux/crontab-1/index.html","000c340f3cf43d4e18b1dcc0f3964ecd"],["/2020/11/14/linux/crontab-mongo/index.html","6bd9c4115a5736c321203cebce5f0e88"],["/2020/11/14/linux/crontab/index.html","84d660e35d99ea2c79c4bd0d04b61afb"],["/2020/11/14/linux/firewalld/index.html","db167ee6256f25783e03a849e61deb2a"],["/2020/11/14/linux/google-bbr/index.html","073e43206c491561e9c1ea598cfeaaf2"],["/2020/11/14/linux/java/index.html","83b4ebff7a10c5fb485425b5cd8445a3"],["/2020/11/14/linux/jdk/index.html","d183b69d99f85aa4dd09c33d558570f9"],["/2020/11/14/linux/jenkins/index.html","ec10297bfb524984283e68a2a045998b"],["/2020/11/14/linux/kcptun/index.html","9271e1b02e55480068b25a1b019d9c5c"],["/2020/11/14/linux/nginx-n/index.html","5a814b204319a7a636db01aa7ddc05c8"],["/2020/11/14/linux/nginx-proxy/index.html","0abd38e7a33555384fb9780c7c0299ff"],["/2020/11/14/linux/nginx-root-alias/index.html","22a759097ddc64e8ffbef758dca88c4f"],["/2020/11/14/linux/nginx-ws/index.html","a7190c9081827c4936e633306f04dae8"],["/2020/11/14/linux/nginx-wss/index.html","d6c15ef13fd3740fd3412f03bd7fc403"],["/2020/11/14/linux/proxy-reproxy/index.html","296497b91bb84ac8683f4b7633222f74"],["/2020/11/14/linux/vi/index.html","12aa789121c5b42c7300a70bcbe2c84a"],["/2020/11/14/linux/yum/index.html","f99d67fae0d84652a7d9b7c1468ee39e"],["/2020/11/14/network/cookie-parser/index.html","7464092d3c87922d11946612c0be440e"],["/2020/11/14/network/cookie-session/index.html","59ecd7eb74f23562309d5ba961eb095d"],["/2020/11/14/network/dns/index.html","858bbc038edbe00b689e19df14cc806b"],["/2020/11/14/network/http-206/index.html","bf3f06c173ee8b93f942b07dd5d23701"],["/2020/11/14/network/http-code/index.html","c373af8164f28c91805387cb486d77f2"],["/2020/11/14/network/http-cors/index.html","28ffe2e920e59ee7a13c67121ab6f3dd"],["/2020/11/14/network/http-differ/index.html","456f109c1d56845b27a75e61bd7e972c"],["/2020/11/14/network/http-get-post/index.html","57dbdc80d40e8859f6c55707325dd47a"],["/2020/11/14/network/http-histroy/index.html","0b5e8eb5e2be91fe67962a708c62e185"],["/2020/11/14/network/http-https/index.html","40fcd3377f2cda780db32e17990c6035"],["/2020/11/14/network/http-info/index.html","903c772c7b7587a68436374c9076420b"],["/2020/11/14/network/http-len/index.html","c07d6870cc7bbccba695aff54353869c"],["/2020/11/14/network/http-url/index.html","c9147d8bfa9980e08ecbadce7936090f"],["/2020/11/14/network/symmetric-key/index.html","09200fe7f0e750ea91cd13101a902a54"],["/2020/11/14/network/tcp/index.html","19eb6e56f63c2469b0ee6762207e8192"],["/2020/11/14/network/webSocket/index.html","58a7e6645b5963786bcefa2c5fb427fe"],["/2020/11/14/network/xhr-buffer/index.html","3f9adc45aeaf64a1e8156698badc86ba"],["/2020/11/14/node/cmd/index.html","ccc6e905e157b40cc1092453a79d4fd2"],["/2020/11/14/node/express-middle/index.html","daec27b4c51ece59516cbb744873558b"],["/2020/11/14/node/jwt/index.html","4902efb8efa9be993cef2e262e154b39"],["/2020/11/14/node/node-schedule/index.html","d58e52e31db68c24ddbdfdf582661eca"],["/2020/11/14/node/node-ws/index.html","a748455df601c8d76a7c4e0539b02b87"],["/2020/11/14/node/node-wss/index.html","bf2502ce659d2bbd96cf050baac50c45"],["/2020/11/14/node/npm-deploy/index.html","bcb845be3c61dd3f4e17d4d34ce7ffa4"],["/2020/11/14/node/npm-link/index.html","e652f24c4fdb024ce5bee04ec6f323c3"],["/2020/11/14/other/hy/index.html","da55015974ed3d05089a64c48e36b4d9"],["/2020/11/14/other/java/index.html","384dc56230dac638813ab5d295999c14"],["/2020/11/14/other/mobile/index.html","fae87bef67caa3217a1f74026e817230"],["/2020/11/14/project/babel/index.html","ddfb08c14f7cb6ce571cc2e44eccb821"],["/2020/11/14/project/commitlint/index.html","2e8658e2980de22d8de4487d9f6c4cb2"],["/2020/11/14/project/github-webhook/index.html","2f104cc06fd683f66b13fc91a09df904"],["/2020/11/14/project/terser-webpack-plugin/index.html","8fc17e3cab024ccaee8219948e8a25ec"],["/2020/11/14/project/webpack-end/index.html","d78395b83db9d2018f2e060bd5be6d3c"],["/2020/11/14/project/webpack-loader/index.html","a6069c035379e545e4c21a2b72aa297c"],["/2020/11/14/project/webpack-plugin/index.html","013f4b61b5786c7e9cd8b2193ba99073"],["/2020/11/14/project/webpack-splitchunks/index.html","2394541e6a5a1c1db4caf80ab5ef4377"],["/2020/11/14/python/decorators/index.html","5e726a3d74bd7958c65f9f0730c9481e"],["/2020/11/14/python/django-cors/index.html","b1a186f8bd45a409e62278aede4fc9b5"],["/2020/11/14/python/django-sql-error/index.html","99cdad5fb870995ae3accb49157698c6"],["/2020/11/14/python/middleware/index.html","12ffbd5b2bd3beed9bd505b549e2495c"],["/2020/11/19/doc/ci/index.html","8568ba09265ba9cd96713d775271c1af"],["/2020/11/19/doc/dj/index.html","87a3ad66f08a55d06566984afe078367"],["/2020/11/19/doc/dp/index.html","3ebd7dc2de66310caf39d1b63a437eb9"],["/2020/11/19/doc/f4v/index.html","c30be6ff7679dcc95950c551a0c2ed9e"],["/2020/11/19/doc/h264/index.html","e03d6f1dffc2fbebb8e6013360325e23"],["/2020/11/19/doc/mask/index.html","5ee746da6b4a2b1e0e99c137065d66da"],["/2020/11/19/doc/mse/index.html","2513522d2603ee853cd230de7d3ede35"],["/2021/02/01/brower/lifecycle/index.html","77727ef531694993f131b64baac11545"],["/2021/04/30/dm-render/render/index.html","a4483f5ca55e6330e19f24f97acb2210"],["/2021/05/07/brower/gpu-acc/index.html","fbe8134745bec3f0b28b8390c21d84db"],["/2021/05/08/brower/fps/index.html","56943ce5cca22f2638dab36eddb1659c"],["/archives/2020/11/index.html","7909f52c9519f093d0862a56e7c19e89"],["/archives/2020/11/page/10/index.html","55637b062247bc5113696ac71e888b34"],["/archives/2020/11/page/11/index.html","dca5f8e0c83f8834ef8da91be1f2278e"],["/archives/2020/11/page/12/index.html","57b2cdde5007b7848c011d7cc11181cd"],["/archives/2020/11/page/13/index.html","cbecc22c8e9b11e61c498f79f04271dc"],["/archives/2020/11/page/14/index.html","e6c2c7d3503013c0bcf99eb0dbbf817f"],["/archives/2020/11/page/15/index.html","63f0f67bb7642e1ae62414d1a60de6e8"],["/archives/2020/11/page/2/index.html","cd7af1f4c4d9373156e9dd8c20b56003"],["/archives/2020/11/page/3/index.html","4ed27f7b5269d31518da80f706d6e96b"],["/archives/2020/11/page/4/index.html","91f42d66100de005b21afce1938dbe9e"],["/archives/2020/11/page/5/index.html","b9dce3396bbd555cfc74098a361f8c7d"],["/archives/2020/11/page/6/index.html","6a2d487fd9a23375295037b78833b12e"],["/archives/2020/11/page/7/index.html","c5e8ae2138c4d1f63326739c386d1b64"],["/archives/2020/11/page/8/index.html","70a82ea8efd588b7fac6624bc7d4e86a"],["/archives/2020/11/page/9/index.html","b68f97d2e01a9d7bbee25a2d8ef9112a"],["/archives/2020/index.html","45a28533fb1854d8f03f915c7dba3688"],["/archives/2020/page/10/index.html","168332e29976bdf2e63b2bb305d13f95"],["/archives/2020/page/11/index.html","08024f765f6f0d6b424f495219785817"],["/archives/2020/page/12/index.html","4eb6010c3255a21fe753b3b559a83a73"],["/archives/2020/page/13/index.html","84aed78d3a37bbf7e47ecd7bc58dd15f"],["/archives/2020/page/14/index.html","38a2ce51a5fd72d2baddd776f74083d8"],["/archives/2020/page/15/index.html","82482234151f51daaedaaf29c1dbd69a"],["/archives/2020/page/2/index.html","ba3e460f3f5003c3e60e12051049e61d"],["/archives/2020/page/3/index.html","b67cf21e92b4c58916c8bf426ccc28df"],["/archives/2020/page/4/index.html","4c5f575cd46d0426960ca9eee300feb7"],["/archives/2020/page/5/index.html","e846e10525099d42ffe2ece1f9bba05b"],["/archives/2020/page/6/index.html","98a8b1deb965f77058e68b4cd49babd9"],["/archives/2020/page/7/index.html","426f989c1f39416e0a015337cd6391b1"],["/archives/2020/page/8/index.html","480a862ae00b562964980a743ed07d38"],["/archives/2020/page/9/index.html","ce35bd240cabc504c1efdf5066ef0be7"],["/archives/2021/02/index.html","22bfaa3fa37d2dd8d4f210cb90ea9110"],["/archives/2021/04/index.html","e364009a47ffa5afbf96e27927111ce0"],["/archives/2021/05/index.html","7cc7992502ad76126c027b4e9cd685c2"],["/archives/2021/index.html","40212df036cf21f77b1cfcb8af11f88a"],["/archives/index.html","193c98533cd1c091dfc08acd74c771da"],["/archives/page/10/index.html","c31fa149e2b17e91aa5f3f8d9f88b268"],["/archives/page/11/index.html","d004e248764945884a00d569a884fa52"],["/archives/page/12/index.html","ceb826eabb2b0c19d22b34ae641a8b41"],["/archives/page/13/index.html","404d57b807ec816e9879c9d797def0ac"],["/archives/page/14/index.html","e6eefa3630df2ecd5c42ed62ce1e7c71"],["/archives/page/15/index.html","a867a4ba6137620643507bb7d9b394e7"],["/archives/page/16/index.html","dc2cf0fab3bcad3df732d9151137c930"],["/archives/page/2/index.html","ad897f99dde64013ad8934ac85d8a4d4"],["/archives/page/3/index.html","f37b6dc3ac688c9dff1e5aa22f123e77"],["/archives/page/4/index.html","43ef6fee0feefd0bd9257b757b15ec5e"],["/archives/page/5/index.html","5b52d5a37c39a11611afef22bfdadf44"],["/archives/page/6/index.html","b62f2d46defca59b408c7f910faa8ce0"],["/archives/page/7/index.html","7374ec68b0f809f9202249c6ac29abcd"],["/archives/page/8/index.html","6167f963ac05584f48175beecaa09cd2"],["/archives/page/9/index.html","740d2f79786016866e6412abead5eaa0"],["/audio/audio.js","30af61a128e6d9024464b8581690d2ae"],["/audio/index.html","88cc2cb1ba80b36211d10f7776a3a9f3"],["/categories/Databse/index.html","e005a0c30ceb70766cd84c9e43977a43"],["/categories/Javascript/index.html","c7d05a85f1145b05beb89f5ea8b78741"],["/categories/Javascript/page/2/index.html","290a1ba5d65a0c37f033bdef5fcf549c"],["/categories/Linux/index.html","e89ed628c07042154004a9818618399e"],["/categories/Linux/page/2/index.html","243898fc6100a7c2b5ee7339544913a6"],["/categories/Node/index.html","5c352b0a00454f955e5150600bbfb686"],["/categories/brower/index.html","693c7650f160643d11f74432a4b9c29c"],["/categories/brower/page/2/index.html","2a499550c8e7840ebecb6f44a1a9b685"],["/categories/brower/page/3/index.html","aea53401517aea9f8b01e424fcc916bb"],["/categories/frame/index.html","a4696a85891aac37b4f53337161833c2"],["/categories/gpu/index.html","f217ea8b42fd574b845b8fcc9b06b5b5"],["/categories/index.html","24d3a6fd07d5f04762d12a796ee96047"],["/categories/network/index.html","78b59e199507228559c11d89a4ef9db8"],["/categories/other/index.html","486201f94394963708cbf025663b17c7"],["/categories/project/index.html","4101cfe990af7ad1e054ec211c51017a"],["/categories/python/index.html","aa71872e4eba4ed27bd8c930b22fd713"],["/categories/web/index.html","56c31314c7cf7f5d83c4d7fcbe995bdd"],["/categories/web/page/2/index.html","1c05ffe5efa77db01c20695f41f00fbf"],["/categories/web/page/3/index.html","51ba93f595fe36edf20116ada258e5c4"],["/categories/web/page/4/index.html","ea4273d9f2bad1f3dcb5025e77b14a3d"],["/categories/web/page/5/index.html","89c3da46f72caed16924b552133bb173"],["/css/index.css","3f6e305325ecf9be86855d0b92df9df3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/follow/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/follow/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/follow/knav.js","7d863b99144e1651521d6bbc48b7f1b8"],["/hide/bi.png","17b80f948f7b1155cdaea099894b6ea1"],["/hide/bro.jpg","e4a34350594a3f769a7a941a91e73fc4"],["/hide/bro1.jpg","e971a5b6cd95078e195657cda63a66f2"],["/hide/bro2.jpg","16b171e365f7ad2f0d787781885bee38"],["/hide/bro3.jpg","2acb9b9d0bd9199f889830fc722a0ef1"],["/hide/bro4.jpg","63bc51f06922fedd5143ee539ea9e8c3"],["/hide/bro5.jpg","11e6a3e87a5cf640a01af30817ba9707"],["/hide/bro6.png","f8be2ef79cdf29c8da170e76138740f7"],["/hide/cpu.png","9792bfb92eeba30abd2475ec02162f24"],["/hide/css.jpg","4f38f8da7753934355bb19250a9f47d1"],["/hide/cwnd.png","a7c535f85fd865871017c6d9166ae5b9"],["/hide/fps.png","cfbe01318789f8598896e8ebae74ad48"],["/hide/fps1.gif","249aeae794b38d43df5034aabcabf463"],["/hide/gpu.png","894e6d2f20921e7c8be985bbb0dac5d5"],["/hide/gpu0.png","87c660da468bc57345c2ed36c55d08a9"],["/hide/gpu1.png","ccc61af8639b3d8b40aac964c89495a0"],["/hide/gpu2.png","c88f9fd4d9baf708c353e445bc00046b"],["/hide/gpu3.png","46ce4d820db40e9439bcac253b7be79e"],["/hide/gpu4.png","666857a310fc49a6288979d5615c75a5"],["/hide/gpu5.png","6eeec5a6fa92f7ba2b897d71602e3559"],["/hide/gra.png","f3a31c8e235cbd17f89690249646924f"],["/hide/html.jpg","b1245c9050ba8f4a174e5f74aa81be7d"],["/hide/paint.png","232c4de9606f6e9d2b3ae9f52dcfb974"],["/hide/per1.png","c8bcad8d9e63c271190c35573180049c"],["/hide/per2.png","98d837d2d5eeba008cac1cb2d5ac66bc"],["/hide/tree.png","ad7a642ed9d1b5217098dadfe77bc562"],["/hide/tur.webp","77493749f8f18aaa32b722984f00fd0c"],["/hide/webkit.png","144c9289e3a928bd8dcd096b988b0db3"],["/hy/index.html","83d2944194327dc5f643c8ede1676a0a"],["/hy/piano.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/hy/yyj.js","d578725b70b329f21cacac6910486bae"],["/img/404.jpg","6708d92b33a76bc8759e3832d89cc5bc"],["/img/Innodb.jpg","c350cbb23996abfee7d226d8a02090ac"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/audio.jpg","bbc666a99a4abdb92036ff851f5c2220"],["/img/bg1.png","e70b4cf6957d1bb37b501a77319fbce7"],["/img/bg2.png","86abb0b786c270073c641b292f3f992f"],["/img/cache1.png","f3f9894b128aaa71c632eca751c13936"],["/img/cache2.png","e31da6a87b07b1b6d1a6c93e134bec5d"],["/img/cache4.png","a323711c9cf234eb19c8e47fe26de0a7"],["/img/cache5.png","bb5888e6a0ba4a5e9341d922dc59906c"],["/img/cache6.png","79bdc64dc80e61923e3609ffd4881460"],["/img/cache7.png","6718511513b7fa500d8de1b19e3c6eab"],["/img/cache8.png","84ad69b2d5aa201686397afc9420481f"],["/img/cache9.png","fde40c8b01c7a4c312e4741682c3ac78"],["/img/css-box-ie.jpg","0abb576ccbf3e6e29c482880c6c7a177"],["/img/css-box-standard.jpg","f88cc621a037b959111ef3bdc8e8a61a"],["/img/css-box.jpg","96efbf91a11e3e16a69a634afc1aa826"],["/img/css3.jpg","e604bf25aede342b28c270694753fa06"],["/img/database.jpg","6e30f87c1504bf625945e38690931b50"],["/img/default.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/img/default2.jpg","695dc2d6fef5092c43c81a82c73209fa"],["/img/default3.jpg","e6dbdc3eab92a9bfe81f031af6f3fd8d"],["/img/dns.jpg","664bd3007b4aaf137783a90edec4d5bd"],["/img/dom.gif","20a60b70fa7c44e1851284ef2aa84c26"],["/img/e_block.jpg","fe39d2aa5a693ed6fdf3244a0fd43d6a"],["/img/e_brower.png","38870559e6437549ae444014ae5164a2"],["/img/e_storage.jpg","c218c03548192ad23908ebbfda4dc3a6"],["/img/e_upload.jpg","1360d82820f03121c8bb105eba8910af"],["/img/engineer.jpg","648e800cf421297aa800185b0f4b8613"],["/img/error_level.jpg","70f549c05c3a38185a6cd91c3f24b254"],["/img/es6-1.jpg","5a631910388990309719aeea261e5e41"],["/img/face.jpg","48e1278e886117e6a81b09a8abd923b4"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/git.png","661bdf03b566cd9142ed0cb2bbfa5d31"],["/img/guitar1.png","24e09bd84e38a9b778fdb33cf0db4cba"],["/img/guitar2.png","9308d80550d9d23e9a641718ea3c2816"],["/img/html.jpg","15a0ebced997e22423e29d79400b4396"],["/img/http0.png","6fb2c90fcd987ac5f1ed351c46a94614"],["/img/http1.png","48a823ba71f53fe0201c40005eb669f9"],["/img/http3.jpg","cfb71ef15c3c1484de5cbc4b5e3a3e9e"],["/img/http4.jpg","3b774104b448d96052ba49a93a180cb0"],["/img/http5.gif","d404acda62c276b9a3ab90506074307f"],["/img/http5.jpg","9d2a2555b99eac2cdb625bcdc355db77"],["/img/http6.png","5832cc77ea1dbbdc281758e48b5d49c5"],["/img/http7.jpg","38069c638a93d43ea201c081826b8903"],["/img/icp.png","b7fa4a92047987bf65dc954f48f95c3d"],["/img/in_file.jpg","60e8d0496a81b561e73ed7447c951301"],["/img/in_group.jpg","e58036db2375c85a482dc25f00a6d532"],["/img/in_line.jpg","1c65ea519c0e0232abba0476781ec41d"],["/img/in_line0.jpg","6eff2dabe2e6b6ff9226f7ddd904acfb"],["/img/in_min.jpg","2832a095be030ca6254e84a12db80052"],["/img/in_p1.jpg","5062d9c9cf1927f46f708a18fbd04b73"],["/img/in_p2.jpg","1761f0af72bf03e505623132c4dee072"],["/img/in_p3.jpg","c0b6e75d911f826533fa8e428b13026a"],["/img/in_page.jpg","1ca1af032c3b74cee6af758f6afa3ba4"],["/img/in_pages.jpg","452e2d255f53a16f14197ed4c78d0b57"],["/img/in_record.jpg","52fe8010e0bd1195826f7d7fef7effe2"],["/img/in_table.jpg","ed99da9efd84d88bc9981bfd0ad6f5d0"],["/img/ip-info.jpg","137ef3e803ffee1d4722cc5ba6ba4879"],["/img/ip01.png","60372fbdf9d5b16a0b73d054aac78ae6"],["/img/js-pre.jpg","5563fdfc3f0c4cbcf5bc4ff8bd4b11ac"],["/img/js.jpg","93de37b1c287aa6e396629651b87c759"],["/img/kcp.png","2fcc970d8d88c663de4f32096f10c4e5"],["/img/lifecycle.png","2fe88acda884a35cd150475b24d4d87d"],["/img/linux.jpg","da86200d0441f2434e074909fb78a750"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/micro-task.png","24b1f7b7c18318952099be9126d6f719"],["/img/micro.png","ef9842e97a62bb5c2aac3cbf99b2b7de"],["/img/middleware.jpg","e1c6e4c7df95a5e3a80882c8b4aaf803"],["/img/mvc1.png","6fea96842165b35cd4362afbfe4c28ac"],["/img/mvc2.png","0967d7c996185643a5c3c221f23976b1"],["/img/mvc3.png","24c741b64ad540f9ea3b6728007627f0"],["/img/mvc4.png","47e923a5451f384f54fb8f8e5d119ea7"],["/img/mvc5.png","59e3024de383a663c185cb6f51e3c194"],["/img/net0.png","67709cff0f5b734941fa8984380b456f"],["/img/network.jpg","6d1bd3867a00092a15e810f0e28e08f7"],["/img/node.jpg","5a1d0be501a67bbb11f76193b2484932"],["/img/nuxt1.png","a8a79e895887d6cc0dbac0e10817d3f8"],["/img/nuxt2.png","794d74b38ae7072cb13efec3f54c6d46"],["/img/nuxt3.png","30153f3e8ff30b283ef0c85aebd30145"],["/img/nuxt4.png","2d6d081ce9fc5d73dfa2104dd4f62662"],["/img/nuxt5.png","1965e4a8214d1dd5acc4fdc99a0c135d"],["/img/osi.gif","2af488004591cbc12cd82c44518523de"],["/img/piano.png","3e50520a46b2a5ef5e5bcfecf89ebe7c"],["/img/proxy.webp","b71c84b0dd3183787b9b7390d9cc3626"],["/img/python.jpg","0ea8225aa53fd9b90afa175f2f029b1e"],["/img/react.webp","138a4a86046047def99fde8a939e238a"],["/img/render.png","5527a6ebe35dd531060b80296da055bc"],["/img/render1.png","79d4f1ecf7669ed50e0373945a2248aa"],["/img/sql_index.jpg","01266f5a5746ccca7602549b7e6cb846"],["/img/sql_no_index.jpg","898f9995d5536159509c6346b34593f0"],["/img/sql_s1.jpg","b852c3e340f80f79a149bcc4fffd158c"],["/img/sql_s2.jpg","24f9c84401a165b6cbe3304e42c50889"],["/img/sql_s3.jpg","95628c777213e9fc89c954ce3d3cb684"],["/img/sql_save.jpg","da4eb76556990a3b9b89e32e48136660"],["/img/ssr.png","5631c8e2f956ae0d55455d04af8ab317"],["/img/tcp-ip.jpg","c1a9182811eca72933a8c0ffd39eba06"],["/img/tcp.png","6a28f4d806c4ce9e148c28132f0e126c"],["/img/tcp3.png","83d97bc275b4af9890b2deeb7d035a9a"],["/img/tcp4.png","78aea88d303d52d5dbc81e002fd93d2a"],["/img/teach.jpg","4650698f3262b8c395cc3b640b568045"],["/img/vi-cmd.gif","acc327dfe0d5328c1ad102179c70b641"],["/img/vim-vi.png","dcd25a6082e1989975c280213f3e1052"],["/img/vue-nexttick.png","f1f3435bb2f4d3f418480be4a171e0ed"],["/img/vue-nexttick2.png","ed23a41f9c38de8174b1089ab3876966"],["/img/vue1.png","cacdab3440e3647647063f253a99fb07"],["/img/vue2.png","51175931269b1b90b2f08aabeb14fc96"],["/img/vue3.png","904b88eac7e8b99e3b6063a5977fc63e"],["/img/webhook.png","2cf55702ae98e72420c445084e5c2405"],["/img/ws.webp","aa574f8edcccc79f33aea448ea322d57"],["/img/xss.png","5c18b7d26b37df483a702810498d3182"],["/index.html","1b7bee67997d85c995029b117f937ab0"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","94cd6880eb20e433fb569b95316902bf"],["/page/2/index.html","1d30874654eceac05daac7ff8c91bdad"],["/page/3/index.html","37f8c73f08f5479056b6fe15279ac067"],["/page/4/index.html","c00d6a5a8b76d8e2818f0b4062daac03"],["/page/5/index.html","e34eb9e99dd81037cd2bbaffbedc956a"],["/page/6/index.html","318e21950fd00488ea601f76efd5f585"],["/piano/index.html","5f1e9d4abbe2c68a5dcf8b2367d79f2d"],["/piano/piano.js","b3b64af667370ff6a52ea668c545facf"],["/pwa/144.png","68bbcf438443c0540757bf8c269507ec"],["/pwa/192.png","303f826bc53ca35a6db0f2a4d243d837"],["/pwa/48.png","07688b011d5f26cee21398d85ac2e0a4"],["/pwa/512.png","8fddc19901d448a5317575adcad7d1ac"],["/pwa/96.png","ce8ea5361607aa60dab17e1a50d4570a"],["/pwa/favicon.png","3d4e693505092fc6f4cc1a70438ef843"],["/static/ashes.js","b4143c2bd85f1c81cbfda93f2dc76988"],["/static/editor.js","ce1fb5f6b8e638fe05a28941f9970b92"],["/static/follow.js","3daa711f3e14bd15d8b1f64313b685ee"],["/static/weplayer.js","5b13e6501c44801cb201ec9d6e1ef746"],["/tags/Javascript/index.html","3ed7b8dbb1198af5e1178a79ca15b4fc"],["/tags/Javascript/page/2/index.html","09c866361a0f2c0b255c77ac36deef97"],["/tags/Javascript/page/3/index.html","8820c352df94aaa0acfde7d53ad0729b"],["/tags/Mongodb/index.html","d9d43a8746b4934a40ecfa455f5f79a8"],["/tags/brower/index.html","fd60ffecf51f7b5795247dbb3d586940"],["/tags/brower/page/2/index.html","9a41e19634a19580eb45a59907e33fd5"],["/tags/centos/index.html","8ca3290f0582cdf9b52bc593995d2e77"],["/tags/cmd/index.html","ebec9f2849d8ce8f95eb83146353f4f8"],["/tags/cors/index.html","2ec270f715a76121ad36063b53f83e9c"],["/tags/css/index.html","291505577a7021bea69a529d99b24370"],["/tags/django/index.html","bc70e4508b0f06f736814688efbf815d"],["/tags/err/index.html","b4542d3356cff44970d79dc17715b40f"],["/tags/es6/index.html","540db7214cf45e19be55438953c57b47"],["/tags/es6/page/2/index.html","c7b651d5f3e1bd191a3bc6e6ed00444d"],["/tags/git/index.html","d61d7ffaf97c9f674f15b071373a381e"],["/tags/github/index.html","0fb45754567915cc3fd8acc6bb35ecdf"],["/tags/html/index.html","8fc050afc785ff7f71c618c409b4a118"],["/tags/http/index.html","0224a93898674e90e34e2d729bbae4e7"],["/tags/hy/index.html","d57febf3408daa985b863f41ee8316ee"],["/tags/index.html","a2c5c138851378990bf0d1d0416a35e5"],["/tags/java/index.html","6fb3f23c49b62c9e206e07fa18d45342"],["/tags/jdk/index.html","6b853ec629525cc8737f7e40ab79cc17"],["/tags/jwt/index.html","b9909c1141998e3599c210f7b07c5730"],["/tags/lifecycle/index.html","e40c1de23f7b4d8b5d8bc52729a0b80e"],["/tags/mobile/index.html","c93f291183be61a7705f9107b42602da"],["/tags/model/index.html","399191ec3d8f17a8f5e3d1743d2e5adc"],["/tags/mse/index.html","535a1b54027223a4963f5cf463e7ea3a"],["/tags/mysql/index.html","4879bfd3fc5d545214607a2c65a56b91"],["/tags/network/index.html","f579ec34ae23511d3072305004a38977"],["/tags/nginx/index.html","569798e8b9f78f35a0e5721b77ea1fd2"],["/tags/node/index.html","10a3a980d7b593fdd27bbeb08b7a3090"],["/tags/npm/index.html","dfd45b24e164186db8b95005de99bd6b"],["/tags/nuxt/index.html","84e7cb8734f90dc88707adcd76f0c07f"],["/tags/proxy/index.html","0077630d5657bd75fd713fc1769ffd14"],["/tags/schedule/index.html","ac8ddc2c3d4324c9e76e136449cd5e57"],["/tags/tcp/index.html","d41f636d16fe799b0422ddef1252b469"],["/tags/typescript/index.html","055a33919c7c130d804db04a09747976"],["/tags/video/index.html","b03336c79a7ee1b7edc05a54afdd1126"],["/tags/vue/index.html","80d67e34d7ab33a1e4ff8a9db272035d"],["/tags/webpack/index.html","4363d231aca4ff9daf2fda4c1bbaef99"],["/tags/ws/index.html","d4cb467054c4271ced8393a320bd53ba"],["/tags/xhr/index.html","eee63299c5e2a7d466b2ca9f41849ae0"],["/video/index.html","7fffc9c66966ea8002960b8219b675e9"],["/web_page/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/web_page/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/web_page/knav.js","7d863b99144e1651521d6bbc48b7f1b8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.webq.top"});



