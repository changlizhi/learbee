webpackJsonp([1,0],[function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=s(10),n=o(i),r=s(95),l=o(r),a=s(94),c=o(a),d=s(86),p=o(d),u=s(88),f=o(u),v=s(90),h=o(v),m=s(91),g=o(m);s(61),n.default.use(l.default),n.default.use(c.default);var x=n.default.extend(p.default),y=new l.default({linkActiveClass:"active"});y.map({"/goods":{component:f.default},"/ratings":{component:h.default},"/seller":{component:g.default}}),y.start(x,"#app")},,,,,,,function(t,e,s){var o,i,n={};s(63),o=s(20),i=s(75),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(71),o=s(28),i=s(83),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(72),o=s(29),i=s(84),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},,function(t,e){"use strict";function s(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in s)if(new RegExp("("+i+")").test(e)){var n=s[i]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:o(n))}return e}function o(t){return("00"+t).substr(t.length)}Object.defineProperty(e,"__esModule",{value:!0}),e.formatOne=s},,,,,function(t,e,s){var o,i,n={};s(68),o=s(25),i=s(80),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,s){var o=window.localStorage.__seller__;o?(o=JSON.parse(o),o[t]||(o[t]={})):(o={},o[t]={}),o[t][e]=s,window.localStorage.__seller__=(0,l.default)(o)}function n(t,e,s){var o=window.localStorage.__seller__;if(!o)return s;if(o=JSON.parse(o)[t],!o)return s;var i=o[e];return i||s}Object.defineProperty(e,"__esModule",{value:!0});var r=s(31),l=o(r);e.saveToLocal=i,e.loadFromLocal=n},function(t,e){"use strict";function s(){var t=window.location.search,e={},s=/[?&][^?&]+=[^?&]+/g,o=t.match(s);return o&&o.forEach(function(t){var s=t.substring(1).split("="),o=decodeURIComponent(s[0]),i=decodeURIComponent(s[1]);e[o]=i}),e}Object.defineProperty(e,"__esModule",{value:!0}),e.urlparth=s},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(32),n=o(i),r=s(89),l=o(r),a=s(18);e.default={data:function(){return{seller:{id:function(){var t=(0,a.urlparth)();return t.id}()}}},created:function(){var t=this;this.$http.get("/api/data").then(function(e){e=e.body,e=JSON.parse(e),console.log(e),void 0!==e&&(t.seller=(0,n.default)({},t.seller,e.seller))})},components:{"v-header":l.default}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(10),n=o(i);e.default={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:(n.default.set(this.food,"count",1),this.food.count=1),this.$dispatch("cart.add",t.target))},decreaseCart:function(t){t._constructed&&this.food.count>0&&this.food.count--}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),n=o(i),r=s(7),l=o(r),a=s(10),c=o(a),d=s(8),p=o(d),u=s(16),f=o(u),v=s(11),h=2;e.default={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:h,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=h,this.onlyContent=!1,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new n.default(t.$els.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&(this.$dispatch("cart.add",t.target),c.default.set(this.food,"count",1))},needShow:function(t,e){return!(this.onlyContent&&!e)&&(this.selectType===h||t===this.selectType)}},events:{"ratingtype.select":function(t){var e=this;this.selectType=t,this.$nextTick(function(){e.scroll.refresh()})},"content.toggle":function(t){var e=this;this.onlyContent=t,this.$nextTick(function(){e.scroll.refresh()})}},filters:{formatDate:function(t){return(0,v.formatOne)(new Date(t),"yyyy-MM-dd hh:mm:ss")}},components:{cartcontrol:l.default,split:p.default,ratingselect:f.default}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),n=o(i),r=s(92),l=o(r),a=s(7),c=o(a),d=s(87),p=o(d);e.default={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var e=this.listHeight[t],s=this.listHeight[t+1];if(!s||this.scrollY>=e&&this.scrollY<s)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(e){e.foods.forEach(function(e){e.count&&t.push(e)})}),t}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$http.get("/api/data").then(function(e){e=e.body,e=JSON.parse(e),void 0!==e&&(t.goods=e.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})},methods:{showFood:function(t,e){e._constructed&&(this.selectedFood=t,this.$refs.food.show())},selectMenu:function(t,e){if(e._constructed){var s=this.$els.foodsWrapper.getElementsByClassName("food-list-hook"),o=s[t];this.foodScrooll.scrollToElement(o,300)}},_drop:function(t){this.$nextTick(function(){this.$refs.shopcart.drop(t)})},_initScroll:function(){var t=this;this.menuScroll=new n.default(this.$els.menuWrapper,{click:!0}),this.foodScrooll=new n.default(this.$els.foodsWrapper,{probeType:3,click:!0}),this.foodScrooll.on("scroll",function(e){t.scrollY=Math.abs(Math.round(e.y))})},_calculateHeight:function(){var t=this.$els.foodsWrapper.getElementsByClassName("food-list-hook"),e=0;this.listHeight.push(e);for(var s=0;s<t.length;s++){var o=t[s];e+=o.clientHeight,this.listHeight.push(e)}}},components:{shopcart:l.default,cartcontrol:c.default,food:p.default},events:{"cart.add":function(t){this._drop(t)}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(9),n=o(i),r=s(93),l=o(r);e.default={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},components:{star:n.default,textinline:l.default}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(11),n=s(9),r=o(n),l=s(8),a=o(l),c=s(16),d=o(c),p=s(1),u=o(p),f=2;e.default={props:{seller:{type:Object}},events:{"ratingtype.select":function(t){var e=this;this.selectType=t,this.$nextTick(function(){e.scroll.refresh()})},"content.toggle":function(t){var e=this;this.onlyContent=t,this.$nextTick(function(){e.scroll.refresh()})}},data:function(){return{ratings:[],showFlag:!1,selectType:f,onlyContent:!0}},filters:{formatDate:function(t){return(0,i.formatOne)(new Date(t),"yyyy-MM-dd hh:mm:ss")}},created:function(){var t=this;this.$http.get("/api/data").then(function(e){e=e.body,e=JSON.parse(e),void 0!==e&&(t.ratings=e.ratings,t.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new u.default(t.$els.elratings,{click:!0})}))})},components:{star:r.default,split:a.default,ratingselect:d.default},methods:{needShow:function(t,e){return!(this.onlyContent&&!e)&&(this.selectType===f||t===this.selectType)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=0,o=1,i=2;e.default={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:i},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},methods:{select:function(t,e){e._constructed&&(this.selectType=t,this.$dispatch("ratingtype.select",t))},toggleContent:function(t){t._constructed&&(this.onlyContent=!this.onlyContent,this.$dispatch("content.toggle",this.onlyContent))}},computed:{positives:function(){return this.ratings.filter(function(t){return t.rateType===s})},negatives:function(){return this.ratings.filter(function(t){return t.rateType===o})}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(9),n=o(i),r=s(8),l=o(r),a=s(1),c=o(a),d=s(17);e.default={props:{seller:{type:Object}},data:function(){var t=this;return{favorite:function(){return(0,d.loadFromLocal)(t.seller.id,"favorite",!1)}()}},components:{star:n.default,split:l.default},computed:{favoriteText:function(){return this.favorite?"收藏":"未收藏"}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},watch:{seller:function(){this._initScroll(),this._initPics()}},ready:function(){this._initScroll()},methods:{toggleFavorite:function(t){t._constructed&&(this.favorite=!this.favorite,(0,d.saveToLocal)(this.seller.id,"favorite",this.favorite))},_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new c.default(this.$els.seller,{click:!0})},_initPics:function(){var t=this;if(this.seller.pics){var e=120,s=6,o=(e+s)*this.seller.pics.length-s;this.$els.piclist.style.width=o+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new c.default(t.$els.picwrapper,{scrollX:!0,eventPassthrough:"vertical"})})}}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(7),n=o(i),r=s(1),l=o(r);e.default={props:{selectFoods:{type:Array},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBall:[],fold:!0}},components:{cartcontrol:n.default},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(e){t+=e.price*e.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(e){t+=e.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥"+this.minPrice+"元起送";if(this.totalPrice<this.minPrice){var t=this.minPrice-this.totalPrice;return"还差￥"+t+"元起送"}return"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var e=!this.fold;return e&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new l.default(t.$els.listContent,{click:!0})}),e}},methods:{drop:function(t){for(var e=0;e<this.balls.length;e++){var s=this.balls[e];if(!s.show)return this.show=!0,s.el=t,void this.dropBall.push(s)}},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},qingkong:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},toPay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice)}},transitions:{drop:{beforeEnter:function(t){var e=this.balls.length;for(console.log("fe"+e);e--;){var s=this.balls[e];if(s.show){var o=s.el.getBoundingClientRect(),i=o.left-32,n=-(window.innerHeight-o.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.getElementsByClassName("inner-hook"[0]);r.style.webkitTransform="translate3d("+i+"px,0,0)",r.style.transform="translate3d("+i+"px,0,0)"}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook"[0]);e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var e=this.dropBall.shift();e&&(e.show=!1,t.style.display="none")}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=5,o="on",i="half",n="off";e.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],e=Math.floor(2*this.score)/2,r=e%1!==0,l=Math.floor(e),a=0;a<l;a++)t.push(o);for(r&&t.push(i);t.length<s;)t.push(n);return t}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:{type:String}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=' <div> <v-header :seller=seller></v-header> <div class="tab bordertop-1px borderbottom-1px"> <div class=tab-item> <a v-link="{path:\'/goods\'}">商品</a> </div> <div class=tab-item> <a v-link="{path:\'/ratings\'}">评论</a> </div> <div class=tab-item> <a v-link="{path:\'/seller\'}">商家</a> </div> </div> <router-view :seller=seller keep-alive></router-view> </div> '},function(t,e){t.exports=' <div class=cartcontrol> <div class=cart-decrease transition=move @click.stop.prevent=decreaseCart v-show="food.count > 0"> <span class="inner icon-remove_circle_outline"></span> </div> <div class=cart-count v-show="food.count > 0">{{food.count}}</div> <div class="cart-add icon-add_circle" @click.stop.prevent=addCart> </div> </div> '},function(t,e){t.exports=' <div v-show=showFlag class=food transition=move v-el:food> <div class=food-content> <div class=image-header> <img :src=food.image /> <div class=back @click=hide> <i class=icon-arrow_lift></i> </div> </div> <div class=content> <h1 class=food-title>{{food.name}}</h1> <div class=detail> <span class=sell-count>月售{{food.sellCount}}份</span> <span class=rating>好评率{{food.rating}}%</span> </div> <div class=price> <span class=now>￥{{food.price}}</span><span class=old v-show=food.oldPrice>￥{{food.oldPrice}}</span> </div> <div class=cartcontrol-wrapper> <cartcontrol :food=food></cartcontrol> </div> <div @click.stop.prevent=addFirst class=buy-one v-show="!food.count || food.count === 0" transition=fade> 加入购物车 </div> </div> <split></split> <div class=food-info> <h1 class=info-title>商品介绍</h1> <span class=info-text>{{food.info}}</span> </div> <split></split> <div class=food-rating> <h1 class=rating-title>商品评价</h1> <ratingselect :select-type=selectType :only-content=onlyContent :desc=desc :ratings=food.ratings></ratingselect> <div class=rating-wrapper> <ul v-show="food.ratings && food.ratings.length"> <li v-show=needShow(rating.rateType,rating.text) v-for="rating in food.ratings" class="rating-item borderbottom-1px"> <div class=user> <span class=user-name>{{rating.username}}</span> <img class=avatar width=12 height=12 :src=rating.avatar /> </div> <div class=user-time>{{rating.rateTime | formatDate}}</div> <p class=user-text> <i :class="{\'icon-thumb_up\':rating.rateType === 0,\'icon-thumb_down\':rating.rateType === 1}"></i> <span> {{rating.text}} </span> </p> </li> </ul> <div class=no-rating v-show="!food.ratings || !food.ratings.length"> 暂无评价 </div> </div> </div> </div> </div> '},function(t,e){t.exports=' <div class=goods> <div class=menu-wrapper v-el:menu-wrapper> <ul> <li v-for="item in goods" class=menu-item @click=selectMenu($index,$event) :class="{\'current\':currentIndex===$index}"> <span class="text borderbottom-1px"> <span v-show="item.type > 0" class=icon :class=classMap[item.type]></span> {{item.name}} </span> </li> </ul> </div> <div class=foods-wrapper v-el:foods-wrapper> <ul> <li v-for="item in goods" class="food-list food-list-hook"> <h1 class=title>{{item.name}}</h1> <ul> <li @click=showFood(food,$event) v-for="food in item.foods" class="food-item borderbottom-1px"> <div class=icon> <img width=57 height=57 :src=food.icon> </div> <div class=content> <h2 class=name>{{food.name}}</h2> <p class=desc>{{food.description}}</p> <div class=extra> <span class=count>月售{{food.sellCount}}份</span> <span>好评率{{food.rating}}%</span> </div> <div class=price> <span class=now>￥{{food.price}}</span> <span class=old v-show=food.oldPrice>￥{{food.oldPrice}}</span> </div> <div class=cartcontrol-warpper> <cartcontrol :food=food></cartcontrol> </div> </div> </li> </ul> </li> </ul> </div> <shopcart v-ref:shopcart :select-foods=selectFoods :delivery-price=seller.deliveryPrice :min-price=seller.minPrice></shopcart> </div> <food :food=selectedFood v-ref:food></food> '},function(t,e){t.exports=' <div class=header> <div class=content-wrapper> <div class=avatar> <img width=64 height=64 :src=seller.avatar alt="img lose"/> </div> <div class=content> <div class=title> <span class=brand></span> <span class=name>{{seller.name}}</span> </div> <div class=description> {{seller.description}}/{{seller.deliveryTime}}分钟送达 </div> <div v-if=seller.supports class=supports> <span class=icon :class=classMap[seller.supports[0].type]></span> <span class=text>{{seller.supports[0].description }}</span> </div> </div> <div v-if=seller.supports class=supports-count @click=showDetail> <span class=count>{{seller.supports.length}}个</span> <i class=icon-keyboard_arrow_right></i> </div> </div> <div class=bulletin-wrapper @click=showDetail> <span class=bulletin-title></span> <span class=bulletin-text>{{seller.bulletin}}</span> <i class=icon-keyboard_arrow_right></i> </div> <div class=background> <img :src=seller.avatar width=100% height=100% /> </div> <div v-show=detailShow class=detail transition=fade> <div class="detail-wrapper clearfix"> <div class=detail-main> <h1 class=name>{{seller.name}}</h1> <div class=star-wrapper> <star :size=48 :score=seller.score></star> </div> <textinline :text="\'优惠信息\'"></textinline> <ul v-if=seller.supports class=supports> <li class=supports-item v-for="item in seller.supports"> <span class=icon :class=classMap[seller.supports[$index].type]></span> <span class=text>{{ seller.supports[$index].description }}</span> </li> </ul> <textinline :text="\'商家公告\'"></textinline> <div class=bulletin> <p class=content>{{ seller.bulletin }}</p> </div> </div> </div> <div class=detail-close @click=hideDetail> <i class=icon-close></i> </div> </div> </div> '},function(t,e){t.exports=' <div class=ratings v-el:elratings> <div class=ratings-content> <div class=overview> <div class=overview-left> <h1 class=rating-score>{{seller.score}}</h1> <div class=rating-title>综合评分</div> <div class=rating-rank>高于周边商家{{seller.rankRate}}%</div> </div> <div class=overview-right> <div class=score-wrapper> <span class=score-title>服务态度</span> <star :size=36 :score=seller.serviceScore></star> <span class=score-num>{{seller.serviceScore}}</span> </div> <div class=score-wrapper> <span class=score-title>商品评分</span> <star :size=36 :score=seller.foodScore></star> <span class=score-num>{{seller.foodScore}}</span> </div> <div class=delivery-wrapper> <span class=delivery-title>送达时间</span> <span class=delivery>{{seller.deliveryTime}}分钟</span> </div> </div> </div> <split></split> <ratingselect :select-type=selectType :desc=desc :ratings=ratings></ratingselect> <div class=rating-wrapper> <ul> <li v-for="rating in ratings" v-show=needShow(rating.rateType,rating.text) class=rating-item> <div class=avatar> <img width=28 height=28 :src=rating.avatar /> </div> <div class=content> <h1 class=name>{{rating.username}}</h1> <div class=star-wrapper> <star :size=24 :score=rating.score></star> <span class=delivery v-show=rating.deliveryTime>{{rating.deliveryTime}}分钟送达</span> </div> <p class=text>{{rating.text}}</p> <div class=recommend v-show=rating.recommend.length> <i class=icon-thumb_up></i> <span class=item v-for="item in rating.recommend">{{item}}</span> </div> <div class=time>{{rating.rateTime | formatDate}}</div> </div> </li> </ul> </div> </div> </div> '},function(t,e){t.exports=' <div class=rating-select> <div class="rating-type borderbottom-1px"> <span @click=select(2,$event) class="block positive" :class="{\'active\':selectType === 2}"> {{desc.all}} <span class=count>{{ratings.length}}</span> </span> <span @click=select(0,$event) class="block positive" :class="{\'active\':selectType === 0}"> {{desc.positive}} <span class=count>{{positives.length}}</span> </span> <span @click=select(1,$event) class="block negative" :class="{\'active\':selectType === 1}"> {{desc.negative}} <span class=count>{{negatives.length}}</span> </span> </div> <div @click=toggleContent class=rating-switch :class="{\'on\':onlyContent}"> <span class=icon-check_circle></span> <span class=switch-text>只看带有评价的信息</span> </div> </div> '},function(t,e){t.exports=' <div class=seller v-el:seller> <div class=seller-content> <div class=overview> <h1 class=seller-title>{{seller.name}}</h1> <div class="desc borderbottom-1px"> <star :size=36 :score=seller.score></star> <span class=text>({{seller.ratingCount}})</span> <span class=text>月售{{seller.sellCount}}单</span> </div> <ul class=remark> <li class=block> <h2>起送价</h2> <div class=content> <span class=stress>{{seller.minPrice}}</span>元 </div> </li> <li class=block> <h2>商家配送</h2> <div class=content> <span class=stress>{{seller.deliveryPrice}}</span>元 </div> </li> <li class=block> <h2>平均配送时间</h2> <div class=content> <span class=stress>{{seller.deliveryTime}}</span>分钟 </div> </li> </ul> <div class=favorite> <span class=icon-favorite :class="{\'active\':favorite}" @click=toggleFavorite></span> <span class=text>{{favoriteText}}</span> </div> </div> <split></split> <div class=bulletin> <h1 class=bulletin-title>公告与活动</h1> <div class="content-wrapper borderbottom-1px"> <p class=content-in>{{seller.bulletin}}</p> </div> <ul v-if=seller.supports class=supports> <li class="support-item borderbottom-1px" v-for="item in seller.supports"> <span class=item-icon :class=classMap[seller.supports[$index].type]></span> <span class=item-text>{{ seller.supports[$index].description }}</span> </li> </ul> </div> <split></split> <div class=pics> <h1 class=pics-title>商家实景</h1> <div class=pic-wrapper v-el:picwrapper> <ul class=pic-list v-el:piclist> <li class=pic-item v-for="pic in seller.pics"> <img :src=pic width=120 height=90 /> </li> </ul> </div> </div> <split></split> <div class=info> <h1 class="info-title borderbottom-1px">商家信息</h1> <ul> <li class=info-item v-for="info in seller.infos">{{info}}</li> </ul> </div> </div> </div> '},function(t,e){t.exports=' <div class=shopcart> <div class=content @click=toggleList> <div class=content-left> <div class=logo-wrapper> <div class=logo :class="{\'highlight\':totalCount > 0}"> <i class=icon-shopping_cart :class="{\'highlight\':totalCount > 0}"></i> </div> <div class=num v-show="totalCount > 0">{{totalCount}}</div> </div> <div class=price :class="{\'highlight\':totalPrice > 0}">{{totalPrice}}元</div> <div class=desc>￥另需配送费{{deliveryPrice}}元</div> </div> <div class=content-right @click.stop.prevent=toPay> <div class=pay :class=payClass> {{payDesc}} </div> </div> </div> <div class=ball-container> <div v-for="ball in balls" v-show=ball.show transition=drop class=ball> <div class="inner inner-hook"></div> </div> </div> <div class=shopcart-list transition=fold v-show=listShow> <div class=list-header> <h1 class=gouwuche>购物车</h1> <span class=qingkong @click=qingkong>清空</span> </div> <div class=list-content v-el:list-content> <ul> <li class=food v-for="food in selectFoods"> <span class=name>{{food.name}}</span> <div class=price> <span>￥{{ food.price * food.count }}</span> </div> <div class=cartcontrol-wrapper> <cartcontrol :food=food></cartcontrol> </div> </li> </ul> </div> </div> </div> <div class=list-mask v-show=listShow @click=hideList transition=fade></div> '},function(t,e){t.exports=" <div class=split> </div> "},function(t,e){t.exports=' <div class=star :class=starType> <span v-for="itemClass in itemClasses" :class=itemClass class=star-item track-by=$index> </span> </div> '},function(t,e){t.exports=" <div class=title> <div class=line></div> <div class=text>{{ text }}</div> <div class=line></div> </div> "},function(t,e,s){var o,i,n={};s(62),o=s(19),i=s(74),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(64),o=s(21),i=s(76),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(65),o=s(22),i=s(77),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(66),o=s(23),i=s(78),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(67),o=s(24),i=s(79),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(69),o=s(26),i=s(81),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(70),o=s(27),i=s(82),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(73),o=s(30),i=s(85),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},,,function(t,e){}]);