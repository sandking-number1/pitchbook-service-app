webpackJsonp([0],{

/***/ "./client/actions/offices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__ = __webpack_require__("./client/constants/AppConstants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__("./client/api/index.js");



/* harmony default export */ __webpack_exports__["a"] = {
  getAllOffices: function getAllOffices() {
    return function (dispatch) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__["a" /* default */].GET_OFFICES_REQUEST
      });

      __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getAllOffices().then(function (data) {
        console.log(data);
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__["a" /* default */].GET_OFFICES_SUCCESS,
          payload: {
            items: data
          }
        });
      }).catch(function (err) {
        dispatch({
          type: __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__["a" /* default */].GET_OFFICES_FAIL
        });

        dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__["a" /* default */].ADD_ERROR, error: err });
      });
    };
  }
};

/***/ }),

/***/ "./client/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./client/config/index.js");



/* harmony default export */ __webpack_exports__["a"] = {
  getAllOffices: function getAllOffices() {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('' + __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].host + __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].api.offices.getAll).then(function (response) {
        if (response.data.status) {
          resolve(response.data.offices);
        } else {
          reject(response.description);
        }
      }).catch(function (error) {
        return reject(error);
      });
    });
  }
};

/***/ }),

/***/ "./client/components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_less__ = __webpack_require__("./client/components/Header.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_less__);




var Header = function Header(props) {
  function handlerOffCanvasLeft() {
    document.querySelector('.row-offcanvas-left').classList.toggle('active');
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"],
    { collapseOnSelect: true, fluid: true, className: 'header' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Header,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'pull-left visible-xs' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          {
            id: 'offcanvasleft',
            className: 'btn btn-xs',
            type: 'button',
            'data-toggle': 'offcanvasleft',
            onClick: handlerOffCanvasLeft
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'glyphicon glyphicon-chevron-left' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Brand,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: '/' },
          'Pitchbook'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Toggle, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Collapse,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 1, href: '#' },
          'Profile Editor'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"],
        { pullRight: true },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 2, href: '#' },
          'Contact'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 3, href: '#' },
          'FAQs'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 4, href: '#' },
          'Save and Exit'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = Header;

/***/ }),

/***/ "./client/components/Header.less":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Header.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Header.less", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Header.less");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/components/Offices/OfficeCard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OfficeCard_less__ = __webpack_require__("./client/components/Offices/OfficeCard.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OfficeCard_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__OfficeCard_less__);





var OfficeCard = function OfficeCard(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'office' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Grid"],
      { fluid: true },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"],
          { xs: 12, sm: 12, md: 5, lg: 4, className: 'no-padding-left no-padding-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'dl',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dt',
              { className: 'col-sm-4' },
              'Address:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dd',
              { className: 'col-sm-8' },
              props.office.primary_hq ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'office__primary-hq' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'glyphicon glyphicon-ok' }),
                '\xA0Primary HQ'
              ) : null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                props.office.address_1
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                props.office.address_1
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                props.office.city,
                ', ',
                props.office.state,
                ' ',
                props.office.postal_code
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                props.office.country
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"],
          { xs: 12, sm: 12, md: 5, lg: 4, className: 'no-padding-left no-padding-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'dl',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dt',
              { className: 'col-sm-4' },
              'Phone:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dd',
              { className: 'col-sm-8' },
              props.office.phone
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dt',
              { className: 'col-sm-4' },
              'Fax:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dd',
              { className: 'col-sm-8' },
              props.office.fax
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dt',
              { className: 'col-sm-4' },
              'Email:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dd',
              { className: 'col-sm-8' },
              props.office.email
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"],
          { xs: 12, sm: 12, md: 2, lg: 4, className: 'no-padding-left no-padding-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'office__actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
              { className: 'btn-default--officeCard btn-default--small' },
              'Remove'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
              { bsStyle: 'primary', className: 'btn-primary--officeCard btn-default--small' },
              'Edit'
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = OfficeCard;

/***/ }),

