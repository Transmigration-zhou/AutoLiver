var r = function t(e) {
                    if (e < -128)
                        return t(128 - (-128 - e));
                    if (e >= -128 && e <= 127)
                        return e;
                    if (e > 127)
                        return t(-129 + e - 127);
                    throw new Error("1001")
                }
                  , i = function(t, e) {
                    return r(t + e)
                }
                  , o = function(t, e) {
                    if (null == t)
                        return null;
                    if (null == e)
                        return t;
                    for (var n = [], r = e.length, o = 0, u = t.length; o < u; o++)
                        n[o] = i(t[o], e[o % r]);
                    return n
                }
                  , u = function(t, e) {
                    return t = r(t),
                    e = r(e),
                    r(t ^ e)
                }
                  , a = function(t, e) {
                    if (null == t || null == e || t.length != e.length)
                        return t;
                    for (var n = [], r = 0, i = t.length; r < i; r++)
                        n[r] = u(t[r], e[r]);
                    return n
                }
                  , s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
                  , c = function(t) {
                    var e = [];
                    return e.push(s[t >>> 4 & 15]),
                    e.push(s[15 & t]),
                    e.join("")
                }
                  , l = function(t) {
                    if (null == t || 0 == t.length)
                        return [];
                    for (var e = new String(t), n = [], i = e.length / 2, o = 0, u = 0; u < i; u++) {
                        var a = parseInt(e.charAt(o++), 16) << 4
                          , s = parseInt(e.charAt(o++), 16);
                        n[u] = r(a + s)
                    }
                    return n
                }
                  , p = function(t) {
                    if (null == t || null == t)
                        return t;
                    for (var e = encodeURIComponent(t), n = [], r = e.length, i = 0; i < r; i++)
                        if ("%" == e.charAt(i)) {
                            if (!(i + 2 < r))
                                throw new Error("1009");
                            n.push(l(e.charAt(++i) + "" + e.charAt(++i))[0])
                        } else
                            n.push(e.charCodeAt(i));
                    return n
                }
                  , d = function(t) {
                    var e = [];
                    return e[0] = t >>> 24 & 255,
                    e[1] = t >>> 16 & 255,
                    e[2] = t >>> 8 & 255,
                    e[3] = 255 & t,
                    e
                }
                  , f = function(t) {
                    return function(t) {
                        var e = t.length;
                        if (null == t || e < 0)
                            return new String("");
                        for (var n = [], r = 0; r < e; r++)
                            n.push(c(t[r]));
                        return n.join("")
                    }(d(t))
                }
                  , h = function(t, e, n) {
                    var r = [];
                    if (null == t || 0 == t.length)
                        return r;
                    if (t.length < n)
                        throw new Error("1003");
                    for (var i = 0; i < n; i++)
                        r[i] = t[e + i];
                    return r
                }
                  , v = function(t, e, n, r, i) {
                    if (null == t || 0 == t.length)
                        return n;
                    if (null == n)
                        throw new Error("1004");
                    if (t.length < i)
                        throw new Error("1003");
                    for (var o = 0; o < i; o++)
                        n[r + o] = t[e + o];
                    return n
                }
                  , g = function(t) {
                    for (var e = [], n = 0; n < t; n++)
                        e[n] = 0;
                    return e
                }
                  , m = function(t, e, n) {
                    var r, i, o, u = ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"], a = [];
                    if (1 == n)
                        r = t[e],
                        i = 0,
                        o = 0,
                        a.push(u[r >>> 2 & 63]),
                        a.push(u[(r << 4 & 48) + (i >>> 4 & 15)]),
                        a.push("3"),
                        a.push("3");
                    else if (2 == n)
                        r = t[e],
                        i = t[e + 1],
                        o = 0,
                        a.push(u[r >>> 2 & 63]),
                        a.push(u[(r << 4 & 48) + (i >>> 4 & 15)]),
                        a.push(u[(i << 2 & 60) + (o >>> 6 & 3)]),
                        a.push("3");
                    else {
                        if (3 != n)
                            throw new Error("1010");
                        r = t[e],
                        i = t[e + 1],
                        o = t[e + 2],
                        a.push(u[r >>> 2 & 63]),
                        a.push(u[(r << 4 & 48) + (i >>> 4 & 15)]),
                        a.push(u[(i << 2 & 60) + (o >>> 6 & 3)]),
                        a.push(u[63 & o])
                    }
                    return a.join("")
                }
                  , y = function(t) {
                    if (null == t || null == t)
                        return null;
                    if (0 == t.length)
                        return "";
                    try {
                        for (var e = [], n = 0; n < t.length; ) {
                            if (!(n + 3 <= t.length)) {
                                e.push(m(t, n, t.length - n));
                                break
                            }
                            e.push(m(t, n, 3)),
                            n += 3
                        }
                        return e.join("")
                    } catch (t) {
                        throw new Error("1010")
                    }
                }
                  , w = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
                  , b = function(t) {
                    var e = 4294967295;
                    if (null != t)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            e = e >>> 8 ^ w[255 & (e ^ r)]
                        }
                    return f(4294967295 ^ e)
                }
                  , k = function(t) {
                    return b(null == t ? [] : p(t))
                }
                  , x = [120, 85, -95, -84, 122, 38, -16, -53, -11, 16, 55, 3, 125, -29, 32, -128, -94, 77, 15, 106, -88, -100, -34, 88, 78, 105, -104, -90, -70, 90, -119, -28, -19, -47, -111, 117, -105, -62, -35, 2, -14, -32, 114, 23, -21, 25, -7, -92, 96, -103, 126, 112, -113, -65, -109, -44, 47, 48, 86, 75, 62, -26, 72, -56, -27, 66, -42, 63, 14, 92, 59, -101, 19, -33, 12, -18, -126, -50, -67, 42, 7, -60, -81, -93, -86, 40, -69, -37, 98, -63, -59, 108, 46, -45, 93, 102, 65, -79, 73, -23, -46, 37, -114, -15, 44, -54, 99, -10, 60, -96, 76, 26, 61, -107, 18, -116, -55, -40, 57, -76, -82, 45, 0, -112, -77, 29, 43, -30, 109, -91, -83, 107, 101, 81, -52, -71, 84, 36, -41, 68, 39, -75, -122, -6, 11, -80, -17, -74, -73, 35, 49, -49, -127, 80, 103, 79, -25, 52, -43, 56, 41, -61, -24, 17, -118, 115, -38, 8, -78, 33, -85, -106, 58, -98, -108, 94, 116, -125, -51, -9, 71, 82, 87, -115, 9, 69, -123, 123, -117, 113, -22, -124, -87, 64, 13, 21, -89, -2, -99, -97, 1, -4, 34, 20, 83, 119, 30, -12, -110, -66, 118, -48, 6, -36, 104, -58, -102, 97, 5, -20, 31, -72, 70, -39, 67, -68, -57, 110, 89, 51, 10, -120, 28, 111, 127, 22, -3, 54, 53, -1, 100, 74, 50, 91, 27, -31, -5, -64, 124, -121, 24, -13, 95, 121, -8, 4]
                  , Z = function(t) {
                    var e = [];
                    if (null == t || null == t || 0 == t.length)
                        return g(4);
                    if (t.length >= 4)
                        return h(t, 0, 4);
                    for (var n = 0; n < 4; n++)
                        e[n] = t[n % t.length];
                    return e
                }
                  , C = function(t) {
                    if (null == t)
                        return null;
                    for (var e, n = [], r = 0, i = t.length; r < i; r++)
                        n[r] = (e = t[r],
                        x[16 * (e >>> 4 & 15) + (15 & e)]);
                    return n
                }
                  , S = function(t, e) {
                    if (null == t)
                        return null;
                    for (var n = r(e), i = [], o = t.length, a = 0; a < o; a++)
                        i.push(u(t[a], n));
                    return i
                }
                  , T = function(t) {
                    var e = function(t, e) {
                        if (null == t)
                            return null;
                        for (var n = r(e), o = [], u = t.length, a = 0; a < u; a++)
                            o.push(i(t[a], n));
                        return o
                    }(S(t, 56), -40);
                    return S(e, 103)
                }
                  , I = function(t, e) {
                    null == t && (t = []);
                    var n = function() {
                        for (var t = [], e = 0; e < 4; e++) {
                            var n = 256 * Math.random();
                            n = Math.floor(n),
                            t[e] = r(n)
                        }
                        return t
                    }();
                    e = Z(e),
                    e = a(e, Z(n));
                    var i = e = Z(e)
                      , u = function(t) {
                        if (null == t || t.length % 4 != 0)
                            throw new Error("1005");
                        for (var e = [], n = 0, r = t.length / 4, i = 0; i < r; i++) {
                            e[i] = [];
                            for (var o = 0; o < 4; o++)
                                e[i][o] = t[n++]
                        }
                        return e
                    }(function(t) {
                        if (null == t || null == t || 0 == t.length)
                            return g(4);
                        var e = t.length
                          , n = 0;
                        n = e % 4 <= 0 ? 4 - e % 4 - 4 : 8 - e % 4 - 4;
                        var r = [];
                        v(t, 0, r, 0, e);
                        for (var i = 0; i < n; i++)
                            r[e + i] = 0;
                        var o = d(e);
                        return v(o, 0, r, e + n, 4),
                        r
                    }(t))
                      , s = [];
                    v(n, 0, s, 0, 4);
                    for (var c = u.length, l = 0; l < c; l++) {
                        var p = T(u[l])
                          , f = a(p, e)
                          , h = o(f, i);
                        f = a(h, i);
                        var m = C(f);
                        m = C(m),
                        v(m, 0, s, 4 * l + 4, 4),
                        i = m
                    }
                    return s
                };

