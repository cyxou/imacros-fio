'use strict';

/* global imns */

module.exports = {
  read: read,
  readToArray: readToArray,
  write: write,
  append: append
};

function read(fileName) {
  var file = imns.Pref.getFilePref('defdatapath');
  file.append(fileName);
  try {
    return imns.FIO.readTextFile(file).replace(/\uFEFF/g, '');
  } catch (e) {
    window.console.log('The file ' + fileName + ' does not exist in the iMacros\' Datasources folder');
    return null;
  }
}

function readToArray(fileName) {
  return read(fileName).split('\n')
    .filter(function(item){ return item !== ''; });
}

function write(fileName, data) {
  var file = imns.Pref.getFilePref('defdatapath');
  file.append(fileName);
  try {
    return imns.FIO.writeTextFile(file, data);
  } catch (e) {
    window.console.log('Error trying to create the ' + fileName + ' file in the iMacros\' Datasources folder');
  }
}

function append(fileName, data) {
  var file = imns.Pref.getFilePref('defdatapath');
  file.append(fileName);
  try {
    return imns.FIO.appendTextFile(file, data);
  } catch (e) {
    window.console.log('Error trying to append to the ' + fileName + ' file in the iMacros\' Datasources folder');
  }
}
