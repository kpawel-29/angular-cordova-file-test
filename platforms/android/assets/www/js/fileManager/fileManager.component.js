'use strict';

angular.module('fileTestApp').
	component('fileManager', {
		templateUrl: 'js/fileManager/fileManager.template.html',
		controller: ['$cordovaFile', function FileManagerController($cordovaFile, $cordovaToast) {
			var self = this;
			self.freeSpace = 'xxx space left...';
			self.fileToRead = 'tmp.json';
			self.fileToCreate = 'tmp.json';
			self.fileToRemove = 'tmp.json';
			self.messageToSave = 'angular cordova is awesome!';

			self.checkFreeSpace = function checkFreeSpace() {
				document.addEventListener('deviceready', function () {

					$cordovaFile.getFreeDiskSpace()
				      	.then(function (success) {
			         		self.freeSpace = JSON.stringify(success)/1000000 + ' GB';
				      	}, function (error) {
			          		self.freeSpace = 'error ' + JSON.stringify(error);
		      		})
				});
			};

			self.readFileAsText = function readFileAsText(fileName) {
				document.addEventListener('deviceready', function() {
					// path, fileName
					$cordovaFile.readAsText(cordova.file.dataDirectory, fileName).then(function (success) {
				         self.fileOutput = 'success ' + JSON.stringify(success);
			        }, function (error) {
				         self.fileOutput = 'error ' + JSON.stringify(error);
			        });
				})
			};

			self.createFile = function (fileName) {
				document.addEventListener('deviceready', function () {
					// path, fileName, replace?
					$cordovaFile.createFile(cordova.file.dataDirectory, fileName, true).then(function (success) {
						self.createFileOutput = 'success ' + JSON.stringify(success);
					}, function (error) {
						self.createFileOutput = 'error ' + JSON.stringify(error);
					});
				});
			};

			self.removeFile = function (fileName) {
				document.addEventListener('deviceready', function () {
					// path, fileName
					$cordovaFile.removeFile(cordova.file.dataDirectory, fileName).then(function (success) {
						self.removeFileOutput = 'success ' + JSON.stringify(success);
					}, function (error) {
						self.removeFileOutput = 'error ' + JSON.stringify(error);
					});
				});
			};

			self.writeFile = function (fileName, text) {
				document.addEventListener('deviceready', function () {
					// path, fileName, text, replace?
					$cordovaFile.writeFile(cordova.file.dataDirectory, fileName, text, true).then(function (success) {
						self.writeFileOutput = 'success ' + JSON.stringify(success);
					}, function (error) {
						self.writeFileOutput = 'error ' + JSON.stringify(error);
					});
				});
			};

		}]
	});
