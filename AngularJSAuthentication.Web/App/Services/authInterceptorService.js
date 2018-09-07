'use strict';
app.factory('authInterceptorService', ['$q', function ($q) {

    var authInterceptorServiceFactory = {};

    var _request = function (config) {

        config.headers = config.headers || {};

        var authData = 'wrongtoken';
        //var authData = 'tafI7E3HtB3O40D0_8ZLYkLaFuawzl-J07h_aG4oq2SoWWaWniLoZmuiZLsR4r_typN7fIoRqQhw5722kwLUXSj77G0wSRBvOu1YbO40oFzp17rT2hZxibO7QreSBP3hWM9kkuFx0acXjXZ0WmIjOiU_ka3HeSN3QC4eKZsdb-7o4vti0M0Y3NFjzODF39DcJz8TBtqF_j1I0tGLDFcI1AF0dfg-D0yhYHa8lvfokhY';
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData;
        }

        return config;
    }

    var _responseError = function (rejection) {
        if (rejection.status === 401) {
            return 'Unauthorized user';
        }
        return $q.reject(rejection);
    }

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
}]);