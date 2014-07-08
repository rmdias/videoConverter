'use strict';

/* Controllers */

function listVideos ($scope, $http) {
    var videos = $http.get('/listVideos');
    videos.success(function(data, status, headers, config) {
        $scope.videos = data;
    });
    videos.error(function(data, status, headers, config) {
        console.log("AJAX failed!");
    });
}