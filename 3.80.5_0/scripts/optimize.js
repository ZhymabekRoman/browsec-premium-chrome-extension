// TODO айдишники твою мать!

// Copyright 2012 Google Inc. All rights reserved.
( function() {
  let data = self.optyaData;


  /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  let ca; let ea = function( a ) {
    let b = 0;
    return function() {
      return b < a.length
        ? {
            'done': !1,
            'value': a[ b++ ]
          }
        : {
            'done': !0
          };
    };
  };
  let fa = function( a ) {
    let b = typeof Symbol !== 'undefined' && Symbol.iterator && a[ Symbol.iterator ];
    if( b ) return b.call( a );
    if( typeof a.length === 'number' ) {
      return {
        'next': ea( a )
      };
    }
    throw Error( String( a ) + ' is not an iterable or ArrayLike' );
  };
  let ia = typeof Object.create === 'function'
    ? Object.create
    : function( a ) {
      let b = function() {};
      b.prototype = a;
      return new b();
    };
  let ja;
  if( typeof Object.setPrototypeOf === 'function' ) ja = Object.setPrototypeOf;
  else {
    let ka;
    a: {
      let la = {
        'a': !0
      };
      let ma = {};
      try {
        ma.__proto__ = la;
        ka = ma.a;
        break a;
      }
      catch ( a ) {}
      ka = !1;
    }
    ja = ka
      ? function( a, b ) {
        a.__proto__ = b;
        if( a.__proto__ !== b ) throw new TypeError( a + ' is not extensible' );
        return a;
      }
      : null;
  }
  let na = ja;
  let oa = function( a, b ) {
    a.prototype = ia( b.prototype );
    a.prototype.constructor = a;
    if( na ) na( a, b );
    else {
      for( let c in b ) {
        if( c != 'prototype' ) {
          if( Object.defineProperties ) {
            let d = Object.getOwnPropertyDescriptor( b, c );
            d && Object.defineProperty( a, c, d );
          }
          else a[ c ] = b[ c ];
        }
      }
    }
    a.sm = b.prototype;
  };
  let pa = this || self;
  let qa = function( a ) {
    return a;
  };
  let ra = function() {};
  let sa = function( a ) {
    return typeof a === 'function';
  };
  let h = function( a ) {
    return typeof a === 'string';
  };
  let ta = function( a ) {
    return typeof a === 'number' && !isNaN( a );
  };
  let ua = Array.isArray;
  let va = function( a, b ) {
    if( a && ua( a ) ) {
      for( let c = 0; c < a.length; c++ ) { if( a[ c ] && b( a[ c ] ) ) return a[ c ]; }
    }
  };
  let xa = function( a, b ) {
    if( !ta( a ) || !ta( b ) || a > b ) a = 0, b = 2147483647;
    return Math.floor( Math.random() * ( b - a + 1 ) + a );
  };
  let za = function( a, b ) {
    for( var c = new ya(), d = 0; d < a.length; d++ ) c.set( a[ d ], !0 );
    for( let e = 0; e < b.length; e++ ) { if( c.get( b[ e ] ) ) return !0; }
    return !1;
  };
  let k = function( a,
    b ) {
    for( let c in a ) Object.prototype.hasOwnProperty.call( a, c ) && b( c, a[ c ] );
  };
  let Aa = function( a ) {
    return !!a && ( Object.prototype.toString.call( a ) === '[object Arguments]' || Object.prototype.hasOwnProperty.call( a, 'callee' ) );
  };
  let Ba = function( a ) {
    return Math.round( Number( a ) ) || 0;
  };
  let Da = function( a ) {
    return String( a ).toLowerCase() === 'false' ? !1 : !!a;
  };
  let Ea = function( a ) {
    let b = [];
    if( ua( a ) ) { for( let c = 0; c < a.length; c++ ) b.push( String( a[ c ] ) ); }
    return b;
  };
  let Fa = function( a ) {
    return a ? a.replace( /^\s+|\s+$/g, '' ) : '';
  };
  let Ga = function() {
    return new Date( Date.now() );
  };
  let Ha = function() {
    return Ga().getTime();
  };
  var ya = function() {
    this.prefix = 'gtm.';
    this.values = {};
  };
  ya.prototype.set = function( a, b ) {
    this.values[ this.prefix + a ] = b;
  };
  ya.prototype.get = function( a ) {
    return this.values[ this.prefix + a ];
  };
  let Ia = function( a, b, c ) {
    return a && a.hasOwnProperty( b ) ? a[ b ] : c;
  };
  let Ja = function( a ) {
    let b = a;
    return function() {
      if( b ) {
        let c = b;
        b = void 0;
        try {
          c();
        }
        catch ( d ) {}
      }
    };
  };
  let Ka = function( a, b ) {
    for( let c in b ) b.hasOwnProperty( c ) && ( a[ c ] = b[ c ] );
  };
  let La = function( a ) {
    for( let b in a ) { if( a.hasOwnProperty( b ) ) return !0; }
    return !1;
  };
  let Ma = function( a, b ) {
    for( var c = [], d = 0; d < a.length; d++ ) c.push( a[ d ] ), c.push.apply( c, b[ a[ d ] ] || [] );
    return c;
  };
  let Na = function( a, b ) {
    for( var c = {}, d = c, e = a.split( '.' ), f = 0; f < e.length - 1; f++ ) d = d[ e[ f ] ] = {};
    d[ e[ e.length - 1 ] ] = b;
    return c;
  };
  let Oa = /^\w{1,9}$/;
  let Pa = function( a, b ) {
    a = a || {};
    b = b || ',';
    let c = [];
    k( a, function( d, e ) {
      Oa.test( d ) && e && c.push( d );
    });
    return c.join( b );
  };
  let Ra = function( a, b ) {
    function c() {
      ++d === b && ( e(), e = null, c.done = !0 );
    }
    var d = 0;
    var e = a;
    c.done = !1;
    return c;
  };

  function Sa() {
    for( var a = Ta, b = {}, c = 0; c < a.length; ++c ) b[ a[ c ] ] = c;
    return b;
  }

  function Ua() {
    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    a += a.toLowerCase() + '0123456789-_';
    return a + '.';
  }
  let Ta, Va;

  function Wa( a ) {
    Ta = Ta || Ua();
    Va = Va || Sa();
    for( var b = [], c = 0; c < a.length; c += 3 ) {
      let d = c + 1 < a.length;
      let e = c + 2 < a.length;
      let f = a.charCodeAt( c );
      let g = d ? a.charCodeAt( c + 1 ) : 0;
      let l = e ? a.charCodeAt( c + 2 ) : 0;
      let m = f >> 2;
      let n = ( f & 3 ) << 4 | g >> 4;
      let p = ( g & 15 ) << 2 | l >> 6;
      let q = l & 63;
      e || ( q = 64, d || ( p = 64 ) );
      b.push( Ta[ m ], Ta[ n ], Ta[ p ], Ta[ q ] );
    }
    return b.join( '' );
  }

  function Xa( a ) {
    function b( m ) {
      for( ; d < a.length; ) {
        let n = a.charAt( d++ );
        let p = Va[ n ];
        if( p != null ) return p;
        if( !/^[\s\xa0]*$/.test( n ) ) throw Error( 'Unknown base64 encoding at char: ' + n );
      }
      return m;
    }
    Ta = Ta || Ua();
    Va = Va || Sa();
    for( var c = '', d = 0; ; ) {
      let e = b( -1 );
      let f = b( 0 );
      let g = b( 64 );
      let l = b( 64 );
      if( l === 64 && e === -1 ) return c;
      c += String.fromCharCode( e << 2 | f >> 4 );
      g != 64 && ( c += String.fromCharCode( f << 4 & 240 | g >> 2 ), l != 64 && ( c += String.fromCharCode( g << 6 & 192 | l ) ) );
    }
  };
  let Za = {};
  let $a = function( a, b ) {
    Za[ a ] = Za[ a ] || [];
    Za[ a ][ b ] = !0;
  };
  let ab = function() {
    delete Za.GA4_EVENT;
  };
  let bb = function( a ) {
    let b = Za[ a ];
    if( !b || b.length === 0 ) return '';
    for( var c = [], d = 0, e = 0; e < b.length; e++ ) e % 8 === 0 && e > 0 && ( c.push( String.fromCharCode( d ) ), d = 0 ), b[ e ] && ( d |= 1 << e % 8 );
    d > 0 && c.push( String.fromCharCode( d ) );
    return Wa( c.join( '' ) ).replace( /\.+$/, '' );
  };
  let cb = Array.prototype.indexOf
    ? function( a, b ) {
      return Array.prototype.indexOf.call( a, b, void 0 );
    }
    : function( a, b ) {
      if( typeof a === 'string' ) return typeof b !== 'string' || b.length != 1 ? -1 : a.indexOf( b, 0 );
      for( let c = 0; c < a.length; c++ ) { if( c in a && a[ c ] === b ) return c; }
      return -1;
    };
  let db; let eb = function() {
    if( void 0 === db ) {
      let a = null;
      let b = pa.trustedTypes;
      if( b && b.createPolicy ) {
        try {
          a = b.createPolicy( 'goog#html', {
            'createHTML': qa,
            'createScript': qa,
            'createScriptURL': qa
          });
        }
        catch ( c ) {
          pa.console && pa.console.error( c.message );
        }
        db = a;
      }
      else db = a;
    }
    return db;
  };
  let fb = function( a ) {
    this.h = a;
  };
  fb.prototype.toString = function() {
    return this.h + '';
  };
  let gb = {};
  let hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  let ib, jb;
  a: {
    for( var kb = [ 'CLOSURE_FLAGS' ], lb = pa, mb = 0; mb < kb.length; mb++ ) {
      if( lb = lb[ kb[ mb ] ], lb == null ) {
        jb = null;
        break a;
      }
    } jb = lb;
  }
  let nb = jb && jb[ 610401301 ];
  ib = nb != null ? nb : !1;

  function ob() {
    let a = pa.navigator;
    if( a ) {
      let b = a.userAgent;
      if( b ) return b;
    }
    return '';
  }
  let pb; let qb = pa.navigator;
  pb = qb ? qb.userAgentData || null : null;

  function rb( a ) {
    return ib
      ? pb
        ? pb.brands.some( function( b ) {
          let c = b.brand;
          return c && c.indexOf( a ) != -1;
        })
        : !1
      : !1;
  }

  function sb( a ) {
    return ob().indexOf( a ) != -1;
  };

  function tb() {
    return ib ? !!pb && pb.brands.length > 0 : !1;
  }

  function ub() {
    return tb() ? !1 : sb( 'Opera' );
  }

  function vb() {
    return sb( 'Firefox' ) || sb( 'FxiOS' );
  }

  function wb() {
    return tb() ? rb( 'Chromium' ) : ( sb( 'Chrome' ) || sb( 'CriOS' ) ) && !( tb() ? 0 : sb( 'Edge' ) ) || sb( 'Silk' );
  };
  let xb = {};
  let yb = function( a ) {
    this.h = a;
  };
  yb.prototype.toString = function() {
    return this.h.toString();
  };
  let zb = function( a ) {
    return a instanceof yb && a.constructor === yb ? a.h : 'type_error:SafeHtml';
  };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
  function Ab( a ) {
    let b = a.tagName;
    if( b === 'SCRIPT' || b === 'STYLE' ) throw Error( '' );
  };
  ( function() {
    return '';
  }).toString().indexOf( '`' );

  function Bb( a ) {
    let b = a = Cb( a );
    let c = eb();
    let d = c ? c.createHTML( b ) : b;
    return new yb( d, xb );
  }

  function Cb( a ) {
    return a === null ? 'null' : void 0 === a ? 'undefined' : a;
  };
  let z = window;
  let C = document;
  let Db = navigator;
  let Eb = 'https://www.googleoptimize.com/optimize.js?id=' + self.optyaId; // C.currentScript && C.currentScript.src;
  let Fb = function( a, b ) {
    let c = z[ a ];
    z[ a ] = void 0 === c ? b : c;
    return z[ a ];
  };
  let Gb = function( a, b ) {
    b && ( a.addEventListener
      ? a.onload = b
      : a.onreadystatechange = function() {
        a.readyState in {
          'loaded': 1,
          'complete': 1
        } && ( a.onreadystatechange = null, b() );
      });
  };
  let Hb = {
    'async': 1,
    'nonce': 1,
    'onerror': 1,
    'onload': 1,
    'src': 1,
    'type': 1
  };
  let Ib = {
    'onload': 1,
    'src': 1,
    'width': 1,
    'height': 1,
    'style': 1
  };

  function Jb( a, b, c ) {
    b && k( b, function( d, e ) {
      d = d.toLowerCase();
      c.hasOwnProperty( d ) || a.setAttribute( d, e );
    });
  }
  let Kb = function( a, b, c, d, e ) {
    let f = C.createElement( 'script' );
    Jb( f, d, Hb );
    f.type = 'text/javascript';
    f.async = !0;
    let g; let l = Cb( a );
    let m = eb();
    let n = m ? m.createScriptURL( l ) : l;
    g = new fb( n, gb );
    f.src = g instanceof fb && g.constructor === fb ? g.h : 'type_error:TrustedResourceUrl';
    let p; let q; let r; let t = ( r = ( q = ( f.ownerDocument && f.ownerDocument.defaultView || window ).document ).querySelector ) == null ? void 0 : r.call( q, 'script[nonce]' );
    ( p = t ? t.nonce || t.getAttribute( 'nonce' ) || '' : '' ) && f.setAttribute( 'nonce', p );
    Gb( f, b );
    c && ( f.onerror = c );
    if( e ) e.appendChild( f );
    else {
      let u = C.getElementsByTagName( 'script' )[ 0 ] || C.body || C.head;
      u.parentNode.insertBefore( f, u );
    }
    return f;
  };
  let Lb = function() {
    if( Eb ) {
      let a = Eb.toLowerCase();
      if( a.indexOf( 'https://' ) === 0 ) return 2;
      if( a.indexOf( 'http://' ) === 0 ) return 3;
    }
    return 1;
  };
  let Nb = function( a, b, c, d, e ) {
    let f;
    f = void 0 === f ? !0 : f;
    let g = e;
    let l = !1;
    g || ( g = C.createElement( 'iframe' ), l = !0 );
    Jb( g, c, Ib );
    d && k( d, function( n, p ) {
      g.dataset[ n ] = p;
    });
    f && ( g.height = '0', g.width = '0', g.style.display = 'none', g.style.visibility = 'hidden' );
    if( l ) {
      let m = C.body && C.body.lastChild || C.body
                    || C.head;
      m.parentNode.insertBefore( g, m );
    }
    Gb( g, b );
    void 0 !== a && ( g.src = a );
    return g;
  };
  let Ob = function( a, b, c, d ) {
    let e = new Image( 1, 1 );
    Jb( e, d, {});
    e.onload = function() {
      e.onload = null;
      b && b();
    };
    e.onerror = function() {
      e.onerror = null;
      c && c();
    };
    e.src = a;
  };
  let Pb = function( a, b, c, d ) {
    a.addEventListener ? a.addEventListener( b, c, !!d ) : a.attachEvent && a.attachEvent( 'on' + b, c );
  };
  let Qb = function( a, b, c ) {
    a.removeEventListener ? a.removeEventListener( b, c, !1 ) : a.detachEvent && a.detachEvent( 'on' + b, c );
  };
  let E = function( a ) {
    z.setTimeout( a, 0 );
  };
  let Rb = function( a, b ) {
    return a
                && b && a.attributes && a.attributes[ b ]
      ? a.attributes[ b ].value
      : null;
  };
  let Sb = function( a ) {
    let b = a.innerText || a.textContent || '';
    b && b != ' ' && ( b = b.replace( /^[\s\xa0]+|[\s\xa0]+$/g, '' ) );
    b && ( b = b.replace( /(\xa0+|\s{2,}|\n|\r\t)/g, ' ' ) );
    return b;
  };
  let Tb = function( a ) {
    let b = C.createElement( 'div' );
    let c = b;
    let d = Bb( 'A<div>' + a + '</div>' );
    c.nodeType === 1 && Ab( c );
    c.innerHTML = zb( d );
    b = b.lastChild;
    for( var e = []; b.firstChild; ) e.push( b.removeChild( b.firstChild ) );
    return e;
  };
  let Ub = function( a, b, c ) {
    c = c || 100;
    for( var d = {}, e = 0; e < b.length; e++ ) d[ b[ e ] ] = !0;
    for( let f =
                    a, g = 0; f && g <= c; g++ ) {
      if( d[ String( f.tagName ).toLowerCase() ] ) return f;
      f = f.parentElement;
    }
    return null;
  };
  let Vb = function( a ) {
    let b;
    try {
      b = Db.sendBeacon && Db.sendBeacon( a );
    }
    catch ( c ) {
      $a( 'TAGGING', 15 );
    }
    b || Ob( a );
  };
  let Wb = function( a, b ) {
    let c = a[ b ];
    c && typeof c.animVal === 'string' && ( c = c.animVal );
    return c;
  };
  let Xb = function( a ) {
    let b = {
      'headers': {
        'Attribution-Reporting-Eligible': 'trigger'
      },
      'keepalive': !0,
      'attributionReporting': {
        'eventSourceEligible': !0,
        'triggerEligible': !0
      }
    };
    try {
      z.fetch( a, b );
    }
    catch ( c ) {}
  };
  let Yb = function() {
    let a = z.performance;
    if( a && sa( a.now ) ) return a.now();
  };
  let Zb = function() {
    return z.performance || void 0;
  };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  let $b = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/;
  let ac = function( a ) {
    if( a == null ) return String( a );
    let b = $b.exec( Object.prototype.toString.call( Object( a ) ) );
    return b ? b[ 1 ].toLowerCase() : 'object';
  };
  let bc = function( a, b ) {
    return Object.prototype.hasOwnProperty.call( Object( a ), b );
  };
  let G = function( a ) {
    if( !a || ac( a ) != 'object' || a.nodeType || a == a.window ) return !1;
    try {
      if( a.constructor && !bc( a, 'constructor' ) && !bc( a.constructor.prototype, 'isPrototypeOf' ) ) return !1;
    }
    catch ( c ) {
      return !1;
    }
    for( var b in a );
    return void 0 ===
                b || bc( a, b );
  };
  let J = function( a, b ) {
    let c = b || ( ac( a ) == 'array' ? [] : {});
    let d;
    for( d in a ) {
      if( bc( a, d ) ) {
        let e = a[ d ];
        ac( e ) == 'array' ? ( ac( c[ d ] ) != 'array' && ( c[ d ] = [] ), c[ d ] = J( e, c[ d ] ) ) : G( e ) ? ( G( c[ d ] ) || ( c[ d ] = {}), c[ d ] = J( e, c[ d ] ) ) : c[ d ] = e;
      }
    } return c;
  };
  let cc = function( a ) {
    if( void 0 === a || ua( a ) || G( a ) ) return !0;
    switch( typeof a ) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'function':
        return !0;
    }
    return !1;
  };

  function dc( a ) {
    switch( a ) {
      case 1:
        return '1';
      case 2:
      case 4:
        return '0';
      default:
        return '-';
    }
  }

  function ec( a ) {
    switch( a ) {
      case 1:
        return 'G';
      case 3:
        return 'g';
      case 2:
        return 'D';
      case 4:
        return 'd';
      case 0:
        return 'g';
      default:
        return 'g';
    }
  }

  function fc( a, b ) {
    let c = a[ 1 ] || 0;
    let d = a[ 2 ] || 0;
    switch( b ) {
      case 0:
        return 'G1' + dc( c ) + dc( d );
      case 1:
        return 'G2' + ec( c ) + ec( d );
      default:
        return 'g1--';
    }
  };
  let gc = ( function() {
    let a = function( b ) {
      return {
        'toString': function() {
          return b;
        }
      };
    };
    return {
      'Mi': a( 'consent' ),
      'Hg': a( 'convert_case_to' ),
      'Ig': a( 'convert_false_to' ),
      'Jg': a( 'convert_null_to' ),
      'Kg': a( 'convert_true_to' ),
      'Lg': a( 'convert_undefined_to' ),
      'Pl': a( 'debug_mode_metadata' ),
      'Ab': a( 'function' ),
      'Mf': a( 'instance_name' ),
      'Oj': a( 'live_only' ),
      'Pj': a( 'malware_disabled' ),
      'Qj': a( 'metadata' ),
      'Tj': a( 'original_activity_id' ),
      'Xl': a( 'original_vendor_template_id' ),
      'Wl': a( 'once_on_load' ),
      'Sj': a( 'once_per_event' ),
      'Nh': a( 'once_per_load' ),
      'bm': a( 'priority_override' ),
      'dm': a( 'respected_consent_types' ),
      'Rh': a( 'setup_tags' ),
      'xd': a( 'tag_id' ),
      'Wh': a( 'teardown_tags' )
    };
  }() );
  let Dc;
  let Ec = [];
  let Fc = [];
  let Gc = [];
  let Hc = [];
  let Ic = [];
  let Jc = {};
  let Kc; let Lc; let Nc = function() {
    let a = Mc;
    Lc = Lc || a;
  };
  let Pc = function() {
    for( var a = data.resource || {}, b = a.macros || [], c = 0; c < b.length; c++ ) Ec.push( b[ c ] );
    for( let d = a.tags || [], e = 0; e < d.length; e++ ) Hc.push( d[ e ] );
    for( let f = a.predicates || [], g = 0; g < f.length; g++ ) Gc.push( f[ g ] );
    for( let l = a.rules || [], m = 0; m < l.length; m++ ) {
      for( var n = l[ m ], p = {}, q = 0; q < n.length; q++ ) {
        let r = n[ q ][ 0 ];
        p[ r ] = Array.prototype.slice.call( n[ q ], 1 );
        r !== 'if' && r !== 'unless' || Oc( p[ r ] );
      }
      Fc.push( p );
    }
  };
  var Oc = function( a ) {};
  let Qc; let Rc = [];
  let Sc = function( a, b ) {
    let c = a.function;
    let d = b && b.event;
    if( !c ) throw Error( 'Error: No function name given for function call.' );
    let e = Jc[ c ];
    let f = b && b.type === 2 && d.yi && e && Rc.indexOf( c ) !== -1;
    let g = {};
    let l = {};
    let m;
    for( m in a ) {
      a.hasOwnProperty( m ) && m.indexOf( 'vtp_' ) === 0 && ( e && d && d.bi && d.bi( a[ m ] ),
      e && ( g[ m ] = a[ m ] ), !e || f ) && ( l[ m.substr( 4 ) ] = a[ m ] );
    }
    e && d && d.ai && ( g.vtp_gtmCachedValues = d.ai );
    if( b ) {
      if( b.name == null ) {
        let n;
        a: {
          let p = b.index;
          if( p == null ) n = '';
          else {
            let q;
            switch( b.type ) {
              case 2:
                q = Ec[ p ];
                break;
              case 1:
                q = Hc[ p ];
                break;
              default:
                n = '';
                break a;
            }
            let r = q && q[ gc.Mf ];
            n = r ? String( r ) : '';
          }
        }
        b.name = n;
      }
      e && ( g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name );
    }
    let t, u;
    e && ( t = e( g ) );
    if( !e || f ) u = Dc( c, l, b );
    f && t !== u && d && d.yi( d.id, c );
    return e ? t : u;
  };
  let Uc = function( a, b, c ) {
    c = c || [];
    let d = {};
    let e;
    for( e in a ) {
      a.hasOwnProperty( e ) && ( d[ e ] = Tc( a[ e ],
        b, c ) );
    }
    return d;
  };
  var Tc = function( a, b, c ) {
    if( ua( a ) ) {
      let d;
      switch( a[ 0 ] ) {
        case 'function_id':
          return a[ 1 ];
        case 'list':
          d = [];
          for( let e = 1; e < a.length; e++ ) d.push( Tc( a[ e ], b, c ) );
          return d;
        case 'macro':
          var f = a[ 1 ];
          if( c[ f ] ) return;
          var g = Ec[ f ];
          if( !g || b.cg( g ) ) return;
          c[ f ] = !0;
          var l = String( g[ gc.Mf ] );
          try {
            let m = Uc( g, b, c );
            m.vtp_gtmEventId = b.id;
            b.priorityId && ( m.vtp_gtmPriorityId = b.priorityId );
            d = Sc( m, {
              'event': b,
              'index': f,
              'type': 2,
              'name': l
            });
            Qc && ( d = Qc.ik( d, m ) );
          }
          catch ( y ) {
            b.ni && b.ni( y, Number( f ), l ), d = !1;
          }
          c[ f ] = !1;
          return d;
        case 'map':
          d = {};
          for( let n =
                                1; n < a.length; n += 2 ) d[ Tc( a[ n ], b, c ) ] = Tc( a[ n + 1 ], b, c );
          return d;
        case 'template':
          d = [];
          for( var p = !1, q = 1; q < a.length; q++ ) {
            let r = Tc( a[ q ], b, c );
            Lc && ( p = p || r === Lc.Ee );
            d.push( r );
          }
          return Lc && p ? Lc.jk( d ) : d.join( '' );
        case 'escape':
          d = Tc( a[ 1 ], b, c );
          if( Lc && ua( a[ 1 ] ) && a[ 1 ][ 0 ] === 'macro' && Lc.Mk( a ) ) return Lc.ol( d );
          d = String( d );
          for( let t = 2; t < a.length; t++ ) hc[ a[ t ] ] && ( d = hc[ a[ t ] ]( d ) );
          return d;
        case 'tag':
          var u = a[ 1 ];
          if( !Hc[ u ] ) throw Error( 'Unable to resolve tag reference ' + u + '.' );
          return d = {
            'hi': a[ 2 ],
            'index': u
          };
        case 'zb':
          var v = {
            'arg0': a[ 2 ],
            'arg1': a[ 3 ],
            'ignore_case': a[ 5 ]
          };
          v.function = a[ 1 ];
          var w = Vc( v, b, c );
          var x = !!a[ 4 ];
          return x || w !== 2 ? x !== ( w === 1 ) : null;
        default:
          throw Error( 'Attempting to expand unknown Value type: ' + a[ 0 ] + '.' );
      }
    }
    return a;
  };
  var Vc = function( a, b, c ) {
    try {
      return Kc( Uc( a, b, c ) );
    }
    catch ( d ) {
      JSON.stringify( a );
    }
    return 2;
  };
  let Yc = function( a ) {
    function b( r ) {
      for( let t = 0; t < r.length; t++ ) d[ r[ t ] ] = !0;
    }
    for( var c = [], d = [], e = Wc( a ), f = 0; f < Fc.length; f++ ) {
      let g = Fc[ f ];
      let l = Xc( g, e );
      if( l ) {
        for( let m = g.add || [], n = 0; n < m.length; n++ ) c[ m[ n ] ] = !0;
        b( g.block || [] );
      }
      else l === null && b( g.block || [] );
    }
    for( var p = [], q = 0; q < Hc.length; q++ ) c[ q ] && !d[ q ] && ( p[ q ] = !0 );
    return p;
  };
  var Xc = function( a, b ) {
    for( let c = a.if || [], d = 0; d < c.length; d++ ) {
      let e = b( c[ d ] );
      if( e === 0 ) return !1;
      if( e === 2 ) return null;
    }
    for( let f =
                    a.unless || [], g = 0; g < f.length; g++ ) {
      let l = b( f[ g ] );
      if( l === 2 ) return null;
      if( l === 1 ) return !1;
    }
    return !0;
  };
  var Wc = function( a ) {
    let b = [];
    return function( c ) {
      void 0 === b[ c ] && ( b[ c ] = Vc( Gc[ c ], a ) );
      return b[ c ];
    };
  };
  let Zc = {
    'ik': function( a, b ) {
      b[ gc.Hg ] && typeof a === 'string' && ( a = b[ gc.Hg ] == 1 ? a.toLowerCase() : a.toUpperCase() );
      b.hasOwnProperty( gc.Jg ) && a === null && ( a = b[ gc.Jg ] );
      b.hasOwnProperty( gc.Lg ) && void 0 === a && ( a = b[ gc.Lg ] );
      b.hasOwnProperty( gc.Kg ) && !0 === a && ( a = b[ gc.Kg ] );
      b.hasOwnProperty( gc.Ig ) && !1 === a && ( a = b[ gc.Ig ] );
      return a;
    }
  };
  let md = [ 'matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector' ];
  let nd = new ya();
  let ud = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

  function vd( a, b ) {
    return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[ a << 2 | b ];
  };
  let xd = function( a ) {
    return wd ? C.querySelectorAll( a ) : null;
  };
  let yd = function( a, b ) {
    if( !wd ) return null;
    if( Element.prototype.closest ) {
      try {
        return a.closest( b );
      }
      catch ( e ) {
        return null;
      }
    }
    let c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
    let d = a;
    if( !C.documentElement.contains( d ) ) return null;
    do {
      try {
        if( c.call( d, b ) ) return d;
      }
      catch ( e ) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while( d !== null && d.nodeType === 1 );
    return null;
  };
  let zd = !1;
  if( C.querySelectorAll ) {
    try {
      let Ad = C.querySelectorAll( ':root' );
      Ad && Ad.length == 1 && Ad[ 0 ] == C.documentElement && ( zd = !0 );
    }
    catch ( a ) {}
  }
  var wd = zd;
  let K = function( a ) {
    $a( 'GTM', a );
  };
  let N = {
    'g': {
      'Yd': 'ad_personalization',
      'D': 'ad_storage',
      'Zd': 'ad_user_data',
      'K': 'analytics_storage',
      'Wb': 'region',
      'ae': 'consent_updated',
      'Dg': 'wait_for_update',
      'Qi': 'ads',
      'Ol': 'all',
      'Ri': 'play',
      'Si': 'search',
      'Ti': 'youtube',
      'Ui': 'app_remove',
      'Vi': 'app_store_refund',
      'Wi': 'app_store_subscription_cancel',
      'Xi': 'app_store_subscription_convert',
      'Yi': 'app_store_subscription_renew',
      'Mg': 'add_payment_info',
      'Ng': 'add_shipping_info',
      'Xb': 'add_to_cart',
      'Yb': 'remove_from_cart',
      'Og': 'view_cart',
      'Db': 'begin_checkout',
      'Zb': 'select_item',
      'Ua': 'view_item_list',
      'pb': 'select_promotion',
      'Va': 'view_promotion',
      'ra': 'purchase',
      'ac': 'refund',
      'Da': 'view_item',
      'Pg': 'add_to_wishlist',
      'Zi': 'exception',
      'aj': 'first_open',
      'bj': 'first_visit',
      'ia': 'gtag.config',
      'Ea': 'gtag.get',
      'cj': 'in_app_purchase',
      'bc': 'page_view',
      'dj': 'screen_view',
      'ej': 'session_start',
      'fj': 'timing_complete',
      'gj': 'track_social',
      'ce': 'user_engagement',
      'qb': 'gclid',
      'ja': 'ads_data_redaction',
      'X': 'allow_ad_personalization_signals',
      'de': 'allow_custom_scripts',
      'pf': 'allow_display_features',
      'ee': 'allow_enhanced_conversions',
      'rb': 'allow_google_signals',
      'za': 'allow_interest_groups',
      'ij': 'app_id',
      'jj': 'app_installer_id',
      'kj': 'app_name',
      'lj': 'app_version',
      'fc': 'auid',
      'mj': 'auto_detection_enabled',
      'Eb': 'aw_remarketing',
      'qf': 'aw_remarketing_only',
      'fe': 'discount',
      'he': 'aw_feed_country',
      'ie': 'aw_feed_language',
      'R': 'items',
      'je': 'aw_merchant_id',
      'Qg': 'aw_basket_type',
      'Mc': 'campaign_content',
      'Nc': 'campaign_id',
      'Oc': 'campaign_medium',
      'Pc': 'campaign_name',
      'Qc': 'campaign',
      'Rc': 'campaign_source',
      'Sc': 'campaign_term',
      'Wa': 'client_id',
      'nj': 'content_group',
      'oj': 'content_type',
      'Fa': 'conversion_cookie_prefix',
      'Tc': 'conversion_id',
      'sa': 'conversion_linker',
      'Fb': 'conversion_api',
      'Ja': 'cookie_domain',
      'Aa': 'cookie_expires',
      'Ka': 'cookie_flags',
      'hc': 'cookie_name',
      'Uc': 'cookie_path',
      'Ga': 'cookie_prefix',
      'Ya': 'cookie_update',
      'sb': 'country',
      'na': 'currency',
      'ke': 'customer_lifetime_value',
      'ic': 'custom_map',
      'Rg': 'gcldc',
      'pj': 'debug_mode',
      'T': 'developer_id',
      'qj': 'disable_merchant_reported_purchases',
      'jc': 'dc_custom_params',
      'Sg': 'dc_natural_search',
      'Tg': 'dynamic_event_settings',
      'Ug': 'affiliation',
      'me': 'checkout_option',
      'rf': 'checkout_step',
      'Vg': 'coupon',
      'Vc': 'item_list_name',
      'tf': 'list_name',
      'rj': 'promotions',
      'Wc': 'shipping',
      'uf': 'tax',
      'ne': 'engagement_time_msec',
      'Xc': 'enhanced_client_id',
      'Yc': 'enhanced_conversions',
      'Wg': 'enhanced_conversions_automatic_settings',
      'oe': 'estimated_delivery_date',
      'vf': 'euid_logged_in_state',
      'kc': 'event_callback',
      'sj': 'event_category',
      'tb': 'event_developer_id_string',
      'tj': 'event_label',
      'Xg': 'event',
      'pe': 'event_settings',
      'qe': 'event_timeout',
      'uj': 'description',
      'vj': 'fatal',
      'wj': 'experiments',
      'wf': 'firebase_id',
      'se': 'first_party_collection',
      'te': '_x_20',
      'Gb': '_x_19',
      'Yg': 'fledge',
      'Zg': 'flight_error_code',
      'ah': 'flight_error_message',
      'bh': 'fl_activity_category',
      'eh': 'fl_activity_group',
      'xf': 'fl_advertiser_id',
      'fh': 'fl_ar_dedupe',
      'gh': 'fl_random_number',
      'hh': 'tran',
      'ih': 'u',
      'ue': 'gac_gclid',
      'mc': 'gac_wbraid',
      'jh': 'gac_wbraid_multiple_conversions',
      'kh': 'ga_restrict_domain',
      'yf': 'ga_temp_client_id',
      've': 'gdpr_applies',
      'lh': 'geo_granularity',
      'Za': 'value_callback',
      'La': 'value_key',
      'Rl': 'google_ono',
      'ab': 'google_signals',
      'mh': 'google_tld',
      'we': 'groups',
      'nh': 'gsa_experiment_id',
      'oh': 'iframe_state',
      'xe': 'ignore_referrer',
      'zf': 'internal_traffic_results',
      'vb': 'is_legacy_converted',
      'wb': 'is_legacy_loaded',
      'ye': 'is_passthrough',
      'wa': 'language',
      'Af': 'legacy_developer_id_string',
      'xa': 'linker',
      'nc': 'accept_incoming',
      'xb': 'decorate_forms',
      'N': 'domains',
      'Hb': 'url_position',
      'ph': 'method',
      'xj': 'name',
      'Zc': 'new_customer',
      'qh': 'non_interaction',
      'yj': 'optimize_id',
      'zj': 'page_hostname',
      'ad': 'page_path',
      'Ba': 'page_referrer',
      'yb': 'page_title',
      'rh': 'passengers',
      'sh': 'phone_conversion_callback',
      'Aj': 'phone_conversion_country_code',
      'th': 'phone_conversion_css_class',
      'Bj': 'phone_conversion_ids',
      'uh': 'phone_conversion_number',
      'vh': 'phone_conversion_options',
      'oc': 'quantity',
      'bd': 'redact_device_info',
      'Bf': 'redact_enhanced_user_id',
      'Cj': 'redact_ga_client_id',
      'Dj': 'redact_user_id',
      'ze': 'referral_exclusion_definition',
      'Ib': 'restricted_data_processing',
      'Ej': 'retoken',
      'Fj': 'sample_rate',
      'Cf': 'screen_name',
      'zb': 'screen_resolution',
      'Gj': 'search_term',
      'Ma': 'send_page_view',
      'Jb': 'send_to',
      'Ae': 'server_container_url',
      'dd': 'session_duration',
      'Be': 'session_engaged',
      'Df': 'session_engaged_time',
      'cb': 'session_id',
      'Ce': 'session_number',
      'ed': 'delivery_postal_code',
      'wh': 'temporary_client_id',
      'Ef': 'topmost_url',
      'Hj': 'tracking_id',
      'Ff': 'traffic_type',
      'ka': 'transaction_id',
      'qc': 'transport_url',
      'xh': 'trip_type',
      'sc': 'update',
      'eb': 'url_passthrough',
      'fd': '_user_agent_architecture',
      'gd': '_user_agent_bitness',
      'hd': '_user_agent_full_version_list',
      'jd': '_user_agent_mobile',
      'kd': '_user_agent_model',
      'ld': '_user_agent_platform',
      'md': '_user_agent_platform_version',
      'nd': '_user_agent_wow64',
      'la': 'user_data',
      'yh': 'user_data_auto_latency',
      'zh': 'user_data_auto_meta',
      'Ah': 'user_data_auto_multi',
      'Bh': 'user_data_auto_selectors',
      'Ch': 'user_data_auto_status',
      'Gf': 'user_data_mode',
      'Hf': 'user_data_settings',
      'ya': 'user_id',
      'Na': 'user_properties',
      'Dh': 'us_privacy_string',
      'Z': 'value',
      'uc': 'wbraid',
      'Eh': 'wbraid_multiple_conversions',
      'Kh': '_host_name',
      'Lh': '_in_page_command',
      'Mh': '_is_passthrough_cid',
      'Ge': 'non_personalized_ads',
      'wd': '_sst_parameters',
      'Xa': 'conversion_label',
      'oa': 'page_location',
      'ub': 'global_developer_id_string',
      'De': 'tc_privacy_string'
    }
  };
  let Yd = {};
  let Zd = Object.freeze( ( Yd[ N.g.X ] = 1, Yd[ N.g.pf ] = 1, Yd[ N.g.ee ] = 1, Yd[ N.g.rb ] = 1, Yd[ N.g.R ] = 1, Yd[ N.g.Ja ] = 1, Yd[ N.g.Aa ] = 1, Yd[ N.g.Ka ] = 1, Yd[ N.g.hc ] = 1, Yd[ N.g.Uc ] = 1, Yd[ N.g.Ga ] = 1, Yd[ N.g.Ya ] = 1, Yd[ N.g.ic ] = 1, Yd[ N.g.T ] = 1, Yd[ N.g.Tg ] = 1,
  Yd[ N.g.kc ] = 1, Yd[ N.g.pe ] = 1, Yd[ N.g.qe ] = 1, Yd[ N.g.se ] = 1, Yd[ N.g.kh ] = 1, Yd[ N.g.ab ] = 1, Yd[ N.g.mh ] = 1, Yd[ N.g.we ] = 1, Yd[ N.g.zf ] = 1, Yd[ N.g.vb ] = 1, Yd[ N.g.wb ] = 1, Yd[ N.g.xa ] = 1, Yd[ N.g.Bf ] = 1, Yd[ N.g.ze ] = 1, Yd[ N.g.Ib ] = 1, Yd[ N.g.Ma ] = 1, Yd[ N.g.Jb ] = 1, Yd[ N.g.Ae ] = 1, Yd[ N.g.dd ] = 1, Yd[ N.g.Df ] = 1, Yd[ N.g.ed ] = 1, Yd[ N.g.qc ] = 1, Yd[ N.g.sc ] = 1, Yd[ N.g.Hf ] = 1, Yd[ N.g.Na ] = 1, Yd[ N.g.wd ] = 1, Yd ) );
  Object.freeze( [ N.g.oa, N.g.Ba, N.g.yb, N.g.wa, N.g.Cf, N.g.ya, N.g.wf, N.g.nj ] );
  let $d = {};
  let ae = Object.freeze( ( $d[ N.g.Ui ] = 1, $d[ N.g.Vi ] = 1, $d[ N.g.Wi ] = 1, $d[ N.g.Xi ] = 1, $d[ N.g.Yi ] = 1, $d[ N.g.aj ] = 1, $d[ N.g.bj ] = 1, $d[ N.g.cj ] = 1, $d[ N.g.ej ] = 1, $d[ N.g.ce ] = 1, $d ) );
  let be = {};
  let ce = Object.freeze( ( be[ N.g.Mg ] = 1, be[ N.g.Ng ] = 1, be[ N.g.Xb ] = 1, be[ N.g.Yb ] = 1, be[ N.g.Og ] = 1, be[ N.g.Db ] = 1, be[ N.g.Zb ] = 1, be[ N.g.Ua ] = 1, be[ N.g.pb ] = 1, be[ N.g.Va ] = 1, be[ N.g.ra ] = 1, be[ N.g.ac ] = 1, be[ N.g.Da ] = 1, be[ N.g.Pg ] = 1, be ) );
  let de = Object.freeze( [ N.g.X, N.g.rb, N.g.Ya ] );
  let ee = Object.freeze( [].concat( de ) );
  let fe = Object.freeze( [ N.g.Aa, N.g.qe, N.g.dd, N.g.Df, N.g.ne ] );
  let ge = Object.freeze( [].concat( fe ) );
  let he = {};
  let ie = ( he[ N.g.D ] = '1', he[ N.g.K ] = '2', he );
  let je = {};
  let ke = Object.freeze( ( je[ N.g.X ] = 1, je[ N.g.ee ] = 1, je[ N.g.za ] = 1, je[ N.g.Eb ] = 1, je[ N.g.qf ] = 1, je[ N.g.fe ] = 1, je[ N.g.he ] = 1, je[ N.g.ie ] = 1, je[ N.g.R ] = 1, je[ N.g.je ] = 1, je[ N.g.Fa ] = 1, je[ N.g.sa ] = 1, je[ N.g.Ja ] = 1, je[ N.g.Aa ] = 1, je[ N.g.Ka ] = 1, je[ N.g.Ga ] = 1, je[ N.g.na ] = 1, je[ N.g.ke ] = 1, je[ N.g.T ] = 1, je[ N.g.qj ] = 1, je[ N.g.Yc ] = 1, je[ N.g.oe ] = 1, je[ N.g.wf ] = 1, je[ N.g.se ] = 1, je[ N.g.vb ] = 1, je[ N.g.wb ] = 1, je[ N.g.wa ] = 1, je[ N.g.Zc ] = 1, je[ N.g.oa ] = 1, je[ N.g.Ba ] = 1, je[ N.g.sh ] = 1, je[ N.g.th ] =
            1, je[ N.g.uh ] = 1, je[ N.g.vh ] = 1, je[ N.g.Ib ] = 1, je[ N.g.Ma ] = 1, je[ N.g.Jb ] = 1, je[ N.g.Ae ] = 1, je[ N.g.ed ] = 1, je[ N.g.ka ] = 1, je[ N.g.qc ] = 1, je[ N.g.sc ] = 1, je[ N.g.eb ] = 1, je[ N.g.la ] = 1, je[ N.g.ya ] = 1, je[ N.g.Z ] = 1, je ) );
  Object.freeze( N.g );
  let me = {};
  let ne = z.google_tag_manager = z.google_tag_manager || {};
  let oe = Math.random();
  me.Nf = '36s0';
  me.vd = Number( '0' ) || 0;
  me.da = 'dataLayer';
  me.Oi = '';
  let pe = {
    '__cl': 1,
    '__ecl': 1,
    '__ehl': 1,
    '__evl': 1,
    '__fal': 1,
    '__fil': 1,
    '__fsl': 1,
    '__hl': 1,
    '__jel': 1,
    '__lcl': 1,
    '__sdl': 1,
    '__tl': 1,
    '__ytl': 1
  };
  let qe = {
    '__paused': 1,
    '__tg': 1
  };
  let re;
  for( re in pe ) pe.hasOwnProperty( re ) && ( qe[ re ] = 1 );
  let se = Da( '' );
  let te; let ue = !1;
  te = ue;
  let ve; let we = !1;
  ve = we;
  let xe; let ye = !1;
  xe = ye;
  let ze; let Ae = !1;
  Ae = !0;
  ze = Ae;
  me.be = 'www.googletagmanager.com';
  let Be = '' + me.be + ( te ? '/gtag/js' : '/gtm.js' );
  let Ce = null;
  let De = null;
  let Ee = {};
  let Fe = {};
  let Ge = {};
  let He = function() {
    let a = ne.sequence || 1;
    ne.sequence = a + 1;
    return a;
  };
  me.Ni = '';
  let Ie = '';
  me.Ke = Ie;
  let Je = new ya();
  let Ke = {};
  let Le = {};
  let Oe = {
    'name': me.da,
    'set': function( a, b ) {
      J( Na( a, b ), Ke );
      Me();
    },
    'get': function( a ) {
      return Ne( a, 2 );
    },
    'reset': function() {
      Je = new ya();
      Ke = {};
      Me();
    }
  };
  var Ne = function( a, b ) {
    return b != 2 ? Je.get( a ) : Pe( a );
  };
  var Pe = function( a ) {
    let b; let c = a.split( '.' );
    b = b || [];
    for( var d = Ke, e = 0; e < c.length; e++ ) {
      if( d === null ) return !1;
      if( void 0 === d ) break;
      d = d[ c[ e ] ];
      if( b.indexOf( d ) !== -1 ) return;
    }
    return d;
  };
  let Qe = function( a, b ) {
    Le.hasOwnProperty( a ) || ( Je.set( a, b ), J( Na( a, b ), Ke ), Me() );
  };
  var Me = function( a ) {
    k( Le, function( b, c ) {
      Je.set( b, c );
      J( Na( b ), Ke );
      J( Na( b,
        c ), Ke );
      a && delete Le[ b ];
    });
  };
  let Re = function( a, b ) {
    let c; let d = ( void 0 === b ? 2 : b ) !== 1 ? Pe( a ) : Je.get( a );
    ac( d ) === 'array' || ac( d ) === 'object' ? c = J( d ) : c = d;
    return c;
  };
  let Se = [];
  let Te = function( a ) {
    return void 0 == Se[ a ] ? !1 : Se[ a ];
  };
  let O = [];
  O[ 5 ] = !0;
  O[ 6 ] = !0;
  O[ 13 ] = !0;
  O[ 14 ] = !0;
  O[ 7 ] = !0;
  O[ 8 ] = !0;
  O[ 23 ] = !0;
  O[ 9 ] = !0;
  O[ 10 ] = !0;
  O[ 12 ] = !0;
  O[ 16 ] = !0;
  O[ 17 ] = !0;
  O[ 19 ] = !0;
  O[ 25 ] = !0;
  O[ 26 ] = !0;
  O[ 27 ] = !0;
  O[ 30 ] = !0;
  O[ 31 ] = !0;
  O[ 34 ] = !0;
  O[ 36 ] = !0;
  O[ 35 ] = !0;
  O[ 37 ] = !0;
  O[ 38 ] = !0;
  O[ 40 ] = !0;
  O[ 41 ] = !0;
  O[ 43 ] = !0;
  O[ 45 ] = !0;
  O[ 46 ] = !0;
  O[ 47 ] = !0;
  O[ 48 ] = !0;


  O[ 58 ] = !0;
  O[ 60 ] = !0;
  O[ 61 ] = !0;
  O[ 62 ] = !0;
  O[ 65 ] = !0;
  O[ 70 ] = !0;
  O[ 71 ] = !0;
  O[ 73 ] = !0;
  O[ 75 ] = !0;
  O[ 76 ] = !0;
  O[ 78 ] = !0;

  function P( a ) {
    return !!O[ a ];
  }
  let Ue = function( a ) {
    $a( 'HEALTH', a );
  };
  let Ve;
  try {
    Ve = JSON.parse( Xa( 'e30' ) );
  }
  catch ( a ) {
    K( 123 ), Ue( 2 ), Ve = {};
  }
  let We = function() {
    let a = !1;
    return a;
  };
  let Xe = function() {
    return !!Ve[ '6' ];
  };
  let Ye = function() {
    let a = '';
    return a;
  };
  let Ze = function() {
    let a = !1;
    return a;
  };
  let $e = function() {
    let a = '';
    return a;
  };
  let af; let bf = !1;
  let cf = function( a ) {
    if( !bf ) {
      bf = !0;
      af = af || {};
    }
    return af[ a ];
  };
  let df = function() {
    let a = z.screen;
    return {
      'width': a ? a.width : 0,
      'height': a ? a.height : 0
    };
  };
  let ef = function( a ) {
    if( C.hidden ) return !0;
    let b = a.getBoundingClientRect();
    if( b.top == b.bottom || b.left == b.right || !z.getComputedStyle ) return !0;
    let c = z.getComputedStyle( a, null );
    if( c.visibility === 'hidden' ) return !0;
    for( let d = a, e = c; d; ) {
      if( e.display === 'none' ) return !0;
      let f = e.opacity;
      let g = e.filter;
      if( g ) {
        let l = g.indexOf( 'opacity(' );
        l >= 0 && ( g = g.substring( l + 8, g.indexOf( ')', l ) ), g.charAt( g.length - 1 ) == '%' && ( g = g.substring( 0, g.length - 1 ) ), f = Math.min( g,
          f ) );
      }
      if( void 0 !== f && f <= 0 ) return !0;
      ( d = d.parentElement ) && ( e = z.getComputedStyle( d, null ) );
    }
    return !1;
  };
  let of = /:[0-9]+$/; let pf = /^\d+\.fls\.doubleclick\.net$/; let sf = function( a, b, c ) {
    for( let d = a.split( '&' ), e = 0; e < d.length; e++ ) {
      let f = d[ e ].split( '=' );
      if( decodeURIComponent( f[ 0 ] ).replace( /\+/g, ' ' ) === b ) {
        let g = f.slice( 1 ).join( '=' );
        return c ? g : decodeURIComponent( g ).replace( /\+/g, ' ' );
      }
    }
  }; let vf = function( a, b, c, d, e ) {
    b && ( b = String( b ).toLowerCase() );
    if( b === 'protocol' || b === 'port' ) a.protocol = tf( a.protocol ) || tf( 'https:' ); // z.location.protocol
    b === 'port'
      ? a.port = String( Number( a.hostname ? a.port : z.location.port ) || ( a.protocol === 'http'
        ? 80
        : a.protocol === 'https'
          ? 443
          : '' ) )
      : b === 'host' && ( a.hostname = ( a.hostname || 'qa.testbs.net' ).replace( of, '' ).toLowerCase() ); // z.location.hostname
    return uf( a, b, c, d, e );
  }; var uf = function( a, b, c, d, e ) {
    let f; let g = tf( a.protocol );
    b && ( b = String( b ).toLowerCase() );
    switch( b ) {
      case 'url_no_fragment':
        f = wf( a );
        break;
      case 'protocol':
        f = g;
        break;
      case 'host':
        f = a.hostname.replace( of, '' ).toLowerCase();
        if( c ) {
          let l = /^www\d*\./.exec( f );
          l && l[ 0 ] && ( f = f.substr( l[ 0 ].length ) );
        }
        break;
      case 'port':
        f = String( Number( a.port ) || ( g === 'http' ? 80 : g === 'https' ? 443 : '' ) );
        break;
      case 'path':
        a.pathname
                    || a.hostname || $a( 'TAGGING', 1 );
        f = a.pathname.substr( 0, 1 ) === '/' ? a.pathname : '/' + a.pathname;
        var m = f.split( '/' );
        ( d || [] ).indexOf( m[ m.length - 1 ] ) >= 0 && ( m[ m.length - 1 ] = '' );
        f = m.join( '/' );
        break;
      case 'query':
        f = a.search.replace( '?', '' );
        e && ( f = sf( f, e ) );
        break;
      case 'extension':
        var n = a.pathname.split( '.' );
        f = n.length > 1 ? n[ n.length - 1 ] : '';
        f = f.split( '/' )[ 0 ];
        break;
      case 'fragment':
        f = a.hash.replace( '#', '' );
        break;
      default:
        f = a && a.href;
    }
    return f;
  }; var tf = function( a ) {
    return a ? a.replace( ':', '' ).toLowerCase() : '';
  }; var wf = function( a ) {
    let b = '';
    if( a
            && a.href ) {
      let c = a.href.indexOf( '#' );
      b = c < 0 ? a.href : a.href.substr( 0, c );
    }
    return b;
  }; let xf = function( a ) {
    let b = C.createElement( 'a' );
    a && ( b.href = a );
    let c = b.pathname;
    c[ 0 ] !== '/' && ( a || $a( 'TAGGING', 1 ), c = '/' + c );
    let d = b.hostname.replace( of, '' );
    return {
      'href': b.href,
      'protocol': b.protocol,
      'host': b.host,
      'hostname': d,
      'pathname': c,
      'search': b.search,
      'hash': b.hash,
      'port': b.port
    };
  }; let yf = function( a ) {
    function b( n ) {
      let p = n.split( '=' )[ 0 ];
      return d.indexOf( p ) < 0 ? n : p + '=0';
    }

    function c( n ) {
      return n.split( '&' ).map( b ).filter( function( p ) {
        return void 0 !== p;
      }).join( '&' );
    }
    var d = 'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split( ' ' );
    let e = xf( a );
    let f = a.split( /[?#]/ )[ 0 ];
    let g = e.search;
    let l = e.hash;
    g[ 0 ] === '?' && ( g = g.substring( 1 ) );
    l[ 0 ] === '#' && ( l = l.substring( 1 ) );
    g = c( g );
    l = c( l );
    g !== '' && ( g = '?' + g );
    l !== '' && ( l = '#' + l );
    let m = '' + f + g + l;
    m[ m.length - 1 ] === '/' && ( m = m.substring( 0, m.length - 1 ) );
    return m;
  }; let zf = function( a ) {
    let b = xf( 'https://qa.testbs.net/en/' ); // z.location.href
    let c = vf( b, 'host', !1 );
    if( c && c.match( pf ) ) {
      let d = vf( b, 'path' ).split( a + '=' );
      if( d.length > 1 ) return d[ 1 ].split( ';' )[ 0 ].split( '?' )[ 0 ];
    }
  };
  let vg = new function( a, b ) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }( 1933 );
  let wg = function( a ) {
    wg[ ' ' ]( a );
    return a;
  };
  wg[ ' ' ] = function() {};
  let yg = function() {
    let a = xg;
    let b = 'Zf';
    if( a.Zf && a.hasOwnProperty( b ) ) return a.Zf;
    let c = new a();
    return a.Zf = c;
  };
  var xg = function() {
    let a = {};
    this.h = function() {
      let b = vg.h;
      let c = vg.defaultValue;
      return a[ b ] != null ? a[ b ] : c;
    };
    this.m = function() {
      a[ vg.h ] = !0;
    };
  };
  let zg = !1;
  let Ag = !1;
  let Bg = [];
  let Cg = {};
  let Dg = {};
  let Eg = {
    'ad_storage': !1,
    'ad_user_data': !1,
    'ad_personalization': !1
  };

  function Fg() {
    let a = Fb( 'google_tag_data', {});
    a.ics || ( a.ics = {
      'entries': {},
      'cps': {},
      'default': Gg,
      'update': Hg,
      'declare': Ig,
      'implicit': Jg,
      'addListener': Kg,
      'notifyListeners': Lg,
      'setCps': Mg,
      'active': !1,
      'usedDeclare': !1,
      'usedDefault': !1,
      'usedUpdate': !1,
      'usedImplicit': !1,
      'usedSetCps': !1,
      'accessedDefault': !1,
      'accessedAny': !1,
      'wasSetLate': !1
    });
    return a.ics;
  }

  function Ng( a, b, c, d ) {
    return c === '' || a === d ? !0 : a === c ? b !== d : !a && !b;
  }

  function Ig( a, b, c, d, e ) {
    let f = Fg();
    f.active = !0;
    f.usedDeclare = !0;
    let g = f.entries;
    let l = g[ a ] || {};
    let m = l.declare_region;
    let n = c && h( c ) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if( Ng( n, m, d, e ) ) {
      let p = {
        'region': l.region,
        'declare_region': n,
        'declare': b === 'granted',
        'implicit': l.implicit,
        'default': l.default,
        'update': l.update,
        'quiet': l.quiet
      };
      if( d !== '' || !1 !== l.declare ) g[ a ] = p;
    }
  }

  function Jg( a, b ) {
    let c = Fg();
    c.active = !0;
    c.usedImplicit = !0;
    let d = c.entries;
    let e = d[ a ] = d[ a ] || {};
    !1 !== e.implicit && ( e.implicit = b === 'granted' );
  }

  function Gg( a, b, c, d, e, f ) {
    let g = Fg();
    g.usedDefault || !g.accessedDefault && !g.accessedAny || ( g.wasSetLate = !0 );
    g.active = !0;
    g.usedDefault = !0;
    $a( 'TAGGING', 19 );
    if( void 0 == b ) $a( 'TAGGING', 18 );
    else {
      let l = g.entries;
      let m = l[ a ] || {};
      let n = m.region;
      let p = c && h( c ) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if( Ng( p, n, d, e ) ) {
        let q = !!( f && f > 0 && void 0 === m.update );
        let r = {
          'region': p,
          'declare_region': m.declare_region,
          'implicit': m.implicit,
          'default': b === 'granted',
          'declare': m.declare,
          'update': m.update,
          'quiet': q
        };
        if( d !== '' || !1 !== m.default ) {
          l[ a ] =
                    r;
        }
        q && z.setTimeout( function() {
          if( l[ a ] === r && r.quiet ) {
            r.quiet = !1;
            let t = [ a ];
            if( Te( 4 ) ) { for( let u in Cg ) Cg.hasOwnProperty( u ) && Cg[ u ] === a && t.push( u ); }
            for( let v = 0; v < t.length; v++ ) Og( t[ v ] );
            Lg();
            $a( 'TAGGING', 2 );
          }
        }, f );
      }
    }
  }

  function Hg( a, b ) {
    let c = Fg();
    c.usedDefault || c.usedUpdate || !c.accessedAny || ( c.wasSetLate = !0 );
    c.active = !0;
    c.usedUpdate = !0;
    if( void 0 != b ) {
      let d = Pg( c, a );
      let e = c.entries;
      let f = e[ a ] = e[ a ] || {};
      f.update = b === 'granted';
      let g = Pg( c, a );
      let l = [ a ];
      if( Te( 4 ) ) { for( let m in Cg ) Cg.hasOwnProperty( m ) && Cg[ m ] === a && l.push( m ); }
      if( f.quiet ) {
        f.quiet = !1;
        for( let n = 0; n < l.length; n++ ) Og( l[ n ] );
      }
      else if( g !== d ) { for( let p = 0; p < l.length; p++ ) Og( l[ p ] ); }
    }
  }

  function Mg( a, b, c, d, e ) {
    let f = Fg();
    let g;
    a: {
      let l = f.cps;
      let m; let n = l[ a ] || {};
      let p = n.region;
      let q = c && h( c ) ? c.toUpperCase() : void 0; m = d.toUpperCase();
      if( Ng( q, p, m, e.toUpperCase() ) ) {
        let r = {
          'enabled': b === 'granted',
          'region': q
        };
        if( m !== '' || !1 !== n.enabled ) {
          l[ a ] = r;
          g = !0;
          break a;
        }
      }
      g = !1;
    }
    g && ( f.usedSetCps = !0 );
  }

  function Kg( a, b ) {
    Bg.push({
      'consentTypes': a,
      'rk': b
    });
  }

  function Og( a ) {
    for( let b = 0; b < Bg.length; ++b ) {
      let c = Bg[ b ];
      ua( c.consentTypes ) && c.consentTypes.indexOf( a ) !== -1 && ( c.si = !0 );
    }
  }

  function Lg( a, b ) {
    for( let c = 0; c < Bg.length; ++c ) {
      let d = Bg[ c ];
      if( d.si ) {
        d.si = !1;
        try {
          d.rk({
            'consentEventId': a,
            'consentPriorityId': b
          });
        }
        catch ( e ) {}
      }
    }
  }

  function Pg( a, b ) {
    let c = a.entries;
    let d = c[ b ] || {};
    let e = d.update;
    if( void 0 !== e ) return e ? 1 : 2;
    e = d.default;
    if( void 0 !== e ) return e ? 1 : 2;
    if( Te( 4 ) && Cg.hasOwnProperty( b ) ) {
      let f = c[ Cg[ b ] ] || {};
      e = f.update;
      if( void 0 !== e ) return e ? 1 : 2;
      e = f.default;
      if( void 0 !== e ) return e ? 1 : 2;
    }
    e = d.declare;
    return void 0 !== e ? e ? 1 : 2 : Te( 4 ) && ( e = d.implicit, void 0 !== e ) ? e ? 3 : 4 : Te( 3 ) && Eg.hasOwnProperty( b ) ? Eg[ b ] ? 3 : 4 : 0;
  }
  let Qg = function( a ) {
    let b = Fg();
    b.accessedAny = !0;
    switch( Pg( b, a ) ) {
      case 1:
      case 3:
        return !0;
      case 2:
      case 4:
        return !1;
      default:
        return !0;
    }
  };
  let Rg = function( a ) {
    let b = Fg();
    b.accessedAny = !0;
    return !( b.entries[ a ] || {}).quiet;
  };
  let Sg = function() {
    if( !yg().h() ) return !1;
    let a = Fg();
    a.accessedAny = !0;
    return a.active;
  };
  let Tg = function() {
    let a = Fg();
    a.accessedDefault = !0;
    return a.usedDefault;
  };
  let Ug = function( a, b ) {
    Fg().addListener( a, b );
  };
  let Vg = function( a, b ) {
    Fg().notifyListeners( a, b );
  };
  let Wg = function( a, b ) {
    function c() {
      for( let e = 0; e < b.length; e++ ) { if( !Rg( b[ e ] ) ) return !0; }
      return !1;
    }
    if( c() ) {
      let d = !1;
      Ug( b, function( e ) {
        d || c() || ( d = !0, a( e ) );
      });
    }
    else a({});
  };
  let Xg = function( a, b ) {
    function c() {
      for( var f = [], g = 0; g < d.length; g++ ) {
        let l = d[ g ];
        Qg( l ) && !e[ l ] && ( f.push( l ), e[ l ] = !0 );
      }
      return f;
    }
    var d = h( b ) ? [ b ] : b;
    var e = {};
    c().length !== d.length && Ug( d, function( f ) {
      let g = c();
      g.length > 0 && ( f.consentTypes = g, a( f ) );
    });
  };

  function Yg() {}

  function Zg() {};
  let $g = [ N.g.D, N.g.K, N.g.Zd, N.g.Yd ];
  let ah = function( a ) {
    for( var b = a[ N.g.Wb ], c = Array.isArray( b ) ? b : [ b ], d = {
      'Gc': 0
    }; d.Gc < c.length; d = {
        'Gc': d.Gc
      }, ++d.Gc ) {
      k( a, ( function( e ) {
        return function( f, g ) {
          if( f !== N.g.Wb ) {
            let l = c[ e.Gc ];
            let m = Ve[ '0' ] || '';
            let n = Ve[ '1' ] || '';
            Ag = !0;
            zg && $a( 'TAGGING', 20 );
            Fg().declare( f, g, l, m, n );
          }
        };
      }( d ) ) );
    }
  };
  let bh = function( a ) {
    let b = a[ N.g.Wb ];
    b && K( 40 );
    let c = a[ N.g.Dg ];
    c && K( 41 );
    for( var d = ua( b ) ? b : [ b ], e = {
      'Hc': 0
    }; e.Hc < d.length; e = {
        'Hc': e.Hc
      }, ++e.Hc ) {
      k( a, ( function( f ) {
        return function( g, l ) {
          if( g !== N.g.Wb && g !== N.g.Dg ) {
            let m = d[ f.Hc ];
            let n = Number( c );
            let p = Ve[ '0' ] || '';
            let q = Ve[ '1' ] || '';
            zg = !0;
            Ag && $a( 'TAGGING', 20 );
            Fg().default( g, l, m, p, q, n );
          }
        };
      }( e ) ) );
    }
  };
  let ch = function( a, b ) {
    k( a, function( c, d ) {
      zg = !0;
      Ag && $a( 'TAGGING', 20 );
      Fg().update( c, d );
    });
    Vg( b.eventId, b.priorityId );
  };
  let dh = function( a ) {
    for( var b = a[ N.g.Wb ], c = Array.isArray( b ) ? b : [ b ], d = {
      'Ic': 0
    }; d.Ic < c.length; d = {
        'Ic': d.Ic
      }, ++d.Ic ) {
      k( a, ( function( e ) {
        return function( f, g ) {
          if( f !== N.g.Wb ) {
            let l = c[ e.Ic ];
            let m = Ve[ '0' ] || '';
            let n = Ve[ '1' ] || '';
            Fg().setCps( f, g, l, m, n );
          }
        };
      }( d ) ) );
    }
  };
  let eh = function() {
    return Qg( N.g.Zd ) ? Xe() || Fg().usedSetCps : !1;
  };
  let lh = function( a, b ) {
    Xg( a,
      b );
  };
  let mh = function( a, b ) {
    Wg( a, b );
  };
  let nh = function() {
    if( P( 50 ) ) {
      for( var a = Ve[ '7' ], b = a ? a.split( '|' ) : [], c = {}, d = 0; d < b.length; d++ ) c[ b[ d ] ] = !0;
      for( let e = 0; e < $g.length; e++ ) {
        let f = $g[ e ];
        let g = c[ f ] ? 'granted' : 'denied';
        Fg().implicit( f, g );
      }
    }
  };
  let oh = function( a ) {
    let b = String( a[ gc.Ab ] || '' ).replace( /_/g, '' );
    b.indexOf( 'cvt' ) === 0 && ( b = 'cvt' );
    return b;
  };
  let ph = z.location.search.indexOf( '?gtm_latency=' ) >= 0 || z.location.search.indexOf( '&gtm_latency=' ) >= 0;
  let rh = function( a ) {
    let b = qh();
    b.pending || ( b.pending = [] );
    va( b.pending, function( c ) {
      return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination;
    }) || b.pending.push({
      'target': a,
      'onLoad': void 0
    });
  };
  let sh = function() {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
  };
  var qh = function() {
    let a = Fb( 'google_tag_data', {});
    let b = a.tidr;
    b || ( b = new sh(), a.tidr = b );
    return b;
  };
  let th = {};
  let uh = !1;
  let vh = {
    'ctid': self.optyaId,
    'Oe': '',
    'Xe': self.optyaId,
    'ri': self.optyaId
  };
  th.Fe = Da( '' );
  let wh = function() {
    return P( 81 ) ? uh : !1;
  };
  let yh = function() {
    let a = vh.Xe ? vh.Xe.split( '|' ) : [ vh.ctid ];
    return wh() ? a.map( xh ) : a;
  };
  let Ah = function() {
    let a = zh();
    return wh() ? a.map( xh ) : a;
  };
  let Ch = function() {
    return Bh( vh.ctid );
  };
  let Dh = function( a ) {
    return a ? vh.Oe : Bh( vh.Oe || '_' + vh.ctid );
  };
  var zh = function() {
    return vh.ri ? vh.ri.split( '|' ) : [];
  };
  let Eh = function( a ) {
    let b = qh();
    return a.isDestination ? b.destination[ a.ctid ] : b.container[ a.ctid ];
  };
  var Bh = function( a ) {
    return P( 81 ) ? wh() ? xh( a ) : a : a;
  };
  var xh = function( a ) {
    return P( 81 ) ? 'siloed_' + a : a;
  };
  let Fh = function( a ) {
    if( !P( 81 ) ) return a;
    a = String( a );
    return wh() && a.indexOf( 'siloed_' ) === 0 ? a.substring( 7 ) : a;
  };
  let Gh = function() {
    if( P( 81 ) ) {
      let a = !1;
      if( a ) {
        let b = qh();
        if( b.siloed ) {
          for( var c = [], d = vh.Xe ? vh.Xe.split( '|' ) : [ vh.ctid ], e = zh(), f = {}, g = 0; g < b.siloed.length; f = {
            'Ec': f.Ec
          }, g++ ) {
            f.Ec = b.siloed[ g ], !wh() && va( f.Ec.isDestination ? e : d, ( function( l ) {
              return function( m ) {
                return m === l.Ec.ctid;
              };
            }( f ) ) )
              ? uh = !0
              : c.push( f.Ec );
          }
          b.siloed = c;
        }
      }
    }
  };

  function Hh() {
    let a = qh();
    if( a.pending ) {
      for( var b, c = [], d = !1, e = yh(), f = Ah(), g = {}, l = 0; l < a.pending.length; g = {
        'Ub': g.Ub
      }, l++ ) {
        g.Ub = a.pending[ l ], va( g.Ub.target.isDestination ? f : e, ( function( m ) {
          return function( n ) {
            return n === m.Ub.target.ctid;
          };
        }( g ) ) )
          ? d || ( b = g.Ub.onLoad, d = !0 )
          : c.push( g.Ub );
      }
      a.pending = c;
      if( b ) {
        try {
          b( Dh() );
        }
        catch ( m ) {}
      }
    }
  }
  let Ih = function() {
    for( var a = qh(), b = yh(), c = 0; c < b.length; c++ ) {
      let d = a.container[ b[ c ] ];
      d
        ? ( d.state = 2, d.containers = yh(), d.destinations = Ah() )
        : a.container[ b[ c ] ] = {
          'state': 2,
          'containers': yh(),
          'destinations': Ah()
        };
    }
    for( let e = Ah(), f = 0; f < e.length; f++ ) {
      let g = a.destination[ e[ f ] ];
      g && g.state === 0 && K( 93 );
      g
        ? ( g.state = 2, g.containers = yh(), g.destinations = Ah() )
        : a.destination[ e[ f ] ] = {
          'state': 2,
          'containers': yh(),
          'destinations': Ah()
        };
    }
    P( 75 ) && ( a.canonical[ Dh() ] = {});
    Hh();
  };
  let Jh = function() {
    let a = Dh();
    return !!qh().canonical[ a ];
  };
  let Kh = function( a ) {
    return !!qh().container[ a ];
  };
  let Lh = function() {
    return {
      'ctid': Ch(),
      'isDestination': th.Fe
    };
  };

  function Mh( a ) {
    if( P( 81 ) ) {
      let b = qh();
      ( b.siloed = b.siloed || [] ).push( a );
    }
  }
  let Nh = function() {
    let a = qh().container;
    let b;
    for( b in a ) { if( a.hasOwnProperty( b ) && a[ b ].state === 1 ) return !0; }
    return !1;
  };
  let Oh = function() {
    let a = {};
    k( qh().destination, function( b, c ) {
      c.state === 0 && ( a[ b ] = c );
    });
    return a;
  };
  let Ph = {
    'sampleRate': '0.005000',
    'Ji': '',
    'Ii': Number( '5' ),
    'vm': Number( '' )
  };
  let Qh = [];

  function Rh( a ) {
    Qh.push( a );
  }
  let Sh = !1;
  let Th;
  if( !( Th = ph ) ) {
    let Uh = Math.random();
    let Vh = Ph.sampleRate;
    Th = Uh < Number( Vh );
  }
  let Wh = Th;
  let Xh = 'https://www.googletagmanager.com/a?id=' + vh.ctid;
  let Yh = void 0;
  let Zh = {};
  let $h = void 0;
  let ai = new function() {
    let a = 5;
    Ph.Ii > 0 && ( a = Ph.Ii );
    this.h = 0;
    this.B = [];
    this.m = a;
  }();
  let bi = 1E3;

  function ci( a ) {
    let b = Yh;
    if( void 0 === b ) return '';
    for( var c = [ Xh ], d = 0; d < Qh.length; d++ ) {
      let e = Qh[ d ]({
        'eventId': b,
        'kb': !!a,
        'Bi': function() {
          Sh = !0;
        }
      });
      e[ 0 ] === '&' && c.push( e );
    }
    c.push( '&z=0' );
    return c.join( '' );
  }

  function di() {
    $h && ( z.clearTimeout( $h ), $h = void 0 );
    if( void 0 !== Yh && ei ) {
      let a;
      ( a = Zh[ Yh ] ) || ( a = ai.h < ai.m ? !1 : Ha() - ai.B[ ai.h % ai.m ] < 1E3 );
      if( a || bi-- <= 0 ) K( 1 ), Zh[ Yh ] = !0;
      else {
        let b = ai.h++ % ai.m;
        ai.B[ b ] = Ha();
        let c = ci( !0 );
        Ob( c );
        if( Sh ) {
          let d = c.replace( '/a?', '/td?' );
          Ob( d );
        }
        ei = Sh = !1;
      }
    }
  }
  var ei = !1;

  function fi( a ) {
    Zh[ a ] || ( a !== Yh && ( di(), Yh = a ), ei = !0, $h || ( $h = z.setTimeout( di, 500 ) ), ci().length >= 2022 && di() );
  }
  let gi = xa();

  function hi() {
    gi = xa();
  }

  function ii() {
    return [ '&v=3&t=t', '&pid=' + gi ].join( '' );
  };
  let ji = function( a, b, c, d, e, f, g, l, m, n, p, q ) {
    this.eventId = a;
    this.priorityId = b;
    this.h = c;
    this.I = d;
    this.m = e;
    this.F = f;
    this.U = g;
    this.B = l;
    this.eventMetadata = m;
    this.M = n;
    this.O = p;
    this.isGtmEvent = q;
  };
  let S = function( a, b, c ) {
    if( void 0 !== a.h[ b ] ) return a.h[ b ];
    if( void 0 !== a.I[ b ] ) return a.I[ b ];
    if( void 0 !== a.m[ b ] ) return a.m[ b ];
    Wh && ki( a, a.F[ b ], a.U[ b ] ) && ( K( 71 ), K( 79 ) );
    return void 0 !== a.F[ b ] ? a.F[ b ] : void 0 !== a.B[ b ] ? a.B[ b ] : c;
  };
  let li = function( a ) {
    function b( g ) {
      for( let l = Object.keys( g ), m = 0; m < l.length; ++m ) c[ l[ m ] ] = 1;
    }
    var c = {};
    b( a.h );
    b( a.I );
    b( a.m );
    b( a.F );
    if( Wh ) {
      for( let d = Object.keys( a.U ), e = 0; e < d.length; e++ ) {
        let f = d[ e ];
        if( f !== 'event' && f !== 'gtm' && f !== 'tagTypeBlacklist' && !c.hasOwnProperty( f ) ) {
          K( 71 );
          K( 80 );
          break;
        }
      }
    }
    return Object.keys( c );
  };
  let mi = function( a, b, c ) {
    function d( m ) {
      G( m ) && k( m, function( n, p ) {
        f = !0;
        e[ n ] = p;
      });
    }
    var e = {};
    var f = !1;
    c && c !== 1 || ( d( a.B[ b ] ), d( a.F[ b ] ), d( a.m[ b ] ), d( a.I[ b ] ) );
    c && c !== 2 || d( a.h[ b ] );
    if( Wh ) {
      let g = f;
      let l = e;
      e = {};
      f = !1;
      c && c !== 1 || ( d( a.B[ b ] ), d( a.U[ b ] ), d( a.m[ b ] ), d( a.I[ b ] ) );
      c && c !== 2 || d( a.h[ b ] );
      if( f !== g || ki( a, e, l ) ) K( 71 ), K( 81 );
      f = g;
      e = l;
    }
    return f
      ? e
      : void 0;
  };
  let ni = function( a ) {
    let b = [ N.g.Qc, N.g.Mc, N.g.Nc, N.g.Oc, N.g.Pc, N.g.Rc, N.g.Sc ];
    let c = {};
    let d = !1;
    let e = function( l ) {
      for( let m = 0; m < b.length; m++ ) void 0 !== l[ b[ m ] ] && ( c[ b[ m ] ] = l[ b[ m ] ], d = !0 );
      return d;
    };
    if( e( a.h ) || e( a.I ) || e( a.m ) ) return c;
    e( a.F );
    if( Wh ) {
      let f = c;
      let g = d;
      c = {};
      d = !1;
      e( a.U );
      ki( a, c, f ) && ( K( 71 ), K( 82 ) );
      c = f;
      d = g;
    }
    if( d ) return c;
    e( a.B );
    return c;
  };
  var ki = function( a, b, c ) {
    if( !Wh ) return !1;
    try {
      if( b === c ) return !1;
      let d = ac( b );
      if( d !== ac( c ) || !( G( b ) && G( c ) || d === 'array' ) ) return !0;
      if( d === 'array' ) {
        if( b.length !== c.length ) return !0;
        for( let e =
                            0; e < b.length; e++ ) { if( ki( a, b[ e ], c[ e ] ) ) return !0; }
      }
      else {
        for( let f in c ) { if( !b.hasOwnProperty( f ) ) return !0; }
        for( let g in b ) { if( !c.hasOwnProperty( g ) || ki( a, b[ g ], c[ g ] ) ) return !0; }
      }
    }
    catch ( l ) {
      K( 72 );
    }
    return !1;
  };
  let oi = function( a, b ) {
    this.Kf = a;
    this.Kj = b;
    this.F = {};
    this.qd = {};
    this.h = {};
    this.I = {};
    this.m = {};
    this.pd = {};
    this.B = {};
    this.Lc = function() {};
    this.Cb = function() {};
    this.U = !1;
  };
  let pi = function( a, b ) {
    a.F = b;
    return a;
  };
  let qi = function( a, b ) {
    a.qd = b;
    return a;
  };
  let ri = function( a, b ) {
    a.h = b;
    return a;
  };
  let si = function( a, b ) {
    a.I = b;
    return a;
  };
  let ti = function( a, b ) {
    a.m =
                b;
    return a;
  };
  let ui = function( a, b ) {
    a.pd = b;
    return a;
  };
  let vi = function( a, b ) {
    a.B = b || {};
    return a;
  };
  let wi = function( a, b ) {
    a.Lc = b;
    return a;
  };
  let xi = function( a, b ) {
    a.Cb = b;
    return a;
  };
  let yi = function( a, b ) {
    a.U = b;
    return a;
  };
  let zi = function( a ) {
    return new ji( a.Kf, a.Kj, a.F, a.qd, a.h, a.I, a.m, a.pd, a.B, a.Lc, a.Cb, a.U );
  };
  let Ai = [ N.g.D, N.g.K ];
  let Bi = [ N.g.D, N.g.K, N.g.Zd, N.g.Yd ];
  let Ci = {};
  let Di = ( Ci[ N.g.D ] = 1, Ci[ N.g.K ] = 2, Ci );
  let Ei = {};
  let Fi = ( Ei[ N.g.Qi ] = 'a', Ei[ N.g.Si ] = 's', Ei[ N.g.Ti ] = 'y', Ei[ N.g.Ri ] = 'p', Ei );
  let Gi = function( a ) {
    let b = !1 !== S( a, N.g.X );
    P( 87 ) && ( b = b && Qg( N.g.Yd ) );
    return b;
  };
  let Hi = function() {
    let a = {};
    let b;
    for( b in Di ) {
      if( Di.hasOwnProperty( b ) ) {
        let c = Di[ b ];
        var d; let e = Fg();
        e.accessedAny = !0;
        d = Pg( e, b );
        a[ c ] = d;
      }
    } let f = P( 57 ) && Ai.every( Qg );
    let g = P( 52 );
    return f || g ? fc( a, 1 ) : fc( a, 0 );
  };
  let Ii = {};
  let Ji = ( Ii[ N.g.D ] = 0, Ii[ N.g.K ] = 1, Ii[ N.g.Zd ] = 2, Ii[ N.g.Yd ] = 3, Ii );

  function Ki( a ) {
    switch( a ) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  let Li = function() {
    if( P( 54 ) ) {
      for( var a = '1', b = 0; b < Bi.length; b++ ) {
        let c = a;
        var d; let e = Bi[ b ];
        let f = Cg[ e ];
        d = void 0 === f ? 0 : Ji.hasOwnProperty( f ) ? 12 | Ji[ f ] : 8;
        let g = Fg();
        g.accessedAny = !0;
        let l = g.entries[ e ] || {};
        d = d << 2 | Ki( l.implicit );
        a = c + ( '' + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[ d ] + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[ Ki( l.declare ) << 4 | Ki( l.default ) << 2 | Ki( l.update ) ] );
      }
      return a;
    }
    for( var m = 'G1', n = 0; n < Ai.length; n++ ) {
      var p;
      a: {
        let q = Ai[ n ];
        let r = Fg(); r.accessedDefault = !0;
        switch( ( r.entries[ q ] || {}).default ) {
          case !0:
            p = 3;
            break a;
          case !1:
            p = 2;
            break a;
          default:
            p = 1;
        }
      }
      switch( p ) {
        case 3:
          m += '1';
          break;
        case 2:
          m += '0';
          break;
        case 1:
          m += '-';
      }
    }
    return m;
  };
  let Mi = function() {
    let a = Fg();
    let b = a.cps;
    let c = [];
    let d;
    for( d in Dg ) Dg.hasOwnProperty( d ) && Dg[ d ].enabled && ( a.usedSetCps ? b.hasOwnProperty( d ) && b[ d ].enabled && c.push( d ) : c.push( d ) );
    for( var e = '', f = 0; f < c.length; f++ ) {
      let g = Fi[ c[ f ] ];
      g && ( e += g );
    }
    return e === '' ? '-' : e;
  };
  let Ni = function( a ) {
    let b = 1;
    let c; let d; let e;
    if( a ) { for( b = 0, d = a.length - 1; d >= 0; d-- ) e = a.charCodeAt( d ), b = ( b << 6 & 268435455 ) + e + ( e << 14 ), c = b & 266338304, b = c !== 0 ? b ^ c >> 21 : b; }
    return b;
  };
  let Oi = function( a, b, c ) {
    for( var d = [], e = b.split( ';' ), f = 0; f < e.length; f++ ) {
      let g = e[ f ].split( '=' );
      let l = g[ 0 ].replace( /^\s*|\s*$/g, '' );
      if( l && l == a ) {
        let m = g.slice( 1 ).join( '=' ).replace( /^\s*|\s*$/g, '' );
        m && c && ( m = decodeURIComponent( m ) );
        d.push( m );
      }
    }
    return d;
  };
  let Pi = function( a, b ) {
    let c = function() {};
    c.prototype = a.prototype;
    let d = new c();
    a.apply( d, Array.prototype.slice.call( arguments, 1 ) );
    return d;
  };
  let Qi = function( a ) {
    let b = a;
    return function() {
      if( b ) {
        let c = b;
        b = null;
        c();
      }
    };
  };

  function Ri( a ) {
    return a.origin !== 'null';
  };
  let Ui = function( a, b, c, d ) {
    return Si( d ) ? Oi( a, String( b || Ti() ), c ) : [];
  };
  let Xi = function( a, b, c, d, e ) {
    if( Si( e ) ) {
      let f = Vi( a, d, e );
      if( f.length === 1 ) return f[ 0 ].id;
      if( f.length !== 0 ) {
        f = Wi( f, function( g ) {
          return g.Qe;
        }, b );
        if( f.length === 1 ) return f[ 0 ].id;
        f = Wi( f, function( g ) {
          return g.Kd;
        }, c );
        return f[ 0 ] ? f[ 0 ].id : void 0;
      }
    }
  };

  function Yi( a, b, c, d ) {
    let e = Ti();
    let f = window;
    Ri( f ) && ( f.document.cookie = a );
    let g = Ti();
    return e != g || void 0 != c && Ui( b, g, !1, d ).indexOf( c ) >= 0;
  }
  let bj = function( a, b, c ) {
    function d( t, u, v ) {
      if( v == null ) return delete g[ u ], t;
      g[ u ] = v;
      return t + '; ' + u + '=' + v;
    }

    function e( t, u ) {
      if( u == null ) return delete g[ u ], t;
      g[ u ] = !0;
      return t + '; ' + u;
    }
    if( !Si( c.jb ) ) return 2;
    let f;
    void 0 == b ? f = a + '=deleted; expires=' + ( new Date( 0 ) ).toUTCString() : ( c.encode && ( b = encodeURIComponent( b ) ), b = Zi( b ), f = a + '=' + b );
    var g = {};
    f = d( f, 'path', c.path );
    let l;
    c.expires instanceof Date ? l = c.expires.toUTCString() : c.expires != null && ( l = '' + c.expires );
    f = d( f, 'expires', l );
    f = d( f, 'max-age', c.lm );
    f = d( f, 'samesite',
      c.om );
    c.qm && ( f = e( f, 'secure' ) );
    let m = c.domain;
    if( m && m.toLowerCase() === 'auto' ) {
      for( let n = $i(), p = 0; p < n.length; ++p ) {
        let q = n[ p ] !== 'none' ? n[ p ] : void 0;
        let r = d( f, 'domain', q );
        r = e( r, c.flags );
        if( !aj( q, c.path ) && Yi( r, a, b, c.jb ) ) return 0;
      }
      return 1;
    }
    m && m.toLowerCase() !== 'none' && ( f = d( f, 'domain', m ) );
    f = e( f, c.flags );
    return aj( m, c.path ) ? 1 : Yi( f, a, b, c.jb ) ? 0 : 1;
  };
  let cj = function( a, b, c ) {
    c.path == null && ( c.path = '/' );
    c.domain || ( c.domain = 'auto' );
    return bj( a, b, c );
  };

  function Wi( a, b, c ) {
    for( var d = [], e = [], f, g = 0; g < a.length; g++ ) {
      let l = a[ g ];
      let m = b( l );
      m === c ? d.push( l ) : void 0 === f || m < f ? ( e = [ l ], f = m ) : m === f && e.push( l );
    }
    return d.length > 0 ? d : e;
  }

  function Vi( a, b, c ) {
    for( var d = [], e = Ui( a, void 0, void 0, c ), f = 0; f < e.length; f++ ) {
      let g = e[ f ].split( '.' );
      let l = g.shift();
      if( !b || b.indexOf( l ) !== -1 ) {
        let m = g.shift();
        m && ( m = m.split( '-' ), d.push({
          'id': g.join( '.' ),
          'Qe': 1 * m[ 0 ] || 1,
          'Kd': 1 * m[ 1 ] || 1
        }) );
      }
    }
    return d;
  }
  var Zi = function( a ) {
    a && a.length > 1200 && ( a = a.substring( 0, 1200 ) );
    return a;
  };
  let dj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/;
  let ej = /(^|\.)doubleclick\.net$/i;
  var aj = function( a, b ) {
    return ej.test( 'qa.testbs.net' ) || b === '/' && dj.test( a ); // window.document.location.hostname
  };
  var Ti = function() {
    return Ri( window ) ? window.document.cookie : '';
  };
  var $i = function() {
    let a = [];
    let b = 'qa.testbs.net'.split( '.' ); // window.document.location.hostname
    if( b.length === 4 ) {
      let c = b[ b.length - 1 ];
      if( parseInt( c, 10 ).toString() === c ) return [ 'none' ];
    }
    for( let d = b.length - 2; d >= 0; d-- ) a.push( b.slice( d ).join( '.' ) );
    let e = 'qa.testbs.net'; // window.document.location.hostname
    ej.test( e ) || dj.test( e ) || a.push( 'none' );
    return a;
  };
  var Si = function( a ) {
    return yg().h() && a && Sg() ? Rg( a ) ? Qg( a ) : !1 : !0;
  };
  let fj = function( a ) {
    let b = Math.round( 2147483647 * Math.random() );
    return a ? String( b ^ Ni( a ) & 2147483647 ) : String( b );
  };
  let gj = function( a ) {
    return [ fj( a ), Math.round( Ha() / 1E3 ) ].join( '.' );
  };
  let jj = function( a, b, c, d, e ) {
    let f = hj( b );
    return Xi( a, f, ij( c ), d, e );
  };
  let kj = function( a, b, c, d ) {
    let e = '' + hj( c );
    let f = ij( d );
    f > 1 && ( e += '-' + f );
    return [ b, e, a ].join( '.' );
  };
  var hj = function( a ) {
    if( !a ) return 1;
    a = a.indexOf( '.' ) === 0 ? a.substr( 1 ) : a;
    return a.split( '.' ).length;
  };
  var ij = function( a ) {
    if( !a || a === '/' ) return 1;
    a[ 0 ] !== '/' && ( a = '/' + a );
    a[ a.length - 1 ] !== '/' && ( a += '/' );
    return a.split( '/' ).length -
                1;
  };
  let lj = function() {
    ne.dedupe_gclid || ( ne.dedupe_gclid = '' + gj() );
    return ne.dedupe_gclid;
  };
  let mj = function() {
    let a = !1;
    return a;
  };
  let nj = {
    'UA': 1,
    'AW': 2,
    'DC': 3,
    'G': 4,
    'GF': 5,
    'GT': 12,
    'GTM': 14,
    'HA': 6,
    'MC': 7
  };
  let oj = function( a ) {
    let b = vh.ctid.split( '-' )[ 0 ].toUpperCase();
    let c = {};
    c.ctid = vh.ctid;
    c.yl = me.vd;
    c.Bl = me.Nf;
    c.Vk = th.Fe ? 2 : 1;
    te ? ( c.bf = nj[ b ], c.bf || ( c.bf = 0 ) ) : c.bf = ze ? 13 : 10;
    xe ? c.lg = 1 : mj() ? c.lg = 2 : c.lg = 3;
    let d;
    let e = c.bf;
    let f = c.lg;
    void 0 === e ? d = '' : ( f || ( f = 0 ), d = '' + vd( 1, 1 ) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[ e << 2 | f ] );
    let g = c.fm;
    let l = 4 + d + ( g ? '' + vd( 2, 1 ) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[ g ] : '' );
    let m; let n = c.Bl;
    m = n
                && ud.test( n )
      ? '' + vd( 3, 2 ) + n
      : '';
    let p; let q = c.yl;
    p = q ? '' + vd( 4, 1 ) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[ q ] : '';
    let r;
    let t = c.ctid;
    if( t && a ) {
      let u = t.split( '-' );
      let v = u[ 0 ].toUpperCase();
      if( v !== 'GTM' && v !== 'OPT' ) r = '';
      else {
        let w = u[ 1 ];
        r = '' + vd( 5, 3 ) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[ 1 + w.length ] + ( c.Vk || 0 ) + w;
      }
    }
    else r = '';
    return l + m + p + r;
  };

  function pj( a, b ) {
    if( a === '' ) return b;
    let c = Number( a );
    return isNaN( c ) ? b : c;
  };
  let qj = function( a, b, c ) {
    a.addEventListener && a.addEventListener( b, c, !1 );
  };

  function rj() {
    return ib ? !!pb && !!pb.platform : !1;
  }

  function sj() {
    return sb( 'iPhone' ) && !sb( 'iPod' ) && !sb( 'iPad' );
  }

  function tj() {
    sj() || sb( 'iPad' ) || sb( 'iPod' );
  };
  ub();
  tb() || sb( 'Trident' ) || sb( 'MSIE' );
  sb( 'Edge' );
  !sb( 'Gecko' ) || ob().toLowerCase().indexOf( 'webkit' ) != -1 && !sb( 'Edge' ) || sb( 'Trident' ) || sb( 'MSIE' ) || sb( 'Edge' ); ob().toLowerCase().indexOf( 'webkit' ) != -1 && !sb( 'Edge' ) && sb( 'Mobile' );
  rj() || sb( 'Macintosh' );
  rj() || sb( 'Windows' );
  ( rj() ? pb.platform === 'Linux' : sb( 'Linux' ) ) || rj() || sb( 'CrOS' );
  let uj = pa.navigator || null;
  uj && ( uj.appVersion || '' ).indexOf( 'X11' );
  rj() || sb( 'Android' );
  sj();
  sb( 'iPad' );
  sb( 'iPod' );
  tj();
  ob().toLowerCase().indexOf( 'kaios' );
  let vj = function( a, b, c, d ) {
    for( let e = b, f = c.length; ( e = a.indexOf( c, e ) ) >= 0 && e < d; ) {
      let g = a.charCodeAt( e - 1 );
      if( g == 38 || g == 63 ) {
        let l = a.charCodeAt( e + f );
        if( !l || l == 61 || l == 38 || l == 35 ) return e;
      }
      e += f + 1;
    }
    return -1;
  };
  let wj = /#|$/;
  let xj = function( a, b ) {
    let c = a.search( wj );
    let d = vj( a, 0, b, c );
    if( d < 0 ) return null;
    let e = a.indexOf( '&', d );
    if( e < 0 || e > c ) e = c;
    d += b.length + 1;
    return decodeURIComponent( a.slice( d, e !== -1 ? e : 0 ).replace( /\+/g, ' ' ) );
  };
  let yj = /[?&]($|#)/;
  let zj = function( a, b, c ) {
    for( var d, e = a.search( wj ), f = 0, g, l = []; ( g = vj( a, f, b, e ) ) >= 0; ) {
      l.push( a.substring( f,
        g ) ), f = Math.min( a.indexOf( '&', g ) + 1 || e, e );
    }
    l.push( a.slice( f ) );
    d = l.join( '' ).replace( yj, '$1' );
    let m; let n = c != null ? '=' + encodeURIComponent( String( c ) ) : '';
    let p = b + n;
    if( p ) {
      let q; let r = d.indexOf( '#' );
      r < 0 && ( r = d.length );
      let t = d.indexOf( '?' );
      let u;
      t < 0 || t > r ? ( t = r, u = '' ) : u = d.substring( t + 1, r );
      q = [ d.slice( 0, t ), u, d.slice( r ) ];
      let v = q[ 1 ];
      q[ 1 ] = p ? v ? v + '&' + p : p : v;
      m = q[ 0 ] + ( q[ 1 ] ? '?' + q[ 1 ] : '' ) + q[ 2 ];
    }
    else m = d;
    return m;
  };
  let Aj = function( a ) {
    try {
      let b;
      if( b = !!a && null != 'https://qa.testbs.net/en/' ) {
        a: { // a.location.href
          try {
            wg( a.foo );
            b = !0;
            break a;
          }
          catch ( c ) {}
          b = !1;
        }
      }
      return b;
    }
    catch ( c ) {
      return !1;
    }
  };
  let Bj = function( a, b ) {
    if( a ) { for( let c in a ) Object.prototype.hasOwnProperty.call( a, c ) && b( a[ c ], c, a ); }
  };

  function Cj( a ) {
    if( !a || !C.head ) return null;
    let b = Dj( 'META' );
    C.head.appendChild( b );
    b.httpEquiv = 'origin-trial';
    b.content = a;
    return b;
  }
  let Ej = function() {
    if( z.top == z ) return 0;
    let a = z.location.ancestorOrigins;
    return a ? a[ a.length - 1 ] == 'https://qa.testbs.net' ? 1 : 2 : Aj( z.top ) ? 1 : 2; // z.location.origin
  };
  var Dj = function( a, b ) {
    b = void 0 === b ? document : b;
    return b.createElement( String( a ).toLowerCase() );
  };

  function Fj( a, b, c, d ) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || ( a.google_image_requests = [] );
    let e = Dj( 'IMG', a.document );
    if( c ) {
      let f = function() {
        if( c ) {
          let g = a.google_image_requests;
          let l = cb( g, e );
          l >= 0 && Array.prototype.splice.call( g, l, 1 );
        }
        e.removeEventListener && e.removeEventListener( 'load', f, !1 );
        e.removeEventListener && e.removeEventListener( 'error', f, !1 );
      };
      qj( e, 'load', f );
      qj( e, 'error', f );
    }
    d && ( e.attributionSrc = '' );
    e.src = b;
    a.google_image_requests.push( e );
  }
  let Hj = function( a ) {
    let b;
    b = void 0 === b ? !1 : b;
    let c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe';
    Bj( a, function( d, e ) {
      if( d || d === 0 ) c += '&' + e + '=' + encodeURIComponent( '' + d );
    });
    Gj( c, b );
  };
  var Gj = function( a, b ) {
    let c = window;
    let d;
    b = void 0 === b ? !1 : b;
    d = void 0 === d ? !1 : d;
    if( c.fetch ) {
      let e = {
        'keepalive': !0,
        'credentials': 'include',
        'redirect': 'follow',
        'method': 'get',
        'mode': 'no-cors'
      };
      d && ( e.mode = 'cors', 'setAttributionReporting' in XMLHttpRequest.prototype
        ? e.attributionReporting = {
          'eventSourceEligible': 'true',
          'triggerEligible': 'false'
        }
        : e.headers = {
          'Attribution-Reporting-Eligible': 'event-source'
        });
      c.fetch( a, e );
    }
    else Fj( c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d );
  };
  let Ij = function() {};
  let Jj = function( a ) {
    void 0 !== a.addtlConsent && typeof a.addtlConsent !== 'string' && ( a.addtlConsent = void 0 );
    void 0 !== a.gdprApplies && typeof a.gdprApplies !== 'boolean' && ( a.gdprApplies = void 0 );
    return void 0 !== a.tcString && typeof a.tcString !== 'string' || void 0 !== a.listenerId && typeof a.listenerId !== 'number' ? 2 : a.cmpStatus && a.cmpStatus !== 'error' ? 0 : 3;
  };
  let Kj = function( a, b ) {
    b = void 0 === b ? {} : b;
    this.m = a;
    this.h = null;
    this.I = {};
    this.Cb = 0;
    let c;
    this.U = ( c = b.Il ) != null ? c : 500;
    let d;
    this.F = ( d = b.gm ) != null ? d : !1;
    this.B = null;
  };
  oa( Kj, Ij );
  Kj.prototype.addEventListener = function( a ) {
    let b = this;
    let c = {
      'internalBlockOnErrors': this.F
    };
    let d = Qi( function() {
      return a( c );
    });
    let e = 0; this.U !== -1 && ( e = setTimeout( function() {
      c.tcString = 'tcunavailable';
      c.internalErrorState = 1;
      d();
    }, this.U ) );
    let f = function( g, l ) {
      clearTimeout( e );
      g ? ( c = g, c.internalErrorState = Jj( c ), c.internalBlockOnErrors = b.F, l && c.internalErrorState === 0 || ( c.tcString = 'tcunavailable', l || ( c.internalErrorState = 3 ) ) ) : ( c.tcString = 'tcunavailable', c.internalErrorState = 3 );
      a( c );
    };
    try {
      Lj( this, 'addEventListener', f );
    }
    catch ( g ) {
      c.tcString =
                'tcunavailable', c.internalErrorState = 3, e && ( clearTimeout( e ), e = 0 ), d();
    }
  };
  Kj.prototype.removeEventListener = function( a ) {
    a && a.listenerId && Lj( this, 'removeEventListener', null, a.listenerId );
  };
  let Nj = function( a, b, c ) {
    let d;
    d = void 0 === d ? '755' : d;
    let e;
    a: {
      if( a.publisher && a.publisher.restrictions ) {
        let f = a.publisher.restrictions[ b ];
        if( void 0 !== f ) {
          e = f[ void 0 === d ? '755' : d ];
          break a;
        }
      }
      e = void 0;
    }
    let g = e;
    if( g === 0 ) return !1;
    let l = c;
    c === 2 ? ( l = 0, g === 2 && ( l = 1 ) ) : c === 3 && ( l = 1, g === 1 && ( l = 0 ) );
    let m;
    if( l === 0 ) {
      if( a.purpose && a.vendor ) {
        let n = Mj( a.vendor.consents, void 0 === d ? '755' : d );
        m = n && b === '1' && a.purposeOneTreatment && a.publisherCC === 'CH' ? !0 : n && Mj( a.purpose.consents, b );
      }
      else m = !0;
    }
    else {
      m = l === 1
        ? a.purpose && a.vendor
          ? Mj( a.purpose.legitimateInterests,
            b ) && Mj( a.vendor.legitimateInterests, void 0 === d ? '755' : d )
          : !0
        : !0;
    }
    return m;
  };
  var Mj = function( a, b ) {
    return !( !a || !a[ b ] );
  };
  var Lj = function( a, b, c, d ) {
    c || ( c = function() {});
    if( typeof a.m.__tcfapi === 'function' ) {
      let e = a.m.__tcfapi;
      e( b, 2, c, d );
    }
    else if( Oj( a ) ) {
      Pj( a );
      let f = ++a.Cb;
      a.I[ f ] = c;
      if( a.h ) {
        let g = {};
        a.h.postMessage( ( g.__tcfapiCall = {
          'command': b,
          'version': 2,
          'callId': f,
          'parameter': d
        }, g ), '*' );
      }
    }
    else c({}, !1 );
  };
  var Oj = function( a ) {
    if( a.h ) return a.h;
    let b;
    a: {
      for( let c = a.m, d = 0; d < 50; ++d ) {
        var e;
        try {
          e = !( !c.frames || !c.frames.__tcfapiLocator );
        }
        catch ( l ) {
          e = !1;
        }
        if( e ) {
          b = c;
          break a;
        }
        var f;
        b: {
          try {
            let g = c.parent;
            if( g && g != c ) {
              f = g;
              break b;
            }
          }
          catch ( l ) {}
          f = null;
        }
        if( !( c = f ) ) break;
      }
      b = null;
    }
    a.h = b;
    return a.h;
  };
  var Pj = function( a ) {
    a.B || ( a.B = function( b ) {
      try {
        let c;
        c = ( typeof b.data === 'string' ? JSON.parse( b.data ) : b.data ).__tcfapiReturn;
        a.I[ c.callId ]( c.returnValue, c.success );
      }
      catch ( d ) {}
    }, qj( a.m, 'message', a.B ) );
  };
  let Qj = function( a ) {
    if( !1 === a.gdprApplies ) return !0;
    void 0 === a.internalErrorState && ( a.internalErrorState = Jj( a ) );
    return a.cmpStatus === 'error' || a.internalErrorState !== 0
      ? a.internalBlockOnErrors
        ? ( Hj({
            'e': String( a.internalErrorState )
          }), !1 )
        : !0
      : a.cmpStatus !== 'loaded' || a.eventStatus !== 'tcloaded' && a.eventStatus !== 'useractioncomplete' ? !1 : !0;
  };
  let Rj = {
    '1': 0,
    '3': 0,
    '4': 0,
    '7': 3,
    '9': 3,
    '10': 3
  };
  let Sj = pj( '', 500 );

  function Tj() {
    let a = ne.tcf || {};
    return ne.tcf = a;
  }
  let Zj = function() {
    let a = Tj();
    let b = new Kj( z, {
      'Il': -1
    });
    Uj( b ) && Vj() && K( 124 );
    if( !Vj() && !a.active && Uj( b ) ) {
      a.active = !0;
      a.Ye = {};
      Wj();
      a.tcString = 'tcunavailable';
      try {
        b.addEventListener( function( c ) {
          if( c.internalErrorState !== 0 ) Xj( a ), Yj( a );
          else {
            let d;
            a.gdprApplies = c.gdprApplies;
            if( !1 === c.gdprApplies ) {
              let e = {};
              let f;
              for( f in Rj ) Rj.hasOwnProperty( f ) && ( e[ f ] = !0 );
              d = e;
              b.removeEventListener( c );
            }
            else if( c.eventStatus === 'tcloaded' || c.eventStatus === 'useractioncomplete' || c.eventStatus === 'cmpuishown' ) {
              let g = {};
              let l;
              for( l in Rj ) {
                if( Rj.hasOwnProperty( l ) ) {
                  if( l ===
                                        '1' ) {
                    var m; let n = c;
                    let p = !0;
                    p = void 0 === p ? !1 : p;
                    m = Qj( n ) ? !1 === n.gdprApplies || n.tcString === 'tcunavailable' || void 0 === n.gdprApplies && !p || typeof n.tcString !== 'string' || !n.tcString.length ? !0 : Nj( n, '1', 0 ) : !1;
                    g[ '1' ] = m;
                  }
                  else g[ l ] = Nj( c, l, Rj[ l ] );
                }
              }
              d = g;
            }
            d && ( a.tcString = c.tcString || 'tcempty', a.Ye = d, Yj( a ) );
          }
        });
      }
      catch ( c ) {
        Xj( a ), Yj( a );
      }
    }
  };

  function Xj( a ) {
    a.type = 'e';
    a.tcString = 'tcunavailable';
  }

  function Wj() {
    let a = {};
    let b = ( a.ad_storage = 'denied', a.wait_for_update = Sj, a );
    bh( b );
  }

  function Uj( a ) {
    return typeof z.__tcfapi === 'function' || typeof a.m.__tcfapi === 'function' || Oj( a ) != null ? !0 : !1;
  }
  var Vj = function() {
    return !0 !== z.gtag_enable_tcf_support;
  };

  function Yj( a ) {
    let b = {};
    let c = ( b.ad_storage = a.Ye[ '1' ] ? 'granted' : 'denied', b );
    ch( c, {
      'eventId': 0
    }, {
      'gdprApplies': a ? a.gdprApplies : void 0,
      'tcString': ak()
    });
  }
  var ak = function() {
    let a = Tj();
    return a.active ? a.tcString || '' : '';
  };
  let bk = function() {
    let a = Tj();
    return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? '1' : '0' : '';
  };
  let ck = function( a ) {
    if( !Rj.hasOwnProperty( String( a ) ) ) return !0;
    let b = Tj();
    return b.active && b.Ye ? !!b.Ye[ String( a ) ] : !0;
  };
  let dk = void 0;

  function ek( a ) {
    let b = '';
    return b;
  };
  vb();
  sj() || sb( 'iPod' );
  sb( 'iPad' );
  !sb( 'Android' ) || wb() || vb() || ub() || sb( 'Silk' );
  wb();
  !sb( 'Safari' ) || wb() || ( tb() ? 0 : sb( 'Coast' ) ) || ub() || ( tb() ? 0 : sb( 'Edge' ) ) || ( tb() ? rb( 'Microsoft Edge' ) : sb( 'Edg/' ) ) || ( tb() ? rb( 'Opera' ) : sb( 'OPR' ) ) || vb() || sb( 'Silk' ) || sb( 'Android' ) || tj();
  let fk = {};
  let gk = null;
  let hk = function( a ) {
    for( var b = [], c = 0, d = 0; d < a.length; d++ ) {
      let e = a.charCodeAt( d );
      e > 255 && ( b[ c++ ] = e & 255, e >>= 8 );
      b[ c++ ] = e;
    }
    let f = 4;
    void 0 === f && ( f = 0 );
    if( !gk ) {
      gk = {};
      for( let g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split( '' ), l = [ '+/=', '+/', '-_=', '-_.', '-_' ], m = 0; m < 5; m++ ) {
        let n = g.concat( l[ m ].split( '' ) );
        fk[ m ] = n;
        for( let p = 0; p < n.length; p++ ) {
          let q = n[ p ];
          void 0 === gk[ q ] && ( gk[ q ] = p );
        }
      }
    }
    for( var r = fk[ f ], t = Array( Math.floor( b.length / 3 ) ), u = r[ 64 ] || '', v = 0, w = 0; v < b.length - 2; v += 3 ) {
      let x = b[ v ];
      let y = b[ v + 1 ];
      let A = b[ v + 2 ];
      let B = r[ x >> 2 ];
      let D = r[ ( x & 3 ) << 4 | y >> 4 ];
      let H = r[ ( y & 15 ) << 2 | A >> 6 ];
      let I = r[ A & 63 ];
      t[ w++ ] = '' + B + D + H + I;
    }
    let F = 0;
    let L = u;
    switch( b.length - v ) {
      case 2:
        F = b[ v + 1 ], L = r[ ( F & 15 ) << 2 ] || u;
      case 1:
        var M = b[ v ];
        t[ w ] = '' + r[ M >> 2 ] + r[ ( M & 3 ) << 4 | F >> 4 ] + L + u;
    }
    return t.join( '' );
  };
  let ik = 'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split( ' ' );

  function jk() {
    let a;
    return ( a = z.google_tag_data ) != null ? a : z.google_tag_data = {};
  }

  function kk() {
    let a = z.google_tag_data;
    let b;
    if( a != null && a.uach ) {
      let c = a.uach;
      let d = Object.assign({}, c );
      c.fullVersionList && ( d.fullVersionList = c.fullVersionList.slice( 0 ) );
      b = d;
    }
    else b = null;
    return b;
  }

  function lk() {
    let a, b;
    return ( b = ( a = z.google_tag_data ) == null ? void 0 : a.uach_promise ) != null ? b : null;
  }

  function mk() {
    let a, b;
    return typeof ( ( a = z.navigator ) == null ? void 0 : ( b = a.userAgentData ) == null ? void 0 : b.getHighEntropyValues ) === 'function';
  }

  function nk() {
    if( !mk() ) return null;
    let a = jk();
    if( a.uach_promise ) return a.uach_promise;
    let b = z.navigator.userAgentData.getHighEntropyValues( ik ).then( function( c ) {
      a.uach != null || ( a.uach = c );
      return c;
    });
    return a.uach_promise = b;
  };

  function Ck( a, b, c, d ) {
    let e; let f = Number( a.hb != null ? a.hb : void 0 );
    f !== 0 && ( e = new Date( ( b || Ha() ) + 1E3 * ( f || 7776E3 ) ) );
    return {
      'path': a.path,
      'domain': a.domain,
      'flags': a.flags,
      'encode': !!c,
      'expires': e,
      'jb': d
    };
  };
  let Dk;
  let Hk = function() {
    let a = Ek;
    let b = Fk;
    let c = Gk();
    let d = function( g ) {
      a( g.target || g.srcElement || {});
    };
    let e = function( g ) {
      b( g.target || g.srcElement || {});
    };
    if( !c.init ) {
      Pb( C, 'mousedown', d );
      Pb( C, 'keyup', d );
      Pb( C, 'submit', e );
      let f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function() {
        b( this );
        f.call( this );
      };
      c.init = !0;
    }
  };
  let Ik = function( a, b, c, d, e ) {
    let f = {
      'callback': a,
      'domains': b,
      'fragment': c === 2,
      'placement': c,
      'forms': d,
      'sameHost': e
    };
    Gk().decorators.push( f );
  };
  let Jk = function( a, b, c ) {
    for( var d = Gk().decorators, e = {}, f = 0; f < d.length; ++f ) {
      let g =
                    d[ f ];
      var l;
      if( l = !c || g.forms ) {
        a: {
          let m = g.domains;
          let n = a;
          let p = !!g.sameHost;
          if( m && ( p || n !== 'qa.testbs.net' ) ) // C.location.hostname
          {
            for( let q = 0; q < m.length; q++ ) {
              if( m[ q ] instanceof RegExp ) {
                if( m[ q ].test( n ) ) {
                  l = !0;
                  break a;
                }
              }
              else if( n.indexOf( m[ q ] ) >= 0 || p && m[ q ].indexOf( n ) >= 0 ) {
                l = !0;
                break a;
              }
            }
          }
          l = !1;
        }
      }
      if( l ) {
        let r = g.placement;
        void 0 == r && ( r = g.fragment ? 2 : 1 );
        r === b && Ka( e, g.callback() );
      }
    }
    return e;
  };

  function Gk() {
    let a = Fb( 'google_tag_data', {});
    let b = a.gl;
    b && b.decorators || ( b = {
      'decorators': []
    }, a.gl = b );
    return b;
  };
  let Kk = /(.*?)\*(.*?)\*(.*)/;
  let Lk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/;
  let Mk = /^(?:www\.|m\.|amp\.)+/;
  let Nk = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function Ok( a ) {
    return new RegExp( '(.*?)(^|&)' + a + '=([^&]*)&?(.*)' );
  }
  let Qk = function( a ) {
    let b = [];
    let c;
    for( c in a ) {
      if( a.hasOwnProperty( c ) ) {
        let d = a[ c ];
        void 0 !== d && d === d && d !== null && d.toString() !== '[object Object]' && ( b.push( c ), b.push( Wa( String( d ) ) ) );
      }
    } let e = b.join( '*' );
    return [ '1', Pk( e ), e ].join( '*' );
  };

  function Pk( a, b ) {
    let c = [ Db.userAgent, ( new Date() ).getTimezoneOffset(), Db.userLanguage || Db.language, Math.floor( Ha() / 60 / 1E3 ) - ( void 0 === b ? 0 : b ), a ].join( '*' );
    let d;
    if( !( d = Dk ) ) {
      for( var e = Array( 256 ), f = 0; f < 256; f++ ) {
        for( var g = f, l = 0; l < 8; l++ ) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[ f ] = g;
      }
      d = e;
    }
    Dk = d;
    for( var m = 4294967295, n = 0; n < c.length; n++ ) m = m >>> 8 ^ Dk[ ( m ^ c.charCodeAt( n ) ) & 255 ];
    return ( ( m ^ -1 ) >>> 0 ).toString( 36 );
  }

  function Rk() {
    return function( a ) {
      let b = xf( 'https://qa.testbs.net/en/' ); // z.location.href
      let c = b.search.replace( '?', '' );
      let d = sf( c, '_gl', !0 ) || '';
      a.query = Sk( d ) || {};
      let e = vf( b, 'fragment' ).match( Ok( '_gl' ) );
      a.fragment = Sk( e && e[ 3 ] || '' ) || {};
    };
  }

  function Tk( a, b ) {
    let c = Ok( a ).exec( b );
    let d = b;
    if( c ) {
      let e = c[ 2 ];
      let f = c[ 4 ];
      d = c[ 1 ];
      f && ( d = d + e + f );
    }
    return d;
  }
  let Uk = function( a, b ) {
    b || ( b = '_gl' );
    let c = Nk.exec( a );
    if( !c ) return '';
    let d = c[ 1 ];
    let e = Tk( b, ( c[ 2 ] || '' ).slice( 1 ) );
    let f = Tk( b, ( c[ 3 ] || '' ).slice( 1 ) );
    e.length && ( e = '?' + e );
    f.length && ( f = '#' + f );
    return '' + d + e + f;
  };
  let Vk = function( a ) {
    let b = Rk();
    let c = Gk();
    c.data || ( c.data = {
      'query': {},
      'fragment': {}
    }, b( c.data ) );
    let d = {};
    let e = c.data;
    e && ( Ka( d, e.query ), a && Ka( d, e.fragment ) );
    return d;
  };
  var Sk = function( a ) {
    try {
      let b = Wk( a, 3 );
      if( void 0 !== b ) {
        for( var c = {}, d = b ? b.split( '*' ) : [], e = 0; e + 1 < d.length; e += 2 ) {
          let f = d[ e ];
          let g = Xa( d[ e + 1 ] );
          c[ f ] = g;
        }
        $a( 'TAGGING', 6 );
        return c;
      }
    }
    catch ( l ) {
      $a( 'TAGGING',
        8 );
    }
  };

  function Wk( a, b ) {
    if( a ) {
      let c;
      a: {
        for( let d = a, e = 0; e < 3; ++e ) {
          let f = Kk.exec( d );
          if( f ) {
            c = f;
            break a;
          }
          d = decodeURIComponent( d );
        }
        c = void 0;
      }
      let g = c;
      if( g && g[ 1 ] === '1' ) {
        let l = g[ 3 ];
        let m;
        a: {
          for( let n = g[ 2 ], p = 0; p < b; ++p ) {
            if( n === Pk( l, p ) ) {
              m = !0;
              break a;
            }
          } m = !1;
        }
        if( m ) return l;
        $a( 'TAGGING', 7 );
      }
    }
  }

  function Xk( a, b, c, d ) {
    function e( p ) {
      p = Tk( a, p );
      let q = p.charAt( p.length - 1 );
      p && q !== '&' && ( p += '&' );
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    let f = Nk.exec( c );
    if( !f ) return '';
    let g = f[ 1 ];
    let l = f[ 2 ] || '';
    let m = f[ 3 ] || '';
    var n = a + '=' + b;
    d ? m = '#' + e( m.substring( 1 ) ) : l = '?' + e( l.substring( 1 ) );
    return '' + g + l + m;
  }

  function Yk( a, b ) {
    let c = ( a.tagName || '' ).toUpperCase() === 'FORM';
    let d = Jk( b, 1, c );
    let e = Jk( b, 2, c );
    let f = Jk( b, 3, c );
    if( La( d ) ) {
      let g = Qk( d );
      c ? Zk( '_gl', g, a ) : $k( '_gl', g, a, !1 );
    }
    if( !c && La( e ) ) {
      let l = Qk( e );
      $k( '_gl', l, a, !0 );
    }
    for( let m in f ) {
      if( f.hasOwnProperty( m ) ) {
        a: {
          let n = m;
          let p = f[ m ];
          let q = a;
          if( q.tagName ) {
            if( q.tagName.toLowerCase() === 'a' ) {
              $k( n, p, q );
              break a;
            }
            if( q.tagName.toLowerCase() === 'form' ) {
              Zk( n, p, q );
              break a;
            }
          }
          typeof q === 'string' && Xk( n, p, q );
        }
      }
    }
  }

  function $k( a, b, c, d ) {
    if( c.href ) {
      let e = Xk( a, b, c.href, void 0 === d ? !1 : d );
      hb.test( e ) && ( c.href = e );
    }
  }

  function Zk( a, b, c ) {
    if( c && c.action ) {
      let d = ( c.method || '' ).toLowerCase();
      if( d === 'get' ) {
        for( var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++ ) {
          let l = e[ g ];
          if( l.name === a ) {
            l.setAttribute( 'value', b );
            f = !0;
            break;
          }
        }
        if( !f ) {
          let m = C.createElement( 'input' );
          m.setAttribute( 'type', 'hidden' );
          m.setAttribute( 'name', a );
          m.setAttribute( 'value', b );
          c.appendChild( m );
        }
      }
      else if( d === 'post' ) {
        let n = Xk( a, b, c.action );
        hb.test( n ) && ( c.action = n );
      }
    }
  }

  function Ek( a ) {
    try {
      let b;
      a: {
        for( let c = a, d = 100; c && d > 0; ) {
          if( c.href && c.nodeName.match( /^a(?:rea)?$/i ) ) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      let e = b;
      if( e ) {
        let f = e.protocol;
        f !== 'http:' && f !== 'https:' || Yk( e, e.hostname );
      }
    }
    catch ( g ) {}
  }

  function Fk( a ) {
    try {
      if( a.action ) {
        let b = vf( xf( a.action ), 'host' );
        Yk( a, b );
      }
    }
    catch ( c ) {}
  }
  let al = function( a, b, c, d ) {
    Hk();
    Ik( a, b, c === 'fragment' ? 2 : 1, !!d, !1 );
  };
  let bl = function( a, b ) {
    Hk();
    Ik( a, [ uf( z.location, 'host', !0 ) ], b, !0, !0 );
  };
  let cl = function() {
    let a = 'qa.testbs.net'; // C.location.hostname
    let b = Lk.exec( C.referrer );
    if( !b ) return !1;
    let c = b[ 2 ];
    let d = b[ 1 ];
    let e = '';
    if( c ) {
      let f = c.split( '/' );
      let g = f[ 1 ];
      e = g === 's' ? decodeURIComponent( f[ 2 ] ) : decodeURIComponent( g );
    }
    else if( d ) {
      if( d.indexOf( 'xn--' ) === 0 ) return !1;
      e = d.replace( /-/g, '.' ).replace( /\.\./g, '-' );
    }
    let l = a.replace( Mk, '' );
    let m = e.replace( Mk, '' );
    let n;
    if( !( n = l === m ) ) {
      let p = '.' + m;
      n = l.substring( l.length - p.length,
        l.length ) === p;
    }
    return n;
  };
  let dl = function( a, b ) {
    return !1 === a ? !1 : a || b || cl();
  };
  let el = [ '1' ];
  let fl = {};
  let gl = {};
  let il = function( a ) {
    return fl[ hl( a ) ];
  };
  let ml = function( a, b ) {
    b = void 0 === b ? !0 : b;
    let c = hl( a.prefix );
    if( !fl[ c ] ) {
      if( jl( c, a.path, a.domain ) ) {
        let d = gl[ hl( a.prefix ) ];
        kl( a, d ? d.id : void 0, d ? d.ig : void 0 );
      }
      else {
        let e = zf( 'auiddc' );
        if( e ) $a( 'TAGGING', 17 ), fl[ c ] = e;
        else if( b ) {
          let f = hl( a.prefix );
          let g = gj();
          if( ll( f, g, a ) === 0 ) {
            let l = Fb( 'google_tag_data', {});
            l._gcl_au || ( l._gcl_au = g );
          }
          jl( c, a.path, a.domain );
        }
      }
    }
  };

  function kl( a, b, c ) {
    let d = hl( a.prefix );
    let e = fl[ d ];
    if( e ) {
      let f = e.split( '.' );
      if( f.length === 2 ) {
        let g = Number( f[ 1 ] ) || 0;
        if( g ) {
          let l = e;
          b && ( l = e + '.' + b + '.' + ( c || Math.floor( Ha() / 1E3 ) ) );
          ll( d, l, a, 1E3 * g );
        }
      }
    }
  }

  function ll( a, b, c, d ) {
    let e = kj( b, '1', c.domain, c.path );
    let f = Ck( c, d );
    f.jb = 'ad_storage';
    return cj( a, e, f );
  }

  function jl( a, b, c ) {
    let d = jj( a, b, c, el, 'ad_storage' );
    if( !d ) return !1;
    nl( a, d );
    return !0;
  }

  function nl( a, b ) {
    let c = b.split( '.' );
    c.length === 5
      ? ( fl[ a ] = c.slice( 0, 2 ).join( '.' ), gl[ a ] = {
          'id': c.slice( 2, 4 ).join( '.' ),
          'ig': Number( c[ 4 ] ) || 0
        })
      : c.length === 3
        ? gl[ a ] = {
          'id': c.slice( 0, 2 ).join( '.' ),
          'ig': Number( c[ 2 ] ) || 0
        }
        : fl[ a ] = b;
  }

  function hl( a ) {
    return ( a || '_gcl' ) + '_au';
  }

  function ol( a ) {
    Sg()
      ? Wg( function() {
        Qg( 'ad_storage' ) ? a() : Xg( a, 'ad_storage' );
      }, [ 'ad_storage' ] )
      : a();
  }

  function pl( a ) {
    let b = Vk( !0 );
    let c = hl( a.prefix );
    ol( function() {
      let d = b[ c ];
      if( d ) {
        nl( c, d );
        let e = 1E3 * Number( fl[ c ].split( '.' )[ 1 ] );
        if( e ) {
          $a( 'TAGGING', 16 );
          let f = Ck( a, e );
          f.jb = 'ad_storage';
          let g = kj( d, '1', a.domain, a.path );
          cj( c, g, f );
        }
      }
    });
  }

  function ql( a, b, c, d, e ) {
    e = e || {};
    let f = function() {
      let g = {};
      let l = jj( a, e.path, e.domain, el, 'ad_storage' );
      l && ( g[ a ] = l );
      return g;
    };
    ol( function() {
      al( f, b, c, d );
    });
  };
  let rl = function( a ) {
    for( var b = [], c = C.cookie.split( ';' ), d = new RegExp( '^\\s*' + ( a || '_gac' ) + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$' ), e = 0; e < c.length; e++ ) {
      let f = c[ e ].match( d );
      f && b.push({
        'yg': f[ 1 ],
        'value': f[ 2 ],
        'timestamp': Number( f[ 2 ].split( '.' )[ 1 ] ) || 0
      });
    }
    b.sort( function( g, l ) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };

  function sl( a, b ) {
    let c = rl( a );
    let d = {};
    if( !c || !c.length ) return d;
    for( let e = 0; e < c.length; e++ ) {
      let f = c[ e ].value.split( '.' );
      if( !( f[ 0 ] !== '1' || b && f.length < 3 || !b && f.length !== 3 ) && Number( f[ 1 ] ) ) {
        d[ c[ e ].yg ] || ( d[ c[ e ].yg ] = [] );
        let g = {
          'version': f[ 0 ],
          'timestamp': 1E3 * Number( f[ 1 ] ),
          'aa': f[ 2 ]
        };
        b && f.length > 3 && ( g.labels = f.slice( 3 ) );
        d[ c[ e ].yg ].push( g );
      }
    }
    return d;
  };
  let tl = /^\w+$/;
  let ul = /^[\w-]+$/;
  let vl = {
    'aw': '_aw',
    'dc': '_dc',
    'gf': '_gf',
    'ha': '_ha',
    'gp': '_gp',
    'gb': '_gb'
  };
  let wl = function() {
    return yg().h() && Sg() ? Qg( 'ad_storage' ) : !0;
  };
  let xl = function( a, b ) {
    Rg( 'ad_storage' )
      ? wl() ? a() : Xg( a, 'ad_storage' )
      : b
        ? $a( 'TAGGING', 3 )
        : Wg( function() {
          xl( a, !0 );
        }, [ 'ad_storage' ] );
  };
  let zl = function( a ) {
    return yl( a ).map( function( b ) {
      return b.aa;
    });
  };
  var yl = function( a ) {
    let b = [];
    if( !Ri( z ) || !C.cookie ) return b;
    let c = Ui( a, C.cookie, void 0, 'ad_storage' );
    if( !c || c.length == 0 ) return b;
    for( let d = {}, e = 0; e < c.length; d = {
      'Sd': d.Sd
    }, e++ ) {
      let f = Al( c[ e ] );
      if( f != null ) {
        let g = f;
        let l = g.version;
        d.Sd = g.aa;
        let m = g.timestamp;
        let n = g.labels;
        let p = va( b, ( function( q ) {
          return function( r ) {
            return r.aa === q.Sd;
          };
        }( d ) ) );
        p
          ? ( p.timestamp = Math.max( p.timestamp, m ), p.labels = Bl( p.labels, n || [] ) )
          : b.push({
            'version': l,
            'aa': d.Sd,
            'timestamp': m,
            'labels': n
          });
      }
    }
    b.sort( function( q, r ) {
      return r.timestamp - q.timestamp;
    });
    return Cl( b );
  };

  function Bl( a, b ) {
    for( var c = {}, d = [], e = 0; e < a.length; e++ ) c[ a[ e ] ] = !0, d.push( a[ e ] );
    for( let f = 0; f < b.length; f++ ) c[ b[ f ] ] || d.push( b[ f ] );
    return d;
  }

  function Dl( a ) {
    return a && typeof a === 'string' && a.match( tl ) ? a : '_gcl';
  }
  let Fl = function() {
    let a = xf( 'https://qa.testbs.net/en/' ); // z.location.href
    let b = vf( a, 'query', !1, void 0, 'gclid' );
    let c = vf( a, 'query', !1, void 0, 'gclsrc' );
    let d = vf( a, 'query', !1, void 0, 'wbraid' );
    let e = vf( a, 'query', !1, void 0, 'dclid' );
    if( !b || !c || !d ) {
      let f = a.hash.replace( '#', '' );
      b = b || sf( f, 'gclid' );
      c = c || sf( f, 'gclsrc' );
      d = d || sf( f, 'wbraid' );
    }
    return El( b, c, e, d );
  };
  var El = function( a, b, c, d ) {
    let e = {};
    let f = function( g, l ) {
      e[ l ] || ( e[ l ] = [] );
      e[ l ].push( g );
    };
    e.gclid = a;
    e.gclsrc = b;
    e.dclid = c;
    void 0 !== d && ul.test( d ) && ( e.gbraid = d, f( d, 'gb' ) );
    if( void 0 !== a && a.match( ul ) ) {
      switch( b ) {
        case void 0:
          f( a,
            'aw' );
          break;
        case 'aw.ds':
          f( a, 'aw' );
          f( a, 'dc' );
          break;
        case 'ds':
          f( a, 'dc' );
          break;
        case '3p.ds':
          f( a, 'dc' );
          break;
        case 'gf':
          f( a, 'gf' );
          break;
        case 'ha':
          f( a, 'ha' );
      }
    }
    c && f( c, 'dc' );
    return e;
  };
  let Hl = function( a ) {
    let b = Fl();
    xl( function() {
      Gl( b, !1, a );
    });
  };

  function Gl( a, b, c, d, e ) {
    function f( w, x ) {
      let y = Il( w, g );
      y && ( cj( y, x, l ), m = !0 );
    }
    c = c || {};
    e = e || [];
    var g = Dl( c.prefix );
    d = d || Ha();
    var l = Ck( c, d, !0 );
    l.jb = 'ad_storage';
    var m = !1;
    let n = Math.round( d / 1E3 );
    let p = function( w ) {
      let x = [ 'GCL', n, w ];
      e.length > 0 && x.push( e.join( '.' ) );
      return x.join( '.' );
    };
    a.aw && f( 'aw', p( a.aw[ 0 ] ) );
    a.dc && f( 'dc', p( a.dc[ 0 ] ) );
    a.gf && f( 'gf', p( a.gf[ 0 ] ) );
    a.ha && f( 'ha', p( a.ha[ 0 ] ) );
    a.gp && f( 'gp', p( a.gp[ 0 ] ) );
    if( !m && a.gb ) {
      let q = a.gb[ 0 ];
      let r = Il( 'gb', g );
      let t = !1;
      if( !b ) {
        for( let u = yl( r ), v = 0; v < u.length; v++ ) {
          u[ v ].aa === q && u[ v ].labels
                    && u[ v ].labels.length > 0 && ( t = !0 );
        }
      }
      t || f( 'gb', p( q ) );
    }
  }
  let Kl = function( a, b ) {
    let c = Vk( !0 );
    xl( function() {
      for( let d = Dl( b.prefix ), e = 0; e < a.length; ++e ) {
        let f = a[ e ];
        if( void 0 !== vl[ f ] ) {
          let g = Il( f, d );
          let l = c[ g ];
          if( l ) {
            let m = Math.min( Jl( l ), Ha() );
            var n;
            b: {
              let p = m;
              if( Ri( z ) ) {
                for( let q = Ui( g, C.cookie, void 0, 'ad_storage' ), r = 0; r < q.length; ++r ) {
                  if( Jl( q[ r ] ) > p ) {
                    n = !0;
                    break b;
                  }
                }
              } n = !1;
            }
            if( !n ) {
              let t = Ck( b, m, !0 );
              t.jb = 'ad_storage';
              cj( g, l, t );
            }
          }
        }
      }
      Gl( El( c.gclid, c.gclsrc ), !1, b );
    });
  };
  var Il = function( a, b ) {
    let c = vl[ a ];
    if( void 0 !== c ) return b + c;
  };
  var Jl = function( a ) {
    return Ll( a.split( '.' ) ).length !== 0
      ? 1E3 * ( Number( a.split( '.' )[ 1 ] )
                || 0 )
      : 0;
  };

  function Al( a ) {
    let b = Ll( a.split( '.' ) );
    return b.length === 0
      ? null
      : {
          'version': b[ 0 ],
          'aa': b[ 2 ],
          'timestamp': 1E3 * ( Number( b[ 1 ] ) || 0 ),
          'labels': b.slice( 3 )
        };
  }

  function Ll( a ) {
    return a.length < 3 || a[ 0 ] !== 'GCL' && a[ 0 ] !== '1' || !/^\d+$/.test( a[ 1 ] ) || !ul.test( a[ 2 ] ) ? [] : a;
  }
  let Ml = function( a, b, c, d, e ) {
    if( ua( b ) && Ri( z ) ) {
      let f = Dl( e );
      let g = function() {
        for( var l = {}, m = 0; m < a.length; ++m ) {
          let n = Il( a[ m ], f );
          if( n ) {
            let p = Ui( n, C.cookie, void 0, 'ad_storage' );
            p.length && ( l[ n ] = p.sort()[ p.length - 1 ] );
          }
        }
        return l;
      };
      xl( function() {
        al( g, b, c, d );
      });
    }
  };
  var Cl = function( a ) {
    return a.filter( function( b ) {
      return ul.test( b.aa );
    });
  };
  let Nl = function( a, b ) {
    if( Ri( z ) ) {
      for( var c = Dl( b.prefix ), d = {}, e = 0; e < a.length; e++ ) vl[ a[ e ] ] && ( d[ a[ e ] ] = vl[ a[ e ] ] );
      xl( function() {
        k( d, function( f, g ) {
          let l = Ui( c + g, C.cookie, void 0, 'ad_storage' );
          l.sort( function( t,
            u ) {
            return Jl( u ) - Jl( t );
          });
          if( l.length ) {
            let m = l[ 0 ];
            let n = Jl( m );
            let p = Ll( m.split( '.' ) ).length !== 0 ? m.split( '.' ).slice( 3 ) : [];
            let q = {};
            let r;
            r = Ll( m.split( '.' ) ).length !== 0 ? m.split( '.' )[ 2 ] : void 0;
            q[ f ] = [ r ];
            Gl( q, !0, b, n, p );
          }
        });
      });
    }
  };

  function Ol( a, b ) {
    for( let c = 0; c < b.length; ++c ) { if( a[ b[ c ] ] ) return !0; }
    return !1;
  }
  let Pl = function( a ) {
    function b( e, f, g ) {
      g && ( e[ f ] = g );
    }
    if( Sg() ) {
      let c = Fl();
      if( Ol( c, a ) ) {
        let d = {};
        b( d, 'gclid', c.gclid );
        b( d, 'dclid', c.dclid );
        b( d, 'gclsrc', c.gclsrc );
        b( d, 'wbraid', c.gbraid );
        bl( function() {
          return d;
        }, 3 );
        bl( function() {
          let e = {};
          return e._up = '1', e;
        }, 1 );
      }
    }
  };
  let Ql = function( a, b, c, d ) {
    let e = [];
    c = c || {};
    if( !wl() ) return e;
    let f = yl( a );
    if( !f.length ) return e;
    for( let g = 0; g < f.length; g++ ) ( f[ g ].labels || [] ).indexOf( b ) === -1 ? e.push( 0 ) : e.push( 1 );
    if( d ) return e;
    if( e[ 0 ] !== 1 ) {
      let l = f[ 0 ];
      let m = f[ 0 ].timestamp;
      let n = [ l.version, Math.round( m /
                        1E3 ), l.aa ].concat( l.labels || [], [ b ] ).join( '.' );
      let p = Ck( c, m, !0 );
      p.jb = 'ad_storage';
      cj( a, n, p );
    }
    return e;
  };

  function Rl( a, b ) {
    let c = Dl( b );
    let d = Il( a, c );
    if( !d ) return 0;
    for( var e = yl( d ), f = 0, g = 0; g < e.length; g++ ) f = Math.max( f, e[ g ].timestamp );
    return f;
  }

  function Sl( a ) {
    let b = 0;
    let c;
    for( c in a ) { for( let d = a[ c ], e = 0; e < d.length; e++ ) b = Math.max( b, Number( d[ e ].timestamp ) ); }
    return b;
  }
  let Tl = function( a ) {
    let b = Math.max( Rl( 'aw', a ), Sl( wl() ? sl() : {}) );
    return Math.max( Rl( 'gb', a ), Sl( wl() ? sl( '_gac_gb', !0 ) : {}) ) > b;
  };
  let Yl = /[A-Z]+/;
  let Zl = /\s/;
  let $l = function( a, b ) {
    if( h( a ) ) {
      a = Fa( a );
      let c = a.indexOf( '-' );
      if( !( c < 0 ) ) {
        let d = a.substring( 0, c );
        if( Yl.test( d ) ) {
          let e = a.substring( c + 1 );
          let f;
          if( b && P( 64 ) ) {
            let g = function( n ) {
              let p = n.indexOf( '/' );
              return p < 0 ? [ n ] : [ n.substring( 0, p ), n.substring( p + 1 ) ];
            };
            f = g( e );
            if( d === 'DC' && f.length === 2 ) {
              let l = g( f[ 1 ] );
              l.length === 2 && ( f[ 1 ] = l[ 0 ], f.push( l[ 1 ] ) );
            }
          }
          else {
            f = e.split( '/' );
            for( let m = 0; m < f.length; m++ ) { if( !f[ m ] || Zl.test( f[ m ] ) && ( d !== 'AW' || m !== 1 ) ) return; }
          }
          return {
            'id': a,
            'prefix': d,
            'W': d + '-' + f[ 0 ],
            'H': f
          };
        }
      }
    }
  };
  let bm = function( a, b ) {
    for( var c = {}, d = 0; d < a.length; ++d ) {
      let e = $l( a[ d ], b );
      e && ( c[ e.id ] = e );
    }
    am( c );
    let f = [];
    k( c, function( g, l ) {
      f.push( l );
    });
    return f;
  };

  function am( a ) {
    let b = [];
    let c;
    for( c in a ) {
      if( a.hasOwnProperty( c ) ) {
        let d = a[ c ];
        d.prefix === 'AW' && d.H[ 1 ] && b.push( d.W );
      }
    } for( let e = 0; e < b.length; ++e ) delete a[ b[ e ] ];
  };
  let cm = function( a, b, c, d ) {
    let e = Lb();
    let f;
    if( e === 1 ) {
      a: {
        let g = Be; g = g.toLowerCase();
        for( var l = 'https://' + g, m = 'http://' + g, n = 1, p = C.getElementsByTagName( 'script' ), q = 0; q < p.length && q < 100; q++ ) {
          let r = p[ q ].src;
          if( r ) {
            r = r.toLowerCase();
            if( r.indexOf( m ) === 0 ) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf( l ) === 0 && ( n = 2 );
          }
        }
        f = n;
      }
    }
    else f = e;
    return ( f === 2 || d || 'http:' !== 'https:' ? a : b ) + c; // z.location.protocol
  };
  let om = function( a, b, c ) {
    this.target = a;
    this.eventName = b;
    this.h = c;
    this.m = {};
    this.metadata = J( c.eventMetadata || {});
    this.isAborted = !1;
  };
  om.prototype.copyToHitData = function( a, b ) {
    let c = S( this.h, a );
    void 0 !== c ? this.m[ a ] = c : void 0 !== b && ( this.m[ a ] = b );
  };
  let pm = function( a, b, c ) {
    let d = cf( a.target.W );
    return d && d.hasOwnProperty( b ) ? d[ b ] : c;
  };

  function qm( a ) {
    return {
      'getDestinationId': function() {
        return a.target.W;
      },
      'getEventName': function() {
        return a.eventName;
      },
      'setEventName': function( b ) {
        a.eventName = b;
      },
      'getHitData': function( b ) {
        return a.m[ b ];
      },
      'setHitData': function( b, c ) {
        a.m[ b ] = c;
      },
      'setHitDataIfNotDefined': function( b, c ) {
        void 0 === a.m[ b ] && ( a.m[ b ] = c );
      },
      'copyToHitData': function( b, c ) {
        a.copyToHitData( b, c );
      },
      'getMetadata': function( b ) {
        return a.metadata[ b ];
      },
      'setMetadata': function( b, c ) {
        a.metadata[ b ] = c;
      },
      'isAborted': function() {
        return a.isAborted;
      },
      'abort': function() {
        a.isAborted = !0;
      },
      'getFromEventContext': function( b ) {
        return S( a.h, b );
      },
      'km': function() {
        return a;
      },
      'getHitKeys': function() {
        return Object.keys( a.m );
      }
    };
  };

  function Nm( a ) {
    let b = S( a.h, N.g.wb );
    let c = S( a.h, N.g.vb );
    b && !c ? ( a.eventName !== N.g.ia && a.eventName !== N.g.ce && K( 131 ), a.isAborted = !0 ) : !b && c && ( K( 132 ), a.isAborted = !0 );
  };

  function Pm() {
    return 'attribution-reporting';
  }

  function Qm( a ) {
    let b;
    b = void 0 === b ? document : b;
    let c;
    return !( ( c = b.featurePolicy ) == null || !c.allowedFeatures().includes( a ) );
  };
  let Rm = !1;

  function Sm() {
    if( Qm( 'join-ad-interest-group' ) && sa( Db.joinAdInterestGroup ) ) return !0;
    Rm || ( Cj( 'AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9' ), Rm = !0 );
    return Qm( 'join-ad-interest-group' ) && sa( Db.joinAdInterestGroup );
  }

  function Tm( a, b ) {
    let c = void 0;
    try {
      c = C.querySelector( 'iframe[data-tagging-id="' + b + '"]' );
    }
    catch ( e ) {}
    if( c ) {
      let d = Number( c.dataset.loadTime );
      if( d && Ha() - d < 6E4 ) {
        $a( 'TAGGING', 9 );
        return;
      }
    }
    else {
      try {
        if( C.querySelectorAll( 'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]' ).length >= 50 ) {
          $a( 'TAGGING', 10 );
          return;
        }
      }
      catch ( e ) {}
    }
    Nb( a, void 0, {
      'allow': 'join-ad-interest-group'
    }, {
      'taggingId': b,
      'loadTime': Ha()
    }, c );
  }

  function Um() {
    return 'https://td.doubleclick.net';
  };
  let Vm = RegExp( '^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$' );
  let Wm = /^~?[\w-]+(?:\.~?[\w-]+)*$/;
  let Xm = /^\d+\.fls\.doubleclick\.net$/;
  let Ym = /;gac=([^;?]+)/;
  let Zm = /;gacgb=([^;?]+)/;
  let $m = /;gclaw=([^;?]+)/;
  let an = /;gclgb=([^;?]+)/;

  function bn( a, b ) {
    if( Xm.test( 'qa.testbs.net' ) ) { // C.location.host
      let c = 'https://qa.testbs.net/en/'.match( b ); // C.location.href
      return c && c.length == 2 && c[ 1 ].match( Vm ) ? decodeURIComponent( c[ 1 ] ) : '';
    }
    let d = [];
    let e;
    for( e in a ) {
      for( var f = [], g = a[ e ], l = 0; l < g.length; l++ ) f.push( g[ l ].aa );
      d.push( e + ':' + f.join( ',' ) );
    }
    return d.length > 0 ? d.join( ';' ) : '';
  }
  let cn = function( a, b, c ) {
    let d = wl() ? sl( '_gac_gb', !0 ) : {};
    let e = [];
    let f = !1;
    let g;
    for( g in d ) {
      let l = Ql( '_gac_gb_' + g, a, b, c );
      f = f || l.length !== 0 && l.some( function( m ) {
        return m === 1;
      });
      e.push( g + ':' + l.join( ',' ) );
    }
    return {
      'uk': f ? e.join( ';' ) : '',
      'tk': bn( d, Zm )
    };
  };

  function dn( a, b, c ) {
    if( Xm.test( 'qa.testbs.net' ) ) { // C.location.host
      let d = 'https://qa.testbs.net/en/'.match( c ); // C.location.href
      if( d && d.length == 2 && d[ 1 ].match( Wm ) ) {
        return [ {
          'aa': d[ 1 ]
        } ];
      }
    }
    else return yl( ( a || '_gcl' ) + b );
    return [];
  }
  let en = function( a ) {
    return dn( a, '_aw', $m ).map( function( b ) {
      return b.aa;
    }).join( '.' );
  };
  let fn = function( a ) {
    return dn( a, '_gb', an ).map( function( b ) {
      return b.aa;
    }).join( '.' );
  };
  let gn = function( a, b ) {
    let c = Ql( ( b && b.prefix || '_gcl' ) + '_gb', a, b );
    return c.length === 0 || c.every( function( d ) {
      return d === 0;
    })
      ? ''
      : c.join( '.' );
  };
  let hn = function() {
    if( sa( z.__uspapi ) ) {
      let a = '';
      try {
        z.__uspapi( 'getUSPData', 1, function( b, c ) {
          if( c && b ) {
            let d = b.uspString;
            d && RegExp( '^[\\da-zA-Z-]{1,20}$' ).test( d ) && ( a = d );
          }
        });
      }
      catch ( b ) {}
      return a;
    }
  };
  let T = {
    'C': {
      'Cg': 'ads_conversion_hit',
      'jf': 'container_execute_start',
      'Fg': 'container_setup_end',
      'kf': 'container_setup_start',
      'Eg': 'container_execute_end',
      'Gg': 'container_yield_end',
      'lf': 'container_yield_start',
      'Gh': 'event_execute_end',
      'Fh': 'event_evaluation_end',
      'If': 'event_evaluation_start',
      'Hh': 'event_setup_end',
      'od': 'event_setup_start',
      'Ih': 'ga4_conversion_hit',
      'rd': 'page_load',
      'Yl': 'pageview',
      'Bb': 'snippet_load',
      'Sh': 'tag_callback_error',
      'Th': 'tag_callback_failure',
      'Uh': 'tag_callback_success',
      'Vh': 'tag_execute_end',
      'wc': 'tag_execute_start'
    }
  };
  let Un = !1;
  let Vn = 'L S Y E EC TC HTC'.split( ' ' );
  let Wn = [ 'S', 'V', 'E' ];
  let Xn = [ 'TS', 'TI', 'TE' ];
  let Ao = function( a ) {};
  let Bo = function( a ) {};
  let Co = function() {};
  let Do = function() {};
  let Eo = function() {};
  let Fo = function( a, b ) {};
  let Go = function( a, b ) {};
  let Ho = function( a, b ) {};
  let Io = function( a, b ) {};
  let Yn = function( a, b, c, d, e, f ) {
    let g;
    g = void 0 === g ? !1 : g;
    let l = {};
    return l;
  };
  let Zn = function( a ) {
    let b = !1;
    return b;
  };
  let $n = function( a, b ) {};
  let Jo = function() {
    let a = {};
    return a;
  };
  let to = function( a ) {
    a = void 0 === a ? !0 : a;
    let b = {};
    return b;
  };
  let Ko = function() {};
  let Lo = function( a,
    b ) {};
  let Mo = function( a, b, c ) {};
  let No = function( a, b ) {
    let c; let d = z.GooglebQhCsO;
    d || ( d = {}, z.GooglebQhCsO = d );
    c = d;
    if( c[ a ] ) return !1;
    c[ a ] = [];
    c[ a ][ 0 ] = b;
    return !0;
  };
  let Oo = function( a, b, c ) {
    let d = xj( a, 'fmt' );
    if( b ) {
      let e = xj( a, 'random' );
      let f = xj( a, 'label' ) || '';
      if( !e ) return !1;
      let g = hk( decodeURIComponent( f.replace( /\+/g, ' ' ) ) + ':' + decodeURIComponent( e.replace( /\+/g, ' ' ) ) );
      if( !No( g, b ) ) return !1;
    }
    d && d != 4 && ( a = zj( a, 'rfmt', d ) );
    let l = zj( a, 'fmt', 4 );
    Kb( l, function() {
      z.google_noFurtherRedirects && b && b.call && ( z.google_noFurtherRedirects = null, b() );
    }, void 0, c, C.getElementsByTagName( 'script' )[ 0 ].parentElement || void 0 );
    return !0;
  };
  let dp = function() {
    this.h = {};
  };
  let ep = function( a, b, c ) {
    c != null && ( a.h[ b ] = c );
  };
  let fp = function( a ) {
    return Object.keys( a.h ).map( function( b ) {
      return encodeURIComponent( b ) + '=' + encodeURIComponent( a.h[ b ] );
    }).join( '&' );
  };
  let hp = function( a, b, c, d ) {};

  function jp( a, b ) {
    if( a ) {
      let c = '' + a;
      c.indexOf( 'http://' ) !== 0 && c.indexOf( 'https://' ) !== 0 && ( c = 'https://' + c );
      c[ c.length - 1 ] === '/' && ( c = c.substring( 0, c.length - 1 ) );
      return xf( '' + c + b ).href;
    }
  }

  function kp() {
    return !!me.Ke && me.Ke.split( '@@' ).join( '' ) !== 'SGTM_TOKEN';
  }

  function lp( a ) {
    for( let b = mp(), c = fa( b ), d = c.next(); !d.done; d = c.next() ) {
      let e = S( a, d.value );
      if( e ) return e;
    }
  }

  function mp() {
    let a = [];
    P( 58 ) && a.push( N.g.Ae );
    a.push( N.g.qc );
    return a;
  };
  let op = function( a, b, c, d ) {
    if( !np() && !Kh( a ) ) {
      let e = '?id=' + encodeURIComponent( a ) + '&l=' + me.da;
      let f = a.indexOf( 'GTM-' ) === 0;
      f || ( e += '&cx=c' );
      P( 85 ) && ( e += '&gtm=' + oj() );
      let g = kp();
      g && ( e += '&sign=' + me.Ke );
      let l = c ? '/gtag/js' : '/gtm.js';
      let m = ve || xe ? jp( b, l + e ) : void 0;
      if( !m ) {
        let n = me.be + l;
        g && Eb && f && ( n = Eb.replace( /^(?:https?:\/\/)?/i, '' ).split( /[?#]/ )[ 0 ] );
        m = cm( 'https://', 'http://', n + e );
      }
      let p = a;
      d.siloed && ( Mh({
        'ctid': p,
        'isDestination': !1
      }), p = xh( p ) );
      let q = p;
      let r = Lh();
      qh().container[ q ] = {
        'state': 1,
        'context': d,
        'parent': r
      };
      rh({
        'ctid': q,
        'isDestination': !1
      });
      Kb( m );
    }
  };
  let pp = function( a, b, c ) {
    let d;
    if( d = !np() ) {
      let e = qh().destination[ a ];
      d = !( e && e.state );
    }
    if( d ) {
      if( Nh() ) {
        qh().destination[ a ] = {
          'state': 0,
          'transportUrl': b,
          'context': c,
          'parent': Lh()
        }, rh({
          'ctid': a,
          'isDestination': !0
        }), K( 91 );
      }
      else {
        let f = '/gtag/destination?id=' + encodeURIComponent( a ) + '&l=' + me.da + '&cx=c';
        P( 85 ) && ( f += '&gtm=' + oj() );
        kp() && ( f += '&sign=' + me.Ke );
        let g = ve || xe ? jp( b, f ) : void 0;
        g || ( g = cm( 'https://', 'http://', me.be + f ) );
        let l = a;
        c.siloed && ( Mh({
          'ctid': l,
          'isDestination': !0
        }), l = xh( l ) );
        qh().destination[ l ] = {
          'state': 1,
          'context': c,
          'parent': Lh()
        };
        rh({
          'ctid': l,
          'isDestination': !0
        });
        Kb( g );
      }
    }
  };

  function np() {
    if( mj() ) {
      return !0;
    }
    return !1;
  };
  let rp = function( a ) {
    let b = Dh();
    qp( b ).event && qp( b ).event.push( a );
  };
  let sp = function() {
    let a = qp( Dh() );
    return a.event ? a.event : [];
  };

  function qp( a ) {
    let b; let c = ne.r;
    c || ( c = {
      'container': {}
    }, ne.r = c );
    b = c;
    let d = b.container[ a ];
    d || ( d = {
      'entity': [],
      'event': []
    }, b.container[ a ] = d );
    return d;
  };
  let tp = new RegExp( /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/ );
  let up = {
    'cl': [ 'ecl' ],
    'customPixels': [ 'nonGooglePixels' ],
    'ecl': [ 'cl' ],
    'ehl': [ 'hl' ],
    'hl': [ 'ehl' ],
    'html': [ 'customScripts', 'customPixels', 'nonGooglePixels', 'nonGoogleScripts', 'nonGoogleIframes' ],
    'customScripts': [ 'html', 'customPixels', 'nonGooglePixels', 'nonGoogleScripts', 'nonGoogleIframes' ],
    'nonGooglePixels': [],
    'nonGoogleScripts': [ 'nonGooglePixels' ],
    'nonGoogleIframes': [ 'nonGooglePixels' ]
  };
  let vp = {
    'cl': [ 'ecl' ],
    'customPixels': [ 'customScripts', 'html' ],
    'ecl': [ 'cl' ],
    'ehl': [ 'hl' ],
    'hl': [ 'ehl' ],
    'html': [ 'customScripts' ],
    'customScripts': [ 'html' ],
    'nonGooglePixels': [ 'customPixels', 'customScripts', 'html', 'nonGoogleScripts', 'nonGoogleIframes' ],
    'nonGoogleScripts': [ 'customScripts', 'html' ],
    'nonGoogleIframes': [ 'customScripts', 'html', 'nonGoogleScripts' ]
  };
  let wp = 'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split( ' ' );
  let zp = function( a ) {
    let b = Ne( 'gtm.allowlist' ) || Ne( 'gtm.whitelist' );
    b && K( 9 );
    wh()
      ? b = 'e c cid gct rep ogt_cons_disc ccd_ads_first ccd_ads_last ccd_fl_first ccd_fl_last ccd_ga_first ccd_ga_last ccd_mc_first ccd_mc_last'.split( ' ' )
      : te && ( b = [ 'google', 'gtagfl', 'lcl', 'zone' ] );
    xp() && ( te ? K( 116 ) : K( 117 ), yp && ( b = [], window.console && window.console.log && window.console.log( 'GTM blocked. See go/13687728.' ) ) );
    let c = b && Ma( Ea( b ), up );
    let d = Ne( 'gtm.blocklist' ) || Ne( 'gtm.blacklist' );
    d || ( d = Ne( 'tagTypeBlacklist' ) ) && K( 3 );
    d ? K( 8 ) : d = [];
    xp() && ( d = Ea( d ), d.push( 'nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts' ) );
    Ea( d ).indexOf( 'google' ) >= 0 && K( 2 );
    let e = d && Ma( Ea( d ), vp );
    let f = {};
    return function( g ) {
      let l = g && g[ gc.Ab ];
      if( !l || typeof l !== 'string' ) return !0;
      l = l.replace( /^_*/,
        '' );
      if( void 0 !== f[ l ] ) return f[ l ];
      let m = Fe[ l ] || [];
      let n = a( l, m );
      let p;
      p = qp( Dh() ).entity;
      for( let q = 0; q < p.length; q++ ) {
        try {
          n = n && p[ q ]( l, m );
        }
        catch ( y ) {
          n = !1;
        }
      }
      if( b ) {
        let r;
        if( r = n ) {
          a: {
            if( c.indexOf( l ) < 0 ) {
              if( m && m.length > 0 ) {
                for( let t = 0; t < m.length; t++ ) {
                  if( c.indexOf( m[ t ] ) < 0 ) {
                    K( 11 );
                    r = !1;
                    break a;
                  }
                }
              }
              else {
                r = !1;
                break a;
              }
            }
            r = !0;
          }
        }
        n = r;
      }
      let u = !1;
      if( d ) {
        let v = e.indexOf( l ) >= 0;
        if( v ) u = v;
        else {
          let w = za( e, m || [] );
          w && K( 10 );
          u = w;
        }
      }
      let x = !n || u;
      x || !( m.indexOf( 'sandboxedScripts' ) >= 0 ) || c && c.indexOf( 'sandboxedScripts' ) !== -1 || ( x = za( e, wp ) );
      return f[ l ] = x;
    };
  };
  var yp = !1;
  var xp = function() {
    return tp.test( z.location && 'qa.testbs.net' ); // z.location.hostname
  };
  let Ap = '';
  let Bp = [];

  function Cp( a ) {
    let b = '';
    Ap && ( b = '&dl=' + encodeURIComponent( Ap ) );
    Bp.length > 0 && ( b += '&tdp=' + Bp.join( '.' ) );
    a.kb && ( Ap = '', Bp.length = 0, b && a.Bi() );
    return b;
  };
  let Dp = [];

  function Ep( a ) {
    if( !Dp.length ) return '';
    let b = '&tdc=' + Dp.join( '!' );
    a.kb && ( a.Bi(), Dp.length = 0 );
    return b;
  };
  let Fp = {
    'initialized': 11,
    'complete': 12,
    'interactive': 13
  };
  let Gp = {};
  let Hp = Object.freeze( ( Gp[ N.g.Ma ] = !0, Gp ) );
  let Ip = C.location.search.indexOf( '?gtm_diagnostics=' ) >= 0 || C.location.search.indexOf( '&gtm_diagnostics=' ) >= 0;
  let Kp = function( a, b, c ) {
    if( Wh && a === 'config' && !( $l( b ).H.length > 1 ) ) {
      let d; let e = Fb( 'google_tag_data', {});
      e.td || ( e.td = {});
      d = e.td;
      let f = J( c.F );
      J( c.h, f );
      let g = [];
      let l;
      for( l in d ) {
        let m = Jp( d[ l ], f );
        m.length && ( Ip && console.log( m ), g.push( l ) );
      }
      g.length && ( g.length && Wh && Dp.push( b + '*' + g.join( '.' ) ), $a( 'TAGGING', Fp[ C.readyState ]
                    || 14 ) );
      d[ b ] = f;
    }
  };

  function Lp( a, b ) {
    let c = {};
    let d;
    for( d in b ) b.hasOwnProperty( d ) && ( c[ d ] = !0 );
    for( let e in a ) a.hasOwnProperty( e ) && ( c[ e ] = !0 );
    return c;
  }

  function Jp( a, b, c, d ) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? '' : d;
    if( a === b ) return [];
    let e = function( q, r ) {
      let t = r[ q ];
      return void 0 === t ? Hp[ q ] : t;
    };
    let f;
    for( f in Lp( a, b ) ) {
      let g = ( d ? d + '.' : '' ) + f;
      let l = e( f, a );
      let m = e( f, b );
      let n = ac( l ) === 'object' || ac( l ) === 'array';
      let p = ac( m ) === 'object' || ac( m ) === 'array';
      if( n && p ) Jp( l, m, c, g );
      else if( n || p || l !== m ) c[ g ] = !0;
    }
    return Object.keys( c );
  };
  let Mp = !1;
  let Np = 0;
  let Op = [];

  function Pp( a ) {
    if( !Mp ) {
      let b = C.createEventObject;
      let c = C.readyState == 'complete';
      let d = C.readyState == 'interactive';
      if( !a || a.type != 'readystatechange' || c || !b && d ) {
        Mp = !0;
        for( let e = 0; e < Op.length; e++ ) E( Op[ e ] );
      }
      Op.push = function() {
        for( let f = 0; f < arguments.length; f++ ) E( arguments[ f ] );
        return 0;
      };
    }
  }

  function Qp() {
    if( !Mp && Np < 140 ) {
      Np++;
      try {
        C.documentElement.doScroll( 'left' ), Pp();
      }
      catch ( a ) {
        z.setTimeout( Qp, 50 );
      }
    }
  }
  let Rp = function() {
    Mp = !1;
    Np = 0;
    if( C.readyState == 'interactive' && !C.createEventObject || C.readyState == 'complete' ) Pp();
    else {
      Pb( C, 'DOMContentLoaded', Pp );
      Pb( C, 'readystatechange', Pp );
      if( C.createEventObject && C.documentElement.doScroll ) {
        let a = !0;
        try {
          a = !z.frameElement;
        }
        catch ( b ) {}
        a && Qp();
      }
      Pb( z, 'load', Pp );
    }
  };
  let Sp = function( a ) {
    Mp ? a() : Op.push( a );
  };
  let Tp = function( a, b ) {
    return {
      'entityType': 1,
      'indexInOriginContainer': a,
      'nameInOriginContainer': b,
      'originContainerId': Ch()
    };
  };

  function Up( a, b ) {
    if( data.entities && data.entities[ a ] ) return data.entities[ a ][ b ];
  };
  let Wp = function( a, b ) {
    this.h = !1;
    this.F = [];
    this.I = {
      'tags': []
    };
    this.U = !1;
    this.m = this.B = 0;
    Vp( this, a, b );
  };
  let Xp = function( a, b, c, d ) {
    if( qe.hasOwnProperty( b ) || b === '__zone' ) return -1;
    let e = {};
    G( d ) && ( e = J( d, e ) );
    e.id = c;
    e.status = 'timeout';
    return a.I.tags.push( e ) - 1;
  };
  let Yp = function( a, b, c, d ) {
    let e = a.I.tags[ b ];
    e && ( e.status = c, e.executionTime = d );
  };
  let Zp = function( a ) {
    if( !a.h ) {
      for( let b = a.F, c = 0; c < b.length; c++ ) b[ c ]();
      a.h = !0;
      a.F.length = 0;
    }
  };
  var Vp = function( a, b, c ) {
    void 0 !== b && $p( a, b );
    c && z.setTimeout( function() {
      return Zp( a );
    }, Number( c ) );
  };
  var $p = function( a,
    b ) {
    let c = Ja( function() {
      return E( function() {
        b( Ch(), a.I );
      });
    });
    a.h ? c() : a.F.push( c );
  };
  let aq = function( a ) {
    a.B++;
    return Ja( function() {
      a.m++;
      a.U && a.m >= a.B && Zp( a );
    });
  };
  let bq = function( a ) {
    a.U = !0;
    a.m >= a.B && Zp( a );
  };
  let cq = {};
  let eq = function() {
    return z[ dq() ];
  };
  let fq = !1;
  let gq = function( a ) {
    z.GoogleAnalyticsObject || ( z.GoogleAnalyticsObject = a || 'ga' );
    let b = z.GoogleAnalyticsObject;
    if( z[ b ] ) z.hasOwnProperty( b );
    else {
      let c = function() {
        c.q = c.q || [];
        c.q.push( arguments );
      };
      c.l = Number( Ga() );
      z[ b ] = c;
    }
    return z[ b ];
  };
  let hq = function( a ) {
    if( Sg() ) {
      let b = eq();
      b( a + 'require', 'linker' );
      b( a + 'linker:passthrough', !0 );
    }
  };

  function dq() {
    return z.GoogleAnalyticsObject || 'ga';
  }
  let iq = function( a ) {
    if( cq[ a ] || fq ) return;
    let b = z[ dq() ];
    sa( b ) && ( b( 'provide', a, ra ), cq[ a ] = !0 );
  };
  let jq = function( a, b ) {
    return function() {
      let c = eq();
      let d = c && c.getByName && c.getByName( a );
      if( d ) {
        let e = d.get( 'sendHitTask' );
        d.set( 'sendHitTask', function( f ) {
          let g = f.get( 'hitPayload' );
          let l = f.get( 'hitCallback' );
          let m = g.indexOf( '&tid=' + b ) < 0;
          m && ( f.set( 'hitPayload', g.replace( /&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b ), !0 ), f.set( 'hitCallback', void 0, !0 ) );
          e( f );
          m && ( f.set( 'hitPayload',
            g, !0 ), f.set( 'hitCallback', l, !0 ), f.set( '_x_19', void 0, !0 ), e( f ) );
        });
      }
    };
  };
  let Mq = {};
  let Nq = {};

  function Oq( a, b ) {
    if( Wh ) {
      let c;
      c = b.match( /^(gtm|gtag)\./ ) ? encodeURIComponent( b ) : '*';
      Mq[ a ] = '&e=' + c + '&eid=' + a;
      fi( a );
    }
  }

  function Pq( a ) {
    let b = a.eventId;
    let c = a.kb;
    if( !Mq[ b ] ) return '';
    let d = Nq[ b ] ? '' : '&es=1';
    d += Mq[ b ];
    c && ( Nq[ b ] = !0 );
    return d;
  };
  let Qq = {};

  function Rq( a, b ) {
    Wh && ( Qq[ a ] = Qq[ a ] || {}, Qq[ a ][ b ] = ( Qq[ a ][ b ] || 0 ) + 1 );
  }

  function Sq( a ) {
    let b = a.eventId;
    let c = a.kb;
    let d = Qq[ b ] || {};
    let e = [];
    let f;
    for( f in d ) d.hasOwnProperty( f ) && e.push( '' + f + d[ f ] );
    c && delete Qq[ b ];
    return e.length ? '&md=' + e.join( '.' ) : '';
  };
  let Tq = {};
  let Uq = {
    'aev': '1',
    'c': '2',
    'jsm': '3',
    'v': '4',
    'j': '5',
    'smm': '6',
    'rmm': '7',
    'input': '8'
  };

  function Vq( a, b, c ) {
    if( Wh ) {
      Tq[ a ] = Tq[ a ] || [];
      let d = Uq[ b ] || '0';
      let e;
      e = c instanceof z.Element ? '1' : c instanceof z.Event ? '2' : c instanceof z.RegExp ? '3' : c === z ? '4' : c === C ? '5' : c instanceof z.Promise ? '6' : c instanceof z.Storage ? '7' : c instanceof z.Date ? '8' : c instanceof z.History ? '9' : c instanceof z.Performance ? 'a' : c === z.crypto ? 'b' : c instanceof z.Location ? 'c' : c instanceof z.Navigator ? 'd' : typeof c !== 'object' || G( c ) ? '0' : 'e';
      Tq[ a ].push( '' + d + e );
    }
  }

  function Wq( a ) {
    let b = a.eventId;
    let c = Tq[ b ] || [];
    if( !c.length ) return '';
    a.kb && delete Tq[ b ];
    return '&pcr=' + c.join( '.' );
  };
  let Xq = {};
  let Yq = {};

  function Zq( a, b, c ) {
    if( Wh && b ) {
      let d = oh( b );
      Xq[ a ] = Xq[ a ] || [];
      Xq[ a ].push( c + d );
      let e = b.function;
      if( !e ) throw Error( 'Error: No function name given for function call.' );
      let f = ( Jc[ e ] ? '1' : '2' ) + d;
      Yq[ a ] = Yq[ a ] || [];
      Yq[ a ].push( f );
      fi( a );
    }
  }

  function $q( a ) {
    let b = a.eventId;
    let c = a.kb;
    let d = '';
    let e = Xq[ b ] || [];
    e.length && ( d += '&tr=' + e.join( '.' ) );
    let f = Yq[ b ] || [];
    f.length && ( d += '&ti=' + f.join( '.' ) );
    c && ( delete Xq[ b ], delete Yq[ b ] );
    return d;
  };

  function ar( a, b, c, d ) {
    let e = Hc[ a ];
    let f = br( a, b, c, d );
    if( !f ) return null;
    let g = Tc( e[ gc.Rh ], c, [] );
    if( g && g.length ) {
      let l = g[ 0 ];
      f = ar( l.index, {
        'M': f,
        'O': l.hi === 1 ? b.terminate : f,
        'terminate': b.terminate
      }, c, d );
    }
    return f;
  }

  function br( a, b, c, d ) {
    function e() {
      if( f[ gc.Pj ] ) l();
      else {
        let w = Uc( f, c, [] );
        let x = w[ gc.Mi ];
        if( x != null ) {
          for( let y = 0; y < x.length; y++ ) {
            if( !Qg( x[ y ] ) ) {
              l();
              return;
            }
          }
        } let A = Xp( c.Kb, String( f[ gc.Ab ] ), Number( f[ gc.xd ] ), w[ gc.Qj ] );
        let B = !1;
        w.vtp_gtmOnSuccess = function() {
          if( !B ) {
            B = !0;
            let I = Ha() - H;
            Zq( c.id, Hc[ a ], '5' );
            Yp( c.Kb, A, 'success', I );
            P( 32 ) && Mo( c, f, T.C.Uh );
            g();
          }
        };
        w.vtp_gtmOnFailure = function() {
          if( !B ) {
            B = !0;
            let I = Ha() - H;
            Zq( c.id, Hc[ a ], '6' );
            Yp( c.Kb, A, 'failure', I );
            P( 32 ) && Mo( c, f, T.C.Th );
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && ( w.vtp_gtmPriorityId = c.priorityId );
        Zq( c.id, f, '1' );
        let D = function() {
          Ue( 3 );
          let I = Ha() - H;
          Zq( c.id, f, '7' );
          Yp( c.Kb, A, 'exception', I );
          P( 32 ) && Mo( c, f, T.C.Sh );
          B || ( B = !0, l() );
        };
        P( 32 ) && Lo( c, f );
        var H = Ha();
        try {
          Sc( w, {
            'event': c,
            'index': a,
            'type': 1
          });
        }
        catch ( I ) {
          D( I );
        }
        P( 32 ) && Mo( c, f, T.C.Vh );
      }
    }
    var f = Hc[ a ];
    var g = b.M;
    var l = b.O;
    let m = b.terminate;
    if( c.cg( f ) ) return null;
    let n = Tc( f[ gc.Wh ], c, [] );
    if( n && n.length ) {
      let p = n[ 0 ];
      let q = ar( p.index, {
        'M': g,
        'O': l,
        'terminate': m
      }, c, d );
      if( !q ) return null;
      g = q;
      l = p.hi === 2 ? m : q;
    }
    if( f[ gc.Nh ] || f[ gc.Sj ] ) {
      let r = f[ gc.Nh ]
        ? Ic
        : c.Gl;
      let t = g;
      let u = l;
      if( !r[ a ] ) {
        e = Ja( e );
        let v = cr( a, r, e );
        g = v.M;
        l = v.O;
      }
      return function() {
        r[ a ]( t, u );
      };
    }
    return e;
  }

  function cr( a, b, c ) {
    let d = [];
    let e = [];
    b[ a ] = dr( d, e, c );
    return {
      'M': function() {
        b[ a ] = er;
        for( let f = 0; f < d.length; f++ ) d[ f ]();
      },
      'O': function() {
        b[ a ] = fr;
        for( let f = 0; f < e.length; f++ ) e[ f ]();
      }
    };
  }

  function dr( a, b, c ) {
    return function( d, e ) {
      a.push( d );
      b.push( e );
      c();
    };
  }

  function er( a ) {
    a();
  }

  function fr( a, b ) {
    b();
  };
  let hr = function( a, b ) {
    return arguments.length === 1 ? gr( 'config', a ) : gr( 'config', a, b );
  };
  let ir = function( a, b, c ) {
    c = c || {};
    c[ N.g.Jb ] = a;
    return gr( 'event', b, c );
  };

  function gr( a ) {
    return arguments;
  }
  let jr = function() {
    this.h = [];
    this.m = [];
  };
  jr.prototype.enqueue = function( a, b, c ) {
    let d = this.h.length + 1;
    a[ 'gtm.uniqueEventId' ] = b;
    a[ 'gtm.priorityId' ] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    let e = {
      'message': a,
      'notBeforeEventId': b,
      'priorityId': d,
      'messageContext': c
    };
    this.h.push( e );
    for( let f = 0; f < this.m.length; f++ ) {
      try {
        this.m[ f ]( e );
      }
      catch ( g ) {}
    }
  };
  jr.prototype.listen = function( a ) {
    this.m.push( a );
  };
  jr.prototype.get = function() {
    for( var a = {}, b = 0; b < this.h.length; b++ ) {
      let c = this.h[ b ];
      let d = a[ c.notBeforeEventId ];
      d || ( d = [], a[ c.notBeforeEventId ] = d );
      d.push( c );
    }
    return a;
  };
  jr.prototype.prune = function( a ) {
    for( var b = [], c = [], d = 0; d < this.h.length; d++ ) {
      let e = this.h[ d ];
      e.notBeforeEventId === a ? b.push( e ) : c.push( e );
    }
    this.h = c;
    return b;
  };
  let lr = function( a, b, c ) {
    kr().enqueue( a, b, c );
  };
  let nr = function() {
    let a = mr;
    kr().listen( a );
  };

  function kr() {
    let a = ne.mb;
    a || ( a = new jr(), ne.mb = a );
    return a;
  }
  let vr = function( a ) {
    let b = ne.zones;
    return b
      ? b.getIsAllowedFn( yh(), a )
      : function() {
        return !0;
      };
  };
  let wr = function( a ) {
    let b = ne.zones;
    return b ? b.isActive( yh(), a ) : !0;
  };
  let xr = function() {
    let a = ne.zones;
    a && a.unregisterChild( yh() );
  };
  let yr = function() {
    rp( function( a, b ) {
      return wr( b );
    });
  };
  let Br = function( a, b ) {
    for( var c = [], d = 0; d < Hc.length; d++ ) {
      if( a[ d ] ) {
        let e = Hc[ d ];
        let f = aq( b.Kb );
        try {
          let g = ar( d, {
            'M': f,
            'O': f,
            'terminate': f
          }, b, d );
          if( g ) {
            let l = e.function;
            if( !l ) throw 'Error: No function name given for function call.';
            let m = Jc[ l ];
            c.push({
              'Ei': d,
              'ui': ( m ? m.priorityOverride || 0 : 0 ) || Up( e[ gc.Ab ], 1 ) || 0,
              'execute': g
            });
          }
          else zr( d, b ), f();
        }
        catch ( p ) {
          f();
        }
      }
    } c.sort( Ar );
    for( let n = 0; n < c.length; n++ ) c[ n ].execute();
    return c.length > 0;
  };

  function Ar( a, b ) {
    let c; let d = b.ui;
    let e = a.ui;
    c = d > e ? 1 : d < e ? -1 : 0;
    let f;
    if( c !== 0 ) f = c;
    else {
      let g = a.Ei;
      let l = b.Ei;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }

  function zr( a, b ) {
    if( Wh ) {
      let c = function( d ) {
        let e = b.cg( Hc[ d ] ) ? '3' : '4';
        let f = Tc( Hc[ d ][ gc.Rh ], b, [] );
        f && f.length && c( f[ 0 ].index );
        Zq( b.id, Hc[ d ], e );
        let g = Tc( Hc[ d ][ gc.Wh ], b, [] );
        g && g.length && c( g[ 0 ].index );
      };
      c( a );
    }
  }
  let Er = !1;
  let Cr;
  let Jr = function( a ) {
    let b = a[ 'gtm.uniqueEventId' ];
    let c = a[ 'gtm.priorityId' ];
    let d = a.event;
    P( 32 ) && Fo( b, d );
    if( d === 'gtm.js' ) {
      if( Er ) return !1;
      Er = !0;
    }
    let e; let f = !1;
    let g = wr( b );
    if( P( 73 ) ) { for( let l = sp(), m = 0; g && m < l.length; m++ ) g = ( 0, l[ m ] )( d, b ); }
    if( g ) e = vr( b );
    else {
      if( d !== 'gtm.js' && d !== 'gtm.init' && d !== 'gtm.init_consent' ) return !1;
      f = !0;
      e = vr( Number.MAX_SAFE_INTEGER );
    }
    Oq( b, d );
    let n = a.eventCallback;
    let p = a.eventTimeout;
    let q = {
      'id': b,
      'priorityId': c,
      'name': d,
      'cg': zp( e ),
      'Gl': [],
      'ni': function() {
        K( 6 );
        Ue( 0 );
      },
      'ai': Fr(),
      'bi': Gr( b ),
      'Kb': new Wp( function() {
        if( P( 32 ) ) {}
        n && n.apply( n, [].slice.call( arguments, 0 ) );
      }, p )
    };
    P( 63 ) && ( q.yi = Rq );
    P( 32 ) && Ho( q.id, q.name );
    let r = Yc( q );
    P( 32 ) && Io( q.id, q.name );
    f && ( r = Hr( r ) );
    P( 32 ) && Go( b, d );
    let t = Br( r, q );
    let u = !1;
    bq( q.Kb );
    d !== 'gtm.js' && d !== 'gtm.sync' || iq( Ch() );
    return Ir( r, t ) || u;
  };

  function Gr( a ) {
    return function( b ) {
      cc( b ) || Vq( a, 'input', b );
    };
  }

  function Fr() {
    let a = {};
    a.event = Re( 'event', 1 );
    a.ecommerce = Re( 'ecommerce', 1 );
    a.gtm = Re( 'gtm' );
    a.eventModel = Re( 'eventModel' );
    return a;
  }

  function Hr( a ) {
    for( var b = [], c = 0; c < a.length; c++ ) {
      if( a[ c ] ) {
        let d = String( Hc[ c ][ gc.Ab ] );
        if( pe[ d ] || void 0 !== Hc[ c ][ gc.Tj ] || Ge[ d ] || Up( d, 2 ) ) b[ c ] = !0;
      }
    } return b;
  }

  function Ir( a, b ) {
    if( !b ) return b;
    for( let c = 0; c < a.length; c++ ) { if( a[ c ] && Hc[ c ] && !qe[ String( Hc[ c ][ gc.Ab ] ) ] ) return !0; }
    return !1;
  }
  let Kr = {};

  function Lr( a, b, c ) {
    Wh && void 0 !== a && ( Kr[ a ] = Kr[ a ] || [], Kr[ a ].push( c + b ), fi( a ) );
  }

  function Mr( a ) {
    let b = a.eventId;
    let c = a.kb;
    let d = '';
    let e = Kr[ b ] || [];
    e.length && ( d += '&epr=' + e.join( '.' ) );
    c && delete Kr[ b ];
    return d;
  };
  let Or = function( a, b, c, d ) {
    let e = $l( c, d.isGtmEvent );
    e && Nr.push( 'event', [ b, a ], e, d );
  };
  let Pr = function( a, b, c, d ) {
    let e = $l( c, d.isGtmEvent );
    e && Nr.push( 'get', [ a, b ], e, d );
  };
  let Qr = function() {
    this.status = 1;
    this.F = {};
    this.h = {};
    this.I = {};
    this.U = null;
    this.B = {};
    this.m = !1;
  };
  let Rr = function( a, b, c, d ) {
    let e = Ha();
    this.type = a;
    this.B = e;
    this.h = b;
    this.m = c;
    this.messageContext = d;
  };
  let Sr = function() {
    this.m = {};
    this.B = {};
    this.h = [];
  };
  let Tr = function( a, b ) {
    let c = b.W;
    return a.m[ c ] = a.m[ c ] || new Qr();
  };
  let Ur = function( a, b, c, d ) {
    if( d.h ) {
      let e = Tr( a, d.h );
      let f = e.U;
      if( f ) {
        let g =
                        J( c );
        let l = J( e.F[ d.h.id ] );
        let m = J( e.B );
        let n = J( e.h );
        let p = J( a.B );
        let q = {};
        if( Wh ) {
          try {
            q = J( Ke );
          }
          catch ( v ) {
            K( 72 );
          }
        }
        let r = d.h.prefix;
        let t = function( v ) {
          Lr( d.messageContext.eventId, r, v );
          let w = g[ N.g.kc ];
          w && E( w );
        };
        let u = zi( yi( xi( wi( vi( ti( si( ui( ri( qi( pi( new oi( d.messageContext.eventId, d.messageContext.priorityId ), g ), l ), m ), n ), p ), q ), d.messageContext.eventMetadata ), function() {
          if( t ) {
            let v = t;
            t = void 0;
            v( '2' );
          }
        }), function() {
          if( t ) {
            let v = t;
            t = void 0;
            v( '3' );
          }
        }), !!d.messageContext.isGtmEvent ) );
        try {
          Lr( d.messageContext.eventId, r, '1' ), Kp( d.type, d.h.id, u ),
          f( d.h.id, b, d.B, u );
        }
        catch ( v ) {
          Lr( d.messageContext.eventId, r, '4' );
        }
      }
    }
  };
  Sr.prototype.register = function( a, b, c ) {
    let d = Tr( this, a );
    d.status !== 3 && ( d.U = b, d.status = 3, c && ( J( d.h, c ), d.h = c ), this.flush() );
  };
  Sr.prototype.push = function( a, b, c, d ) {
    void 0 !== c && ( Tr( this, c ).status === 1 && ( Tr( this, c ).status = 2, this.push( 'require', [ {} ], c, {}) ), Tr( this, c ).m && ( d.deferrable = !1 ) );
    this.h.push( new Rr( a, c, b, d ) );
    d.deferrable || this.flush();
  };
  Sr.prototype.flush = function( a ) {
    for( var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      let f = this.h[ 0 ];
      let g = f.h;
      if( f.messageContext.deferrable ) !g || Tr( this, g ).m ? ( f.messageContext.deferrable = !1, this.h.push( f ) ) : c.push( f ), this.h.shift();
      else {
        switch( f.type ) {
          case 'require':
            if( Tr( this, g ).status !== 3 && !a ) {
              this.h.push.apply( this.h, c );
              return;
            }
            break;
          case 'set':
            k( f.m[ 0 ], function( r, t ) {
              J( Na( r, t ), b.B );
            });
            break;
          case 'config':
            var l = Tr( this, g );
            e.lb = {};
            k( f.m[ 0 ], ( function( r ) {
              return function( t, u ) {
                J( Na( t, u ), r.lb );
              };
            }( e ) ) );
            var m = !!e.lb[ N.g.sc ];
            delete e.lb[ N.g.sc ];
            var n = g.W === g.id;
            m || ( n ? l.B = {} : l.F[ g.id ] = {});
            l.m && m || Ur( this, N.g.ia, e.lb, f );
            l.m = !0;
            n ? J( e.lb, l.B ) : ( J( e.lb, l.F[ g.id ] ), K( 70 ) );
            d = !0;
            break;
          case 'event':
            e.Rd = {};
            k( f.m[ 0 ], ( function( r ) {
              return function( t, u ) {
                J( Na( t, u ), r.Rd );
              };
            }( e ) ) );
            Ur( this, f.m[ 1 ], e.Rd, f );
            break;
          case 'get':
            var p = {};
            var q = ( p[ N.g.La ] = f.m[ 0 ], p[ N.g.Za ] = f.m[ 1 ], p );
            Ur( this, N.g.Ea, q, f );
        }
        this.h.shift();
        Vr( this, f );
      }
      e = {
        'lb': e.lb,
        'Rd': e.Rd
      };
    }
    this.h.push.apply( this.h, c );
    d && this.flush();
  };
  var Vr = function( a, b ) {
    if( b.type !== 'require' ) {
      if( b.h ) { for( let c = Tr( a, b.h ).I[ b.type ] || [], d = 0; d < c.length; d++ ) c[ d ](); }
      else {
        for( let e in a.m ) {
          if( a.m.hasOwnProperty( e ) ) {
            let f = a.m[ e ];
            if( f && f.I ) { for( let g = f.I[ b.type ] || [], l = 0; l < g.length; l++ ) g[ l ](); }
          }
        }
      }
    }
  };
  let Wr = function( a, b ) {
    let c = Nr;
    let d = J( b );
    J( Tr( c, a ).h, d );
    Tr( c, a ).h = d;
  };
  var Nr = new Sr();
  let Xr = {};
  let Yr = {};
  let Zr = function( a, b ) {
    for( var c = [], d = [], e = {}, f = 0; f < a.length; e = {
      'Wd': e.Wd,
      'Td': e.Td
    }, f++ ) {
      let g = a[ f ];
      if( g.indexOf( '-' ) >= 0 ) {
        if( e.Wd = $l( g, b ), e.Wd ) {
          let l = Ah();
          va( l, ( function( r ) {
            return function( t ) {
              return r.Wd.W === t;
            };
          }( e ) ) )
            ? c.push( g )
            : d.push( g );
        }
      }
      else {
        let m = Xr[ g ] || [];
        e.Td = {};
        m.forEach( function( r ) {
          return function( t ) {
            return r.Td[ t ] = !0;
          };
        }( e ) );
        for( let n = yh(), p = 0; p < n.length; p++ ) {
          if( e.Td[ n[ p ] ] ) {
            c = c.concat( Ah() );
            break;
          }
        } let q = Yr[ g ] || [];
        q.length && ( c = c.concat( q ) );
      }
    }
    return {
      'Xk': c,
      'Zk': d
    };
  };
  let $r = function( a ) {
    k( Xr, function( b,
      c ) {
      let d = c.indexOf( a );
      d >= 0 && c.splice( d, 1 );
    });
  };
  let as = function( a ) {
    k( Yr, function( b, c ) {
      let d = c.indexOf( a );
      d >= 0 && c.splice( d, 1 );
    });
  };
  let bs = 'HA GF G UA AW DC MC'.split( ' ' );
  let cs = !1;
  let ds = !1;

  function es( a, b ) {
    a.hasOwnProperty( 'gtm.uniqueEventId' ) || Object.defineProperty( a, 'gtm.uniqueEventId', {
      'value': He()
    });
    b.eventId = a[ 'gtm.uniqueEventId' ];
    b.priorityId = a[ 'gtm.priorityId' ];
    return {
      'eventId': b.eventId,
      'priorityId': b.priorityId
    };
  }
  let fs = void 0;
  let gs = void 0;

  function hs( a, b, c ) {
    let d = J( a );
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys( b ).some( function( f ) {
      return void 0 !== b[ f ];
    }) && K( 136 );
    let e = J( b );
    J( c, e );
    lr( hr( yh()[ 0 ], e ), a.eventId, d );
  }

  function is( a ) {
    for( let b = mp(), c = fa( b ), d = c.next(); !d.done; d = c.next() ) {
      let e = d.value;
      let f = a && a[ e ] || Nr.B[ e ];
      if( f ) return f;
    }
  }
  let js = {
    'config': function( a, b ) {
      let c = P( 65 );
      let d = es( a, b );
      if( !( a.length < 2 ) && h( a[ 1 ] ) ) {
        let e = {};
        if( a.length > 2 ) {
          if( void 0 != a[ 2 ] && !G( a[ 2 ] ) || a.length > 3 ) return;
          e = a[ 2 ];
        }
        let f = $l( a[ 1 ], b.isGtmEvent );
        if( f ) {
          let g, l, m;
          a: {
            if( !th.Fe ) {
              let n = Eh( Lh() );
              if( n && n.parent && n.context && n.context.source === 1 && n.parent.ctid.indexOf( 'GTM-' ) !== 0 ) {
                let p = n.parent;
                let q = p.isDestination;
                m = {
                  'fl': Eh( p ),
                  'Wk': q
                };
                break a;
              }
            }
            m = void 0;
          }
          let r = m;
          r && ( g = r.fl, l = r.Wk );
          Oq( d.eventId, 'gtag.config' );
          let t = f.W;
          let u = f.id !== t;
          if( u ? Ah().indexOf( t ) === -1 : yh().indexOf( t ) === -1 ) {
            if( !( c
                                    && b.inheritParentConfig || P( 27 ) && e[ N.g.wb ] ) ) {
              let v = is( e );
              if( u ) {
                pp( t, v, {
                  'source': 2,
                  'fromContainerExecution': b.fromContainerExecution
                });
              }
              else if( c && void 0 !== g && g.containers.indexOf( t ) !== -1 ) {
                let w = e;
                fs ? hs( b, w, fs ) : gs || ( gs = J( w ) );
              }
              else {
                op( t, v, !0, {
                  'source': 2,
                  'fromContainerExecution': b.fromContainerExecution
                });
              }
            }
          }
          else {
            if( g && ( K( 128 ), l && K( 130 ), c && b.inheritParentConfig ) ) {
              let x = e;
              gs ? hs( b, gs, x ) : !x[ N.g.sc ] && se && fs || ( fs = J( x ) );
              return;
            }
            if( se && !u && !e[ N.g.sc ] ) {
              let y = ds;
              ds = !0;
              if( y ) return;
            }
            cs || K( 43 );
            if( !b.noTargetGroup ) {
              if( u ) {
                as( f.id );
                let A = f.id;
                let B = e[ N.g.we ] || 'default';
                B = String( B ).split( ',' );
                for( let D = 0; D < B.length; D++ ) {
                  let H = Yr[ B[ D ] ] || [];
                  Yr[ B[ D ] ] = H;
                  H.indexOf( A ) < 0 && H.push( A );
                }
              }
              else {
                $r( f.id );
                let I = f.id;
                let F = e[ N.g.we ] || 'default';
                F = F.toString().split( ',' );
                for( let L = 0; L < F.length; L++ ) {
                  let M = Xr[ F[ L ] ] || [];
                  Xr[ F[ L ] ] = M;
                  M.indexOf( I ) < 0 && M.push( I );
                }
              }
            } delete e[ N.g.we ];
            let X = b.eventMetadata || {};
            X.hasOwnProperty( 'is_external_event' ) || ( X.is_external_event = !b.fromContainerExecution );
            b.eventMetadata = X;
            delete e[ N.g.kc ];
            for( let U = u ? [ f.id ] : Ah(), R = 0; R < U.length; R++ ) {
              let Q =
                                    e;
              let ha = J( b );
              let ba = $l( U[ R ], ha.isGtmEvent );
              ba && Nr.push( 'config', [ Q ], ba, ha );
            }
          }
        }
      }
    },
    'consent': function( a, b ) {
      if( a.length === 3 ) {
        K( 39 );
        let c = es( a, b );
        let d = a[ 1 ];
        d === 'default' ? bh( a[ 2 ] ) : d === 'update' ? ch( a[ 2 ], c ) : d === 'declare' ? b.fromContainerExecution && ah( a[ 2 ] ) : d === 'core_platform_services' && dh( a[ 2 ] );
      }
    },
    'event': function( a, b ) {
      let c = a[ 1 ];
      if( !( a.length < 2 ) && h( c ) ) {
        let d;
        if( a.length > 2 ) {
          if( !G( a[ 2 ] ) && void 0 != a[ 2 ] || a.length > 3 ) return;
          d = a[ 2 ];
        }
        let e = d;
        let f = {};
        let g = ( f.event = c, f );
        e && ( g.eventModel = J( e ), e[ N.g.kc ] && ( g.eventCallback = e[ N.g.kc ] ), e[ N.g.qe ]
                        && ( g.eventTimeout = e[ N.g.qe ] ) );
        let l = es( a, b );
        let m = l.eventId;
        let n = l.priorityId;
        g[ 'gtm.uniqueEventId' ] = m;
        n && ( g[ 'gtm.priorityId' ] = n );
        if( c === 'optimize.callback' ) return g.eventModel = g.eventModel || {}, g;
        let p;
        let q = d;
        let r = q && q[ N.g.Jb ];
        void 0 === r && ( r = Ne( N.g.Jb, 2 ), void 0 === r && ( r = 'default' ) );
        if( h( r ) || ua( r ) ) {
          let t;
          b.isGtmEvent && P( 64 ) ? t = h( r ) ? [ r ] : r : t = r.toString().replace( /\s+/g, '' ).split( ',' );
          let u = Zr( t, b.isGtmEvent );
          let v = u.Xk;
          let w = u.Zk;
          if( w.length ) {
            for( let x = is( q ), y = 0; y < w.length; y++ ) {
              let A = $l( w[ y ], b.isGtmEvent );
              A && pp( A.W, x, {
                'source': 3,
                'fromContainerExecution': b.fromContainerExecution
              });
            }
          }
          p = bm( v, b.isGtmEvent );
        }
        else p = void 0;
        let B = p;
        if( B ) {
          Oq( m, c );
          for( var D = [], H = 0; H < B.length; H++ ) {
            let I = B[ H ];
            let F = J( b );
            if( bs.indexOf( Fh( I.prefix ) ) !== -1 ) {
              let L = J( d );
              let M = F.eventMetadata || {};
              M.hasOwnProperty( 'is_external_event' ) || ( M.is_external_event = !F.fromContainerExecution );
              F.eventMetadata = M;
              delete L[ N.g.kc ];
              Or( c, L, I.id, F );
            }
            D.push( I.id );
          }
          g.eventModel = g.eventModel || {};
          B.length > 0 ? g.eventModel[ N.g.Jb ] = D.join() : delete g.eventModel[ N.g.Jb ];
          cs || K( 43 );
          void 0 === b.noGtmEvent
                            && b.eventMetadata && b.eventMetadata.syn_or_mod && ( b.noGtmEvent = !0 );
          P( 78 ) && g.eventModel[ N.g.vb ] && ( b.noGtmEvent = !0 );
          return b.noGtmEvent ? void 0 : g;
        }
      }
    },
    'get': function( a, b ) {
      K( 53 );
      if( a.length === 4 && h( a[ 1 ] ) && h( a[ 2 ] ) && sa( a[ 3 ] ) ) {
        let c = $l( a[ 1 ], b.isGtmEvent );
        let d = String( a[ 2 ] );
        let e = a[ 3 ];
        if( c ) {
          cs || K( 43 );
          let f = is();
          if( !va( Ah(), function( l ) {
            return c.W === l;
          }) ) {
            pp( c.W, f, {
              'source': 4,
              'fromContainerExecution': b.fromContainerExecution
            });
          }
          else if( bs.indexOf( Fh( c.prefix ) ) !== -1 ) {
            es( a, b );
            let g = {};
            Yg( J( ( g[ N.g.La ] = d, g[ N.g.Za ] = e, g ) ) );
            Pr( d, function( l ) {
              E( function() {
                return e( l );
              });
            },
            c.id, b );
          }
        }
      }
    },
    'js': function( a, b ) {
      if( a.length == 2 && a[ 1 ].getTime ) {
        cs = !0;
        let c = es( a, b );
        let d = c.eventId;
        let e = c.priorityId;
        let f = {};
        return f.event = 'gtm.js', f[ 'gtm.start' ] = a[ 1 ].getTime(), f[ 'gtm.uniqueEventId' ] = d, f[ 'gtm.priorityId' ] = e, f;
      }
    },
    'policy': function() {},
    'set': function( a, b ) {
      let c;
      a.length == 2 && G( a[ 1 ] ) ? c = J( a[ 1 ] ) : a.length == 3 && h( a[ 1 ] ) && ( c = {}, G( a[ 2 ] ) || ua( a[ 2 ] ) ? c[ a[ 1 ] ] = J( a[ 2 ] ) : c[ a[ 1 ] ] = a[ 2 ] );
      if( c ) {
        let d = es( a, b );
        let e = d.eventId;
        let f = d.priorityId;
        J( c );
        let g = J( c );
        Nr.push( 'set', [ g ], void 0, b );
        c[ 'gtm.uniqueEventId' ] = e;
        f && ( c[ 'gtm.priorityId' ] =
                        f );
        P( 15 ) && delete c.event;
        b.overwriteModelFields = !0;
        return c;
      }
    }
  };
  let ks = {
    'policy': !0
  };
  let ls = function( a ) {
    let b = z[ me.da ].hide;
    if( b && void 0 !== b[ a ] && b.end ) {
      b[ a ] = !1;
      let c = !0;
      let d;
      for( d in b ) {
        if( b.hasOwnProperty( d ) && !0 === b[ d ] ) {
          c = !1;
          break;
        }
      } c && ( b.end(), b.end = null );
    }
  };
  let ms = function( a ) {
    let b = z[ me.da ];
    let c = b && b.hide;
    c && c.end && ( c[ a ] = !0 );
  };
  let ns = !1;
  let os = [];

  function ps() {
    if( !ns ) {
      ns = !0;
      for( let a = 0; a < os.length; a++ ) E( os[ a ] );
    }
  }
  let qs = function( a ) {
    ns ? E( a ) : os.push( a );
  };
  let zs = function() {
    try {
      let a, b;
      let m; let n = Ch();
      let p = xd( 'script[src*="gtm/js?id=' + n + '"],script[src*="optimize.js?id=' + n + '"]' );
      m = p && p.length > 0 ? p[ 0 ] : null;
      b = m ? m.hasAttribute( 'gtm' ) ? 'gtmo' : m.hasAttribute( 'async' ) ? 'opta' : 'opts' : 'optu';
      b || ( b = 'gaoo' );
      let q = ss( ts, m && m.src );
      let r = q.Nd;
      let t = q.Od;
      let u = q.Ze;
      let v = q.af;
      let w = q.Se;
      let x = q.ff;
      let y = q.Fd;
      let A = q.Yf;
      let B = q.Ed;
      y != 'h0' || us || ( y = 'h3' );
      vs = {
        'Fd': y,
        'Ed': B,
        'sk': a,
        'Uk': b,
        'Yf': A,
        'af': v,
        'Se': w,
        'ff': x,
        'Ze': u,
        'Nd': r,
        'Od': t,
        'ki': ws,
        'Fi': xs
      };
      ys( vs );
    }
    catch ( D ) {}
  };
  let As = function() {
    let a = z.gaData;
    let b = 0;
    let c = void 0;
    if( a ) {
      for( let d in a ) {
        if( a.hasOwnProperty( d ) && d.indexOf( 'UA-' ) === 0 && a[ d ].hitcount ) {
          b += a[ d ].hitcount;
          let e = Number( a[ d ].first_hit );
          e && ( !c || e < c ) && ( c = e );
        }
      }
    } return {
      'li': b,
      'ii': c
    };
  };
  var ss = function( a, b ) {
    let c, d, e, f, g, l, m, n, p;
    let q = z.performance;
    if( q ) {
      if( b ) {
        let r = q.getEntriesByName( b )[ 0 ];
        if( r ) {
          let t = q.getEntriesByType( 'resource' );
          let u = 0;
          t && t.length > 0 && ( u = t[ 0 ].startTime );
          f = Math.round( r.startTime - u );
          g = Math.round( r.duration );
          e = t.indexOf( r ); e === -1 && ( e =
                            void 0 );
          l = Math.round( a - ( r.startTime + r.duration ) );
        }
      }
      let v = q.timing;
      if( v.domContentLoadedEventStart ) {
        let w = v.domContentLoadedEventStart - v.navigationStart;
        w && ( d = Math.round( a - w ) );
      }
      let x = q.getEntriesByType( 'paint' ).filter( function( D ) {
        return D.name === 'first-contentful-paint';
      })[ 0 ];
      x && ( c = Math.round( a - x.startTime ) );
    }
    let y = z[ me.da ].hide;
    if( y ) {
      if( void 0 === y[ Ch() ] ) m = 'h2';
      else {
        let A = !1;
        if( y.end === null ) {
          for( let B in y ) {
            if( y.hasOwnProperty( B ) && B.startsWith( Ch() ) && !0 === y[ B ] ) {
              A = !0;
              break;
            }
          }
        } m = A ? 'h0' : 'h1';
      }
      y.start && !isNaN( y.start )
                    && ( q ? q.timing && ( p = Math.round( a + q.timing.navigationStart - y.start ) ) : p = a - y.start );
      isNaN( y.timeout ) || ( n = y.timeout );
    }
    return {
      'Nd': d,
      'Od': c,
      'Ze': e,
      'af': f,
      'Se': g,
      'ff': l,
      'Fd': m,
      'Yf': n,
      'Ed': p
    };
  };
  var ys = function( a, b ) {
    b = void 0 === b ? 'ol' : b;
    let c = function( e, f ) {
      f != null && ( d += e + encodeURIComponent( f ) );
    };
    var d = Xh + '&cv=249';
    c( '&t=', b );
    c( '&s=', a.Fd );
    c( '&h=', a.Ed );
    c( '&g=', a.sk );
    c( '&p=', a.Uk );
    c( '&o=', a.Yf );
    c( '&l=', ( function() {
      let e = Ce;
      return e ? rs - Ba( e ) : void 0;
    }() ) );
    c( '&q=', a.af );
    c( '&f=',
      a.Se );
    c( '&e=', a.ff );
    c( '&i=', a.Ze );
    c( '&d=', a.Nd );
    c( '&c=', a.Od );
    c( '&tr=', a.Kl );
    c( '&jl=', a.Sk );
    c( '&jf=', a.Qk );
    c( '&ji=', a.Rk );
    c( '&jq=', a.Tk );
    c( '&jd=', a.Ok );
    c( '&jx=', a.Pk );
    c( '&hc=', a.ki );
    c( '&fh=', a.Fi );
    d += '&sr=0.050000';
    c( '&ps=', Bs );
    c( '&cb=', xa() );
    Ob( d );
  };
  let Cs = !1;
  let rs; let ts; let us; let Bs; let vs; let ws; let xs;
  Bs = Math.random(), Cs = Bs < '0.050000';
  let Ds = function() {
    if( !Cs || rs ) return;
    rs = Ha();
    ts = Yb() || rs;
    us = !!C.querySelector( 'body' );
    let a = As();
    let b = a.ii;
    ws = a.li;
    xs = b ? rs - b : void 0;
    qs( zs );
  };
  let Fs = function( a ) {
    let b = Es;
    if( !Cs ) return;
    try {
      let c = Ha();
      let d = Yb() || c;
      let e = As();
      let f = e.li;
      let g = e.ii;
      let l = g ? c - g : void 0;
      qs( function() {
        let m = ss( d, b );
        let n = m.Nd;
        let p = m.Od;
        let q = m.Ze;
        let r = m.af;
        let t = m.Se;
        let u = m.ff;
        let v = m.Fd;
        let w = m.Ed;
        let x = J( vs || {});
        J( a, x );
        J({
          'Fd': v,
          'Ed': w,
          'Nd': n,
          'Od': p,
          'Rk': q,
          'Tk': r,
          'Ok': t,
          'Pk': u,
          'ki': f,
          'Fi': l
        }, x );
        ys( x, 'od' );
      });
    }
    catch ( m ) {}
  };
  let Hs = function( a ) {
    if( Gs( a ) ) return a;
    this.h = a;
  };
  Hs.prototype.getUntrustedMessageValue = function() {
    return this.h;
  };
  var Gs = function( a ) {
    return !a || ac( a ) !== 'object' || G( a ) ? !1 : 'getUntrustedMessageValue' in a;
  };
  Hs.prototype.getUntrustedMessageValue = Hs.prototype.getUntrustedMessageValue;
  let Is = 0;
  let Js = {};
  let Ks = [];
  let Ls = [];
  let Ms = !1;
  let Ns = !1;

  function Os( a, b ) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  let Ps = function( a ) {
    return z[ me.da ].push( a );
  };
  let Qs = function( a, b ) {
    let c = ne[ me.da ];
    let d = c ? c.subscribers : 1;
    let e = 0;
    let f = !1;
    let g = void 0;
    b && ( g = z.setTimeout( function() {
      f || ( f = !0, a() );
      g = void 0;
    }, b ) );
    return function() {
      ++e === d && ( g && ( z.clearTimeout( g ), g = void 0 ), f || ( a(), f = !0 ) );
    };
  };

  function Rs( a, b ) {
    let c = a._clear || b.overwriteModelFields;
    k( a, function( e, f ) {
      e !== '_clear' && ( c && Qe( e ), Qe( e, f ) );
    });
    Ce || ( Ce = a[ 'gtm.start' ] );
    Ds();
    let d = a[ 'gtm.uniqueEventId' ];
    if( !a.event ) return !1;
    typeof d !== 'number' && ( d = He(), a[ 'gtm.uniqueEventId' ] = d, Qe( 'gtm.uniqueEventId', d ) );
    return Jr( a );
  }

  function Ss( a ) {
    if( a == null || typeof a !== 'object' ) return !1;
    if( a.event ) return !0;
    if( Aa( a ) ) {
      let b = a[ 0 ];
      if( b === 'config' || b === 'event' || b === 'js' || b === 'get' ) return !0;
    }
    return !1;
  }

  function Ts() {
    let a;
    if( Ls.length ) a = Ls.shift();
    else if( Ks.length ) a = Ks.shift();
    else return;
    let b;
    let c = a;
    if( Ms || !Ss( c.message ) ) b = c;
    else {
      Ms = !0;
      let d = c.message[ 'gtm.uniqueEventId' ];
      typeof d !== 'number' && ( d = c.message[ 'gtm.uniqueEventId' ] = He() );
      let e = {};
      let f = {
        'message': ( e.event = 'gtm.init_consent', e[ 'gtm.uniqueEventId' ] = d - 2, e ),
        'messageContext': {
          'eventId': d - 2
        }
      };
      let g = {};
      let l = {
        'message': ( g.event = 'gtm.init', g[ 'gtm.uniqueEventId' ] = d - 1, g ),
        'messageContext': {
          'eventId': d - 1
        }
      };
      Ks.unshift( l, c );
      if( Wh ) {
        let m = vh.ctid;
        if( m ) {
          let n; let p = Eh( Lh() );
          n = p && p.context;
          let q; let r = xf( 'https://qa.testbs.net/en/' ); // z.location.href
          q = r.hostname + r.pathname;
          let t = n && n.fromContainerExecution;
          let u = n && n.source;
          let v = vh.Oe;
          let w = th.Fe;
          Wh && ( Ap || ( Ap = q ), Bp.push( m + ';' + v + ';' + ( t ? 1 : 0 ) + ';' + ( u || 0 ) + ';' + ( w ? 1 : 0 ) ) );
        }
      }
      b = f;
    }
    return b;
  }

  function Us() {
    for( var a = !1, b; !Ns && ( b = Ts() ); ) {
      Ns = !0;
      delete Ke.eventModel;
      Me();
      let c = b;
      let d = c.message;
      let e = c.messageContext;
      if( d == null ) Ns = !1;
      else {
        if( e.fromContainerExecution ) {
          for( let f = [ 'gtm.allowlist', 'gtm.blocklist', 'gtm.whitelist', 'gtm.blacklist', 'tagTypeBlacklist' ], g = 0; g < f.length; g++ ) {
            let l = f[ g ];
            let m = Ne( l, 1 );
            if( ua( m ) || G( m ) ) m = J( m );
            Le[ l ] = m;
          }
        }
        try {
          if( sa( d ) ) {
            try {
              d.call( Oe );
            }
            catch ( D ) {}
          }
          else if( ua( d ) ) {
            let n = d;
            if( h( n[ 0 ] ) ) {
              let p = n[ 0 ].split( '.' );
              let q = p.pop();
              let r = n.slice( 1 );
              let t = Ne( p.join( '.' ), 2 );
              if( t != null ) {
                try {
                  t[ q ].apply( t, r );
                }
                catch ( D ) {}
              }
            }
          }
          else {
            let u =
                            void 0;
            let v = !1;
            if( Aa( d ) ) {
              a: {
                if( d.length && h( d[ 0 ] ) ) {
                  let w = js[ d[ 0 ] ];
                  if( w && ( !e.fromContainerExecution || !ks[ d[ 0 ] ] ) ) {
                    u = w( d, e );
                    break a;
                  }
                }
                u = void 0;
              }( v = u && d[ 0 ] === 'set' && !!u.event ) && K( 101 );
            }
            else u = d;
            if( u ) {
              let x = Rs( u, e );
              a = x || a;
              v && x && K( 113 );
            }
          }
        }
        finally {
          e.fromContainerExecution && Me( !0 );
          let y = d[ 'gtm.uniqueEventId' ];
          if( typeof y === 'number' ) {
            for( var A = Js[ String( y ) ] || [], B = 0; B < A.length; B++ ) Ls.push( Vs( A[ B ] ) );
            A.length && Ls.sort( Os );
            delete Js[ String( y ) ];
            y > Is && ( Is = y );
          }
          Ns = !1;
        }
      }
    }
    return !a;
  }

  function Ws() {
    if( P( 32 ) ) {
      let a = Xs();
    }
    let e = Us();
    try {
      ls( Ch() );
    }
    catch ( f ) {}
    return e;
  }

  function mr( a ) {
    if( Is < a.notBeforeEventId ) {
      let b = String( a.notBeforeEventId );
      Js[ b ] = Js[ b ] || [];
      Js[ b ].push( a );
    }
    else {
      Ls.push( Vs( a ) ), Ls.sort( Os ), E( function() {
        Ns || Us();
      });
    }
  }

  function Vs( a ) {
    return {
      'message': a.message,
      'messageContext': a.messageContext
    };
  }
  let Ys = function() {
    function a( f ) {
      let g = {};
      if( Gs( f ) ) {
        let l = f;
        f = Gs( l ) ? l.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return {
        'message': f,
        'messageContext': g
      };
    }
    let b = Fb( me.da, [] );
    let c = ne[ me.da ] = ne[ me.da ] || {};
    !0 === c.pruned && K( 83 );
    Js = kr().get();
    nr();
    Sp( function() {
      if( !c.gtmDom ) {
        c.gtmDom = !0;
        let f = {};
        b.push( ( f.event = 'gtm.dom', f ) );
      }
    });
    qs( function() {
      if( !c.gtmLoad ) {
        c.gtmLoad = !0;
        let f = {};
        b.push( ( f.event = 'gtm.load', f ) );
      }
    });
    c.subscribers = ( c.subscribers || 0 ) + 1;
    let d = b.push;
    b.push = function() {
      let f;
      if( ne.SANDBOXED_JS_SEMAPHORE > 0 ) {
        f = [];
        for( let g = 0; g < arguments.length; g++ ) f[ g ] = new Hs( arguments[ g ] );
      }
      else f = [].slice.call( arguments, 0 );
      let l = f.map( function( q ) {
        return a( q );
      });
      Ks.push.apply( Ks, l );
      let m = d.apply( b, f );
      let n = Math.max( 100, Number( '1000' ) || 300 );
      if( this.length > n ) { for( K( 4 ), c.pruned = !0; this.length > n; ) this.shift(); }
      let p = typeof m !== 'boolean' || m;
      return Us() && p;
    };
    let e = b.slice( 0 ).map( function( f ) {
      return a( f );
    });
    Ks.push.apply( Ks, e );
    Xs() && ( P( 32 ) && Eo(), E( Ws ) );
  };
  var Xs = function() {
    let a = !0;
    return a;
  };

  function Zs( a ) {
    if( a == null || a.length === 0 ) return !1;
    let b = Number( a );
    let c = Ha();
    return b < c + 3E5 && b > c - 9E5;
  }

  function $s( a ) {
    return a && a.indexOf( 'pending:' ) === 0 ? Zs( a.substr( 8 ) ) : !1;
  };
  let ut = function() {};
  var Mc = {};
  Mc.Ee = new String( 'undefined' );
  let Xt = z.clearTimeout;
  let Yt = z.setTimeout;
  let V = function( a, b, c, d ) {
    if( mj() ) {
      b && E( b );
    }
    else return Kb( a, b, c, d );
  };
  let Zt = function() {
    return new Date();
  };
  let $t = function() {
    return 'https://qa.testbs.net/en/'; // z.location.href
  };
  let au = function( a ) {
    return vf( xf( a ), 'fragment' );
  };
  let bu = function( a ) {
    return wf( xf( a ) );
  };
  let cu = function( a, b ) {
    return Ne( a, b || 2 );
  };
  let du = function( a, b, c ) {
    let d;
    b ? ( a.eventCallback = b, c && ( a.eventTimeout = c ), d = Ps( a ) ) : d = Ps( a );
    return d;
  };
  let eu = function( a, b ) {
    z[ a ] = b;
  };
  let W = function( a, b, c ) {
    b
                && ( void 0 === z[ a ] || c && !z[ a ] ) && ( z[ a ] = b );
    return z[ a ];
  };
  let fu = function( a, b, c ) {
    return Ui( a, b, void 0 === c ? !0 : !!c );
  };
  let gu = function( a, b, c ) {
    return cj( a, b, c ) === 0;
  };
  let hu = function( a, b ) {
    if( mj() ) {
      b && E( b );
    }
    else Nb( a, b );
  };
  let iu = function( a ) {
    return !!Dt( a, 'init', !1 );
  };
  let ju = function( a ) {
    Bt( a, 'init', !0 );
  };
  let ku = function( a, b, c ) {
    cc( a ) || Vq( c, b, a );
  };
  let nu = function( a ) {
    if( !a || a.nodeType != Node.ELEMENT_NODE ) return !1;
    let b = a.tagName.toUpperCase();
    return b == 'SCRIPT' || b == 'STYLE' || b == 'LINK';
  };
  let ou = function( a, b, c ) {
    try {
      c == null ? a.removeAttribute( b ) : a.setAttribute( b, c );
    }
    catch ( d ) {
      return d;
    }
    return null;
  };
  let pu = function( a, b, c ) {
    let d = a.getAttribute( b );
    return ou( a, b, c )
      ? 8
      : function() {
        ou( a, b, d );
      };
  };
  let su = function( a, b, c ) {
    let d; let e; let f = a.ownerDocument || a.document || document;
    c = ( c || '' ).toLowerCase();
    c == 'after'
      ? ( d = a.parentNode, e = a.nextSibling )
      : c == 'insert'
        ? ( d = a, e = a.firstChild )
        : c ==
                'append'
          ? ( d = a, e = null )
          : ( d = a.parentNode, e = a );
    if( !d || d == f ) {
      return {
        'result': 1,
        'Ik': []
      };
    }
    let g = qu( b, d );
    ru( g, 'SCRIPT' );
    ru( g, 'NOSCRIPT' );
    let l = [];
    if( g.firstChild ) {
      for( let m = g.firstChild; m; ) {
        let n = m.nextSibling;
        l.push( m );
        d.insertBefore( m, e );
        m = n;
      }
    }
    let p = a.nextSibling;
    c == 'replace' && d.removeChild( a );
    return {
      'result': function() {
        for( ; l.length > 0; ) d.removeChild( l.pop() );
        c == 'replace' && d.insertBefore( a, p );
      },
      'Ik': l.slice()
    };
  };
  let tu = {
    'SELECT': [ 1, '<select multiple="multiple">', '</select>' ],
    'FIELDSET': [ 1, '<fieldset>', '</fieldset>' ],
    'MAP': [ 1, '<map>',
      '</map>'
    ],
    'OBJECT': [ 1, '<object>', '</object>' ],
    'TABLE': [ 1, '<table>', '</table>' ],
    'TBODY': [ 2, '<table><tbody>', '</tbody></table>' ],
    'COLGROUP': [ 2, '<table><colgroup>', '</colgroup></table>' ],
    'TR': [ 3, '<table><tbody><tr>', '</tr></tbody></table>' ]
  };
  var qu = function( a, b ) {
    let c = 0;
    let d = '';
    let e = '';
    let f = tu[ b.tagName ];
    f != null && ( c = f[ 0 ], d = f[ 1 ], e = f[ 2 ] );
    let g = b.ownerDocument.createElement( 'div' );
    let l = Bb( d + ( a || '' ) + e );
    g.nodeType === 1 && Ab( g );
    g.innerHTML = zb( l );
    for( var m = g; c > 0; ) {
      let n = m.firstChild;
      if( n.firstChild == null ) return b.ownerDocument.createElement( 'div' );
      m = n;
      c--;
    }
    return m;
  };
  var ru = function( a, b ) {
    for( let c = a.getElementsByTagName( b ), d = [], e = c.length - 1; e >= 0; e-- ) {
      let f = c[ e ];
      f.parentNode.removeChild( f );
      d.push( f );
    }
  };
  let uu = function( a ) {
    let b = null;
    let c = null;
    try {
      b = new Function( 'element', a );
    }
    catch ( d ) {
      c = d;
    }
    return {
      'Wf': b,
      'error': c
    };
  };
  let yu = function( a, b, c, d, e ) {
    let f = a + '{' + ( b + ': ' + c + ( d ? ' !important' : '' ) ) + '}';
    e && ( f = e + '{' + f + '}' );
    let g = document;
    if( g.createStyleSheet ) {
      let l = vu( g );
      let m = l.rules.length;
      l.insertRule( f, m );
      return function() {
        l.deleteRule ? l.deleteRule( m ) : l.removeRule( m );
        l.insertRule( 'x {}',
          m );
      };
    }
    let n = wu( f, g );
    xu( n, g );
    let p = n.parentNode;
    return function() {
      p.removeChild( n );
    };
  };
  let zu = null;
  var vu = function( a ) {
    if( zu ) return zu;
    for( let b = a.styleSheets.length - 1; b >= 0; b-- ) {
      let c = a.styleSheets[ b ];
      if( !c.href ) {
        let d = c.ownerNode;
        if( d && d.parentNode && d.parentNode.tagName == 'HEAD' ) return zu = c;
      }
    }
    a.styleSheets.length == 0 && a.createStyleSheet();
    return zu = a.styleSheets[ 0 ];
  };
  var wu = function( a, b ) {
    let c = ( b || document ).createElement( 'style' );
    void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
    return c;
  };
  var xu = function( a, b ) {
    let c = b || document;
    let d = c.getElementsByTagName( 'head' )[ 0 ];
    d || ( d = c.createElement( 'head' ), c.body.parentNode.insertBefore( d, c.body ) );
    d.appendChild( a );
  };
  let Au = function( a, b, c, d ) {
    if( a.style.setProperty ) {
      try {
        let e = a.style.getPropertyValue( b );
        let f = a.style.getPropertyPriority( b );
        a.style.setProperty( b, c, d ? 'important' : '' );
        return function() {
          a.style.setProperty( b, '', f );
          a.style.setProperty( b, e, f );
        };
      }
      catch ( l ) {}
    }
    let g = a.style.cssText;
    a.style.cssText += ';' + ( b + ': ' + c + ( d ? ' !important' : '' ) ) + ';';
    return function() {
      a.style.cssText = g;
    };
  };
  let Cu = function( a, b, c,
    d ) {
    if( nu( a ) ) return 7;
    if( b ) return Bu( a, b, d );
    if( c && c.parentNode ) {
      let e = a.parentNode;
      let f = a.nextSibling;
      try {
        c.parentNode.insertBefore( a, c.nextSibling );
      }
      catch ( g ) {
        return 9;
      }
      return function() {
        e.insertBefore( a, f );
      };
    }
    return 4;
  };
  var Bu = function( a, b, c ) {
    let d = a.parentNode;
    let e = a.nextSibling;
    c = ( c || '' ).toLowerCase();
    try {
      if( c == 'bottom' ) b.appendChild( a );
      else if( c == 'top' ) b.insertBefore( a, b.childNodes[ 0 ] || null );
      else if( c == 'before' ) {
        if( b.parentNode ) b.parentNode.insertBefore( a, b );
        else return 5;
      }
      else if( c == 'after' ) {
        if( b.parentNode ) {
          b.parentNode.insertBefore( a,
            b.nextSibling );
        }
        else return 5;
      }
    }
    catch ( f ) {
      return 9;
    }
    return function() {
      try {
        d.insertBefore( a, e );
      }
      catch ( f ) {}
    };
  };
  let Du = function( a, b, c ) {
    if( b >= 0 && b < a.childNodes.length ) {
      let d = a.childNodes[ b ];
      if( d != null && d.nodeType == Node.TEXT_NODE ) {
        let e = d.nodeValue;
        d.nodeValue = c;
        return function() {
          d.nodeValue = e;
        };
      }
      return 2;
    }
    return 3;
  };
  let Eu = function( a, b, c, d ) {
    c ? d = c.nextSibling : d && ( c = d.previousSibling );
    if( c != null && c.nodeType == Node.TEXT_NODE ) {
      let e = c.nodeValue;
      c.nodeValue += a;
      return function() {
        c.nodeValue = e;
      };
    }
    if( d != null && d.nodeType == Node.TEXT_NODE ) {
      let f =
                    d.nodeValue;
      d.nodeValue = a + d.nodeValue;
      return function() {
        d.nodeValue = f;
      };
    }
    let g = ( b.ownerDocument || b.document || document ).createTextNode( a );
    d ? b.insertBefore( g, d ) : b.appendChild( g );
    return function() {
      b.removeChild( g );
    };
  };
  let Fu = function( a ) {
    let b = document.createElement( 'a' );
    a && ( b.href = a );
    return b;
  };

  function Ju( a, b ) {
    function c( g ) {
      let l = xf( g );
      let m = vf( l, 'protocol' );
      let n = vf( l, 'host', !0 );
      let p = vf( l, 'port' );
      let q = vf( l, 'path' ).toLowerCase().replace( /\/$/, '' );
      if( void 0 === m || m === 'http' && p === '80' || m === 'https' && p === '443' ) m = 'web', p = 'default';
      return [ m, n, p, q ];
    }
    for( let d = c( String( a ) ), e = c( String( b ) ), f = 0; f < d.length; f++ ) { if( d[ f ] !== e[ f ] ) return !1; }
    return !0;
  }

  function Ku( a ) {
    return Lu( a ) ? 1 : 0;
  }

  function Lu( a ) {
    let b = a.arg0;
    let c = a.arg1;
    if( a.any_of && Array.isArray( c ) ) {
      for( let d = 0; d < c.length; d++ ) {
        let e = J( a, {});
        J({
          'arg1': c[ d ],
          'any_of': void 0
        }, e );
        if( Ku( e ) ) return !0;
      }
      return !1;
    }
    switch( a.function ) {
      case '_cn':
        return String( b ).indexOf( String( c ) ) >= 0;
      case '_css':
        var f;
        a: {
          if( b ) {
            try {
              for( let g = 0; g < md.length; g++ ) {
                let l = md[ g ];
                if( b[ l ] ) {
                  f = b[ l ]( c );
                  break a;
                }
              }
            }
            catch ( v ) {}
          }
          f = !1;
        }
        return f;
      case '_ew':
        var m, n;
        m = String( b );
        n = String( c );
        var p = m.length - n.length;
        return p >= 0 && m.indexOf( n, p ) === p;
      case '_eq':
        return String( b ) === String( c );
      case '_ge':
        return Number( b ) >= Number( c );
      case '_gt':
        return Number( b ) > Number( c );
      case '_lc':
        return String( b ).split( ',' ).indexOf( String( c ) ) >= 0;
      case '_le':
        return Number( b ) <= Number( c );
      case '_lt':
        return Number( b ) < Number( c );
      case '_re':
        var q;
        var r = a.ignore_case ? 'i' : void 0;
        try {
          let t = String( c ) + r;
          let u = nd.get( t );
          u || ( u = new RegExp( c, r ), nd.set( t, u ) );
          q = u.test( b );
        }
        catch ( v ) {
          q = !1;
        }
        return q;
      case '_sw':
        return String( b ).indexOf( String( c ) ) === 0;
      case '_um':
        return Ju( b, c );
    }
    return !1;
  };
  let Mu;

  function Nu( a ) {
    if( void 0 === Mu ) return '';
    let b = '&ccy=' + Mu;
    a.kb && ( Mu = void 0 );
    return b;
  };

  function Ou() {
    let a = [ '&cv=249', '&rv=' + me.Nf, '&tc=' + Hc.filter( function( b ) {
      return b;
    }).length ];
    me.vd && a.push( '&x=' + me.vd );
    return a.join( '' );
  };

  function Pu() {
    function a( c, d ) {
      let e = bb( d );
      e && b.push( c + '=' + e );
    }
    var b = [];
    a( '&u', 'GTM' );
    a( '&ut', 'TAGGING' );
    a( '&h', 'HEALTH' );
    return b.join( '' );
  };
  let Ev = function() {
    let a = !0;
    ck( 7 ) && ck( 9 ) && ck( 10 ) || ( a = !1 );
    return a;
  };
  let Fv = function() {
    let a = !0;
    ck( 3 ) && ck( 4 ) || ( a = !1 );
    return a;
  };
  Ze();

  function Kw() {
    return z.gaGlobal = z.gaGlobal || {};
  }
  let Lw = function() {
    let a = Kw();
    a.hid = a.hid || xa();
    return a.hid;
  };
  let Mw = function( a, b ) {
    let c = Kw();
    if( void 0 == c.vid || b && !c.from_cookie ) c.vid = a, c.from_cookie = b;
  };
  let Ix = window;
  let Jx = document;
  let Kx = function( a ) {
    let b = Ix._gaUserPrefs;
    if( b && b.ioo && b.ioo() || Jx.documentElement.hasAttribute( 'data-google-analytics-opt-out' ) || a && !0 === Ix[ 'ga-disable-' + a ] ) return !0;
    try {
      let c = Ix.external;
      if( c && c._gaUserPrefs && c._gaUserPrefs == 'oo' ) return !0;
    }
    catch ( f ) {}
    for( let d = Oi( 'AMP_TOKEN', String( Jx.cookie ), !0 ), e = 0; e < d.length; e++ ) { if( d[ e ] == '$OPT_OUT' ) return !0; }
    return Jx.getElementById( '__gaOptOutExtension' ) ? !0 : !1;
  };

  function Sx( a ) {
    k( a, function( c ) {
      c.charAt( 0 ) === '_' && delete a[ c ];
    });
    let b = a[ N.g.Na ] || {};
    k( b, function( c ) {
      c.charAt( 0 ) === '_' && delete b[ c ];
    });
  };
  let ay = function( a, b ) {};

  function $x( a, b ) {
    let c = function() {};
    return c;
  }

  function by( a, b, c ) {};
  let cy = $x;
  Object.freeze({
    'dl': 1,
    'id': 1
  });
  Object.freeze( [ 'config', 'event', 'get', 'set' ] );
  let ey = encodeURI;
  let Y = encodeURIComponent;
  let fy = function( a, b, c ) {
    Ob( a, b, c );
  };
  let gy = function( a, b ) {
    if( !a ) return !1;
    let c = vf( xf( a ), 'host' );
    if( !c ) return !1;
    for( let d = 0; b && d < b.length; d++ ) {
      let e = b[ d ] && b[ d ].toLowerCase();
      if( e ) {
        let f = c.length -
                        e.length;
        f > 0 && e.charAt( 0 ) != '.' && ( f--, e = '.' + e );
        if( f >= 0 && c.indexOf( e, f ) == f ) return !0;
      }
    }
    return !1;
  };
  let hy = function( a, b, c ) {
    for( var d = {}, e = !1, f = 0; a && f < a.length; f++ ) a[ f ] && a[ f ].hasOwnProperty( b ) && a[ f ].hasOwnProperty( c ) && ( d[ a[ f ][ b ] ] = a[ f ][ c ], e = !0 );
    return e ? d : null;
  };
  let ky = function( a ) {
    if( !iy[ a ] ) {
      iy[ a ] = !0;
      let b = z[ a ] || {};
      z[ a ] = b;
      let c = function( e ) {
        return jy[ e ];
      };
      let d = b.get;
      b.get = d
        ? function( e ) {
          return void 0 !== jy[ e ] ? jy[ e ] : d( e );
        }
        : c;
    }
  };
  let ny = function( a, b ) {
    jy[ a ] = b;
    for( var c = ly( a ), d = 0; d < c.length; d++ ) my( c[ d ], a, b );
    c = ly( '' );
    for( let e = 0; e < c.length; e++ ) my( c[ e ], a, b );
  };
  var my = function( a, b, c ) {
    try {
      a( c, b, Ch() );
    }
    catch ( d ) {}
  };
  var ly = function( a ) {
    oy[ a ] = oy[ a ] || [];
    return oy[ a ];
  };
  var jy = {};
  var oy = {};
  var iy = {};
  let py = function() {
    z.gaData = z.gaData || {};
    return z.gaData;
  };
  let qy = function( a, b ) {
    b = void 0 === b ? !1 : b;
    z.gaData = z.gaData || {};
    let c = z.gaData;
    let d = c.tracker_created;
    c.tracker_created = function( e ) {
      b && a( e );
      d && sa( d ) && d( e );
      b || a( e );
    };
  };
  let ry = function( a ) {
    let b = z[ dq() ];
    try {
      if( sa( b ) && sa( b.getAll ) ) {
        return b.getAll().filter( function( c ) {
          return c.get( 'trackingId' ) === a;
        });
      }
    }
    catch ( c ) {}
    return [];
  };
  let xy = function( a, b ) {
    let c = sy[ a ];
    if( c ) {
      E( function() {
        return b( c );
      });
    }
    else {
      let d = ry( a )[ 0 ];
      d
        ? ( sy[ a ] = d, ty || ( ty = d ), E( function() {
            return b( d );
          }) )
        : ( uy[ a ] || ( uy[ a ] = [] ), uy[ a ].push( b ), vy || ( vy = !0, qy( function( e ) {
            let f = e.get( 'trackingId' );
            if( uy[ f ] ) {
              if( wy[ f ] ) {
                wy[ f ] = !1;
                let g = z[ dq() ];
                sa( g ) && g( 'ga.require', '_' + Ch() );
              }
              ty || ( ty = e );
              sy[ f ] = e;
              for( var l = uy[ f ], m; void 0 !== ( m = l.shift() ); ) m( e );
              uy[ f ] = void 0;
            }
          }) ) );
    }
  };
  let yy = function( a, b, c, d ) {
    let e = z[ dq() ];
    if( b.hitType === 'data' && c ) {
      let f = z.gaData;
      let g = Number( f && f[ d ] && f[ d ].first_hit );
      let l = Ha();
      !isNaN( g ) && l > g && ( b.queueTime = Math.min( 2E3, l + 100 - g ) );
    }
    try {
      let m = a.get( 'name' ) != 't0' ? a.get( 'name' ) + '.send' : 'send';
      e( m, b );
    }
    catch ( n ) {}
  };
  var sy = {};
  var uy = {};
  var wy = {};
  let ty; var vy = !1;
  let zy; let Ay = function( a, b, c ) {
    xy( a, function( d ) {
      E( function() {
        yy( d, b, c, a );
      });
    });
  };
  let By = function() {
    let a = !1;
    qy( function() {
      if( !a ) {
        let b = z[ dq() ];
        sa( b ) && ( b( 'ga.require', '__' + Ch() ), a = !0 );
      }
    }, !0 );
  };
  let Cy = function( a, b, c ) {
    let d = py();
    let e = d[ a ] = d[ a ] || {};
    ( e.pending_experiments = e.pending_experiments || {})[ b ] = c;
    e.experiments = e.experiments || {};
    e.experiments[ b ] = c;
  };
  let Dy = function( a ) {
    let b = py()[ a ];
    return b ? b.hitcount || 0 : 0;
  };
  let Gy = function( a, b, c, d, e, f ) {
    ny( b, c );
    let g = d;
    if( d ) {
      let l = uf( z.location, 'host' );
      uf( xf( d ), 'host' ) === l && ( d = '' );
    }
    qy( function( q ) {
      q.set( 'referrer',
        d || void 0 );
    }, !0 );
    if( Ey( a ) ) ne.ga4_referrer_override = g, Fy( a, b, c, e, f );
    else {
      Cy( a, b, c );
      for( var m = ry( a ), n = 0; n < m.length; ++n ) m[ n ].set( 'referrer', d || void 0 );
      if( Dy( a ) > 0 ) {
        let p = m[ 0 ];
        p && yy( p, {
          'hitType': 'data'
        }, !0, a );
      }
    }
  };
  var Ey = function( a ) {
    return !!a && a.substring( 0, 2 ) === 'G-';
  };
  var Fy = function( a, b, c, d, e ) {
    if( Ey( a ) ) {
      let f = ir( a, 'experiment_impression', {
        'experiment_id': b,
        'variant_id': c
      });
      lr( f, d, {
        'originatingEntity': e,
        'deferrable': !0
      });
    }
    else {
      Cy( a, b, c ), Dy( a ) > 0 && Ay( a, {
        'hitType': 'data'
      }, !0 );
    }
  };

  let Ky = function( a, b, c ) {
    function d() {
      f || ( f = !0, !0 !== Hy && ( Hy = !1 ), Iy( c ), ls( e ) );
    }
    Es = a;
    var e = self.optyaId + '_' + b;
    var f = !1;
    ms( e );
    z.google_optimize = z.google_optimize || {};
    let g = z.google_optimize;
    g[ self.optyaId ] = g[ self.optyaId ] || {};
    g[ self.optyaId ].optimize_dyn = function( m ) {
      m.split( ',' ).forEach( function( n ) {
        Jy[ n ] = !0;
      });
      Hy = !0;
      d();
    };
    Kb( a, void 0, d );
    let l = z[ me.da ];
    z.setTimeout( function() {
      d();
    }, Number( l && l.hide && l.hide.timeout ) || 1E4 );
  };
  var Iy = function( a ) {
    if( void 0 !== Ly ) {
      let b = Ly - My;
      let c; let d;
      Hy ? c = Ha() - Ly : d = Ha() - Ly;
      Fs({
        'Kl': b,
        'Sk': c,
        'Qk': d
      });
    }
    Jy.optimize_ready = !0;
    Ps({
      'event': 'opt.dyn'
    });
    Ps({
      'event': 'opt.js'
    });
    if( a && a.length > 0 ) {
      let e = {};
      z[ me.da ].forEach( function( f ) {
        let g = f.event;
        g && ( e[ g ] = !0 );
      });
      a.forEach( function( f ) {
        e[ f ] && Ps({
          'event': f
        });
      });
    }
    E( function() {
      iq( '_' + Ch() );
    });
  };
  let Ny = function( a, b, c, d, e, f, g, l, m ) {
    function n( w, x ) {
      x && ( t += '&' + w + '=' + encodeURIComponent( x ) );
    }
    My = Ha();
    if( a || b || c ) {
      let p = void 0;
      if( b ) {
        let q = Fl().aw;
        q && ( p = q[ 0 ] );
      }
      if( f && ( a || c || p ) ) {
        let r = 1;
        var t; let u = self.optyaId + '_' + r++;
        ms( u );
        let v = function( w ) {
          zy = w;
          Ly = Ha();
          a || b
            ? ( t = 'https://www.google-analytics.com/gtm/optimize-dyn.js?id=' + self.optyaId, a && n( 'cid', w ), n( 'gclid',
                p ), g && ( n( 'gtm_auth', '' ), n( 'gtm_preview', '' ) ), ( g || a ) && n( 'cb', String( Math.random() ) ), Ky( t, r++, e ) )
            : Iy( e );
          ls( u );
        };
        Ey( d )
          ? lr( gr( 'get', d, 'client_id', v ), l, {
            'originatingEntity': m,
            'deferrable': !0
          })
          : ( wy[ d ] = !0, xy( d, function( w ) {
              return v( w.get( 'clientId' ) );
            }) );
      }
      else Iy( e );
    }
  };
  var Jy = {};
  let My; let Ly; let Hy; let Es;
  let Oy = function( a, b ) {
    this.Qe = a;
    this.Kd = b;
  };
  Oy.prototype.toString = function() {
    let a = '' + this.Qe;
    this.Kd > 1 && ( a = a + '-' + this.Kd );
    return a;
  };
  let Py = function( a, b ) {
    this.m = a;
    this.h = b;
  };
  Py.prototype.toString = function() {
    return this.h + '.' + this.m;
  };
  let Qy = function() {
    let a = Ne( 'optimize.cookie_path', 2 );
    return h( a ) ? a : '/';
  };
  let Sy = function( a, b ) {
    let c = new Ry( a, b );
    c.il();
    return c;
  };
  var Ry = function( a, b ) {
    this.F = Math.floor( new Date() / 864E5 );
    this.B = a || 'auto';
    this.h = b || Qy();
    this.m = new Oy( hj( this.B ), ij( this.h ) );
    this.H = [];
    this.map = {};
  };
  ca = Ry.prototype;
  ca.yk = function( a ) {
    if( !a ) return '';
    let b = this.Xf( a );
    return b ? b.m : '';
  };
  ca.Cl = function( a, b, c, d, e ) {
    let f, g;
    f = void 0 === f ? 10 : f;
    g = void 0 === g ? 3E3 : g;
    if( !a ) return !1;
    void 0 == b && ( b = '' );
    this.df( a, new Py( b, c ) );
    this.bk( e );
    return this.Nj( d,
      f, g );
  };
  ca.Xf = function( a ) {
    return this.map[ a ];
  };
  ca.wk = function() {
    for( var a = 0, b = 0; b < this.H.length; b++ ) this.Xf( this.H[ b ] ).m[ 0 ] !== 'x' && a++;
    return a;
  };
  ca.df = function( a, b ) {
    a && ( b.m === '' ? this.xi( a ) : ( this.map[ a ] || this.H.push( a ), this.map[ a ] = b ) );
  };
  ca.Fl = function( a ) {
    for( let b = 0; b < a.length; b++ ) this.df( a[ b ][ 0 ], a[ b ][ 1 ] );
  };
  ca.xi = function( a ) {
    let b = this.H.indexOf( a );
    b >= 0 && this.H.splice( b, 1 );
    delete this.map[ a ];
  };
  ca.vl = function() {
    for( var a = [], b = 0; b < this.H.length; b++ ) {
      let c = this.H[ b ];
      this.map[ c ].h < this.F && a.push( c );
    }
    for( let d =
                0; d < a.length; d++ ) this.xi( a[ d ] );
  };
  ca.vk = function() {
    for( var a = [], b = 0; b < this.H.length; b++ ) {
      let c = this.H[ b ];
      a.push( [ c, this.map[ c ] ] );
    }
    return a;
  };
  ca.nk = function() {
    for( var a = 0, b = 0; b < this.H.length; b++ ) a = Math.max( a, this.map[ this.H[ b ] ].h );
    return 864E5 * a;
  };
  ca.toString = function() {
    if( this.H.length == 0 ) return '';
    for( var a = [], b = 0; b < this.H.length; b++ ) {
      let c = this.H[ b ];
      a.push( c + '.' + this.map[ c ].toString() );
    }
    return 'GAX1.' + this.m.toString() + '.' + a.join( '!' );
  };
  ca.Nj = function( a, b, c ) {
    let d = new Date();
    this.vl();
    let e = this.wk();
    if( e >
            b || e > ( a || 10 ) && Ti().replace( RegExp( '(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?' ), this.toString() ).length > c ) return !1;
    d.setTime( this.nk() );
    if( this.B != 'auto' ) {
      return this.m = new Oy( hj( this.B ), ij( this.h ) ), cj( '_gaexp', this.toString(), {
        'path': this.h,
        'domain': this.B,
        'expires': d
      }) === 0;
    }
    for( let f = $i(), g = 0; g < f.length; g++ ) {
      if( this.m = new Oy( hj( f[ g ] ), ij( this.h ) ), cj( '_gaexp', this.toString(), {
        'path': this.h,
        'domain': f[ g ],
        'expires': d
      }) === 0 ) return !0;
    }
    return !1;
  };
  ca.il = function() {
    let a = Xi( '_gaexp', this.m.Qe, this.m.Kd );
    if( a ) {
      let b = this.jl( a );
      b
                && this.Fl( b.vk() );
    }
  };
  ca.jl = function( a ) {
    for( var b = new Ry( this.B, this.h ), c = a.split( '!' ), d = 0; d < c.length; d++ ) {
      let e = c[ d ].split( '.' );
      if( e.length == 3 ) {
        if( isNaN( Number( e[ 1 ] ) ) ) return;
        b.df( e[ 0 ], new Py( e[ 2 ], Number( e[ 1 ] ) ) );
      }
    }
    return b;
  };
  ca.bk = function( a ) {
    a = a || {};
    let b = 0;
    a.hasOwnProperty( '' ) && !isNaN( Number( a[ '' ] ) ) && ( b = this.F - Ba( a[ '' ] ) );
    for( let c = 0; c < this.H.length; c++ ) {
      let d = this.H[ c ];
      if( a.hasOwnProperty( d ) && !isNaN( Number( a[ d ] ) ) ) {
        let e = this.Xf( d );
        e.h = Ba( a[ d ] ) + b;
        this.df( d, e );
      }
    }
  };
  let Xy = function() {
    Ty = Ha();
    let a = Uy;
    Uy = [];
    for( let b = 0; b < a.length; b++ ) a[ b ]();
    Vy && ( Vy.takeRecords(), Uy.length || ( Vy && ( Vy.disconnect(), Vy = null ), Wy && ( z.clearTimeout( Wy ), Wy = null ) ) );
  };
  let Zy = function() {
    let a = Ha() - Ty;
    a >= Yy
      ? ( Wy && ( z.clearTimeout( Wy ), Wy = null ), Xy() )
      : Wy || ( Wy = z.setTimeout( function() {
        Xy();
        Wy = null;
      }, Yy - a ) );
  };
  let $y = function( a ) {
    if( !z.MutationObserver ) return !1;
    try {
      return Vy || ( Vy = new MutationObserver( Zy ), Vy.observe( C.documentElement, {
        'subtree': !0,
        'childList': !0,
        'attributes': !0,
        'characterData': !0
      }), Ty = Ha() ), Uy.push( a ),
      !0;
    }
    catch ( b ) {
      return !1;
    }
  };
  var Vy = null;
  var Uy = [];
  var Yy = 0;
  var Ty = 0;
  var Wy = null;
  let az = function( a, b ) {
    b && $y( a ) || z.setTimeout( a, 80 );
  };
  let dz = function( a ) {
    try {
      return xd( a );
    }
    catch ( b ) {
      return null;
    }
  };
  let lz = function( a ) {
    if( Mp ) return !0;
    for( ; a; ) {
      if( a.nextSibling ) return !0;
      a = a.parentNode;
    }
    return !1;
  };
  let mz = function( a, b ) {
    for( var c = dz( a.ma ) || [], d = [], e = 0; e < c.length; e++ ) {
      let f = c[ e ];
      if( !f.gtmProgressiveApplied || !f.gtmProgressiveApplied[ b ] ) {
        if( a.Ia && !lz( f ) ) break;
        d.push( f );
      }
    }
    return d;
  };
  let nz = function( a, b ) {
    return function() {
      a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[ b ];
    };
  };
  let oz = function( a, b ) {
    a.gtmProgressiveApplied
                || ( a.gtmProgressiveApplied = {});
    a.gtmProgressiveApplied[ b ] = !0;
  };
  let pz = function( a, b, c ) {
    let d;
    let e = [];
    if( b.Pa ) {
      if( b.Pa.Sf ) {
        d = [ {
          'element': C.head
        } ];
      }
      else {
        let f = mz( b.Pa, b.id );
        let g = null;
        b.ef && ( g = mz( b.ef, b.id + '-t' ) );
        for( let l = 0; l < f.length; l++ ) {
          let m = f[ l ];
          let n = void 0;
          if( g != null && ( n = g.length > l ? g[ l ] : null, !n && !Mp && ( b.ef.fa === null || b.Zh + e.length < b.ef.fa ) ) ) break;
          e.push({
            'element': m,
            'targetElement': n
          });
        }
        d = e;
      }
    }
    else d = e;
    let p = d;
    if( !Mp && b.Xj && ( !a || b.Pa.fa == null || b.Pa.fa != b.Ne + p.length ) ) return !1;
    for( let q = 0; q < p.length; q++ ) {
      let r = p[ q ].element;
      let t = p[ q ].targetElement;
      let u = void 0;
      b.Ne++;
      oz( r, b.id );
      t && ( b.Zh++, u = b.id + '-t', oz( t, u ) );
      let v = b.dk( r, t );
      sa( v ) && b.Cc.push( v );
      b.Cc.push( nz( r, b.id ) );
      t && u && b.Cc.push( nz( t, u ) );
    }
    if( b.Pa.fa && b.Pa.fa == b.Ne || Mp && ( !c || b.Ne ) ) b.finished = !0;
    return !0;
  };
  let qz = function( a ) {
    for( let b = {}, c = 0; c < a.Oa.length; c++ ) {
      let d = a.Oa[ c ];
      if( !d.Pa.Sf ) {
        let e = b[ d.Pa.ma ];
        e || ( e = b[ d.Pa.ma ] = dz( d.Pa.ma ) || [] );
        for( let f = 0; f < e.length; f++ ) {
          let g = e[ f ];
          g.gtmProgressiveApplied && g.gtmProgressiveApplied[ d.id ] || ( oz( g, d.id ), d.Cc.push( nz( g, d.id ) ) );
        }
      }
    }
  };
  let rz = function( a ) {
    if( !a.vg ) {
      for( let b =
                        a.Cd; b < a.Oa.length; b++ ) {
        let c = a.Oa[ b ];
        let d = b == a.Cd;
        if( !c.finished && !pz( d, c, a.Ki && a.Gi ) ) break;
        c.finished && d && a.Cd++;
      }
      a.Oa.length > a.Cd
        ? ( !a.pending && a.Ki && ( a.pending = !0, az( function() {
            a.pending = !1;
            rz( a );
          }, a.Gi ) ), Mp || a.pg || ( a.pg = function() {
            E( function() {
              rz( a );
            });
          }, Pb( C, 'DOMContentLoaded', a.pg ) ) )
        : qz( a );
    }
  };
  let sz = {};
  let tz = {};
  let uz = void 0;
  let vz = function( a, b, c, d ) {
    let e = uz;
    if( !wd || !e ) return !1;
    let f = {
      'id': e.id + ':' + e.Oa.length,
      'dk': b,
      'Cc': [],
      'Xj': c,
      'Pa': a,
      'Ne': 0,
      'ef': d || null,
      'Zh': 0,
      'finished': !1
    };
    e.Oa.push( f );
    a === null ? ( f.finished = !0, b( null ) ) : rz( e );
    return !0;
  };
  let wz = function( a ) {
    let b = ra;
    try {
      b = yu( a, 'visibility', 'hidden', !0 );
    }
    catch ( c ) {}
    return function() {
      sa( b ) && b.apply();
      b = null;
    };
  };
  let xz = function( a, b, c, d ) {
    let e = b;
    if( !Mp && !a.Sf ) {
      let f = wz( a.ma );
      Op.push( f );
      e = function( g, l ) {
        let m = b( g, l );
        f();
        return m;
      };
    }
    return vz( a, e, c, d );
  };
  let Z = {
    'o': {}
  };
  Z.o.dee = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__dee = a;
      Z.__dee.s = 'dee';
      Z.__dee.isVendorTemplate = !0;
      Z.__dee.priorityOverride = 0;
      Z.__dee.isInfrastructure = !1;
    })( function() {
      let a = !1;
      return a ? 'gtm.sync' : 'gtm.js';
    });
  }() );

  Z.o.sel = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__sel = a;
      Z.__sel.s = 'sel';
      Z.__sel.isVendorTemplate = !0;
      Z.__sel.priorityOverride = 0;
      Z.__sel.isInfrastructure = !1;
    })( function( a ) {
      return xd( a.vtp_selector );
    });
  }() );
  Z.o.c = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__c = a;
      Z.__c.s = 'c';
      Z.__c.isVendorTemplate = !0;
      Z.__c.priorityOverride = 0;
      Z.__c.isInfrastructure = !1;
    })( function( a ) {
      ku( a.vtp_value, 'c', a.vtp_gtmEventId );
      return a.vtp_value;
    });
  }() );
  Z.o.e = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__e = a;
      Z.__e.s = 'e';
      Z.__e.isVendorTemplate = !0;
      Z.__e.priorityOverride = 0;
      Z.__e.isInfrastructure = !1;
    })( function( a ) {
      return String( a.vtp_gtmCachedValues.event );
    });
  }() );
  Z.o.u = [ 'google' ],
  ( function() {
    let a = function( b ) {
      return {
        'toString': function() {
          return b;
        }
      };
    };
    ( function( b ) {
      Z.__u = b;
      Z.__u.s = 'u';
      Z.__u.isVendorTemplate = !0;
      Z.__u.priorityOverride = 0;
      Z.__u.isInfrastructure = !1;
    })( function( b ) {
      let c;
      c = ( c = b.vtp_customUrlSource ? b.vtp_customUrlSource : cu( 'gtm.url', 1 ) ) || $t();
      let d = b[ a( 'vtp_component' ) ];
      if( !d || d == 'URL' ) return bu( String( c ) );
      let e = xf( String( c ) );
      let f;
      if( d === 'QUERY' ) {
        a: {
          let g = b[ a( 'vtp_multiQueryKeys' ).toString() ];
          let l = b[ a( 'vtp_queryKey' ).toString() ] || '';
          let m = b[ a( 'vtp_ignoreEmptyQueryParam' ).toString() ];
          let n; g ? ua( l ) ? n = l : n = String( l ).replace( /\s+/g, '' ).split( ',' ) : n = [ String( l ) ];
          for( let p = 0; p < n.length; p++ ) {
            let q = vf( e, 'QUERY', void 0, void 0, n[ p ] );
            if( void 0 != q && ( !m || q !== '' ) ) {
              f = q;
              break a;
            }
          }
          f = void 0;
        }
      }
      else f = vf( e, d, d == 'HOST' ? b[ a( 'vtp_stripWww' ) ] : void 0, d == 'PATH' ? b[ a( 'vtp_defaultPages' ) ] : void 0 );
      return f;
    });
  }() );

  Z.o.dr = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__dr = a;
      Z.__dr.s = 'dr';
      Z.__dr.isVendorTemplate = !0;
      Z.__dr.priorityOverride = 0;
      Z.__dr.isInfrastructure = !1;
    })( function( a ) {
      let b = a.vtp_treatmentId;
      let c = a.vtp_activate;
      let d = a.vtp_contentSignature;
      let e = a.vtp_isEmpty;
      let f = cu( 'optimize.experimentCallback', 1 );
      let g = a.vtp_measurementId;
      let l = a.vtp_experimentCombination;
      let m = !!a.vtp_useMutationObserver;
      let n = m ? !!a.vtp_waitForElements : !0;
      let p;
      if( p = c ) {
        let q = sz[ g ];
        p = !( !q || q == b );
      }
      if( p ) a.vtp_gtmOnFailure();
      else {
        let r = cu( 'optimize.allowlist', 1 ) || cu( 'optimize.whitelist',
          1 );
        if( r && r[ g ] ? r[ g ] === d : xp() ? e : 1 ) {
          if( sa( f ) ) {
            let t = {
              'xid': g,
              'xvar': l,
              'activate': c
            };
            try {
              f( t );
            }
            catch ( I ) {}
          }
          let u = !1;
          let v = !0;
          if( c ) {
            let w;
            sz[ g ] = b;
            let x = tz[ b ];
            if( x ) {
              for( let y = x.Cd = 0; y < x.Oa.length; y++ ) x.Oa[ y ].finished = !1;
              rz( x );
              w = !0;
            }
            else w = !1;
            if( w ) u = !0;
            else {
              let A = tz[ b ];
              A || ( A = {
                'id': b,
                'Oa': [],
                'Cd': 0,
                'pending': !1,
                'pg': void 0,
                'vg': !1,
                'Gi': m,
                'Ki': n
              }, tz[ b ] = A );
              uz = A;
            }
          }
          else {
            let B = tz[ b ];
            if( !B || B.vg ) v = !1;
            else {
              for( ; B.Oa.length; ) {
                for( let D = B.Oa.pop(); D.Cc.length; ) {
                  let H = D.Cc.pop();
                  if( sa( H ) ) {
                    try {
                      H();
                    }
                    catch ( I ) {}
                  }
                }
              }
              B.vg = !0;
              delete tz[ b ];
              v = !0;
            }
          }
          v && ny( g, c
            ? l
            : void 0 );
          a[ u ? 'vtp_gtmOnFailure' : 'vtp_gtmOnSuccess' ]();
        }
        else a.vtp_gtmOnFailure();
      }
    });
  }() );
  Z.o.cie = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__cie = a;
      Z.__cie.s = 'cie';
      Z.__cie.isVendorTemplate = !0;
      Z.__cie.priorityOverride = 0;
      Z.__cie.isInfrastructure = !1;
    })( function( a ) {
      let b = a.vtp_experimentState;
      let c = a.vtp_trafficCoverageHash;
      return b !== '' && b[ 0 ] !== 'x' ? !0 : a.vtp_trafficCoverage > ( b == '' ? c : Number( b.substring( 1 ) ) );
    });
  }() );
  Z.o.asprv = [ 'google' ],
  ( function() {
    function a() {
      du({
        'event': 'optimize.domChange'
      });
      $y( a );
    }( function( b ) {
      Z.__asprv = b;
      Z.__asprv.s = 'asprv';
      Z.__asprv.isVendorTemplate = !0;
      Z.__asprv.priorityOverride = 0;
      Z.__asprv.isInfrastructure = !1;
    })( function( b ) {
      let c = b.vtp_globalName;
      let d = !!b.vtp_listenForMutations;
      let e = cu( 'eventModel' );
      c && ky( c );
      d && a();
      let f, g, l;
      e && ( f = e.name || '', g = e.callback, l = e.remove );
      if( g && sa( g ) ) {
        if( f = String( f ), !0 !== l ) {
          let m = f;
          let n = g;
          ly( m ).push( n );
          if( m !== '' ) void 0 !== jy[ m ] && my( n, m, jy[ m ] );
          else {
            for( let p in jy ) {
              void 0 !==
                                jy[ p ] && my( n, p, jy[ p ] );
            }
          }
        }
        else {
          let q = g;
          let r = ly( f );
          let t = r.indexOf( q );
          t >= 0 && r.splice( t, 1 );
        }
      } b.vtp_gtmOnSuccess();
    });
  }() );
  Z.o.gaoo_c = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__gaoo_c = a;
      Z.__gaoo_c.s = 'gaoo_c';
      Z.__gaoo_c.isVendorTemplate = !0;
      Z.__gaoo_c.priorityOverride = 0;
      Z.__gaoo_c.isInfrastructure = !1;
    })( function( a ) {
      let b = W( '_gaUserPrefs' );
      try {
        if( b && b.ioo && b.ioo() ) return !0;
      }
      catch ( e ) {}
      let c = xd( 'html' );
      if( c && c.length > 0 && c[ 0 ].hasAttribute( 'data-google-analytics-opt-out' ) || C.getElementById( '__gaOptOutExtension' ) ) return !0;
      let d = W( 'external' );
      return d && d._gaUserPrefs == 'oo' ? !0 : !!W( 'ga-disable-' + a.vtp_trackingId );
    });
  }() );


  Z.o.exs = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__exs = a;
      Z.__exs.s = 'exs';
      Z.__exs.isVendorTemplate = !0;
      Z.__exs.priorityOverride = 0;
      Z.__exs.isInfrastructure = !1;
    })( function( a ) {
      let b = Sy( a.vtp_cookieDomain, a.vtp_cookiePath ).yk( a.vtp_measurementId );
      if( b === '' ) return b;
      if( b[ 0 ] === 'x' ) {
        let c = Number( b.substring( 1 ) );
        if( b === 'x' || isNaN( c ) || c < 0 || c >= 1E3 ) return '';
      }
      else {
        let d = a.vtp_sections;
        if( d ) {
          let e = b.split( '-' );
          if( d.length != e.length ) return '';
          for( let f = 0; f < d.length; f++ ) { if( e[ f ] < 0 || e[ f ] >= d[ f ] ) return ''; }
        }
      }
      return b;
    });
  }() );


  Z.o.exsu = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__exsu = a;
      Z.__exsu.s = 'exsu';
      Z.__exsu.isVendorTemplate = !0;
      Z.__exsu.priorityOverride = 0;
      Z.__exsu.isInfrastructure = !1;
    })( function( a ) {
      Sy( a.vtp_cookieDomain, a.vtp_cookiePath ).Cl( a.vtp_measurementId, a.vtp_newState, a.vtp_expirationDay, a.vtp_max, a.vtp_expirationDates ) ? a.vtp_gtmOnSuccess() : a.vtp_gtmOnFailure();
    });
  }() );

  Z.o.ctto = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__ctto = a;
      Z.__ctto.s = 'ctto';
      Z.__ctto.isVendorTemplate = !0;
      Z.__ctto.priorityOverride = 0;
      Z.__ctto.isInfrastructure = !1;
    })( function( a ) {
      let b = a.vtp_isDynamic;
      let c = W( 'dataLayer' );
      let d = c && c.hide;
      if( !d ) return !1;
      let e = Ch();
      let f = W( 'document' );
      if( void 0 === f.querySelector ) return !1;
      let g = !!f.querySelector( 'body' );
      if( d.end !== null || !g ) return !1;
      if( !b ) return !0 === d[ e ];
      for( let l in d ) { if( d.hasOwnProperty( l ) && l.startsWith( e ) && !0 === d[ l ] ) return !0; }
      return !1;
    });
  }() );

  Z.o.cevi = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__cevi = a;
      Z.__cevi.s = 'cevi';
      Z.__cevi.isVendorTemplate = !0;
      Z.__cevi.priorityOverride = 0;
      Z.__cevi.isInfrastructure = !1;
    })( function( a ) {
      let b = a.vtp_experimentState;
      let c = a.vtp_serverVariationIndex;
      return b === '' || b[ 0 ] === 'x' ? c : Number( b.split( '-' )[ a.vtp_sectionIndex ] );
    });
  }() );


  Z.o.noop = [ 'google' ],
  ( function() {
    ( function( a ) {
      Z.__noop = a;
      Z.__noop.s = 'noop';
      Z.__noop.isVendorTemplate = !0;
      Z.__noop.priorityOverride = 0;
      Z.__noop.isInfrastructure = !1;
    })( function( a ) {
      a.vtp_gtmOnSuccess();
    });
  }() );


  Z.o.eximp = [ 'google' ],
  ( function() {
    let a = !1;
    ( function( b ) {
      Z.__eximp = b;
      Z.__eximp.s = 'eximp';
      Z.__eximp.isVendorTemplate = !0;
      Z.__eximp.priorityOverride = 0;
      Z.__eximp.isInfrastructure = !1;
    })( function( b ) {
      let c = b.vtp_trackingId;
      let d = b.vtp_measurementId;
      let e = b.vtp_variantId;
      if( a ) {
        Cy( c, d, e );
        let f = W( 'gaData', {}, !1 );
        f.expId = d;
        f.expVar = e;
        Ay( c, {
          'hitType': 'data'
        }, !1 );
      }
      else {
        Fy( c, d, e, b.vtp_gtmEventId,
          Tp( b.vtp_gtmEntityIndex, b.vtp_gtmEntityName ) );
      }
      b.vtp_gtmOnSuccess();
    });
  }() );
  let zz = {};
  zz.dataLayer = Oe;
  zz.callback = function( a ) {
    Ee.hasOwnProperty( a ) && sa( Ee[ a ] ) && Ee[ a ]();
    delete Ee[ a ];
  };
  zz.bootstrap = 0;
  zz._spx = !1;

  function Az() {
    ne[ Ch() ] = ne[ Ch() ] || zz;
    P( 77 ) || Dh( !0 ) && ( ne[ 'ctid_' + Dh( !0 ) ] = zz );
    Ih();
    Nh() || k( Oh(), function( a, b ) {
      pp( a, b.transportUrl, b.context );
      K( 92 );
    });
    Ka( Fe, Z.o );
    Qc = Zc;
  }
  ( function( a ) {
    function b() {
      m = C.documentElement.getAttribute( 'data-tag-assistant-present' );
      Zs( m ) && ( l = g.Ij );
    }
    if( !z.__TAGGY_INSTALLED ) {
      let c = !1;
      if( C.referrer ) {
        let d = xf( C.referrer );
        c = uf( d, 'host' ) === 'cct.google';
      }
      if( !c ) {
        let e = Ui( 'googTaggyReferrer' );
        c = e.length && e[ 0 ].length;
      }
      c && ( z.__TAGGY_INSTALLED = !0, Kb( 'https://cct.google/taggy/agent.js' ) );
    }
    if( ze ) a();
    else {
      let f = function( u ) {
        let v = 'GTM';
        let w = 'GTM';
        te ? ( v = 'OGT', w = 'GTAG' ) : ze && ( w = v = 'OPT' );
        let x = z[ 'google.tagmanager.debugui2.queue' ];
        x || ( x = [],
        z[ 'google.tagmanager.debugui2.queue' ] = x, Kb( 'https://' + me.be + '/debug/bootstrap?id=' + vh.ctid + '&src=' + w + '&cond=' + u + '&gtm=' + oj() ) );
        let y = {
          'messageType': 'CONTAINER_STARTING',
          'data': {
            'scriptSource': Eb,
            'containerProduct': v,
            'debug': !1,
            'id': vh.ctid,
            'destinations': zh()
          }
        };
        y.data.resume = function() {
          a();
        };
        me.Ni && ( y.data.initialPublish = !0 );
        x.push( y );
      };
      var g = {
        'Tl': 1,
        'Jj': 2,
        'Uj': 3,
        'Pi': 4,
        'Ij': 5
      };
      var l = void 0;
      var m = void 0;
      let n = vf( z.location, 'query', !1, void 0, 'gtm_debug' );
      Zs( n ) && ( l = g.Jj );
      if( !l && C.referrer ) {
        let p = xf( C.referrer );
        uf( p, 'host' ) === 'tagassistant.google.com' && ( l = g.Uj );
      }
      if( !l ) {
        let q =
                    Ui( '__TAG_ASSISTANT' );
        q.length && q[ 0 ].length && ( l = g.Pi );
      }
      l || b();
      if( !l && $s( m ) ) {
        let r = function() {
          if( t ) return !0;
          t = !0;
          b();
          l && Eb ? f( l ) : a();
        };
        var t = !1;
        Pb( C, 'TADebugSignal', function() {
          r();
        }, !1 );
        z.setTimeout( function() {
          r();
        }, 200 );
      }
      else l && Eb ? f( l ) : a();
    }
  })( function() {
    Gh();
    P( 32 ) && Co();
    yg().m();
    Zj();
    if( P( 76 ) ? Jh() : Dh( !0 ) ? ne[ 'ctid_' + Dh( !0 ) ] : ne[ Ch() ] ) {
      xr();
    }
    else {
      Pc();
      Jc = Z;
      Kc = Ku;
      Az();
      nh();
      Ys();
      Rp();
      ns = !1;
      C.readyState === 'complete' ? ps() : Pb( z, 'load', ps );
      Wh && ( Rh( ii ), z.setInterval( hi, 864E5 ) );
      Rh( Ou );
      Rh( Pq );
      Rh( Pu );
      Rh( Mr );
      Rh( $q );
      Rh( Ep );
      Rh( ek );
      Rh( Cp );
      Rh( Wq );
      Rh( Nu );
      P( 63 ) && Rh( Sq );
      Ps({
        'event': 'gtm.js'
      });
      ut();
      Ue( 1 );
      P( 74 ) && yr();
      De = Ha();
      zz.bootstrap = De;
      P( 32 ) && Do();
    }
  });
})();