/***/ "./client/components/Offices/OfficeCard.less":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Offices/OfficeCard.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Offices/OfficeCard.less", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Offices/OfficeCard.less");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/components/Offices/Offices.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_getUniqueID__ = __webpack_require__("./client/utils/getUniqueID.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OfficeCard_jsx__ = __webpack_require__("./client/components/Offices/OfficeCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Offices_less__ = __webpack_require__("./client/components/Offices/Offices.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Offices_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Offices_less__);







var Offices = function Offices(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'offices' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Grid"],
      { fluid: true },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"],
          { xs: 12, sm: 12, md: 12, lg: 10, className: 'no-padding-left no-padding-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: 'offices__header' },
            'Offices ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'offices__header--grey' },
              '| Company Info'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'offices_description' },
            'Updating your location and contact informationhelps you appeal to regional investorsand service providers'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { className: 'dotted' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'clearfix' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'offices__add-action' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
                { className: 'btn-default btn-default--bold' },
                'Add New Office'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'offices__amount' },
              props.offices.length,
              props.offices.length === 1 ? ' Office' : ' Offices'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'offices__items' },
            props.offices.map(function (office) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__OfficeCard_jsx__["a" /* default */], {
                key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_getUniqueID__["a" /* default */])(),
                office: office
              });
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { className: 'dotted' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'offices__actions clearfix' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
              { className: 'offices__back btn-default btn-default--bold btn-default--strong pull-left' },
              'Back'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
              { className: 'offices__continue btn-primary btn-primary--offices-continue pull-right' },
              'Continue'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
              { className: 'offices__skip btn-default btn-default--bold btn-default--strong pull-right' },
              'Skip this step'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'offices__provide-comments pull-left' },
              'Provide additional comments'
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = Offices;

/***/ }),

/***/ "./client/components/Offices/Offices.less":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Offices/Offices.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Offices/Offices.less", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Offices/Offices.less");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/components/Sidebar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sidebar_less__ = __webpack_require__("./client/components/Sidebar.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sidebar_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Sidebar_less__);





var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"],
    { id: 'sidebarLeft', className: 'sidebar sidebar-offcanvas', role: 'navigation' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sidebar__logo' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Header,
      null,
      'Company Info'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"],
        { className: 'sidebar__common-nav' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 1, href: '#' },
          'Basic info \xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'glyphicon glyphicon-ok' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 2, href: '#/offices', className: 'active' },
          'Offices'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 3, href: '#' },
          'Competitors'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"],
        { className: 'sidebar__company-nav' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 4, href: '#' },
          'My Firm'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 5, href: '#' },
          'Deals'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
          { eventKey: 6, href: '#' },
          'Financials'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = Header;

/***/ }),

/***/ "./client/components/Sidebar.less":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Sidebar.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Sidebar.less", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Sidebar.less");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
  host: 'http://localhost:3000',
  api: {
    offices: {
      getAll: '/api/offices'
    },
    office: {
      create: '/api/office/create',
      update: '/api/office/update',
      delete: '/api/office/delete'
    }
  }
};

/***/ }),

/***/ "./client/constants/AppConstants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
  GET_OFFICES_REQUEST: 'GET_OFFICES_REQUEST',
  GET_OFFICES_SUCCESS: 'GET_OFFICES_SUCCESS',
  GET_OFFICES_FAIL: 'GET_OFFICES_FAIL',
  ADD_ERROR: 'ADD_ERROR',
  REMOVE_ERROR: 'REMOVE_ERROR'
};

/***/ }),

/***/ "./client/containers/App.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./client/components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Sidebar__ = __webpack_require__("./client/components/Sidebar.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Grid"],
          { fluid: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Row"],
            { className: 'show-grid app-grid row-offcanvas row-offcanvas-left' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Row"],
              { className: 'row-offcanvas row-offcanvas-right' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"],
                {
                  xs: 4, sm: 2,
                  className: 'no-padding-left no-padding-right app-grid__sidebar'
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Sidebar__["a" /* default */], null)
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"],
                { xs: 11, sm: 8, className: 'app-grid__content' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  null,
                  this.props.children
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = App;

/***/ }),

/***/ "./client/containers/Offices.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Offices_Offices__ = __webpack_require__("./client/components/Offices/Offices.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_offices__ = __webpack_require__("./client/actions/offices.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var OfficesContainer = function (_React$Component) {
  _inherits(OfficesContainer, _React$Component);

  function OfficesContainer() {
    _classCallCheck(this, OfficesContainer);

    return _possibleConstructorReturn(this, (OfficesContainer.__proto__ || Object.getPrototypeOf(OfficesContainer)).apply(this, arguments));
  }

  _createClass(OfficesContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.actions.getAllOffices();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Offices_Offices__["a" /* default */], {
        offices: this.props.offices
      });
    }
  }]);

  return OfficesContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function mapStateToProps(state, ownProps) {
  var offices = state.offices,
      errors = state.errors;


  return {
    offices: offices.items,
    errors: errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__actions_offices__["a" /* default */], dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(OfficesContainer);

/***/ }),

/***/ "./client/img/add-icon.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "add-icon.jpg";

/***/ }),

/***/ "./client/img/logo-2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo-2.png";

/***/ }),

