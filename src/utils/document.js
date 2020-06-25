import React from 'react';

import { AMPLITUDE_API_KEY, IS_PRODUCTION, PENDO_API_KEY, SITE_ROOT } from './settings';

function resolveMeta(defaultMeta = {}, meta = {}) {
  return {
    ...defaultMeta,
    ...meta,
    twitter: Object.assign({}, defaultMeta.twitter, meta.twitter),
    jld: Object.assign({}, defaultMeta.jld, meta.jld),
  };
}

export function Document({ Html, Head, Body, children, state }) {
  const { routeInfo, siteData = {} } = state;

  const { integrations = {}, info = {} } = siteData;
  const { intercom, hubspot, googleTagManager } = integrations || {};
  const { pagination = {}, meta: routeMeta, path } = (routeInfo && routeInfo.data) || {};

  const meta = resolveMeta(siteData.meta, routeMeta);
  const { jld } = meta;

  const companyInfo = JSON.stringify({
    '@context': 'http://schema.org/',
    '@type': 'Corporation',
    address: {
      '@type': 'PostalAddress',
      ...info.address,
    },
    email: info.email,
  });

  let robots = 'noindex, nofollow';
  if (IS_PRODUCTION) {
    robots = meta.robots || 'index, follow';
  }

  const __SL = {
    NODE_ENV: process.env.NODE_ENV,
    RELEASE_STAGE: process.env.RELEASE_STAGE,
  };

  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content={robots} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:site_name" content="stoplight.io" />
        <meta property="og:image" content={SITE_ROOT + meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitter.username} />
        <meta name="twitter:creator" content={meta.twitter.username} />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:description" content={meta.twitter.description || meta.description} />
        <meta name="twitter:image" content={SITE_ROOT + meta.twitter.image} />
        <link rel="shortcut icon" href={meta.favicon} type="image/x-icon" />
        {meta.canonical && <link rel="canonical" href={meta.canonical} />}
        {PENDO_API_KEY != null && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(apiKey){
              (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
              v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
                  o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
                  y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
                  z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

              pendo.initialize({
                visitor: {},
                account: {}
              });
          })('${PENDO_API_KEY}')`,
            }}
          />
        )}

        {AMPLITUDE_API_KEY && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
              ;r.type="text/javascript"
              ;r.integrity="sha384-RsEu4WZflrqYcEacpfoGSib3qaSvdYwT4D+DrWqeBuDarSzjwUQR1jO8gDiXZd0E"
              ;r.crossOrigin="anonymous";r.async=true
              ;r.src="https://cdn.amplitude.com/libs/amplitude-6.2.0-min.gz.js"
              ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
              console.log("[Amplitude] Error: could not load SDK")}}
              ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
              ;function s(e,t){e.prototype[t]=function(){
              this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
              var o=function(){this._q=[];return this}
              ;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
              ;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
              ;return this}
              ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
              ;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
              ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
              ;function v(e){function t(t){e[t]=function(){
              e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
              for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
              e=(!e||e.length===0?"$default_instance":e).toLowerCase()
              ;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
              ;e.amplitude=n})(window,document);

              amplitude.getInstance().init("${AMPLITUDE_API_KEY}", null, {
                  saveEvents: true,
                  includeUtm: true,
                  includeReferrer: true
              })`,
            }}
          />
        )}

        {!IS_PRODUCTION && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.CMS_MANUAL_INIT = true;`,
            }}
          />
        )}
        {IS_PRODUCTION && googleTagManager && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManager}');`,
            }}
          />
        )}
        {IS_PRODUCTION && <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />}
        {IS_PRODUCTION && intercom && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                window.intercomSettings = {
                  app_id: "${intercom}"
                };
                (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${intercom}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`,
            }}
          />
        )}
        {pagination.currentPage && pagination.currentPage !== 1 && (
          <link
            rel="prev"
            href={`${SITE_ROOT}${path}/${pagination.currentPage === 2 ? '' : `page/${pagination.currentPage - 1}/`}`}
          />
        )}
        {pagination.currentPage && pagination.currentPage !== pagination.totalPages && (
          <link rel="next" href={`${SITE_ROOT}${path}/page/${pagination.currentPage + 1}/`} />
        )}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          console.log("Interested in working for Stoplight? Check out our jobs listing: https://stoplight.io/careers");
          window.__SL = ${JSON.stringify(__SL)};
          `,
          }}
        />
        <script src="https://kit.fontawesome.com/eb61f169e7.js" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:ital,wght@0,400;0,600;0,700;0,800;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Body className="font-sans">
        {IS_PRODUCTION && googleTagManager && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManager}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}

        {IS_PRODUCTION && hubspot && (
          <script type="text/javascript" id="hs-script-loader" async defer src={`//js.hs-scripts.com/${hubspot}.js`} />
        )}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: companyInfo }} />

        {jld.breadCrumbs && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: meta.jld.breadCrumbs }} />
        )}

        {jld.article && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: meta.jld.article }} />}
      </Body>
    </Html>
  );
}
