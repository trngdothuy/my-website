google.maps.__gjsload__('overlay', function(_){var nu=function(a){this.g=a},Ila=function(){},ou=function(a){a.No=a.No||new Ila;return a.No},Jla=function(a){this.Ca=new _.ei(function(){var b=a.No;if(a.getPanes()){if(a.getProjection()){if(!b.En&&a.onAdd)a.onAdd();b.En=!0;a.draw()}}else{if(b.En)if(a.onRemove)a.onRemove();else a.remove();b.En=!1}},0)},Kla=function(a,b){function c(){return _.fi(e.Ca)}var d=ou(a),e=d.nm;e||(e=d.nm=new Jla(a));_.kb(d.Na||[],_.M.removeListener);var f=d.Ma=d.Ma||new _.ws,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Ks=d.Ks||new nu(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Na=[_.M.addListener(a,"panes_changed",c),_.M.addListener(g,"zoom_changed",c),_.M.addListener(g,"offset_changed",c),_.M.addListener(b,"projection_changed",c),_.M.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.Bf&&(_.ig(b,"Ox"),_.O(b,148440))},Ola=function(a){if(a){var b=a.getMap();if(Lla(a)!==b&&b&&b instanceof _.Bf){var c=b.__gm;c.overlayLayer?a.__gmop=new Mla(b,a,c.overlayLayer):c.g.then(function(d){d=d.Da;var e=new pu(b,d);d.Va(e);c.overlayLayer=e;Nla(a);Ola(a)})}}},Nla=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.g.unbindAll(),b.g.set("panes",null),b.g.set("projection",null),b.j.Bf(b),b.h&&(b.h=!1,b.g.onRemove?b.g.onRemove():b.g.remove()))}},Lla=function(a){return(a=a.__gmop)?a.map:null},
Mla=function(a,b,c){this.map=a;this.g=b;this.j=c;this.h=!1;_.ig(this.map,"Ox");_.O(this.map,148440);c.Se(this)},Pla=function(a,b){a.g.get("projection")!=b&&(a.g.bindTo("panes",a.map.__gm),a.g.set("projection",b))},pu=function(a,b){this.o=a;this.j=b;this.g=null;this.h=[]};_.Pa(nu,_.N);
nu.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.pe(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};var qu={};_.Pa(Jla,_.N);qu.Se=function(a){if(a){var b=a.getMap();(ou(a).qs||null)!==b&&(b&&Kla(a,b),ou(a).qs=b)}};qu.Bf=function(a){var b=ou(a),c=b.Ma;c&&c.unbindAll();(c=b.Ks)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Na&&_.kb(b.Na,_.M.removeListener);b.Na=null;b.nm&&(b.nm.Ca.cd(),b.nm=null);delete ou(a).qs};var ru={};Mla.prototype.draw=function(){this.h||(this.h=!0,this.g.onAdd&&this.g.onAdd());this.g.draw&&this.g.draw()};pu.prototype.dispose=function(){};pu.prototype.mc=function(a,b,c,d,e,f,g,h){var k=this.g=this.g||new _.eq(this.o,this.j,function(){});k.mc(a,b,c,d,e,f,g,h);a=_.y(this.h);for(b=a.next();!b.done;b=a.next())b=b.value,Pla(b,k),b.draw()};pu.prototype.Se=function(a){this.h.push(a);this.g&&Pla(a,this.g);this.j.refresh()};pu.prototype.Bf=function(a){_.pb(this.h,a)};ru.Se=Ola;ru.Bf=Nla;_.kf("overlay",{hq:function(a){if(a){(0,qu.Bf)(a);(0,ru.Bf)(a);var b=a.getMap();b&&(b instanceof _.Bf?(0,ru.Se)(a):(0,qu.Se)(a))}},preventMapHitsFrom:function(a){_.Hq(a,{onClick:function(b){_.Gl(b.event.Ia)},Oc:function(b){return _.lq(b)},th:function(b){return _.mq(b)},xd:function(b){return _.mq(b)},Wc:function(b){return _.nq(b)}}).Bi(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.qf);a.addEventListener("contextmenu",_.qf);a.addEventListener("dblclick",_.qf);a.addEventListener("mousedown",
_.qf);a.addEventListener("mousemove",_.qf);a.addEventListener("MSPointerDown",_.qf);a.addEventListener("pointerdown",_.qf);a.addEventListener("touchstart",_.qf);a.addEventListener("wheel",_.qf)}});});
