import"clsx";import{f as e,k as s,m as a,s as t}from"../../../chunks/index.js";import{T as l,S as o,N as n,a as c,C as i,B as r,M as u}from"../../../chunks/sparkles.js";import{S as h}from"../../../chunks/sidebar-menu-button.js";import{b as m,c as p,S as d,d as x}from"../../../chunks/index2.js";import{B as $}from"../../../chunks/button2.js";import{e as f}from"../../../chunks/context.js";import{N as j}from"../../../chunks/nav-secondary.js";import{S as v,a as b}from"../../../chunks/sidebar.js";import{S as g}from"../../../chunks/sidebar-header.js";import{S as k}from"../../../chunks/sidebar-rail2.js";import{C as M,T as w}from"../../../chunks/command.js";import{A as S}from"../../../chunks/audio-waveform.js";import{S as N}from"../../../chunks/search.js";import{H as y}from"../../../chunks/house.js";import{I as H}from"../../../chunks/inbox.js";import{S as z}from"../../../chunks/settings-2.js";import{R as V,P as A,a as B}from"../../../chunks/index5.js";import{S as I}from"../../../chunks/sidebar-group-content2.js";import{S as L}from"../../../chunks/sidebar-group.js";import{S as C,a as T}from"../../../chunks/sidebar-menu.js";import{I as E}from"../../../chunks/Icon.js";import{L as G}from"../../../chunks/link.js";import{G as P}from"../../../chunks/gallery-vertical-end.js";import{B as R}from"../../../chunks/bell.js";import{E as Z}from"../../../chunks/ellipsis.js";import{B as q,a as D,b as F,c as J}from"../../../chunks/breadcrumb-page.js";import{S as K}from"../../../chunks/separator2.js";import{S as O,a as Q}from"../../../chunks/sidebar-trigger.js";const U={teams:[{name:"شرکت آکمی",logo:M,plan:"سازمانی"},{name:"آکمی کورپ",logo:S,plan:"نوپا"},{name:"ایول کورپ",logo:M,plan:"رایگان"}],navMain:[{title:"جستجو",url:"#",icon:N},{title:"سوال از هوش مصنوعی",url:"#",icon:o},{title:"خانه",url:"#",icon:y,isActive:!0},{title:"صندوق ورودی",url:"#",icon:H,badge:"10"}],navSecondary:[{title:"تقویم",url:"#",icon:i},{title:"تنظیمات",url:"#",icon:z},{title:"قالب‌ها",url:"#",icon:r},{title:"سطل زباله",url:"#",icon:w},{title:"راهنما",url:"#",icon:u}],favorites:[{name:"مدیریت پروژه و پیگیری وظایف",url:"#",emoji:"📊"},{name:"مجموعه دستور غذایی خانوادگی",url:"#",emoji:"🍳"},{name:"پیگیر آمادگی جسمانی",url:"#",emoji:"💪"},{name:"یادداشت کتاب و لیست خواندن",url:"#",emoji:"📚"},{name:"نکات باغبانی پایدار",url:"#",emoji:"🌱"},{name:"پیشرفت یادگیری زبان",url:"#",emoji:"🗣️"},{name:"ایده‌های بازسازی خانه",url:"#",emoji:"🏠"},{name:"امور مالی شخصی",url:"#",emoji:"💰"},{name:"لیست فیلم و سریال",url:"#",emoji:"🎬"},{name:"پیگیر عادت روزانه",url:"#",emoji:"✅"}],workspaces:[{name:"مدیریت زندگی شخصی",emoji:"🏠",pages:[{name:"خاطرات روزانه",url:"#",emoji:"📔"},{name:"پیگیر سلامتی",url:"#",emoji:"🍏"},{name:"رشد شخصی و اهداف",url:"#",emoji:"🌟"}]},{name:"توسعه حرفه‌ای",emoji:"💼",pages:[{name:"اهداف شغلی",url:"#",emoji:"🎯"},{name:"یادگیری مهارت",url:"#",emoji:"🧠"},{name:"شبکه‌سازی",url:"#",emoji:"🤝"}]},{name:"پروژه‌های خلاقانه",emoji:"🎨",pages:[{name:"ایده‌های نوشتاری",url:"#",emoji:"✍️"},{name:"نمونه‌کار هنری",url:"#",emoji:"🖼️"},{name:"آهنگسازی موسیقی",url:"#",emoji:"🎵"}]},{name:"مدیریت خانه",emoji:"🏡",pages:[{name:"بودجه خانوار",url:"#",emoji:"💰"},{name:"برنامه نگهداری خانه",url:"#",emoji:"🔧"},{name:"تقویم خانوادگی",url:"#",emoji:"📅"}]},{name:"سفر و ماجراجویی",emoji:"🧳",pages:[{name:"برنامه‌ریزی سفر",url:"#",emoji:"🗺️"},{name:"لیست آرزوهای سفر",url:"#",emoji:"🌎"},{name:"خاطرات سفر",url:"#",emoji:"📸"}]}]};function W(o,i){o.component(o=>{let r,{ref:u=null,$$slots:d,$$events:x,...$}=i,M=!0;function w(a){a.push("\x3c!----\x3e"),v(a,t([{class:"border-r-0"},$,{get ref(){return u},set ref(e){u=e,M=!1},children:a=>{a.push("\x3c!----\x3e"),g(a,{children:a=>{l(a,{teams:U.teams}),a.push("\x3c!----\x3e "),function(a,t){let{items:l}=t;a.push("\x3c!----\x3e"),m(a,{children:a=>{a.push("\x3c!--[--\x3e");const t=e(l);for(let e=0,l=t.length;e<l;e++){let l=t[e];a.push("\x3c!----\x3e"),p(a,{children:e=>{e.push("\x3c!----\x3e");{let a=function(e,{props:a}){e.push(`<a${s({href:l.url,...a})}>\x3c!----\x3e`),l.icon(e,{}),e.push(`\x3c!----\x3e <span>${f(l.title)}</span></a>`)};h(e,{isActive:l.isActive,child:a,$$slots:{child:!0}})}e.push("\x3c!----\x3e")},$$slots:{default:!0}}),a.push("\x3c!----\x3e")}a.push("\x3c!--]--\x3e")},$$slots:{default:!0}}),a.push("\x3c!----\x3e")}(a,{items:U.navMain}),a.push("\x3c!----\x3e")},$$slots:{default:!0}}),a.push("\x3c!----\x3e \x3c!----\x3e"),b(a,{children:e=>{n(e,{favorites:U.favorites}),e.push("\x3c!----\x3e "),c(e,{workspaces:U.workspaces}),e.push("\x3c!----\x3e "),j(e,{items:U.navSecondary,class:"mt-auto"}),e.push("\x3c!----\x3e")},$$slots:{default:!0}}),a.push("\x3c!----\x3e \x3c!----\x3e"),k(a,{}),a.push("\x3c!----\x3e")},$$slots:{default:!0}}])),a.push("\x3c!----\x3e")}do{M=!0,r=o.copy(),w(r)}while(!M);o.subsume(r),a(i,{ref:u})})}const X=[[{label:"سفارشی‌سازی صفحه",icon:z},{label:"تبدیل به ویکی",icon:function(e,s){e.component(e=>{
/**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
let{$$slots:a,$$events:l,...o}=s;E(e,t([{name:"file-text"},o,{iconNode:[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]],children:e=>{o.children?.(e),e.push("\x3c!----\x3e")},$$slots:{default:!0}}]))})}}],[{label:"کپی لینک",icon:G},{label:"تکثیر",icon:function(e,s){e.component(e=>{
/**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
let{$$slots:a,$$events:l,...o}=s;E(e,t([{name:"copy"},o,{iconNode:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]],children:e=>{o.children?.(e),e.push("\x3c!----\x3e")},$$slots:{default:!0}}]))})}},{label:"انتقال به",icon:function(e,s){e.component(e=>{
/**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
let{$$slots:a,$$events:l,...o}=s;E(e,t([{name:"corner-up-right"},o,{iconNode:[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]],children:e=>{o.children?.(e),e.push("\x3c!----\x3e")},$$slots:{default:!0}}]))})}},{label:"انتقال به زباله‌دان",icon:w}],[{label:"برگشت",icon:function(e,s){e.component(e=>{
/**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
let{$$slots:a,$$events:l,...o}=s;E(e,t([{name:"corner-up-left"},o,{iconNode:[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}],["path",{d:"M9 14 4 9l5-5"}]],children:e=>{o.children?.(e),e.push("\x3c!----\x3e")},$$slots:{default:!0}}]))})}},{label:"مشاهده آمار",icon:function(e,s){e.component(e=>{
/**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
let{$$slots:a,$$events:l,...o}=s;E(e,t([{name:"chart-line"},o,{iconNode:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]],children:e=>{o.children?.(e),e.push("\x3c!----\x3e")},$$slots:{default:!0}}]))})}},{label:"تاریخچه نسخه‌ها",icon:P},{label:"نمایش صفحات حذف‌شده",icon:function(e,s){e.component(e=>{
/**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
let{$$slots:a,$$events:l,...o}=s;E(e,t([{name:"trash"},o,{iconNode:[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]],children:e=>{o.children?.(e),e.push("\x3c!----\x3e")},$$slots:{default:!0}}]))})}},{label:"اعلان‌ها",icon:R}],[{label:"وارد کردن",icon:function(e,s){e.component(e=>{
/**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
let{$$slots:a,$$events:l,...o}=s;E(e,t([{name:"arrow-up"},o,{iconNode:[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]],children:e=>{o.children?.(e),e.push("\x3c!----\x3e")},$$slots:{default:!0}}]))})}},{label:"خروجی گرفتن",icon:function(e,s){e.component(e=>{
/**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
let{$$slots:a,$$events:l,...o}=s;E(e,t([{name:"arrow-down"},o,{iconNode:[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]],children:e=>{o.children?.(e),e.push("\x3c!----\x3e")},$$slots:{default:!0}}]))})}}]];function Y(s,a){s.component(s=>{let a,l=!1,o=!0;function n(s){s.push('<div class="flex items-center gap-2 text-sm"><div class="text-muted-foreground hidden font-medium md:inline-block">ویرایش مهر 08</div> '),$(s,{variant:"ghost",size:"icon",class:"size-7",children:e=>{!function(e,s){e.component(e=>{
/**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
let{$$slots:a,$$events:l,...o}=s;E(e,t([{name:"star"},o,{iconNode:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]],children:e=>{o.children?.(e),e.push("\x3c!----\x3e")},$$slots:{default:!0}}]))})}(e,{})},$$slots:{default:!0}}),s.push("\x3c!----\x3e \x3c!----\x3e"),V(s,{get open(){return l},set open(e){l=e,o=!1},children:s=>{s.push("\x3c!----\x3e");A(s,{child:function(e,{props:s}){$(e,t([s,{variant:"ghost",size:"icon",class:"data-[state=open]:bg-accent size-7",children:e=>{Z(e,{})},$$slots:{default:!0}}]))},$$slots:{child:!0}});s.push("\x3c!----\x3e \x3c!----\x3e"),B(s,{class:"w-56 overflow-hidden rounded-lg p-0",align:"start",children:s=>{s.push("\x3c!----\x3e"),v(s,{collapsible:"none",class:"bg-transparent",children:s=>{s.push("\x3c!----\x3e"),b(s,{children:s=>{s.push("\x3c!--[--\x3e");const a=e(X);for(let t=0,l=a.length;t<l;t++){let l=a[t];s.push("\x3c!----\x3e"),L(s,{class:"border-b last:border-none",children:s=>{s.push("\x3c!----\x3e"),I(s,{class:"gap-0",children:s=>{s.push("\x3c!----\x3e"),C(s,{children:s=>{s.push("\x3c!--[--\x3e");const a=e(l);for(let e=0,t=a.length;e<t;e++){let t=a[e];s.push("\x3c!----\x3e"),T(s,{children:e=>{e.push("\x3c!----\x3e"),d(e,{class:"hover:bg-accent hover:text-accent-foreground flex-row-reverse text-right",children:e=>{e.push("\x3c!----\x3e"),t.icon(e,{}),e.push(`\x3c!----\x3e <span>${f(t.label)}</span>`)},$$slots:{default:!0}}),e.push("\x3c!----\x3e")},$$slots:{default:!0}}),s.push("\x3c!----\x3e")}s.push("\x3c!--]--\x3e")},$$slots:{default:!0}}),s.push("\x3c!----\x3e")},$$slots:{default:!0}}),s.push("\x3c!----\x3e")},$$slots:{default:!0}}),s.push("\x3c!----\x3e")}s.push("\x3c!--]--\x3e")},$$slots:{default:!0}}),s.push("\x3c!----\x3e")},$$slots:{default:!0}}),s.push("\x3c!----\x3e")},$$slots:{default:!0}}),s.push("\x3c!----\x3e")},$$slots:{default:!0}}),s.push("\x3c!----\x3e</div>")}do{o=!0,a=s.copy(),n(a)}while(!o);s.subsume(a)})}function _(e){x(e,{children:e=>{W(e,{side:"right"}),e.push("\x3c!----\x3e "),O(e,{children:e=>{e.push('<header class="flex h-14 shrink-0 items-center gap-2"><div class="flex flex-1 items-center gap-2 px-3">'),Q(e,{}),e.push("\x3c!----\x3e "),K(e,{orientation:"vertical",class:"ms-2 data-[orientation=vertical]:h-4"}),e.push("\x3c!----\x3e "),q(e,{children:e=>{D(e,{children:e=>{F(e,{children:e=>{J(e,{class:"line-clamp-1",children:e=>{e.push("\x3c!----\x3eمدیریت پروژه و پیگیری وظایف")},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),e.push('\x3c!----\x3e</div> <div class="ms-auto px-3">'),Y(e),e.push('\x3c!----\x3e</div></header> <div class="flex flex-1 flex-col gap-4 px-4 py-10"><div class="bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl"></div> <div class="bg-muted/50 mx-auto h-full w-full max-w-3xl rounded-xl"></div></div>')},$$slots:{default:!0}}),e.push("\x3c!----\x3e")},$$slots:{default:!0}})}export{_ as default};