/***/ "./client/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__("./node_modules/react-router-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__ = __webpack_require__("./node_modules/react-tap-event-plugin/src/injectTapEventPlugin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_configureStore__ = __webpack_require__("./client/store/configureStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_App__ = __webpack_require__("./client/containers/App.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_Offices__ = __webpack_require__("./client/containers/Offices.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_main_less__ = __webpack_require__("./client/styles/main.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_main_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_main_less__);













__WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default()();
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__store_configureStore__["a" /* default */])();

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
  { store: store },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_router__["Router"],
    { history: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__["syncHistoryWithStore"])(__WEBPACK_IMPORTED_MODULE_3_react_router__["hashHistory"], store) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_router__["Route"],
      { path: '/', component: __WEBPACK_IMPORTED_MODULE_7__containers_App__["a" /* default */] },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router__["IndexRedirect"], { to: 'offices' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router__["Route"], { path: '/offices', component: __WEBPACK_IMPORTED_MODULE_8__containers_Offices__["a" /* default */] })
    )
  )
), document.getElementById('main'));

/***/ }),

/***/ "./client/reducers/errors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__ = __webpack_require__("./client/constants/AppConstants.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = errors;


function errors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {

    case __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__["a" /* default */].ADD_ERROR:
      return state.concat([action.error]);

    case __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__["a" /* default */].REMOVE_ERROR:
      return state.filter(function (error, i) {
        return i !== action.index;
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__("./node_modules/react-router-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offices__ = __webpack_require__("./client/reducers/offices.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors__ = __webpack_require__("./client/reducers/errors.js");





/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  routing: __WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerReducer"],
  offices: __WEBPACK_IMPORTED_MODULE_2__offices__["a" /* default */],
  errors: __WEBPACK_IMPORTED_MODULE_3__errors__["a" /* default */]
});

/***/ }),

/***/ "./client/reducers/offices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__ = __webpack_require__("./client/constants/AppConstants.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = projects;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var initialState = {
  items: []
};

function projects() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__["a" /* default */].GET_OFFICES_SUCCESS:
      return _extends({}, state, action.payload);

    case __WEBPACK_IMPORTED_MODULE_0__constants_AppConstants__["a" /* default */].GET_OFFICES_FAIL:
      return _extends({}, state, { items: [] });

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/store/configureStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("./client/reducers/index.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;




function configureStore() {
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a))(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */]);

  return store;
}

/***/ }),

/***/ "./client/styles/main.less":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/styles/main.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/styles/main.less", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/styles/main.less");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/utils/getUniqueID.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lastId = 0;

