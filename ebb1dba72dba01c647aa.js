/*! For license information please see ebb1dba72dba01c647aa.js.LICENSE.txt */
(globalThis.webpackChunkreact_data_grid=globalThis.webpackChunkreact_data_grid||[]).push([[738],{94184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var u in n)o.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},31738:(e,t,n)=>{"use strict";n.d(t,{xV:()=>q,W4:()=>Y,sN:()=>j,Wd:()=>K});var o=n(67294),r=n(45697),i=n.n(r),s=n(94184),u=n.n(s),a=n(27418),l=n.n(a);function c(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e&&e.apply(void 0,n)}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var p="react-contextmenu",f="react-contextmenu--visible",h="react-contextmenu-item",b="react-contextmenu-item--disabled",v="react-contextmenu-item--selected",m={},y=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),g="REACT_CONTEXTMENU_SHOW",M="REACT_CONTEXTMENU_HIDE";function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=void 0;"function"==typeof window.CustomEvent?o=new window.CustomEvent(e,{detail:t}):(o=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!0,t),n&&(n.dispatchEvent(o),l()(m,t))}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];w(g,l()({},e,{type:g}),t)}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];w(M,l()({},e,{type:M}),t)}const E=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleShowEvent=function(e){for(var n in t.callbacks)d(t.callbacks,n)&&t.callbacks[n].show(e)},this.handleHideEvent=function(e){for(var n in t.callbacks)d(t.callbacks,n)&&t.callbacks[n].hide(e)},this.register=function(e,n){var o=Math.random().toString(36).substring(7);return t.callbacks[o]={show:e,hide:n},o},this.unregister=function(e){e&&t.callbacks[e]&&delete t.callbacks[e]},this.callbacks={},y&&(window.addEventListener(g,this.handleShowEvent),window.addEventListener(M,this.handleHideEvent))};var T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},k=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var P=function(e){function t(){var e,n,o;x(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=o=H(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleClick=function(e){0!==e.button&&1!==e.button&&e.preventDefault(),o.props.disabled||o.props.divider||(c(o.props.onClick,e,l()({},o.props.data,m.data),m.target),o.props.preventClose||C())},H(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),k(t,[{key:"render",value:function(){var e,t=this,n=this.props,r=n.attributes,i=n.children,s=n.className,a=n.disabled,l=n.divider,c=n.selected,d=u()(s,h,r.className,(S(e={},u()(b,r.disabledClassName),a),S(e,u()("react-contextmenu-item--divider",r.dividerClassName),l),S(e,u()(v,r.selectedClassName),c),e));return o.createElement("div",T({},r,{className:d,role:"menuitem",tabIndex:"-1","aria-disabled":a?"true":"false","aria-orientation":l?"horizontal":null,ref:function(e){t.ref=e},onMouseMove:this.props.onMouseMove,onMouseLeave:this.props.onMouseLeave,onTouchEnd:this.handleClick,onClick:this.handleClick}),l?null:i)}}]),t}(o.Component);P.propTypes={attributes:i().object,children:i().node,className:i().string,data:i().object,disabled:i().bool,divider:i().bool,onClick:i().func,onMouseLeave:i().func,onMouseMove:i().func,preventClose:i().bool,selected:i().bool},P.defaultProps={attributes:{},children:null,className:"",data:{},disabled:!1,divider:!1,onClick:function(){return null},onMouseMove:function(){return null},onMouseLeave:function(){return null},preventClose:!1,selected:!1};const j=P;var _=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return L.call(n),n.seletedItemRef=null,n.state={selectedItem:null,forceSubMenuOpen:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(o.Component);_.propTypes={children:i().node.isRequired};var L=function(){var e=this;this.handleKeyNavigation=function(t){if(!1!==e.state.isVisible)switch(t.keyCode){case 37:case 27:t.preventDefault(),e.hideMenu(t);break;case 38:t.preventDefault(),e.selectChildren(!0);break;case 40:t.preventDefault(),e.selectChildren(!1);break;case 39:e.tryToOpenSubMenu(t);break;case 13:t.preventDefault(),e.tryToOpenSubMenu(t);var n=e.seletedItemRef&&e.seletedItemRef.props&&e.seletedItemRef.props.disabled;e.seletedItemRef&&e.seletedItemRef.ref instanceof HTMLElement&&!n?e.seletedItemRef.ref.click():e.hideMenu(t)}},this.handleForceClose=function(){e.setState({forceSubMenuOpen:!1})},this.tryToOpenSubMenu=function(t){e.state.selectedItem&&e.state.selectedItem.type===e.getSubMenuType()&&(t.preventDefault(),e.setState({forceSubMenuOpen:!0}))},this.selectChildren=function(t){var n=e.state.selectedItem,r=[],i=0,s={};if(o.Children.forEach(e.props.children,(function t(n,u){n&&([j,e.getSubMenuType()].indexOf(n.type)<0?o.Children.forEach(n.props.children,t):n.props.divider||(n.props.disabled&&(++i,s[u]=!0),r.push(n)))})),i!==r.length){var u=function(e){var n=e;do{t?--n:++n,n<0?n=r.length-1:n>=r.length&&(n=0)}while(n!==e&&s[n]);return n===e?null:n}(r.indexOf(n));null!==u&&e.setState({selectedItem:r[u],forceSubMenuOpen:!1})}},this.onChildMouseMove=function(t){e.state.selectedItem!==t&&e.setState({selectedItem:t,forceSubMenuOpen:!1})},this.onChildMouseLeave=function(){e.setState({selectedItem:null,forceSubMenuOpen:!1})},this.renderChildren=function(t){return o.Children.map(t,(function(t){var n={};return o.isValidElement(t)?[j,e.getSubMenuType()].indexOf(t.type)<0?(n.children=e.renderChildren(t.props.children),o.cloneElement(t,n)):(n.onMouseLeave=e.onChildMouseLeave.bind(e),t.type===e.getSubMenuType()&&(n.forceOpen=e.state.forceSubMenuOpen&&e.state.selectedItem===t,n.forceClose=e.handleForceClose,n.parentKeyNavigationHandler=e.handleKeyNavigation),t.props.divider||e.state.selectedItem!==t?(n.onMouseMove=function(){return e.onChildMouseMove(t)},o.cloneElement(t,n)):(n.selected=!0,n.ref=function(t){e.seletedItemRef=t},o.cloneElement(t,n))):t}))}};const I=_;var N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getMenuPosition=function(){var e=window,t=e.innerWidth,o=e.innerHeight,r=n.subMenu.getBoundingClientRect(),i={};return r.bottom>o?i.bottom=0:i.top=0,r.right<t?i.left="100%":i.right="100%",i},n.getRTLMenuPosition=function(){var e=window.innerHeight,t=n.subMenu.getBoundingClientRect(),o={};return t.bottom>e?o.bottom=0:o.top=0,t.left<0?o.left="100%":o.right="100%",o},n.hideSubMenu=function(e){e.detail&&e.detail.id&&n.menu&&e.detail.id!==n.menu.id||(n.props.forceOpen&&n.props.forceClose(),n.setState({visible:!1,selectedItem:null}),n.unregisterHandlers())},n.handleClick=function(e){e.preventDefault(),n.props.disabled||(c(n.props.onClick,e,l()({},n.props.data,m.data),m.target),n.props.onClick&&!n.props.preventCloseOnClick&&C())},n.handleMouseEnter=function(){n.closetimer&&clearTimeout(n.closetimer),n.props.disabled||n.state.visible||(n.opentimer=setTimeout((function(){return n.setState({visible:!0,selectedItem:null})}),n.props.hoverDelay))},n.handleMouseLeave=function(){n.opentimer&&clearTimeout(n.opentimer),n.state.visible&&(n.closetimer=setTimeout((function(){return n.setState({visible:!1,selectedItem:null})}),n.props.hoverDelay))},n.menuRef=function(e){n.menu=e},n.subMenuRef=function(e){n.subMenu=e},n.registerHandlers=function(){document.removeEventListener("keydown",n.props.parentKeyNavigationHandler),document.addEventListener("keydown",n.handleKeyNavigation)},n.unregisterHandlers=function(e){document.removeEventListener("keydown",n.handleKeyNavigation),e||document.addEventListener("keydown",n.props.parentKeyNavigationHandler)},n.state=l()({},n.state,{visible:!1}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),R(t,[{key:"componentDidMount",value:function(){this.listenId=E.register((function(){}),this.hideSubMenu)}},{key:"getSubMenuType",value:function(){return t}},{key:"shouldComponentUpdate",value:function(e,t){return this.isVisibilityChange=!(this.state.visible===t.visible&&this.props.forceOpen===e.forceOpen||this.state.visible&&e.forceOpen||this.props.forceOpen&&t.visible),!0}},{key:"componentDidUpdate",value:function(){var e=this;this.isVisibilityChange&&(this.props.forceOpen||this.state.visible?(window.requestAnimationFrame||setTimeout)((function(){var t=e.props.rtl?e.getRTLMenuPosition():e.getMenuPosition();e.subMenu.style.removeProperty("top"),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("left"),e.subMenu.style.removeProperty("right"),d(t,"top")&&(e.subMenu.style.top=t.top),d(t,"left")&&(e.subMenu.style.left=t.left),d(t,"bottom")&&(e.subMenu.style.bottom=t.bottom),d(t,"right")&&(e.subMenu.style.right=t.right),e.subMenu.classList.add(f),e.registerHandlers(),e.setState({selectedItem:null})})):(this.subMenu.addEventListener("transitionend",(function t(){e.subMenu.removeEventListener("transitionend",t),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("right"),e.subMenu.style.top=0,e.subMenu.style.left="100%",e.unregisterHandlers()})),this.subMenu.classList.remove(f)))}},{key:"componentWillUnmount",value:function(){this.listenId&&E.unregister(this.listenId),this.opentimer&&clearTimeout(this.opentimer),this.closetimer&&clearTimeout(this.closetimer),this.unregisterHandlers(!0)}},{key:"render",value:function(){var e,t=this.props,n=t.children,r=t.attributes,i=t.disabled,s=t.title,a=t.selected,l=this.state.visible,c={ref:this.menuRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:u()(h,"react-contextmenu-submenu",r.listClassName),style:{position:"relative"}},d={className:u()(h,r.className,(e={},D(e,u()(b,r.disabledClassName),i),D(e,u()("react-contextmenu-item--active",r.visibleClassName),l),D(e,u()(v,r.selectedClassName),a),e)),onMouseMove:this.props.onMouseMove,onMouseOut:this.props.onMouseOut,onClick:this.handleClick},f={ref:this.subMenuRef,style:{position:"absolute",transition:"opacity 1ms",top:0,left:"100%"},className:u()(p,this.props.className)};return o.createElement("nav",N({},c,{role:"menuitem",tabIndex:"-1","aria-haspopup":"true"}),o.createElement("div",N({},r,d),s),o.createElement("nav",N({},f,{role:"menu",tabIndex:"-1"}),this.renderChildren(n)))}}]),t}(I);A.propTypes={children:i().node.isRequired,attributes:i().object,title:i().node.isRequired,className:i().string,disabled:i().bool,hoverDelay:i().number,rtl:i().bool,selected:i().bool,onMouseMove:i().func,onMouseOut:i().func,forceOpen:i().bool,forceClose:i().func,parentKeyNavigationHandler:i().func},A.defaultProps={disabled:!1,hoverDelay:500,attributes:{},className:"",rtl:!1,selected:!1,onMouseMove:function(){return null},onMouseOut:function(){return null},forceOpen:!1,forceClose:function(){return null},parentKeyNavigationHandler:function(){return null}};const K=A;var V=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),U=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.registerHandlers=function(){document.addEventListener("mousedown",n.handleOutsideClick),document.addEventListener("touchstart",n.handleOutsideClick),n.props.preventHideOnScroll||document.addEventListener("scroll",n.handleHide),n.props.preventHideOnContextMenu||document.addEventListener("contextmenu",n.handleHide),document.addEventListener("keydown",n.handleKeyNavigation),n.props.preventHideOnResize||window.addEventListener("resize",n.handleHide)},n.unregisterHandlers=function(){document.removeEventListener("mousedown",n.handleOutsideClick),document.removeEventListener("touchstart",n.handleOutsideClick),document.removeEventListener("scroll",n.handleHide),document.removeEventListener("contextmenu",n.handleHide),document.removeEventListener("keydown",n.handleKeyNavigation),window.removeEventListener("resize",n.handleHide)},n.handleShow=function(e){if(e.detail.id===n.props.id&&!n.state.isVisible){var t=e.detail.position,o=t.x,r=t.y;n.setState({isVisible:!0,x:o,y:r}),n.registerHandlers(),c(n.props.onShow,e)}},n.handleHide=function(e){!n.state.isVisible||e.detail&&e.detail.id&&e.detail.id!==n.props.id||(n.unregisterHandlers(),n.setState({isVisible:!1,selectedItem:null,forceSubMenuOpen:!1}),c(n.props.onHide,e))},n.handleOutsideClick=function(e){n.menu.contains(e.target)||C()},n.handleMouseLeave=function(e){e.preventDefault(),c(n.props.onMouseLeave,e,l()({},n.props.data,m.data),m.target),n.props.hideOnLeave&&C()},n.handleContextMenu=function(e){e.preventDefault(),n.handleHide(e)},n.hideMenu=function(e){27!==e.keyCode&&13!==e.keyCode||C()},n.getMenuPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o={top:t,left:e};if(!n.menu)return o;var r=window,i=r.innerWidth,s=r.innerHeight,u=n.menu.getBoundingClientRect();return t+u.height>s&&(o.top-=u.height),e+u.width>i&&(o.left-=u.width),o.top<0&&(o.top=u.height<s?(s-u.height)/2:0),o.left<0&&(o.left=u.width<i?(i-u.width)/2:0),o},n.getRTLMenuPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o={top:t,left:e};if(!n.menu)return o;var r=window,i=r.innerWidth,s=r.innerHeight,u=n.menu.getBoundingClientRect();return o.left=e-u.width,t+u.height>s&&(o.top-=u.height),o.left<0&&(o.left+=u.width),o.top<0&&(o.top=u.height<s?(s-u.height)/2:0),o.left+u.width>i&&(o.left=u.width<i?(i-u.width)/2:0),o},n.menuRef=function(e){n.menu=e},n.state=l()({},n.state,{x:0,y:0,isVisible:!1}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),V(t,[{key:"getSubMenuType",value:function(){return K}},{key:"componentDidMount",value:function(){this.listenId=E.register(this.handleShow,this.handleHide)}},{key:"componentDidUpdate",value:function(){var e=this,t=window.requestAnimationFrame||setTimeout;this.state.isVisible?t((function(){var n=e.state,o=n.x,r=n.y,i=e.props.rtl?e.getRTLMenuPosition(o,r):e.getMenuPosition(o,r),s=i.top,u=i.left;t((function(){e.menu&&(e.menu.style.top=s+"px",e.menu.style.left=u+"px",e.menu.style.opacity=1,e.menu.style.pointerEvents="auto")}))})):t((function(){e.menu&&(e.menu.style.opacity=0,e.menu.style.pointerEvents="none")}))}},{key:"componentWillUnmount",value:function(){this.listenId&&E.unregister(this.listenId),this.unregisterHandlers()}},{key:"render",value:function(){var e,t,n,r=this.props,i=r.children,s=r.className,a=r.style,c=this.state.isVisible,d=l()({},a,{position:"fixed",opacity:0,pointerEvents:"none"}),h=u()(p,s,(n=c,(t=f)in(e={})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return o.createElement("nav",{role:"menu",tabIndex:"-1",ref:this.menuRef,style:d,className:h,onContextMenu:this.handleContextMenu,onMouseLeave:this.handleMouseLeave},this.renderChildren(i))}}]),t}(I);U.propTypes={id:i().string.isRequired,children:i().node.isRequired,data:i().object,className:i().string,hideOnLeave:i().bool,rtl:i().bool,onHide:i().func,onMouseLeave:i().func,onShow:i().func,preventHideOnContextMenu:i().bool,preventHideOnResize:i().bool,preventHideOnScroll:i().bool,style:i().object},U.defaultProps={className:"",data:{},hideOnLeave:!1,rtl:!1,onHide:function(){return null},onMouseLeave:function(){return null},onShow:function(){return null},preventHideOnContextMenu:!1,preventHideOnResize:!1,preventHideOnScroll:!1,style:{}};const q=U;var B=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var z=function(e){function t(){var e,n,o;W(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=o=X(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.touchHandled=!1,o.handleMouseDown=function(e){o.props.holdToDisplay>=0&&0===e.button&&(e.persist(),e.stopPropagation(),o.mouseDownTimeoutId=setTimeout((function(){return o.handleContextClick(e)}),o.props.holdToDisplay)),c(o.props.attributes.onMouseDown,e)},o.handleMouseUp=function(e){0===e.button&&clearTimeout(o.mouseDownTimeoutId),c(o.props.attributes.onMouseUp,e)},o.handleMouseOut=function(e){0===e.button&&clearTimeout(o.mouseDownTimeoutId),c(o.props.attributes.onMouseOut,e)},o.handleTouchstart=function(e){o.touchHandled=!1,o.props.holdToDisplay>=0&&(e.persist(),e.stopPropagation(),o.touchstartTimeoutId=setTimeout((function(){o.handleContextClick(e),o.touchHandled=!0}),o.props.holdToDisplay)),c(o.props.attributes.onTouchStart,e)},o.handleTouchEnd=function(e){o.touchHandled&&e.preventDefault(),clearTimeout(o.touchstartTimeoutId),c(o.props.attributes.onTouchEnd,e)},o.handleContextMenu=function(e){e.button===o.props.mouseButton&&o.handleContextClick(e),c(o.props.attributes.onContextMenu,e)},o.handleMouseClick=function(e){e.button===o.props.mouseButton&&o.handleContextClick(e),c(o.props.attributes.onClick,e)},o.handleContextClick=function(e){if(!(o.props.disable||o.props.disableIfShiftIsPressed&&e.shiftKey)){e.preventDefault(),e.stopPropagation();var t=e.clientX||e.touches&&e.touches[0].pageX,n=e.clientY||e.touches&&e.touches[0].pageY;o.props.posX&&(t-=o.props.posX),o.props.posY&&(n-=o.props.posY),C();var r=c(o.props.collect,o.props),i={position:{x:t,y:n},target:o.elem,id:o.props.id};r&&"function"==typeof r.then?r.then((function(t){i.data=l()({},t,{target:e.target}),O(i)})):(i.data=l()({},r,{target:e.target}),O(i))}},o.elemRef=function(e){o.elem=e},X(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),B(t,[{key:"render",value:function(){var e=this.props,t=e.renderTag,n=e.attributes,r=e.children,i=l()({},n,{className:u()("react-contextmenu-wrapper",n.className),onContextMenu:this.handleContextMenu,onClick:this.handleMouseClick,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onTouchStart:this.handleTouchstart,onTouchEnd:this.handleTouchEnd,onMouseOut:this.handleMouseOut,ref:this.elemRef});return o.createElement(t,i,r)}}]),t}(o.Component);z.propTypes={id:i().string.isRequired,children:i().node.isRequired,attributes:i().object,collect:i().func,disable:i().bool,holdToDisplay:i().number,posX:i().number,posY:i().number,renderTag:i().elementType,mouseButton:i().number,disableIfShiftIsPressed:i().bool},z.defaultProps={attributes:{},collect:function(){return null},disable:!1,holdToDisplay:1e3,renderTag:"div",posX:0,posY:0,mouseButton:2,disableIfShiftIsPressed:!1};const Y=z;Object.assign,[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Object.keys(Y.propTypes)),["children"])}}]);
//# sourceMappingURL=ebb1dba72dba01c647aa.js.map