function uuid(t, e) {
                    var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
                      , r = []
                      , i = void 0;
                    if (e = e || n.length,
                    t)
                        for (i = 0; i < t; i++)
                            r[i] = n[0 | Math.random() * e];
                    else {
                        var o = void 0;
                        for (r[8] = r[13] = r[18] = r[23] = "-",
                        r[14] = "4",
                        i = 0; i < 36; i++)
                            r[i] || (o = 0 | 16 * Math.random(),
                            r[i] = n[19 === i ? 3 & o | 8 : o])
                    }
                    return r.join("")
                }
function eypt(t) {
                    var e = "14731382d816714fC59E47De5dA0C871D3F";
                    null != t && null != t || (t = "");
                    var n = t + k(t)
                      , r = p(n)
                      , i = p(e)
                      , o = I(r, i);
                    return y(o)
                }
function sample(t, e) {
                    if (!t || !Array.isArray(t))
                        return [];
                    var n = t.length;
                    if (n <= e)
                        return t;
                    var r = 0;
                    return t.filter((function(t, i) {
                        return i >= r * (n - 1) / (e - 1) && (r++,
                        !0)
                    }
                    ))
                }
function xor_encode(t, e) {
                    return e = function(t, e) {
                        return e.split("").map((function(e, n) {
                            return e.charCodeAt(0) ^ function(t, e) {
                                return t.charCodeAt(Math.floor(e % t.length))
                            }(t, n)
                        }
                        ))
                    }(t, e),
                    y(e)
                }
function cb() {
                    var t = uuid(32);
                    return eypt(t)
                }
function mm() {
                    var t = eypt(sample(l, 50).join(":"));
                    return t
                }
function pp() {
                    var t = eypt(xor_encode(token, [0, 0, randomInteger] + ""));
                    return t;
                }
function ext() {
                    var t = eypt(xor_encode(token, "1," + 0));
                    return t;
                }
function getRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomInteger = getRandomIntegerInRange(5000, 6000);
const token = process.argv[2];
// var token = "07d7d9c7c598456ee29c9e6845f433c6";
function main(){
    return t = [cb(), mm(), pp(), ext()];
}
var ssss = main()
console.log(ssss)