/* harmony default export */ __webpack_exports__["a"] = function () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';

  lastId += 1;
  return '' + prefix + lastId;
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Header.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".header {\n  border: none;\n  border-radius: 0;\n  background: #175786;\n}\n.header a {\n  color: #fff !important;\n}\n.header .navbar-toggle {\n  border-color: #f7f8fa;\n}\n.header .navbar-toggle:hover,\n.header .navbar-toggle:focus {\n  background: #054471;\n}\n.header .navbar-toggle .icon-bar {\n  background: #f7f8fa;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Offices/OfficeCard.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".office {\n  padding: 15px;\n  border-radius: 2px;\n  border: 1px solid #d6d6d6;\n  margin-top: 15px;\n}\n.office__primary-hq {\n  font-weight: bold;\n}\n.office__actions {\n  text-align: right;\n}\n.office dl dt {\n  text-align: right;\n}\n@media (max-width: 992px) {\n  .office__actions {\n    text-align: center;\n  }\n}\n@media (max-width: 768px) {\n  .office dl dt {\n    text-align: left;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Offices/Offices.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "/**\n * HR dotted\n * */\n.offices {\n  padding-left: 5%;\n}\n.offices__header {\n  color: #53687e;\n  font-size: 30px;\n  font-weight: normal;\n  padding-top: 20px;\n  padding-bottom: 15px;\n  text-transform: uppercase;\n}\n.offices__header--grey {\n  color: #b9bfc5;\n}\n.offices__add-action {\n  float: left;\n}\n.offices__amount {\n  float: right;\n}\n.offices__actions {\n  margin-bottom: 50px;\n}\n.offices__provide-comments {\n  padding: 8px 0;\n  margin-left: 70px;\n}\n.offices__provide-comments:before {\n  content: '';\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin: 0 5px -2px 0;\n  background: url(" + __webpack_require__("./client/img/add-icon.jpg") + ") no-repeat;\n}\n.offices hr.dotted {\n  border-top: 1px dotted #dcdfe2;\n  margin: 40px 0;\n}\n@media (max-width: 900px) {\n  .offices__provide-comments {\n    float: none !important;\n    margin: 50px 0 0 0;\n  }\n}\n@media (max-width: 500px) {\n  .offices__skip {\n    float: left !important;\n    clear: left;\n  }\n  .offices__back {\n    margin: 0 5px 5px 0;\n  }\n  .offices__provide-comments {\n    margin: 90px 0 0 0;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/components/Sidebar.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".sidebar {\n  border-radius: 2px;\n  border: none;\n  background-color: transparent;\n}\n.sidebar__logo {\n  width: 100%;\n  height: 140px;\n  background: url(" + __webpack_require__("./client/img/logo-2.png") + ") no-repeat center center #175786;\n}\n.sidebar .navbar-header {\n  color: #596d83;\n  width: 100%;\n  padding: 15px;\n  text-transform: uppercase;\n}\n.sidebar .navbar-default {\n  border: none;\n}\n.sidebar .navbar-nav li a:hover {\n  color: #4b5767 !important;\n}\n.sidebar__common-nav li a {\n  display: inline-block;\n  color: #8c96a3;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.sidebar__common-nav li.active a {\n  position: relative;\n  color: #4b5767 !important;\n  font-weight: bold;\n  background-color: transparent !important;\n}\n.sidebar__common-nav li.active a:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 2px;\n  height: 100%;\n  background: #2888d1;\n}\n.sidebar__company-nav {\n  margin-top: 10px;\n}\n.sidebar__company-nav li a {\n  color: #596d83;\n  text-transform: uppercase;\n  border-bottom: 1px solid #d8dde3;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.sidebar__company-nav li:first-child {\n  border-top: 1px solid #d8dde3;\n}\n@media (min-width: 768px) {\n  .sidebar .navbar-header .navbar-brand {\n    float: none;\n    display: block;\n    text-align: center;\n    margin: 0 auto;\n  }\n  .sidebar .container {\n    width: auto;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .sidebar .navbar-default {\n    padding: 0;\n    max-height: none;\n    background-color: transparent;\n  }\n  .sidebar ul {\n    float: none;\n    display: block;\n  }\n  .sidebar ul li {\n    float: none;\n    display: block;\n  }\n}\n@media (max-width: 560px) {\n  .sidebar__logo {\n    background-size: 70%;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./client/styles/main.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "/**\n * HR dotted\n * */\n/**\n * Main\n * */\nbody {\n  color: #5e7287;\n  background: #f7f8fa;\n}\n.no-padding-left {\n  padding-left: 0 !important;\n}\n.no-padding-right {\n  padding-right: 0 !important;\n}\n/**\n * Main Grid\n * */\n.app-grid {\n  padding: 2px;\n  background: #fff;\n  margin-left: 0;\n  margin-right: 0;\n}\n.app-grid__sidebar {\n  background: #e9eff5;\n}\n.app-grid .row-offcanvas {\n  display: -ms-flex;\n  display: -webkit-flex;\n  display: flex;\n}\n/**\n * Buttons\n * */\n.btn-default {\n  color: #566d86;\n  border-radius: 2px;\n  border: 1px solid #d6d6d6;\n}\n.btn-default:hover,\n.btn-default:focus,\n.btn-default:active {\n  background-color: #ffffff;\n}\n.btn-default--bold {\n  font-weight: bold;\n}\n.btn-default--small {\n  padding: 2px 15px;\n}\n.btn-default--officeCard {\n  vertical-align: top;\n  margin: 0 0 5px 0;\n}\n.btn-default--strong {\n  border: 1px solid #566d86;\n}\n.btn-default--strong:hover,\n.btn-default--strong:focus,\n.btn-default--strong:active {\n  border: 1px solid #416185;\n}\n.btn-primary {\n  color: #fff;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  background: #2888d1;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active {\n  color: #fff;\n  background: #1b7dc7;\n}\n.btn-primary--small {\n  padding: 2px 15px;\n}\n.btn-primary--officeCard {\n  font-weight: bold;\n  margin-left: 5px;\n}\n.btn-primary--offices-continue {\n  margin: 0 0 5px 10px;\n}\n@media screen and (max-width: 768px) {\n  .app-grid__sidebar {\n    background: transparent;\n  }\n  .row-offcanvas {\n    display: block !important;\n    position: relative;\n    -webkit-transition: all 0.4s ease-out;\n    -moz-transition: all 0.4s ease-out;\n    transition: all 0.4s ease-out;\n  }\n  .row-offcanvas-left #sidebarLeft {\n    left: -90%;\n  }\n  .row-offcanvas-left.active {\n    left: 30%;\n  }\n  .sidebar-offcanvas {\n    position: absolute;\n    z-index: 200;\n    top: 0;\n    width: 90%;\n    margin-left: 10px;\n  }\n  #offcanvasleft,\n  #offcanvasright {\n    margin-top: 10px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .row-offcanvas-left #sidebarLeft {\n    left: -120%;\n  }\n  .row-offcanvas-left.active {\n    left: 40%;\n  }\n  .sidebar-offcanvas {\n    width: 120%;\n  }\n}\n@media screen and (max-width: 420px) {\n  .row-offcanvas-left #sidebarLeft {\n    left: -150%;\n  }\n  .row-offcanvas-left.active {\n    left: 50%;\n  }\n  .sidebar-offcanvas {\n    width: 150%;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })

},["./client/main.js"]);