"use strict";(self["webpackChunkvue_url_arcgis"]=self["webpackChunkvue_url_arcgis"]||[]).push([[1030],{51030:function(t,e,i){i.r(e),i.d(e,{default:function(){return l}});var a=i(63825),s=i(87441),r=i(24446),n=i(2553),h=(i(57787),i(35425),i(90202),i(92236)),d=i(26797),o=i(21211),u=i(33503),c=i(74139),p=i(68801);const y=s.Z.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let g=class extends((0,p.y)((0,o.y)(c.Z))){update(t){this.strategy.update(t).catch((t=>{(0,r.D_)(t)||y.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new d.c,this.container.addChild(this._bitmapContainer),this.strategy=new u.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};(0,a._)([(0,n.Cb)()],g.prototype,"strategy",void 0),(0,a._)([(0,n.Cb)()],g.prototype,"updating",void 0),g=(0,a._)([(0,h.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],g);const l=g}}]);