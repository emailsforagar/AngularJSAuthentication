var app = angular.module('demo', []);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});